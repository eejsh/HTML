function abc(nm,part){

var ids= document.getElementById(nm);

var emoney = document.getElementById(nm);
var num = Number(emoney.value.repl)

if(part=="up"){
ids.value=Number(ids.value)+1;
}else{
ids.value=Number(ids.value)-1;
}
}