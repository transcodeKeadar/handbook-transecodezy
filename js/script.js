const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});




//search function

let input=document.getElementById("mySearch");
let search_btn=document.getElementById("search-btn")





search_btn.addEventListener("click",(e)=>{
  e.preventDefault()
  let a=document.createElement("a")
  a.href=`./${input.value}.html`
  window.location.href = `./${input.value}.html`;
})




