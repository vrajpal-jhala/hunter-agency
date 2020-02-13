$('.review-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    customPaging: function (slider, i) {
        return '';
    },
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.service-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

function resetVideo(obj, videoId) {
    obj.classList.remove("fa-pause-circle");
    obj.classList.add("fa-play-circle");
    obj.setAttribute("onclick", "playVideo(this, '" + videoId + "')");
}

function playVideo(obj, videoId) {
    document.getElementById(videoId).play();
    obj.classList.remove("fa-play-circle");
    obj.classList.add("fa-pause-circle");
    obj.setAttribute("onclick", "pauseVideo(this, '" + videoId + "')");
    document.getElementById(videoId).onended = function (e) {
        resetVideo(obj, videoId);
    }
}

function pauseVideo(obj, videoId) {
    document.getElementById(videoId).pause();
    resetVideo(obj, videoId);
}

