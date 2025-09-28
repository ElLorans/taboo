const words = [
    { word: "HARBOR", forbidden: ["BOATS", "DOCK", "SHIP", "PORT", "ANCHOR"] },
    { word: "PYRAMID", forbidden: ["EGYPT", "TRIANGLE", "TOMB", "STONE", "DESERT"] },
    { word: "TUNNEL", forbidden: ["UNDERGROUND", "SUBWAY", "CAVE", "PASSAGE", "ROAD"] },
    { word: "OASIS", forbidden: ["DESERT", "WATER", "PALM", "REFUGE", "SAND"] },
    { word: "CASTLE", forbidden: ["KING", "QUEEN", "TOWER", "FORTRESS", "MOAT"] },
    { word: "PRISON", forbidden: ["JAIL", "INMATE", "CELL", "GUARD", "SENTENCE"] },
    { word: "MUSEUM", forbidden: ["ART", "EXHIBIT", "PAINTING", "HISTORY", "DISPLAY"] },
    { word: "COMPASS", forbidden: ["NORTH", "SOUTH", "DIRECTION", "NAVIGATE", "MAGNET"] },
    { word: "CARNIVAL", forbidden: ["RIDES", "FERRIS", "GAMES", "FAIR", "CLOWN"] },
    { word: "MOUNTAIN", forbidden: ["PEAK", "HIGH", "CLIMB", "ROCK", "SUMMIT"] },
    { word: "LANTERN", forbidden: ["LIGHT", "CANDLE", "LAMP", "DARK", "NIGHT"] },
    { word: "ISLAND", forbidden: ["WATER", "SEA", "TROPICAL", "BEACH", "COAST"] },
    { word: "TAPESTRY", forbidden: ["FABRIC", "WOVEN", "CLOTH", "ART", "HANGING"] },
    { word: "CATHEDRAL", forbidden: ["CHURCH", "GOTHIC", "PRIEST", "ALTAR", "STAINED"] },
    { word: "MARKET", forbidden: ["SELL", "BUY", "STAND", "FOOD", "CROWD"] },
    { word: "BRIDGE", forbidden: ["RIVER", "CROSS", "STRUCTURE", "ROAD", "ARCH"] },
    { word: "PALACE", forbidden: ["ROYAL", "KING", "QUEEN", "CASTLE", "CROWN"] },
    { word: "FOUNTAIN", forbidden: ["WATER", "SPRAY", "PARK", "DECORATION", "STATUE"] },
    { word: "CANYON", forbidden: ["GRAND", "ROCK", "CLIFF", "RIVER", "DEEP"] },
    { word: "STADIUM", forbidden: ["SPORT", "ARENA", "GAME", "CROWD", "SEATS"] },
    { word: "LANTERN", forbidden: ["LIGHT", "GLOW", "CANDLE", "LAMP", "NIGHT"] },
    { word: "PARACHUTE", forbidden: ["JUMP", "PLANE", "SKY", "LANDING", "AIR"] },
    { word: "HORIZON", forbidden: ["SUNSET", "DISTANT", "LINE", "SKY", "VIEW"] },
    { word: "GLACIER", forbidden: ["ICE", "COLD", "MOUNTAIN", "MELT", "SNOW"] },
    { word: "MARATHON", forbidden: ["RUN", "DISTANCE", "RACE", "ATHLETE", "MILES"] },
    { word: "ORCHESTRA", forbidden: ["MUSIC", "INSTRUMENTS", "VIOLIN", "CONDUCTOR", "BAND"] },
    { word: "PYLON", forbidden: ["TOWER", "POWER", "LINES", "ELECTRIC", "STRUCTURE"] },
    { word: "SYMPHONY", forbidden: ["MUSIC", "ORCHESTRA", "BEETHOVEN", "MOVEMENT", "CLASSICAL"] },
    { word: "MONASTERY", forbidden: ["MONK", "PRAY", "RELIGION", "BUILDING", "NUN"] },
    { word: "GREENHOUSE", forbidden: ["PLANTS", "GLASS", "GROW", "FLOWERS", "GARDEN"] },
    { word: "TRIDENT", forbidden: ["POSEIDON", "SEA", "WEAPON", "FORK", "GREEK"] },
    { word: "FOOTPRINT", forbidden: ["TRACKS", "SHOES", "SAND", "MARK", "STEP"] },
    { word: "BELLTOWER", forbidden: ["CHURCH", "RING", "CLOCK", "STEePLE", "SOUND"] },
    { word: "COURTYARD", forbidden: ["HOUSE", "OPEN", "INSIDE", "GARDEN", "SQUARE"] },
    { word: "TRAPEZE", forbidden: ["CIRCUS", "SWING", "FLY", "ACROBAT", "NET"] },
    { word: "MIRROR", forbidden: ["REFLECTION", "LOOK", "GLASS", "SEE", "IMAGE"] },
    { word: "GALAXY", forbidden: ["STARS", "MILKY", "SPACE", "PLANETS", "ASTRONOMY"] },
    { word: "PLANET", forbidden: ["EARTH", "ORBIT", "SPACE", "MARS", "MOON"] },
    { word: "ELEVATOR", forbidden: ["LIFT", "BUILDING", "FLOOR", "BUTTON", "RIDE"] },
    { word: "ESCALATOR", forbidden: ["STAIRS", "MALL", "MOVING", "STEP", "SHOPPING"] },
    { word: "PYLON", forbidden: ["ELECTRIC", "WIRE", "TOWER", "POWER", "LINES"] },
    { word: "BEACON", forbidden: ["LIGHTHOUSE", "GUIDE", "SIGNAL", "SHINE", "WARN"] },
    { word: "TUNDRAS", forbidden: ["ARCTIC", "FROZEN", "SNOW", "COLD", "PERMAFROST"] },
    { word: "PRISM", forbidden: ["LIGHT", "RAINBOW", "GLASS", "SPECTRUM", "REFRACT"] },
    { word: "LAGOON", forbidden: ["ISLAND", "SEA", "SHALLOW", "WATER", "TROPICAL"] },
    { word: "CATHEDRAL", forbidden: ["CHURCH", "GOTHIC", "PRIEST", "ALTAR", "WINDOWS"] },
    { word: "PYLON", forbidden: ["POWER", "ELECTRIC", "TOWER", "LINES", "SUPPORT"] },
    { word: "CITADEL", forbidden: ["FORTRESS", "DEFENSE", "CASTLE", "STRONGHOLD", "CITY"] },
    { word: "OPERA", forbidden: ["SING", "STAGE", "DRAMA", "ARIA", "MUSIC"] },
    { word: "ARCHIVE", forbidden: ["FILES", "STORAGE", "RECORDS", "DOCUMENTS", "HISTORY"] },
    { word: "BUNKER", forbidden: ["UNDERGROUND", "WAR", "SAFE", "SHELTER", "MILITARY"] },
    { word: "TOWER", forbidden: ["TALL", "HIGH", "BUILDING", "STRUCTURE", "SKY"] },
    { word: "TEMPLE", forbidden: ["RELIGION", "GOD", "PRAY", "SHRINE", "HOLY"] },
    { word: "MOSAIC", forbidden: ["TILES", "ART", "PIECES", "PATTERN", "COLOR"] },
    { word: "QUARRY", forbidden: ["STONE", "MINE", "ROCK", "EXCAVATE", "PIT"] },
    { word: "LANTERN", forbidden: ["NIGHT", "LIGHT", "GLOW", "LAMP", "CANDLE"] },
    { word: "FURNACE", forbidden: ["HEAT", "FIRE", "METAL", "SMELT", "HOT"] },
    { word: "SPHINX", forbidden: ["EGYPT", "STATUE", "LION", "RIDDLE", "DESERT"] },
    { word: "BALCONY", forbidden: ["HOUSE", "BUILDING", "WINDOW", "OUTSIDE", "VIEW"] },
    { word: "HANGAR", forbidden: ["PLANE", "AIRPORT", "STORAGE", "AIRCRAFT", "BUILDING"] },
    { word: "DOCKYARD", forbidden: ["SHIP", "BOAT", "SEA", "HARBOR", "BUILD"] },
    { word: "LANTERN", forbidden: ["CANDLE", "NIGHT", "LIGHT", "LAMP", "FESTIVAL"] },
    { word: "CITADEL", forbidden: ["CASTLE", "DEFENSE", "STRONGHOLD", "CITY", "WALL"] },
    { word: "BASILICA", forbidden: ["CHURCH", "ROME", "RELIGIOUS", "ALTAR", "PRIEST"] },
    { word: "ABYSS", forbidden: ["DEEP", "OCEAN", "DARK", "PIT", "VOID"] },
    { word: "GALLEON", forbidden: ["SHIP", "SAIL", "SPANISH", "TREASURE", "SEA"] },
    { word: "CAVERNS", forbidden: ["CAVE", "STALAGMITE", "STALACTITE", "UNDERGROUND", "ROCK"] },
    { word: "FJORD", forbidden: ["NORWAY", "CLIFFS", "WATER", "SEA", "MOUNTAIN"] },
    { word: "SAVANNA", forbidden: ["AFRICA", "GRASS", "ANIMALS", "PLAINS", "LIONS"] },
    { word: "BARRACKS", forbidden: ["SOLDIER", "MILITARY", "ARMY", "SLEEP", "BASE"] },
    { word: "COLISEUM", forbidden: ["ROME", "ARENA", "GLADIATOR", "ANCIENT", "FIGHT"] },
    { word: "TOWER", forbidden: ["HIGH", "SKY", "BUILDING", "LOOKOUT", "TALL"] },
    { word: "MILL", forbidden: ["WATER", "WIND", "GRIND", "GRAIN", "FLOUR"] },
    { word: "FARMHOUSE", forbidden: ["COUNTRY", "RURAL", "HOUSE", "FIELD", "BARN"] },
    { word: "WORKSHOP", forbidden: ["TOOLS", "BUILD", "CARPENTER", "CRAFT", "MAKER"] },
    { word: "SCHOOL", forbidden: ["LEARN", "STUDY", "CLASS", "TEACHER", "STUDENT"] },
    { word: "HOSPITAL", forbidden: ["DOCTOR", "NURSE", "PATIENT", "SICK", "ROOM"] },
    { word: "OBSERVATORY", forbidden: ["TELESCOPE", "STARS", "SPACE", "SCIENCE", "SKY"] },
    { word: "PLANETARIUM", forbidden: ["STARS", "SHOW", "SPACE", "CEILING", "DOME"] },
    { word: "METEOR", forbidden: ["SHOOTING", "STAR", "SPACE", "FALLING", "ASTEROID"] },
    { word: "ECLIPSE", forbidden: ["SUN", "MOON", "SHADOW", "LIGHT", "SOLAR"] },
    { word: "TIDES", forbidden: ["MOON", "OCEAN", "WAVES", "WATER", "SEA"] },
    // ... continue up to 300
// Continuing the list...
    { word: "LABYRINTH", forbidden: ["MAZE", "MINOTAUR", "PATH", "GREEK", "TWIST"] },
    { word: "MONUMENT", forbidden: ["STATUE", "MEMORY", "STONE", "HISTORY", "BUILDING"] },
    { word: "BASILISK", forbidden: ["SNAKE", "MYTH", "EYES", "STONE", "CREATURE"] },
    { word: "CITADEL", forbidden: ["CASTLE", "STRONGHOLD", "FORTRESS", "WALL", "DEFENSE"] },
    { word: "GARGOYLE", forbidden: ["STONE", "STATUE", "ROOF", "GOTHIC", "DRAIN"] },
    { word: "CARAVAN", forbidden: ["DESERT", "CAMEL", "JOURNEY", "WAGON", "GROUP"] },
    { word: "PAGODA", forbidden: ["ASIA", "TEMPLE", "BUDDHIST", "TOWER", "CHINA"] },
    { word: "TURRET", forbidden: ["CASTLE", "TOWER", "CORNER", "DEFENSE", "ROUND"] },
    { word: "DRAWBRIDGE", forbidden: ["CASTLE", "MOAT", "LIFT", "GATE", "WOOD"] },
    { word: "CATHEDRAL", forbidden: ["CHURCH", "ALTAR", "STAINED", "WINDOW", "PRAYER"] },
    { word: "MAUSOLEUM", forbidden: ["TOMB", "BURIAL", "STONE", "GRAVE", "MEMORIAL"] },
    { word: "AQUEDUCT", forbidden: ["ROMAN", "WATER", "ARCHES", "FLOW", "CHANNEL"] },
    { word: "FORTUNE", forbidden: ["LUCK", "RICH", "FUTURE", "MONEY", "TELLER"] },
    { word: "TREASURE", forbidden: ["CHEST", "GOLD", "PIRATE", "JEWELS", "MAP"] },
    { word: "DOCK", forbidden: ["SHIP", "BOAT", "HARBOR", "WATER", "PIER"] },
    { word: "ABBEY", forbidden: ["CHURCH", "MONK", "RELIGIOUS", "NUN", "BUILDING"] },
    { word: "PUPPET", forbidden: ["STRINGS", "HAND", "CONTROL", "SHOW", "DOLL"] },
    { word: "QUILL", forbidden: ["PEN", "FEATHER", "WRITE", "INK", "PAPER"] },
    { word: "ANVIL", forbidden: ["BLACKSMITH", "METAL", "HAMMER", "IRON", "FORGE"] },
    { word: "VIADUCT", forbidden: ["BRIDGE", "ARCH", "ROAD", "TRAIN", "TALL"] },
    { word: "LANTERN", forbidden: ["LIGHT", "CANDLE", "GLOW", "NIGHT", "FESTIVAL"] },
    { word: "CITADEL", forbidden: ["STRONGHOLD", "WALLS", "CASTLE", "DEFEND", "CITY"] },
    { word: "SIEGE", forbidden: ["CASTLE", "WAR", "ARMY", "ATTACK", "DEFENSE"] },
    { word: "ALCHEMY", forbidden: ["GOLD", "SCIENCE", "POTION", "LEAD", "STONE"] },
    { word: "COLOSSEUM", forbidden: ["ROME", "ARENA", "FIGHT", "GLADIATOR", "CIRCUS"] },
    { word: "SANCTUARY", forbidden: ["SAFE", "CHURCH", "HOLY", "ANIMALS", "REFUGE"] },
    { word: "MONOLITH", forbidden: ["STONE", "GIANT", "BLOCK", "SINGLE", "STATUE"] },
    { word: "BASTION", forbidden: ["FORTRESS", "DEFENSE", "CASTLE", "WALL", "PROTECTION"] },
    { word: "TRELLIS", forbidden: ["PLANTS", "CLIMB", "WOOD", "VINES", "GARDEN"] },
    { word: "FOYER", forbidden: ["ENTRANCE", "ROOM", "HOUSE", "LOBBY", "DOOR"] },
    { word: "RAMPART", forbidden: ["WALL", "DEFENSE", "CASTLE", "FORTRESS", "BARRIER"] },
    { word: "CUPOLA", forbidden: ["DOME", "ROOF", "BUILDING", "ROUND", "TOP"] },
    { word: "VAULT", forbidden: ["BANK", "MONEY", "LOCK", "SAFE", "ROOM"] },
    { word: "TURRET", forbidden: ["TOWER", "CASTLE", "CIRCLE", "DEFENSE", "CORNER"] },
    { word: "STEPPES", forbidden: ["PLAINS", "GRASS", "RUSSIA", "LAND", "WIDE"] },
    { word: "CAIRN", forbidden: ["STONES", "PILE", "MARKER", "MOUNTAIN", "PATH"] },
    { word: "CRYPT", forbidden: ["TOMB", "UNDERGROUND", "CHURCH", "GRAVE", "BURIAL"] },
    { word: "PORTCULLIS", forbidden: ["GATE", "CASTLE", "IRON", "CHAIN", "DEFENSE"] },
    { word: "MOAT", forbidden: ["CASTLE", "WATER", "DEFENSE", "BRIDGE", "SURROUND"] },
    { word: "BUTTRESS", forbidden: ["SUPPORT", "ARCHITECTURE", "GOTHIC", "CHURCH", "STONE"] },
    { word: "KEEP", forbidden: ["CASTLE", "TOWER", "STRONGHOLD", "FORTRESS", "DEFEND"] },
    { word: "TREBUCHET", forbidden: ["CATAPULT", "WAR", "CASTLE", "ATTACK", "SIEGE"] },
    { word: "PILLAR", forbidden: ["COLUMN", "SUPPORT", "STONE", "ARCHITECTURE", "BUILDING"] },
    { word: "ACROPOLIS", forbidden: ["ATHENS", "GREECE", "TEMPLE", "RUINS", "HILL"] },
    { word: "PANTHEON", forbidden: ["ROME", "TEMPLE", "GODS", "DOME", "ANCIENT"] },
    { word: "CLOISTER", forbidden: ["MONKS", "WALKWAY", "ABBOT", "CHURCH", "QUIET"] },
    { word: "DRAWBRIDGE", forbidden: ["CASTLE", "MOAT", "PULL", "GATE", "WOOD"] },
    { word: "CANNON", forbidden: ["GUN", "WAR", "EXPLOSION", "CASTLE", "BATTLE"] },
    { word: "LANCE", forbidden: ["KNIGHT", "HORSE", "JOUST", "TOURNAMENT", "SPEAR"] },
    { word: "HELM", forbidden: ["KNIGHT", "ARMOR", "HEAD", "PROTECTION", "METAL"] },
    { word: "GAUNTLET", forbidden: ["ARMOR", "HAND", "METAL", "KNIGHT", "CHALLENGE"] },
    { word: "CROWN", forbidden: ["KING", "QUEEN", "HEAD", "ROYAL", "JEWEL"] },
    { word: "ORB", forbidden: ["SPHERE", "KING", "MAGIC", "GLOBE", "CIRCLE"] },
    { word: "SCEPTER", forbidden: ["KING", "QUEEN", "POWER", "ROYAL", "STAFF"] },
    { word: "BANNER", forbidden: ["FLAG", "SYMBOL", "WAR", "SIGN", "CLOTH"] },
    { word: "CREST", forbidden: ["FAMILY", "SHIELD", "COAT", "SYMBOL", "ARMS"] },
    { word: "HERALD", forbidden: ["MESSENGER", "ANNOUNCE", "NEWS", "SIGN", "ROYAL"] },
    { word: "ARMORY", forbidden: ["WEAPONS", "STORAGE", "CASTLE", "SWORDS", "ARMOR"] },
    { word: "DUNGEON", forbidden: ["PRISON", "CASTLE", "CELL", "UNDERGROUND", "CHAIN"] },
    { word: "CHAPEL", forbidden: ["CHURCH", "SMALL", "PRAY", "ALTAR", "HOLY"] },
    { word: "TOMB", forbidden: ["BURIAL", "STONE", "GRAVE", "CRYPT", "BODY"] },
    { word: "PYLON", forbidden: ["POWER", "LINES", "TOWER", "ELECTRIC", "SUPPORT"] },
    { word: "PYRE", forbidden: ["FIRE", "WOOD", "BURN", "CREMATION", "CEREMONY"] },
    { word: "ALTAR", forbidden: ["CHURCH", "PRIEST", "HOLY", "TABLE", "SACRIFICE"] },
    { word: "ROSARY", forbidden: ["PRAYER", "BEADS", "CATHOLIC", "NECKLACE", "CHURCH"] },
    { word: "MASS", forbidden: ["CHURCH", "PRIEST", "CEREMONY", "CATHOLIC", "SERVICE"] },
    { word: "CHALICE", forbidden: ["CUP", "GOLD", "CHURCH", "WINE", "HOLY"] },
    { word: "RELIC", forbidden: ["ANCIENT", "HOLY", "OBJECT", "CHURCH", "HISTORY"] },
    { word: "SCROLL", forbidden: ["PAPER", "OLD", "WRITE", "ANCIENT", "ROLL"] },
    { word: "MANUSCRIPT", forbidden: ["BOOK", "WRITE", "OLD", "AUTHOR", "TEXT"] },
    { word: "CODex", forbidden: ["BOOK", "ANCIENT", "TEXT", "PAGES", "WRITING"] },
    { word: "SCRIBE", forbidden: ["WRITE", "COPY", "TEXT", "OLD", "BOOK"] },
    { word: "INKWELL", forbidden: ["PEN", "WRITE", "DIP", "FEATHER", "INK"] },
    { word: "PARCHMENT", forbidden: ["PAPER", "OLD", "WRITE", "SHEEP", "TEXT"] },
    { word: "QUARRY", forbidden: ["STONE", "MINE", "ROCK", "PIT", "EXCAVATE"] },
    { word: "BELLTOWER", forbidden: ["CHURCH", "CLOCK", "RING", "STEePLE", "SOUND"] },
    { word: "CATHEDRAL", forbidden: ["CHURCH", "PRIEST", "WINDOW", "ALTAR", "GOTHIC"] },
    { word: "PILLAR", forbidden: ["COLUMN", "SUPPORT", "BUILDING", "STONE", "ARCH"] },
    { word: "VAULT", forbidden: ["BANK", "LOCK", "MONEY", "SAFE", "ROOM"] },
    { word: "CRYPT", forbidden: ["TOMB", "BURIAL", "UNDERGROUND", "CHURCH", "STONE"] },
    { word: "SPIRAL", forbidden: ["CIRCLE", "ROUND", "STAIRCASE", "CURVE", "TWIST"] },
    { word: "GARGOYLE", forbidden: ["STONE", "BUILDING", "ROOF", "RAIN", "STATUE"] },
    { word: "SUNDIAL", forbidden: ["TIME", "SUN", "SHADOW", "OLD", "CLOCK"] },
    { word: "WINDMILL", forbidden: ["BLADE", "TURN", "POWER", "WIND", "ROTATE"] },
    { word: "LIGHTHOUSE", forbidden: ["SEA", "BEACON", "GUIDE", "SHIP", "COAST"] },
    { word: "CLOCKTOWER", forbidden: ["BIG", "BEN", "TIME", "BELL", "BUILDING"] },
    { word: "PYRAMID", forbidden: ["EGYPT", "STONE", "DESERT", "TRIANGLE", "TOMB"] },
    { word: "OBELISK", forbidden: ["STONE", "EGYPT", "TALL", "MONUMENT", "POINT"] },
    { word: "ZIGGURAT", forbidden: ["MESOPOTAMIA", "TEMPLE", "STEP", "STONE", "ANCIENT"] },
    { word: "STATUE", forbidden: ["STONE", "FIGURE", "SCULPTURE", "ART", "MONUMENT"] },
    { word: "SCULPTURE", forbidden: ["ART", "STONE", "CARVE", "STATUE", "MUSEUM"] },
    { word: "FRESCO", forbidden: ["WALL", "PAINTING", "ART", "CHURCH", "CEILING"] },
    { word: "MURAL", forbidden: ["WALL", "PAINTING", "ART", "LARGE", "PUBLIC"] },
    { word: "CANVAS", forbidden: ["PAINT", "ART", "BRUSH", "OIL", "PICTURE"] },
    { word: "EASEL", forbidden: ["PAINT", "CANVAS", "BRUSH", "ARTIST", "STAND"] },
    { word: "PALETTE", forbidden: ["PAINT", "COLORS", "ARTIST", "MIX", "BRUSH"] },
    { word: "BRUSH", forbidden: ["PAINT", "HAIR", "STROKE", "ARTIST", "TOOL"] },
    { word: "CHISEL", forbidden: ["CARVE", "STONE", "WOOD", "TOOL", "HAMMER"] },
    { word: "HAMMER", forbidden: ["NAIL", "TOOL", "HIT", "METAL", "CARPENTER"] },
    { word: "TROWEL", forbidden: ["CEMENT", "BRICK", "TOOL", "BUILD", "MASON"] },
    { word: "ANVIL", forbidden: ["BLACKSMITH", "IRON", "METAL", "FORGE", "HAMMER"] },
    { word: "FORGE", forbidden: ["METAL", "HEAT", "SMELT", "BLACKSMITH", "IRON"] },
    { word: "KILN", forbidden: ["CLAY", "FIRE", "POTTERY", "OVEN", "HEAT"] },
    { word: "POTTERY", forbidden: ["CLAY", "JAR", "CERAMIC", "WHEEL", "FIRE"] },
    { word: "VASE", forbidden: ["FLOWER", "CERAMIC", "WATER", "POTTERY", "GLASS"] },
    { word: "URN", forbidden: ["ASHES", "POT", "CERAMIC", "FUNERAL", "VASE"] },
    { word: "AMPHORA", forbidden: ["GREEK", "VASE", "CERAMIC", "OIL", "WINE"] },
    { word: "GOBLET", forbidden: ["CUP", "WINE", "GLASS", "DRINK", "CHALICE"] },
    { word: "FLAGON", forbidden: ["DRINK", "WINE", "ALE", "BEER", "JUG"] },
    { word: "STEIN", forbidden: ["BEER", "MUG", "GLASS", "GERMAN", "DRINK"] },
    { word: "TANKARD", forbidden: ["MUG", "BEER", "DRINK", "METAL", "HANDLE"] },
    { word: "BARREL", forbidden: ["WOOD", "ALE", "BEER", "STORAGE", "WINE"] },
    { word: "CASK", forbidden: ["BARREL", "WINE", "WOOD", "ALE", "STORAGE"] },
    { word: "KEG", forbidden: ["BEER", "BARREL", "DRINK", "TAP", "PARTY"] },
    { word: "BOTTLE", forbidden: ["GLASS", "DRINK", "WATER", "WINE", "CORK"] },
    { word: "CANTEEN", forbidden: ["WATER", "SOLDIER", "CAMP", "DRINK", "FLASK"] },
    { word: "FLASK", forbidden: ["LIQUOR", "DRINK", "BOTTLE", "POCKET", "METAL"] },
    { word: "DECANTER", forbidden: ["WINE", "GLASS", "BOTTLE", "POUR", "LIQUOR"] },
    { word: "CARAFE", forbidden: ["WATER", "WINE", "GLASS", "BOTTLE", "POUR"] },
    { word: "PITCHER", forbidden: ["WATER", "JUG", "GLASS", "POUR", "LIQUID"] },
    { word: "JUG", forbidden: ["HANDLE", "WATER", "BOTTLE", "LIQUID", "CLAY"] },
    { word: "MUG", forbidden: ["COFFEE", "CUP", "TEA", "HANDLE", "DRINK"] },
    { word: "TEAPOT", forbidden: ["TEA", "POUR", "KETTLE", "HOT", "DRINK"] },
    { word: "KETTLE", forbidden: ["BOIL", "TEA", "WATER", "HOT", "STOVE"] },
    { word: "PAN", forbidden: ["FRY", "COOK", "KITCHEN", "FOOD", "STOVE"] },
    { word: "POT", forbidden: ["COOK", "SOUP", "STOVE", "KITCHEN", "WATER"] },
    { word: "CAULDRON", forbidden: ["WITCH", "SOUP", "MAGIC", "POT", "BREW"] },
    { word: "SKILLET", forbidden: ["PAN", "FRY", "COOK", "FOOD", "KITCHEN"]},

];

