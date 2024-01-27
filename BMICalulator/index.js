const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height < 0 || isNaN(height) || height === '') {
        result.innerHTML = "Please enter a valid height";
    } else if (weight < 0 || isNaN(weight) || weight === '') {
        result.innerHTML = "Please enter valid weight";
    } else {
        const bmi = weight / ((height * height) / 10000);
        if(bmi< 18.5){
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You're underweight`;
        }else if(bmi >=18.5 && bmi <= 24.9){
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You're healthy`;
        }else if(bmi >24.9 && bmi<=29.9){
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You're Overweight`;
        }else if(bmi>29.9){
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You're obese`;
        }
        
    }
    
});
