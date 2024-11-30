onload = () => {
  document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("christmas-music");
  const button = document.getElementById("music-control");

  // Inicializamos el botón según el estado del audio
  button.textContent = audio.paused ? "▶️" : "⏸️";

  // Evento para pausar/reproducir
  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "⏸️"; // Cambiar icono a pausa
    } else {
      audio.pause();
      button.textContent = "▶️"; // Cambiar icono a reproducir
    }
  });
});