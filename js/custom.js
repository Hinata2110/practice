document.addEventListener('DOMContentLoaded',function(){

    var navigation = document.getElementById('Navigation');
        status = 'under50';
        submit = document.getElementById('submit-button');
        letters = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

    // navigation fixed when scroll
    window.addEventListener('scroll',function(){
        if ( window.pageYOffset > 50){
            if ( status =='under50'){
                status = 'over50';
                navigation.classList.add('fixed');
                navigation.classList.add('animated');
                navigation.classList.add('fadeInDown');
            }
        }
        else if ( window.pageYOffset <= 50) {
            if ( status == 'over50'){
                status = 'under50';
                navigation.classList.remove('fixed');
                navigation.classList.remove('animated');
                navigation.classList.remove('fadeInDown');
            }
        }
    })

    // Form Validate
    submit.onclick = function(){
        inputEmail = document.formEmail.email;
        valueEmail = inputEmail.value;
        noti = document.getElementById('notify');

        if ( valueEmail == '') {
            noti.style.display = 'block';
            noti.innerHTML = 'Xin hãy nhập Email';
            return false;
        }
        else if ( valueEmail.match(letters)){
            return true;
        }
        else {
            noti.style.dipslay = 'block';
            noti.innerHTML = 'Email không hợp lệ';
            return false;
        }
    }
},false);

//Jquery
$(document).ready(function () {
    $('.angle-down i').click(function(){
        $('html,body').animate({
            scrollTop: $('#intro').offset().top - 100
        },1000)
    })

    $('.slider').owlCarousel({
        loop:true,
        items: 1,
        animateIn: 'fadeIn',
        autoHeight: true,
        autoplay: true,
        autoPlayTimeout: 2000,
    })
});