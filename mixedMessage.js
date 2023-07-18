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
            character: "cheerful and peaceful person who is very polite and have many desirable qualities that are adored by people in life.",
            advice: "Don't try to impress everyone.",
        }

    }
};

console.log(chineseZodiacGenerator());