const baseBiomes = ["Forest", "Hallow","Caverns","Desert","Jungle","Ocean","Snow","Mushroom"]
const biomes1 = [["Forest"], ["Hallow"], ["Caverns"], ["Desert"], ["Jungle"], ["Ocean"], ["Snow"], ["Mushroom"]]

const biomes2Natural = [["Hallow","Caverns"], ["Caverns","Desert"],["Caverns","Jungle"],["Caverns","Ocean"],["Caverns","Snow"],["Caverns","Mushroom"]]
const biomes2Easy = [["Hallow","Desert"], ["Hallow","Jungle"], ["Hallow","Snow"], ["Hallow","Mushroom"]]
const biomes2Rest = [["Hallow","Ocean"], ["Desert","Jungle"], ["Desert","Mushroom"], ["Desert","Snow"], ["Desert","Mushroom"], ["Jungle","Ocean"], ["Jungle","Snow"], ["Jungle","Mushroom"], ["Ocean","Snow"], ["Ocean","Mushroom"], ["Snow","Mushroom"]]

const biomes3Easy = [["Hallow", "Caverns", "Desert"], ["Hallow", "Caverns", "Snow"], ["Hallow", "Desert", "Ocean"], ["Caverns", "Jungle", "Mushroom"]]

const biomes3Rest = [["Hallow", "Caverns", "Jungle"], ["Hallow", "Desert", "Jungle"], ["Hallow", "Caverns", "Mushroom"], ["Hallow", "Desert", "Snow"], ["Hallow", "Desert", "Mushroom"], ["Hallow", "Jungle", "Ocean"], ["Hallow", "Jungle", "Snow"], ["Caverns", "Desert", "Jungle"], ["Hallow", "Jungle", "Mushroom"], ["Hallow", "Ocean", "Snow"], ["Caverns", "Desert", "Snow"], ["Caverns", "Desert", "Mushroom"], ["Hallow", "Ocean", "Mushroom"], ["Caverns", "Jungle", "Snow"], ["Hallow", "Snow", "Mushroom"], ["Desert", "Jungle", "Snow"], ["Caverns", "Snow", "Mushroom"], ["Desert", "Jungle", "Mushroom"], ["Desert", "Snow", "Mushroom"], ["Jungle", "Ocean", "Snow"], ["Jungle", "Ocean", "Mushroom"], ["Jungle", "Snow", "Mushroom"], ["Ocean", "Snow", "Mushroom"]]

