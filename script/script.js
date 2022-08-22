

const days = document.querySelector('.header__data-days'),
    hours = document.querySelector('.header__data-hours'),
    minutes = document.querySelector('.header__data-minutes'),
    second = document.querySelector('.header__data-second')

    function data() {
        second.innerHTML -= 1;
        if(second.innerHTML == 0) {
            minutes.innerHTML -= 1;
            second.innerHTML = 59;
        }else if(minutes.innerHTML == 0) {
            hours.innerHTML -= 1;
            minutes.innerHTML = 59;
        }else if(hours.innerHTML == 0) {
            days.innerHTML -= 1; 
            hours.innerHTML = 23
        }
        setTimeout(() => data(), 1000);
    }
    data()