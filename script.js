let blocks=document.getElementsByClassName("colorb")
let clickcount=0
var randcolor=function(){
    let r=Math.floor((Math.random() * 255) + 1);
    let b=Math.floor((Math.random() * 255) + 1);
    let g=Math.floor((Math.random() * 255) + 1);
    return [r,b,g]
}
let caar=randcolor();
let constcolor="rgb("+caar[0]+", "+caar[1]+", "+caar[2]+")";
let dynamic=document.getElementById('dynamic')
dynamic.innerHTML=constcolor;
let ra=Math.floor((Math.random() * 5) + 1);
document.getElementById('title').style.backgroundColor="#0074D9"
for(var i=0;i<blocks.length;i++){
    
    if (i==ra) {
        blocks[i].style.backgroundColor=constcolor;
        flag=false;
    }
    else{
        let c=randcolor()
        blocks[i].style.backgroundColor="rgb("+c[0]+", "+c[1]+", "+c[2]+")"; 
    }
}

let chances=document.getElementById('chances')

for(let k=0;k<blocks.length;k++){
    blocks[k].onclick=function(){
        clickcount++
        chances.innerHTML=(3-clickcount);
        if(this.style.backgroundColor==constcolor){
            if(document.getElementById('finish').innerHTML=="You Lose, Click restart to try again"){
                console.log('already lost');
            }
            else{
                document.getElementById('title').style.backgroundColor=constcolor
                document.getElementById('finish').innerHTML="You Win !!"
                document.getElementById('finish').classList.add('w')
            }
        }
        else if(clickcount>=3) {
            if(document.getElementById('finish').innerHTML=="You Win !!"){
                console.log('already won')  
            }
            else{
                document.getElementById('finish').innerHTML="You Lose, Click restart to try again"
                document.getElementById('finish').classList.add('l')
            }
        }
        else{
            this.remove()
            // cannot read property 0 of undefined
            // document.this.style.visibility="hidden"
        }
    }
}

document.getElementById('restart').addEventListener("click", function(){
    location.reload(true)
})