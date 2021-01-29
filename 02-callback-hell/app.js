// document.body.style.backgroundColor = 'red';
// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue';
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


const delayColorChange = (newColor,delay,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

const offSetTime = 1000;
delayColorChange('red', offSetTime, () => {
    delayColorChange('orange', offSetTime, () => {
        delayColorChange('yellow', offSetTime, () => {
            delayColorChange('green', offSetTime, () => {
                delayColorChange('blue', offSetTime);
            });
        });
    });
});