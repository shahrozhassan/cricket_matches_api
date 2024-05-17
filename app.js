document.addEventListener('DOMContentLoaded', () => {
    fetch('match_data.json')
        .then(response => response.json())
        .then(data => {
            displayMatchData(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function displayMatchData(data) {
    const container = document.getElementById('match-container');
    container.innerHTML = ''; // Clear previous content

    if (data.length === 0) {
        container.innerHTML = '<p>No match data available.</p>';
        return;
    }

    data.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('match-item');

        const matchString = `${match.team_1} vs ${match.team_2} ${match.match_title.split(',')[0]}\\n${match.team_1} ${match.team_1_Score} over ${match.team_1_overs}\\n${match.batsman_1_name} ${match.batsman_1_score} (${match.batsman_1_balls_played})\\n${match.batsman_2_name} ${match.batsman_2_score} (${match.batsman_2_balls_played})\\n${match.bowler_1_name} ${match.bowler_1_wickets_taken}/${match.bowler_1_runs}, ${match.bowler_2_name} ${match.bowler_2_wickets_taken}/${match.bowler_2_runs}\\n${match.status}`;

        // Create a pre element to preserve the \n newlines in the string
        const pre = document.createElement('pre');
        pre.textContent = matchString; // Use textContent to preserve \n as newlines

        matchDiv.appendChild(pre);
        container.appendChild(matchDiv);
    });
}
