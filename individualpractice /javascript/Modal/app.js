//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
/*"ByClassName" will actually get an array of classes with name closeBtn, so padding
the bracket for first one. Even though there is one, it still going to return that
collection, so we still have to specify which one*/

//Listen for the 'open' click
modalBtn.addEventListener('click', openModal);

//Listen for the 'closing' click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);

//Creating a function to open modalBtn
function openModal(){
  // console.log(123); a test To make sure that this is working
  modal.style.display = 'block';
}

//Creating a function to close modalBtn
function closeModal(){
  // console.log(123); a test To make sure that this is working
  modal.style.display = 'none';
}

//Creating a function to close modalBtn if outside click
function outsideClick(e){
// make sure that the target is to modal. !! passing on a event parameter
  if(e.target == modal){
  /*console.log(123); a test To make sure that this is working
  modal is the dark area*/
  modal.style.display = 'none';
  }
}
