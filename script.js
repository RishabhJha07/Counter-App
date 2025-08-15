const countVal=document.querySelector("#counter");

function increment(){
    let value=parseInt(countVal.innerText);
    value=value+1;
    countVal.innerText=value;
}

function decrement(){
    let value=parseInt(countVal.innerText);
    value=value-1;
    countVal.innerText=value;
}