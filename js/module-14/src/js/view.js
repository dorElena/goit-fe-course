import EventEmitter from '../services/event-emitter';

export default class View extends EventEmitter {
    constructor() {
        super();

        this.grid = document.querySelector('.grid');
        this.form = document.querySelector('.form');
        this.input = this.form.querySelector('.input');

        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }

    handleAdd(e) {
        e.preventDefault();

        const {value} = this.input;

        if (value === '') retur;

        this.emit('add', value);
    }

    createNote(note) {
        const item = document.createElement('div');
        item.dataset.id = note.id;
        item.classList.add('grid-item');

        const url = document.createElement('a');
        url.textContent = note.text;
        url.setAttribute('href', note.text);

        const button = document.createElement('button');;
        button.textContent = 'Удалить';
        button.dataset.action = 'remove';
        button.classList.add('button');

        item.append(url, button);
        
        this.appendEventListners(item);

        return item;
    }

    addNote(note) {
        const item = this.createNote(note);
    
        this.form.reset();
    
        this.grid.appendChild(item);
    }
    
    appendEventListners(item) {
        const removeBtn = item.querySelector('[data-action="remove"]');
        
        removeBtn.addEventListener('click', this.handleRemove.bind(this));
    }
    
    handleRemove({ target }) {
        const item = target.closest('.grid-item');
    
        this.emit('remove', item.dataset.id);
    }
    
    removeNote(id) {
        const item = this.grid.querySelector(`[data-id="${id}"]`);
        this.grid.removeChild(item);
    }
}