let addTask=document.querySelector("#addTask");
let delBut=document.querySelectorAll(".delete");
let inp=document.querySelector("input");

addTask.addEventListener("click",insertTask);
let ul= document.querySelector("ul");
ul.addEventListener("click",function(event){
    /*ensures that only target which has delete as class gets deleted.
    Any click inside the <ul> will trigger event.target.parentElement.remove(), 
    potentially removing the entire <li> even if you click on the text
     or other parts of the task item, not just the delete button.*/
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
})
function insertTask(e){
    let newTask=document.createElement("li");
    newTask.innerText=inp.value;

    let delbut=document.createElement("button");    
    // delbut.addEventListener("click",function(){
    //     let par = this.parentElement;
    //     par.remove();
    //  })
    delbut.innerText="Delete"
    delbut.classList.add("delete");
    newTask.appendChild(delbut);
    

    inp.value="";//so that input textbox gets reset after adding task
    let ul= document.querySelector("ul");
    ul.append(newTask);
    
}
