const form = document.getElementById('form-exercise');


function validaCondicao(c,d) {
    return d > c
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numberA = document.getElementById('number-a')
    const numberB = document.getElementById('number-b')
    if (!validaCondicao(numberA.value, numberB.value)) {
        alert('O número B tem que ser maior do que o número A');
    } else {
        alert('Tudo certo')
    }
})

console.log(form)