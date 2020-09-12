var a = true;
function getNav(){
	if( a == true){
//	document.getElementById("s2").style.visibility = "hidden";
	document.getElementById("s1").style.transform = "rotate(26deg)";
	document.getElementById("s3").style.transform = "rotate(-26deg)";
	document.getElementById("nav1").style.height = "100vh";
	document.getElementById("a1").style.visibility = "visible";
	document.getElementById("a2").style.visibility = "visible";
	document.getElementById("a3").style.visibility = "visible";
	a = false;
}
	else{
	document.getElementById("s2").style.visibility = "visible";
	document.getElementById("s1").style.transform = "rotate(0deg)";
	document.getElementById("s3").style.transform = "rotate(0deg)";
	document.getElementById("nav1").style.height = "0vh";
	document.getElementById("a1").style.visibility = "hidden";
	document.getElementById("a2").style.visibility = "hidden";
	document.getElementById("a3").style.visibility = "hidden";
	a = true;
}
}
var b = true;
function makered1(){
	if( b == true){
	document.getElementById("like").style.color = "red";
	b = false;
}else{
	document.getElementById("like").style.color = "white";
	b = true;
}
}
var c = true;
function makered2(){
	if( c == true){
	document.getElementById("like1").style.color = "red";
	c = false;
}else{
	document.getElementById("like1").style.color = "white";
	c = true;
}
}
var d = true;
function makered3(){
	if( d == true){
	document.getElementById("like2").style.color = "red";
	d = false;
}else{
	document.getElementById("like2").style.color = "white";
	d = true;
}
}
var e = true;
function makered4(){
	if(e == true){
	document.getElementById("like3").style.color = "red";
	e = false;
}else{
	document.getElementById("like3").style.color = "white";
	e = true;
}
}
var f = true;
function makered5(){
	if( f == true){
	document.getElementById("like4").style.color = "red";
	f = false;
}else{
	document.getElementById("like4").style.color = "white";
	f = true;
}
}
var g = true;
function makered6(){
	if( g == true){
	document.getElementById("like5").style.color = "red";
	g = false;
}else{
	document.getElementById("like5").style.color = "white";
	g = true;
}
}
var h = true;
function makered7(){
	if( h == true){
	document.getElementById("like6").style.color = "red";
	h = false;
}else{
	document.getElementById("like6").style.color = "white";
	h = true;
}
}
var i = true;
function makered8(){
	if( i == true){
	document.getElementById("like7").style.color = "red";
	i = false;
}else{
	document.getElementById("like7").style.color = "white";
	i = true;
}
}
var j = true;
function makered9(){
	if( j == true){
	document.getElementById("like8").style.color = "red";
	j = false;
}else{
	document.getElementById("like8").style.color = "white";
	j = true;
}
}
var k = true;
function makered10(){
	if( k == true){
	document.getElementById("like9").style.color = "red";
	k = false;
}else{
	document.getElementById("like9").style.color = "white";
	k = true;
}
}