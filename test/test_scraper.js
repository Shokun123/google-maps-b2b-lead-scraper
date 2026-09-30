import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Google Maps B2B Lead Extractor - Configuration Tests', async (t) => {
  await t.test('actor.json is valid and conforms to Apify v2', () => {
    const actorJsonPath = path.join(__dirname, '..', '.actor', 'actor.json');
    assert.ok(fs.existsSync(actorJsonPath), 'actor.json should exist');
    const content = JSON.parse(fs.readFileSync(actorJsonPath, 'utf-8'));
    assert.ok(content.actorSpecification >= 1, 'actorSpecification should be >= 1');
    assert.equal(content.name, 'google-maps-b2b-lead-scraper');
  });

  await t.test('input_schema.json has valid properties and required fields', () => {
    const inputSchemaPath = path.join(__dirname, '..', '.actor', 'input_schema.json');
    assert.ok(fs.existsSync(inputSchemaPath), 'input_schema.json should exist');
    const schema = JSON.parse(fs.readFileSync(inputSchemaPath, 'utf-8'));
    assert.ok(schema.properties.searchQuery, 'Should have searchQuery property');
    assert.ok(schema.properties.maxResults, 'Should have maxResults property');
  });

  await t.test('sample CSV and JSON files are properly generated', () => {
    const samplesDir = path.join(__dirname, '..', 'samples');
    assert.ok(fs.existsSync(samplesDir), 'samples directory should exist');
    const files = fs.readdirSync(samplesDir);
    assert.ok(files.some(f => f.endsWith('.csv')), 'At least one CSV sample should exist');
    assert.ok(files.some(f => f.endsWith('.json')), 'At least one JSON sample should exist');
  });
});
