
function myfunction(){

    let a=document.getElementById('input1').value;
    let b=document.getElementById('input2').value;
    
    let c=a;
    a=b;
    b=c;
    
    document.getElementById('answer1').value=a;
    document.getElementById('answer2').value=b;
    

}
