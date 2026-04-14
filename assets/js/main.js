document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const cursorLight = document.querySelector(".cursor-light");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  window.addEventListener(
    "pointermove",
    (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      root.style.setProperty("--mx", `${x}%`);
      root.style.setProperty("--my", `${y}%`);

      if (cursorLight) {
        cursorLight.style.opacity = "1";
      }
    },
    { passive: true }
  );

  if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          const link = document.querySelector(`.nav-links a[href="${id}"]`);

          if (!link) return;

          if (entry.isIntersecting) {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-20% 0px -30% 0px",
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
});