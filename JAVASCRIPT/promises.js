const datas=[
    {name: "tushar",age: 12},
    {name: "ramesh",age: 20}
];

function getDatas(){
    setTimeout(() => {
        let output=" ";
        datas.forEach((data,index)=>{
            output+= `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
    }, 1000);  
}

function createdatas(newdata){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newdata);

            let error=false;
            if(!error){
                resolve();
            }else{
                reject();
            }
        }, 500);
    })
}
getDatas();
createdatas({name: "soham",age: 20},getDatas)