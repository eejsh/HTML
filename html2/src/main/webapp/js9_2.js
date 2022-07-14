
 function PartB(index){
	var mem =  ['Y','N','Y','Y','Y'];
	var tel = ['01012345678','01055994411','01035370132','01078015457','01031374882'];
 	var email = ['hong@naver.com','park@nate.com','kim_001@gmail.com','jang_go@gmail.com','lee09@naver.com'];
 	
 	var restel;
 	var resemail;
 	var msg=null;
 	if(mem[index]=='Y'){
		restel = tel[index];
		resemail = email[index];
	}else if(mem[index]==='N'){
		msg = "�덊눜�뚯썝";
	}
	
	//console.log("partb");
	return [restel,resemail,msg];
	
}