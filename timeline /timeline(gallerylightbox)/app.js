//Get modal element
var modal = document.getElementsById('outer');

//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
