/* ============================================================
   MOCKUP 3D (THREE.JS) — "tablet que vira + toques na tela"
   Um único tablet grande, com corpo 3D de verdade (bordas
   arredondadas, espessura, verso com a marca). A cada poucos
   segundos ele dá uma volta completa e, ao terminar, já mostra
   o próximo print. Enquanto está de frente, "toques" acendem
   botões e pictogramas da tela (onda amarela), mostrando o que
   o app faz: tocar pra comunicar.

   Interação: arrastar na horizontal gira o tablet (com inércia);
   clicar/tocar na tela dispara uma onda naquele ponto; os
   indicadores e as setas do teclado trocam de tela.

   O carrossel em CSS continua no HTML por baixo (invisível) —
   se não houver WebGL, ou com "reduzir movimento" ativo, ele
   volta a ser o que aparece. Troque pra 'off' pra desligar.
============================================================ */
(function () {
  const MOCKUP_3D_MODE = 'flip'; // 'flip' | 'off'

  if (typeof THREE === 'undefined') return;
  if (MOCKUP_3D_MODE === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const FRAME_W = 5.6, FRAME_H = 2.68, BODY_DEPTH = 0.12, BEVEL = 0.05, CORNER = 0.3, BEZEL = 0.11;
  const SCREEN_W = FRAME_W - BEZEL * 2, SCREEN_H = FRAME_H - BEZEL * 2;
  const FRONT_Z = BODY_DEPTH / 2 + BEVEL;
  const DISTANCE = 9;
  const TURN = Math.PI * 2;
  const DRAG_SENSITIVITY = 0.01; // rad por pixel
  const AUTO_FLIP_EVERY = 2.2; // s parado de frente antes de virar sozinho
  const FLIP_SPEED = 8; // quanto maior, mais rápida a volta (≈0,7s por volta)
  const RESUME_AFTER_INTERACTION = 4; // s sem mexer até o giro automático voltar
  const TAP_EVERY = 0.8; // s entre um toque automático e outro
  const MAX_RIPPLES = 4;
  const RIPPLE_LIFE = 1.4;

  // Pontos "tocáveis" de cada print, em coordenadas da imagem (0..1, y pra baixo),
  // na mesma ordem dos .mockup-slide do HTML.
  const TAPS = [
    [[0.72, 0.21], [0.72, 0.38], [0.72, 0.555], [0.72, 0.73]], // tela inicial: botões
    [[0.107, 0.325], [0.219, 0.552], [0.33, 0.552], [0.443, 0.552], [0.667, 0.552], [0.795, 0.114]], // prancha: pictogramas + play
    [[0.291, 0.32], [0.708, 0.32], [0.291, 0.685], [0.708, 0.685]], // jogos
    [[0.283, 0.268], [0.717, 0.268], [0.283, 0.484], [0.717, 0.484]], // configurações
    [[0.212, 0.4], [0.565, 0.082], [0.5, 0.397]], // pranchas
    [[0.128, 0.476], [0.447, 0.682], [0.808, 0.246], [0.544, 0.246]] // edição
  ];

  let MAX_ANISOTROPY = 1;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const carousel = document.querySelector('.mockup-carousel');
    const slides = Array.from(document.querySelectorAll('.mockup-slide'));
    const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
    if (!carousel || !slides.length) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (e) {
      return;
    }
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    MAX_ANISOTROPY = renderer.capabilities.getMaxAnisotropy();

    const canvas = renderer.domElement;
    canvas.className = 'mockup-3d-canvas';
    canvas.setAttribute('aria-hidden', 'true'); // os <img> originais (com alt) seguem no HTML
    carousel.appendChild(canvas);
    carousel.classList.add('mockup-3d-replace-active');
    if (carousel.parentElement) carousel.parentElement.classList.add('mockup-3d-no-mask');

    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(3, 4, 6);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xfff1c2, 0.6);
    rimLight.position.set(-4, 1, -5);
    scene.add(rimLight);

    const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 50);
    camera.position.set(0, 0, DISTANCE);

    const effect = setupFlip(scene, camera, canvas, slides, indicators);

    function resize() {
      const w = carousel.clientWidth;
      const h = carousel.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      // Composição de tamanho fixo (tablet + sombra) cabendo inteira no quadro,
      // qualquer que seja a proporção da caixa (desktop largo, celular, etc.).
      fitPerspectiveCamera(camera, w, h, FRAME_W / 2 + 0.15, FRAME_H / 2 + 0.22, DISTANCE, 1.04);
    }
    new ResizeObserver(resize).observe(carousel);
    resize();

    const clock = new THREE.Clock();
    let raf = null;
    function frame() {
      effect.tick(Math.min(clock.getDelta(), 0.05), clock.elapsedTime);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    function play() { if (raf === null) { clock.getDelta(); frame(); } }
    function pause() { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } }
    new IntersectionObserver(entries => {
      entries.forEach(entry => (entry.isIntersecting ? play() : pause()));
    }, { threshold: 0.05 }).observe(carousel);
  }

  function fitPerspectiveCamera(camera, w, h, halfWidth, halfHeight, distance, margin) {
    const aspect = Math.max(w / h, 0.0001);
    const effectiveHalfHeight = Math.max(halfHeight, halfWidth / aspect) * margin;
    camera.fov = (2 * Math.atan(effectiveHalfHeight / distance) * 180) / Math.PI;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }

  function setupFlip(scene, camera, canvas, slides, indicators) {
    const N = slides.length;

    /* ---------- Corpo do tablet ---------- */
    const tablet = new THREE.Group();
    tablet.position.y = 0.06;
    scene.add(tablet);

    const body = new THREE.Mesh(
      new THREE.ExtrudeGeometry(roundedRectShape(FRAME_W - BEVEL * 2, FRAME_H - BEVEL * 2, CORNER - BEVEL), {
        depth: BODY_DEPTH,
        bevelEnabled: true,
        bevelThickness: BEVEL,
        bevelSize: BEVEL,
        bevelSegments: 4,
        curveSegments: 12
      }),
      new THREE.MeshStandardMaterial({ color: 0x1d1d1f, roughness: 0.45, metalness: 0.35 })
    );
    body.geometry.center();
    tablet.add(body);

    // Verso: marca Autkids + "câmera", pra quando o tablet vira.
    const logo = new THREE.Mesh(
      new THREE.PlaneGeometry(FRAME_H * 0.42, FRAME_H * 0.42),
      new THREE.MeshBasicMaterial({
        map: loadTexture('assets/logos/AutKidsLogoMarcaBranca.png'),
        transparent: true,
        opacity: 0.9
      })
    );
    logo.position.z = -FRONT_Z - 0.003;
    logo.rotation.y = Math.PI;
    tablet.add(logo);

    const lens = new THREE.Mesh(
      new THREE.CircleGeometry(0.1, 32),
      new THREE.MeshStandardMaterial({ color: 0x0b0b0c, roughness: 0.2, metalness: 0.6 })
    );
    lens.position.set(FRAME_W / 2 - 0.4, FRAME_H / 2 - 0.4, -FRONT_Z - 0.004);
    lens.rotation.y = Math.PI;
    tablet.add(lens);

    /* ---------- Tela (com as ondas de toque num shader) ---------- */
    const screenTextures = slides.map(() => null);
    const ripples = Array.from({ length: MAX_RIPPLES }, () => new THREE.Vector3(0, 0, -100));
    const screenMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uMap: { value: null },
        uTime: { value: 0 },
        uAspect: { value: SCREEN_W / SCREEN_H },
        uTint: { value: new THREE.Color(0xffc300) },
        uRipples: { value: ripples }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        uniform float uTime;
        uniform float uAspect;
        uniform vec3 uTint;
        uniform vec3 uRipples[${MAX_RIPPLES}];
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float glow = 0.0;
          for (int i = 0; i < ${MAX_RIPPLES}; i++) {
            vec3 r = uRipples[i];
            float t = uTime - r.z;
            if (t < 0.0 || t > ${RIPPLE_LIFE.toFixed(2)}) continue;
            vec2 d = vUv - r.xy;
            d.x *= uAspect;
            float dist = length(d);
            float fade = 1.0 - t / ${RIPPLE_LIFE.toFixed(2)};
            float ring = exp(-pow((dist - t * 0.32) * 17.0, 2.0)) * fade;
            vec2 dir = dist > 0.0001 ? d / dist : vec2(0.0);
            dir.x /= uAspect;
            uv -= dir * ring * 0.014;
            float press = exp(-pow(dist * 11.0, 2.0)) * exp(-t * 3.5);
            glow += ring * 0.7 + press * 0.65;
          }
          vec4 color = texture2D(uMap, uv);
          color.rgb = mix(color.rgb, uTint, clamp(glow, 0.0, 1.0) * 0.6);
          gl_FragColor = color;
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `
    });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(SCREEN_W, SCREEN_H), screenMat);
    screen.position.z = FRONT_Z + 0.003;
    screen.visible = false;
    tablet.add(screen);

    slides.forEach((slide, i) => {
      const img = slide.querySelector('img.tablet-print');
      if (!img) return;
      const build = () => {
        const h = Math.round((1024 * SCREEN_H) / SCREEN_W);
        const tex = new THREE.CanvasTexture(
          roundedCanvas(1024, h, 22, ctx => {
            const scale = Math.max(1024 / img.naturalWidth, h / img.naturalHeight);
            const iw = img.naturalWidth * scale, ih = img.naturalHeight * scale;
            ctx.drawImage(img, (1024 - iw) / 2, (h - ih) / 2, iw, ih);
          })
        );
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = MAX_ANISOTROPY;
        screenTextures[i] = tex;
      };
      if (img.complete && img.naturalWidth) build();
      else img.addEventListener('load', build, { once: true });
    });

    /* ---------- Sombra suave embaixo ---------- */
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(FRAME_W * 0.95, 0.42),
      new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false })
    );
    shadow.position.set(0, -FRAME_H / 2 - 0.02, -0.6);
    scene.add(shadow);

    /* ---------- Estado: giro, inércia, auto-play, toques ---------- */
    let rotY = 0; // giro acumulado; cada volta completa = uma tela
    let velY = 0;
    let snapTarget = null;
    let tilt = 0, tiltTarget = 0;
    let dragging = false, dragMoved = 0;
    let lastX = 0, lastY = 0, startY = 0, lastT = 0;
    let idle = 0; // tempo parado de frente, conta pro giro automático
    let lastInteraction = -Infinity;
    let tapTimer = 0.6, tapCursor = 0, rippleCursor = 0;
    let shownIndex = -1;
    let now = 0;
    let sway = 1;

    const mod = (a, n) => ((a % n) + n) % n;
    const turnsNow = () => Math.round(-rotY / TURN);
    const indexNow = () => mod(turnsNow(), N);
    const snapToNearest = () => { snapTarget = -turnsNow() * TURN; };

    function goBy(steps) {
      const base = snapTarget !== null ? snapTarget : -turnsNow() * TURN;
      snapTarget = base - steps * TURN;
      velY = 0;
      idle = 0;
    }

    function addRipple(u, v) {
      ripples[rippleCursor].set(u, v, now);
      rippleCursor = (rippleCursor + 1) % MAX_RIPPLES;
    }

    function markInteraction() { lastInteraction = now; idle = 0; }

    canvas.addEventListener('pointerdown', e => {
      dragging = true;
      dragMoved = 0;
      snapTarget = null;
      velY = 0;
      lastX = e.clientX;
      lastY = startY = e.clientY;
      lastT = performance.now();
      canvas.setPointerCapture(e.pointerId);
      canvas.classList.add('is-dragging');
      markInteraction();
    });
    canvas.addEventListener('pointermove', e => {
      if (!dragging) return;
      const t = performance.now();
      const dx = e.clientX - lastX;
      const dt = Math.max(1, t - lastT);
      dragMoved += Math.abs(dx) + Math.abs(e.clientY - lastY);
      rotY += dx * DRAG_SENSITIVITY;
      velY = ((dx * DRAG_SENSITIVITY) / dt) * 1000;
      tiltTarget = THREE.MathUtils.clamp((e.clientY - startY) * 0.004, -0.35, 0.35);
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = t;
      markInteraction();
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      tiltTarget = 0;
      canvas.classList.remove('is-dragging');
      if (performance.now() - lastT > 80) velY = 0; // segurou parado antes de soltar
      if (Math.abs(velY) < 0.6) snapToNearest();
      markInteraction();
    }
    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    canvas.addEventListener('click', e => {
      if (dragMoved > 6) return; // foi arrasto, não toque
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObject(screen)[0];
      if (hit && hit.uv) addRipple(hit.uv.x, hit.uv.y);
      markInteraction();
    });

    indicators.forEach((ind, i) => ind.addEventListener('click', () => {
      let steps = mod(i - indexNow(), N);
      if (steps > N / 2) steps -= N;
      if (steps) goBy(steps);
      markInteraction();
    }));

    document.addEventListener('keydown', e => {
      const tag = (e.target && e.target.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      if (e.key === 'ArrowRight') { goBy(1); markInteraction(); }
      if (e.key === 'ArrowLeft') { goBy(-1); markInteraction(); }
    });

    return {
      tick(dt, time) {
        now = time;
        screenMat.uniforms.uTime.value = time;

        if (!dragging) {
          if (snapTarget !== null) {
            rotY += (snapTarget - rotY) * (1 - Math.exp(-dt * FLIP_SPEED));
            if (Math.abs(snapTarget - rotY) < 0.0015) { rotY = snapTarget; snapTarget = null; }
          } else if (Math.abs(velY) > 0.6) {
            rotY += velY * dt;
            velY *= Math.exp(-dt * 3);
            if (Math.abs(velY) <= 0.6) snapToNearest();
          } else if (now - lastInteraction > RESUME_AFTER_INTERACTION) {
            idle += dt;
            if (idle > AUTO_FLIP_EVERY) goBy(1);
          }
        }

        // Balanço bem leve quando parado, pra espessura e luz aparecerem.
        const settled = !dragging && snapTarget === null;
        sway += ((settled ? 1 : 0) - sway) * (1 - Math.exp(-dt * 2));
        tilt += (tiltTarget - tilt) * (1 - Math.exp(-dt * 6));
        const visualY = rotY + Math.sin(time * 0.6) * 0.1 * sway;
        const visualX = tilt + Math.sin(time * 0.45) * 0.03 * sway;
        tablet.rotation.set(visualX, visualY, 0);
        // Ao girar, a borda que vem na direção da câmera cresceria e sairia do
        // quadro; recuar o tablet exatamente o quanto ela avançaria mantém
        // essa borda sempre no plano de repouso — nunca corta.
        tablet.position.z = -(FRAME_W / 2) * Math.abs(Math.sin(visualY)) - (FRAME_H / 2) * Math.abs(Math.sin(visualX));

        // Troca de print acontece quando o tablet está de costas (invisível).
        const idx = indexNow();
        if (idx !== shownIndex && screenTextures[idx]) {
          shownIndex = idx;
          screenMat.uniforms.uMap.value = screenTextures[idx];
          screen.visible = true;
          ripples.forEach(r => r.set(0, 0, -100));
          tapCursor = 0;
          tapTimer = 0.35;
        }
        indicators.forEach((ind, i) => ind.classList.toggle('active', i === idx));

        // Toques automáticos só quando a tela está de frente e parada.
        const facing = Math.cos(visualY);
        shadow.scale.x = 0.45 + 0.55 * Math.abs(facing);
        if (settled && facing > 0.9 && screen.visible) {
          tapTimer -= dt;
          if (tapTimer <= 0) {
            const points = TAPS[idx] || [];
            if (points.length) {
              const p = points[tapCursor % points.length];
              addRipple(p[0], 1 - p[1]);
              tapCursor++;
            }
            tapTimer = TAP_EVERY;
          }
        }
      }
    };
  }

  /* ---------- Helpers ---------- */
  function roundedRectShape(w, h, r) {
    const s = new THREE.Shape();
    const x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y);
    s.lineTo(x + w - r, y);
    s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r);
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h);
    s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r);
    s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }

  function roundedCanvas(w, h, r, draw) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.arcTo(w, 0, w, h, r);
    ctx.arcTo(w, h, 0, h, r);
    ctx.arcTo(0, h, 0, 0, r);
    ctx.arcTo(0, 0, w, 0, r);
    ctx.closePath();
    ctx.clip();
    draw(ctx, w, h);
    return c;
  }

  function loadTexture(src) {
    const tex = new THREE.TextureLoader().load(src);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = MAX_ANISOTROPY;
    return tex;
  }

  function shadowTexture() {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(128, 32, 0, 128, 32, 128);
    g.addColorStop(0, 'rgba(120,70,0,0.35)');
    g.addColorStop(1, 'rgba(120,70,0,0)');
    ctx.fillStyle = g;
    ctx.setTransform(1, 0, 0, 0.25, 0, 24);
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }
})();