// --- Global State Variables ---
let score1 = 0;
let score2 = 0;
let currentTeam = 1; // 1 for Team 1, 2 for Team 2
let timeLeft = 60;
let timerInterval;
let passesUsed = 0;
let gameRunning = false;
let usedWords = new Set();

// --- DOM Elements ---
const startButton = document.getElementById('startButton');
const correctButton = document.getElementById('correctButton');
const passButton = document.getElementById('passButton');
const tabooButton = document.getElementById('tabooButton');
const currentWordDisplay = document.getElementById('currentWord');
const forbiddenWordsDisplay = document.getElementById('forbiddenWords');
const timerDisplay = document.getElementById('timerDisplay');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');
const currentTeamDisplay = document.getElementById('currentTeamDisplay');
const passCountDisplay = document.getElementById('passCount');

// --- Game Functions ---

/**
 * Gets a new, unused word from the words array.
 */
function getNewWord() {
    if (usedWords.size === words.length) {
        // All words used, reset for replay or end game
        usedWords.clear();
        alert("All words used! Starting from the beginning.");
    }

    let newWord;
    do {
        const randomIndex = Math.floor(Math.random() * words.length);
        newWord = words[randomIndex];
    } while (usedWords.has(newWord.word));

    usedWords.add(newWord.word);

    currentWordDisplay.textContent = newWord.word;
    forbiddenWordsDisplay.innerHTML = newWord.forbidden.map(w => `<span class="badge bg-danger mx-1">${w}</span>`).join('');
}

