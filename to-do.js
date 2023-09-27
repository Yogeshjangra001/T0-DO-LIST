
let input_box = document.getElementById("input-box");
let list_item = document.getElementById("list-container")


function task(){
    if(input_box.value === ""){
        alert("Kuch likh to shi ya kimi aave hi na");
    }
    else{let li = document.createElement("li");
    li.innerText += input_box.value;
    list_item.appendChild(li);
    let span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = "\u00d7";
    span.addEventListener("click",()=>{
        span.parentElement.remove()
    })
}
input_box.value = "";



}

list_item.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
})