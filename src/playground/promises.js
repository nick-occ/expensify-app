const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('This is my resolved data');
        reject('something wrong');
    },1500)
    
});

console.log('before');

promise.then((data)=>{
    console.log('1',data);
});

promise.catch((err)=>{
    console.log(err)
})

console.log('after');