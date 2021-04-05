const loveMe = document.querySelector('.love-me')
const times = document.getElementById('times')

let clickTime = 0

loveMe.addEventListener('click', (e) => {

    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            console.log(123)
        } else {
            clickTime = new Date().getTime()
        }
    }
    
})