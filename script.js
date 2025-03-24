bottom_confectti_effect();
confetti_effect();

// Access all class names of the clock hands
let hour_hand = document.querySelector(".hours-hand");
let minute_hand = document.querySelector(".minutes-hand");
let second_hand = document.querySelector(".seconds-hand");

//Access current time from Date() function and extract hour, minute, and second .
setInterval(() => {
  let time = new Date();

  // Rotate the clock hands
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let hourrotation = 30 * hour + hour / 2;
  let minuterotation = 6 * minute;
  let secondrotation = 6 * second;

  // We will rotate of sui which is in current
  hour_hand.style.transform = `rotate(${hourrotation}deg)`;
  minute_hand.style.transform = `rotate(${minuterotation}deg)`;
  second_hand.style.transform = `rotate(${secondrotation}deg)`;
});

// Access digital clock elements

const days = document.querySelector(".day");
const weekdays = document.querySelector(".wday");
const months = document.querySelector(".month");
const years = document.querySelector(".year");

// Update digital clock values
setInterval(() => {
  const date = new Date();
  const day = date.getDate();
  const weekday = date.toLocaleDateString("en-IN", { weekday: "short" }); //en-IN is indian locale abbreviation
  const month = date.toLocaleDateString("es-US", { month: "short" }); //es-US is Spenish  abbreviation
  const year = date.getFullYear();

  // Update the innerHTML of the digital clock elements
  days.innerHTML = day;
  weekdays.innerHTML = weekday;
  months.innerHTML = month;
  years.innerHTML = year;
}, 1000); // Hamesa 1000ms = 1 second bad update hota rahega time

//Add confetti_effect
function confetti_effect() {
  var end = Date.now() + 10 * 1000; // Run for 7 seconds
  var colors = [
    "#00BFFF",
    "#39FF14",
    "#FF69B4",
    "#FF4500",
    "#32CD32",
    "#DC143C",
  ];
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

//Add bottom confetti efect
function bottom_confectti_effect() {
  var count = 500;
  var defaults = {
    origin: { y: 1.1 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
