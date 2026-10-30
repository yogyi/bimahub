# BimaHub

Indian insurance comparison website for motor, health, life including LIC, claims assistance, and quote requests. UI follows the uploaded Stitch design pack (Sovereign Trust tokens, BimaHub branding).

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Routes

- `/` Home comparison hub
- `/motor` Car and bike quotes
- `/health` Family and individual health
- `/life` LIC and term / savings
- `/claims` Claim tracking and support
- `/contact` Quote / callback desk
- `/about` About the desk

## Notes

- Underwriter logos in the design are shown as **example.com** placeholders until real partner marks are supplied.
- Quote form posts to `/api/callback` and can fall back to a local preview response.
