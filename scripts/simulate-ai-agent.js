"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var articles = [
    {
        title: "Lakers Defeat Celtics 118-102 in Thrilling Matchup",
        summary: "LeBron James leads Lakers to victory with 32 points and 8 assists",
        content: "In a commanding performance at Crypto.com Arena...",
        sport: "basketball",
        teams: ["Lakers", "Celtics"],
        players: ["LeBron James", "Jayson Tatum"],
    },
    {
        title: "Chiefs Advance to AFC Championship",
        summary: "Mahomes throws 3 TDs in playoff victory over Bills",
        content: "The Kansas City Chiefs secured their spot...",
        sport: "football",
        teams: ["Chiefs", "Bills"],
        players: ["Patrick Mahomes", "Josh Allen"],
    },
    {
        title: "Warriors Secure Win Against Suns",
        summary: "Curry shines with 9 threes and 35 points",
        content: "Golden State dominated from the start...",
        sport: "basketball",
        teams: ["Warriors", "Suns"],
        players: ["Stephen Curry", "Devin Booker"],
    },
    {
        title: "Eagles Crush Giants in Divisional Round",
        summary: "Hurts accounts for 4 TDs in dominant performance",
        content: "Philadelphia cruised past New York with a stellar offense...",
        sport: "football",
        teams: ["Eagles", "Giants"],
        players: ["Jalen Hurts", "Saquon Barkley"],
    },
    {
        title: "Yankees Top Red Sox in Classic Rivalry Game",
        summary: "Judge belts 2 homers in a slugfest at Yankee Stadium",
        content: "A thrilling night in the Bronx saw New York take control...",
        sport: "baseball",
        teams: ["Yankees", "Red Sox"],
        players: ["Aaron Judge", "Rafael Devers"],
    },
];
// Function to publish article to Strapi
function publishArticle(article) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post("http://localhost:1337/api/articles", // Replace with your API endpoint
                        {
                            data: __assign(__assign({}, article), { publishedAt: new Date().toISOString() }),
                        }, {
                            headers: {
                                Authorization: "Bearer ".concat(process.env.STRAPI_API_TOKEN),
                                "Content-Type": "application/json",
                            },
                        })];
                case 1:
                    response = _a.sent();
                    console.log("\u2705 Published: ".concat(article.title));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("\u274C Failed to publish \"".concat(article.title, "\":"), error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Publish articles every 30 seconds
articles.forEach(function (article, index) {
    setTimeout(function () {
        console.log("\u23F3 Publishing article #".concat(index + 1, "..."));
        publishArticle(article);
    }, index * 30000); // 30s between each
});
// Publish articles every 30 seconds to test automation
// articles.forEach((article, index) => {
//   setTimeout(() => publishArticle(article), index * 30000);
// });
