document.getElementById('shareImage').onclick = function() {
  var imageUrl = "https://meeting-god-ina.vercel.app/images/encontro.jpeg"; // URL of the image to share
  var whatsappUrl = `https://wa.me/?text=Check out this image: ${encodeURIComponent(imageUrl)}`;

  window.open(whatsappUrl, '_blank').focus();
};
