document.querySelectorAll(".portfolio-nav").forEach((nav, index) => {
    const menu = nav.querySelector("ul");
    if (!menu) return;

    const menuId = `portfolio-menu-${index + 1}`;
    menu.id = menuId;
    menu.hidden = true;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "menu-toggle";
    toggle.setAttribute("aria-controls", menuId);
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");

    const icon = document.createElement("span");
    icon.className = "menu-toggle-icon";
    icon.setAttribute("aria-hidden", "true");
    toggle.append(icon);
    toggle.append(document.createTextNode("Menu"));

    const brand = document.createElement("a");
    brand.className = "menu-brand";
    brand.href = "index.html";
    brand.textContent = "Bella Cucina";

    const setMenuOpen = (isOpen) => {
        menu.hidden = !isOpen;
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    };

    toggle.addEventListener("click", () => {
        setMenuOpen(menu.hidden);
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenuOpen(false);
    });

    menu.addEventListener("mouseout", (event) => {
        if (!menu.contains(event.relatedTarget)) setMenuOpen(false);
    });

    nav.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !menu.hidden) {
            setMenuOpen(false);
            toggle.focus();
        }
    });

    nav.insertBefore(toggle, menu);
    nav.insertBefore(brand, toggle);
    nav.classList.add("menu-ready");
});
