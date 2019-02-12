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

var masPhoto =[
  "examplePhoto1.jpg",
  "examplePhoto2.jpg",
  "bestTriangle.jpg"
]

function slider () {

  var num=0;
  var sliderr = document.getElementById("sliderr");
  num++;
  if (num>=masPhoto.lenght) {
    num=0;
  }
  sliderr.src = masPhoto[num];
}

function sliderback () {

  var num=masPhoto.length;
  var sliderr = document.getElementById("sliderr");
  num--;
  if (num<=0) {
    num=masPhoto.length;
  }
  sliderr.src = masPhoto[num];

