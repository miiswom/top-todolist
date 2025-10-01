export const addingBtn = document.querySelector("#adding")

addingBtn.addEventListener("click", () => {
  addTask()
})

function addTask() {
  document.body.style.background = 'lime';
    modal.classList.add('hidden')
}
