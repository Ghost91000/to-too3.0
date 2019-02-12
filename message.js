function addMyMessage() {
  var text = document.getElementById("sent");
  var mes = document.createElement("div");
  var tt = document.getElementById("words");
  var t = tt.value;
  mes.innerHTML = t;
  mes.id = "mes";
  document.getElementById("message").appendChild(mes);
 }
