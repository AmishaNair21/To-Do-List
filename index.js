const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");


function addTask(){
    //validation check
    if(inputBox.value ===""){
        alert("You must write something")

    }

    //creating new list with value in it & adding child li to parent list container
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    //clearing input field
    inputBox.value="";

    //saving locally
    saveData();
}

//function called in onclick 

//checked and delete function
listContainer.addEventListener("click",(e)=>{
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();

}

else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}


},false);


//save after browser closed or refresh
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


//showing what has beed saved after refresh or browser closed
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();