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
const opt5 = document.getElementById('opt5');
const opt6 = document.getElementById('opt6');
const msg = document.querySelectorAll('.msg');
let width = window.innerWidth;
const maxWidth = 1124;


// Pressing.


option.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.add('clicked');
    });
});

// Hovering.

if (width <= maxWidth) {
    optBtn.forEach(optBtn => {
        optBtn.addEventListener('click', event => {
            optBtn.classList.toggle('non-wanted-hovered');
        });
    });
} else {
    optBtn.forEach(optBtn => {
        optBtn.addEventListener('mouseover', event => {
            optBtn.classList.toggle('non-wanted-hovered');
        });
    });
}

// Helpers

/**
 * Add classes.
 * @param {*} s1 
 * @param {*} s2 
 */
function addClasses(s1, s2) {
    s1.classList.add('inactive');
    s1.classList.add('go');
    s2.classList.remove('inactive');
    s2.classList.add('active');
}

// Pagination.

btn1.addEventListener('click', () => {
    addClasses(section1, section2);
});

btn2.addEventListener('click', () => {
    if (opt1.classList.contains('clicked')) {
        addClasses(section2, section3);
    
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

btn3.addEventListener('click', () => {
    if (opt2.classList.contains('clicked')) {
        addClasses(section3, section4);
    
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

btn4.addEventListener('click', () => {
    if (opt3.classList.contains('clicked')) {
        addClasses(section4, section5);
    
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

btn5.addEventListener('click', () => {
    if (opt4.classList.contains('clicked')) {
        addClasses(section5, section6);
    
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