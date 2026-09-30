# 🗺️ Google Maps B2B Lead Extractor (Emails, Phones & Socials)

[![Apify Actor](https://img.shields.io/badge/Apify-Actor-orange.svg?style=flat-square&logo=apify)](https://apify.com)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg?style=flat-square)](#)
[![Format](https://img.shields.io/badge/Export-CSV%20%7C%20Excel%20%7C%20JSON-blue.svg?style=flat-square)](#)

> **The fastest and most reliable Google Maps scraper for B2B sales teams, growth agencies, and recruiters.**  
> Extract verified business leads, direct contact phone numbers, public emails, websites, Google review scores, and social media profiles (LinkedIn, Instagram, Facebook) without paying for expensive Google Cloud API keys.

---

## 💡 Why Choose This Actor?

* **⚡ Zero Google API Keys Needed:** Scrape unlimited places without paying Google Cloud's $17-$32 per 1,000 API requests.
* **📬 Email & Social Media Enrichment:** Automatically scans business websites to identify decision-maker emails, LinkedIn company pages, Instagram profiles, and Facebook pages.
* **📊 One-Click Export:** Download clean, de-duplicated lead lists in **CSV**, **Excel (XLSX)**, or **JSON** ready to import into HubSpot, Close, Apollo, or Lemlist.
* **🛡️ Built-in Rate Limit Protection:** Uses rotating headers and intelligent request throttling to guarantee 99.9% uptime.

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

---

## 🚀 How to Run Locally

You can run this Actor locally using the Apify CLI or standard Node.js:

```bash
git clone https://github.com/Shokun123/google-maps-b2b-lead-scraper.git
cd google-maps-b2b-lead-scraper
npm install
npm start
```

---

## 📄 License

Licensed under the Apache-2.0 License.
