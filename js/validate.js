function formValidate() {
    var name = document.getElementById('nameForm');
    var email = document.getElementById('emailForm');
    var phone = document.getElementById('phoneForm');
    var message = document.getElementById('messageForm');
    var expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    var popup = document.getElementById('divError');
    
    if (name.value === '' || email.value === '' || phone.value === '' || message.value === '') {
//        alert('fields cannot be empty');
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.text').empty().append('<p>Fields cannot be empty</p>');   
        return false;
    } else if (name.value.length > 10 || name.value.length < 2) {
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.text').empty().append('<p>Name has to be between 2 and 10 words</p>');   
        return false;
    }else if (!expression.test(email.value)) {
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.text').empty().append('<p>Mail is not valid</p>'); 
        return false;
    }else if (isNaN(phone.value)) {
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.text').empty().append('<p>Phone must be a number</p>'); 
        return false;
    } else if (phone.value.length > 11 || phone.value.length < 9) {
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.text').empty().append('<p>Phone has to be between 9 and 11 numbers</p>'); 
        return false;
    }else if (message.value.length < 30) {
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.text').empty().append('<p>Message shoul have at least 30 letters</p>'); 
        return false;
    } else {
        $('.text').empty()
        $(popup).fadeIn();
        $(popup).css('display','flex');
        $('.thanks').css('display','flex');
        return true;
    }
}

$('.close').on('click', function(){
    $('.divError').fadeOut();
})
