import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const articles = [
  {
    title: "Lakers Defeat Celtics 118-102 in Thrilling Matchup",
    summary:
      "LeBron James leads Lakers to victory with 32 points and 8 assists",
    content: "In a commanding performance at Crypto.com Arena...",
    sport: "basketball",
  },
  {
    title: "tatics Triumph Over Giants in NFC Championship",
    summary: "Mahomes throws 3 TDs in playoff victory over Bills",
    content: "The Kansas City Chiefs secured their spot...",
    sport: "football",
    // teams: ["Chiefs", "Bills"],
    // players: ["Patrick Mahomes", "Josh Allen"],
  },
  {
    title: "Warriors Secure Win Against Suns",
    summary: "Curry shines with 9 threes and 35 points",
    content: "Golden State dominated from the start...",
    sport: "basketball",
    // teams: ["Warriors", "Suns"],
    // players: ["Stephen Curry", "Devin Booker"],
  },
  {
    title: "Eagles Crush Giants in Divisional Round",
    summary: "Hurts accounts for 4 TDs in dominant performance",
    content: "Philadelphia cruised past New York with a stellar offense...",
    sport: "football",
    // teams: ["Eagles", "Giants"],
    // players: ["Jalen Hurts", "Saquon Barkley"],
  },
  {
    title: "Yankees Top Red Sox in Classic Rivalry Game",
    summary: "Judge belts 2 homers in a slugfest at Yankee Stadium",
    content: "A thrilling night in the Bronx saw New York take control...",
    sport: "soccer",
    // teams: ["Yankees", "Red Sox"],
    // players: ["Aaron Judge", "Rafael Devers"],
  },
];

// Function to publish article to Strapi
async function publishArticle(article: any) {
  try {
    const response = await axios.post(
      "http://localhost:1337/api/articles", // Replace with your API endpoint
      {
        data: {
          ...article,
          authorType: "AI",
          gameDate: new Date().toISOString(),
          publishedAt: new Date().toISOString(), // Marks the article as published
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`✅ Published: ${article.title}`);
  } catch (error) {
    const details = error?.response?.data?.error?.details?.errors;
    console.error(`❌ Failed to publish "${article.title}":`);
    if (details) {
      details.forEach((err) => {
        console.error(`→ [${err.path.join(".")}] ${err.message}`);
      });
    } else {
      console.error(error?.response?.data || error.message);
    }
  }
}

// Publish articles every 30 seconds
articles.forEach((article, index) => {
  setTimeout(() => {
    console.log(`⏳ Publishing article #${index + 1}...`);
    publishArticle(article);
  }, index * 30000); // 30s between each
});

// Publish articles every 30 seconds to test automation
// articles.forEach((article, index) => {
//   setTimeout(() => publishArticle(article), index * 30000);
// });
