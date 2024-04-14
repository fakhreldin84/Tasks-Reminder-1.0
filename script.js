document.querySelector(".task-form").onsubmit = gettask
// ----------------------------------------------------
function gettask(event) {
  event.preventDefault()
  const TasksArray = [
    "0-Study java script.",
    "1-Sleep at 1am.",
    "2-Wake up Early at 8 am.",
    "3-Do your task in Eraasoft.",
    "4-Don't Give up.",
    "5-Don't go to sleep early.",
  ]

  const InpIndex = document.querySelector(".task-index-input").value

  if (InpIndex >= 0 && InpIndex <= TasksArray.length - 1) {
    document.querySelector(".tasks-count").textContent = TasksArray.length - 1
    document.querySelector(".selected-task").textContent = TasksArray[InpIndex]
    document.querySelector(".task-index-input").value = ""
  } else {
    document.querySelector(".tasks-count").textContent = TasksArray.length - 1
    document.querySelector(".selected-task").textContent =
      "Type number of the task first"
    document.querySelector(".task-index-input").value = ""
    alert("Enter the correct number")
  }
}
