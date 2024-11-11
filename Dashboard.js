document.addEventListener('DOMContentLoaded', function() {
    // Simulated user data (replace with actual data fetching)
    const userData = {
        name: 'Student',
        id: '12345'
    };

    // Update user info in the header
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-id').textContent = 'ID: ' + userData.id;

    // Simulated upcoming elections data (replace with actual data fetching)
    const upcomingElections = [
        { name: 'Core Committee Election 24', date: '2024-11-15' },
        { name: 'Class CR Election', date: '2024-11-20' },
        { name: 'Student Council Election', date: '2024-11-20' }
    ];

    // Populate the upcoming elections list
    const electionList = document.getElementById('election-list');
    upcomingElections.forEach(election => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = `${election.name} - ${election.date}`;
        button.className = 'election-button';
        button.onclick = function() {
            window.location.href = 'StudentElectionDetails.html'; // Redirect to the student election details page
        };
        li.appendChild(button);
        electionList.appendChild(li);
    });
});

