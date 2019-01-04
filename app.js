$('#navigation a').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  
  
  $('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
    $('.toggler').toggleClass('change');
    $('.nav-content').slideToggle();
    $('#dropdown-menu').slideUp();
    $('.menu-overlay').toggle();
  });
  
  $('.nav-content .dropdown').on('click', function(){
    $('#dropdown-menu').slideToggle();
  });
  
  $('.menu-overlay').on('click', function(){
    $('.toggler').removeClass('change');
    $('.nav-content').slideUp();
    $('#dropdown-menu').slideUp();
    $('.menu-overlay').hide();
  });
  
  $("#contact input, #contact textarea").on('focusout', function(){
  
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  
  });

  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - 50
    });
}
document.getElementById("arrow").addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.getElementById("work"));
});
document.getElementById("work-link").addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.getElementById("work"));
});
document.getElementById("latest-link").addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.getElementById("latest"));
});
document.getElementById("up").addEventListener('click', () => {
    scrollTo(document.getElementById("top"));
});