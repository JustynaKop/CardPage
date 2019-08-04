
var menuVisible = false;
var hamburgerMode = false;

$(document).ready(function(){
        $(".flex-nav ul").css("display", "flex");
        initializeMenuState();
        refreshMeuVisibility();

        $(window).resize(function() {
            initializeMenuState();
            refreshMeuVisibility();
        })
        $(".hamburger").click(function() {
            if (!hamburgerMode)
                return;
            menuVisible = true;
            $(".flex-nav ul").slideToggle("slow", function() {
                refreshMeuVisibility();
            });
        });
        $(".cross").click(function() {
            if (!hamburgerMode)
                return;
            menuVisible = false;
            $(".flex-nav ul").slideToggle("slow", function() {
                refreshMeuVisibility();
            });
        })
        $(".arrow").on("click", function(){
            $("body, html").animate({
                scrollTop: $(".aboutme").offset().top
            }, 1000)
        }) 
});

function initializeMenuState(){
    hamburgerMode = $(window).width() < 1000;
    menuVisible = !hamburgerMode;
    $(".flex-nav ul").hide();
}

function refreshMeuVisibility()
{   
    if (hamburgerMode) {
        if (menuVisible) {
            $(".cross").show();
            $(".hamburger").hide();
            $("hgroup").hide();
        }
        else {
            $(".cross").hide();
            $(".hamburger").show();
            $("hgroup").show();
        }
    }
    else {
        $(".flex-nav ul").show();
        $("hgroup").show();
        $(".hamburger").hide();
        $(".cross").hide();
    }
}

