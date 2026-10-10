/**
 * Parametric Ray Canvas Visualizer
 * Inspired directly by Litho Template Marketplace's `RAY 04/06` hero visualizer
 */

export function initRayCanvas() {
  const container = document.getElementById("hero-ray-container");
  const canvas = document.getElementById("hero-ray-canvas");
  const label = document.getElementById("hero-ray-label");

  if (!canvas || !container) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId;
  let width, height;
  let time = 0;
  let mouse = { x: 0.5, y: 0.5 };

  const MODES = [
    { id: "RAY 01/05", name: "HARMONIC", fn: drawHarmonic },
    { id: "RAY 02/05", name: "VORTEX", fn: drawVortex },
    { id: "RAY 03/05", name: "LATTICE", fn: drawLattice },
    { id: "RAY 04/05", name: "QUANTUM", fn: drawQuantum },
    { id: "RAY 05/05", name: "NEURAL", fn: drawNeural }
  ];

  let currentModeIndex = 3; // Default to Quantum (RAY 04/05) matching Litho's RAY 04/06

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  function getThemeColors() {
    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue("--accent").trim() || "#ff5a36";
    const line = style.getPropertyValue("--line").trim() || "#28282c";
    const bg = style.getPropertyValue("--panel").trim() || "#0b0b0d";
    return { accent, line, bg };
  }

  // Preset 1: Harmonic Sine Wave Rays
  function drawHarmonic(t, colors) {
    const count = 38;
    const centerY = height / 2;
    ctx.lineWidth = 1.2;

    for (let i = 0; i < count; i++) {
      ctx.beginPath();
      const progress = i / count;
      const alpha = 0.15 + 0.7 * Math.sin(progress * Math.PI);
      ctx.strokeStyle = colors.accent;
      ctx.globalAlpha = alpha;

      for (let x = 0; x <= width; x += 6) {
        const normX = x / width;
        const wave1 = Math.sin(normX * 6 + t * 0.03 + progress * 4) * 45;
        const wave2 = Math.cos(normX * 12 - t * 0.02 + progress * 2) * 20;
        const y = centerY + wave1 + wave2 + (progress - 0.5) * 70;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  // Preset 2: Polar Vortex Rays
  function drawVortex(t, colors) {
    const centerX = width / 2;
    const centerY = height / 2;
    const numRays = 48;
    const radiusMax = Math.min(width, height) * 0.65;
    ctx.lineWidth = 1;

    for (let i = 0; i < numRays; i++) {
      const angle = (i / numRays) * Math.PI * 2 + t * 0.015;
      ctx.beginPath();
      ctx.strokeStyle = colors.accent;
      ctx.globalAlpha = 0.2 + 0.6 * Math.abs(Math.sin(angle + t * 0.02));

      ctx.moveTo(centerX, centerY);
      const spiralRadius = radiusMax * (0.3 + 0.7 * Math.sin(angle * 3 + t * 0.03));
      const endX = centerX + Math.cos(angle + spiralRadius * 0.01) * spiralRadius;
      const endY = centerY + Math.sin(angle + spiralRadius * 0.01) * spiralRadius;
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  }

  // Preset 3: Geometric Matrix Lattice
  function drawLattice(t, colors) {
    const step = 26;
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = colors.accent;

    for (let x = step; x < width; x += step) {
      for (let y = step; y < height; y += step) {
        const dist = Math.hypot(x - width / 2, y - height / 2);
        const offset = Math.sin(dist * 0.05 - t * 0.04) * 8;
        const alpha = Math.max(0.08, Math.sin(dist * 0.03 - t * 0.03));

        ctx.globalAlpha = alpha * 0.75;
        ctx.beginPath();
        ctx.arc(x, y + offset, 2, 0, Math.PI * 2);
        ctx.stroke();

        if (x + step < width && Math.random() > 0.4) {
          ctx.beginPath();
          ctx.moveTo(x, y + offset);
          ctx.lineTo(x + step, y + offset);
          ctx.stroke();
        }
      }
    }
  }

  // Preset 4: Quantum Interference Rays (Litho Classic)
  function drawQuantum(t, colors) {
    const lines = 44;
    ctx.lineWidth = 1.2;

    for (let i = 0; i < lines; i++) {
      const p = i / lines;
      ctx.beginPath();
      ctx.strokeStyle = colors.accent;
      ctx.globalAlpha = 0.15 + 0.7 * Math.pow(Math.sin(p * Math.PI), 1.5);

      const startX = 20;
      const startY = height * p;
      ctx.moveTo(startX, startY);

      for (let x = 20; x < width - 20; x += 10) {
        const nx = x / width;
        const curve = Math.sin(nx * 8 + t * 0.035 + p * 6) * 32 * (1 - nx * 0.5);
        const y = startY + curve * Math.sin(t * 0.02 + nx * 4);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  // Preset 5: Neural Vector Field
  function drawNeural(t, colors) {
    const nodes = 32;
    const pts = [];
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = colors.accent;

    for (let i = 0; i < nodes; i++) {
      const angle = (i / nodes) * Math.PI * 2;
      const r = 80 + Math.sin(angle * 4 + t * 0.03) * 35;
      const x = width / 2 + Math.cos(angle + t * 0.01) * (r + 40);
      const y = height / 2 + Math.sin(angle + t * 0.01) * r;
      pts.push({ x, y });

      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 90) {
          ctx.globalAlpha = (1 - d / 90) * 0.45;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    time += 1;
    ctx.clearRect(0, 0, width, height);
    const colors = getThemeColors();

    const mode = MODES[currentModeIndex];
    ctx.save();
    mode.fn(time, colors);
    ctx.restore();

    animationFrameId = requestAnimationFrame(render);
  }

  function updateLabel() {
    if (label) {
      const mode = MODES[currentModeIndex];
      label.textContent = `${mode.id} - ${mode.name}`;
    }
  }

  container.addEventListener("click", () => {
    currentModeIndex = (currentModeIndex + 1) % MODES.length;
    updateLabel();
  });

  window.addEventListener("resize", resize);
  resize();
  updateLabel();
  render();
}
