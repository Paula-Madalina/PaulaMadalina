EX 1
function showMyName(){
    console.log("Prepelita Paula-Madalina");
}

EX 2
function showMyName() {
    alert("Prepelita Paula-Madalina")
}

// EX 3
function showMyName() {
    let text = document.getElementById("details");
    text.innerText = "Prepelita Paula-Madalina";
}


EX 4
function showMyName() {
    let text = document.getElementById("details");
    text.innerText = "Prepelita Paula-Madalina";
    text.style.backgroundColor = "yellow";
    text.style.color = "blue";
    text.style.border = "1px solid green";
}


EX 5
function calculateSum() {
    let a = parseInt(prompt());
    let b = parseInt(prompt());
    let c = parseInt(prompt());
    let paragraph = document.getElementById("details");
    paragraph.innerText = a + b + c;

    if(a==b && b==c) {
        paragraph.style.color = "blue";
    } else {
        paragraph.style.color = "red";
    }

}

EX 6
function calculateSum() {
    let a = parseInt(prompt());
    let paragraph = document.getElementById("details");
    if(a%2 == 0) {
        paragraph.innerText = "Even";
        paragraph.style.color = "blue";
        paragraph.style.backgroundColor = "yellow";
        paragraph.style.border = "1px solid green";
    } else {
        paragraph.innerText = "Odd";
        paragraph.style.color = "yellow";
        paragraph.style.backgroundColor = "black";
        paragraph.style.border = "1px solid red";
    
}
}
