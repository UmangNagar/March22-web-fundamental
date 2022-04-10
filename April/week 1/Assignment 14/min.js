function myfunction(){
    var x = document.getElementById("first1").value;
    var y = document.getElementById("second1").value;
    var z = document.getElementById("third1").value;

    if(x<y & x<z){
        document.getElementById('result').innerHTML="first number is minimum";
    }
    else
    if(y<x & y<z){
        document.getElementById('result').innerHTML="second number is minimum";
    }
    else
    if(z<x & z<y){
        document.getElementById('result').innerHTML="third number is minimum";
    }
    else
    if(x==""){
                    alert("please enter all numbers");
    }
    else
    if(y==""){
                    alert("please enter all numbers");
    }
    else
    if(z==""){
                    alert("please enter all numbers");
    }
    else{
        document.getElementById('result').innerHTML='Invalid Input';
    }
    
}