let year = document.querySelector('#year')
let month = document.querySelector('#month')
let day = document.querySelector('#day')

let yError = document.querySelector('.yError')
let mError = document.querySelector('.mError')
let dError = document.querySelector('.dError')

let y= document.querySelector('.year')
let m= document.querySelector('.month')
let d= document.querySelector('.day')

function age(){
    let y1 = document.querySelector('#year').value
    let m1 = document.querySelector('#month').value
    let d1 = document.querySelector('#day').value
    

    let date = new Date()
    let y2 = date.getFullYear()
    let m2 = 1 + date.getMonth()
    let d2 = date.getDay()
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31 , 30 ,31]
    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1
    };
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1
    }
    
    y.textContent =  y2 - y1 + ' Years';
    m.textContent = m2 - m1 + ' months';
    d.textContent = d2 - d1 + ' days';
}

function formValidation(){
    if(year.value === ''){
        yError.textContent= 'field is required'
        yError.style.color='hsl(0, 100%, 67%)'
        let labelY = document.querySelector('.labelY')
        labelY.style.color='hsl(0, 100%, 67%)'
    }
    else if(year.value > 2024){
        y.textContent = '-- Years'
        yError.textContent= 'Must be a valid Year'
        yError.style.color='hsl(0, 100%, 67%)'
        let labelY = document.querySelector('.labelY')
        labelY.style.color='hsl(0, 100%, 67%)'
    }else{
        yError.textContent= ''
        yError.style.color=''
        let labelY = document.querySelector('.labelY')
        labelY.style.color='hsl(0, 0%, 8%)'
    }

    if(month.value ===''){
        mError.textContent= 'field is required'
        mError.style.color='hsl(0, 100%, 67%)'
        let labelM = document.querySelector('.labelM')
        labelM.style.color='hsl(0, 100%, 67%)'
    }
    else if(month.value > 12){
        m.textContent = '-- Months'
        mError.textContent= 'Must be a valid Month'
        mError.style.color='hsl(0, 100%, 67%)'
        let labelM = document.querySelector('.labelM')
        labelM.style.color='hsl(0, 100%, 67%)'
    }else{
        mError.textContent= ''
        mError.style.color=''
        let labelM = document.querySelector('.labelM')
        labelM.style.color='hsl(0, 0%, 8%)'
    }

    if(day.value ===''){
        dError.textContent= 'field is required'
        dError.style.color='hsl(0, 100%, 67%)'
        let labelD = document.querySelector('.labelD')
        labelD.style.color='hsl(0, 100%, 67%)'
    }
    else if(day.value > 31){
        d.textContent = '-- Months'
        dError.textContent= 'Must be a valid Day'
        dError.style.color='hsl(0, 100%, 67%)'
        let labelD = document.querySelector('.labelD')
        labelD.style.color='hsl(0, 100%, 67%)'
    }
    else{
        dError.textContent= ''
        dError.style.color=''
        let labelD = document.querySelector('.labelD')
        labelD.style.color='hsl(0, 0%, 8%)'
    }
}

const formSubmit = document.querySelector('#submit-btn');
formSubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    age()
    formValidation()
})




