let task = document.getElementById('task');
let btn = document.getElementById('btn');

btn.addEventListener('click', main);


function fetchingData() {
    fetch('https://dummyjson.com/todos/random')
    .then(res => res.json())
    .then(json => {
        let todoData = json.todo;
        task.innerHTML = `"${todoData}"`;
    })
    .then(hideLoader);
};

function showLoader (){
    let loader = document.getElementById('loader');
    loader.style.display = 'inline-block';
    task.style.display = 'none';
    
};

function hideLoader (){
    let loader = document.getElementById('loader');
    loader.style.display = 'none';
    task.style.display = 'block';
};

function main (){
    showLoader();
    fetchingData();
};