const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('listoftags')
    .setDescription('List all available tags'),

  async execute(interaction) {
    await interaction.reply('Fetching tags...');

    
    const tagsMap = {
      "1980s": 177,
      "1990's": 32,
      "2.5D": 242,
      "2D": 28,
      "2D Fighter": 194,
      "2D Platformer": 124,
      "360 Video": 258,
      "3D": 97,
      "3D Fighter": 167,
      "3D Platformer": 239,
      "3D Vision": 154,
      "4 Player Local": 321,
      "4X": 349,
      "6DOF": 85,
      "8-bit Music": 390,
      "Abstract": 119,
      "Action": 71,
      "Action Roguelike": 87,
      "Action RPG": 35,
      "Action RTS": 236,
      "Action-Adventure": 34,
      "Addictive": 430,
      "Adventure": 21,
      "Agriculture": 374,
      "Aliens": 104,
      "Alternate History": 222,
      "Ambient": 180,
      "Anime": 11,
      "Arcade": 76,
      "Archery": 309,
      "Arena Shooter": 211,
      "Artificial Intelligence": 106,
      "Assassin": 238,
      "Asymmetric VR": 185,
      "Asynchronous Multiplayer": 197,
      "Atmospheric": 123,
      "ATV": 419,
      "Audio Production": 394,
      "Auto Battler": 276,
      "Automation": 284,
      "Automobile Sim": 257,
      "Base Building": 47,
      "Baseball": 376,
      "Based On A Novel": 427,
      "Basketball": 385,
      "Battle Royale": 265,
      "Beat 'em up": 210,
      "Beautiful": 332,
      "Benchmark": 412,
      "Bikes": 361,
      "Birds": 424,
      "Blood": 386,
      "BMX": 431,
      "Board Game": 232,
      "Boomer Shooter": 277,
      "Boss Rush": 411,
      "Bowling": 398,
      "Boxing": 73,
      "Building": 49,
      "Bullet Hell": 198,
      "Bullet Time": 285,
      "Capitalism": 20,
      "Card Battler": 240,
      "Card Game": 237,
      "Cartoon": 169,
      "Cartoony": 163,
      "Casual": 5,
      "Cats": 250,
      "Character Action Game": 214,
      "Character Customization": 56,
      "Chess": 428,
      "Choices Matter": 228,
      "Choose Your Own Adventure": 226,
      "Cinematic": 195,
      "City Builder": 55,
      "Class-Based": 96,
      "Clicker": 136,
      "Co-op": 90,
      "Co-op Campaign": 328,
      "Coding": 439,
      "Cold War": 253,
      "Collectathon": 81,
      "Colony Sim": 139,
      "Colorful": 53,
      "Combat": 33,
      "Combat Racing": 256,
      "Comedy": 105,
      "Comic Book": 12,
      "Competitive": 335,
      "Conspiracy": 262,
      "Controller": 190,
      "Conversation": 227,
      "Cooking": 298,
      "Cozy": 336,
      "Crafting": 23,
      "Creature Collector": 292,
      "Cricket": 440,
      "Crime": 61,
      "Crowdfunded": 426,
      "CRPG": 173,
      "Cult Classic": 399,
      "Cute": 2,
      "Cyberpunk": 244,
      "Cycling": 433,
      "Dark": 152,
      "Dark Comedy": 140,
      "Dark Fantasy": 150,
      "Dark Humor": 141,
      "Dating Sim": 10,
      "Deckbuilding": 293,
      "Demons": 193,
      "Design & Illustration": 364,
      "Destruction": 144,
      "Detective": 58,
      "Dice": 447,
      "Difficult": 95,
      "Dinosaurs": 39,
      "Diplomacy": 302,
      "Documentary": 401,
      "Dog": 251,
      "Dragons": 40,
      "Drama": 14,
      "Driving": 206,
      "Dungeon Crawler": 92,
      "Dungeons & Dragons": 324,
      "Dwarf": 395,
      "Dynamic Narration": 283,
      "Dystopian": 303,
      "Early Access": 132,
      "Economy": 19,
      "Education": 57,
      "Electronic": 409,
      "Electronic Music": 375,
      "Elf": 362,
      "Emotional": 15,
      "Epic": 443,
      "Episodic": 389,
      "Escape Room": 207,
      "eSports": 79,
      "Experience": 305,
      "Experimental": 164,
      "Exploration": 22,
      "Extraction Shooter": 418,
      "Faith": 377,
      "Family Friendly": 54,
      "Fantasy": 26,
      "Farming": 396,
      "Farming Sim": 346,
      "Fast-Paced": 189,
      "Feature Film": 444,
      "Female Protagonist": 208,
      "Fighting": 165,
      "First-Person": 75,
      "Fishing": 345,
      "Flight": 219,
      "FMV": 261,
      "Football (American)": 371,
      "Football (Soccer)": 308,
      "Foreign": 196,
      "Fox": 420,
      "FPS": 156,
      "Free to Play": 133,
      "Funny": 16,
      "Futuristic": 159,
      "Gambling": 287,
      "Game Development": 17,
      "GameMaker": 408,
      "Games Workshop": 432,
      "Gaming": 372,
      "God Game": 46,
      "Golf": 358,
      "Gore": 146,
      "Gothic": 266,
      "Grand Strategy": 241,
      "Great Soundtrack": 178,
      "Grid-Based Movement": 231,
      "Gun Customization": 288,
      "Hack and Slash": 89,
      "Hacking": 247,
      "Hand-drawn": 162,
      "Hardware": 436,
      "Heist": 264,
      "Hentai": 313,
      "Hero Shooter": 252,
      "Hex Grid": 340,
      "Hidden Object": 42,
      "Historical": 215,
      "Hobby Sim": 425,
      "Hockey": 429,
      "Horror": 43,
      "Horses": 297,
      "Hunting": 269,
      "Idler": 270,
      "Illuminati": 217,
      "Immersive": 67,
      "Immersive Sim": 230,
      "Indie": 69,
      "Instrumental Music": 353,
      "Intentionally Awkward Controls": 373,
      "Interactive Fiction": 153,
      "Inventory Management": 113,
      "Investigation": 62,
      "Isometric": 145,
      "Jet": 327,
      "Job Simulator": 397,
      "JRPG": 172,
      "Jump Scare": 404,
      "Kickstarter": 291,
      "LEGO": 365,
      "Lemmings": 333,
      "Level Editor": 204,
      "LGBTQ+": 225,
      "Life Sim": 6,
      "Linear": 126,
      "Local Co-Op": 199,
      "Local Multiplayer": 200,
      "Logic": 48,
      "Loot": 213,
      "Looter Shooter": 319,
      "Lore-Rich": 63,
      "Lovecraftian": 147,
      "Magic": 36,
      "Mahjong": 438,
      "Management": 8,
      "Mars": 160,
      "Martial Arts": 74,
      "Massively Multiplayer": 130,
      "Match 3": 275,
      "Mature": 312,
      "Mechs": 245,
      "Medical Sim": 271,
      "Medieval": 30,
      "Memes": 278,
      "Metroidvania": 192,
      "Military": 112,
      "Mini Golf": 359,
      "Minigames": 382,
      "Minimalism": 377,
      "Modern": 193,
      "Mod": 85,
      "Multiple Endings": 139,
      "Music": 18,
      "Music Game": 55,
      "Mystery": 89,
      "Mythology": 204,
      "Narrative": 69,
      "Nature": 413,
      "Nautical": 260,
      "Nerdy": 84,
      "Network": 342,
      "Ninja": 312,
      "No Combat": 223,
      "Nonlinear": 440,
      "Nostalgia": 291,
      "Nudity": 375,
      "Nudity and Violence": 422,
      "Old-School": 208,
      "Online Co-Op": 226,
      "Online Multiplayer": 204,
      "Open World": 135,
      "Parkour": 320,
      "Party": 124,
      "Pawns": 214,
      "Pedal": 425,
      "Pez": 446,
      "Physics": 215,
      "Pinball": 23,
      "Platformer": 39,
      "Point and Click": 17,
      "Political": 186,
      "Post-apocalyptic": 104,
      "Psychological Horror": 146,
      "Puzzle": 141,
      "Puzzle-Platformer": 226,
      "Quick Time Events": 60,
      "Racing": 15,
      "Racing Game": 122,
      "RPG": 150,
      "RPG Maker": 270,
      "Rogue-lite": 194,
      "Rogue-like": 158,
      "Romance": 37,
      "RPGs": 173,
      "Sandbox": 116,
      "School": 261,
      "Sci-Fi": 42,
      "Scouting": 422,
      "Secret": 291,
      "Serial": 267,
      "Shmup": 239,
      "Shooter": 64,
      "Simulation": 37,
      "Single Player": 207,
      "Skill Tree": 271,
      "Slasher": 328,
      "Social Deduction": 176,
      "Soundtrack": 167,
      "Space": 104,
      "Space Combat": 170,
      "Sports": 93,
      "Space Simulation": 261,
      "Spectator": 205,
      "Speech": 364,
      "Strategy": 137,
      "Survival": 90,
      "Survival Horror": 73,
      "Survival Sandbox": 214,
      "Tactical": 138,
      "Text-Based": 164,
      "Third-Person": 103,
      "Thought Provoking": 267,
      "Thriller": 252,
      "Time Manipulation": 253,
      "Time Management": 272,
      "Toon": 356,
      "Trading Card Game": 368,
      "Turn-Based": 139,
      "Turn-Based Strategy": 139,
      "Twinstick Shooter": 229,
      "Typing": 387,
      "Underground": 320,
      "Visual Novel": 9,
      "Voxel": 279,
      "VR": 72,
      "Walking Simulator": 375,
      "War": 111,
      "War Game": 114,
      "Warhammer 40k": 434,
      "Web Publishing": 378,
      "Western": 148,
      "Wholesome": 347,
      "World War II": 300,
      "World War I": 413,
      "Wrestling": 400,
      "Zombies": 99,
    };

    // Extract the tag names
    const tagNames = Object.keys(tagsMap); // Get only the keys (names)

    // Sort tags alphabetically
    const sortedTagNames = tagNames.sort((a, b) => a.localeCompare(b));

    // Join names into a string limited to Discord's character limit
    const tagList = sortedTagNames.join(', ').slice(0, 2000);

    const embed = new EmbedBuilder()
      .setTitle('List of All Tags')
      .setURL('https://steamdb.info/tags/')
      .setDescription(`${tagList}\nFollow the link above to see more!`)
      .setColor(0xFF4500)
      .setTimestamp()
      .setFooter({ text: 'Have questions? Twitter @_ok_adrian' });

    await interaction.editReply({ content: '', embeds: [embed] });
  },
};