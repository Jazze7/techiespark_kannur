// active the navbar
let navbar = $("#home header .right ul li a");
console.log(navbar);
$(document).ready(function () {
    $(navbar).click(function () {
        $(navbar).removeClass("active");
        $(this).addClass("active");

    });
});
// screen scrolling active
window.onscroll = function () {
    let scrollY = window.pageYOffset;
    let sections = $("section")
    sections.map((index, section) => {
        const sectionHeight = section.clientHeight
        const sectionTop = (section.getBoundingClientRect().top + scrollY) - 50;
        const sectionId = section.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            $(navbar).removeClass("active");
            $("#home header .right ul li a[href*=" + sectionId + "]").addClass("active");

        } else {
            $("#nav li a[href*=" + sectionId + "]").removeClass("active");
        }
    })
}

// hamburger button
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".menu").show()
        $(".menu ul").slideToggle("slow")
    });
    $(".menu").click(function () {
        $(".menu").hide()
    });
});

// video playing

let play_button = $("section#home section#spotlight div.right div.button-container")
let video = $("section#home section#spotlight  div.video-player ")
let close = $("section#home section#spotlight div.video-player span")
let video_tag = $("section#home section#spotlight  div.video-player video")
$(document).ready(function () {
    $(play_button).click(function () {
        $(video).show()
    });
    $(close).click(function () {
        $(video).hide()
        $(video_tag).pause()

    })

});

