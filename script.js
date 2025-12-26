
function startTimer(t){
  const el=document.getElementById("timer");
  const i=setInterval(()=>{
    el.textContent="0:0"+t;
    if(--t<0){
      clearInterval(i);
      location.href="https://t.me/+1d7jKvQd93tiZGE9";
    }
  },1000);
}
startTimer(5);
