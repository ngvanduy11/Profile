const USER_ID = "257851469531840514";

const bio =
"Developer • Discord • Python • Web";

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
const enterScreen = document.getElementById("enterScreen");

async function enterSite() {

    enterScreen.classList.add("hide");

    try {
        await music.play();
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playing = true;
    } catch (e) {}

}


const btn = document.getElementById("music");

let playing = false;
const enterScreen = document.getElementById("enterScreen");

async function enterSite() {
    enterScreen.classList.add("hide");

    try {
        await music.play();
        playing = true;
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } catch (err) {
        console.error(err);
    }
}

enterScreen.onclick = enterSite;

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        enterSite();
    }
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

        } else if (data.activities.length > 0) {

            activity.innerHTML =
                `🎮 ${data.activities[0].name}`;

        } else {

            activity.innerHTML =
                "Không có hoạt động";

        }

    } catch (e) {

        console.log(e);

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
