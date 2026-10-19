# Bima Hub

An Indian insurance marketplace-style website for comparing and requesting quotes on motor, health, life including LIC, and shop or home cover. Homepage layout is inspired by popular Indian insurance portals: product icon hub, trust strip, calculators, advantage band, reviews, partners, and a get-a-quote desk.

This is a working preview. Quote requests are validated and saved to `data/callbacks.ndjson`. They are not emailed. The premium calculator shows planning ranges only. Replace phone, email, and address before you publish.

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:4317](http://127.0.0.1:4317)

```bash
npm run lint
npm run build
```

## Homepage sections

- Product tiles: term, health, car, bike, LIC, shop and home, top-up, pension, commercial, calculators
- Trust strip and popular plans
- Motor / health / term premium calculator
- Bima Hub advantage, reviews, insurer partners
- Help desk + free quote form

Detail pages for each cover line, claims, about, and contact remain available.
