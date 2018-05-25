var form = document.getElementById('form');



form.addEventListener('submit', convert);

function convert(e){
    e.preventDefault();
    
    var val =document.getElementById('item').value;
    
   var kil0 = document.getElementById('kil').innerHTML = val*.453592;
   
   var ounce = document.getElementById('oun').innerHTML =val*16;
    
   var grams = document.getElementById('gra').innerHTML =val*453.592;
    
    
 
   
}