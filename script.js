const todoinput=document.getElementById('todoinput');
const todoitem=document.getElementsByClassName('todoitem')[0];
console.log(todoitem)
const addTask=()=>{
    if(todoinput.value !=''){
        const li=document.createElement("li");
        const span=document.createElement("span");
        li.innerHTML=todoinput.value;
        span.innerHTML="\u00d7";
        todoitem.append(li);
        li.appendChild(span)
        localst();
    }
    else{
        alert("Some Thing Must Right here !");
    }
    todoinput.value='';
}

const localst=()=>{
    window.localStorage.setItem('data',todoitem.innerHTML);
    todoinput.innerHTML=window.localStorage.getItem('data');
}

const getlocal=()=>{
        todoitem.innerHTML=window.localStorage.getItem('data');
}

todoitem.addEventListener('click',(e)=>{
    if(e.target.tagName=='LI')
    {
        e.target.classList.toggle('checked');
        // e.target.contentEditable = 'true';
        localst();
    }
    else if(e.target.tagName=="SPAN")
    {
        e.target.parentElement.remove();
        localst();
    }
})

getlocal()