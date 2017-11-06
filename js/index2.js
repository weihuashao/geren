
window.onload = function () {
    console.log(window.name);
    if(window.name == ""){
        window.name = 0;
        $('.loadingTop').addClass('slideOutUp');
        $('.loadingBottom').addClass('slideOutDown');
        $('.loadingMiddle').addClass('middle');
    }else{
        $('.loadingTop,.loadingBottom,.loadingMiddle').remove();
    }

}

//loading end

//navbar scroll acreen start
$('.navbar-nav a,.toAbout').click(function(){
    $('body').animate({
        scrollTop : $(this.hash).offset().top
    },500);
    return false;
})
//navbar scroll acreen end
    $('#banner').carousel();
