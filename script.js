document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([20, 0], 2); // Center the map globally

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define markers with country names
    const markers = [
        { coords: [3.2028, 73.2207], name: 'Maldives' },
        { coords: [37.0902, -95.7129], name: 'USA' },
        { coords: [-25.2744, 133.7751], name: 'Australia' },
        { coords: [7.8731, 80.7718], name: 'Sri Lanka' },
        { coords: [20.5937, 78.9629], name: 'India' },
        { coords: [52.3555, -1.1743], name: 'England' }
    ];

    // Add markers to the map and visited text
    markers.forEach(marker => {
        const circleMarker = L.circleMarker(marker.coords, {
            color: 'red',
            radius: 10,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(map)
        .bindPopup(`${marker.name}`)
        .openPopup();

        const visitedText = document.createElement('div');
        visitedText.className = `visited-text ${marker.name.toLowerCase().replace(/\s+/g, '-')}`;
        visitedText.innerText = `${marker.name} - 50 visited`;
        document.querySelector('.map-container').appendChild(visitedText);

        // Make the marker blink
        setInterval(() => {
            const currentOpacity = L.DomUtil.getStyle(circleMarker._path, 'opacity');
            L.DomUtil.setStyle(circleMarker._path, 'opacity', currentOpacity == 1 ? 0.5 : 1);
        }, 500);
    });

    // Set current date
    const currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('current-date').innerText = currentDate;
});
