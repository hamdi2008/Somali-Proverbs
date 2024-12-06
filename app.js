// Fetch proverbs from JSON file
fetch('proverbs.json')
    .then(response => response.json())
    .then(data => {
        const proverbsContainer = document.getElementById('proverbs');
        const searchInput = document.getElementById('search');
        const noResults = document.getElementById('no-results');
        let allProverbs = [];

        // Extract all proverbs from the maahmaahyo object
        for (const letter in data.maahmaahyo) {
            allProverbs = allProverbs.concat(data.maahmaahyo[letter]);
        }

        // Function to display proverbs
        function displayProverbs(proverbsList) {
            proverbsContainer.innerHTML = '';
            
            if (proverbsList.length === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
                proverbsList.forEach(proverb => {
                    const proverbCard = document.createElement('div');
                    proverbCard.className = 'proverb-card';
                    proverbCard.textContent = proverb;
                    proverbsContainer.appendChild(proverbCard);
                });
            }
        }

        // Initial display of all proverbs
        displayProverbs(allProverbs);

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProverbs = allProverbs.filter(proverb => 
                proverb.toLowerCase().includes(searchTerm)
            );
            displayProverbs(filteredProverbs);
        });
    })
    .catch(error => {
        console.error('Error loading proverbs:', error);
        document.getElementById('proverbs').innerHTML = 'Error loading proverbs. Please try again later.';
    });
