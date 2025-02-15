// Function to get user's location and find hospitals nearby
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

function showLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    window.open(`https://www.google.com/maps/search/hospitals/@${lat},${lon},15z`);
}

function showError(error) {
    alert("Unable to retrieve your location.");
}

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
}

// Function for basic language translation
function translatePage() {
    const selectedLang = document.getElementById("language").value;
    alert("Page translation to " + selectedLang + " is under development!");
}
