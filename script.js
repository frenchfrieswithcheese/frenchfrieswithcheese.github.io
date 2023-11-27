// script.js

function loadLeaderboard() {
    const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

    fetch('http://45.126.208.3:25577/generateleaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `mango=882981527&difficulty=${selectedDifficulty}`
    })
    .then(response => response.json())
    .then(data => {
        const leaderboardContainer = document.getElementById('leaderboard');
        leaderboardContainer.innerHTML = '';

        data.result.forEach((entry, index) => {
            const entryElement = document.createElement('div');
            entryElement.classList.add('entry');
            entryElement.innerHTML = `
                <p class="place ${index === 0 ? 'first-place' : (index === 1 ? 'second-place' : (index === 2 ? 'third-place' : ''))}">${index + 1}</p>
                <p class="user-name">${entry.alias}</p>
                <p class="user-score">Score: ${entry.cantidad}</p>
            `;
            leaderboardContainer.appendChild(entryElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Cargar la leaderboard al cargar la página
loadLeaderboard();
