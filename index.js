let year = document.querySelector('#year')
let month = document.querySelector('#month')
let day = document.querySelector('#day')

let yError = document.querySelector('.yError')
let mError = document.querySelector('.mError')
let dError = document.querySelector('.dError')

let y= document.querySelector('.year')
let m= document.querySelector('.month')
let d= document.querySelector('.day')

function age() {
    let y1 = document.querySelector('#year').value
    let m1 = document.querySelector('#month').value
    let d1 = document.querySelector('#day').value

    let date = new Date()
    let y2 = date.getFullYear()
    let m2 = (1 + date.getMonth()).toString().padStart(2, '0'); // Format month as 2 digits
    let d2 = date.getDate()

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31 , 30 ,31]
    
    let ageYears = y2 - y1; // Calculate initial year difference

    if (m1 > m2 || (m1 === m2 && d1 > d2)) {
        // If the current month is before the birth month or if it's the birth month but the birth day hasn't passed yet
        ageYears--; // Decrease the year count
    }

    let ageMonths = m2 - m1;
    if (ageMonths < 0) {
        ageMonths += 12; // If the month difference is negative, adjust for previous year
    }

    let ageDays = d2 - d1;
    if (ageDays < 0) {
        // Adjust the day count if current day is less than birth day
        ageDays += month[m2 - 1];
        ageMonths--; // Decrease the month count if days were borrowed
        if (ageMonths < 0) {
            ageMonths += 12; // If month count is negative, adjust for the previous year
            ageYears--; // Decrease year count if needed
        }
    }

    y.textContent = ageYears + ' Years';
    m.textContent = ageMonths + ' months';
    d.textContent = ageDays + ' days';
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




