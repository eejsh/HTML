/*
아이디 데이터 배열]
Person
“김수빈”,”김정민”,”오유나“,”김진수“,”김창순“,”이유림“,”하윤성”
Useridn
“kimsubin”,”min1004”,”yuna0809”,”jinsulove”,”soon777”,”lim_lee79”,”hayunsung1313”  
//연관배열
var c = [
	{"mname" : "홍길동", "mid":"hong" },
	{"mname" : "이순신", "mid":"lee" }
];
console.log(c);  //배열 다 찍기
console.log(c[1]["mname"]);    //c배열에 mname 

*/

function searchid(intext){
	var users = [
       {  "aperson": "김수빈", "auserid":"kimsubin" },
          {  "aperson": "김정민", "auserid":"min1004" },
             {  "aperson": "오유나", "auserid":"yuna0809" },
                {  "aperson": "김진수", "auserid":"jinsulove" },
                   {  "aperson": "김창순", "auserid":"soon777" },
                      {  "aperson": "이유림", "auserid":"lim_lee79" },
                         {  "aperson": "하윤성", "auserid":"hayunsung1313"} 
	];
	
//	var w=0;
//	var ok=0;
//    var ok = 0;
//   
//   for(var i=0; i<users.length; i++){
//	 if(intext == users[i]["auserid"]){
//	
//	console.log("이름 : "+ users[i]["aperson"] + "아이디 : "+ users[i]["auserid"]);
//	 ok ++;
//	}
//	
//}
//	if(ok==0){
//		console.log("해당되는 사용자가 없습니다. ");
//	}
//	
//
//}
   
   var asd;
   var w=0;
   var ck = false;
   
	while(w < users.length){
	//if(intext.indexof(users[w]["auserid"])=-1){
		// console.log("해당 사용자가 없습니다. ")   else {ck = ture;}
    if(intext == users[w]["auserid"]){
		ck = true;
		asd=w;
	}
		w++;
	}

	
	if(ck==true){
	console.log("이름 : "+ users[asd]["aperson"] + " 아이디 : "+ users[asd]["auserid"]);
	  }
	else{
		
	console.log("해당 사용자는 검색대상에 없습니다ㅜㅠ ");
	   }
	
}



