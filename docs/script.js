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

$(document).ready(function(){
	$('.slider-1').slick({
		arrows:false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnFocus: true,
		autoplaySpeed:2500,
		speed: 1500,
		responsive: [{
			breakpoint: 900,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: false,
			variableWidth: true,
			}
		}],
	});
	$('.slider-2').slick({
		arrows:false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnFocus: true,
		autoplaySpeed:2500,
		speed: 1500,
		responsive: [{
			breakpoint: 900,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: false,
			variableWidth: true,
			}
		}],
	 });
});
