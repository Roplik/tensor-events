export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let firstClick = true;
    link.addEventListener('click', (event) => {
        if (firstClick) {
            event.preventDefault();
            link.textContent += ' ' + link.href;
            firstClick = false;
        }
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');

    const firstLi = document.createElement('li');
    firstLi.textContent = 'Пункт';
    ul.appendChild(firstLi);

    ul.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            target.textContent += '!';
        }
    });

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    button.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
