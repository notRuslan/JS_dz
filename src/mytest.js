/*console.log('till');
 const promise = new Promise(function(resolve, reject){
 console.log('in');
 });
 console.log('out');*/


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('till');
            resolve();
            console.log('resolved');
        }, ms)
    });

}

const prom = delay(2000);
prom
    .then(() => console.log(1))
    .then(() => {
        setTimeout(() => console.log(2), 3000)
    })
    .then(() => {
        setTimeout(() => console.log(3), 2000)
    });
