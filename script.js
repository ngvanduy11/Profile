// ==========================
// TYPEWRITER
// ==========================

const bio = "vanduycoder";
const bioElement = document.getElementById("bio");

let index = 0;

function typeWriter() {
    if (index < bio.length) {
        bioElement.textContent += bio.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

// ==========================
// MUSIC
// ==========================

const musicBtn = document.getElementById("music");
const audio = new Audio("assets/music.mp3");
audio.loop = true;

let playing = false;

musicBtn.addEventListener("click", () => {
    if (playing) {
        audio.pause();
    } else {
        audio.play().catch(() => {});
    }

    playing = !playing;
});

// ==========================
// PARTICLES
// ==========================

if (typeof tsParticles !== "undefined") {
    tsParticles.load({
        id: "particles",
        options: {
            background: {
                color: {
                    value: "transparent"
                }
            },
            fpsLimit: 60,
            particles: {
                number: {
                    value: 80
                },
                color: {
                    value: "#ffffff"
                },
                links: {
                    enable: true,
                    color: "#ffffff",
                    opacity: 0.15
                },
                move: {
                    enable: true,
                    speed: 1
                },
                opacity: {
                    value: 0.3
                },
                size: {
                    value: 2
                }
            }
        }
    });
}

// ==========================
// DISCORD PRESENCE
// ==========================

const USER_ID = "257851469531840514";

async function loadDiscord() {

    const dot = document.getElementById("dot");
    const status = document.getElementById("statusText");
    const activity = document.getElementById("activity");

    try {

        const response = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`);

        const json = await response.json();

        console.log(json);

        if (!json.success) {

            status.textContent = "Offline";
            activity.textContent = "";
            return;

        }

        const data = json.data;

        const colors = {
            online: "#43b581",
            idle: "#faa61a",
            dnd: "#f04747",
            offline: "#747f8d"
        };

        dot.style.background = colors[data.discord_status] || "#747f8d";

        status.textContent = data.discord_status.toUpperCase();

        if (data.listening_to_spotify && data.spotify) {

            activity.textContent =
                `🎵 ${data.spotify.song} • ${data.spotify.artist}`;

        } else if (data.activities.length > 0) {

            activity.textContent = data.activities[0].name;

        } else {

            activity.textContent = "Không có hoạt động";

        }

    } catch (err) {

        console.error(err);

        status.textContent = "Lỗi";

        activity.textContent = "Không kết nối được API";

    }

}

loadDiscord();

setInterval(loadDiscord, 15000);
