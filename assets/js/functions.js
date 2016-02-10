$(function() {
    var offset = 400;
    var duration = 500;
    console.log(($(window).scroll))
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.top').fadeIn(duration);
        } else {
            $('.top').fadeOut(duration);
        }
    });
    
    $('.top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    })

    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },4150);
    });
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+'%');
            }
        });
    });
    $('.count-diamond').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('#myTabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    });

    $('.thumbnail').click(function(evt){
    evt.preventDefault();
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#myModal').modal({show:true});
    });

      $('#name').keyup(function(){
      $('.name').addClass('typing');
      if( $(this).val().length == 0 ) {
          $('.name').removeClass('typing');
      }
    });
    $('#email').keyup(function(){
      $('.email').addClass('typing');
      if( $(this).val().length == 0 ) {
          $('.email').removeClass('typing');
      }
    });
    $('#message').keyup(function(){
      $('.message').addClass('typing');
      if( $(this).val().length == 0 ) {
          $('.message').removeClass('typing');
      }
    });
     
});
