const words = {
    "LION": ["CAT", "MANE", "ROAR", "JUNGLE", "AFRICA"],
    "COMPUTER": ["KEYBOARD", "SCREEN", "MOUSE", "CODE", "PROGRAM"],
    "RAINBOW": ["COLORS", "ARCH", "WEATHER", "AFTER", "CLOUD"],
    "GUITAR": ["STRINGS", "MUSIC", "ACOUSTIC", "PICK", "FRET"],
    "PIZZA": ["ITALY", "CHEESE", "TOMATO", "DOUGH", "PEPPERONI"],
    "SUNFLOWER": ["YELLOW", "SEEDS", "PLANT", "TALL", "FLOWER"],
    "TELEPHONE": ["RING", "CALL", "TALK", "CELL", "DEVICE"],
    "CHOCOLATE": ["BROWN", "CANDY", "SWEET", "COCOA", "BAR"],
    "ASTRONAUT": ["SPACE", "ROCKET", "STAR", "HELMET", "WALK"],
    "WATERFALL": ["RIVER", "HUGH", "DROP", "CASCADING", "FLOW"],
    "VOLCANO": ["LAVA", "MOUNTAIN", "ERUPT", "ASH", "FIRE"],
    "DIAMOND": ["RING", "HARD", "SHINE", "JEWEL", "CARAT"],
    "OCTOPUS": ["EIGHT", "ARMS", "SQUID", "WATER", "SEA"],
    "HEADPHONES": ["EARS", "WIRES", "LISTEN", "MUSIC", "NOISE"],
    "REFRIGERATOR": ["COLD", "FOOD", "KITCHEN", "ICE", "FREEZE"],
    "PARK": ["GRASS", "BENCH", "TREES", "PLAY", "OUTDOOR"],
    "NEWSPAPER": ["READ", "PAPER", "NEWS", "INK", "MORNING"],
    "CEREAL": ["MILK", "BREAKFAST", "BOWL", "GRAINS", "BOX"],
    "HOTDOG": ["BUN", "SAUSAGE", "MUSTARD", "STREET", "COOKOUT"],
    "CALENDAR": ["DATE", "MONTH", "YEAR", "DAYS", "SCHEDULE"],
    "BACKPACK": ["STRAPS", "SCHOOL", "CARRY", "BAG", "SHOULDER"],
    "SHARK": ["OCEAN", "TEETH", "FISH", "GREAT WHITE", "FIN"],
    "MICROSCOPE": ["GLASS", "SCIENCE", "SEE", "SMALL", "LAB"],
    "GIRAFFE": ["NECK", "AFRICA", "TALL", "SPOTS", "ZOO"],
    "TENT": ["CAMPING", "SLEEP", "POLES", "OUTDOORS", "CANVAS"],
    "WINTER": ["SNOW", "COLD", "SEASON", "JANUARY", "FREEZING"],
    "FLASHLIGHT": ["DARK", "LIGHT", "BATTERY", "BEAM", "HAND"],
    "SCIENTIST": ["LAB", "EXPERIMENT", "RESEARCH", "SMART", "MISTAKE"],
    "BRIDGE": ["RIVER", "CROSS", "ROAD", "STEEL", "OVER"],
    "OVEN": ["BAKE", "HOT", "COOK", "KITCHEN", "STOVE"],
    "DIARY": ["BOOK", "SECRETS", "WRITE", "JOURNAL", "LOCK"],
    "WHALE": ["HUGE", "BLUE", "OCEAN", "MAMMAL", "SPERM"],
    "SCISSORS": ["CUT", "PAPER", "BLADES", "SHARP", "HAIR"],
    "ENGINE": ["CAR", "MOTOR", "POWER", "FUEL", "RUN"],
    "SPAGHETTI": ["PASTA", "ITALY", "SAUCE", "NOODLE", "MEATBALL"],
    "GLOBE": ["EARTH", "WORLD", "MAP", "ROUND", "SPIN"],
    "PENCIL": ["WRITE", "ERASER", "LEAD", "YELLOW", "SHARPEN"],
    "HELICOPTER": ["AIRCRAFT", "BLADES", "ROTOR", "CHOPPER", "FLY"],
    "GHOST": ["SPIRIT", "DEAD", "SCARY", "WHITE", "HAUNTED"],
    "BALLET": ["DANCE", "TUTU", "SHOES", "GRACEFUL", "STAGE"],
    "PIRATE": ["SHIP", "EYEPATCH", "TREASURE", "SWORD", "SEA"],
    "KANGAROO": ["AUSTRALIA", "HOP", "POUCH", "BABY", "SKIP"],
    "MAGNET": ["METAL", "PULL", "ATTRACT", "NORTH", "REFRIGERATOR"],
    "ROBOT": ["MACHINE", "FUTURE", "ANDROID", "BUILD", "METAL"],
    "BUTTERFLY": ["INSECT", "FLY", "WINGS", "CATERPILLAR", "PRETTY"],
    "COUCH": ["SOFA", "SIT", "LIVING ROOM", "CUSHION", "RELAX"],
    "TELESCOPE": ["STAR", "LOOK", "SPACE", "PLANET", "OBSERVE"],
    "FENCE": ["WOOD", "YARD", "PROPERTY", "BOUNDARY", "PALE"],
    "CAKE": ["BIRTHDAY", "SWEET", "BAKE", "FROSTING", "SLICED"],
    "DRUM": ["STICK", "BEAT", "MUSIC", "HIT", "RHYTHM"],
    "DESK": ["OFFICE", "WORK", "CHAIR", "TABLE", "DRAWERS"],
    "BLANKET": ["WARM", "SLEEP", "BED", "COVER", "COMFORTABLE"],
    "TOWEL": ["DRY", "BATH", "WET", "CLOTH", "BEACH"],
    "CAMERA": ["PHOTO", "TAKE", "LENS", "PICTURE", "FLASH"],
    "GARBAGE": ["TRASH", "BIN", "DUMP", "THROW", "SMELL"],
    "HARP": ["ANGEL", "STRING", "MUSIC", "PLUCK", "INSTRUMENT"],
    "JUICE": ["ORANGE", "DRINK", "FRUIT", "SQUEEZE", "LIQUID"],
    "WALLET": ["MONEY", "LEATHER", "CASH", "CARD", "POCKET"],
    "POTATO": ["FRENCH FRY", "VEGETABLE", "BROWN", "MASH", "CHIP"],
    "VAMPIRE": ["BLOOD", "BAT", "FANGS", "DRACULA", "NIGHT"],
    "CASTLE": ["KING", "QUEEN", "TOWER", "STONE", "MEDIEVAL"],
    "EAGLE": ["BIRD", "TALONS", "PREY", "FLY", "AMERICA"],
    "BALLOON": ["AIR", "FLOAT", "POP", "PARTY", "HELIUM"],
    "SHOWER": ["BATHROOM", "WATER", "WASH", "SOAP", "CLEAN"],
    "JELLYFISH": ["STING", "WATER", "SEA", "TENTACLE", "BELL"],
    "LEMONADE": ["DRINK", "SWEET", "SOUR", "YELLOW", "ICE"],
    "HOCKEY": ["ICE", "PUCK", "STICK", "GOALIE", "SKATE"],
    "SNAIL": ["SHELL", "SLOW", "SLIMY", "TRAIL", "GARDEN"],
    "VIOLIN": ["BOW", "STRING", "ORCHESTRA", "FIDDLE", "CASE"],
    "DESERT": ["SAND", "DRY", "HOT", "CACTUS", "CAMEL"],
    "CHIMNEY": ["ROOF", "SMOKE", "FIREPLACE", "SANTA", "BRICK"],
    "HAMMOCK": ["SWING", "NAP", "TREES", "NET", "RELAX"],
    "FLUTE": ["WIND", "INSTRUMENT", "HOLES", "BLOW", "MUSIC"],
    "PLANT": ["GROW", "GREEN", "LEAVES", "WATER", "EARTH"],
    "BICYCLE": ["WHEELS", "RIDE", "PEDALS", "TWO", "HELMET"],
    "BEACH": ["SAND", "OCEAN", "SWIM", "WAVES", "SUN"],
    "MICROWAVE": ["OVEN", "HEAT", "QUICK", "FOOD", "KITCHEN"],
    "SKIRT": ["DRESS", "LEGS", "WOMEN", "WEAR", "FLOWY"],
    "COFFEE": ["MUG", "BEANS", "HOT", "CAFFEINE", "MORNING"],
    "SOCCER": ["BALL", "FOOT", "KICK", "GOAL", "FIELD"],
    "MOUNTAIN": ["CLIMB", "HIGH", "PEAK", "SNOW", "HIKE"],
    "TRAIN": ["TRACKS", "RAILROAD", "LOCOMOTIVE", "CARRIAGE", "RIDE"],
    "HOSPITAL": ["DOCTOR", "SICK", "NURSE", "EMERGENCY", "BED"],
    "EGG": ["CHICKEN", "SHELL", "FRY", "BREAKFAST", "OVAL"],
    "CLOUDS": ["SKY", "WHITE", "RAIN", "FLUFFY", "OVERCAST"],
    "RULER": ["MEASURE", "STRAIGHT", "LINE", "INCHES", "PLASTIC"],
    "SQUARE": ["FOUR", "SIDES", "SHAPE", "EQUAL", "BOX"],
    "BREAD": ["SANDWICH", "TOAST", "LOAF", "BAKERY", "WHEAT"],
    "WHISTLE": ["BLOW", "REFEREE", "SOUND", "MOUTH", "LOUD"],
    "STATUE": ["SCULPTURE", "BRONZE", "MONUMENT", "PARK", "FROZEN"],
    "SAILBOAT": ["WATER", "WIND", "BOAT", "MAST", "OCEAN"],
    "LADDER": ["CLIMB", "STEPS", "HIGH", "TALL", "UP"],
    "TEAPOT": ["DRINK", "KETTLE", "HOT", "POUR", "CERAMIC"],
    "SHORTS": ["PANTS", "LEGS", "SUMMER", "KNEES", "CASUAL"],
    "DOORBELL": ["RING", "ENTER", "FRONT", "PUSH", "SOUND"],
    "SLEEP": ["BED", "NIGHT", "DREAM", "REST", "WAKE"],
    "SMILE": ["HAPPY", "FACE", "TEETH", "MOUTH", "GRIN"],
    "NECKLACE": ["JEWELRY", "CHAIN", "WEAR", "THROAT", "GIFT"],
    "PILLOW": ["HEAD", "SOFT", "BED", "SLEEP", "FEATHER"],
    "TIGER": ["STRIPES", "JUNGLE", "ORANGE", "CAT", "ROAR"],
    "TELEVISION": ["SCREEN", "WATCH", "SHOW", "REMOTE", "SIT"],
    "POTTERY": ["CLAY", "WHEEL", "OVEN", "MUG", "MOLD"],
    "RAINCOAT": ["WET", "JACKET", "PLASTIC", "HOOD", "PONCHO"],
    "SCREWDRIVER": ["TOOL", "TURN", "FLAT", "PHILLIPS", "WOOD"],
    "SWING": ["PLAYGROUND", "SIT", "BACK and FORTH", "CHAIN", "PARK"],
    "KEYBOARD": ["TYPE", "COMPUTER", "KEYS", "FINGERS", "PIANO"],
    "CACTUS": ["SPIKES", "DESERT", "GREEN", "PLANT", "WATER"],
    "CHAIR": ["SIT", "TABLE", "WOOD", "SEAT", "KITCHEN"],
    "MUSHROOM": ["FUNGI", "EAT", "GROUND", "TOADSTOOL", "FOREST"],
    "SHOELACE": ["TIE", "LOOSE", "FOOT", "STRING", "SNEAKER"],
    "CRAYON": ["WAX", "DRAW", "COLOR", "PAPER", "KID"],
    "CARROT": ["ORANGE", "BUNNY", "VEGETABLE", "CRUNCHY", "JUICE"],
    "JEANS": ["PANTS", "DENIM", "BLUE", "LEVI", "CASUAL"],
    "GUM": ["CHEW", "BUBBLE", "STICKY", "SWEET", "MINT"],
    "BEAR": ["GRIZZLY", "HONEY", "FUR", "HIBERNATE", "BIG"],
    "DOG": ["WOOF", "PET", "BARK", "WALK", "PUPPY"],
    "DRAGON": ["FIRE", "MYTH", "FLY", "SCALE", "LEGEND"],
    "BOOK": ["READ", "PAGE", "LIBRARY", "NOVEL", "COVER"],
    "SODA": ["FIZZ", "COLA", "SWEET", "BUBBLES", "DRINK"],
    "CORN": ["YELLOW", "COB", "VEGETABLE", "FIELD", "POPCORN"],
    "CHICKEN": ["FARM", "EGG", "BIRD", "ROAST", "FEATHER"],
    "SAXOPHONE": ["BRASS", "JAZZ", "REED", "HORN", "INSTRUMENT"],
    "FROG": ["JUMP", "GREEN", "POND", "LILLY PAD", "TOAD"],
    "SUITCASE": ["TRAVEL", "CLOTHES", "PACK", "BAG", "WHEEL"],
    "GARDEN": ["FLOWERS", "PLANTS", "DIRT", "DIG", "YARD"],
    "SAUSAGE": ["PORK", "MEAT", "BREAKFAST", "LINK", "GRILL"],
    "TOAST": ["BREAD", "BROWN", "BUTTER", "BREAKFAST", "SLOT"],
    "COAT": ["WINTER", "JACKET", "WARM", "BUTTONS", "PUT ON"],
    "DRESS": ["SKIRT", "WEAR", "PARTY", "WOMEN", "FANCY"],
    "PEANUT": ["BUTTER", "SHELL", "NUT", "ALLERGY", "CRUNCHY"],
    "CABBAGE": ["ROUND", "GREEN", "LEAVES", "VEGETABLE", "COLESLAW"],
    "BASKET": ["WEAVE", "EGG", "HANDLE", "PICNIC", "BALL"],
    "CLOSET": ["DOOR", "HANG", "CLOTHES", "WARDROBE", "STORAGE"],
    "RABBIT": ["HOP", "EAT", "EASTER", "EARS", "HARE"],
    "AIRPLANE": ["FLY", "PILOT", "WING", "SKY", "FLIGHT"],
    "UMBRELLA": ["RAIN", "WET", "SHADE", "CANOPY", "OPEN"],
    "SCULPTURE": ["STATUE", "ART", "CLAY", "CARVE", "MUSEUM"],
    "BANANA": ["YELLOW", "MONKEY", "PEEL", "FRUIT", "LONG"],
    "VIKING": ["BOAT", "HELMET", "NORSE", "RAID", "SHIP"],
    "LIZARD": ["REPTILE", "GREEN", "SCALE", "TAIL", "SLITHER"],
    "WHEELCHAIR": ["SIT", "ROLL", "HANDICAP", "HOSPITAL", "PUSH"],
    "MUSTACHE": ["HAIR", "LIP", "SHAVE", "MAN", "GROW"],
    "COMET": ["SPACE", "TAIL", "ICE", "ASTEROID", "ORBIT"],
    "KEY": ["LOCK", "DOOR", "METAL", "OPEN", "CAR"],
    "HAMBURGER": ["BREAD", "MEAT", "CHEESE", "PATTY", "GRILL"],
    "CANDLE": ["FLAME", "WAX", "LIGHT", "BLOW", "FIRE"],
    "MAP": ["DIRECTION", "ROAD", "PAPER", "NAVIGATE", "COUNTRY"],
    "COIN": ["MONEY", "METAL", "CHANGE", "POCKET", "FLIP"],
    "MAGAZINE": ["READ", "GLOSSY", "PICTURES", "MONTHLY", "NEWSSTAND"],
    "PUZZLE": ["PIECES", "SOLVE", "JIGSAW", "GAME", "TABLE"],
    "PUPPET": ["STRING", "HAND", "SHOW", "MARIONETTE", "TALK"],
    "ZEBRA": ["STRIPES", "HORSE", "AFRICA", "BLACK", "WHITE"],
    "WINE": ["GRAPE", "DRINK", "RED", "BOTTLE", "ALCOHOL"],
    "SUBMARINE": ["WATER", "UNDER", "BOAT", "YELLOW", "PERISCOPE"],
    "TOILET": ["BATHROOM", "FLUSH", "SIT", "WATER", "PORCELAIN"],
    "TEETH": ["MOUTH", "BRUSH", "WHITE", "CHEW", "DENTIST"],
    "VOLLEYBALL": ["NET", "HIT", "BEACH", "SPORT", "SPIKE"],
    "CUCUMBER": ["GREEN", "SALAD", "LONG", "SLICE", "PICKLE"],
    "DOUGHNUT": ["HOLE", "GLAZE", "FRIED", "SWEET", "COFFEE"],
    "PARACHUTE": ["FALL", "OPEN", "JUMP", "SKY", "LAND"],
    "FLAMINGO": ["PINK", "BIRD", "STAND", "ONE LEG", "TROPIC"],
    "ALARM": ["WAKE", "SOUND", "CLOCK", "EMERGENCY", "LOUD"],
    "SCORPION": ["STING", "TAIL", "DESERT", "ARACHNID", "POISON"],
    "PUFFERFISH": ["SWIM", "SPIKES", "BLOW UP", "POISON", "JAPAN"],
    "SKATEBOARD": ["TRICK", "WHEELS", "RIDE", "RAMP", "FEET"],
    "TURTLE": ["SHELL", "SLOW", "REPTILE", "WATER", "NINJA"],
    "PIANO": ["KEYS", "MUSIC", "PLAY", "BENCH", "INSTRUMENT"],
    "BINOCULARS": ["EYES", "LOOK", "FAR", "ZOOM", "BIRD"],
    "PADDLE": ["BOAT", "CANOE", "ROW", "WATER", "FLAT"],
    "SHIRT": ["BUTTON", "WEAR", "TOP", "CLOTHES", "SLEEVE"],
    "SAUCE": ["KETCHUP", "POUR", "FOOD", "TOMATO", "LIQUID"],
    "WHISKEY": ["SCOTCH", "ALCOHOL", "DRINK", "BROWN", "GLASS"],
    "BALCONY": ["APARTMENT", "RAILING", "VIEW", "SIT", "HIGH"],
    "CEMENT": ["MIX", "GRAY", "CONCRETE", "BUILD", "DRY"],
    "WINDMILL": ["BLADES", "AIR", "POWER", "TOWER", "TURN"],
    "BARREL": ["WOOD", "WINE", "ROUND", "STORAGE", "KEG"],
    "BROOM": ["SWEEP", "CLEAN", "HANDLE", "WITCH", "DUST"],
    "GOLF": ["CLUB", "BALL", "HOLE", "GREEN", "TEE"],
    "JUGGLE": ["BALLS", "THROW", "CATCH", "CIRCUS", "HANDS"],
    "LEMON": ["SOUR", "YELLOW", "FRUIT", "JUICE", "ACID"],
    "NINJA": ["JAPAN", "FIGHT", "BLACK", "WARRIOR", "SWORD"],
    "OSTRICH": ["BIRD", "AFRICA", "RUN", "HEAD", "SAND"],
    "SLIDE": ["PLAYGROUND", "DOWN", "FUN", "WET", "PARK"],
    "SURFBOARD": ["WAVE", "RIDE", "WATER", "BEACH", "WAX"],
    "SWAN": ["WHITE", "NECK", "LAKE", "BIRD", "FEATHER"],
    "TENTACLE": ["ARM", "SUCKER", "SQUID", "OCTOPUS", "REACH"],
    "TREASURE": ["GOLD", "CHEST", "PIRATE", "MAP", "BURIED"],
    "TULIP": ["FLOWER", "HOLLAND", "BULB", "SPRING", "GARDEN"],
    "YACHT": ["BOAT", "RICH", "SAIL", "LUXURY", "MARINA"],
    "ZOMBIE": ["WALK", "DEAD", "BRAIN", "INFECTED", "HORROR"],
    "ACORN": ["OAK", "TREE", "SQUIRREL", "FALL", "NUT"],
    "BUMBLEBEE": ["STRIPE", "FLY", "STING", "HONEY", "INSECT"],
    "CARNIVAL": ["RIDES", "GAME", "FAIR", "TICKET", "CLOWN"],
    "CHESS": ["BOARD", "GAME", "KING", "PAWN", "CHECKMATE"],
    "CLOWN": ["CIRCUS", "RED NOSE", "MAKEUP", "JOKE", "SCARY"],
    "COMPASS": ["NORTH", "DIRECTION", "NEEDLE", "HIKING", "FIND"],
    "CROCODILE": ["REPTILE", "RIVER", "JAW", "ALLIGATOR", "TEETH"],
    "DUNGEON": ["CASTLE", "PRISON", "DARK", "CELL", "BASEMENT"],
    "FEATHER": ["BIRD", "LIGHT", "FLUFFY", "QUILL", "FALL"],
    "FOUNTAIN": ["WATER", "SPRAY", "PARK", "POOL", "SQUARE"],
    "GEISHA": ["JAPAN", "KIMONO", "PERFORM", "DANCE", "BEAUTY"],
    "GINGERBREAD": ["COOKIE", "MAN", "SPICE", "HOUSE", "BAKE"],
    "JAVELIN": ["THROW", "SPEAR", "SPORT", "POINT", "TRACK"],
    "JEWELRY": ["GOLD", "DIAMOND", "WEAR", "RING", "NECKLACE"],
    "KIMONO": ["JAPAN", "DRESS", "SILK", "WEAR", "TRADITIONAL"],
    "MARATHON": ["RUN", "RACE", "LONG", "FEET", "FINISH"],
    "ORCHESTRA": ["MUSIC", "INSTRUMENT", "CONDUCTOR", "STAGE", "PLAY"],
    "PENGUIN": ["BIRD", "ICE", "SOUTH POLE", "WALK", "BLACK"],
    "PICNIC": ["BLANKET", "FOOD", "PARK", "OUTDOOR", "BASKET"],
    "POPCORN": ["MOVIE", "KERNELS", "BUTTER", "EAT", "BAG"],
    "PRETZEL": ["SALT", "TWIST", "BREAD", "BAKED", "SNACK"],
    "QUILL": ["BIRD", "PEN", "FEATHER", "WRITE", "INK"],
    "SATELLITE": ["ORBIT", "SPACE", "COMMUNICATE", "DISH", "SEND"],
    "SCUBA": ["DIVE", "OXYGEN", "WATER", "TANK", "UNDER"],
    "SEAGULL": ["BIRD", "BEACH", "FLY", "WATER", "SQUAWK"],
    "SIREN": ["SOUND", "POLICE", "FIRE", "EMERGENCY", "LOUD"],
    "SLED": ["SNOW", "HILL", "RIDE", "PULL", "WINTER"],
    "SMURF": ["BLUE", "CARTOON", "VILLAGE", "HUT", "PAPA"],
    "SOCKS": ["FEET", "SHOES", "WEAR", "COTTON", "PAIR"],
    "SOPRANO": ["SINGER", "HIGH", "OPERA", "VOICE", "FEMALE"],
    "SPEAKER": ["SOUND", "MUSIC", "LOUD", "TALK", "BOX"],
    "SUBWAY": ["TRAIN", "UNDERGROUND", "CITY", "STATION", "RAIL"],
    "THERMOMETER": ["TEMPERATURE", "FEVER", "MEASURE", "GLASS", "MERCURY"],
    "THIMBLE": ["SEW", "FINGER", "SMALL", "METAL", "NEEDLE"],
    "TUXEDO": ["SUIT", "FORMAL", "TIE", "DRESS", "WEDDING"],
    "WAGON": ["WHEELS", "PULL", "RED", "CART", "HORSE"],
    "ACROBAT": ["FLIP", "CIRCUS", "TUMBLE", "GYMNASTICS", "BALANCE"],
    "ADOBE": ["MUD", "HOUSE", "BRICK", "SOUTHWEST", "BUILDING"],
    "BAMBOO": ["PANDA", "STICK", "PLANT", "TALL", "ASIA"],
    "BOOMERANG": ["THROW", "AUSTRALIA", "RETURN", "WOOD", "WEAPON"],
    "CABARET": ["SHOW", "CLUB", "DANCE", "STAGE", "PERFORM"],
    "CALYPSO": ["MUSIC", "CARIBBEAN", "ISLAND", "DRUM", "SING"],
    "CAMOUFLAGE": ["HIDE", "GREEN", "MILITARY", "BLEND", "SPOTS"],
    "CANOE": ["BOAT", "PADDLE", "WATER", "RIVER", "KAYAK"],
    "CANYON": ["RIVER", "GRAND", "DEEP", "ROCK", "CLIFF"],
    "CARNIVORE": ["MEAT", "EAT", "ANIMAL", "LION", "KILL"],
    "CELLAR": ["BASEMENT", "WINE", "BELOW", "UNDERGROUND", "STORAGE"],
    "CHAMELEON": ["LIZARD", "CHANGE", "COLOR", "REPTILE", "TONGUE"],
    "CHIMPANZEE": ["MONKEY", "APE", "AFRICA", "JUNGLE", "PRIMATE"],
    "CLARINET": ["WOODWIND", "INSTRUMENT", "REED", "MUSIC", "BAND"],
    "COWBOY": ["HAT", "HORSE", "WEST", "RANCH", "CATTLE"],
    "CRICKET": ["BUG", "JUMP", "SING", "GAME", "BALL"],
    "ECLIPSE": ["SUN", "MOON", "DARK", "SHADOW", "BLOCK"],
    "EQUATOR": ["EARTH", "LINE", "MIDDLE", "TROPIC", "HOT"],
    "FIREFIGHTER": ["RED", "HOSE", "PUT OUT", "TRUCK", "DALMATIAN"],
    "FLOOD": ["RAIN", "WATER", "WET", "DROWN", "RIVER"],
    "GEAR": ["SHIFT", "WHEEL", "MACHINE", "TOOTH", "BIKE"],
    "GLACIER": ["ICE", "COLD", "MOVE", "MOUNTAIN", "SLIDE"],
    "GRENADE": ["EXPLODE", "PIN", "BOMB", "THROW", "HAND"],
    "HARVEST": ["CROP", "GATHER", "FALL", "FARM", "PICK"],
    "HORIZON": ["SKY", "MEET", "LINE", "SUNSET", "FAR"],
    "HUMMINGBIRD": ["BIRD", "SMALL", "FLY", "FAST", "NECTAR"],
    "ICEBERG": ["COLD", "WATER", "FLOAT", "TITANIC", "LARGE"],
    "JESTER": ["JOKE", "KING", "HAT", "FOOL", "LAUGH"],
    "JUNGLE": ["RAINFOREST", "TROPICAL", "TREES", "LION", "WET"],
    "LAVA": ["HOT", "RED", "VOLCANO", "FLOW", "MAGMA"],
    "MIMIC": ["COPY", "ACT", "IMITATE", "PARROT", "SOUND"],
    "MIRROR": ["LOOK", "REFLECTION", "GLASS", "SEE", "FACE"],
    "MONOCLE": ["EYE", "GLASS", "LENS", "GENTLEMAN", "WEAR"],
    "MOSQUITO": ["BITE", "BUG", "FLY", "ITCH", "SWAT"],
    "MUSTARD": ["YELLOW", "HOT DOG", "SAUCE", "SEED", "SANDWICH"],
    "OASIS": ["DESERT", "WATER", "TREES", "PALM", "FIND"],
    "OXYGEN": ["AIR", "BREATH", "GAS", "LIFE", "ELEMENT"],
    "PALM": ["TREE", "TROPIC", "BEACH", "COCONUT", "HAND"],
    "PARADE": ["FLOAT", "STREET", "MARCH", "BAND", "HOLIDAY"],
    "PENALTY": ["FOUL", "SPORT", "PUNISH", "SCORE", "KICK"],
    "QUARTZ": ["CRYSTAL", "ROCK", "WHITE", "MINERAL", "WATCH"],
    "REPTILE": ["COLD-BLOODED", "SNAKE", "LIZARD", "SCALE", "EGG"],
    "ROCKET": ["SPACE", "LAUNCH", "FIRE", "FLY", "BLAST"],
    "SAUNA": ["HOT", "STEAM", "WOOD", "ROOM", "SWEAT"],
    "SCARF": ["NECK", "WINTER", "WOOL", "WARM", "WRAP"],
    "SCRABBLE": ["GAME", "TILES", "WORD", "POINTS", "LETTER"],
    "SHADOW": ["DARK", "LIGHT", "FOLLOW", "GROUND", "SILHOUETTE"],
    "SILK": ["WORM", "SMOOTH", "FABRIC", "SHINE", "CHINESE"],
    "SKELETON": ["BONE", "BODY", "DEAD", "HALLOWEEN", "FRAME"],
    "SPARK": ["FIRE", "ELECTRIC", "FLAME", "LIGHT", "SMALL"],
    "SPONGE": ["SINK", "WASH", "YELLOW", "CLEAN", "SOAK"],
    "STINGRAY": ["FISH", "TAIL", "FLAT", "OCEAN", "POISON"],
    "SUBURB": ["CITY", "HOUSE", "OUTSIDE", "COMMUTE", "AREA"],
    "SWAMP": ["WATER", "MARSH", "ALLIGATOR", "WET", "MUD"],
    "SYMPHONY": ["MUSIC", "ORCHESTRA", "FOUR", "COMPOSER", "CLASSICAL"],
    "TARANTULA": ["SPIDER", "HAIRY", "BITE", "BIG", "VENOM"],
    "TORCH": ["FIRE", "STICK", "LIGHT", "FLAME", "CARRY"],
    "TOURNAMENT": ["COMPETE", "SPORT", "WIN", "ROUND", "CHAMPION"],
    "TRAMPOLINE": ["JUMP", "NET", "SPRING", "BOUNCE", "YARD"],
    "VENTRILOQUIST": ["DUMMY", "TALK", "STOMACH", "SHOW", "VOICE"],
    "WEREWOLF": ["MOON", "HAIR", "WOLF", "CHANGE", "HOWL"],
    "WHIP": ["CRACK", "LEATHER", "COWBOY", "HIT", "SNAP"],
    "YOGURT": ["DAIRY", "CULTURE", "SPOON", "FRUIT", "CREAMY"]
};

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
 * Shows a new, unused word from the words array.
 */
function getNewWord() {
    const wordKeys = Object.keys(words);

    if (usedWords.size === wordKeys.length) {
        usedWords.clear();
        alert("All words used! Starting from the beginning.");
    }

    let newWord;
    do {
        const randomIndex = Math.floor(Math.random() * wordKeys.length);
        newWord = wordKeys[randomIndex];
    } while (usedWords.has(newWord));

    usedWords.add(newWord);

    currentWordDisplay.textContent = newWord;
    forbiddenWordsDisplay.innerHTML = words[newWord].map(w => `<span class="badge bg-danger mx-1">${w}</span>`).join('');
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