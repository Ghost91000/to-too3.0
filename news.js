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
  b.onclick = false;
  b.href = "";
}
