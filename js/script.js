$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Please attend wedding too!');
});

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 6th Jan, 2022!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: itz BlaZe', styles1, styles2);

console.log(
  `%cPlease attend wedding too!\n\n`,
  "color: yellow; background:tomato; font-size: 24pt; font-weight: bold"
);

// Coundown Timer Script
function clean0(timeto0) {
  if (timeto0 < 10) {
    var timeto0 = "0" + timeto0;
  } else {
    var timeto0 = timeto0;
  }
  return timeto0;
}
function showCountdown() {
  var fecha = new Date("Jan 06, 2022 18:00:00").getTime();
  if (fecha != "") {
    var countDownDate = new Date(fecha).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var days = clean0(days);
      var hours = clean0(hours);
      var minutes = clean0(minutes);
      var seconds = clean0(seconds);

      // Output the result in an element with id="time-countdown"
      document.getElementById("Days").innerHTML =
        "<span class='box'>" + days + "</span><small>Days</small>";
      document.getElementById("Hours").innerHTML =
        "<span class='box'>" + hours + "</span><small>Hours</small>";
      document.getElementById("Minutes").innerHTML =
        "<span class='box'>" + minutes + "</span><small>Minutes</small>";
      document.getElementById("Seconds").innerHTML =
        "<span class='box'>" + seconds + "</span><small>Seconds</small>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-countdown").innerHTML = "Had a wonderful time! Thankyou...";
      }
    }, 1000);
  } else {
    document.getElementById("time-countdown").innerHTML =
      "Had a Wonderful time! Thankyou...";
  }
}
showCountdown();

// emojifall script
var emojiMax = 35;

// emojiflake Colours
var emojiColor = ["#ff4c4c", "#ffd555"];

// emoji Entity
var emojiEntity = "❤";

// Falling Velocity
var emojiSpeed = 0.60;

// Minimum Flake Size
var emojiMinSize = 13;

// Maximum Flake Size
var emojiMaxSize = 31;

// Refresh Rate (in milliseconds)
var emojiRefresh = 50;

// Additional Styles
var emojiStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var emoji = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
	rand = Math.floor(range * Math.random());
	return rand;
}

function initemoji() {
	var emojiSize = emojiMaxSize - emojiMinSize;
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;

	for (i = 0; i <= emojiMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		emoji[i] = document.getElementById("flake" + i);
		emoji[i].style.fontFamily = "inherit";
		emoji[i].size = randomise(emojiSize) + emojiMinSize;
		emoji[i].style.fontSize = emoji[i].size + "px";
		emoji[i].style.color = emojiColor[randomise(emojiColor.length)];
		emoji[i].style.zIndex = 1000;
		emoji[i].sink = emojiSpeed * emoji[i].size / 5;
		emoji[i].posX = randomise(marginRight - emoji[i].size);
		emoji[i].posY = randomise(2 * marginBottom - marginBottom - 2 * emoji[i].size);
		emoji[i].style.left = emoji[i].posX + "px";
		emoji[i].style.top = emoji[i].posY + "px";
	}

	moveemoji();
}

function resize() {
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;
}

function moveemoji() {
	for (i = 0; i <= emojiMax; i++) {
		coords[i] += pos[i];
		emoji[i].posY += emoji[i].sink;
		emoji[i].style.left = emoji[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		emoji[i].style.top = emoji[i].posY + "px";

		if (emoji[i].posY >= marginBottom - 2 * emoji[i].size || parseInt(emoji[i].style.left) > (marginRight - 3 * lefr[i])) {
			emoji[i].posX = randomise(marginRight - emoji[i].size);
			emoji[i].posY = 0;
		}
	}

	setTimeout("moveemoji()", emojiRefresh);
}

for (i = 0; i <= emojiMax; i++) {
	document.write("<span id='flake" + i + "' style='" + emojiStyles + "position:absolute;top:-" + emojiMaxSize + "'>" + emojiEntity + "</span>");
}

window.addEventListener('resize', resize);
window.addEventListener('load', initemoji);

// scroll to bottom
let scrollToBottom = document.querySelector("#scroll-to-bottom");
let pageBottom = document.querySelector("#end-to-scroll");

scrollToBottom.addEventListener("click", function () {
  pageBottom.scrollIntoView();
});
