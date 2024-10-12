document.addEventListener('DOMContentLoaded', function() {
    // Simulated user data (replace with actual data fetching)
    const userData = {
        name: 'John Doe',
        id: '12345'
    };

    // Update user info in the header
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-id').textContent = 'ID: ' + userData.id;

    // Simulated upcoming elections data (replace with actual data fetching)
    const upcomingElections = [
        { name: 'City Council Election', date: '2023-06-15' },
        { name: 'State Governor Election', date: '2023-08-22' },
        { name: 'National Parliament Election', date: '2023-11-10' }
    ];

    // Populate the upcoming elections list
    const electionList = document.getElementById('election-list');
    upcomingElections.forEach(election => {
        const li = document.createElement('li');
        li.textContent = `${election.name} - ${election.date}`;
        electionList.appendChild(li);
    });
});

