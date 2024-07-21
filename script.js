var qrCodeDiv = document.getElementById("qr-code");
var qrCode = new QRCode(qrCodeDiv, {
  text: "https://www.facebook.com/ycupvc", // Replace with your actual website URL
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
