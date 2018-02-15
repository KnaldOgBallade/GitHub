
function navigate(dest) {
    document.getElementById("test").innerHTML="You're being directed to " + dest + "<br>Please go to nearest beacon to get directions";
    alert("You're being directed to " + dest + ". Please go to nearest beacon to get directions");
}


/* DROP-DOWN MENU:
When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

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
