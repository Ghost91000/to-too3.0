var ch = 0;
function letterSort() {
  var list = document.getElementById("lists").value;
  var ans = document.getElementById("answer");
  var arr = list.split(";");// РАЗДЕЛИТЕЛЬ В КАВЫЧКАХ



  for (var i=0; i < arr.length; i++){
    var ag = arr[i].split("");
      for(b=0;b<ag.length;b++){
        if(ag[b] == 1 || ag[b] == 2 || ag[b] == 3 || ag[b] == 4 || ag[b] == 5 || ag[b] == 6 || ag[b] == 7 || ag[b] == 8 || ag[b] == 9 || ag[b] == 0){
          var node = document.createTextNode(arr[i]+";");
          ans.appendChild(node);
          ch += 1;
          console.log(b);

          if (ch == 2){
            var p = document.createElement("p");
            ans.appendChild(p);
            ch = 0;
          }
        }
      }




  }

}



/*if (ag[0] == 1 || ag[0] == 2 || ag[0] == 3 || ag[0] == 4 || ag[0] == 5 || ag[0] == 6 || ag[0] == 7 || ag[0] == 8 || ag[0] == 9 || ag[0] == 0){

  var node = document.createTextNode(arr[i]+";");
  ans.appendChild(node);
  ch += 1;

  if (ch == 2){
    var p = document.createElement("p");
    ans.appendChild(p);
    ch = 0;
  }

}*/
