const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const tagsMap = {
"1980s": 177,"1990's": 32,"2.5D": 242,"2D": 28,"2D Fighter": 194,"2D Platformer": 124,"360 Video": 258,"3D": 97,"3D Fighter": 167,"3D Platformer": 239,"3D Vision": 154,"4 Player Local": 321,"4X": 349,"6DOF": 85,"8-bit Music": 390,"Abstract": 119,"Action": 71,"Action Roguelike": 87,"Action RPG": 35,"Action RTS": 236,"Action-Adventure": 34,"Addictive": 430,"Adventure": 21,"Agriculture": 374,"Aliens": 104,"Alternate History": 222,"Ambient": 180,"America": 325,"Animation & Modeling": 363,"Anime": 11,"Arcade": 76,"Archery": 309,"Arena Shooter": 211,"Artificial Intelligence": 106,"Assassin": 238,"Asymmetric VR": 185,"Asynchronous Multiplayer": 197,"Atmospheric": 123,"ATV": 419,"Audio Production": 394,"Auto Battler": 276,"Automation": 284,"Automobile Sim": 257,"Base Building": 47,"Baseball": 376,"Based On A Novel": 427,"Basketball": 385,"Battle Royale": 265,"Beat 'em up": 210,"Beautiful": 332,"Benchmark": 412,"Bikes": 361,"Birds": 424,"Blood": 386,"BMX": 431,"Board Game": 232,"Boomer Shooter": 277,"Boss Rush": 411,"Bowling": 398,"Boxing": 73,"Building": 49,"Bullet Hell": 198,"Bullet Time": 285,"Capitalism": 20,"Card Battler": 240,"Card Game": 237,"Cartoon": 169,"Cartoony": 163,"Casual": 5,"Cats": 250,"Character Action Game": 214,"Character Customization": 56,"Chess": 428,"Choices Matter": 228,"Choose Your Own Adventure": 226,"Cinematic": 195,"City Builder": 55,"Class-Based": 96,"Classic": 343,"Clicker": 136,"Co-op": 90,"Co-op Campaign": 328,"Coding": 439,"Cold War": 253,"Collectathon": 81,"Colony Sim": 139,"Colorful": 53,"Combat": 33,"Combat Racing": 256,"Comedy": 105,"Comic Book": 12,"Competitive": 335,"Conspiracy": 262,"Controller": 190,"Conversation": 227,"Cooking": 298,"Cozy": 336,"Crafting": 23,"Creature Collector": 292,"Cricket": 440,"Crime": 61,"Crowdfunded": 426,"CRPG": 173,"Cult Classic": 399,"Cute": 2,"Cyberpunk": 244,"Cycling": 433,"Dark": 152,"Dark Comedy": 140,"Dark Fantasy": 150,"Dark Humor": 141,"Dating Sim": 10,"Deckbuilding": 293,"Demons": 193,"Design & Illustration": 364,"Destruction": 144,"Detective": 58,"Dice": 447,"Difficult": 95,"Dinosaurs": 39,"Diplomacy": 302,"Documentary": 401,"Dog": 251,"Dragons": 40,"Drama": 14,"Driving": 206,"Dungeon Crawler": 92,"Dungeons & Dragons": 324,"Dwarf": 395,"Dynamic Narration": 283,"Dystopian": 303,"Early Access": 132,"Economy": 19,"Education": 57,"Electronic": 409,"Electronic Music": 375,"Elf": 362,"Emotional": 15,"Epic": 443,"Episodic": 389,"Escape Room": 207,"eSports": 79,"Experience": 305,"Experimental": 164,"Exploration": 22,"Extraction Shooter": 418,"Faith": 377,"Family Friendly": 54,"Fantasy": 26,"Farming": 396,"Farming Sim": 346,"Fast-Paced": 189,"Feature Film": 444,"Female Protagonist": 208,"Fighting": 165,"First-Person": 75,"Fishing": 345,"Flight": 219,"FMV": 261,"Football (American)": 371,"Football (Soccer)": 308,"Foreign": 196,"Fox": 420,"FPS": 156,"Free to Play": 133,"Funny": 16,"Futuristic": 159,"Gambling": 287,"Game Development": 17,"GameMaker": 408,"Games Workshop": 432,"Gaming": 372,"God Game": 46,"Golf": 358,"Gore": 146,"Gothic": 266,"Grand Strategy": 241,"Great Soundtrack": 178,"Grid-Based Movement": 231,"Gun Customization": 288,"Hack and Slash": 89,"Hacking": 247,"Hand-drawn": 162,"Hardware": 436,"Heist": 264,"Hentai": 313,"Hero Shooter": 252,"Hex Grid": 340,"Hidden Object": 42,"Historical": 215,"Hobby Sim": 425,"Hockey": 429,"Horror": 43,"Horses": 297,"Hunting": 269,"Idler": 270,"Illuminati": 217,"Immersive": 67,"Immersive Sim": 230,"Indie": 69,"Instrumental Music": 353,"Intentionally Awkward Controls": 373,"Interactive Fiction": 153,"Inventory Management": 113,"Investigation": 62,"Isometric": 145,"Jet": 327,"Job Simulator": 397,"JRPG": 172,"Jump Scare": 404,"Kickstarter": 291,"LEGO": 365,"Lemmings": 333,"Level Editor": 204,"LGBTQ+": 225,"Life Sim": 6,"Linear": 126,"Local Co-Op": 199,"Local Multiplayer": 200,"Logic": 48,"Loot": 213,"Looter Shooter": 319,"Lore-Rich": 63,"Lovecraftian": 147,"Magic": 36,"Mahjong": 438,"Management": 8,"Mars": 160,"Martial Arts": 74,"Massively Multiplayer": 130,"Match 3": 275,"Mature": 312,"Mechs": 245,"Medical Sim": 271,"Medieval": 30,"Memes": 278,"Metroidvania": 192,"Military": 112,"Mini Golf": 359,"Minigames": 382,"Minimalist": 120,"Mining": 342,"MMORPG": 171,"MOBA": 355,"Mod": 403,"Moddable": 122,"Modern": 203,"Motocross": 422,"Motorbike": 311,"Mouse only": 315,"Movie": 405,"Multiplayer": 83,"Multiple Endings": 127,"Music": 170,"Music-Based Procedural Generation": 370,"Musou": 417,"Mystery": 59,"Mystery Dungeon": 102,"Mythology": 175,"Narration": 100,"Narrative": 68,"Nature": 229,"Naval": 306,"Naval Combat": 337,"Ninja": 290,"Noir": 268,"Nonlinear": 65,"Nostalgia": 379,"NSFW": 314,"Nudity": 161,"Offroad": 380,"Old School": 41,"On-Rails Shooter": 220,"Online Co-Op": 93,"Open World": 52,"Open World Survival Craft": 25,"Otome": 341,"Outbreak Sim": 383,"Parkour": 254,"Parody": 212,"Party": 318,"Party Game": 316,"Party-Based RPG": 76,"Physics": 134,"Pixel Graphics": 88,"Platform": 250,"Platforms": 304,"Point and Click": 82,"Police": 203,"Politics": 271,"Post-apocalyptic": 382,"Puzzle": 75,"Puzzle-Platformer": 24,"Puzzles": 60,"Racing": 90,"Racing Sim": 281,"Ragdoll Physics": 82,"Rats": 45,"Real-Time": 280,"Realistic": 373,"Realistic Graphics": 184,"Rebirth": 301,"Rebuild": 327,"Remake": 328,"Remastered": 129,"Renaissance": 293,"Roguelike": 112,"Roguelite": 115,"Role Playing": 44,"RPG": 15,"RPG Maker": 10,"RTS": 88,"RPG Elements": 387,"RPG Maker": 273,"Science": 1,"Sci-Fi": 186,"Score Attack": 83,"Scripting": 264,"Second Chance": 223,"Shmup": 270,"Shooter": 130,"Simulation": 234,"Singleplayer": 327,"Slasher": 308,"Sniper": 440,"Social Simulation": 366,"Soundtrack": 189,"Space": 135,"Space Sim": 135,"Space Shooter": 339,"Speedrun": 397,"Spelling": 353,"Spin-off": 99,"Spy": 392,"Stealth": 8,"Steampunk": 393,"Strategy": 161,"Survival": 318,"Survival Horror": 343,"Survival Simulation": 335,"Survival RPG": 191,"Survival Game": 305,"Survival Crafting": 323,"Tabletop": 123,"Tactics": 110,"Tactical RPG": 153,"Team-Based": 33,"Tennis": 430,"Text Adventure": 134,"Text-Based": 388,"Third-Person": 281,"Tile-Based": 309,"Time Management": 14,"Time Travel": 33,"Timing": 115,"Top-Down": 160,"Tower Defense": 65,"Trading Card Game": 233,"Traditional RPG": 101,"Transformers": 132,"Transportation": 407,"Trivia": 398,"Tropes": 366,"Turn-Based": 367,"Twitch": 385,"Typing": 189,"Underground": 224,"Unlockables": 276,"Unreal Engine": 164,"Visual Novel": 227,"Voodoo": 144,"VR": 170,"Wargame": 392,"Warfare": 300,"Weather": 411,"Western": 363,"Wilderness": 217,"World War I": 187,"World War II": 272,"Zombies": 265
};
async function fetchGameByTag(tagKey) {
  const { default: fetch } = await import('node-fetch');

  const tagId = tagsMap[tagKey];
  const url = `https://steam.cma.dk/apps?tag[]=${tagId}&free=false&non_vr=false&format=json`;
  const headers = {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'wheelhausDiscordBot',
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to the server.');
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tag')
    .setDescription('Get a random game based on a tag')
    .addStringOption(option =>
      option.setName('tag')
        .setDescription('Choose a game tag')
        .setRequired(true)
    ),

    async execute(interaction) {
      const tagKey = interaction.options.getString('tag');
    
      if (!tagsMap[tagKey]) {
        await interaction.reply({ content: 'Invalid tag. Please choose a valid tag.', ephemeral: true });
        return;
      }
    
      try {
        const games = await fetchGameByTag(tagKey);
        if (!games || games.length === 0) {
          await interaction.reply({ content: 'No results found. Please try a different tag.', ephemeral: true });
          return;
        }
    
        // Randomly select one game from the results
        const randomIndex = Math.floor(Math.random() * games.length);
        const game = games[randomIndex];
     
        const embed = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle(game.name)
          .setDescription(game.description)
          .setThumbnail(game.image)
          .addFields(
            { name: 'Price', value: game.price, inline: true },
            { name: 'Release Date', value: game.release_date, inline: true },
          );
    
        await interaction.reply({ embeds: [embed] });
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Failed to fetch games. Please try again later.', ephemeral: true });
      }
    }
  }    