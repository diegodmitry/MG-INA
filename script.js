// document.getElementById('shareImage').onclick = function() {
//   var imageUrl = "https://meeting-god-ina.vercel.app/images/encontro.jpeg"; // URL of the image to share
//   var whatsappUrl = `https://wa.me/?text=Check out this image: ${encodeURIComponent(imageUrl)}`;

//   window.open(whatsappUrl, '_blank').focus();
// };

document.getElementById('shareImage').onclick = function() {
  // The URL to the image you want to share
  const imageUrl = "https://meeting-god-ina.vercel.app/images/encontro.jpeg"; 
  // Custom message you want to appear in the chat
  const customMessage = "Descobri algo transformador este fim de semana e estou ansioso(a) para compartilhar. Acesse o link e descubra?"; 
  // Encoding the message and the image URL to ensure it's formatted correctly for a URL
  const encodedMessage = encodeURIComponent(customMessage + " " + imageUrl);
  // Creating the WhatsApp share link with your custom message
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  // Opening WhatsApp in a new tab/window with the share message ready to send
  window.open(whatsappUrl, '_blank').focus();
};
