let weightEl=document.getElementById('weight-in-kg')
let heightEl=document.getElementById('height-in-cm')

let calcBtn=document.getElementById('calc-btn')

let bmiEl=document.getElementById('bmi')


calcBtn.addEventListener('click', function(){
    
    let weight=weightEl.value

    let height=heightEl.value
    let heightInMetres=(height/100).toFixed(2)

    let bmi=(weight/(heightInMetres*heightInMetres)).toFixed(1)
    bmiEl.innerText="Your BMI: "+bmi
})