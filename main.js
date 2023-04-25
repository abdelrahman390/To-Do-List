
// $$$$$$ problems $$$$$$$
 // 1 - must refrish to delet just added items from local storag 

/*
    2- when two tasks is same when delet one of them there are delet both two from local storag 
    but will delet one only on page and must refrish to delet two from page
*/
// $$$$$$$$$$$$$


let addButton = document.querySelector(".add");
let input = document.querySelector(".input");
let added = document.querySelector(".task");
let reset = document.querySelector(".reset");
let myArray = []
let delButton = document.createElement("button")
let contentBox = document.createElement("div")


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
        event.preventDefault();
      // Trigger the button element with a click
        addButton.click();
        location.reload = function (){
            input.focus();
        }
    }
});


// condetion
if (window.localStorage.getItem("name")){

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

// add to page and local storag
    addButton.onclick = function () {

        if (input.value === "" ){
            return;
        } else{

            myArray.push(JSON.parse(`{"id": "${"#"}","name": "${input.value}"}`))
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

            input.value = ""
            
        }
}





// delet task from page
let button = document.querySelectorAll(".dilButton")

button.forEach((t) =>{

    t.onclick = function () {

        t.parentElement.remove()
        
                // this new variable always will be number of local storage
                var items = JSON.parse(localStorage.getItem('name'));

                for(i = 0; i <= myArray.length; i ++){
        
                    console.log(`${items[i].name} === ${t.id}`)
                    let testmyArray = myArray.filter((task) => task.name != t.id)
                    console.log(testmyArray) 
                    myArray = testmyArray
                    console.log(myArray)
                    localStorage.setItem("name", JSON.stringify(myArray))

                }
    }
})

reset.onclick = function  (){
    window.localStorage.clear()
}
