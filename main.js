 const hamburgerMenu = document.querySelector(".hamburger-menu")
 const clickMenu = document.querySelector(".header-right > a")

 clickMenu.addEventListener("click", function () {
    hamburgerMenu.style.display = "block"
})

const closeIcon = document.querySelector(".close")
closeIcon.addEventListener("click", function () {
    hamburgerMenu.style.display = "none"
})
