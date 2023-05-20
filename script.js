todos=[
    {
        name:"buy eggs",
        Id:"1",
        done:false
    },
    {
        name:"buy books",
        Id:"2",
        done:false
    },
    {
        name:"sleeep",
        Id:"3",
        done:true
    }
]
const todocontainer=document.getElementById("todo-container")

function render(){
    todocontainer.innerHtml=""
    todos.forEach(item => {
      todocontainer.appendChild(getTodo(item))  
    });
}

function getTodo(item){
   /* {
        name:"buy eggs",
        Id:"1",
        done:false
    }*/

    // <div class="todo">
    //         <input id="1" type="checkbox">
    //         <label for="1">do assignment</label>

    //</div>
        const container=document.createElement("div")
        container.classList.add("todo")

        const input=document.createElement("input")
        input.id=item.id;
        input.checked=item.done
        input.type="checkbox"
        container.appendChild(input)

        // input.addEventListener("change",(){
        //     item.done=!item.done
        //     render()
        // })

        const label=document.createElement("label")
        label.htmlFor=item.id;
        label.innerText=item.name
        if(item.done){
            label.classList.add("cut")
        }
        container.appendChild(label)
        return container

}

render()
