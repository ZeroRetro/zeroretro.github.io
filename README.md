# DejaVu Softworks website

Static website for DejaVu Softworks, published with GitHub Pages at
[zeroretro.github.io](https://zeroretro.github.io/).

## Live pages

- Studio homepage: [zeroretro.github.io](https://zeroretro.github.io/)
- Another 2D Platformer: [games/another-2d-platformer/](https://zeroretro.github.io/games/another-2d-platformer/)
- Shield Defender: [games/shield-defender/](https://zeroretro.github.io/games/shield-defender/)
- Shared privacy policy: [privacy.html](https://zeroretro.github.io/privacy.html)
- AdMob authorized sellers: [app-ads.txt](https://zeroretro.github.io/app-ads.txt)

## Project structure

```text
assets/
  another-2d-platformer/   # title art, icon and screenshots
  shield-defender/         # title art, icon and screenshots
games/
  another-2d-platformer/   # game detail page
  shield-defender/         # game detail page
app-ads.txt                # AdMob authorized-sellers file
index.html                 # DejaVu Softworks homepage
privacy.html               # policy shared by the studio's games
styles.css                 # shared visual styles
```

## Adding a game

1. Add its artwork and screenshots under `assets/<game-slug>/`.
2. Create `games/<game-slug>/index.html`, using an existing game page as a
   starting point and keeping paths relative to that directory.
3. Add a card linking to the new game page in `index.html`.
4. Link the game to its store page when it is available.
5. Confirm that the shared privacy policy accurately reflects the services the
   game uses. Create a separate policy only when the game collects or shares
   data differently.

## GitHub Pages

This is a GitHub **user site** repository, so its name must remain
`zeroretro.github.io`. In GitHub, deploy Pages from the `main` branch and the
repository root. A push to `main` publishes the site after GitHub Pages builds
it.

## app-ads.txt

AdMob discovers the file at the root URL:

```text
https://zeroretro.github.io/app-ads.txt
```

Keep the developer website in the Google Play listing set to
`https://zeroretro.github.io/`. Before changing `app-ads.txt`, copy the exact
seller lines shown in the AdMob dashboard; do not replace the publisher ID with
an invented value.
