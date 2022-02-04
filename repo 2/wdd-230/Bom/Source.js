const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click',
    function(){
        const item = document.createElement('li');
        const del = document.createElement('button');

        item.textContent = input.value;
        del.textContent = 'X';

        item.appendChild(del);
        list.appendChild(item);

        del.addEventListener('click', function(){list.removeChild(item)});

        input.focus();
        input.value = '';
    }
);