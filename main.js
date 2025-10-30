// === CONFIGURA TU FECHA LÍMITE AQUÍ ===
const targetDate = new Date("december 6, 2025 21:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "¡Evento Iniciado!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

  function copiarAlias(id) {
    const alias = document.getElementById(id).innerText;
    navigator.clipboard.writeText(alias).then(() => {
      const mensaje = document.getElementById("mensaje-copiado");
      mensaje.innerText = `Alias "${alias}" copiado ✅`;
      mensaje.style.color = "#2ecc71";
      setTimeout(() => mensaje.innerText = "", 2000);
    });
  }