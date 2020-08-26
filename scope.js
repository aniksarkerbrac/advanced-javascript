 function sum(first,second){
     let result = first + second;
     if(result>9){
         var mood = 'happy';
     }
     console.log(mood);

     return result;
 }
 const result = sum(3,7);
 console.log(result);