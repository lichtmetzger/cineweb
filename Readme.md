# Cineweb

An alternative frontend for booking tickets at Cinestar movie theatres.

## See it in action here: <a href="https://cs.lichtmetzger.de">cs.lichtmetzger.de</a>

## How to build
```
npm i
npm run build
```

And then you can just open the dist/index.html in a browser - or run `npm run serve` and open up <a href="http://localhost:9000">localhost:9000</a>.

## Wishlist / TODO

Whenever I find the time, I still need to tackle these things:

- Improve error handling
- Sort movies by some criteria
- Search movies
- Sort showtimes
- Strip down titles
  - Sometimes Cinestar uses titles like "Am xx.xx.xx live aus" which messes up the sorting
- Display rooms if possible
  - Haven't found a way yet to map the IDs to actual room names
- Use more details from the official API
  - OmU / OV
  - 2D / 3D
  - Presale dates