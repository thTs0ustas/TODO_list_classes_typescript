"use strict";
class Events {
    constructor() {
        this.todo = document.getElementById('todoInput');
        this.host = document.getElementById('host');
        this.submitBtn = document.getElementById('submit');
        this.submitBtn.addEventListener('click', () => this.addTodo(this.todo.value));
        this.todo.addEventListener('keyup', (event) => event.code === 'Enter' ? this.addTodo(this.todo.value) : null);
    }
    addTodo(text) {
        if (!text.length) {
            return alert('Empty input');
        }
        let node = document.createElement('div');
        node.classList.add('col-8', 'offset-2', 'line');
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.textContent = text;
        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.classList.add('btn', 'btn-danger');
        button.addEventListener('click', () => this.deleteTodo(button));
        node.appendChild(paragraph);
        node.appendChild(button);
        this.host.appendChild(node);
        this.todo.value = '';
    }
    deleteTodo(btn) {
        btn.parentElement.remove();
    }
}
new Events();
