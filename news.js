function whatNew(){
  var news = document.getElementById("news");
  news.style.opacity = "0";
  document.getElementById("tNews").innerHTML = " ";

  var list = document.getElementById("whatNew");
  var p = 21;
  var time = setInterval(function (){
    if (p == 90){clearInterval(time); close();}
    else{
      list.style.height = p+"%";
      p += 1;
    }
  },5);
}

function close() {
  var b = document.getElementById("buton");
  b.innerHTML = "Close";
  b.onclick = function () {buttonClose();};
}
function buttonClose () {
  var news = document.getElementById("news");
  news.style.opacity = "1";
  document.getElementById("tNews").innerHTML = "News:";

  var list = document.getElementById("whatNew");
  var p = 90;
  var time = setInterval(function (){
    if (p == 20){clearInterval(time); again();}
    else{
      list.style.height = p+"%";
      p -= 1;
    }
  },5);
}
function again () {
  var b = document.getElementById("buton");
  b.innerHTML = "See more";
  b.onclick = function () {whatNew();};
}
