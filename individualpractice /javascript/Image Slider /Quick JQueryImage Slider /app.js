$(document).ready(function(){
  $('.next').on('click',function(){
    // console.log('clicked');
    /*this is to let you know that when you click on the right button, in
    the inspect(console), will notify you that it is clicked. (that file is
    connected and working) */

/*variable for the current image and variable for the next image*/
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    //currentImg.next -> JQuery function

    if(nextImg.length){ //if it is greater than zero
      //remove the active class from original image to put it to other image
      currentImg.removeClass('active').css('z-index',-10);
      //.css makes us change any kind of style we want for that  element
      //-10 is going to get it below
      nextImg.addClass('active').css('z-index',10);
      //10 is going to get it below
    }
  });

  $('.prev').on('click',function(){
    // console.log('clicked');
    /*this is to let you know that when you click on the right button, in
    the inspect(console), will notify you that it is clicked. (that file is
    connected and working) */

  /*variable for the current image and variable for the next image*/
    var currentImg = $('.active');
    var prevImg = currentImg.prev();
    //currentImg.next -> JQuery function

    if(prevImg.length){ //if it is greater than zero
      //remove the active class from original image to put it to other image
      currentImg.removeClass('active').css('z-index',-10);
      //.css makes us change any kind of style we want for that  element
      //-10 is going to get it below
      prevImg.addClass('active').css('z-index',10);
      //10 is going to get it below
    }
  });
});
