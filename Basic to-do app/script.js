let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTaskElement = document.querySelector('#total-tasks');

let taskList =[
    'Buy groceries',
    'Car service'
];
function deleteItem(e){
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if(index !== -1){
        taskList.splice(index, 1);

    }
    populateList();

}

function populateList() {
    listElement.innerHTML = '';
    taskList.forEach(function(item){
        let newItems = document.createElement('li');

        // Add new span for next
        let span = document.createElement('span');
        span.innerHTML = item;
        newItems.appendChild(span);

        // Add delete button
        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newItems.appendChild(anchorElement);

        anchorElement.addEventListener('click',(e)=> deleteItem(e));

        //add Li to UL
        listElement.appendChild(newItem);
    });
    
    totalTasksElement.innerHTML = taskList.length;
    inputElement.value = '';

}
populateList();

function doesNotHaveWhiteSpaces(s){
    let stringWithoutSpace = s.trim();
    return stringWithoutSpace.length > 0;

}

function addTask() {
    if (inputElement.value && doesNotHaveWhiteSpaces(inputElement.value) && !taskList.includes(inputElement.value)){
        taskList.push(inputElement.value);
        populateList();
    }
    inputElement.value = '';
}

formElement.addEventListener('submit',function (e) {
    e.preventDefault();
    addTask();
    

});

formElement.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();

});
        
