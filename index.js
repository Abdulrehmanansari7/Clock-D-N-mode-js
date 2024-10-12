function updateClock() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const now = new Date();
  
  // Format Date
  document.getElementById("Date").innerText = `${dayNames[now.getDay()]} ${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;

  // Format Time
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const period = hours < 12 ? "AM" : "PM";
  hours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format

  document.getElementById("hours").innerText = hours;
  document.getElementById("min").innerText = minutes;
  document.getElementById("sec").innerText = seconds;
}

document.getElementById("toggleButton").addEventListener("click", () => {
  document.body.classList.toggle("day-mode");
  document.body.classList.toggle("night-mode");
});

// Set initial mode to night-mode
document.body.classList.add("night-mode");

// Update clock every second
setInterval(updateClock, 1000);