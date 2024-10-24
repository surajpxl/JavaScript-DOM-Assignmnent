function updateTime() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  const hexColor = `#${hours}${minutes}${seconds}`;
  
  document.getElementById('clock').textContent = timeString;
  document.body.style.backgroundColor = hexColor;
}

setInterval(updateTime, 1000);
updateTime();
