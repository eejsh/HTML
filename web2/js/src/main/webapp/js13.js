//import "./js13_1.js"  // 암호화 시키고 파일 연결


function api(){
	
	this.map = function (){ //call받음
		
	var way = "신촌역 2번 출구";
	return way;

	}
	
	this.login = function(mid){ //call안받음
	var msg ;
	if(mid=="hong"){
		msg="해당 고객을 확인 하였습니돵.";
		
	}else{
		msg="error";
	}
	return msg;
	}
	
}

var kakao = new api();   //처음 호출 받을 때 kakao로 받음


//this때문에 암호화가 안됨
