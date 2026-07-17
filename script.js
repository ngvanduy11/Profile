// ===== Typewriter =====

const text="Welcome to my profile";

let i=0;

function typing(){

    if(i<text.length){

        document.getElementById("bio").innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,50);

    }

}

typing();


// ===== Music =====

const audio=new Audio("assets/music.mp3");

audio.loop=true;

let playing=false;

document.getElementById("music").onclick=()=>{

    if(playing){

        audio.pause();

    }else{

        audio.play();

    }

    playing=!playing;

};


// ===== Particles =====

tsParticles.load("particles",{
const USER_ID = "257851469531840514";

async function loadDiscord(){

    try{

        const res = await fetch(
            `https://api.lanyard.rest/v1/users/${USER_ID}`
        );

        const data = (await res.json()).data;

        const dot = document.getElementById("dot");
        const status = document.getElementById("statusText");
        const activity = document.getElementById("activity");

        status.innerText = data.discord_status;

        if(data.discord_status==="online")
            dot.style.background="#43b581";

        if(data.discord_status==="idle")
            dot.style.background="#faa61a";

        if(data.discord_status==="dnd")
            dot.style.background="#f04747";

        if(data.discord_status==="offline")
            dot.style.background="gray";

        if(data.activities.length){

            activity.innerText =
            data.activities[0].name;

        }

    }catch(e){

        console.log(e);

    }

}

loadDiscord();

setInterval(loadDiscord,15000);
    background:{
        color:"transparent"
    },

    fpsLimit:60,

    particles:{

        number:{
            value:80
        },

        color:{
            value:"#ffffff"
        },

        opacity:{
            value:0.3
        },

        size:{
            value:2
        },

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
