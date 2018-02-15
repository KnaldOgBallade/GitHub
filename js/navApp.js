
function navigate(dest) {
    alert("You're being directed to " + dest + ". Please go to nearest beacon to get directions");
}

function onLoad(){
	document.addEventListener('deviceready', onDeviceReady, false);
    bleDeviceList.addEventListener('touchstart', conn, false); // assume not scrolling
}

function onDeviceReady(){
	refreshDeviceList();
}

function refreshDeviceList(){
	//deviceList =[];
	document.getElementById("bleDeviceList").innerHTML = ''; // empties the list
	if (cordova.platformId === 'android') { // Android filtering is broken
		ble.scan([], 5, onDiscoverDevice, onError);
	} else {
		//alert("Disconnected");
		ble.scan([blue.serviceUUID], 5, onDiscoverDevice, onError);
	}
}

function myFunction() {
    document.body.style.backgroundColor = "red";
}

function onDiscoverDevice(device){
	//Make a list in html and show devises
	var listItem = document.createElement('li'),
    html = device.name+ "," + device.id;
    listItem.innerHTML = html;
    document.getElementById("bleDeviceList").appendChild(listItem);
    device.id="test";
    if( device.id == "test" ){
      myFunction();
    }
}


function onError(reason)  {
	alert("ERROR: " + reason); // real apps should use notification.alert
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
