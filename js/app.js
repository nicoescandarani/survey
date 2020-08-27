const optBtn = document.querySelectorAll('.non-wanted');
const option = document.querySelectorAll('.wanted');
const btn1 = document.getElementById('nextButton1');
const btn2 = document.getElementById('nextButton2');
const btn3 = document.getElementById('nextButton3');
const btn4 = document.getElementById('nextButton4');
const btn5 = document.getElementById('nextButton5');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const msg = document.querySelectorAll('.msg');
const questions = document.querySelectorAll('.question');
const maxWidth = 1124;
let width = window.innerWidth;
const counter = document.querySelector('.counter');
const countSpan = document.getElementById('QNumber');
const countTotal = document.getElementById('QTotal');
let countQTotal = questions.length;
let count = 0;
let hovConut = 0;


// ! Counting.


countTotal.innerHTML = countQTotal;

function displayCurrentQNumber() {
    count++;
    countSpan.innerHTML = count;
}

// ! Pressing.

function countHover() {
    hovConut++;
    return hovConut;
}

option.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.add('clicked');
    });
});

// ! Hovering.

if (width <= maxWidth) {
    optBtn.forEach(optBtn => {
        optBtn.addEventListener('click', event => {
            console.log("HOLA!!");
            optBtn.classList.toggle('non-wanted-hovered');
            let countHov = countHover();
    
            if (countHov > 3) {
                msg.forEach(msg => {
                    msg.classList.add('show-msg');
                });
            }
        });
    });
} else {
    optBtn.forEach(optBtn => {
        optBtn.addEventListener('mouseover', event => {
            optBtn.classList.toggle('non-wanted-hovered');
            let countHov = countHover();
            
            // ! Check.
            
            if (countHov > 3) {
                msg.forEach(msg => {
                    msg.classList.add('show-msg');
                });
            }

        });
    });
}

// ! Helpers

/**
 * Add classes.
 * @param {*} s1 
 * @param {*} s2 
 */
function addClasses(s1, s2, s2Class) {
    s1.classList.add('inactive');
    s1.classList.add('go');
    s2.classList.remove('inactive');
    s2.classList.add(s2Class);
}

// ! Pagination.

btn1.addEventListener('click', () => {
    addClasses(section1, section2, 'active-section');
    displayCurrentQNumber();
    counter.style.display = 'block';
});

opt1.addEventListener('click', () => {

    if (opt1.classList.contains('clicked')) {
    
        addClasses(section2, section3, 'active-section');
        displayCurrentQNumber();
    
        msg.forEach(msg => {
            if (msg.classList.contains('show-msg')) {
                msg.classList.remove('show-msg');
            }
        });
        
    } else {
        msg.classList.add('show-msg');
    }
    
});

opt2.addEventListener('click', () => {
    if (opt2.classList.contains('clicked')) {
        addClasses(section3, section4, 'active-section');
        displayCurrentQNumber();
    
    msg.forEach(msg => {
        if (msg.classList.contains('show-msg')) {
            msg.classList.remove('show-msg');
        }
    });
    
    } else {
        msg.forEach(msg => {
            msg.classList.add('show-msg');
        });
    }
});

opt3.addEventListener('click', () => {
    if (opt3.classList.contains('clicked')) {
        addClasses(section4, section5, 'active-section');
        displayCurrentQNumber();
    
    msg.forEach(msg => {
        if (msg.classList.contains('show-msg')) {
            msg.classList.remove('show-msg');
        }
    });
    
    } else {
        msg.forEach(msg => {
            msg.classList.add('show-msg');
        });
    }
});

opt4.addEventListener('click', () => {
    if (opt4.classList.contains('clicked')) {
        addClasses(section5, section6, 'active');
        counter.style.display = 'none';
    
    msg.forEach(msg => {
        if (msg.classList.contains('show-msg')) {
            msg.classList.remove('show-msg');
        }
    });
    
    } else {
        msg.forEach(msg => {
            msg.classList.add('show-msg');
        });
    }
});