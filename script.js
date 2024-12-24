score=0
cross=true
gameover1=false
audiogameover=new Audio('gameover.mp3')
audiobg=new Audio('music.mp3')
setTimeout(()=>{
    audiobg.play();
},1000)
document.onkeydown=function(e){
    console.log('key code is :',e.keyCode)
    if(e.keyCode==38){//keycode of up arrow key is 38
        dino=document.querySelector('.dino')
        dino.classList.add('animatedino')
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);
    }
    else if(e.keyCode==39){//keycode of up arrow key is 38
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dinox+112+"px"

    }
    else if(e.keyCode==37){//keycode of up arrow key is 38
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=(dinox-112)+"px"

    }
}


setInterval(()=>{
    dino=document.querySelector('.dino')
    gameover=document.querySelector('.gameover')
    obstacle=document.querySelector('.obstacle')
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))

    offsetx=Math.abs(dx-ox)
    offsety=Math.abs(dy-oy)
    if(offsetx<73&&offsety<52){
        gameover1=true
        gameover.style.opacity=1
        obstacle.classList.remove('obstacleani')
        dino.classList.add('gameoverdino');
        audiogameover.play();
        audiobg.pause();
        scorecont=document.querySelector('.scorecont')
        scorecont.style.opacity='0'


        setTimeout(()=>{
            audiogameover.pause()
             
            scorecont.style.top='18vh'
            scorecont.style.left='41%'
            scorecont.style.opacity='1'

        },1200)
       
    }
    else if(cross && offsetx<143){
       
        if(!gameover1){
            score+=1;
        }
        else{
            score=score;
        }
            
            updatescore(score);
            cross=false;
            setTimeout(()=>{
                cross=true
            },700);

            setTimeout(()=>{
              
                anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
                // console.log(anidur)
                if(anidur>3.1){

                    newduration=anidur-0.1;
                }
                else{
                    newduration=anidur;
                }
                // console.log(newduration)
                
                obstacle.style.animationDuration=newduration+'s';
            },300)
            //     testdur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            // console.log("is it changes"+testdur)
        
    }

},10)
function updatescore(score){
    scorecont=document.querySelector('.scorecont')
    if(score==0){
        scorecont.innerHTML="Your Score : 0"+ score
    }
    else if(score<10){
        scorecont.innerHTML="Your Score : 0"+ score

    }
   else{
    scorecont.innerHTML="Your Score : "+ score
   }

}