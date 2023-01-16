let form;
let action;

function findElements() {
    form = document.querySelector('form');
    ({ action } = form);
}

function sendForm() {
    return fetch(action);
}

function onSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    sendForm(currentTarget)
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        })
        .then(res => res.json())
        .then(data => console.log('+', data))
        .catch((e) => {
            console.log('Error: ' + e.message);
            console.log(e.response);
        });
}

function btnAction() {
    form.addEventListener('submit', onSubmit);
}

function init() {
    findElements();
    btnAction();
}

init(); 