/**
 * Starts the 60-second timer and begins the turn.
 */
function startTurn() {
    if (gameRunning) return; // Prevent multiple starts

    gameRunning = true;
    timeLeft = 60;
    passesUsed = 0;
    passCountDisplay.textContent = 2 - passesUsed;
    timerDisplay.textContent = timeLeft;

    // Enable game buttons
    correctButton.disabled = false;
    passButton.disabled = false;
    tabooButton.disabled = false;
    startButton.disabled = true;

    getNewWord();

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerDisplay.classList.add('text-warning'); // Visual cue for low time
        } else {
            timerDisplay.classList.remove('text-warning');
        }

        if (timeLeft <= 0) {
            endTurn();
        }
    }, 1000);
}

/**
 * Ends the current turn and switches to the next team.
 */
function endTurn() {
    clearInterval(timerInterval);
    gameRunning = false;

    // Disable game buttons
    correctButton.disabled = true;
    passButton.disabled = true;
    tabooButton.disabled = true;
    startButton.disabled = false;

    // Reset displays
    currentWordDisplay.textContent = "TURN ENDED";
    forbiddenWordsDisplay.textContent = "";
    timerDisplay.classList.remove('text-warning');

    // Switch team
    currentTeam = currentTeam === 1 ? 2 : 1;
    currentTeamDisplay.textContent = `Team ${currentTeam}`;

    alert(`Time's up! Team ${currentTeam} is up next.`);
}

