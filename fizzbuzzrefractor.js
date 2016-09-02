$(document).ready(function(){
function countNumbers(maxVal){
for(var count = 1; count <= maxVal; count++){
  if(count%3===0 && count%5 === 0){
      $('.content').append('<li>Fizzbuzz</li>');
 
  }else if(count%5 === 0){
      $('.content').append('<li>Buzz</li>');
  }
  else if (count%3 === 0 ){
      $('.content').append('<li>Fizz</li>');
  }
  else {
      $('.content').append('<li>' + count + '</li>');
   }
  }
 }

 
 $('.btn_play').on('click', function(){
    var getValue = $('.txt_input').val();
    
    if (getValue % 1 == 0 && getValue <= 500){
      $('.content').empty();
      countNumbers(getValue);
      $('.txt_input').val("");
    } 
    else {
      alert("Type only numbers between 1 and 500");
      $('.txt_input').val("");
    }
  });
});