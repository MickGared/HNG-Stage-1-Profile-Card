function updateTime() {
  const el = document.getElementById('user-time');
  const tz = document.getElementById('timezone');

  function pad(n) {
    return n.toString().padStart(2, '0');
  }

  function update() {
    const d = new Date();
    const hh = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    el.textContent = `${hh}:${mm}:${ss}`;
    const offset = -d.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const hoursOff = Math.floor(Math.abs(offset) / 60);
    const minsOff = Math.abs(offset) % 60;
    tz.textContent = `UTC${sign}${pad(hoursOff)}:${pad(minsOff)}`;
  }

  update();
  setInterval(update, 1000);
}
updateTime();