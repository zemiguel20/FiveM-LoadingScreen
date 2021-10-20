//---------------------------------------------------
// ELEMENTOS

var discordLogo = document.getElementById("discord-logo");
var discordLink = document.getElementById("discord-text");
var audioPlayer = document.getElementById("audio-player");
var speakerIcon = document.getElementById("speaker");

//---------------------------------------------------
// Animacoes do botao do Discord

function moveUpAndShowText(event) {
    discordLogo.style.opacity = "0.5";
    discordLogo.style.transform = "translateY(-15%)";

    discordLink.style.opacity = 1;
    discordLink.style.transform = "translate(5px, -8px)"
}

function moveDownAndHideText(event) {
    discordLogo.style.opacity = "1";
    discordLogo.style.transform = "translateY(0)";

    discordLink.style.opacity = 0;
    discordLink.style.transform = "translate(50px, -8px)"
}

discordLogo.addEventListener("mouseenter", moveUpAndShowText);
discordLogo.addEventListener("mouseleave", moveDownAndHideText);

//---------------------------------------------------
// Carregar botao discord

function openDiscordNewWindow() {
    window.open("https://discord.gg/mtolympusrp", "", "width=700,height=700");
}

discordLogo.addEventListener("click", openDiscordNewWindow);

//---------------------------------------------------
// Carregar botao de Mute da musica
speakerIcon.addEventListener("click", () => {
    speakerIcon.src = audioPlayer.muted ? "assets/images/sound-on.png" : "assets/images/sound-off.png";
    audioPlayer.muted = audioPlayer.muted ? false : true;

    if (audioPlayer.paused) audioPlayer.play(); // Apenas para o browser normal por causa de nao deixar autoplay
});