/**
 * Handles a successful guess or a word being passed.
 * @param {boolean} isCorrect - true for correct, false for taboo.
 */
function handleWordAction(isCorrect) {
    if (!gameRunning) return;

    if (isCorrect) {
        if (currentTeam === 1) {
            score1++;
            score1Display.textContent = score1;
        } else {
            score2++;
            score2Display.textContent = score2;
        }
        getNewWord(); // Get next word on success
    } else {
        // Taboo action: -1 point and get new word
        if (currentTeam === 1) {
            score1 = score1 - 1;
            score1Display.textContent = score1;
        } else {
            score2 = score2 - 1;
            score2Display.textContent = score2;
        }
        getNewWord(); // Get next word on Taboo
    }
}

/**
 * Handles the pass functionality with a limit.
 */
function handlePass() {
    if (!gameRunning) return;

    if (passesUsed < 2) {
        passesUsed++;
        passCountDisplay.textContent = 2 - passesUsed;
        getNewWord();
    } else {
        alert("Maximum passes used! You must either guess the word or take a Taboo.");
        passButton.disabled = true; // Disable after max passes
    }
}


// --- Event Listeners ---
startButton.addEventListener('click', startTurn);
correctButton.addEventListener('click', () => handleWordAction(true));
tabooButton.addEventListener('click', () => handleWordAction(false));
passButton.addEventListener('click', handlePass);

// Initial state setup (ensure initial pass count is correct)
passCountDisplay.textContent = 2 - passesUsed;
