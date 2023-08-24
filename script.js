// Set the countdown date
const countdownDate = new Date("Dec 31, 2022 23:59:59").getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  const distance = countdownDate - now;
  
  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown timer
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "Countdown expired!";
  }
}, 1000);
