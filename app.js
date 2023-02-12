const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const regex = {
    name: /^[a-zA-Z\s]{4,25}$/, // Name
    // card: /^\d{16}$/, //Card Numbre
    card: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, //Card Numbre
    month: /^([1-9]|1[0-2])$/,  // Month
    days: /^(?:(?:[1-9]|[12][0-9]|3[01])$)/, // Days
    cvc: /^[0-9]{3}$/ //CVC
}
console.log(document.querySelector('main form .number-error'));
const validarForm = (e) => {
    switch (e.target.name) {
        case 'name':
            if (regex.name.test(e.target.value)) {
                document.getElementById('name').classList.remove('i-wrong');
                document.querySelector('header .name .card-name').innerHTML = e.target.value;
            } else {
                document.getElementById('name').classList.add('i-wrong');
            }
            break;
        case 'card-number':
            if (regex.card.test(e.target.value)) {
                document.getElementById('card-number').classList.remove('i-wrong');
                document.querySelector('main form .number-error').classList.remove('p-wrong');
                document.querySelector('header .card-number .card-n').innerHTML = e.target.value;

            } else {
                document.getElementById('card-number').classList.add('i-wrong');
                document.querySelector('main form .number-error').classList.add('p-wrong');
            }
            break;
        case 'day':
            if (regex.days.test(e.target.value)) {
                document.getElementById('day').classList.remove('i-wrong');
                document.querySelector('main form .date-error').classList.remove('p1-wrong');
                document.querySelector('header .cc-front .span-day').innerHTML = e.target.value;
            } else {
                document.getElementById('day').classList.add('i-wrong');
                document.querySelector('main form .date-error').classList.add('p1-wrong');
            }
            break
        case 'month':
            if (regex.month.test(e.target.value)) {
                document.getElementById('month').classList.remove('i-wrong');
                document.querySelector('main form .date-error').classList.remove('p1-wrong');
                document.querySelector('header .cc-front .span-month').innerHTML = e.target.value;
            } else {
                document.getElementById('month').classList.add('i-wrong');
                document.querySelector('main form .date-error').classList.add('p1-wrong');
            }
            break
        case 'cvc':
            if (regex.cvc.test(e.target.value)) {
                document.querySelector('main form .cvc-error').classList.remove('p1-wrong');
                document.getElementById('cvc').classList.remove('i-wrong');
                document.querySelector('header .cc-back p').innerHTML = e.target.value;

            } else {
                document.getElementById('cvc').classList.add('i-wrong');
                document.querySelector('main form .cvc-error').classList.add('p1-wrong');

            }
            break
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
})