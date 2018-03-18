jQuery(document).ready(function(){

  $(window).scroll(function(){
      $('.t-event').each(function(){
          $t_event_r_t = $(this).attr('class');
          $windowH = $(window).scrollTop();

          if($t_event_r_t == 't-event t-event-r'){
              $t_event_offset = $(this).offset().top;

              if($t_event_offset <= $windowH + 350){
                  $(this).animate({
                      opacity: 1,
                      marginRight: '0px'
                  })
              }

          }else {
              $t_event_offset = $(this).offset().top;
              if($t_event_offset <= $windowH + 350){
                  $(this).animate({
                      opacity: 1,
                      marginLeft: '0px'
                  })
              }
          }
      })
  })
})

//Get modal element

var modal = document.getElementById('simpleModal');

//Get open modal button

var modalBtn = document.getElementById('modalBtn-1');
var modalBtn2 = document.getElementById('modalBtn-2');
var modalBtn3 = document.getElementById('modalBtn-3');
var modalBtn4 = document.getElementById('modalBtn-4');

//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for click
modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);



function openModal(){
  $('.modal').css('display','block');
}

function openModal2(){
  $('.modal2').css('display','block')
}

function openModal3(){
  console.log(123);
}

function openModal4(){
  console.log(123);
}
