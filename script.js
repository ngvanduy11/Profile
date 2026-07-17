// =========================
// TYPEWRITER
// =========================

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


// =========================
// MUSIC
// =========================

const audio = new Audio("assets/music.mp3");
audio.loop = true;

let playing = false;

document.getElementById("music").onclick = () => {

    if (playing) {

        audio.pause();

    } else {

        audio.play();

    }

    playing = !playing;

};


// =========================
// PARTICLES
// =========================

tsParticles.load("particles", {

    background: {
        color: "transparent"
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#ffffff"
        },

        opacity: {
            value: 0.3
        },

        size: {
            value: 2
        },

        move: {
            enable: true,
            speed: 1
        },

        links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.15
        }

    }

});


// =========================
// DISCORD PRESENCE
// =========================

const USER_ID = "257851469531840514";

async function loadDiscord() {

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

        status.textContent = data.discord_status.toUpperCase();

        const colors = {

            online: "#43b581",
            idle: "#faa61a",
            dnd: "#f04747",
            offline: "#747f8d"

        };

        dot.style.background =
            colors[data.discord_status] || "#747f8d";

        if (data.activities.length > 0) {

            activity.textContent =
                data.activities[0].name;

        } else {

            activity.textContent =
                "Không có hoạt động";

        }

    } catch (err) {

        console.error(err);

    }

}

loadDiscord();

setInterval(loadDiscord, 15000);
