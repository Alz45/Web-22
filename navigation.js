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
    if (!document.body.classList.contains("portfolio-home")) {
        const brand = document.createElement("a");
        brand.className = "menu-brand";
        brand.href = "index.html";
        brand.textContent = "Bella Cucina";
        nav.insertBefore(brand, toggle);
    }

    const bookNow = document.createElement("a");
    bookNow.className = "menu-book-now btn";
    bookNow.href = "problem solving.html#booking";
    bookNow.textContent = "Book Now";
    nav.insertBefore(bookNow, toggle);

    const menuLink = document.createElement("a");
    menuLink.className = "menu-book-now btn";
    menuLink.href = "problem solving.html#menu";
    menuLink.textContent = "Menu";
    nav.insertBefore(menuLink, bookNow);

    nav.classList.add("menu-ready");
});
