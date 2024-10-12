const lyricsArray = [
    "I don't mean to be so uptight",
    "But my heart's been hurt a couple times",
    "By a couple guys that didn't treat me right",
    "I ain't gonna lie, ain't gonna lie",
    "Cause I'm tired of the fake love"
];

let currentLyricIndex = 0;
let charIndex = 0;
const lyricsElement = document.getElementById("lyrics");
const typingSpeed = 85; // Kecepatan mengetik per karakter
const delayBetweenLines = 600; // Delay sebelum lirik menghilang

function typeLyrics() {
    if (charIndex < lyricsArray[currentLyricIndex].length) {
        lyricsElement.textContent += lyricsArray[currentLyricIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLyrics, typingSpeed);
    } else {
        setTimeout(() => {
            lyricsElement.classList.add("fade-out");
            setTimeout(nextLyric, 500); // Menunggu efek fade-out selesai
        }, delayBetweenLines);
    }
}

function nextLyric() {
    lyricsElement.classList.remove("fade-out");
    lyricsElement.textContent = "";
    charIndex = 0;
    currentLyricIndex = (currentLyricIndex + 1) % lyricsArray.length; // Looping kembali ke lirik pertama setelah selesai
    typeLyrics();
}

// Memulai animasi
document.addEventListener("DOMContentLoaded", function () {
    typeLyrics();
});
