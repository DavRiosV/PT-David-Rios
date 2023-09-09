document.getElementById('ton3').addEventListener('click', function(event) {
  event.preventDefault();

  // Simulación de carga de la imagen del PDF (reemplazar con tu lógica de conversión)
  const pdfImageURL = './PDF/5ton.pdf';

  // Mostrar la imagen del PDF en la notificación
  Toastify({
      text: `<img src="${pdfImageURL}" alt="PDF">`, // Insertar la imagen aquí
      duration: 0, // Duración indefinida o hasta que el usuario cierre la notificación
      gravity: "top",
      close: true,
      escapeMarkup: false // Permite mostrar contenido HTML en la notificación
  }).showToast();
});
