$(function() {

    var floatNav = $('.float-nav'),
        mainContent = $('.main-content');

    floatNav.on('click', function(e) {
      $(this).toggleClass('closed');
      e.stopPropagation();
      e.preventDefault();
    });

    mainContent.on('click', function() {
      if (!floatNav.hasClass('closed')) floatNav.addClass('closed');
    });

    $(window).scroll(function (){
        if ($(window).scrollTop() > 517){
            $('.float-nav').css("display", "block");
        }
        if ($(window).scrollTop() < 517){
            $('.float-nav').css("display", "none");
        }
    });

    $('a[href="#nav"], a[href="#home"], a[href^="#intro"], a[href^="#about"], a[href^="#services"], a[href^="#works"], a[href^="#contact"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

     $(window).scroll(function (){
        if ($(window).scrollTop() === 2100){
            initSkillbar();
        }
    });
     function initSkillbar(){
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },4150);
        });
     };

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

    /* Typed.js */
    $(".el-typed").typed({
      strings: ["Ready..", "Set...", "Lets Make Your Dreams Come True!"],
      typeSpeed: 200
    });
     
});
