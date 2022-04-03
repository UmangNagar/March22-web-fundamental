function myfunction(){
    var a = document.getElementById('input').value;
    if(a==""){
       alert(pleaseenterthenumber);
    }
    if(a>10)
    {
        document.getElementById('output').innerHTML="Input is greater than 10";
    }

    else
     if(a==10){
        document.getElementById('output').innerHTML="Input is equal to 10";
    }

    else{
        document.getElementById('output').innerHTML="Input is less than 10"; 
    }
}