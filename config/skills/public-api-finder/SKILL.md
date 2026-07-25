---
name: public-api-finder
description: Search, discover, and integrate 1,602+ free public APIs across 52 categories (Crypto, Weather, Finance, Geocoding, Music, News, AI, Books, Sports, etc.).
---

# Public API Finder & Integration Skill

This skill allows Antigravity to instantly query, discover, and integrate **1,602+ free public APIs** across 52 categories without requiring external web searches or paid services.

## 🎯 Categories Covered (52 Total)
- **Animals & Nature:** AdoptAPet, Cat Facts, Dog API, MeowFacts.
- **Anime & Gaming:** AniList, Jikan (MyAnimeList), PokeAPI, OpenTDB.
- **Blockchain & Cryptocurrency:** CoinGecko, CoinCap, Binance, BlockFi.
- **Business & Finance:** ExchangeRatesAPI, AlphaVantage, FinancialModelingPrep.
- **Development & Cloud:** GitHub API, GitLab API, JSONPlaceholder, ReqRes.
- **Geocoding & Maps:** OpenStreetMap, Nominatim, IP-API, RestCountries.
- **News, Weather & Open Data:** OpenWeatherMap, WeatherAPI, NASA Open APIs, US Census.
- **Security & Anti-Malware:** HaveIBeenPwned, VirusTotal, Shodan (Public).

## 🚀 Query Tool Usage

To search for free APIs by keyword or category, execute the query tool in terminal:

```bash
python C:\Users\Administrator\.gemini\antigravity\scratch\public-apis\query_public_apis.py weather
python C:\Users\Administrator\.gemini\antigravity\scratch\public-apis\query_public_apis.py crypto --no-auth
python C:\Users\Administrator\.gemini\antigravity\scratch\public-apis\query_public_apis.py --category Finance
```

## 🛠️ Integration Guidance
- **No-Auth APIs:** Prioritize APIs with `auth: "No Auth"` or `"No"` for rapid prototyping without needing API keys.
- **CORS Support:** Ensure `CORS: "Yes"` when making client-side browser `fetch()` requests from React/Next.js frontend applications.
- **HTTPS Enforcement:** Only use APIs with `HTTPS: "Yes"` to ensure secure data transfer in production.
