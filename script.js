var input = document.querySelector('input');

const clickShowNumber = (num)=>{
    input.value = input.value+num;
}

const calculate = ()=>{
    input.value = eval(input.value);
}