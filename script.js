let myValues = document.getElementById("inputbox");

function display(num) {
    myValues.value += num;     // a += b (a = a + b)
}

function Clear(){
    myValues.value = "";
}

function del(){
    myValues.value = myValues.value.slice(0,-1);
}

function Calculate(){
    try{
        myValues.value = eval(myValues.value);
    }
    catch(err){
        alert("Invalid");
    }
}




























