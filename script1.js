var cont = 0;
var control = true;
var control1 = 0;

const jump = () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe' );
    const audio = document.querySelector('.audio-jump');

    mario.classList.add('jump');
    audio.play();

    setTimeout( () => {
            mario.classList.remove('jump');
        }, 500);
} 

const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const nuv = document.querySelector('.nuvens');
    const over = document.querySelector('.overScreen');
    var placar = document.querySelector('.placar');
    const audio_die = document.querySelector('.audio-die');
    const audio_up = document.querySelector('.audio-level');


    marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');
    pipePos = pipe.offsetLeft;
    // const anim = pipe.style.animation;


    // console.log('animation' + anim);
    if ( pipePos <= 45 &&  pipePos > 0 && marioPos < 74){
        pipe.style.animation = 'none';
        nuv.style.animation = 'none';
        over.style.display = 'block';
        mario.src = 'images-audio/mario-over.png';
        mario.classList.add('over');
        audio_die.play();


        // console.log('Fim cont = ' + cont);
        clearInterval(loop);
    }

    if ( pipePos < -10 && control ){
        cont++;
        control = false;
    }
    else if ( pipePos > 140 && !control ) {
        control = true;
    }

    if( cont > 9 ){
        placar.innerHTML = 'Score: ' + cont;
        if( mario.classList.contains('over') ){ 
            pipe.style.animation = 'none';
        } else{
            pipe.style.animation = 'pipe-animation 1s infinite linear';
            if( control1 == 0 ){
                audio_up.play(); 
                control1++;
            }
        }
    }
    else{
        placar.innerHTML = 'Score: 0' + cont;
    }
}, 10);

document.addEventListener('keydown', jump);

function reload(){
    window.location.reload();
}