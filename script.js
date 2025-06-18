let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
// console.log(tasks);

const addTask = () => {
    let task = inputField.value.trim();
    const li = document.createElement("li");
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <span class="editBtn"><i class="fa-solid fa-pen-to-square"></i></span>
    <span class="deletBtn"><i class="fa-solid fa-trash"></i></span>
    `
    tasks.appendChild(li);
    inputField.value = "";
    // console.log(li);
    const checkbox = li.querySelector("input");
    let span1 = li.querySelector("span");
    const editBtn = li.querySelector(".editBtn");
    // console.log (checkbox);
    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
        counter();
    });
    editBtn.addEventListener("click", function () {
        const taskupdate = prompt("editer tache: ", span1.textContent)
        if (taskupdate !== null) {
            span1.textContent = taskupdate;
            checkbox.checked = false
            span1.classList.remove("checked");
        }
        counter();
    })

    const deletBtn = li.querySelector(".deletBtn");
    deletBtn.addEventListener("click", function () {
        if (confirm("voulez vous supprimer cette tache")) {
            tasks.removeChild(li);
        }
    })
};

const counter = () => {
    const completedtasks = document.querySelectorAll(".checked").length
    const compteur = document.getElementById("CompletedCounter");
    compteur.innerText = completedtasks;
    const taches = document.querySelectorAll("li>label>span:Not(.checked)").length;
    document.querySelector("#pendingCounter").textContent = taches;
    document.querySelector("#allCounter").textContent = taches + completedtasks;

}

const deletall = document.getElementById("deletall");
deletall.addEventListener("click", function () {
    if (confirm("etes vous sur de vouloir supprimer toutes les teches?")) {
        tasks.innerHTML = "";
        counter();
    }
})

counter();
