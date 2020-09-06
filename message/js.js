const $messageContainer = document.getElementById("message");
const $message = document.querySelector("#message p");

let flagMessageTime = null;

$messageContainer.addEventListener("click", hideMessage);

function showMessage(msg, time = 1000) {
  showBasicProtection();
  $messageContainer.style.display = "flex";
  $message.textContent = msg;
  $message.style.display = "block";
  document.querySelector("#message :nth-child(2)").style.display = "block";
  flagMessageTime = setTimeout(hideMessage, time);
}
function hideMessage(msg) {
  $messageContainer.style.display = "none";
  $message.textContent = "";
  $message.style.display = "none";
  document.querySelector("#message :nth-child(2)").style.display = "none";
  flagMessageTime = null;
  hideBasicProtection();
}