var npcdict = {
    "Guide": {
        "biome_liked": "Forest",
        "biome_disliked": "Ocean",
        "loves": [],
        "likes": [
            "Clothier",
            "Zoologist"
        ],
        "dislikes": [
            "Steampunker"
        ],
        "hates": [
            "Painter"
        ],
        "weighting": 1.0
    },
    "Merchant": {
        "biome_liked": "Forest",
        "biome_disliked": "Desert",
        "loves": [],
        "likes": [
            "Golfer",
            "Nurse"
        ],
        "dislikes": [
            "Tax Collector"
        ],
        "hates": [
            "Angler"
        ],
        "weighting": 1.0
    },
    "Zoologist": {
        "biome_liked": "Forest",
        "biome_disliked": "Desert",
        "loves": [
            "Witch Doctor"
        ],
        "likes": [
            "Golfer"
        ],
        "dislikes": [
            "Angler"
        ],
        "hates": [
            "Arms Dealer"
        ],
        "weighting": 1.0
    },
    "Golfer": {
        "biome_liked": "Forest",
        "biome_disliked": "Caverns",
        "loves": [
            "Angler"
        ],
        "likes": [
            "Painter",
            "Zoologist"
        ],
        "dislikes": [
            "Pirate"
        ],
        "hates": [
            "Merchant"
        ],
        "weighting": 1.0
    },
    "Nurse": {
        "biome_liked": "Hallow",
        "biome_disliked": "Snow",
        "loves": [
            "Arms Dealer"
        ],
        "likes": [
            "Wizard"
        ],
        "dislikes": [
            "Dryad",
            "Party Girl"
        ],
        "hates": [
            "Zoologist"
        ],
        "weighting": 1.0
    },
    "Tavernkeep": {
        "biome_liked": "Hallow",
        "biome_disliked": "Snow",
        "loves": [
            "Demolitionist"
        ],
        "likes": [
            "Goblin Tinkerer"
        ],
        "dislikes": [
            "Guide"
        ],
        "hates": [
            "Dye Trader"
        ],
        "weighting": 1.0
    },
    "Party Girl": {
        "biome_liked": "Hallow",
        "biome_disliked": "Caverns",
        "loves": [
            "Wizard",
            "Zoologist"
        ],
        "likes": [
            "Stylist"
        ],
        "dislikes": [
            "Merchant"
        ],
        "hates": [
            "Tax Collector"
        ],
        "weighting": 1.0
    },
    "Wizard": {
        "biome_liked": "Hallow",
        "biome_disliked": "Ocean",
        "loves": [
            "Golfer"
        ],
        "likes": [
            "Merchant"
        ],
        "dislikes": [
            "Witch Doctor"
        ],
        "hates": [
            "Cyborg"
        ],
        "weighting": 1.0
    },
    "Demolitionist": {
        "biome_liked": "Caverns",
        "biome_disliked": "Ocean",
        "loves": [
            "Tavernkeep"
        ],
        "likes": [
            "Mechanic"
        ],
        "dislikes": [
            "Arms Dealer",
            "Goblin Tinkerer"
        ],
        "hates": [],
        "weighting": 1.0
    },
    "Goblin Tinkerer": {
        "biome_liked": "Caverns",
        "biome_disliked": "Jungle",
        "loves": [
            "Mechanic"
        ],
        "likes": [
            "Dye Trader"
        ],
        "dislikes": [
            "Clothier"
        ],
        "hates": [
            "Stylist"
        ],
        "weighting": 1.0
    },
    "Clothier": {
        "biome_liked": "Caverns",
        "biome_disliked": "Hallow",
        "loves": [
            "Truffle"
        ],
        "likes": [
            "Tax Collector"
        ],
        "dislikes": [
            "Nurse"
        ],
        "hates": [
            "Mechanic"
        ],
        "weighting": 1.0
    },
    "Dye Trader": {
        "biome_liked": "Desert",
        "biome_disliked": "Forest",
        "loves": [],
        "likes": [
            "Arms Dealer",
            "Painter"
        ],
        "dislikes": [
            "Steampunker"
        ],
        "hates": [
            "Pirate"
        ],
        "weighting": 1.0
    },
    "Arms Dealer": {
        "biome_liked": "Desert",
        "biome_disliked": "Snow",
        "loves": [
            "Nurse"
        ],
        "likes": [
            "Steampunker"
        ],
        "dislikes": [
            "Golfer"
        ],
        "hates": [
            "Demolitionist"
        ],
        "weighting": 1.0
    },
    "Steampunker": {
        "biome_liked": "Desert",
        "biome_disliked": "Jungle",
        "loves": [
            "Cyborg"
        ],
        "likes": [
            "Painter"
        ],
        "dislikes": [
            "Dryad",
            "Wizard",
            "Party Girl"
        ],
        "hates": [],
        "weighting": 1.0
    },
    "Dryad": {
        "biome_liked": "Jungle",
        "biome_disliked": "Desert",
        "loves": [],
        "likes": [
            "Witch Doctor",
            "Truffle"
        ],
        "dislikes": [
            "Angler"
        ],
        "hates": [
            "Golfer"
        ],
        "weighting": 1.0
    },
    "Painter": {
        "biome_liked": "Jungle",
        "biome_disliked": "Forest",
        "loves": [
            "Dryad"
        ],
        "likes": [
            "Party Girl"
        ],
        "dislikes": [
            "Truffle",
            "Cyborg"
        ],
        "hates": [],
        "weighting": 1.0
    },
    "Witch Doctor": {
        "biome_liked": "Jungle",
        "biome_disliked": "Hallow",
        "loves": [],
        "likes": [
            "Dryad",
            "Guide"
        ],
        "dislikes": [
            "Nurse"
        ],
        "hates": [
            "Truffle"
        ],
        "weighting": 1.0
    },
    "Stylist": {
        "biome_liked": "Ocean",
        "biome_disliked": "Snow",
        "loves": [
            "Dye Trader"
        ],
        "likes": [
            "Pirate"
        ],
        "dislikes": [
            "Tavernkeep"
        ],
        "hates": [
            "Goblin Tinkerer"
        ],
        "weighting": 1.0
    },
    "Angler": {
        "biome_liked": "Ocean",
        "biome_disliked": "Desert",
        "loves": [],
        "likes": [
            "Demolitionist",
            "Party Girl",
            "Tax Collector"
        ],
        "dislikes": [],
        "hates": [
            "Tavernkeep"
        ],
        "weighting": 1.0
    },
    "Pirate": {
        "biome_liked": "Ocean",
        "biome_disliked": "Caverns",
        "loves": [
            "Angler"
        ],
        "likes": [
            "Tavernkeep"
        ],
        "dislikes": [
            "Stylist"
        ],
        "hates": [
            "Guide"
        ],
        "weighting": 1.0
    },
    "Mechanic": {
        "biome_liked": "Snow",
        "biome_disliked": "Caverns",
        "loves": [
            "Goblin Tinkerer"
        ],
        "likes": [
            "Cyborg"
        ],
        "dislikes": [
            "Arms Dealer"
        ],
        "hates": [
            "Clothier"
        ],
        "weighting": 1.0
    },
    "Tax Collector": {
        "biome_liked": "Snow",
        "biome_disliked": "Hallow",
        "loves": [
            "Merchant"
        ],
        "likes": [
            "Party Girl"
        ],
        "dislikes": [
            "Demolitionist",
            "Mechanic"
        ],
        "hates": [
            "Santa Claus"
        ],
        "weighting": 1.0
    },
    "Cyborg": {
        "biome_liked": "Snow",
        "biome_disliked": "Jungle",
        "loves": [],
        "likes": [
            "Steampunker",
            "Pirate",
            "Stylist"
        ],
        "dislikes": [
            "Zoologist"
        ],
        "hates": [
            "Wizard"
        ],
        "weighting": 1.0
    },
    "Santa Claus": {
        "biome_loved": "Snow",
        "biome_liked": "",
        "biome_disliked": "",
        "biome_hated": "Desert",
        "loves": [],
        "likes": [],
        "dislikes": [],
        "hates": [
            "Tax Collector"
        ],
        "weighting": 1.0
    },
    "Truffle": {
        "biome_liked": "Mushroom",
        "biome_disliked": "",
        "loves": [
            "Guide"
        ],
        "likes": [
            "Dryad"
        ],
        "dislikes": [
            "Clothier"
        ],
        "hates": [
            "Witch Doctor"
        ],
        "weighting": 1.0
    },
    "Princess": {
        "biome_liked": "",
        "biome_disliked": "",
        "loves": [],
        "likes": [],
        "dislikes": [],
        "hates": [],
        "weighting": 1.0
    },
    "Sea King": {
        "biome_liked": "Ocean",
        "biome_disliked": "Desert",
        "loves": [],
        "likes": [
            "Pirate"
        ],
        "dislikes": [
            "Demolitionist"
        ],
        "hates": [],
        "weighting": 1.0
    },
    "Bandit": {
        "biome_liked": "Desert",
        "biome_disliked": "Jungle",
        "loves": [],
        "likes": [
            "Goblin Tinkerer"
        ],
        "dislikes": [
            "Dryad"
        ],
        "hates": [],
        "weighting": 1.0
    },
    "Drunk Princess": {
        "biome_loved": "Hallow",
        "biome_liked": "Ocean",
        "biome_disliked": "Desert",
        "biome_hated": "Caverns",
        "loves": [
            "Stylist",
            "Zoologist"
        ],
        "likes": [
            "Party Girl",
            "Truffle"
        ],
        "dislikes": [
            "Tavernkeep",
            "Tax Collector"
        ],
        "hates": [
            "Angler",
            "Goblin Tinkerer"
        ],
        "weighting": 1.0
    },
    "Archmage": {
        "biome_liked": "Snow",
        "biome_disliked": "Desert",
        "loves": [],
        "likes": [
            "Wizard"
        ],
        "dislikes": [
            "Cyborg"
        ],
        "hates": [],
        "weighting": 1.0
    },
    "Brimstone Witch": {
        "biome_liked": "Forest",
        "biome_disliked": "",
        "loves": [],
        "likes": [
            "Clothier"
        ],
        "dislikes": [
            "Party Girl"
        ],
        "hates": [],
        "weighting": 1.0
    }
}
