const inputBox = document.getElementById('input-box');
const listCon = document.getElementById('list-container');
const addButton = document.getElementById('add-button');

const addTask = () => {
    if(inputBox.value === ''){
        alert('Add a task');
    }else{
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = inputBox.value;
        li.appendChild(p);
        li.ariaLabel = 'Task'
        listCon.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        span.ariaLabel = 'Delete task button.'
        li.appendChild(span)
    }
    inputBox.value = '';
    saveTask();
};

const checkUncheckOrRemoveTask = (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTask();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
}

const handleEnterKeyPress = (event) => {
    if(event.key === 'Enter'){
        addTask();
    };
}

const saveTask = () => {
    localStorage.setItem('data', listCon.innerHTML)
}

const showTask = () => {
 listCon.innerHTML = localStorage.getItem('data')
}

addButton.addEventListener('click', addTask);
inputBox.addEventListener('keyup', handleEnterKeyPress);
listCon.addEventListener('click', checkUncheckOrRemoveTask, false);
showTask();
