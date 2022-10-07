var p = document.getElementById("price"),
    res = document.getElementById("result");

p.addEventListener("input", function() {
    res.innerHTML = p.value;
    console.log(p);
}, false); 