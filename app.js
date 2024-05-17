document.addEventListener('DOMContentLoaded', () => {
    fetch('match_data.json')
        .then(response => response.json())
        .then(data => displayMatchData(data))
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function displayMatchData(data) {
    const container = document.getElementById('match-container');

    data.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('match-item');

        matchDiv.innerHTML = `
            <h2>${match.match_title}</h2>
            <p><strong>Time:</strong> ${match.timestamp}</p>
            <p><strong>Status:</strong> ${match.status}</p>
            <p><strong>Match Status:</strong> ${match.match_status}</p>
            <h3>Teams</h3>
            <p><strong>${match.team_1}</strong> vs <strong>${match.team_2}</strong></p>
            <h3>Scores</h3>
            <p>${match.team_1}: ${match.team_1_Score} ${match.team_1_overs}</p>
            <p>${match.team_2}: ${match.team_2_Score} ${match.team_2_overs}</p>
            <h3>Batsmen</h3>
            <p>${match.batsman_1_name}: ${match.batsman_1_score} (${match.batsman_1_balls_played} balls, ${match.batsman_1_fours} fours, ${match.batsman_1_sixes} sixes)</p>
            <p>${match.batsman_2_name}: ${match.batsman_2_score} (${match.batsman_2_balls_played} balls, ${match.batsman_2_fours} fours, ${match.batsman_2_sixes} sixes)</p>
            <h3>Bowlers</h3>
            <p>${match.bowler_1_name}: ${match.bowler_1_overs_bowled} overs, ${match.bowler_1_maiden} maiden, ${match.bowler_1_runs} runs, ${match.bowler_1_wickets_taken} wickets</p>
            <p>${match.bowler_2_name}: ${match.bowler_2_overs_bowled} overs, ${match.bowler_2_maiden} maiden, ${match.bowler_2_runs} runs, ${match.bowler_2_wickets_taken} wickets</p>
        `;

        container.appendChild(matchDiv);
    });
}
