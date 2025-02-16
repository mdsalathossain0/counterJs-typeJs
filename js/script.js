let text = document.querySelectorAll(".text")
let para = document.querySelector(".para")


let converttext = Array.from(text)


converttext.map((item,)=>{
    
    let count = 0
    function counterJs(){
        count++
        item.innerHTML=count

        if(count>=item.dataset.num){
            clearInterval(stop)
        }
    }
    let stop=setInterval(()=>{
        counterJs()
        
    }, item.dataset.time)
})
// type Js
console.log();
let x=0

function typeJs(){
    para.innerHTML+=para.dataset.info.charAt(x)
    x++
     if(x>=para.dataset.info.length){
        para.innerHTML=""
        x = 0
     }
    
}

let lemon=setInterval(()=>{
    typeJs()
},para.dataset.ptime)