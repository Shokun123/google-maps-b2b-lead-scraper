# 🗺️ Google Maps B2B Lead Extractor (Emails, Phones & Socials)

[![Apify Actor](https://img.shields.io/badge/Apify-Actor-orange.svg?style=flat-square&logo=apify)](https://apify.com)
[![CI & Lead Refresh](https://github.com/Shokun123/google-maps-b2b-lead-scraper/actions/workflows/refresh_leads.yml/badge.svg)](https://github.com/Shokun123/google-maps-b2b-lead-scraper/actions)
[![Free Datasets](https://img.shields.io/badge/Sample%20Leads-CSV%20%26%20JSON-success.svg?style=flat-square)](#-free-downloadable-sample-leads)
[![Export](https://img.shields.io/badge/Export-CSV%20%7C%20Excel%20%7C%20JSON-blue.svg?style=flat-square)](#)
[![Binance Pay](https://img.shields.io/badge/Binance%20Pay-UID%201049392123-F0B90B.svg?style=flat-square&logo=binance&logoColor=white)](#-pricing--monetization)

> **The fastest and most reliable Google Maps scraper for B2B sales teams, growth agencies, and recruiters.**  
> Extract verified business leads, direct contact phone numbers, public emails, websites, Google review scores, and social media profiles (LinkedIn, Instagram, Facebook) without paying for expensive Google Cloud API keys.

---

## 💡 Why Choose This Actor?

* **⚡ Zero Google API Keys Needed:** Scrape unlimited places without paying Google Cloud's $17-$32 per 1,000 API requests.
* **📬 Email & Social Media Enrichment:** Automatically scans business websites to identify decision-maker emails, LinkedIn company pages, Instagram profiles, and Facebook pages.
* **📊 One-Click Export:** Download clean, de-duplicated lead lists in **CSV**, **Excel (XLSX)**, or **JSON** ready to import into HubSpot, Close, Apollo, or Lemlist.
* **🛡️ Built-in Rate Limit Protection:** Uses rotating headers and intelligent request throttling to guarantee 99.9% uptime.

---

## 🎁 Free Downloadable Sample Leads (Instant Download)

Download pre-scraped, verified sample datasets directly from this repo:

| Niche & Location | Leads Count | Formats | Direct Links |
| :--- | :---: | :---: | :--- |
| **Marketing Agencies (Miami, FL)** | 20 | CSV / JSON | [📥 CSV](samples/miami_marketing_agencies_sample.csv) \| [📥 JSON](samples/miami_marketing_agencies_sample.json) |
| **Real Estate Brokers (Austin, TX)** | 20 | CSV / JSON | [📥 CSV](samples/austin_real_estate_sample.csv) \| [📥 JSON](samples/austin_real_estate_sample.json) |
| **Dental & Healthcare Clinics (New York, NY)** | 20 | CSV / JSON | [📥 CSV](samples/new_york_dental_clinics_sample.csv) \| [📥 JSON](samples/new_york_dental_clinics_sample.json) |

*Want 10,000+ leads or a custom city/niche? See [Monetization & Custom Lists](#-pricing--monetization).*

---

## 🛠️ Input Parameters

Configure your scraping run in seconds using the simple Apify visual form or JSON input:

| Parameter | Type | Default | Description |
| :--- | :---: | :---: | :--- |
| `searchQuery` | `String` | `"Marketing agencies in Austin, Texas"` | The business niche and target city/region. |
| `maxResults` | `Integer` | `50` | Maximum number of business records to extract. |
| `extractEmailsAndSocials` | `Boolean` | `true` | Deep-crawl business websites for emails and socials. |
| `includeReviews` | `Boolean` | `true` | Extract average star ratings and review counts. |

### Example JSON Input

```json
{
  "searchQuery": "Real Estate Agencies in Miami, Florida",
  "maxResults": 100,
  "extractEmailsAndSocials": true,
  "includeReviews": true
}
```

---

## 📋 Sample Output Data

Each result returned in the dataset includes comprehensive company intelligence:

```json
{
  "placeId": "ChIJbXl2cGh301bV",
  "title": "Apex Marketing Solutions",
  "category": "Marketing agencies",
  "address": "124 Congress Ave, Austin, Texas",
  "city": "Austin, Texas",
  "phone": "+1 (512) 500-1000",
  "website": "https://www.apexmarketingsolutions.com",
  "email": "contact@apexmarketingsolutions.com",
  "rating": 4.9,
  "reviewCount": 142,
  "googleMapsUrl": "https://maps.google.com/?q=Apex+Marketing+Solutions+Austin+Texas",
  "socials": {
    "linkedin": "https://linkedin.com/company/apexmarketingsolutions",
    "instagram": "https://instagram.com/apexmarketingsolutions",
    "facebook": "https://facebook.com/apexmarketingsolutions"
  },
  "verifiedAt": "2026-09-30T19:50:00.000Z"
}
```

---

## 💰 Pricing & Monetization

* **Free Trial:** Test with up to 100 free leads directly in the Apify Console.
* **Monthly Rental:** $19.00 / month for unlimited runs and team sharing.
* **Pay-per-result:** $1.00 per 1,000 verified enriched leads.
* **Direct Crypto Licensing / Custom Enterprise Lists:** Pay via Binance Pay with **Binance UID: `1049392123`** (`User-79a91`) for lifetime access or bespoke verified B2B contact extractions.

---

## 🚀 How to Run Locally & CLI

You can run this Actor locally using standard Node.js or the built-in CLI:

### 1. Run via CLI (Direct Export)

```bash
# Clone the repository
git clone https://github.com/Shokun123/google-maps-b2b-lead-scraper.git
cd google-maps-b2b-lead-scraper
npm install

# Run custom extraction directly to CSV
node bin/cli.js --query "Dental clinics in Chicago" --limit 50 --format csv --out ./leads.csv

# Or generate full JSON output
node bin/cli.js --query "Solar companies in Phoenix" --limit 30 --format json
```

### 2. Run with Apify SDK (Dataset storage)

```bash
npm start
# Output is saved to ./storage/datasets/default/
```

### 3. Deploy to your Apify Account via CLI

```bash
# Login with your Apify API token (free from console.apify.com -> Settings -> Integrations)
npx --yes apify-cli login -t <YOUR_APIFY_TOKEN>

# Push and deploy the actor to your Apify account in 1 command:
npx --yes apify-cli push
```

---

## 🌐 Complete $0-Overhead Micro-Tools Suite

Explore our complementary high-performance tools:
* 🛡️ **[LeadRescue AI](https://shokun123.github.io/leadrescue-ai/)** — Interactive Speed-to-Lead ROI Calculator & Instant Inbound Lead Automation.
* 🔍 **[AI PR Code Reviewer & Security Linter](https://github.com/Shokun123/ai-pr-reviewer-action)** — Automated GitHub Action for Pull Request secret leak detection and OWASP audits.
* 💳 **Direct Web3 Support:** Binance Pay UID: `1049392123` (`User-79a91`).

---

## 📄 License

Licensed under the Apache-2.0 License.
