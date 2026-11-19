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
- Quote / callback forms post to `/api/callback` and deliver to **Jangidmohit96@gmail.com** (browser FormSubmit, or Resend when configured). First FormSubmit delivery asks that inbox to confirm once.
- Optional: set `RESEND_API_KEY` (and optionally `RESEND_FROM_EMAIL`) for silent server-side delivery.
