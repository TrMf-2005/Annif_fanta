function agrandir(){
    const texte=document.getElementById("para1") ;
     if(texte.style.height='40px'){
        texte.style.fontSize='18px';
        texte.style.backgroundColor='red';
     }
    }
    function animate(){
        const test=document.getElementById("para1"); 
         let scale_1=1;
         let vitesse=10;
            scale_1+=vitesse;
        Element.style.transform='scale_1(${scale_1})';
        requestAnimationFrame(animate);
    }
    animate();
    function reduire(){
    const texte=document.getElementById("para1") 
    if(texte.style.fontSize='18px'){
        texte.style.fontSize='16px';
        texte.style.backgroundColor='pink';
    }
    }
    /*const audio=document.getElementById('audios');
    document.addEventListener('click', ()=>{
        audio.muted=false;
        audio.onplay();
    })*/