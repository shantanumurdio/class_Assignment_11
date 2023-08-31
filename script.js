document.addEventListener("keydown" ,(e)=>{
    var h1 = document.getElementById("key");
    var h2 = document.getElementById("keyNumber");
    h1.innerText = "You Pressed :- " + e.key;
    h1.style.boxShadow = "0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20)";
    h1.style.backgroundColor = "rgb(178, 228, 228)";
    // h2.style.border = "2px solid black";
    h2.style.backgroundColor = "rgb(178, 228, 228)";
    h2.style.boxShadow = "0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20)";
    h2.innerText = e.keyCode;
})