# Nuvero AI: Instagram Carousel Studio & Design System

> **Official Visual Identity & Post Authoring Specification (v5.0)**  
> Production-ready Instagram Carousel rendering studio and 2x Retina PNG export suite for **[Nuvero AI](https://nuvero.space)**.

---

## 🏛️ Design System Architecture

This repository defines the official design language for all Nuvero social media publications, carousels, and visual artifacts. Every post generated for Nuvero must strictly adhere to the standards detailed below.

```
+-------------------------------------------------------------------------+
|                               TOP ROW                                   |
|  [Logo] @nuvero.space (8-Bit Silkscreen 400)                  01 / 05   |
|  ---------------------------------------------------------------------  |
|  [ CATEGORY BADGE // TOPIC ]                                            |
|                                                                         |
|                          3x MONUMENTAL HEADLINE                         |
|               SOME WORK SHOULD [ NOT ] REQUIRE A HUMAN.                 |
|                                                                         |
|                 Punchy, concise subhead (<= 2 lines).                   |
|                                                                         |
|  +-------------------------------------------------------------------+  |
|  |                    8-BIT RETRO HUD / PANEL                        |  |
|  |  [SYSTEM STATS]                                      LIVE RUNTIME |  |
|  |  [===][===][===][===][===][===][===][===][   ][   ]   78% DRAINED |  |
|  |  1,638 HOURS WASTED ANNUALLY                 = 0.8 FTE HEADCOUNT  |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  +-------------------------------------------------------------------+  |
|  | >>> SWIPE FOR SILENT LEAKS AUDIT                               >> |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  ---------------------------------------------------------------------  |
|  nuvero.space / Autonomous Operations                                   |
|                               BOTTOM BAR                                |
+-------------------------------------------------------------------------+
```

---

## 🎯 Core Design Pillars

1. **8-Bit Retro Arcade Revival Meets Enterprise Precision:**  
   High-contrast 8-bit retro arcade elements (chunky pixel-art SVG icons, segmented drain meters, hard-edged drop shadows, pixel quest cards) fused with serious enterprise telemetry and ROI benchmarks.
2. **Tripled (3x) Typography Scale:**  
   Headlines and figures are scaled up to **3x standard size** for instant mobile scannability on Instagram feeds.
3. **Strict 30px Minimum Font Floor:**  
   **No text anywhere on the canvas may be smaller than 30px.** This applies to timestamps, categories, badges, labels, micro-tags, and status indicators.
4. **Giant Brand Logo Seam Bridge (100% Scale):**  
   The Nuvero geometric vector emblem is enlarged to 100% of the canvas height/width (**1080px × 1080px**) and anchored half-and-half across slide seams (`right: -540px` on Slide N, `left: -540px` on Slide N+1), creating a seamless, physical connection between carousel cards.
5. **Clean Bottom Bar (Zero Clutter):**  
   The bottom social bar features only the pristine author lockup (`nuvero.space / Autonomous Operations`). All "NEXT: ..." cliffhanger teasers are permanently omitted.
6. **Strict Zero Em Dash Rule:**  
   **Never use an em dash (Unicode U+2014) anywhere in copy, captions, or code.** Use periods, slashes (`//`), colons, or clean spacing instead.

---

## 🎨 Color Palette & Contrast Tokens

| Token Name | Hex Code | Light Theme (`theme-tan`) | Dark Theme (`theme-dark`) | Role |
| :--- | :--- | :--- | :--- | :--- |
| `--nuvero-tan` | `#FDF0D5` | Canvas Background | Text / Borders / Accents | Warm Company Beige |
| `--nuvero-blue` | `#003049` | Primary Text & Ink | Canvas Background | Industrial Navy |
| `--nuvero-red` | `#C1121F` | Focal Highlights & Badges | Active Meters & Badges | Brand Red Accent |
| `--nuvero-dark-red` | `#780000` | Depth & Shadows | Dark Contrast Accents | Deep Maroon |
| `--nuvero-success` | `#10B981` | Positive Outcomes | Active Green / Online | Terminal Emerald |

### ⚠️ Dark Mode Contrast Enforcement Rule
In dark mode (`.insta-slide.theme-dark`), the post canvas is Navy Blue (`#003049`) and panels are `#001f30`.  
**Never render blue text on a dark blue background.**
* **Panel Primary Text:** Must resolve to Company Beige (`#FDF0D5` / `var(--slide-panel-text)`).
* **Panel Secondary Text:** Must resolve to Semi-Transparent Beige (`rgba(253, 240, 213, 0.85)` / `var(--slide-panel-subtext)`), never `#666` or dark gray.
* **Dividers:** Must use `rgba(253, 240, 213, 0.2)` in dark mode.

---

## 🔤 Typography Specification

| Component | Font Family | Size (4:5) | Size (1:1) | Weight | Styling Details |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Top Brand Handle** | `'Silkscreen', monospace` | **`30px`** | **`30px`** | **`400` (Regular)** | `@nuvero.space` in header pill. **Must NOT be bold.** |
| **Slide Sequence Tag** | `'Silkscreen', monospace` | **`32px`** | **`30px`** | **`700`** | `01 / 05`, `02 / 05` top right. |
| **Category Badge** | `'Press Start 2P', monospace` | **`30px`** | **`30px`** | **`400`** | `OPS AUDIT // NUVERO AI` inside 3px bordered badge. |
| **Monumental Headline** | `'Space Grotesk', sans-serif` | **`88px`** | **`64px`** | **`900`** | Tight leading (`0.98`), uppercase, `-0.03em` tracking. |
| **Highlight Badge (`.pixel-highlight`)** | `'Space Grotesk', sans-serif` | **`88px`** | **`64px`** | **`900`** | `#fff` on `#C1121F`, `padding: 4px 30px 8px 30px`, `box-shadow: 6px 6px 0 #000`. **No rotation.** |
| **Giant Metric Numbers** | `'Space Grotesk', sans-serif` | **`136px`** | **`104px`** | **`900`** | High-impact numbers (`31.5h`, `3.8h`, `40%`, `<200ms`). |
| **Concise Subhead** | `'Space Grotesk', sans-serif` | **`36px`** | **`30px`** | **`600`** | Concise 2-line explanation. |
| **HUD Labels & Status** | `'Press Start 2P', monospace` | **`30px`** | **`30px`** | **`400`** | `[SYSTEM STATS]`, `ACTIVE`, `MANUAL RELAY`. |
| **HUD Metric Figures** | `'Space Grotesk', sans-serif` | **`52px`** | **`42px`** | **`900`** | Dominant figures inside panels (`6 / 6`, `8.6s`). |
| **Bottom Author Lockup** | `'IBM Plex Mono', monospace` | **`30px`** | **`30px`** | **`700`** | `nuvero.space` (`30px`) + `/ Autonomous Operations` (`30px`). |

---

## 🕹️ 8-Bit Retro UI Components

### 1. Highlight Badge (`.pixel-highlight`)
Used inside `.text-3x-headline` to highlight crucial keywords (e.g., `NOT`, `9 SECONDS`, `HUMAN GLUE`).
```css
.text-3x-headline .pixel-highlight {
  color: #ffffff;
  background: var(--nuvero-red);
  padding: 4px 30px 8px 30px;
  box-shadow: 6px 6px 0 #000000;
  display: inline-block;
  white-space: nowrap;
  vertical-align: baseline;
  line-height: 1.05;
  box-sizing: border-box;
  /* Strictly transform: none to prevent html2canvas canvas export drift */
}
```

### 2. Retro Panel Box (`.pixel-panel-box`)
Primary container for HUD metrics, segmented bars, and checklist steps.
```css
.pixel-panel-box {
  background: #ffffff;
  border: 4px solid var(--nuvero-blue);
  box-shadow: 6px 6px 0px var(--nuvero-blue);
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.insta-slide.theme-dark .pixel-panel-box {
  background: #001f30;
  border-color: var(--nuvero-tan);
  box-shadow: 6px 6px 0px var(--nuvero-red);
  color: var(--nuvero-tan);
}
```

### 3. Segmented Capacity Meter (`.pixel-meter-bar`)
10-block 8-bit drain and capacity meter.
```html
<div class="pixel-meter-bar">
  <div class="pixel-meter-cell active-red"></div>
  <div class="pixel-meter-cell active-red"></div>
  <div class="pixel-meter-cell active-red"></div>
  <div class="pixel-meter-cell"></div>
</div>
```

### 4. 8-Bit Pixel Quest Grid (`.pixel-quest-grid`)
Two-column chunky RPG inventory cards with 56px SVG icons (`floppy`, `coin`, `sword`, `bot`, `zap`, `clock`).
```html
<div class="pixel-quest-card">
  <div class="pixel-quest-icon">${PIXEL_ICONS.floppy}</div>
  <div class="pixel-quest-info">
    <span class="pixel-quest-title">09:00 REPORTS</span>
    <span class="pixel-quest-stat">4.5h wasted</span>
  </div>
</div>
```

### 5. Blinking Prompt Banner (`.pixel-prompt-banner`)
Full-width interactive cue with blinking terminal arrows.
```html
<div class="pixel-prompt-banner">
  <span>SWIPE FOR 6 SILENT LEAKS</span>
  <span class="pixel-blink-arrow">▶▶</span>
</div>
```

### 6. Floppy Disk Save CTA (`.pixel-save-cta-box`)
Final slide bookmarking callout featuring retro 3.5-inch floppy disk art.
```html
<div class="pixel-save-cta-box">
  <div class="pixel-save-left">
    <div class="pixel-floppy-icon">${PIXEL_ICONS.floppy}</div>
    <div>
      <div class="pixel-save-title">SAVE THIS BLUEPRINT</div>
      <div class="pixel-save-sub">Follow @nuvero.space for weekly teardowns</div>
    </div>
  </div>
  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[SAVE 📌]</div>
</div>
```

---

## 🌉 Giant Brand Logo Carousel Seam Bridge

To create an irresistible swipe hook on Instagram, adjacent slides share the giant Nuvero vector logo split across their physical border:
* **Slide N (`seamBridge: 'half-right'`):** Contains the **left half** of the 1080px emblem anchored at `right: -540px`.
* **Slide N+1 (`seamBridge: 'half-left'`):** Contains the **right half** of the 1080px emblem anchored at `left: -540px`.
* When swiping on Instagram, the two slides visually lock together at the seam into the complete 1080px Nuvero mark.

---

## 📐 Supported Formats & Canvas Dimensions

* **Portrait (4:5):** `1080px × 1350px` (Default Instagram Feed standard).
* **Square (1:1):** `1080px × 1080px` (Traditional grid format).
* **Export Resolution:** `2160px × 2700px` (2x Retina crisp PNG).

---

## 💾 Export Engine Rules

The high-resolution export pipeline (`captureSlideCleanPNG`) adheres to the following rules:
1. **Unscaled Offscreen Staging:** Clones the target slide into an unscaled staging container (`transform: none`, `width: 1080px`) to prevent kerning collisions caused by viewport zoom scales.
2. **Badge Normalization:** Enforces `transform: none`, `white-space: nowrap`, and `box-sizing: border-box` on all `.pixel-highlight` elements to avoid canvas coordinate drift.
3. **CORS Google Fonts:** Includes `crossorigin="anonymous"` on Google Font links to allow canvas rasterization without security exceptions.
4. **HTML2Canvas Rendering:** Uses `onclone` callbacks to verify all styles are settled before capturing at `scale: 2`.

---

## 🛠️ Local Development & Testing

```bash
# Serve locally
python -m http.server 8088

# Validate all slide permutations across aspect ratios and themes
node scratch/test_render.js

# Audit zero em dash compliance
powershell -Command "Select-String -Path 'app.js','styles.css','index.html' -Pattern '\u2014'"
```
