// document.getElementById('shareImage').onclick = function() {
//   var imageUrl = "https://meeting-god-ina.vercel.app/images/encontro.jpeg"; // URL of the image to share
//   var whatsappUrl = `https://wa.me/?text=Check out this image: ${encodeURIComponent(imageUrl)}`;

//   window.open(whatsappUrl, '_blank').focus();
// };

document.getElementById('shareImage').onclick = function() {
  // The URL to the image you want to share
  var imageUrl = "https://meeting-god-ina.vercel.app/images/encontro.jpeg"; 
  // Custom message you want to appear in the chat
  var customMessage = "I found this event really interesting and thought you might too!"; 
  // Encoding the message and the image URL to ensure it's formatted correctly for a URL
  var encodedMessage = encodeURIComponent(customMessage + " " + imageUrl);
  // Creating the WhatsApp share link with your custom message
  var whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  // Opening WhatsApp in a new tab/window with the share message ready to send
  window.open(whatsappUrl, '_blank').focus();
};
