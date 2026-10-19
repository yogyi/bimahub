# Straightline Advisors

A multi-line insurance desk website: motor, non-motor, health, and life, including LIC plans. One advisor story, one callback, and the wording explained before the premium.

This is a working preview. Callback requests are validated and saved to `data/callbacks.ndjson` on the machine running the site. They are not emailed or texted. Replace the phone, email, address, and advisor names before you publish, and connect the form to your own inbox.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:4317](http://127.0.0.1:4317).

```bash
npm run lint
npm run build
```

## What you can click through

- Home: the four covers, how a policy is placed, a year with the desk, the insurer panel, questions, and the callback form
- Motor, non-motor, health, and life (LIC plans called out by name)
- Claims: the first hour for a crash, an admission, and a shop or house
- About and the callback page

Light and dark follow the system theme. A control in the header switches them.
