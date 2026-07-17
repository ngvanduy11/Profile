const USER_ID = "257851469531840514";

const bio = "Developer • Discord • Python • Web";
const bioElement = document.getElementById("bio");

let i = 0;

function typing() {
    if (i < bio.length) {
        bioElement.innerHTML += bio.charAt(i);
        i++;
        setTimeout(typing, 35);
    }
}

typing();

const music = new Audio("assets/music.mp3");
music.loop = true;

const btn = document.getElementById("music");
const enterScreen = document.getElementById("enterScreen");

let playing = false;

async function enterSite() {

    if (enterScreen.classList.contains("hide")) return;

    enterScreen.classList.add("hide");

    setTimeout(() => {
        enterScreen.remove();
    }, 800);

    try {
        await music.play();
        playing = true;
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } catch (err) {
        console.log(err);
    }

}

enterScreen.addEventListener("click", enterSite);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        enterSite();
    }
});

btn.addEventListener("click", async () => {

    if (playing) {
        music.pause();
        btn.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
        await music.play();
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

    playing = !playing;

});

async function updatePresence() {

    try {

        const res = await fetch(
            `https://api.lanyard.rest/v1/users/${USER_ID}`
        );

        const json = await res.json();

        if (!json.success) return;

        const data = json.data;

        const dot = document.getElementById("dot");
        const status = document.getElementById("statusText");
        const activity = document.getElementById("activity");

        const colors = {
            online: "#43b581",
            idle: "#faa61a",
            dnd: "#f04747",
            offline: "#747f8d"
        };

        dot.style.background =
            colors[data.discord_status] || "#747f8d";

        status.innerText =
            data.discord_status.toUpperCase();

        if (data.spotify) {

            activity.innerHTML =
                `🎵 ${data.spotify.song}<br>${data.spotify.artist}`;

        } else if (
            data.activities &&
            data.activities.length > 0
        ) {

            activity.innerHTML =
                `🎮 ${data.activities[0].name}`;

        } else {

            activity.innerHTML =
                "Không có hoạt động";

        }

    } catch (err) {

        console.log(err);

    }

}

updatePresence();
setInterval(updatePresence, 5000);

tsParticles.load("particles", {
    background: {
        color: {
            value: "transparent"
        }
    },

    particles: {

        number: {
            value: 70
        },

        color: {
            value: "#ffffff"
        },

        opacity: {
            value: 0.25
        },

        size: {
            value: 2
        },

        move: {
            enable: true,
            speed: 1
        },

        links: {
            enable: false
        }

    }
});
VanillaTilt.init(document.querySelector(".container"),{
    max:12,
    speed:500,
    glare:true,
    "max-glare":0.2,
    scale:1.03
});
