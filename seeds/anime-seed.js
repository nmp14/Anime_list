const { Anime } = require("../models");

const animeList = [
    {
        jTitle: "Boku no Hero Academia Season 5",
        eTitle: "My Hero Academy Season 5",
        description: `The fifth season of Boku no Hero Academia. The rivalry between Class 1-A and Class 1-B heats up in a joint training battle. 
        Eager to be a part of the hero course, brainwashing buff Shinso is tasked with competing on both sides. 
        But as each team faces their own weaknesses and discovers new strengths, this showdown might just become a toss-up.`
    },
    {
        jTitle: "Ijiranaide, Nagatoro-san",
        eTitle: "A girl in a lower grade just made me cry!",
        description: `One day, Senpai visits the library after school and becomes the target of a super sadistic junior! The name of the girl who teases, torments, and tantalizes Senpai is "Nagatoro!" 
        She's annoying yet adorable. It's painful, but you still want to be by her side. This is a story about an extremely sadistic and temperamental girl and you'll feel something awaken inside of you.`
    },
    {
        jTitle: "Fumetsu no Anata e",
        eTitle: "To Your Eternity",
        description: `In the beginning, an "orb" is cast unto Earth. "It" can do two things: change into the form of the thing that stimulates "it"; and come back to life after death. "It" morphs from orb to rock, then to wolf, and finally to boy, but roams about like a newborn who knows nothing. As a boy, "it" becomes Fushi.

        Through encounters with human kindness, Fushi not only gains survival skills, but grows as a "person". But his journey is darkened by the inexplicable and destructive enemy Nokker, as well as cruel partings with the people he loves.`
    },
    {
        jTitle: "Tokyo Revengers",
        eTitle: "Tokyo Revengers",
        description: `Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life. He finds out that the only girlfriend he ever had in his life that he dated in middle school, Hinata Tachibana, had been killed by the ruthless Tokyo Manji Gang.

        The day after hearing about her death, he's standing on the station platform and ends up being pushed over onto the tracks by a herd of people. He closes his eyes thinking he's about to die, but when he opens his eyes back up, he somehow had gone back in time 12 years.
        
        Now that he's back living the best days of his life, Takemichi decides to get revenge on his life by saving his girlfriend and changing himself that he'd been running away from.`
    },
    {
        jTitle: "Hige wo Soru. Soshite Joshikousei wo Hirou.",
        eTitle: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
        description: `On his way home from drinking his sorrows away after being rejected by his crush, the 26 year old salaryman, Yoshida, finds a high school girl named Sayu sitting on the side of the road. 
        Yoshida is completely drunk out of his mind and ends up letting Sayu stay at his place overnight. Not having the heart to put Sayu out on the streets since she ran away from home, Yoshida allows her to stay at his place... And so began the awkward, irritable, and slightly heartwarming relationship between a runaway high school girl and a salaryman living together.`
    },
    {
        jTitle: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω",
        eTitle: "How NOT to Summon a Demon Lord Ω",
        description: `The second season of Isekai Maou to Shoukan Shoujo no Dorei Majutsu.

        Diablo is back! You know…the Demon Lord from another world? Traveling through the woods with Rem and Shera, they encounter a lone girl in tatters, pursued by a powerful Paladin.
        
        You know what that means—Diablo will have to try and hide his lack of social skills once again (and come to her rescue, of course). Let the enchanting adventures continue!`
    }
]

const seedAnime = async () => {
    await Anime.deleteMany({});

    for (const obj of animeList) {
        const newAnime = new Anime({ ...obj });

        await newAnime.save();
    }
}

module.exports = seedAnime;