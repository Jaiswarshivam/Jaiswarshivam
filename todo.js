const inputBox = document.querySelector(".input"); // Selecting the first element with class "input"
const listC = document.querySelector(".list"); 

function addTask() {
  if (inputBox.value === '') {
    alert("You Must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listC.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value= "";
  saveData();
}

listC.addEventListener("click", function(e){
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    saveData();
} else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
}
}, false);



function saveData (){
    localStorage.setItem("tasks", listC.innerHTML);

}
function showTasks() {
      listC.innerHTML = localStorage.getItem("tasks"); 
    
  }

showTasks();
