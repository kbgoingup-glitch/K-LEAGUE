# K League in Ink

An English-language weekly guide to K League 1, designed with the restraint, texture and negative space of Korean ink painting and calligraphy.

Live site: <https://kbgoingup-glitch.github.io/K-LEAGUE/>

## What is included

- Current K League 1 table
- Latest match reviews with scorers, assists and editorial MOM selections
- Next-round fixtures with a featured match story
- Top-10 scorers and assist providers with player imagery
- Responsive, accessible, build-free HTML/CSS/JS
- Monday 09:00 KST GitHub Actions verification run

## Local preview

```bash
python -m http.server 4173
```

Open `http://localhost:4173`.

## Weekly editorial update

The scheduled workflow verifies the official K League record endpoints and updates the edition stamp. Match reviews, MOM choices and story notes require editorial judgment; update the arrays in `app.js` after checking official match records.

Data sources: [K League official](https://www.kleague.com/) and linked match records. This is an independent fan-facing guide and is not affiliated with the Korea Professional Football League.
