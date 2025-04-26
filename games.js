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
        "iframeUrl": "https://www.crazygames.com/embed/ragdoll-archers",
        "description": "Ragdoll Archers is an archery game featuring bow and arrow-equipped stickmen with ragdoll physics. Fire arrows at a range of opponents while earning points to upgrade your abilities and ammunition.",
        "howToPlay": "Line up your shots carefully, and fire! Starting with the basic arrows and baseline stats, you will be faced with various enemies."
    },
    {
        "id": 8,
        "title": "Count Masters Stickman Games",
        "thumbnail": "images/Casual/count-masters-stickman-games.jpg",
        "category": "casual",
        "iframeUrl": "https://www.crazygames.com/embed/count-masters-stickman-games",
        "description": "Count Masters: Stickman Games is a fast-paced running game where you gather a growing army of stickmen to clash against rival crowds.",
        "howToPlay": "Tips and Tricks Don’t just rush forward—choose gates that give you the best numbers, even if they’re not directly in your path."
    },
    {
        "id": 9,
        "title": "911 Prey",
        "thumbnail": "images/Horror/911-prey.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/911-prey",
        "description": "911: Prey is a scary horror game with puzzles. In this game, you are a kidnapped teenager that needs to escape from a cannibal maniac who brought you to his house.",
        "howToPlay": "Features Multiple endings - it all depends on your actions Branching detective story Interesting puzzles Fascinating story and investigation Horror el..."
    },
    {
        "id": 10,
        "title": "Room Escape Strange Case",
        "thumbnail": "images/Horror/room-escape-strange-case.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/room-escape-strange-case",
        "description": "Room Escape: Strange Case is a mystery puzzle game where you, the true detective, delve into the enigma of the elusive \"Alchemist.\" Unravel the chilli...",
        "howToPlay": "Controls Use the left mouse button to interact with objects."
    },
    {
        "id": 11,
        "title": "Fnaf Shooter",
        "thumbnail": "images/Horror/fnaf-shooter.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/fnaf-shooter",
        "description": "FNaF Shooter is a first-person shooter game where you survive and save the world from the invasion of animatronics!",
        "howToPlay": "Controls Mouse = look around WASD = movement W + Shift = run Space = jump Left mouse button = shoot Right mouse button (hold) = aim Mouse wheel = next..."
    },
    {
        "id": 12,
        "title": "Horror Tale Kidnapper",
        "thumbnail": "images/Horror/horror-tale-kidnapper.jpg",
        "category": "horror",
        "iframeUrl": "https://www.crazygames.com/embed/horror-tale-kidnapper",
        "description": "Horror Tale Kidnapper is a frightening first-person horror adventure game. Solve the disturbing mystery of the missing children at Lakewitch.",
        "howToPlay": "In this episode, you meet your friend Harry, who plans to keep you and the other kids from your neighborhood safe from the kidnapper while you're waiting for your parents to return."
    },
    {
        "id": 13,
        "title": "Sky Riders Buk",
        "thumbnail": "images/Racing/sky-riders-buk.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/sky-riders-buk",
        "description": "Sky Riders is a high-speed casual vehicle driving game. Put your driving skills to the test as you complete several challenging tracks.",
        "howToPlay": "Features Drive bikes and cars through the sky 30 challenging tracks to complete Realistic physics make the game tricky See what awesome stunts you can..."
    },
    {
        "id": 14,
        "title": "Racing Limits",
        "thumbnail": "images/Racing/racing-limits.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/racing-limits",
        "description": "Racing Limits is a racing game that lets you push your skills to the max. Race and overtake vehicles in city and highway traffic with four thrilling g...",
        "howToPlay": "Controls Up arrow key to accelerate Down arrow key to decelerate Left and right arrow keys to steer C to change the camera view F to use nitro E to ho..."
    },
    {
        "id": 15,
        "title": "Sandbox City   Cars Zombies Ragdolls",
        "thumbnail": "images/Racing/sandbox-city-cars-zombies-ragdolls.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/sandbox-city---cars-zombies-ragdolls",
        "description": "Sandbox City - Cars, Zombies, Ragdolls! is a zombie game where you can explore freely and drive around the city, but, be careful of the zombie's infec...",
        "howToPlay": "Controls WASD or arrow keys = move Left-click = attack. Hold to shoot Hold shift = run Space = jump when on foot, handbrake when in the car E = enter..."
    },
    {
        "id": 16,
        "title": "Night City Racing",
        "thumbnail": "images/Racing/night-city-racing.jpg",
        "category": "racing",
        "iframeUrl": "https://www.crazygames.com/embed/night-city-racing",
        "description": "Night City Racing is a car-driving game with fantastic races, epic stunts, and awesome supercars. Gear up for heart-pounding races and wild challenges...",
        "howToPlay": "Race against the competition Get in the driver’s seat and tackle some of the world’s best sports cars head-on. As you progress, there are 16 racing challenges to complete that increase in difficulty."
    },
    {
        "id": 17,
        "title": "Squid Game Online",
        "thumbnail": "images/Action/squid-game-online.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/squid-game-online",
        "description": "Squid Game Online is a free multiplayer survival game. Compete in 7 minigames with 30 players based on the viral Netflix show Squid Game.",
        "howToPlay": "To enter a game, choose your region and nickname, then click join. You’ll be added to a room and be moments away from playing in this unforgiving chal..."
    },
    {
        "id": 18,
        "title": "Defender Idle 2",
        "thumbnail": "images/Action/defender-idle-2.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/defender-idle-2",
        "description": "Defender Idle 2 is an endless idle defense game where you unlock slots, strategically place turrets, and invest in a wide range of upgrades to safeguard your base.",
        "howToPlay": "Controls Use the left mouse button to interact with the in-game UI Q = previous wave W = retry wave E = next wave R = sell mode A = research S = passi..."
    },
    {
        "id": 19,
        "title": "Immortal Dark Slayer",
        "thumbnail": "images/Action/immortal-dark-slayer.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/immortal-dark-slayer",
        "description": "Immortal: Dark Slayer is a top-down soulslike action RPG game where you take on the role of a Fallen Knight on a quest to cleanse the realm of demons, undead, and chaos.",
        "howToPlay": "Controls WASD or arrow keys to move Left mouse button to interact with in-game UI."
    },
    {
        "id": 20,
        "title": "Bank Heist",
        "thumbnail": "images/Action/bank-heist.jpg",
        "category": "action",
        "iframeUrl": "https://www.crazygames.com/embed/bank-heist",
        "description": "Bank Heist is an action-packed game filled with thrilling adventures where you rob banks, stores, and more! Strategize, fight, and escape with the loot in this high-stakes crime escapade.",
        "howToPlay": "Controls WASD = move Space = jump C = crouch Shift = run F = interact with entities LMB = fire with weapon RMB = aim Tab = exit."
    },
    {
        "id": 21,
        "title": "Mahjongg Solitaire",
        "thumbnail": "images/Puzzles/mahjongg-solitaire.jpg",
        "category": "puzzle",
        "iframeUrl": "https://www.crazygames.com/embed/mahjongg-solitaire",
        "description": "Mahjongg Solitaire is an online mahjong puzzle board game featuring traditional rules and modern visuals. There are no shuffles, and the game is timed...",
        "howToPlay": "Spot the patterns Mahjong is a tricky puzzle game. There are so many tiles, many of which look the same but feature slight differences."
    },
    {
        "id": 22,
        "title": "Tower Swap",
        "thumbnail": "images/Puzzles/tower-swap.jpg",
        "category": "puzzle",
        "iframeUrl": "https://www.crazygames.com/embed/tower-swap",
        "description": "Tower Swap is a clever puzzle game combining match-3 mechanics with addictive tower defense gameplay. Stop the dragons from reaching your castle by bu...",
        "howToPlay": "Build your defenses Match 3 pieces of the same resource to upgrade them to a weapon or defense piece. When you have 3 of the same weapon or wall besid..."
    },
    {
        "id": 23,
        "title": "Mergest Kingdom",
        "thumbnail": "images/Puzzles/mergest-kingdom.jpg",
        "category": "puzzle",
        "iframeUrl": "https://www.crazygames.com/embed/mergest-kingdom",
        "description": "Mergest Kingdom is a merge puzzle and match-3 game where you build your own kingdom by combining resources in groups of three.",
        "howToPlay": "Mine and harvest resources Mergest Kingdom features hundreds of objects that can be combined in groups of 3 to create new items."
    },
    {
        "id": 24,
        "title": "Hidden Objects",
        "thumbnail": "images/Puzzles/hidden-objects.jpg",
        "category": "puzzle",
        "iframeUrl": "https://www.crazygames.com/embed/hidden-objects",
        "description": "Hidden Objects is a puzzle game where the thrill of discovery meets exquisite aesthetics. Delve into beautifully crafted interiors meticulously designed to conceal an array of diverse items.",
        "howToPlay": "Use the left mouse button to find the object Use the scroll wheel or +/- or place two fingers on the touchpad and pinch in/stretch out to zoom in/out."
    },
    {
        "id": 25,
        "title": "Farm Merge Valley",
        "thumbnail": "images/Puzzles/farm-merge-valley.jpg",
        "category": "puzzle",
        "iframeUrl": "https://www.crazygames.com/embed/farm-merge-valley",
        "description": "Farm Merge Valley is a puzzle business farming game where you merge various animals and objects to upgrade them. Grow crops and add animals to your farm while expanding to exciting new lands.",
        "howToPlay": "Merge to grow your farm Build the perfect farm life for your friendly neighbors and animals. Start by merging crops to reach new types of things to grow."
    },
    {
        "id": 26,
        "title": "Kingdom Battle 3d",
        "thumbnail": "images/Strategy/kingdom-battle-3d.jpg",
        "category": "strategy",
        "iframeUrl": "https://cloud.onlinegames.io/games/2025/unity2/kingdom-battle-3d",
        "description": "If you're into free games that mix brainpower strategy with epic battle scenes, Kingdom Battle 3D might be your next obsession.",
        "howToPlay": "You’ll start with Campaign Mode. This is where you fight level by level, unlocking new unit types and getting the hang of the game."
    },
    {
        "id": 27,
        "title": "Fast Food Rush",
        "thumbnail": "images/Strategy/fast-food-rush.jpg",
        "category": "strategy",
        "iframeUrl": "https://cloud.onlinegames.io/games/2025/unity/fast-food-rush",
        "description": "You're at Burger King, sinking your teeth into a juicy cheeseburger and finishing it off in about 15 minutes flat. But just this once, before you head out, pause and take a quick look around.",
        "howToPlay": "WASD / Arrow Keys / Drag Mouse: Move your character around Mouse Scroll: Zoom in or out On Mobile Tap and Drag: Move your character Start with the Bur..."
    },
    {
        "id": 28,
        "title": "Mahjong",
        "thumbnail": "images/Strategy/mahjong.jpg",
        "category": "strategy",
        "iframeUrl": "https://cloud.onlinegames.io/games/2025/unity/mahjong",
        "description": "hen there are the Wind tiles, representing the four cardinal directions—East, South, West, and North. These tiles carry deep meaning in feng shui, the Chinese practice of harmonizing space and energy.",
        "howToPlay": "Can Mahjong always be solved? Not every Mahjong puzzle has a guaranteed solution. However, many Mahjong Online puzzles are specifically created to be..."
    },
    {
        "id": 29,
        "title": "Kings Io",
        "thumbnail": "images/Strategy/kings-io.jpg",
        "category": "strategy",
        "iframeUrl": "https://cloud.onlinegames.io/games/2025/construct/208/kings-io",
        "description": "The road to royalty is that way! ⬆️ If you're ready to rule your own kingdom, play Kings io. This is an exciting online strategy game where you start...",
        "howToPlay": "Movement: Use your mouse to guide your troops around the map. Attack / Build / Upgrade: Click with the left mouse button to choose your action."
    },
    {
        "id": 30,
        "title": "Battle Arena",
        "thumbnail": "images/Adventure/battle-arena.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/battle-arena",
        "description": "Battle Arena is a thrilling RPG adventure battle game that seamlessly blends heart-pounding action with strategic gameplay.",
        "howToPlay": "In a world overrun by demons, you must choose a region at a time to combat your opponent. Battle Arena fights start off in Serenity Valley, where you can assess your enemy's squad in just a tap."
    },
      {
        "id": 31,
        "title": "Pirates Of The Caribbean Tow",
        "thumbnail": "images/Adventure/pirates-of-the-caribbean-tow.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/pirates-of-the-caribbean-tow",
        "description": "Pirates of the Caribbean: Tides of War is a strategic adventure set in the legendary world of pirates. Join Jack Sparrow, Will Turner, and Captain Barbossa on a high-stakes quest for treasure.",
        "howToPlay": "Use the Left Mouse Button to interact with objects and navigate the game. Use the Mouse Wheel or Scroll to zoom in and out."
    },
    {
        "id": 32,
        "title": "Hedgies",
        "thumbnail": "images/Adventure/hedgies.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/hedgies",
        "description": "Hedgies is a charming farming game where a hardworking hedgehog transforms an abandoned plot into a thriving homestead. Grow crops, craft goods, and master skills like cooking and fishing.",
        "howToPlay": "Use the Left Mouse Button to interact."
    },
    {
        "id": 33,
        "title": "Elvenrage",
        "thumbnail": "images/Adventure/elvenrage.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/elvenrage",
        "description": "Elvenrage is a strategy-packed defense game where you play as an elven archer battling waves of orcs in a dangerous fantasy world.",
        "howToPlay": "Use the left mouse button, WASD/arrow keys to play."
    },
    {
        "id": 34,
        "title": "Idle Saga",
        "thumbnail": "images/Adventure/idle-saga.jpg",
        "category": "adventure",
        "iframeUrl": "https://www.crazygames.com/embed/idle-saga",
        "description": "Idle Saga is a fantasy adventure where swords and magic shape your journey. Gather powerful equipment, harness divine and demonic transformations, and conquer every realm in your path.",
        "howToPlay": "Use the left mouse button to interact with the UIs."
    }
];
