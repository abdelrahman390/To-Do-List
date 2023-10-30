
let addButton = document.querySelector(".add"),
    input = document.querySelector(".input"),
    added = document.querySelector(".task"),
    reset = document.querySelector(".reset"),
    delButton = document.createElement("button"),
    contentBox = document.createElement("div"),
    myArray = [];

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addButton.click();
        location.reload = function () {
            input.focus();
        }
    }
});


// condetion
if (window.localStorage.getItem("name")) {

    myArray = JSON.parse(window.localStorage.getItem("name"))

    myArray.forEach(data => {

        let contentBox = document.createElement("div")
        let cerh1 = document.createElement("h2")
        let delButton = document.createElement("button")

        delButton.id = data.name;
        cerh1.className = "task-box"
        delButton.innerText = "Delete"
        contentBox.className = "dilBox"
        delButton.className = "dilButton"

        cerh1.appendChild(delButton)
        added.appendChild(contentBox)
        contentBox.appendChild(cerh1)
        contentBox.appendChild(delButton)

        cerh1.innerHTML = data.name;
    })
}

// add to page and local storage
addButton.onclick = function () {

    const d = new Date();
    let year = d.getFullYear(),
        Month = d.getMonth(),
        day = d.getDate();

    if (input.value === "") {
        return;
    } else {

        myArray.push(JSON.parse(`{"id": "${"#"}","name": "${input.value} <br> <h5>${year}/${Month + 1}/${day}</h5>"}`))
        window.localStorage.setItem("name", JSON.stringify(myArray))

        let contentBox = document.createElement("div")
        let cerh1 = document.createElement("h2")
        let delButton = document.createElement("button")

        delButton.id = input.value
        cerh1.className = "task-box"
        delButton.innerText = "Delete"
        contentBox.className = "dilBox"
        delButton.className = "dilButton"

        cerh1.appendChild(delButton)
        added.appendChild(contentBox)
        contentBox.appendChild(cerh1)
        contentBox.appendChild(delButton)

        cerh1.innerHTML = input.value

        location.reload() = function () {
            document.querySelector(".input").focus();
        }

        input.value = ""

    }
}


// delet task from page
let button = document.querySelectorAll(".dilButton")
console.log(document.querySelector(".dilButton"))
button.forEach((t) => {

    t.onclick = function () {

        t.parentElement.remove()

        // this new variable always will be number of local storage
        var items = JSON.parse(localStorage.getItem('name'));

        for (i = 0; i <= myArray.length; i++) {
            // console.log(`${items[i].name} === ${t.id}`)
            let testmyArray = myArray.filter((task) => task.name != t.id)
            // console.log(testmyArray) 
            myArray = testmyArray
            // console.log(myArray)
            localStorage.setItem("name", JSON.stringify(myArray))
        }
    }
})

reset.onclick = function () {
    window.localStorage.clear()
    location.reload()
}
