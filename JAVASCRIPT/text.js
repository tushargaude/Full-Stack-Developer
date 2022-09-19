
function getDatas(){
    setTimeout(() => {
        let output=" ";
        datas.forEach((data,index)=>{
            output+= `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
    }, 1000);  
}

function createdatas(newdata,callback){
    setTimeout(() => {
        datas.push(newdata);
        callback();
    }, 500);
}
getDatas();
createdatas({name: "soham",age: 20},getDatas)