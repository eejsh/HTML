
//setter
function call1() {
	var aa;
	var bb = 0;

	for (aa = 1; aa < 11; aa++) {
		bb += aa;
	}


	var result = return1(bb);    //getter로 값을 보내주기.
	
	console.log(result);
	console.log("해당 값을 받았습니다.");
	

}
