// Fetching event data from a JSON file
fetch('events.json')
    .then(response => response.json())
    .then(data => {
        const eventsSection = document.getElementById('events');

        // Loop through each event and display it on the webpage
        data.events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            const eventTitle = document.createElement('h2');
            eventTitle.textContent = event.title;
            eventDiv.appendChild(eventTitle);

            const eventDate = document.createElement('p');
            eventDate.textContent = `Date: ${event.date}`;
            eventDiv.appendChild(eventDate);

            const eventDescription = document.createElement('p');
            eventDescription.textContent = event.description;
            eventDiv.appendChild(eventDescription);

            if (event.image) {
                const eventImage = document.createElement('img');
                eventImage.src = event.image;
                eventDiv.appendChild(eventImage);
            }

            eventsSection.appendChild(eventDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching event data:', error);
    });
