function number(num){
    console.log(num)
    document.getElementById("txt").value += num;

}

function displayResults(){
    let x = document.getElementById("txt").value;
    let y = eval(x);
    document.getElementById("txt").value = y;

}

function clearAll(){
    document.getElementById("txt").value = "";
}

function backspace(){
    let x = document.getElementById("txt").value;
    let a = x.slice(0, -1)
    document.getElementById("txt").value = a;
}









































