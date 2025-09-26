const words = [
    { word: "LION", forbidden: ["CAT", "MANE", "ROAR", "JUNGLE", "AFRICA"] },
    { word: "COMPUTER", forbidden: ["KEYBOARD", "SCREEN", "MOUSE", "CODE", "PROGRAM"] },
    { word: "RAINBOW", forbidden: ["COLORS", "ARCH", "WEATHER", "AFTER", "CLOUD"] },
    { word: "GUITAR", forbidden: ["STRINGS", "MUSIC", "ACOUSTIC", "PICK", "FRET"] },
    { word: "PIZZA", forbidden: ["ITALY", "CHEESE", "TOMATO", "DOUGH", "PEPPERONI"] },
    { word: "SUNFLOWER", forbidden: ["YELLOW", "SEEDS", "PLANT", "TALL", "FLOWER"] },
    { word: "TELEPHONE", forbidden: ["RING", "CALL", "TALK", "CELL", "DEVICE"] },
    { word: "CHOCOLATE", forbidden: ["BROWN", "CANDY", "SWEET", "COCOA", "BAR"] },
    { word: "ASTRONAUT", forbidden: ["SPACE", "ROCKET", "STAR", "HELMET", "WALK"] },
    { word: "WATERFALL", forbidden: ["RIVER", "HUGH", "DROP", "CASCADING", "FLOW"] },
    { word: "VOLCANO", forbidden: ["LAVA", "MOUNTAIN", "ERUPT", "ASH", "FIRE"] },
    { word: "DIAMOND", forbidden: ["RING", "HARD", "SHINE", "JEWEL", "CARAT"] },
    { word: "OCTOPUS", forbidden: ["EIGHT", "ARMS", "SQUID", "WATER", "SEA"] },
    { word: "HEADPHONES", forbidden: ["EARS", "WIRES", "LISTEN", "MUSIC", "NOISE"] },
    { word: "REFRIGERATOR", forbidden: ["COLD", "FOOD", "KITCHEN", "ICE", "FREEZE"] },
    { word: "PARK", forbidden: ["GRASS", "BENCH", "TREES", "PLAY", "OUTDOOR"] },
    { word: "NEWSPAPER", forbidden: ["READ", "PAPER", "NEWS", "INK", "MORNING"] },
    { word: "AIRPLANE", forbidden: ["FLY", "PILOT", "WING", "SKY", "FLIGHT"] },
    { word: "UMBRELLA", forbidden: ["RAIN", "WET", "SHADE", "CANOPY", "OPEN"] },
    { word: "CEREAL", forbidden: ["MILK", "BREAKFAST", "BOWL", "GRAINS", "BOX"] },
    { word: "SCULPTURE", forbidden: ["STATUE", "ART", "CLAY", "CARVE", "MUSEUM"] },
    { word: "HOTDOG", forbidden: ["BUN", "SAUSAGE", "MUSTARD", "STREET", "COOKOUT"] },
    { word: "DESERT", forbidden: ["SAND", "HOT", "CAMEL", "CACTUS", "DRY"] },
    { word: "CALENDAR", forbidden: ["DATE", "MONTH", "YEAR", "DAYS", "SCHEDULE"] },
    { word: "BACKPACK", forbidden: ["STRAPS", "SCHOOL", "CARRY", "BAG", "SHOULDER"] },
    { word: "SHARK", forbidden: ["OCEAN", "TEETH", "FISH", "GREAT WHITE", "FIN"] },
    { word: "MICROSCOPE", forbidden: ["GLASS", "SCIENCE", "SEE", "SMALL", "LAB"] },
    { word: "GIRAFFE", forbidden: ["NECK", "AFRICA", "TALL", "SPOTS", "ZOO"] },
    { word: "TENT", forbidden: ["CAMPING", "SLEEP", "POLES", "OUTDOORS", "CANVAS"] },
    { word: "WINTER", forbidden: ["SNOW", "COLD", "SEASON", "JANUARY", "FREEZING"] },
    { word: "FLASHLIGHT", forbidden: ["DARK", "LIGHT", "BATTERY", "BEAM", "HAND"] },
    { word: "SCIENTIST", forbidden: ["LAB", "EXPERIMENT", "RESEARCH", "SMART", "MISTAKE"] },
    { word: "BRIDGE", forbidden: ["RIVER", "CROSS", "ROAD", "STEEL", "OVER"] },
    { word: "OVEN", forbidden: ["BAKE", "HOT", "COOK", "KITCHEN", "STOVE"] },
    { word: "DIARY", forbidden: ["BOOK", "SECRETS", "WRITE", "JOURNAL", "LOCK"] },
    { word: "WHALE", forbidden: ["HUGE", "BLUE", "OCEAN", "MAMMAL", "SPERM"] },
    { word: "SCISSORS", forbidden: ["CUT", "PAPER", "BLADES", "SHARP", "HAIR"] },
    { word: "ENGINE", forbidden: ["CAR", "MOTOR", "POWER", "FUEL", "RUN"] },
    { word: "SPAGHETTI", forbidden: ["PASTA", "ITALY", "SAUCE", "NOODLE", "MEATBALL"] },
    { word: "GLOBE", forbidden: ["EARTH", "WORLD", "MAP", "ROUND", "SPIN"] },
    { word: "PENCIL", forbidden: ["WRITE", "ERASER", "LEAD", "YELLOW", "SHARPEN"] },
    { word: "HELICOPTER", forbidden: ["AIRCRAFT", "BLADES", "ROTOR", "CHOPPER", "FLY"] },
    { word: "GHOST", forbidden: ["SPIRIT", "DEAD", "SCARY", "WHITE", "HAUNTED"] },
    { word: "BALLET", forbidden: ["DANCE", "TUTU", "SHOES", "GRACEFUL", "STAGE"] },
    { word: "PIRATE", forbidden: ["SHIP", "EYEPATCH", "TREASURE", "SWORD", "SEA"] },
    { word: "KANGAROO", forbidden: ["AUSTRALIA", "HOP", "POUCH", "BABY", "SKIP"] },
    { word: "MAGNET", forbidden: ["METAL", "PULL", "ATTRACT", "NORTH", "REFRIGERATOR"] },
    { word: "ROBOT", forbidden: ["MACHINE", "FUTURE", "ANDROID", "BUILD", "METAL"] },
    { word: "BUTTERFLY", forbidden: ["INSECT", "FLY", "WINGS", "CATERPILLAR", "PRETTY"] },
    { word: "COUCH", forbidden: ["SOFA", "SIT", "LIVING ROOM", "CUSHION", "RELAX"] },
    { word: "TELESCOPE", forbidden: ["STAR", "LOOK", "SPACE", "PLANET", "OBSERVE"] },
    { word: "FENCE", forbidden: ["WOOD", "YARD", "PROPERTY", "BOUNDARY", "PALE"] },
    { word: "CAKE", forbidden: ["BIRTHDAY", "SWEET", "BAKE", "FROSTING", "SLICED"] },
    { word: "DRUM", forbidden: ["STICK", "BEAT", "MUSIC", "HIT", "RHYTHM"] },
    { word: "DESK", forbidden: ["OFFICE", "WORK", "CHAIR", "TABLE", "DRAWERS"] },
    { word: "BLANKET", forbidden: ["WARM", "SLEEP", "BED", "COVER", "COMFORTABLE"] },
    { word: "TOWEL", forbidden: ["DRY", "BATH", "WET", "CLOTH", "BEACH"] },
    { word: "CAMERA", forbidden: ["PHOTO", "TAKE", "LENS", "PICTURE", "FLASH"] },
    { word: "CANDLE", forbidden: ["FLAME", "WAX", "LIGHT", "BLOW", "FIRE"] },
    { word: "GARBAGE", forbidden: ["TRASH", "BIN", "DUMP", "THROW", "SMELL"] },
    { word: "HARP", forbidden: ["ANGEL", "STRING", "MUSIC", "PLUCK", "INSTRUMENT"] },
    { word: "JUICE", forbidden: ["ORANGE", "DRINK", "FRUIT", "SQUEEZE", "LIQUID"] },
    { word: "WALLET", forbidden: ["MONEY", "LEATHER", "CASH", "CARD", "POCKET"] },
    { word: "POTATO", forbidden: ["FRENCH FRY", "VEGETABLE", "BROWN", "MASH", "CHIP"] },
    { word: "VAMPIRE", forbidden: ["BLOOD", "BAT", "FANGS", "DRACULA", "NIGHT"] },
    { word: "CASTLE", forbidden: ["KING", "QUEEN", "TOWER", "STONE", "MEDIEVAL"] },
    { word: "EAGLE", forbidden: ["BIRD", "TALONS", "PREY", "FLY", "AMERICA"] },
    { word: "BALLOON", forbidden: ["AIR", "FLOAT", "POP", "PARTY", "HELIUM"] },
    { word: "SHOWER", forbidden: ["BATHROOM", "WATER", "WASH", "SOAP", "CLEAN"] },
    { word: "JELLYFISH", forbidden: ["STING", "WATER", "SEA", "TENTACLE", "BELL"] },
    { word: "LEMONADE", forbidden: ["DRINK", "SWEET", "SOUR", "YELLOW", "ICE"] },
    { word: "SHORTS", forbidden: ["PANTS", "LEGS", "SUMMER", "KNEES", "CASUAL"] },
    { word: "HOCKEY", forbidden: ["ICE", "PUCK", "STICK", "GOALIE", "SKATE"] },
    { word: "SNAIL", forbidden: ["SHELL", "SLOW", "SLIMY", "TRAIL", "GARDEN"] },
    { word: "VIOLIN", forbidden: ["BOW", "STRING", "ORCHESTRA", "FIDDLE", "CASE"] },
    { word: "DESERT", forbidden: ["SAND", "DRY", "HOT", "CACTUS", "CAMEL"] },
    { word: "CHIMNEY", forbidden: ["ROOF", "SMOKE", "FIREPLACE", "SANTA", "BRICK"] },
    { word: "HAMMOCK", forbidden: ["SWING", "NAP", "TREES", "NET", "RELAX"] },
    { word: "FLUTE", forbidden: ["WIND", "INSTRUMENT", "HOLES", "BLOW", "MUSIC"] },
    { word: "PLANT", forbidden: ["GROW", "GREEN", "LEAVES", "WATER", "EARTH"] },
    { word: "BICYCLE", forbidden: ["WHEELS", "RIDE", "PEDALS", "TWO", "HELMET"] },
    { word: "SCARF", forbidden: ["NECK", "WINTER", "WOOL", "WARM", "WRAP"] },
    { word: "BEACH", forbidden: ["SAND", "OCEAN", "SWIM", "WAVES", "SUN"] },
    { word: "MICROWAVE", forbidden: ["OVEN", "HEAT", "QUICK", "FOOD", "KITCHEN"] },
    { word: "SKIRT", forbidden: ["DRESS", "LEGS", "WOMEN", "WEAR", "FLOWY"] },
    { word: "COFFEE", forbidden: ["MUG", "BEANS", "HOT", "CAFFEINE", "MORNING"] },
    { word: "SOCCER", forbidden: ["BALL", "FOOT", "KICK", "GOAL", "FIELD"] },
    { word: "MOUNTAIN", forbidden: ["CLIMB", "HIGH", "PEAK", "SNOW", "HIKE"] },
    { word: "TRAIN", forbidden: ["TRACKS", "RAILROAD", "LOCOMOTIVE", "CARRIAGE", "RIDE"] },
    { word: "HOSPITAL", forbidden: ["DOCTOR", "SICK", "NURSE", "EMERGENCY", "BED"] },
    { word: "GARDEN", forbidden: ["FLOWERS", "PLANTS", "DIRT", "DIG", "YARD"] },
    { word: "EGG", forbidden: ["CHICKEN", "SHELL", "FRY", "BREAKFAST", "OVAL"] },
    { word: "CLOUDS", forbidden: ["SKY", "WHITE", "RAIN", "FLUFFY", "OVERCAST"] },
    { word: "RULER", forbidden: ["MEASURE", "STRAIGHT", "LINE", "INCHES", "PLASTIC"] },
    { word: "SQUARE", forbidden: ["FOUR", "SIDES", "SHAPE", "EQUAL", "BOX"] },
    { word: "BREAD", forbidden: ["SANDWICH", "TOAST", "LOAF", "BAKERY", "WHEAT"] },
    { word: "WHISTLE", forbidden: ["BLOW", "REFEREE", "SOUND", "MOUTH", "LOUD"] },
    { word: "STATUE", forbidden: ["SCULPTURE", "BRONZE", "MONUMENT", "PARK", "FROZEN"] },
    { word: "SAILBOAT", forbidden: ["WATER", "WIND", "BOAT", "MAST", "OCEAN"] },
    { word: "LADDER", forbidden: ["CLIMB", "STEPS", "HIGH", "TALL", "UP"] },
    { word: "TEAPOT", forbidden: ["DRINK", "KETTLE", "HOT", "POUR", "CERAMIC"] },
    { word: "SHORTS", forbidden: ["PANTS", "LEGS", "SUMMER", "KNEES", "CASUAL"] },
    { word: "DOORBELL", forbidden: ["RING", "ENTER", "FRONT", "PUSH", "SOUND"] },
    { word: "SLEEP", forbidden: ["BED", "NIGHT", "DREAM", "REST", "WAKE"] },
    { word: "SMILE", forbidden: ["HAPPY", "FACE", "TEETH", "MOUTH", "GRIN"] },
    { word: "NECKLACE", forbidden: ["JEWELRY", "CHAIN", "WEAR", "THROAT", "GIFT"] },
    { word: "PILLOW", forbidden: ["HEAD", "SOFT", "BED", "SLEEP", "FEATHER"] },
    { word: "TIGER", forbidden: ["STRIPES", "JUNGLE", "ORANGE", "CAT", "ROAR"] },
    { word: "TELEVISION", forbidden: ["SCREEN", "WATCH", "SHOW", "REMOTE", "SIT"] },
    { word: "POTTERY", forbidden: ["CLAY", "WHEEL", "OVEN", "MUG", "MOLD"] },
    { word: "RAINCOAT", forbidden: ["WET", "JACKET", "PLASTIC", "HOOD", "PONCHO"] },
    { word: "SCREWDRIVER", forbidden: ["TOOL", "TURN", "FLAT", "PHILLIPS", "WOOD"] },
    { word: "SWING", forbidden: ["PLAYGROUND", "SIT", "BACK and FORTH", "CHAIN", "PARK"] },
    { word: "KEYBOARD", forbidden: ["TYPE", "COMPUTER", "KEYS", "FINGERS", "PIANO"] },
    { word: "CACTUS", forbidden: ["SPIKES", "DESERT", "GREEN", "PLANT", "WATER"] },
    { word: "CHAIR", forbidden: ["SIT", "TABLE", "WOOD", "SEAT", "KITCHEN"] },
    { word: "MUSHROOM", forbidden: ["FUNGI", "EAT", "GROUND", "TOADSTOOL", "FOREST"] },
    { word: "SHOELACE", forbidden: ["TIE", "LOOSE", "FOOT", "STRING", "SNEAKER"] },
    { word: "CRAYON", forbidden: ["WAX", "DRAW", "COLOR", "PAPER", "KID"] },
    { word: "CARROT", forbidden: ["ORANGE", "BUNNY", "VEGETABLE", "CRUNCHY", "JUICE"] },
    { word: "JEANS", forbidden: ["PANTS", "DENIM", "BLUE", "LEVI", "CASUAL"] },
    { word: "GUM", forbidden: ["CHEW", "BUBBLE", "STICKY", "SWEET", "MINT"] },
    { word: "BEAR", forbidden: ["GRIZZLY", "HONEY", "FUR", "HIBERNATE", "BIG"] },
    { word: "DOG", forbidden: ["WOOF", "PET", "BARK", "WALK", "PUPPY"] },
    { word: "DRAGON", forbidden: ["FIRE", "MYTH", "FLY", "SCALE", "LEGEND"] },
    { word: "BOOK", forbidden: ["READ", "PAGE", "LIBRARY", "NOVEL", "COVER"] },
    { word: "SODA", forbidden: ["FIZZ", "COLA", "SWEET", "BUBBLES", "DRINK"] },
    { word: "CORN", forbidden: ["YELLOW", "COB", "VEGETABLE", "FIELD", "POPCORN"] },
    { word: "CHICKEN", forbidden: ["FARM", "EGG", "BIRD", "ROAST", "FEATHER"] },
    { word: "SAXOPHONE", forbidden: ["BRASS", "JAZZ", "REED", "HORN", "INSTRUMENT"] },
    { word: "FROG", forbidden: ["JUMP", "GREEN", "POND", "LILLY PAD", "TOAD"] },
    { word: "SUITCASE", forbidden: ["TRAVEL", "CLOTHES", "PACK", "BAG", "WHEEL"] },
    { word: "GARDEN", forbidden: ["FLOWERS", "PLANTS", "DIRT", "DIG", "YARD"] },
    { word: "SAUSAGE", forbidden: ["PORK", "MEAT", "BREAKFAST", "LINK", "GRILL"] },
    { word: "TOAST", forbidden: ["BREAD", "BROWN", "BUTTER", "BREAKFAST", "SLOT"] },
    { word: "COAT", forbidden: ["WINTER", "JACKET", "WARM", "BUTTONS", "PUT ON"] },
    { word: "DRESS", forbidden: ["SKIRT", "WEAR", "PARTY", "WOMEN", "FANCY"] },
    { word: "PEANUT", forbidden: ["BUTTER", "SHELL", "NUT", "ALLERGY", "CRUNCHY"] },
    { word: "CABBAGE", forbidden: ["ROUND", "GREEN", "LEAVES", "VEGETABLE", "COLESLAW"] },
    { word: "BASKET", forbidden: ["WEAVE", "EGG", "HANDLE", "PICNIC", "BALL"] },
    { word: "CLOSET", forbidden: ["DOOR", "HANG", "CLOTHES", "WARDROBE", "STORAGE"] },
    { word: "RABBIT", forbidden: ["HOP", "EAT", "EASTER", "EARS", "HARE"] },
    { word: "AIRPLANE", forbidden: ["FLY", "PILOT", "WING", "SKY", "FLIGHT"] },
    { word: "UMBRELLA", forbidden: ["RAIN", "WET", "SHADE", "CANOPY", "OPEN"] },
    { word: "SCULPTURE", forbidden: ["STATUE", "ART", "CLAY", "CARVE", "MUSEUM"] },
    { word: "BANANA", forbidden: ["YELLOW", "MONKEY", "PEEL", "FRUIT", "LONG"] },
    { word: "VIKING", forbidden: ["BOAT", "HELMET", "NORSE", "RAID", "SHIP"] },
    { word: "LIZARD", forbidden: ["REPTILE", "GREEN", "SCALE", "TAIL", "SLITHER"] },
    { word: "WHEELCHAIR", forbidden: ["SIT", "ROLL", "HANDICAP", "HOSPITAL", "PUSH"] },
    { word: "MUSTACHE", forbidden: ["HAIR", "LIP", "SHAVE", "MAN", "GROW"] },
    { word: "COMET", forbidden: ["SPACE", "TAIL", "ICE", "ASTEROID", "ORBIT"] },
    { word: "MAGAZINE", forbidden: ["READ", "GLOSSY", "PICTURES", "MONTHLY", "NEWSSTAND"] },
    { word: "PUZZLE", forbidden: ["PIECES", "SOLVE", "JIGSAW", "GAME", "TABLE"] },
    { word: "PUPPET", forbidden: ["STRING", "HAND", "SHOW", "MARIONETTE", "TALK"] },
    { word: "ZEBRA", forbidden: ["STRIPES", "HORSE", "AFRICA", "BLACK", "WHITE"] },
    { word: "WINE", forbidden: ["GRAPE", "DRINK", "RED", "BOTTLE", "ALCOHOL"] },
    { word: "SUBMARINE", forbidden: ["WATER", "UNDER", "BOAT", "YELLOW", "PERISCOPE"] },
    { word: "TOILET", forbidden: ["BATHROOM", "FLUSH", "SIT", "WATER", "PORCELAIN"] },
    { word: "TEETH", forbidden: ["MOUTH", "BRUSH", "WHITE", "CHEW", "DENTIST"] },
    { word: "VOLLEYBALL", forbidden: ["NET", "HIT", "BEACH", "SPORT", "SPIKE"] },
    { word: "RAINBOW", forbidden: ["COLORS", "ARCH", "WEATHER", "AFTER", "CLOUD"] },
    { word: "KEY", forbidden: ["LOCK", "DOOR", "METAL", "OPEN", "CAR"] },
    { word: "GUITAR", forbidden: ["STRINGS", "MUSIC", "ACOUSTIC", "PICK", "FRET"] },
    { word: "PIZZA", forbidden: ["ITALY", "CHEESE", "TOMATO", "DOUGH", "PEPPERONI"] },
    { word: "TELEPHONE", forbidden: ["RING", "CALL", "TALK", "CELL", "DEVICE"] },
    { word: "CHOCOLATE", forbidden: ["BROWN", "CANDY", "SWEET", "COCOA", "BAR"] },
    { word: "REFRIGERATOR", forbidden: ["COLD", "FOOD", "KITCHEN", "ICE", "FREEZE"] },
    { word: "ASTRONAUT", forbidden: ["SPACE", "ROCKET", "STAR", "HELMET", "WALK"] },
    { word: "VOLCANO", forbidden: ["LAVA", "MOUNTAIN", "ERUPT", "ASH", "FIRE"] },
    { word: "OCTOPUS", forbidden: ["EIGHT", "ARMS", "SQUID", "WATER", "SEA"] },
    { word: "BACKPACK", forbidden: ["STRAPS", "SCHOOL", "CARRY", "BAG", "SHOULDER"] },
    { word: "DIAMOND", forbidden: ["RING", "HARD", "SHINE", "JEWEL", "CARAT"] },
    { word: "SCISSORS", forbidden: ["CUT", "PAPER", "BLADES", "SHARP", "HAIR"] },
    { word: "HAMBURGER", forbidden: ["BREAD", "MEAT", "CHEESE", "PATTY", "GRILL"] },
    { word: "CANDLE", forbidden: ["FLAME", "WAX", "LIGHT", "BLOW", "FIRE"] },
    { word: "MAP", forbidden: ["DIRECTION", "ROAD", "PAPER", "NAVIGATE", "COUNTRY"] },
    { word: "COIN", forbidden: ["MONEY", "METAL", "CHANGE", "POCKET", "FLIP"] },
    { word: "FLASHLIGHT", forbidden: ["DARK", "LIGHT", "BATTERY", "BEAM", "HAND"] },
    { word: "WINTER", forbidden: ["SNOW", "COLD", "SEASON", "JANUARY", "FREEZING"] },
    { word: "TELEPHONE", forbidden: ["RING", "CALL", "TALK", "CELL", "DEVICE"] },
    { word: "SCIENTIST", forbidden: ["LAB", "EXPERIMENT", "RESEARCH", "SMART", "MISTAKE"] },
    { word: "BRIDGE", forbidden: ["RIVER", "CROSS", "ROAD", "STEEL", "OVER"] },
    { word: "OVEN", forbidden: ["BAKE", "HOT", "COOK", "KITCHEN", "STOVE"] },
    { word: "WHALE", forbidden: ["HUGE", "BLUE", "OCEAN", "MAMMAL", "SPERM"] },
    { word: "ENGINE", forbidden: ["CAR", "MOTOR", "POWER", "FUEL", "RUN"] },
    { word: "GLOBE", forbidden: ["EARTH", "WORLD", "MAP", "ROUND", "SPIN"] },
    { word: "PENCIL", forbidden: ["WRITE", "ERASER", "LEAD", "YELLOW", "SHARPEN"] },
    { word: "HELICOPTER", forbidden: ["AIRCRAFT", "BLADES", "ROTOR", "CHOPPER", "FLY"] },
    { word: "GHOST", forbidden: ["SPIRIT", "DEAD", "SCARY", "WHITE", "HAUNTED"] },
    { word: "BALLET", forbidden: ["DANCE", "TUTU", "SHOES", "GRACEFUL", "STAGE"] },
    { word: "PIRATE", forbidden: ["SHIP", "EYEPATCH", "TREASURE", "SWORD", "SEA"] },
    { word: "MAGNET", forbidden: ["METAL", "PULL", "ATTRACT", "NORTH", "REFRIGERATOR"] },
    { word: "BUTTERFLY", forbidden: ["INSECT", "FLY", "WINGS", "CATERPILLAR", "PRETTY"] },
    { word: "COUCH", forbidden: ["SOFA", "SIT", "LIVING ROOM", "CUSHION", "RELAX"] },
    { word: "TOWEL", forbidden: ["DRY", "BATH", "WET", "CLOTH", "BEACH"] },
    { word: "JUICE", forbidden: ["ORANGE", "DRINK", "FRUIT", "SQUEEZE", "LIQUID"] },
    { word: "WALLET", forbidden: ["MONEY", "LEATHER", "CASH", "CARD", "POCKET"] },
    { word: "POTATO", forbidden: ["FRENCH FRY", "VEGETABLE", "BROWN", "MASH", "CHIP"] },
    { word: "CASTLE", forbidden: ["KING", "QUEEN", "TOWER", "STONE", "MEDIEVAL"] },
    { word: "EAGLE", forbidden: ["BIRD", "TALONS", "PREY", "FLY", "AMERICA"] },
    { word: "BALLOON", forbidden: ["AIR", "FLOAT", "POP", "PARTY", "HELIUM"] },
    { word: "LEMONADE", forbidden: ["DRINK", "SWEET", "SOUR", "YELLOW", "ICE"] },
    { word: "SNAIL", forbidden: ["SHELL", "SLOW", "SLIMY", "TRAIL", "GARDEN"] },
    { word: "VIOLIN", forbidden: ["BOW", "STRING", "ORCHESTRA", "FIDDLE", "CASE"] },
    { word: "DESERT", forbidden: ["SAND", "DRY", "HOT", "CACTUS", "CAMEL"] },
    { word: "CHIMNEY", forbidden: ["ROOF", "SMOKE", "FIREPLACE", "SANTA", "BRICK"] },
    { word: "FLUTE", forbidden: ["WIND", "INSTRUMENT", "HOLES", "BLOW", "MUSIC"] },
    { word: "PLANT", forbidden: ["GROW", "GREEN", "LEAVES", "WATER", "EARTH"] },
    { word: "BICYCLE", forbidden: ["WHEELS", "RIDE", "PEDALS", "TWO", "HELMET"] },
    { word: "BEACH", forbidden: ["SAND", "OCEAN", "SWIM", "WAVES", "SUN"] },
    { word: "MICROWAVE", forbidden: ["OVEN", "HEAT", "QUICK", "FOOD", "KITCHEN"] },
    { word: "COFFEE", forbidden: ["MUG", "BEANS", "HOT", "CAFFEINE", "MORNING"] },
    { word: "MOUNTAIN", forbidden: ["CLIMB", "HIGH", "PEAK", "SNOW", "HIKE"] },
    { word: "TRAIN", forbidden: ["TRACKS", "RAILROAD", "LOCOMOTIVE", "CARRIAGE", "RIDE"] },
    { word: "HOSPITAL", forbidden: ["DOCTOR", "SICK", "NURSE", "EMERGENCY", "BED"] },
    { word: "GARDEN", forbidden: ["FLOWERS", "PLANTS", "DIRT", "DIG", "YARD"] },
    { word: "EGG", forbidden: ["CHICKEN", "SHELL", "FRY", "BREAKFAST", "OVAL"] },
    { word: "CLOUDS", forbidden: ["SKY", "WHITE", "RAIN", "FLUFFY", "OVERCAST"] },
    { word: "RULER", forbidden: ["MEASURE", "STRAIGHT", "LINE", "INCHES", "PLASTIC"] },
    { word: "BREAD", forbidden: ["SANDWICH", "TOAST", "LOAF", "BAKERY", "WHEAT"] },
    { word: "WHISTLE", forbidden: ["BLOW", "REFEREE", "SOUND", "MOUTH", "LOUD"] },
    { word: "STATUE", forbidden: ["SCULPTURE", "BRONZE", "MONUMENT", "PARK", "FROZEN"] },
    { word: "SAILBOAT", forbidden: ["WATER", "WIND", "BOAT", "MAST", "OCEAN"] },
    { word: "LADDER", forbidden: ["CLIMB", "STEPS", "HIGH", "TALL", "UP"] },
    { word: "TEAPOT", forbidden: ["DRINK", "KETTLE", "HOT", "POUR", "CERAMIC"] },
    { word: "DOORBELL", forbidden: ["RING", "ENTER", "FRONT", "PUSH", "SOUND"] },
    { word: "SLEEP", forbidden: ["BED", "NIGHT", "DREAM", "REST", "WAKE"] },
    { word: "SMILE", forbidden: ["HAPPY", "FACE", "TEETH", "MOUTH", "GRIN"] },
    { word: "PILLOW", forbidden: ["HEAD", "SOFT", "BED", "SLEEP", "FEATHER"] },
    { word: "TIGER", forbidden: ["STRIPES", "JUNGLE", "ORANGE", "CAT", "ROAR"] },
    { word: "TELEVISION", forbidden: ["SCREEN", "WATCH", "SHOW", "REMOTE", "SIT"] },
    { word: "POTTERY", forbidden: ["CLAY", "WHEEL", "OVEN", "MUG", "MOLD"] },
    { word: "RAINCOAT", forbidden: ["WET", "JACKET", "PLASTIC", "HOOD", "PONCHO"] },
    { word: "SCREWDRIVER", forbidden: ["TOOL", "TURN", "FLAT", "PHILLIPS", "WOOD"] },
    { word: "SWING", forbidden: ["PLAYGROUND", "SIT", "BACK and FORTH", "CHAIN", "PARK"] },
    { word: "KEYBOARD", forbidden: ["TYPE", "COMPUTER", "KEYS", "FINGERS", "PIANO"] },
    { word: "CACTUS", forbidden: ["SPIKES", "DESERT", "GREEN", "PLANT", "WATER"] },
    { word: "CHAIR", forbidden: ["SIT", "TABLE", "WOOD", "SEAT", "KITCHEN"] },
    { word: "MUSHROOM", forbidden: ["FUNGI", "EAT", "GROUND", "TOADSTOOL", "FOREST"] },
    { word: "SHOELACE", forbidden: ["TIE", "LOOSE", "FOOT", "STRING", "SNEAKER"] },
    { word: "CRAYON", forbidden: ["WAX", "DRAW", "COLOR", "PAPER", "KID"] },
    { word: "CARROT", forbidden: ["ORANGE", "BUNNY", "VEGETABLE", "CRUNCHY", "JUICE"] },
    { word: "GUM", forbidden: ["CHEW", "BUBBLE", "STICKY", "SWEET", "MINT"] },
    { word: "BEAR", forbidden: ["GRIZZLY", "HONEY", "FUR", "HIBERNATE", "BIG"] },
    { word: "DOG", forbidden: ["WOOF", "PET", "BARK", "WALK", "PUPPY"] },
    { word: "DRAGON", forbidden: ["FIRE", "MYTH", "FLY", "SCALE", "LEGEND"] },
    { word: "BOOK", forbidden: ["READ", "PAGE", "LIBRARY", "NOVEL", "COVER"] },
    { word: "SODA", forbidden: ["FIZZ", "COLA", "SWEET", "BUBBLES", "DRINK"] },
    { word: "CORN", forbidden: ["YELLOW", "COB", "VEGETABLE", "FIELD", "POPCORN"] },
    { word: "CHICKEN", forbidden: ["FARM", "EGG", "BIRD", "ROAST", "FEATHER"] },
    { word: "SAXOPHONE", forbidden: ["BRASS", "JAZZ", "REED", "HORN", "INSTRUMENT"] },
    { word: "FROG", forbidden: ["JUMP", "GREEN", "POND", "LILLY PAD", "TOAD"] },
    { word: "SUITCASE", forbidden: ["TRAVEL", "CLOTHES", "PACK", "BAG", "WHEEL"] },
    { word: "SAUSAGE", forbidden: ["PORK", "MEAT", "BREAKFAST", "LINK", "GRILL"] },
    { word: "TOAST", forbidden: ["BREAD", "BROWN", "BUTTER", "BREAKFAST", "SLOT"] },
    { word: "COAT", forbidden: ["WINTER", "JACKET", "WARM", "BUTTONS", "PUT ON"] },
    { word: "DRESS", forbidden: ["SKIRT", "WEAR", "PARTY", "WOMEN", "FANCY"] },
    { word: "PEANUT", forbidden: ["BUTTER", "SHELL", "NUT", "ALLERGY", "CRUNCHY"] },
    { word: "CABBAGE", forbidden: ["ROUND", "GREEN", "LEAVES", "VEGETABLE", "COLESLAW"] },
    { word: "BASKET", forbidden: ["WEAVE", "EGG", "HANDLE", "PICNIC", "BALL"] },
    { word: "CLOSET", forbidden: ["DOOR", "HANG", "CLOTHES", "WARDROBE", "STORAGE"] },
    { word: "RABBIT", forbidden: ["HOP", "EAT", "EASTER", "EARS", "HARE"] },
    { word: "BANANA", forbidden: ["YELLOW", "MONKEY", "PEEL", "FRUIT", "LONG"] },
    { word: "LIZARD", forbidden: ["REPTILE", "GREEN", "SCALE", "TAIL", "SLITHER"] },
    { word: "WHEELCHAIR", forbidden: ["SIT", "ROLL", "HANDICAP", "HOSPITAL", "PUSH"] },
    { word: "MUSTACHE", forbidden: ["HAIR", "LIP", "SHAVE", "MAN", "GROW"] },
    { word: "MAGAZINE", forbidden: ["READ", "GLOSSY", "PICTURES", "MONTHLY", "NEWSSTAND"] },
    { word: "PUZZLE", forbidden: ["PIECES", "SOLVE", "JIGSAW", "GAME", "TABLE"] },
    { word: "PUPPET", forbidden: ["STRING", "HAND", "SHOW", "MARIONETTE", "TALK"] },
    { word: "ZEBRA", forbidden: ["STRIPES", "HORSE", "AFRICA", "BLACK", "WHITE"] },
    { word: "WINE", forbidden: ["GRAPE", "DRINK", "RED", "BOTTLE", "ALCOHOL"] },
    { word: "SUBMARINE", forbidden: ["WATER", "UNDER", "BOAT", "YELLOW", "PERISCOPE"] },
    { word: "TOILET", forbidden: ["BATHROOM", "FLUSH", "SIT", "WATER", "PORCELAIN"] },
    { word: "TEETH", forbidden: ["MOUTH", "BRUSH", "WHITE", "CHEW", "DENTIST"] },
    { word: "VOLLEYBALL", forbidden: ["NET", "HIT", "BEACH", "SPORT", "SPIKE"] },
    { word: "VIKING", forbidden: ["BOAT", "HELMET", "NORSE", "RAID", "SHIP"] },
    { word: "CUCUMBER", forbidden: ["GREEN", "SALAD", "LONG", "SLICE", "PICKLE"] },
    { word: "DOUGHNUT", forbidden: ["HOLE", "GLAZE", "FRIED", "SWEET", "COFFEE"] },
    { word: "PARACHUTE", forbidden: ["FALL", "OPEN", "JUMP", "SKY", "LAND"] },
    { word: "CASTLE", forbidden: ["KING", "QUEEN", "TOWER", "STONE", "MEDIEVAL"] },
    { word: "GIRAFFE", forbidden: ["NECK", "AFRICA", "TALL", "SPOTS", "ZOO"] },
    { word: "WHIP", forbidden: ["CRACK", "LEATHER", "COWBOY", "HIT", "SNAP"] },
    { word: "FLAMINGO", forbidden: ["PINK", "BIRD", "STAND", "ONE LEG", "TROPIC"] },
    { word: "ALARM", forbidden: ["WAKE", "SOUND", "CLOCK", "EMERGENCY", "LOUD"] },
    { word: "CHESS", forbidden: ["BOARD", "GAME", "KING", "PAWN", "CHECKMATE"] },
    { word: "SCORPION", forbidden: ["STING", "TAIL", "DESERT", "ARACHNID", "POISON"] },
    { word: "PUFFERFISH", forbidden: ["SWIM", "SPIKES", "BLOW UP", "POISON", "JAPAN"] },
    { word: "SKATEBOARD", forbidden: ["TRICK", "WHEELS", "RIDE", "RAMP", "FEET"] },
    { word: "TURTLE", forbidden: ["SHELL", "SLOW", "REPTILE", "WATER", "NINJA"] },
    { word: "PIANO", forbidden: ["KEYS", "MUSIC", "PLAY", "BENCH", "INSTRUMENT"] },
    { word: "BINOCULARS", forbidden: ["EYES", "LOOK", "FAR", "ZOOM", "BIRD"] },
    { word: "PADDLE", forbidden: ["BOAT", "CANOE", "ROW", "WATER", "FLAT"] },
    { word: "SHIRT", forbidden: ["BUTTON", "WEAR", "TOP", "CLOTHES", "SLEEVE"] },
    { word: "SAUCE", forbidden: ["KETCHUP", "POUR", "FOOD", "TOMATO", "LIQUID"] },
    { word: "WHISKEY", forbidden: ["SCOTCH", "ALCOHOL", "DRINK", "BROWN", "GLASS"] },
    { word: "BALCONY", forbidden: ["APARTMENT", "RAILING", "VIEW", "SIT", "HIGH"] },
    { word: "CEMENT", forbidden: ["MIX", "GRAY", "CONCRETE", "BUILD", "DRY"] },
    { word: "WINDMILL", forbidden: ["BLADES", "AIR", "POWER", "TOWER", "TURN"] },
    { word: "BARREL", forbidden: ["WOOD", "WINE", "ROUND", "STORAGE", "KEG"] },
    { word: "BROOM", forbidden: ["SWEEP", "CLEAN", "HANDLE", "WITCH", "DUST"] },
    { word: "GOLF", forbidden: ["CLUB", "BALL", "HOLE", "GREEN", "TEE"] },
    { word: "JUGGLE", forbidden: ["BALLS", "THROW", "CATCH", "CIRCUS", "HANDS"] },
    { word: "LEMON", forbidden: ["SOUR", "YELLOW", "FRUIT", "JUICE", "ACID"] },
    { word: "NINJA", forbidden: ["JAPAN", "FIGHT", "BLACK", "WARRIOR", "SWORD"] },
    { word: "OSTRICH", forbidden: ["BIRD", "AFRICA", "RUN", "HEAD", "SAND"] },
    { word: "SLIDE", forbidden: ["PLAYGROUND", "DOWN", "FUN", "WET", "PARK"] },
    { word: "SURFBOARD", forbidden: ["WAVE", "RIDE", "WATER", "BEACH", "WAX"] },
    { word: "SWAN", forbidden: ["WHITE", "NECK", "LAKE", "BIRD", "FEATHER"] },
    { word: "TENTACLE", forbidden: ["ARM", "SUCKER", "SQUID", "OCTOPUS", "REACH"] },
    { word: "TREASURE", forbidden: ["GOLD", "CHEST", "PIRATE", "MAP", "BURIED"] },
    { word: "TULIP", forbidden: ["FLOWER", "HOLLAND", "BULB", "SPRING", "GARDEN"] },
    { word: "YACHT", forbidden: ["BOAT", "RICH", "SAIL", "LUXURY", "MARINA"] },
    { word: "ZOMBIE", forbidden: ["WALK", "DEAD", "BRAIN", "INFECTED", "HORROR"] },
    { word: "ACORN", forbidden: ["OAK", "TREE", "SQUIRREL", "FALL", "NUT"] },
    { word: "BUMBLEBEE", forbidden: ["STRIPE", "FLY", "STING", "HONEY", "INSECT"] },
    { word: "CARNIVAL", forbidden: ["RIDES", "GAME", "FAIR", "TICKET", "CLOWN"] },
    { word: "CHESS", forbidden: ["BOARD", "GAME", "KING", "PAWN", "CHECKMATE"] },
    { word: "CLOWN", forbidden: ["CIRCUS", "RED NOSE", "MAKEUP", "JOKE", "SCARY"] },
    { word: "COMPASS", forbidden: ["NORTH", "DIRECTION", "NEEDLE", "HIKING", "FIND"] },
    { word: "CROCODILE", forbidden: ["REPTILE", "RIVER", "JAW", "ALLIGATOR", "TEETH"] },
    { word: "DUNGEON", forbidden: ["CASTLE", "PRISON", "DARK", "CELL", "BASEMENT"] },
    { word: "FEATHER", forbidden: ["BIRD", "LIGHT", "FLUFFY", "QUILL", "FALL"] },
    { word: "FOUNTAIN", forbidden: ["WATER", "SPRAY", "PARK", "POOL", "SQUARE"] },
    { word: "GEISHA", forbidden: ["JAPAN", "KIMONO", "PERFORM", "DANCE", "BEAUTY"] },
    { word: "GINGERBREAD", forbidden: ["COOKIE", "MAN", "SPICE", "HOUSE", "BAKE"] },
    { word: "ICEBERG", forbidden: ["COLD", "WATER", "FLOAT", "TITANIC", "LARGE"] },
    { word: "JAVELIN", forbidden: ["THROW", "SPEAR", "SPORT", "POINT", "TRACK"] },
    { word: "JEWELRY", forbidden: ["GOLD", "DIAMOND", "WEAR", "RING", "NECKLACE"] },
    { word: "KIMONO", forbidden: ["JAPAN", "DRESS", "SILK", "WEAR", "TRADITIONAL"] },
    { word: "MARATHON", forbidden: ["RUN", "RACE", "LONG", "FEET", "FINISH"] },
    { word: "MICROSCOPE", forbidden: ["GLASS", "SCIENCE", "SEE", "SMALL", "LAB"] },
    { word: "ORCHESTRA", forbidden: ["MUSIC", "INSTRUMENT", "CONDUCTOR", "STAGE", "PLAY"] },
    { word: "PARADE", forbidden: ["FLOAT", "STREET", "MARCH", "BAND", "HOLIDAY"] },
    { word: "PENGUIN", forbidden: ["BIRD", "ICE", "SOUTH POLE", "WALK", "BLACK"] },
    { word: "PICNIC", forbidden: ["BLANKET", "FOOD", "PARK", "OUTDOOR", "BASKET"] },
    { word: "POPCORN", forbidden: ["MOVIE", "KERNELS", "BUTTER", "EAT", "BAG"] },
    { word: "PRETZEL", forbidden: ["SALT", "TWIST", "BREAD", "BAKED", "SNACK"] },
    { word: "QUILL", forbidden: ["BIRD", "PEN", "FEATHER", "WRITE", "INK"] },
    { word: "SATELLITE", forbidden: ["ORBIT", "SPACE", "COMMUNICATE", "DISH", "SEND"] },
    { word: "SCUBA", forbidden: ["DIVE", "OXYGEN", "WATER", "TANK", "UNDER"] },
    { word: "SEAGULL", forbidden: ["BIRD", "BEACH", "FLY", "WATER", "SQUAWK"] },
    { word: "SHOELACE", forbidden: ["TIE", "LOOSE", "FOOT", "STRING", "SNEAKER"] },
    { word: "SIREN", forbidden: ["SOUND", "POLICE", "FIRE", "EMERGENCY", "LOUD"] },
    { word: "SLED", forbidden: ["SNOW", "HILL", "RIDE", "PULL", "WINTER"] },
    { word: "SMURF", forbidden: ["BLUE", "CARTOON", "VILLAGE", "HUT", "PAPA"] },
    { word: "SOCKS", forbidden: ["FEET", "SHOES", "WEAR", "COTTON", "PAIR"] },
    { word: "SOPRANO", forbidden: ["SINGER", "HIGH", "OPERA", "VOICE", "FEMALE"] },
    { word: "SPEAKER", forbidden: ["SOUND", "MUSIC", "LOUD", "TALK", "BOX"] },
    { word: "SUBWAY", forbidden: ["TRAIN", "UNDERGROUND", "CITY", "STATION", "RAIL"] },
    { word: "THERMOMETER", forbidden: ["TEMPERATURE", "FEVER", "MEASURE", "GLASS", "MERCURY"] },
    { word: "THIMBLE", forbidden: ["SEW", "FINGER", "SMALL", "METAL", "NEEDLE"] },
    { word: "TUXEDO", forbidden: ["SUIT", "FORMAL", "TIE", "DRESS", "WEDDING"] },
    { word: "VIKING", forbidden: ["BOAT", "HELMET", "NORSE", "RAID", "SHIP"] },
    { word: "WAGON", forbidden: ["WHEELS", "PULL", "RED", "CART", "HORSE"] },
    { word: "YOGURT", forbidden: ["DAIRY", "CULTURE", "SPOON", "FRUIT", "CREAMY"] },
    { word: "ACROBAT", forbidden: ["FLIP", "CIRCUS", "TUMBLE", "GYMNASTICS", "BALANCE"] },
    { word: "ADOBE", forbidden: ["MUD", "HOUSE", "BRICK", "SOUTHWEST", "BUILDING"] },
    { word: "BAMBOO", forbidden: ["PANDA", "STICK", "PLANT", "TALL", "ASIA"] },
    { word: "BOOMERANG", forbidden: ["THROW", "AUSTRALIA", "RETURN", "WOOD", "WEAPON"] },
    { word: "CABARET", forbidden: ["SHOW", "CLUB", "DANCE", "STAGE", "PERFORM"] },
    { word: "CALYPSO", forbidden: ["MUSIC", "CARIBBEAN", "ISLAND", "DRUM", "SING"] },
    { word: "CAMOUFLAGE", forbidden: ["HIDE", "GREEN", "MILITARY", "BLEND", "SPOTS"] },
    { word: "CANOE", forbidden: ["BOAT", "PADDLE", "WATER", "RIVER", "KAYAK"] },
    { word: "CANYON", forbidden: ["RIVER", "GRAND", "DEEP", "ROCK", "CLIFF"] },
    { word: "CARNIVORE", forbidden: ["MEAT", "EAT", "ANIMAL", "LION", "KILL"] },
    { word: "CELLAR", forbidden: ["BASEMENT", "WINE", "BELOW", "UNDERGROUND", "STORAGE"] },
    { word: "CHAMELEON", forbidden: ["LIZARD", "CHANGE", "COLOR", "REPTILE", "TONGUE"] },
    { word: "CHIMPANZEE", forbidden: ["MONKEY", "APE", "AFRICA", "JUNGLE", "PRIMATE"] },
    { word: "CLARINET", forbidden: ["WOODWIND", "INSTRUMENT", "REED", "MUSIC", "BAND"] },
    { word: "COWBOY", forbidden: ["HAT", "HORSE", "WEST", "RANCH", "CATTLE"] },
    { word: "CRICKET", forbidden: ["BUG", "JUMP", "SING", "GAME", "BALL"] },
    { word: "ECLIPSE", forbidden: ["SUN", "MOON", "DARK", "SHADOW", "BLOCK"] },
    { word: "EQUATOR", forbidden: ["EARTH", "LINE", "MIDDLE", "TROPIC", "HOT"] },
    { word: "FIREFIGHTER", forbidden: ["RED", "HOSE", "PUT OUT", "TRUCK", "DALMATIAN"] },
    { word: "FLOOD", forbidden: ["RAIN", "WATER", "WET", "DROWN", "RIVER"] },
    { word: "GEAR", forbidden: ["SHIFT", "WHEEL", "MACHINE", "TOOTH", "BIKE"] },
    { word: "GLACIER", forbidden: ["ICE", "COLD", "MOVE", "MOUNTAIN", "SLIDE"] },
    { word: "GRENADE", forbidden: ["EXPLODE", "PIN", "BOMB", "THROW", "HAND"] },
    { word: "HARVEST", forbidden: ["CROP", "GATHER", "FALL", "FARM", "PICK"] },
    { word: "HORIZON", forbidden: ["SKY", "MEET", "LINE", "SUNSET", "FAR"] },
    { word: "HUMMINGBIRD", forbidden: ["BIRD", "SMALL", "FLY", "FAST", "NECTAR"] },
    { word: "ICEBERG", forbidden: ["COLD", "WATER", "FLOAT", "TITANIC", "LARGE"] },
    { word: "JESTER", forbidden: ["JOKE", "KING", "HAT", "FOOL", "LAUGH"] },
    { word: "JUNGLE", forbidden: ["RAINFOREST", "TROPICAL", "TREES", "LION", "WET"] },
    { word: "LAVA", forbidden: ["HOT", "RED", "VOLCANO", "FLOW", "MAGMA"] },
    { word: "MIMIC", forbidden: ["COPY", "ACT", "IMITATE", "PARROT", "SOUND"] },
    { word: "MIRROR", forbidden: ["LOOK", "REFLECTION", "GLASS", "SEE", "FACE"] },
    { word: "MONOCLE", forbidden: ["EYE", "GLASS", "LENS", "GENTLEMAN", "WEAR"] },
    { word: "MOSQUITO", forbidden: ["BITE", "BUG", "FLY", "ITCH", "SWAT"] },
    { word: "MUSTARD", forbidden: ["YELLOW", "HOT DOG", "SAUCE", "SEED", "SANDWICH"] },
    { word: "OASIS", forbidden: ["DESERT", "WATER", "TREES", "PALM", "FIND"] },
    { word: "OXYGEN", forbidden: ["AIR", "BREATH", "GAS", "LIFE", "ELEMENT"] },
    { word: "PALM", forbidden: ["TREE", "TROPIC", "BEACH", "COCONUT", "HAND"] },
    { word: "PARADE", forbidden: ["FLOAT", "STREET", "MARCH", "BAND", "HOLIDAY"] },
    { word: "PENALTY", forbidden: ["FOUL", "SPORT", "PUNISH", "SCORE", "KICK"] },
    { word: "QUARTZ", forbidden: ["CRYSTAL", "ROCK", "WHITE", "MINERAL", "WATCH"] },
    { word: "REPTILE", forbidden: ["COLD-BLOODED", "SNAKE", "LIZARD", "SCALE", "EGG"] },
    { word: "ROCKET", forbidden: ["SPACE", "LAUNCH", "FIRE", "FLY", "BLAST"] },
    { word: "SAUNA", forbidden: ["HOT", "STEAM", "WOOD", "ROOM", "SWEAT"] },
    { word: "SCARF", forbidden: ["NECK", "WINTER", "WOOL", "WARM", "WRAP"] },
    { word: "SCRABBLE", forbidden: ["GAME", "TILES", "WORD", "POINTS", "LETTER"] },
    { word: "SHADOW", forbidden: ["DARK", "LIGHT", "FOLLOW", "GROUND", "SILHOUETTE"] },
    { word: "SILK", forbidden: ["WORM", "SMOOTH", "FABRIC", "SHINE", "CHINESE"] },
    { word: "SKELETON", forbidden: ["BONE", "BODY", "DEAD", "HALLOWEEN", "FRAME"] },
    { word: "SPARK", forbidden: ["FIRE", "ELECTRIC", "FLAME", "LIGHT", "SMALL"] },
    { word: "SPONGE", forbidden: ["SINK", "WASH", "YELLOW", "CLEAN", "SOAK"] },
    { word: "STINGRAY", forbidden: ["FISH", "TAIL", "FLAT", "OCEAN", "POISON"] },
    { word: "SUBURB", forbidden: ["CITY", "HOUSE", "OUTSIDE", "COMMUTE", "AREA"] },
    { word: "SWAMP", forbidden: ["WATER", "MARSH", "ALLIGATOR", "WET", "MUD"] },
    { word: "SYMPHONY", forbidden: ["MUSIC", "ORCHESTRA", "FOUR", "COMPOSER", "CLASSICAL"] },
    { word: "TARANTULA", forbidden: ["SPIDER", "HAIRY", "BITE", "BIG", "VENOM"] },
    { word: "TORCH", forbidden: ["FIRE", "STICK", "LIGHT", "FLAME", "CARRY"] },
    { word: "TOURNAMENT", forbidden: ["COMPETE", "SPORT", "WIN", "ROUND", "CHAMPION"] },
    { word: "TRAMPOLINE", forbidden: ["JUMP", "NET", "SPRING", "BOUNCE", "YARD"] },
    { word: "VENTRILOQUIST", forbidden: ["DUMMY", "TALK", "STOMACH", "SHOW", "VOICE"] },
    { word: "WEREWOLF", forbidden: ["MOON", "HAIR", "WOLF", "CHANGE", "HOWL"] },
    { word: "WHIP", forbidden: ["CRACK", "LEATHER", "COWBOY", "HIT", "SNAP"] },
    { word: "YOGURT", forbidden: ["DAIRY", "CULTURE", "SPOON", "FRUIT", "CREAMY"] }
    // --- End of New Content ---
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