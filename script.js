const inputBox = document.getElementById('input-box');
const listCon = document.getElementById('list-container');

const addTask = () => {
    if(inputBox === ''){
        alert('Add a task');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);
        inputBox.value = '';
        let span = document.createElement('span');
        span.innerHTML = 'u/00d7';
    }
};