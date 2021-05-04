function Calculate(){
   p= document.getElementById("p").value;

   r= document.getElementById("r").value;

   t= document.getElementById("t").value;
   result = (p*t*r)/100;

  document.getElementById("demo").innerHTML= "The Interest is:₹ " + result;
}
