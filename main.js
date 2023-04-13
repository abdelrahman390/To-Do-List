/*
steps: 1- when click on {add tast} git inner valiu and add it to lokal storage

2- get the stored text in local storage and put it in div 

3- add delet button to div that have text to delet it

*/

// window.localStorage.clear()


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
    }
  });


// condetion
if (window.localStorage.getItem("name")){

            myArray = JSON.parse(window.localStorage.getItem("name"))

                    myArray.forEach(data => {
                
                    let contentBox = document.createElement("div")
                    let cerh1 = document.createElement("h2")
                    let delButton = document.createElement("button")


                    cerh1.className = "task-box"
                    delButton.innerText = "Delete"
                    contentBox.className = "dilBox"
                    delButton.className = "dilButton"


                    contentBox.style.cssText = "display: flex; justify-content: space-between; width: 60%; margin: auto; background-color: white; padding: 10px; align-items: center; border-radius: 10px; margin-bottom: 30px;"
                    delButton.style.cssText = "border: none; background-color: red; color: white; border-radius: 5px; padding: 15px; cursor: pointer;"

                    cerh1.appendChild(delButton)
                    added.appendChild(contentBox)
                    contentBox.appendChild(cerh1)
                    contentBox.appendChild(delButton)

                        // i make id for elemint olredy exest in local storage with that code
                        let testbutton = document.querySelectorAll(".dilButton")
                        let i = 0;
                        testbutton.forEach(data => {
                            delButton.id = i = i + 1
                            }) 
                    
                    cerh1.innerHTML = data.name;


            })

}


    addButton.onclick = function () {


        if (input.value === "" ){
            return;
        } else{


            myArray.push(JSON.parse(`{"id": "${Object.values(myArray).length + 1}","name": "${input.value}"}`))
            window.localStorage.setItem("name", JSON.stringify(myArray))


                    let contentBox = document.createElement("div")
                    let cerh1 = document.createElement("h2")
                    let delButton = document.createElement("button")
                    
                    cerh1.className = "task-box"
                    delButton.innerText = "Delete"
                    contentBox.className = "dilBox"
                    delButton.className = "dilButton"


                    contentBox.style.cssText = "display: flex; justify-content: space-between; width: 60%; margin: auto; background-color: white; padding: 10px; align-items: center; border-radius: 10px; margin-bottom: 30px;"
                    delButton.style.cssText = "border: none; background-color: red; color: white; border-radius: 5px; padding: 15px; cursor: pointer;"


                    cerh1.appendChild(delButton)
                    added.appendChild(contentBox)
                    contentBox.appendChild(cerh1)
                    contentBox.appendChild(delButton)



                    // i make id for elemint that just added to page
                    let testbutton = document.querySelectorAll(".dilButton")
                    testbutton.forEach(data => {
                        delButton.id = Object.values(myArray).length 
                        }) 

                    cerh1.innerHTML = input.value

            input.value = ""

            location.reload = function (){
                input.focus();
                // event.preventDefault()
            }
        }

}




let button = document.querySelectorAll(".dilButton")

button.forEach((t) =>{
    t.onclick = function () {
        t.parentElement.remove()
        console.log(t.id)

        var items = JSON.parse(localStorage.getItem('name'));

        // for (var i = 0; i < items.length; i++) {
            // var objectt = JSON.parse(items[i]);
            // if(objectt.request_id == t.id){
            console.log(items) 
            items.splice(t.id - 1, 1);// slice doesn't work not sure why
            console.log(items)
            items = JSON.stringify(items)   
            console.log(myArray)
            localStorage.setItem("name", items)
            // }     
        // }
        // myArray.forEach(data => {
        //     console.log(data)
        // })
    }
})

// window.localStorage.clear()

// we cant use if after refrish ///// it returns number only
var arrayLingth = Object.values(myArray).length



reset.onclick = function  (){
    window.localStorage.clear()
}


