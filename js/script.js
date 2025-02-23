let text = document.querySelectorAll(".text")
let para = document.querySelector(".para")


let converttext = Array.from(text)


converttext.map((item,)=>{
    let color =["white","yellow","green","blue","purple","lime"]

    let y = -1

    let count = 0
    
    function counterJs(){
        count++
        item.innerHTML=count
        if(count>=item.dataset.num){
            clearInterval(stop)
        }
        if(color.length==y){
            y=-1
        }
        if(count==item.dataset.num.length){
            item.style.color="white"
        }
        y++
        item.style.color=color[y]
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