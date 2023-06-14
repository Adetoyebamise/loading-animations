// Break chain animation
function breakChain() {
  let chain = document.getElementById("chain");
  chain.innerHTML = "&#xf0c1;";

  setTimeout(() => {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

// Call animation
breakChain();

// Anmate  every 2 seconds
setInterval(breakChain, 2000);

// Battery charge animation
function chargeBattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244;";

  setTimeout(() => {
    battery.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

//run anaimation
chargeBattery();

//run animation evrery 5 seconds
setInterval(chargeBattery, 5000);

// Houglass tip animation
function hourglassTip() {
  let hourglass = document.getElementById("hourglass");
  hourglass.innerHTML = "&#xf251;";

  setTimeout(() => {
    hourglass.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(() => {
    hourglass.innerHTML = "&#xf253;";
  }, 2000);
}

//call the funtion
hourglassTip();

// Run animation every 3 seconds
setInterval(hourglassTip, 3000);
