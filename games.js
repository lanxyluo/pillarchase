// Game data - Pillar Chase
const games = [
    {
        "id": 1,
        "title": "Castle Craft",
        "thumbnail": "images/Adventure/castle-craft.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/castle-craft",
        "description": "Castle Craft is a mystical adventure puzzle game where you merge resources while looking for Fiona's missing husband, Michael, all the while uncovering plenty of mysteries along the way.",
        "howToPlay": "Step into the wonderous world of Castle Craft, where you play as farmer Fiona, determined on her heartfelt mission to reunite with her husband after a mysterious separation."
    },
    {
        "id": 2,
        "title": "Firestone Idle Rpg",
        "thumbnail": "images/Adventure/firestone-idle-rpg.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/firestone-idle-rpg",
        "description": "Firestone Idle RPG is an Idle battle fantasy MMO game set in the world of Alandria. Fight hordes of Undead and Orc enemies in a party of up to five he...",
        "howToPlay": "As the Hero in this story, your goal is to eliminate the Undead and Orc forces who are wreaking havoc and disorder in Alandria."
    },
    {
        "id": 3,
        "title": "Dead Land Survival",
        "thumbnail": "images/Adventure/dead-land-survival.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/dead-land-survival",
        "description": "Dead Land: Survival is a survival horror game set in a zombie-infested apocalyptic world where you fight for survival with powerful skills you accumulate throughout gameplay.",
        "howToPlay": "Set out on a treacherous quest through the desolate lands of Dead Land: Survival, where the world has fallen to ruin, and the infected ones lurk around every corner."
    },
    {
        "id": 4,
        "title": "Doors Castle",
        "thumbnail": "images/Adventure/doors-castle.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/doors-castle",
        "description": "Doors Castle is a thrilling adventure through a haunted fortress filled with secrets, puzzles, and lurking horrors. Every shadow hides danger, every door holds a mystery.",
        "howToPlay": "Find keys: Unlock doors and dive deeper into the castle’s chilling depths Beware of monsters: Stay hidden and avoid their terrifying gaze Explore the..."
    },
    {
        "id": 5,
        "title": "Stone Grass Mowing Simulator",
        "thumbnail": "images/Casual/stone-grass-mowing-simulator.jpg",
        "category": "casual",
        "iframeUrl": "https://www.crazygames.com/embed/stone-grass-mowing-simulator",
        "description": "Stone Grass: Mowing Simulator is a relaxing yet addictive game where you take control of a powerful mower and transform wild fields into perfectly trimmed landscapes.",
        "howToPlay": "Upgrade early: Boost your speed and storage first to clear more grass without returning to base as often. Focus on expansion: Unlocking new zones gives you more room and better earnings."
    },
    {
        "id": 6,
        "title": "Supermarket Simulator Cashier Game",
        "thumbnail": "images/Casual/supermarket-simulator-cashier-game.jpg",
        "category": "casual",
        "iframeUrl": "https://www.crazygames.com/embed/supermarket-simulator-cashier-game",
        "description": "Supermarket Simulator: Store Manager is a dynamic retail experience where you juggle cashier duties and store management.",
        "howToPlay": "WASD to move Mouse to look around Left shift to Sprint Space to Jump Left click to interact with objects Tab to leave/finish activity E to open/close..."
    },
    {
        "id": 7,
        "title": "Ragdoll Archers",
        "thumbnail": "images/Casual/ragdoll-archers.jpg",
        "category": "casual",
        "iframeUrl": "https://www.crazygames.com/embed/ragdoll-archers"
    },
    {
        "id": 8,
        "title": "Count Masters Stickman Games",
        "thumbnail": "images/Casual/count-masters-stickman-games.jpg",
        "category": "casual",
        "iframeUrl": "https://www.crazygames.com/embed/count-masters-stickman-games"
    },
    {
        "id": 9,
        "title": "911 Prey",
        "thumbnail": "images/Horror/911-prey.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/911-prey"
    },
    {
        "id": 10,
        "title": "Room Escape Strange Case",
        "thumbnail": "images/Horror/room-escape-strange-case.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/room-escape-strange-case"
    },
    {
        "id": 11,
        "title": "Fnaf Shooter",
        "thumbnail": "images/Horror/fnaf-shooter.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/fnaf-shooter"
    },
    {
        "id": 12,
        "title": "Horror Tale Kidnapper",
        "thumbnail": "images/Horror/horror-tale-kidnapper.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/horror-tale-kidnapper"
    },
     {
        "id": 13,
        "title": "Sky Riders Buk",
        "thumbnail": "images/Racing/sky-riders-buk.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/sky-riders-buk"
    },
    {
        "id": 14,
        "title": "Racing Limits",
        "thumbnail": "images/Racing/racing-limits.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/racing-limits"
    },
    {
        "id": 15,
        "title": "Sandbox City   Cars Zombies Ragdolls",
        "thumbnail": "images/Racing/sandbox-city-cars-zombies-ragdolls.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/sandbox-city---cars-zombies-ragdolls"
    },
    {
        "id": 16,
        "title": "Night City Racing",
        "thumbnail": "images/Racing/night-city-racing.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/night-city-racing"
    },
      {
        "id": 17,
        "title": "Squid Game Online",
        "thumbnail": "images/Action/squid-game-online.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/squid-game-online"
    },
    {
        "id": 18,
        "title": "Defender Idle 2",
        "thumbnail": "images/Action/defender-idle-2.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/defender-idle-2"
    },
    {
        "id": 19,
        "title": "Immortal Dark Slayer",
        "thumbnail": "images/Action/immortal-dark-slayer.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/immortal-dark-slayer"
    },
    {
        "id": 20,
        "title": "Bank Heist",
        "thumbnail": "images/Action/bank-heist.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/bank-heist"
    }
];
