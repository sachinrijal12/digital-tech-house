import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "services",
  "portfolio",
  "contact",
];

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;

        if (window.scrollY >= top) {
          current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}