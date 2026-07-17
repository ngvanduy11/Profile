// ===== Typewriter =====

const text = "Welcome to my profile ✨";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("bio").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 50);

    }

}

typing();


// ===== Music =====

const audio = new Audio("assets/music.mp3");

audio.loop = true;

let playing = false;

document.getElementById("music").onclick = () => {

    if (playing){

        audio.pause();

    }else{

        audio.play();

    }

    playing = !playing;

};


// ===== Particles =====

tsParticles.load("particles",{

    background:{color:"transparent"},

    fpsLimit:60,

    particles:{

        number:{value:80},

        color:{value:"#ffffff"},

        opacity:{value:0.3},

        size:{value:2},

        move:{

            enable:true,

            speed:1

        },

        links:{

            enable:true,

            color:"#ffffff",

            opacity:0.15

        }

    }

});
