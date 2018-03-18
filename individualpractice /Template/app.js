$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /1 +'%)'
  });

  $('.back-foot').css({
    'transform' : 'translate(0px, '+ wScroll /20 +'%)'
  });

  $('.forward').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  if(wScroll > $('.clothes-pics').offset().top -
  ($(window).height() / 1.2)) {
      $('.clothes-pics figure').each(function(i){

        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));
    });
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


});


jQuery(document).ready(function(){

  $(window).scroll(function(){
    $('.t-event').each(function(){
        $t_event_r_t = $(this).attr('class');
        $windowH = $(window).scrollTop();

        if($t_event_r_t == 't-event t-event-r'){
          $t_event_offset = $(this).offset().top;
          if($t_event_offset <= $windowH + 350) {
              $(this).animate({
                  opacity: 1,
                  marginRight :'0px'
              })
          }
        }else {
            $t_event_offset = $(this).offset().top;
            if($t_event_offset <= $windowH +350) {
              $(this).animate({
                opacity:1,
                marginLeft : '0px'
              })
            }
        }
    })
  })
})

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal)
  modal.style.display = 'none';
}

var modal1 = document.getElementById('simpleModal1');
var modalBtn1 = document.getElementById('modalBtn1');
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];

modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);

function openModal1(){
  modal1.style.display = 'block';
}

function closeModal1(){
  modal1.style.display = 'none';
}

function outsideClick1(e){
  if(e.target == modal1)
  modal1.style.display = 'none';
}

var modal2 = document.getElementById('simpleModal2');
var modalBtn2 = document.getElementById('modalBtn2');
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

function openModal2(){
  modal2.style.display = 'block';
}

function closeModal2(){
  modal2.style.display = 'none';
}

function outsideClick2(e){
  if(e.target == modal2)
  modal2.style.display = 'none';
}


/*--------------------------*/
var modal3 = document.getElementById('simpleModal3');
var modalBtn3 = document.getElementById('modalBtn3');
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick3);

function openModal3(){
  modal3.style.display = 'block';
}

function closeModal3(){
  modal3.style.display = 'none';
}

function outsideClick3(e){
  if(e.target == modal3)
  modal3.style.display = 'none';
}


/*--------------------------*/
var modal4 = document.getElementById('simpleModal4');
var modalBtn4 = document.getElementById('modalBtn4');
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];

modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);
window.addEventListener('click', outsideClick4);

function openModal4(){
  modal4.style.display = 'block';
}

function closeModal4(){
  modal4.style.display = 'none';
}

function outsideClick4(e){
  if(e.target == modal4)
  modal4.style.display = 'none';
}
