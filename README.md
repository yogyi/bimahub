# Bima Hub

An Indian insurance landing site for motor, health, life including LIC, and shop or home cover. Inspired by premium insurance LPs: hero quote form, cover grid, premium calculator, reviews, FAQ, and a full get-a-quote section.

This is a working preview. Quote requests are validated and saved to `data/callbacks.ndjson` on the machine running the site. They are not emailed or texted. The calculator shows planning ranges only. Replace phone, email, and address before you publish, and connect the form to your own inbox.

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

- Home: hero quote form, covers, insurance premium calculator, about, reviews, FAQ, and get-a-quote panel
- Motor, health, life (LIC), shop and home detail pages
- Claims and about
- Contact quote form

Light and dark follow the system theme. A control in the header switches them.
