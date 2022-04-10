function myfunction1(){
    var a1 = document.getElementById('letter').value;

    if(a1=='a' || a1=='e' || a1=='o' || a1=='i' || a1=='u'){
        document.getElementById('result1').innerHTML="Charactor is a vowel";
    }
    else
    if(a1=='A' || a1=='E' || a1=='O' || a1=='I' || a1=='U'){
        document.getElementById('result1').innerHTML="Charactor is a vowel";
    }
    else
    if(a1=" ")
    {
        alert("Please enter charactor")
    }
    else{
        document.getElementById('result1').innerHTML="Charactor is not a vowel";
    }
}