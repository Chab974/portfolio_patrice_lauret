document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const cursorLight = document.querySelector(".cursor-light");
  const navShell = document.querySelector(".nav-shell");
  const navLinks = document.querySelectorAll(".nav-links a:not(.nav-top-link)");
  const hashLinks = document.querySelectorAll('a[href^="#"]');
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const getAnchorTarget = (hash) => {
    if (!hash || hash === "#" || !hash.startsWith("#")) return null;

    try {
      return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
      return null;
    }
  };

  const syncNavHeight = () => {
    if (!navShell) return;

    const navHeight = Math.ceil(navShell.getBoundingClientRect().height + 20);
    root.style.setProperty("--nav-h", `${navHeight}px`);
  };

  const getScrollBehavior = () =>
    prefersReducedMotion.matches || coarsePointer.matches ? "auto" : "smooth";

  const getAnchorOffset = () => {
    const navHeight = navShell ? navShell.getBoundingClientRect().height : 0;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    if (isMobile) {
      const fixedNavBottom = Math.max(
        navShell ? navShell.getBoundingClientRect().bottom : 0,
        navLinks.length > 0 ? navLinks[0].parentElement.getBoundingClientRect().bottom : 0
      );

      return Math.ceil(fixedNavBottom + 16);
    }

    return Math.ceil(navHeight + 18);
  };

  const scrollToAnchorTarget = (target, behavior = getScrollBehavior()) => {
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  syncNavHeight();
  window.addEventListener("resize", syncNavHeight, { passive: true });

  if (!coarsePointer.matches && !prefersReducedMotion.matches) {
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
  }

  hashLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      const target = getAnchorTarget(hash);
      if (!target) return;

      event.preventDefault();
      scrollToAnchorTarget(target);
      history.pushState(null, "", hash);
    });
  });

  if (window.location.hash) {
    const initialTarget = getAnchorTarget(window.location.hash);
    if (initialTarget) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToAnchorTarget(initialTarget, "auto");
        });
      });
    }
  }

  window.addEventListener("hashchange", () => {
    const target = getAnchorTarget(window.location.hash);
    if (target) {
      scrollToAnchorTarget(target, "auto");
    }
  });

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
