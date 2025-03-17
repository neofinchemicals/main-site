import React, { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const molecules = [];
    const connections = [];

    // Create molecules/atoms
    for (let i = 0; i < 30; i++) {
      molecules.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        color:
          i % 3 === 0
            ? "#28a745" // green
            : i % 3 === 1
            ? "#60a5fa" // sky blue
            : "#1e3a8a", // dark blue
      });
    }

    // Create random connections between molecules
    for (let i = 0; i < molecules.length; i++) {
      for (let j = i + 1; j < molecules.length; j++) {
        if (Math.random() > 0.85) {
          connections.push({ from: i, to: j });
        }
      }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Fill background
      ctx.fillStyle = "#001f3f";
      ctx.fillRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      connections.forEach((conn) => {
        const from = molecules[conn.from];
        const to = molecules[conn.to];
        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }
      });

      // Update and draw molecules
      molecules.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < 0 || m.x > width) m.vx *= -1;
        if (m.y < 0 || m.y > height) m.vy *= -1;

        // Draw circle
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = m.color;
        ctx.fill();

        // Draw glow effect
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          m.x,
          m.y,
          m.radius,
          m.x,
          m.y,
          m.radius * 2
        );
        gradient.addColorStop(0, m.color + "80");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default CanvasBackground;
