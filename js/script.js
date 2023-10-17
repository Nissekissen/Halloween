
window.onload = () => {
    // CHANGE HEADER BACKGROUND ON SCROLL
    document.addEventListener("scroll", e => {

        // Get the #section2 article  elements scroll position
        let articleHeight = document.querySelector("#section2Article").offsetTop;

        if (window.scrollY >= (articleHeight - 89)) {
            document.querySelector("header").style.background = "rgb(19, 17, 16)";
        } else {
            document.querySelector("header").style.backgroundColor = "transparent";
        }
    })

    // TOGGLE MENU
    document.getElementById("menuBtn").addEventListener("click", e => {
        document.querySelector("#menu").classList.toggle("showMenu");
    })

}