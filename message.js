function addMyMessage() {
  //var windows = document.getElementById("message");
  var text = document.getElementById("sent");
  var mes = document.createElement("div");
  var tt = document.getElementById("words");
  var t = tt.value;
  mes.innerHTML = t;
  mes.style.backgroundColor = "red";
  mes.style.marginTop = "1%";
  document.getElementById("message").appendChild(mes);

}

function addOthMessage () {

}
