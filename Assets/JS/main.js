
AOS.init();

function showContent() {
    element = document.getElementById("menu-header");
    check = document.getElementById("menu-nav");
    if (check.checked) {
        element.style.display='flex';
    }
    else {
        element.style.display='none';
    }
}
