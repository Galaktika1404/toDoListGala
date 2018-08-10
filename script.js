const list = [
    {title:'First',done:true},
    {title:'Second',done:false},
];

renderList();

function makeDone(order) {
    list[order].done = !list[order].done;
    renderList();
}

function addTuDo() {
    let todoInput = document.getElementById('input');
    let todoInputValue = todoInput.value;
    list.push({title: todoInputValue, done: false});

    todoInput.value = '';
    console.log(list);
    renderList();
}

function renderList() {

    const ul = document.getElementById('list');
    let li;
    let textForLi;

    let button;

    ul.innerHTML = '';

    list.forEach((item,i) => {
        li = document.createElement('li');
        li.innerHTML = item.title;

        button = document.createElement('button');
        button.setAttribute('order',i)
        button.innerHTML ='Done ' + i;

        button.addEventListener('click',(e) => {
            console.log('!!!',e.target.getAttribute('order'));
            makeDone(e.target.getAttribute('order'))
        })

        if(item.done)li.className = 'done';

        li.appendChild(button);
        ul.appendChild(li);
    })
}