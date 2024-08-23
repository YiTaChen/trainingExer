function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
    return new Promise((resolve, reject) => {
        // Simulate fetching machine name (replace with actual fetching logic if necessary)
        setTimeout(() => {
            
resolve(window.location.hostname);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

    getMachineName().then(machineName => {
        document.getElementById('machine-name').textContent = machineName;
    });
});

