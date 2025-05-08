const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Naming the inputbox and ListContainer 

function addTask(){
  if (inputBox.value === ''){
    alert ("You must write something!"); //if you add nothing ,it'll show alert.
  } 

  
  else   {
    let li = document.createElement("li"); // or it'll create li tag 
    li.innerHTML = inputBox.value; //equal with inputBox.value
    listContainer.appendChild(li); //li will appear as appendchild in listcontainer 

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // This is for <span> × symbol </span> (used as delete)
    //\u00d7 is a Unicode character. It represents: The "×" symbol
    li.appendChild(span);
  }
  inputBox.value = ""; //“Clear the text box after adding the task.”
  saveData(); // to save in  Browser
}


listContainer.addEventListener ("click",function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");//If you click on a task (the <li>), it marks it as "done" (adds a checked class).
    // if you want to change toggle add like this everytime "-----.classList.toggle("checked");"
    saveData(); 
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); //If you click on the × symbol (the <span>), it deletes the task.
    saveData();
  }
});


function saveData (){  //This part saves all tasks in your browser (so they stay when you refresh).
//saveData() stores the task list.
  localStorage.setItem("data",listContainer.innerHTML);
}
 function showtask(){ //“Hey browser, give me the task list I saved earlier.”
  listContainer.innerHTML = localStorage.getItem("data");
 }
 showtask();
