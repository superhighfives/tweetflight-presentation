# Tweetflight presentation

The slides from my talk at MelbJS on April 10, 2013, about making [Tweetflight](https://github.com/superhighfives/tweetflight-archive), the Twitter-powered music video for "Preflight Nerves" by my band Brightly.

Status: archived. Made in 2013, not maintained.

Live: https://superhighfives.github.io/tweetflight-presentation/

## Running it

It's a built static site, so open `index.html` in a browser or serve the folder with any static server.

## How it works

- `index.html` holds the slides, run by [Bespoke.js](https://github.com/bespokejs/bespoke) and jQuery from `scripts/vendor/`.
- `styles/main.sass` is the source for the compiled `styles/c36bd948.main.css`. The hashed file names come from the original build, which isn't in this repo.
- `images/` and `video/` hold the GIFs and the clip shown in the talk.
