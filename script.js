 var d = new Date();
 var t = d.getHours();


 if (t >= 7 && t <= 17){

   document.getElementById('day').style.display = "block";
   document.getElementById('par').style.display = "block";
  //document.body.style.backgroundColor = "hsla(120,100%,50%,0.3";
}
else {

   document.getElementById('night').style.display = "block";
   document.getElementById('pa').style.display = "block";
  //document.body.style.backgroundColor = "hsla(211,100%,50%,0.3";

}
