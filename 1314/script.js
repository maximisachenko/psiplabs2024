document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const birthdateElement = document.getElementById('birthdate');

    // Function to get document date and size information
    function getDocumentInfo() {
        const date = new Date();
        const size = document.documentElement.outerHTML.length;
        return `Date: ${date.toLocaleString()}, Size: ${size} bytes`;
    }

    // Function to repeatedly display document information
    function displayDocumentInfo() {
        const infoContainer = document.getElementById('info');
        const info = getDocumentInfo();
        const infoElement = document.createElement('div');
        infoElement.textContent = info;
        infoContainer.appendChild(infoElement);
    }

    // Set interval to display information every 5 seconds
    setInterval(displayDocumentInfo, 5000);

    // Event handler to remove element on click
    nameElement.addEventListener('click', function () {
        nameElement.remove();
    });

    // Event handler to change styles on click
    birthdateElement.addEventListener('click', function () {
        birthdateElement.style.color = 'red';
        birthdateElement.style.backgroundColor = 'yellow';
        birthdateElement.style.fontWeight = 'bold';
        birthdateElement.style.fontFamily = 'Arial';
        birthdateElement.style.fontSize = '14px';
        birthdateElement.style.border = '2px solid blue';
    });

    // Check if cookies are enabled
    const cookiesEnabled = navigator.cookieEnabled;
    alert(`Cookies enabled: ${cookiesEnabled}`);

    // Close current browser window after 50 seconds
    setTimeout(function () {
        window.close();
    }, 50000);
});
