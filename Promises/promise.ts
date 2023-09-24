function deathTime(){
    let p1=new Promise((resolve,reject)=>{    // Promise Syntax --> let promise_Name = new Promise((resolve,reject)=>{..... resolve() / reject(new Error(".....")) })
        console.log("You will be killed in 3 seconds");
        resolve('Countdown starts now   !!!!!!')
    })
    p1.then((value)=>{     // promise_Name.then((value)=>{})  call next promise when first promise is fulfilled
        console.log(value);
        let p2=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("1 --------------!!!");
                resolve(value)
            },1000)
        })
        return p2                   
    }).then((value)=>{  // ({}).then((value)=>{})    promise chain
        let p3=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("2 --------------!!!");
                resolve(value)
            },1000)
        })
        return p3
    }).then(()=>{
        setTimeout(()=>{
            console.log("3 --------------!!!");
            setTimeout(()=>{console.log("May God give you heaven\nExecuted");},1000)
        },1000)
    })
}
deathTime()