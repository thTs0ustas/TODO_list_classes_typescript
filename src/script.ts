class Events {
  private todo: HTMLInputElement;
  private host: HTMLDivElement;
  private submitBtn: HTMLButtonElement;

  constructor() {
    this.todo = document.getElementById('todoInput')! as HTMLInputElement;
    this.host = document.getElementById('host')! as HTMLDivElement;
    this.submitBtn = document.getElementById('submit')! as HTMLButtonElement;

    this.submitBtn.addEventListener('click', () => this.addTodo(this.todo.value));
    this.todo.addEventListener('keyup', (event) =>
      event.code === 'Enter' ? this.addTodo(this.todo.value) : null
    );
  }

  addTodo(text: string) {
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

  deleteTodo(btn: HTMLButtonElement) {
    btn.parentElement!.remove();
  }
}

new Events();
