const releaseDate = new Date("2026-11-19T00:00:00Z");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
    const currentTime = Date.now();

    const remainingTime =
        releaseDate.getTime() - currentTime;

    if (remainingTime <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }

    const days = Math.floor(
        remainingTime / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (remainingTime / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (remainingTime / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (remainingTime / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);