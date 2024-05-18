// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})

// Function to fetch data from the backend
async function fetchDataFromBackend() {
    try {
        const response = await fetch('/api/data'); // Replace '/api/data' with your actual backend endpoint
        const data = await response.json();
        // Do something with the received data, like updating the UI
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to send data to the backend
async function sendDataToBackend(dataToSend) {
    try {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });
        // Handle response if necessary
        console.log('Data sent successfully');
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

// Usage example
fetchDataFromBackend(); // Fetch data from backend when needed

// Call sendDataToBackend function when you need to send data to the backend
// Example:
// sendDataToBackend({ name: 'John', age: 30 });
