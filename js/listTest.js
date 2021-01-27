$(document).ready(function () {
    $("a").click(function (e) {
        e.preventDefault();
    });
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
        $('#applicationsBtnBehaviorDetectionCovtent').removeClass('d-none');
        $('#applicationsBtnBehaviorDetectionCovtent').siblings().addClass('d-none');
    });
    
});