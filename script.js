
const img=document.getElementById('wheel');

function spinit(img){
    let angle= Math.floor(Math.random() *360)+3600;
    img.style.transform="rotate("+angle+"deg)";

}
document.querySelector('.spinbutton').onclick=function(){
    let randomTimes=Math.floor(Math.random()*50)+10;
    //for (let i=0;i<randomTimes;i++){
    let i=0;
    let interval=setInterval(()=>{
        spinit(img);
        i++;
        if(i>=randomTimes){
            clearInterval(interval);
        }
    },100)
       
    //}
}