function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggle").querySelector("span");


    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        menuToggle.innerHTML = "&#9776;"; 
    } else {
        sidebar.style.left = "0px";
        menuToggle.innerHTML = "&times";
    }
}


