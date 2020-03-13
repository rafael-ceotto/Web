"use strict;"

var elem = document.getElementById("text_topBar");
var maxPos = document.getElementById("topBar").clientWidth - elem.offsetWidth;

function moveCycle() {

  var pos = 0;
  var id = setInterval(frame, 10);
  var movingRight = true;

  function frame() {
    // if left position of element plus element width is greater than maxPos then left position of element is equal to maxPos minus element width

    //   if(){

    //   }
    if (pos >= maxPos) {
      movingRight = false;
      // clearInterval(id);
    } else if (pos <= 0) {
      movingRight = true;
    }
    if (movingRight) {
      pos += 1;

    } else {
      pos -= 1;
    }
    elem.style.left = pos + 'px';
  }
}
moveCycle();
window.addEventListener("resize", resizeHandler);


function resizeHandler() {

  maxPos = document.getElementById("topBar").clientWidth - elem.offsetWidth;
}




/* Long Time Top Script */

runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */

function runClock() {

  /* Store the current date and time */

  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  /* Display the current date and time */

  document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

}

/* Current Year bottom script */

var movingDate = new Date();
var currentYear = movingDate.getFullYear();


document.getElementById("actualYear").innerHTML = currentYear;



function displayTimeLine(elem) {
  var button = document.getElementById(elem);
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  } else {
    button.classList.add('active')
  }
}

function modal(imagem) {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  // var btn = document.getElementById(id);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal 
  // btn.onclick = function () {
  modal.style.display = "block";
   //}

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var modalPreview = document.getElementById("modalPreview");
  modalPreview.innerHTML = '<figure><img src=' + imagem.src + ' style="width:100%"><figcaption>'+ imagem.alt +'</figcaption><figure>';
}

