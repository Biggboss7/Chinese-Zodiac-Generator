/* 
    Project Topics : Chinese Zodiac Astrology
        1. Abstract
            Chinese Zodiac consists of 12 animals and 5 elements. Every animal and element has its own personal traits. By knowing your zodiac, you will have more insight about your true self hence be able to control your future success in career, love and life.
        
        2. Purpose
            In this project, everytime users start the program, they will be given a random chinese zodiac sign as well as the element. Base on this zodiac, users will know about their personal trait and will be given a random piece of advice to make them feel better.
*/

// Chinese Zodiac Generator
function chineseZodiacGenerator() {
    const zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    return zodiac[Math.floor(Math.random() * 12)];
};

// Element Generator
function elementGenerator() {
    const element = ["Fire", "Water", "Earth", "Air", "Metal"];
    return element[Math.floor(Math.random() * 5)];
}

const astrologyDictionary = {
    Rat: {
        Fire: {
            character: "energetic, and are brave enough to face any difficulty and danger",
            advice: "Don't try so hard to get something that doesn't belong to you, because the best things come when you least expect them to.",
        },
        Water: {
            character: "short-sighted, selfish, narrow-minded, impersonal, but practical",
            advice: "In order to get, you have to give",
        },
        Earth: {
            character: "brave, competitive, unpredictable, and confident.",
            advice: "Take time to know yourself",
        },
        Air: {
            character: "cheerful and peaceful person who is very polite and have many desirable qualities that are adored by people in life.",
            advice: "Luck comes from hard work",
        },
        Metal: {
            character: "humorous by nature and love to indulge in healthy debates.",
            advice: "Don't try to impress everyone.",
        },
    },
    Ox: {
        Fire: {
            character: "hot tempered, and they are easily influenced by others' words and actions",
            advice: "Listen to learn. Learn how to listen. You can't learn anything when you're talking",
        },
        Water: {
            character: "peace lovers, full of sense of justice, so they are always modest and gentle to people",
            advice: "Life's good, but it's not fair. The delusion that life's supposed to be fair is the source of much unhappiness",
        },
        Earth: {
            character: "diligent and courageous people seeing the affect from the Earth sign of the Chinese Five Elements",
            advice: "No task is beneath you. Don't put yourself above anyone or anything; work hard in silence and let success make the noise",
        },
        Air: {
            character: "upright, merciful, easygoing and generous characters",
            advice: "You can't always get what you want. But, as the song says, if you try you may find you get what you need",
        },
        Metal: {
            character: "dynamic, responsible and hardworking. In front of obstacles, they are courageous and persistent",
            advice: "Don't make decisions when you are angry",
        },
    },
    Tiger: {
        Fire: {
            character: "very independent in life and never yield before difficulties or worldly issues",
            advice: "Don't worry what other people think",
        },
        Water: {
            character: "professional in the fields of art and handicrafts. You have a strong sense of self-esteem and seldom accept advice from others.",
            advice: "Use adversity as an opportunity. Every loss leads to an opportunity, and every adversity leads to new possibilities.",
        },
        Earth: {
            character: "are factual and realistic people with unwavering beliefs who only believe what they see and, as a result, they have the potential to seek the truth.",
            advice: "Do what is right, not what is easy",
        },
        Air: {
            character: "cooperative and communicative in work, and they also like to work with others to achieve common goals.",
            advice: "Dreams remain dreams until you take action. Without action, an idea is just a dream",
        },
        Metal: {
            character: "fascinated with power and they will achieve great success in politics if they work hard enough",
            advice: "Treat others the way you want to be treated",
        },
    }
};

console.log(chineseZodiacGenerator());