// Game categories
        const categories = [
            { id: 'all', name: 'All Games' },
            { id: 'puzzle', name: 'Puzzles' },
            { id: 'action', name: 'Action' },
            { id: 'simulation', name: 'Simulation' },
            { id: 'casual', name: 'Casual' },
            { id: 'horror', name: 'Horror' },
            { id: 'strategy', name: 'Strategy' },
            { id: 'rpg', name: 'RPG' },
            { id: 'racing', name: 'Racing' },
            { id: 'adventure', name: 'Adventure' }
        ];

        // Function: Initialize category menu
        function initCategoryMenu() {
            const categoryMenu = document.getElementById('category-menu');
            categoryMenu.innerHTML = '';
            
            categories.forEach(category => {
                const listItem = document.createElement('li');
                listItem.className = 'category-item flex items-center py-2 px-3 hover:bg-[#3a443e] rounded-md cursor-pointer';
                listItem.dataset.category = category.id;
                
                // Category icon (choose appropriate icon based on category)
                let iconPath = '';
                switch(category.id) {
                    case 'all':
                        iconPath = 'M4 6h16M4 12h16M4 18h16';
                        break;
                    case 'puzzle':
                        iconPath = 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z';
                        break;
                    case 'action':
                        iconPath = 'M13 10V3L4 14h7v7l9-11h-7z';
                        break;
                    case 'simulation':
                        iconPath = 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6';
                        break;
                    case 'casual':
                        iconPath = 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
                        break;
                    case 'horror':
                        iconPath = 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
                        break;
                    case 'strategy':
                        iconPath = 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z';
                        break;
                    case 'rpg':
                        iconPath = 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
                        break;
                    case 'racing':
                        iconPath = 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z';
                        break;
                    case 'adventure':
                        iconPath = 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
                        break;
                }
                
                listItem.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}" />
                    </svg>
                    <span>${category.name}</span>
                `;
                
                // Click event
                listItem.addEventListener('click', () => {
                    document.querySelectorAll('.category-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    listItem.classList.add('active');
                    displayGames(category.id);
                });
                
                categoryMenu.appendChild(listItem);
            });
            
            // Default select "All Games"
            document.querySelector('.category-item[data-category="all"]').classList.add('active');
        }
        
        // Function: Display games
        function displayGames(category = 'all') {
            const gameGrid = document.getElementById('game-grid');
            gameGrid.innerHTML = '';
            
            // Filter games
            const filteredGames = category === 'all' 
                ? games 
                : games.filter(game => game.category === category);
            
            // Display games
            filteredGames.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card relative bg-[#333] rounded-lg overflow-hidden';
                gameCard.innerHTML = `
                    <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-40 object-cover">
                    <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-16"></div>
                    <div class="p-2">
                        <h3 class="text-white font-semibold">${game.title}</h3>
                    </div>
                `;
                
                // Click event - Open game
                gameCard.addEventListener('click', () => {
                    openGame(game);
                });
                
                gameGrid.appendChild(gameCard);
            });
        }
        
       // In main.js, modify the openGame function
function openGame(game) {
    const modal = document.getElementById('game-modal');
    const title = document.getElementById('modal-game-title');
    const description = document.getElementById('game-description');
    const howToPlay = document.getElementById('game-howtoplay');
    const iframe = document.getElementById('game-iframe');
    
    title.textContent = game.title;
    description.textContent = game.description || "No game description available";
    howToPlay.textContent = game.howToPlay || "No gameplay instructions available";
    iframe.src = game.iframeUrl;
    modal.style.display = 'block';
    
    // Prevent page scrolling
    document.body.style.overflow = 'hidden';
}
        
        // Function: Close game modal
        function closeGame() {
            const modal = document.getElementById('game-modal');
            const iframe = document.getElementById('game-iframe');
            
            modal.style.display = 'none';
            iframe.src = '';
            
            // Restore page scrolling
            document.body.style.overflow = 'auto';
        }
        
        // Add search functionality
        function setupSearch() {
            const searchInput = document.getElementById('search-input');
            searchInput.addEventListener('input', (e) => {
                const searchText = e.target.value.toLowerCase();
                
                if (searchText.length < 2) {
                    // If search text is too short, display all games from current selected category
                    const activeCategory = document.querySelector('.category-item.active').dataset.category;
                    displayGames(activeCategory);
                    return;
                }
                
                // Filter games
                const filteredGames = games.filter(game => 
                    game.title.toLowerCase().includes(searchText)
                );
                
                // Display filtered results
                const gameGrid = document.getElementById('game-grid');
                gameGrid.innerHTML = '';
                
                filteredGames.forEach(game => {
                    const gameCard = document.createElement('div');
                    gameCard.className = 'game-card relative bg-[#333] rounded-lg overflow-hidden';
                    gameCard.innerHTML = `
                        <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-40 object-cover">
                        <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-16"></div>
                        <div class="p-2">
                            <h3 class="text-white font-semibold">${game.title}</h3>
                        </div>
                    `;
                    
                    // Click event - Open game
                    gameCard.addEventListener('click', () => {
                        openGame(game);
                    });
                    
                    gameGrid.appendChild(gameCard);
                });
            });
        }
        
        // Execute when page loads
        document.addEventListener('DOMContentLoaded', () => {
            initCategoryMenu();
            displayGames('all');
            setupSearch();
            
            // Close modal event
            document.getElementById('close-modal').addEventListener('click', closeGame);
        });
