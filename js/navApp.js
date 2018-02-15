
function navigate(dest) {
    alert("You're being directed to " + dest + ". Please go to nearest beacon to get directions");
}

function colochange(color){
  var tester;
    if (color == 1){
      tester = '#fff';
    }else{
      tester = 'powderblue';
    }


}

/* DROP-DOWN MENU:
When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
