function myfunction(){
    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;
    var c = document.getElementById('input3').value;

if(a>b & a>c){
    document.getElementById('output').innerHTML="1st Number is greatest";
}
else
if(b>a & b>c){
    document.getElementById('output').innerHTML="2nd Number is greatest";
}
else
if(c>b & c>a){
    document.getElementById('output').innerHTML="3rd Number is greatest";
}
}