const box = document.querySelector('.box');
const todoItself = document.querySelector('.todo-itself');
const todoField = document.querySelector('#todoField');
const addBtn = document.querySelector('.add');
const inputed = document.querySelector('.inputed');
const Edit = document.querySelector('#editTodo');
const btn = document.querySelector('#todoSend');
let arr = [];
let num = 0;
let arrays = [];
var array = localStorage.getItem('todo', arr);
let mainarr = [...arrays, ...arr];
console.log(mainarr);
localStorage.setItem('todo', arrays);

document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('todo', arrays);
    console.log(arrays);
    addBtn.addEventListener('click', () => {
        let text = todoField.value;
        mainarr += JSON.stringify(arr.push(text));
        console.log(arr);
        // console.log(mainarr);
        localStorage.setItem('todo', JSON.stringify(arr));
        if (text === '') {
            alert("Todo can't be Empty");
        } else {
            num++;
            todoField.select();
            document.execCommand('cut');

            let bodyHtml = '';
            bodyHtml += `                  <br> <article id="1" class="todo-itself">
                    <span id="num">${num}</span><p class="inputed">${text}</p>
                    <div class="buttons">
                    <span class="button" id="edit">Edit</span>
                    <span class="button" id="done">Done</span>
                    <span class="button" id="view">View</span>
                    </div>
                    </article><br><br>`;
            box.innerHTML += bodyHtml;
            const buttons = document.querySelectorAll('.button');
            btns = [...buttons];

            btns.forEach(item => {
                item.addEventListener('click', e => {
                    let E = e.target;
                    if (E.id === 'done') {
                        E.parentElement.parentElement.remove();
                        let previous = E.parentElement.previousElementSibling.parentElement;
                        console.log(previous);
                        num--;
                    } else if (E.id === 'edit') {
                        let edit = E.parentElement.previousElementSibling.textContent;
                        todoField.value = edit;
                        Edit.style.visibility = 'visible';

                        function editTodo() {
                            let newEdit = todoField.value;
                            if (text === newEdit) {
                                console.log('same text');
                            } else {
                                console.log(arr);
                                console.log(newEdit);
                                E.parentElement.previousElementSibling.textContent = newEdit;
                                setTimeout(() => {
                                    todoField.select();
                                    document.execCommand('cut');
                                    Edit.style.visibility = 'hidden';
                                }, 1000);
                            }
                        }
                        Edit.addEventListener('click', e => {
                            editTodo();
                        });
                    }
                });
            });
        }
    });
});