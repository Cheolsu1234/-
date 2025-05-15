let totalAmount = 0;

document.getElementById("donateButton").addEventListener("click", function() {
  totalAmount += 100;
  document.getElementById("message").textContent = "철수님에게 100원 후원되었습니다.";
  document.getElementById("total").textContent = totalAmount + "원";
});
