
var modalwindow = document.getElementById ("modalPhotos");
 function openn () {
     var modalwindow = document.getElementById ("modalPhotos");
  modalwindow.style.display='block';
}
console.log(document.getElementById('modalPhotos'));

function closess() {
   var modalwindow = document.getElementById ("modalPhotos");
modalwindow.style.display="none";

}


function slider () {
  var masPhoto =[
    "examplePhoto1.jpg",
    "examplePhoto2.jpg",
    "bestTriangle.jng"
  ]
  var num=0;
  var sliderr = document.getElementById("sliderr");
  num++;
  if (num>=masPhoto.lenght) {
    num=0;
  }
  sliderr.src = masPhoto[num];
}
