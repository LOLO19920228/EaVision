//banner輪播
var bannerSrc=new Array();

bannerSrc=("banner01.jpg,banner02.jpg,banner03.jpg").split(",");

var i = 0;

    //每隔一段時間置換圖片
    function changepic() {
        var j = bannerSrc.length;
        //alert(i);
        if (i >= j) {//i超出組數歸零
            i = 0;
        }
            
        var p = document.getElementById("banner");
        p.src = "./images/" + bannerSrc[i];
        i++;
        setTimeout(changepic, 4500);
    }

window.οnlοad=changepic();

$(document).ready(function () {
    // $("a").click(function (e) {
    //     e.preventDefault();
    // });
    //產業應用案例
    $(".applicationsBtn").click(function (e) { 
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });
    
    $('#applicationsBtnLicensePlateRecognition').click(function (e) { 
        $('#applicationsBtnLicensePlateRecognitionContent').removeClass('d-none');
        $('#applicationsBtnLicensePlateRecognitionContent').siblings().addClass('d-none');
    });
    $('#applicationsBtnBehaviorDetection').click(function (e) { 
        $('#applicationsBtnBehaviorDetectionContent').removeClass('d-none');
        $('#applicationsBtnBehaviorDetectionContent').siblings().addClass('d-none');
    });
    $('#applicationsBtnBehaviorDetection').click(function (e) { 
        $('#applicationsBtnBehaviorDetectionContent').removeClass('d-none');
        $('#applicationsBtnBehaviorDetectionContent').siblings().addClass('d-none');
    });
    
});

//AOS
AOS.init();

//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });