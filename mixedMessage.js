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
    },
    Rabbit: {
        Fire: {
            character: "Broad-minded, smart, and flexible, with unique views",
            advice: "When you quit, you fail",
        },
        Water: {
            character: "Gentle, amicable, able to adjust readily to different conditions, but with a weak mindset and principles",
            advice: "Trust your instincts. What good is intuition if you let second-guessing drown it out? The worst enemy of success is self-doubt.",
        },
        Earth: {
            character: "Frank, straightforward, ambitious, hard-working, but slightly reserved",
            advice: " Trust your instincts",
        },
        Air: {
            character: "Clever, quick-witted, selfish, lively in appearance, but shrewd at heart",
            advice: "Learn something new every day",
        },
        Metal: {
            character: "Kind-hearted, conservative,lively and enthusiastic",
            advice: "Make what is valuable important. Instead of thinking about what is profitable, think about what is valuable. Invest in others and you will grow your portfolio.",
        },
    },
    Dragon: {
        Fire: {
            character: "Smart and easygoing, agile and flexible",
            advice: "Believe in yourself",
        },
        Water: {
            character: "Persevering, farsighted, and vigorous",
            advice: "Everyone can teach you something",
        },
        Earth: {
            character: "Smart, ambitious, and hardworking",
            advice: " Give back before you're ready",
        },
        Air: {
            character: "Introverted, less enthusiastic, and lacking in good relationships",
            advice: "Be grateful for what you don't have",
        },
        Metal: {
            character: "Natural and straightforward, unpredictable with continually changing emotions",
            advice: "Actions reveal your beliefs",
        },
    },
    Snake: {
        Fire: {
            character: "Smart, insightful, communicative, active, and fond of the limelight",
            advice: "Speak with people older than you",
        },
        Water: {
            character: "Clever, creative, lively, and communicative, but sentimental",
            advice: "Write about your life",
        },
        Earth: {
            character: "Calm, with strong self-control, but not steadfast and diligent enough in work",
            advice: "Say no to almost everything",
        },
        Air: {
            character: "Orderly, intelligent, with a gift for appreciating the knowing celebrities and a refined taste",
            advice: "Say sorry more often",
        },
        Metal: {
            character: "Determined, courageous, confident, and able: a born leader",
            advice: "Bad experiences often become good stories",
        },
    },
    Horse: {
        Fire: {
            character: "smart, charismatic, lively, overflowing with enthusiasm, and have the potential to lead the way concerning fashion trends.",
            advice: "Choose optimism",
        },
        Water: {
            character: "irritable and sentimental in life, but their friends still show them the utmost solicitude.",
            advice: "Follow your energy",
        },
        Earth: {
            character: "optimistic, kind-hearted, righteous, and ready to help their friends, therefore, they have a lot of friends in work.",
            advice: "Go for it",
        },
        Air: {
            character: "greatly admired due to their insightful analyses on issues, and they often read the minds of others.",
            advice: "Read books",
        },
        Metal: {
            character: "kind, straightforward, and ready to help others",
            advice: "Go for a walk",
        },
    },
    Goat: {
        Fire: {
            character: "amicable, frank, and honest, always making everything clean and tidy, and are seldom disliked by others",
            advice: "Slow down",
        },
        Water: {
            character: "amicable and brimming with a strong sense of responsibility",
            advice: "Progress is motivating",
        },
        Earth: {
            character: "righteous, honest, straightforward, and will never harm their friends.",
            advice: "Be charitable in your views of others",
        },
        Air: {
            character: "gentle, compassionate, and ready to help others",
            advice: "Don't wait for the money",
        },
        Metal: {
            character: "ambitious and kind-hearted with a strong sense of responsibility in work.",
            advice: "Progress isn't linear",
        },
    },
    Monkey: {
        Fire: {
            character: "Ambitious and adventurous, but irritable",
            advice: "Inner peace > external achievement",
        },
        Water: {
            character: "Smart, quick-witted, fond of being in the limelight, but haughty",
            advice: "Be around people who want the best for you",
        },
        Earth: {
            character: "Frank, optimistic, and fearless",
            advice: "Stop overthinking",
        },
        Air: {
            character: "Always ready to help others; compassionate, with strong self-esteem, but stubborn",
            advice: "Focus on today",
        },
        Metal: {
            character: "Smart, quick-witted, and confident, but also irritable and stubborn.",
            advice: "Choose your response",
        },
    }
};

console.log(chineseZodiacGenerator());