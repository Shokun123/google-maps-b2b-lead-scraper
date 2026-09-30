import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const samplesDir = path.join(__dirname, '..', 'samples');

if (!fs.existsSync(samplesDir)) {
  fs.mkdirSync(samplesDir, { recursive: true });
}

function generateDataset(niche, location, filenamePrefix) {
  const sampleNames = [
    `Apex ${niche} Solutions`,
    `Vanguard ${niche} Group`,
    `Summit ${niche} Partners`,
    `Elevate ${niche} & Growth`,
    `Nexus ${niche} Studio`,
    `Beacon ${niche} Advisors`,
    `Quantum ${niche} Labs`,
    `Horizon ${niche} Co`,
    `Pinnacle ${niche} Experts`,
    `BlueWave ${niche} Collective`,
    `Catalyst ${niche} Pro`,
    `Prime ${niche} Systems`,
    `Velocity ${niche} Hub`,
    `TrueNorth ${niche} Services`,
    `Stratosphere ${niche} Co.`,
    `Titan ${niche} Group`,
    `Ascent ${niche} Specialists`,
    `Pulse ${niche} Agency`,
    `Keystone ${niche} Partners`,
    `Vertex ${niche} Network`
  ];

  const leads = [];
  const areaCode = location.includes('Miami') ? '305' : location.includes('Austin') ? '512' : '212';

  for (let i = 0; i < sampleNames.length; i++) {
    const name = sampleNames[i];
    const cleanDomain = name.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
    const streetNum = 100 + (i * 25);
    const street = location.includes('Miami') ? 'Brickell Ave' : location.includes('Austin') ? 'Congress Ave' : 'Madison Ave';

    leads.push({
      placeId: `ChIJ_${Buffer.from(name + location).toString('base64').slice(0, 16)}`,
      title: name,
      category: niche,
      address: `${streetNum} ${street}, ${location}`,
      city: location,
      phone: `+1 (${areaCode}) ${500 + i}-${1000 + (i * 137)}`,
      website: `https://www.${cleanDomain}`,
      email: `contact@${cleanDomain}`,
      rating: parseFloat((4.4 + (Math.random() * 0.6)).toFixed(1)),
      reviewCount: Math.floor(25 + (Math.random() * 210)),
      googleMapsUrl: `https://maps.google.com/?q=${encodeURIComponent(name + ' ' + location)}`,
      linkedin: `https://linkedin.com/company/${cleanDomain.replace('.com', '')}`,
      instagram: `https://instagram.com/${cleanDomain.replace('.com', '')}`,
      facebook: `https://facebook.com/${cleanDomain.replace('.com', '')}`,
      verifiedAt: new Date().toISOString()
    });
  }

  // 1. Write JSON
  const jsonPath = path.join(samplesDir, `${filenamePrefix}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(leads, null, 2), 'utf-8');

  // 2. Write CSV with Binance Pay Header
  const headers = [
    'Title', 'Category', 'Address', 'City', 'Phone', 'Email', 'Website',
    'Rating', 'Reviews', 'GoogleMapsUrl', 'LinkedIn', 'Instagram', 'Facebook'
  ];

  const csvRows = [
    `# Google Maps B2B Lead Extractor Sample Dataset`,
    `# Full 10,000+ lead databases & custom scraping available via Binance Pay UID: 1049392123 ($19 USDT)`,
    headers.join(',')
  ];

  for (const lead of leads) {
    const row = [
      `"${lead.title}"`,
      `"${lead.category}"`,
      `"${lead.address}"`,
      `"${lead.city}"`,
      `"${lead.phone}"`,
      `"${lead.email}"`,
      `"${lead.website}"`,
      lead.rating,
      lead.reviewCount,
      `"${lead.googleMapsUrl}"`,
      `"${lead.linkedin}"`,
      `"${lead.instagram}"`,
      `"${lead.facebook}"`
    ];
    csvRows.push(row.join(','));
  }

  const csvPath = path.join(samplesDir, `${filenamePrefix}.csv`);
  fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf-8');

  console.log(`[✓] Created: ${filenamePrefix}.csv & ${filenamePrefix}.json (${leads.length} records)`);
}

console.log('Generating free high-demand sample lead packs...');
generateDataset('Marketing Agencies', 'Miami, Florida', 'miami_marketing_agencies_sample');
generateDataset('Real Estate Brokers', 'Austin, Texas', 'austin_real_estate_sample');
generateDataset('Dental Clinics', 'New York, NY', 'new_york_dental_clinics_sample');
console.log('All sample packs generated successfully in samples/');
