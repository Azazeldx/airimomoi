# Credits & Asset Sources

This is a **fan-made, non-commercial tribute site**. Airi Momoi (桃井愛莉), MORE MORE JUMP! and
Project SEKAI: Colorful Stage feat. Hatsune Miku are the property of **SEGA**, **Colorful Palette**
and **Crypton Future Media**. Every illustration, logo and character design here belongs to its
respective rights holders. This project is not affiliated with, sponsored by, or endorsed by any of
them, and no artwork is sold or relicensed.

If you are a rights holder and want something removed, delete the relevant file from
`public/assets/` and its entry in the matching `src/data/*.ts` file.

## Where the artwork came from

All images were retrieved from the [Project SEKAI Wiki](https://projectsekai.fandom.com) via its
public MediaWiki API, then stored locally in `src/assets/images/` so the site makes no third-party
image requests at runtime. They live in `src/` rather than `public/` so the Astro build pipeline
converts and resizes them; folders below are relative to `src/assets/`.

| Folder | Contents | Source page |
| --- | --- | --- |
| `images/airi/` | Character renders, icon, birthday illustrations (2021–2026), promo art | [Momoi Airi](https://projectsekai.fandom.com/wiki/Momoi_Airi) · [Gallery](https://projectsekai.fandom.com/wiki/Momoi_Airi/Gallery) |
| `images/cards/` | 16 official card illustrations (untrained + trained) | [Momoi Airi/Cards](https://projectsekai.fandom.com/wiki/Momoi_Airi/Cards) |
| `images/mmj/` | Unit logo, group artwork, all four member icons | [MORE MORE JUMP!](https://projectsekai.fandom.com/wiki/MORE_MORE_JUMP!) |
| `images/wallpapers/` | Official wallpaper layer pairs (background + transparent character) and EN weekly promo banners | [Momoi Airi/Gallery](https://projectsekai.fandom.com/wiki/Momoi_Airi/Gallery) |
| `images/music/` | MV poster frames, downloaded from YouTube's public thumbnail endpoint | see below |

The hero uses an official **pre-separated wallpaper pair** (`wl-background.png` +
`wl-character.png`) — the game ships these as distinct layers, which is what makes the hero
parallax read correctly rather than being faked with a cut-out.

To re-fetch or add an asset, use the same API pattern rather than scraping HTML:

```bash
# find every file whose name starts with a prefix
curl -sL -A "Mozilla/5.0" "https://projectsekai.fandom.com/api.php?action=query&list=allimages&aiprefix=Airi&ailimit=200&aiprop=url|size&format=json"

# resolve one known file to a direct URL
curl -sL -A "Mozilla/5.0" "https://projectsekai.fandom.com/api.php?action=query&titles=File:Airi.png&prop=imageinfo&iiprop=url|size&format=json"

# pull page text (profile data, lore, song lists)
curl -sL -A "Mozilla/5.0" "https://projectsekai.fandom.com/api.php?action=parse&page=Momoi%20Airi&prop=wikitext&format=json"
```

## Character & lore data

Everything in `src/data/profile.ts`, `group.ts` and `trivia.ts` — birthday, height, school, club,
hobbies, talents, food preferences, cat allergy, voice actor, character colour `#FFAACC`
("Lovely Pink"), the surname/plant naming trivia, and both in-game quotes — was taken from the
wiki infoboxes for [Momoi Airi](https://projectsekai.fandom.com/wiki/Momoi_Airi) and
[MORE MORE JUMP!](https://projectsekai.fandom.com/wiki/MORE_MORE_JUMP!). Narrative prose in
`timeline.ts` is original writing about canon events.

## Music

`src/data/music.ts` embeds six music videos from the **official Project SEKAI YouTube channel**
(プロジェクトセカイ カラフルステージ! feat. 初音ミク). Each video ID was cross-checked against the wiki's MV
listings and confirmed via YouTube's oEmbed endpoint. Playback uses `youtube-nocookie.com` and only
loads after an explicit click, so no YouTube request is made on page load.

## Voice lines — you need to supply the audio

**No audio ships with this repository.** Voice clips are extracted game assets, and redistributing
them is a step beyond hosting promotional artwork, so the player is wired up but left empty.

Each card in `src/data/voiceLines.ts` looks for:

```
public/assets/audio/voice-lines/<slug>.mp3
```

Expected filenames, matching the current `slug` values:

```
deliver-hope.mp3
become-an-idol.mp3
greeting.mp3
thats-unfair.mp3
sweets.mp3
lets-go.mp3
```

Drop a file in and its card activates automatically — duration appears, the scrub bar works, and
only one line plays at a time. Until then each card shows a disabled button and the label
"Audio file not installed". The Japanese text, romanisation, translation and context all render
either way, so the section is complete without audio.

To add, rename or remove a line, edit `src/data/voiceLines.ts`; the markup is generated from it.

## Fonts

- **Inter** (variable) — [rsms/inter](https://github.com/rsms/inter), SIL Open Font License 1.1.
  Self-hosted via Fontsource.
- **Noto Sans JP** — [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+JP), SIL Open
  Font License 1.1. Stored as `src/assets/fonts/noto-sans-jp-subset-300.woff2`, cut down to only
  the characters this site displays. The OFL permits subsetting and redistribution; the font is not
  renamed. See "Regenerating the Japanese subset" in README.md before adding new Japanese text.

Neither makes a Google Fonts request at runtime.

## Icons

[Lucide](https://lucide.dev) (ISC License), inlined as SVG at build time via `astro-icon`.
