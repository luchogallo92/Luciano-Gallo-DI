function showContent() {
        element = document.getElementById("menu-header");
        check = document.getElementById("menu-list");
        if (check.checked) {
            element.style.display='none';
        }
        else {
            element.style.display='block';
        }
    }

