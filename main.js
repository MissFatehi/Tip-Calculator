const num1 = document.getElementById('number-1')
const num2 = document.getElementById('number-2')
const btn_add = document.getElementById('calc-btn')
const result = document.getElementById('result')

btn_add.addEventListener('click', ()=>{
    let num_1 = Number(num1.value) 
    let num_2 = Number(num2.value) 
    result.textContent = num_1 + num_2 

})