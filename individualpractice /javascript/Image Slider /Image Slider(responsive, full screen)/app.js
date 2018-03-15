/* create some variables*/
let sliderImages = document.querySelectorAll('.slide'),
/* We are selecting all elements that has class of "slide"
querySelectorAll is what you want to use, when there is more
than one. */
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0; /* indicate what slide or image we are on. It
    is going to be zero by default*/

/* each time, when we change a slide, we bas. want clear out
all the images, set them to "display:nonel;"*/

/*simply defining the function
These will clear up all the images*/

    function reset(){
      for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
      }
    }

//Initialize the slider
    function startSlide(){
      reset();
      sliderImages[0].style.display = 'block' /*so that it shows*/

      /* The mission is to show the first image. it is like an array, we can
      access the first image with 0, then 1 and 2. As we add more images, it is
      tweekable. We don't have to put additonal Javascript*/
    }

    //Show prev(left arrow)
    function slideleft(){
      reset(); /* Before anything, wipe it clean*/
      sliderImages[current - 1].style.display = 'block' ;
      current--;
      /* for example for the Image2 which has a index of 1, (bc the array is 0 base)
      if we click the left, we would want the index to go 0
      !!!and then for the current value, we want to decrease it by one*/
    }

    //Show next
    function slideRight(){
      reset();
      sliderImages[current + 1].style.display ='block';
      current++;
    }

/* we need an Event to run this*/
//Left arrow click
arrowLeft.addEventListener('click', function(){
  /* before we actually call slide left, we want to make sure it is at 0, bc we
  have a special condition at 0*/
  if(current === 0){
    current = sliderImages.length;
    /* bas if we are at 0, we are in the first image-that has a 0 index. So if we
    click the back button, we want to go to the third image -which going to be the
    2 index. So we are setting current to the max number of images which is 3.*/
  }
  slideleft();
});

//Right arrow click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length - 1){
    current = -1;
    /*bc when we get to the last image, we want to go back to the first image,*/
  }
  slideRight();
})

    startSlide();
