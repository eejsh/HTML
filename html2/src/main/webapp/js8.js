// var user_id="jang";
//daa(user_id);   //index 넘어옴
 
 function data_b(){
   var b = [2500,3400,1000,6200];
   var user_id="jang1";
   
   var index = daa(user_id);   //index 넘어옴
   
   var point = b[index];
   
   console.log(index);
   console.log(point);
   
   
   
   return point;   
   
}

//선생님 코드 
function cc(idx){
   var data_b = [2500,3400,1000,6200];
   var w=0;
   var point;
   while(w<data_b.length){
      if(idx==w){
         point=data_b[w];
      }
      w++;
   }
   var level = vip(idx);
   return [point,level]
}

/*
 function data_b(idx){
   var b = [2500,3400,1000,6200];
   //var user_id="jang";
   
   //var index = daa(user_id);   //index 넘어옴
   
   var point = b[index];
   
   console.log(index);
   console.log(point);
   
   data_c(index);
   
   return point;   
   
}
*/