function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Targeting <div class="menu-links" element
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}