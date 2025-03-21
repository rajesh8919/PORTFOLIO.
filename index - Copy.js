let menuBtn = document.querySelector("nav img");
let sidebar = document.querySelector("ul");
let home = document.getElementById("home");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    home.classList.toggle("active");
    sidebar.classList.toggle("normal");

    let icon = sidebar.classList.contains("active") ? "icons8-cancel-30.png" : "icons8-menu-50.png";
    menuBtn.setAttribute("src", icon);
});



   

