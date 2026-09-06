/**
 * NUVERO AI: INSTAGRAM CAROUSEL STUDIO & RENDERING ENGINE
 * High-performing, genuine Instagram post layouts with rich bespoke UI mockups,
 * zero empty dead space, verified brand tokens, and strict 0-em-dash rule.
 * Features bulletproof 2x Retina PNG export engine (Zero text overlapping/glyph collision).
 */

// Embedded official Nuvero vector mark for instant, crisp rendering
const NUVERO_LOGO_SVG = `
<svg viewBox="0 0 1007 983" fill="none" xmlns="http://www.w3.org/2000/svg" class="brand-svg-logo" style="width: 34px; height: 34px;">
  <path fill-rule="evenodd" clip-rule="evenodd" fill="#C1121F"
    d="M871.000,-0.000 C961.306,-1.478 1032.106,75.180 992.1000,166.000 C975.504,206.632 939.428,228.835 888.1000,237.000 C816.790,248.692 746.791,161.035 768.1000,86.1000 C779.925,50.580 806.306,20.681 839.1000,6.1000 C850.332,4.667 860.668,2.333 871.000,-0.000 ZM240.1000,12.1000 C326.985,16.026 341.399,63.639 374.1000,117.000 C401.664,157.996 428.336,199.004 455.000,239.1000 C614.984,485.975 775.016,732.025 935.000,978.000 C880.005,978.000 824.995,978.000 769.1000,978.000 C744.048,977.1000 712.031,981.000 691.1000,974.000 C623.928,950.211 592.841,870.002 556.1000,813.000 C455.010,654.682 352.990,496.317 250.1000,338.000 C250.667,338.000 250.333,338.000 249.1000,338.000 C249.1000,484.985 249.1000,632.015 249.1000,779.000 C250.004,835.537 263.308,919.465 236.000,954.1000 C227.924,965.509 211.872,974.645 197.000,978.000 C163.542,985.548 56.150,983.098 35.000,970.000 C-13.413,940.019 3.996,832.765 3.1000,760.000 C3.1000,586.684 3.1000,413.316 3.1000,239.1000 C3.998,186.013 -8.264,72.039 14.1000,39.1000 C42.545,2.064 129.712,13.997 194.000,13.1000 C209.665,13.667 225.335,13.333 240.1000,12.1000 ZM868.1000,284.000 C914.759,283.487 973.401,279.884 992.1000,306.000 C1015.415,335.869 1003.004,432.762 1002.1000,480.1000 C1002.1000,631.985 1002.1000,783.015 1002.1000,933.1000 C1001.667,933.000 1000.333,931.1000 999.000,931.000 C920.675,810.012 842.325,688.988 764.000,567.1000 C764.000,547.669 764.000,527.331 764.000,506.1000 C764.001,459.463 753.594,328.717 775.000,304.1000 C789.666,288.751 811.779,289.643 839.000,285.000 C848.999,284.667 859.001,284.333 868.1000,284.000 Z" />
</svg>
`;

// Giant Nuvero Brand Logo scaled to 100% of post canvas for Half-and-Half Seam Bridges
const GIANT_NUVERO_LOGO_SVG = `
<svg viewBox="0 0 1007 983" fill="none" xmlns="http://www.w3.org/2000/svg" class="giant-nuvero-svg">
  <path fill-rule="evenodd" clip-rule="evenodd" fill="#C1121F"
    d="M871.000,-0.000 C961.306,-1.478 1032.106,75.180 992.1000,166.000 C975.504,206.632 939.428,228.835 888.1000,237.000 C816.790,248.692 746.791,161.035 768.1000,86.1000 C779.925,50.580 806.306,20.681 839.1000,6.1000 C850.332,4.667 860.668,2.333 871.000,-0.000 ZM240.1000,12.1000 C326.985,16.026 341.399,63.639 374.1000,117.000 C401.664,157.996 428.336,199.004 455.000,239.1000 C614.984,485.975 775.016,732.025 935.000,978.000 C880.005,978.000 824.995,978.000 769.1000,978.000 C744.048,977.1000 712.031,981.000 691.1000,974.000 C623.928,950.211 592.841,870.002 556.1000,813.000 C455.010,654.682 352.990,496.317 250.1000,338.000 C250.667,338.000 250.333,338.000 249.1000,338.000 C249.1000,484.985 249.1000,632.015 249.1000,779.000 C250.004,835.537 263.308,919.465 236.000,954.1000 C227.924,965.509 211.872,974.645 197.000,978.000 C163.542,985.548 56.150,983.098 35.000,970.000 C-13.413,940.019 3.996,832.765 3.1000,760.000 C3.1000,586.684 3.1000,413.316 3.1000,239.1000 C3.998,186.013 -8.264,72.039 14.1000,39.1000 C42.545,2.064 129.712,13.997 194.000,13.1000 C209.665,13.667 225.335,13.333 240.1000,12.1000 ZM868.1000,284.000 C914.759,283.487 973.401,279.884 992.1000,306.000 C1015.415,335.869 1003.004,432.762 1002.1000,480.1000 C1002.1000,631.985 1002.1000,783.015 1002.1000,933.1000 C1001.667,933.000 1000.333,931.1000 999.000,931.000 C920.675,810.012 842.325,688.988 764.000,567.1000 C764.000,547.669 764.000,527.331 764.000,506.1000 C764.001,459.463 753.594,328.717 775.000,304.1000 C789.666,288.751 811.779,289.643 839.000,285.000 C848.999,284.667 859.001,284.333 868.1000,284.000 Z" />
</svg>
`;

// Helper: Renders Giant Half-and-Half Logo Seam Bridge connecting adjacent slides
function renderGiantLogoBridge(side) {
  if (side === 'half-left') {
    return `
      <div class="giant-logo-seam-bridge half-left">
        ${GIANT_NUVERO_LOGO_SVG}
      </div>
    `;
  } else if (side === 'half-right') {
    return `
      <div class="giant-logo-seam-bridge half-right">
        ${GIANT_NUVERO_LOGO_SVG}
      </div>
    `;
  }
  return '';
}

// 8-Bit Pixel Icon Library for Retro Visual Aesthetics
const PIXEL_ICONS = {
  heart: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M2 3h2v2H2V3zm2-2h3v2H4V1zm3 2h2v2H7V3zm2-2h3v2H9V1zm3 2h2v2h-2V3zm2 2h2v4h-2V5zm-2 4h-2v2h2V9zm-2 2h-2v2h2v-2zm-2 2H7v2h2v-2zm-2-2H3v-2h2v2zm-2-2H1V5h2v4z"/></svg>`,
  sword: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M12 1h3v3h-2v2h-2v2h-2v2H7v1H5v2H3v2H1v-2h2v-2h2v-2h1V9h2V7h2V5h2V3h-2V1h2z"/></svg>`,
  skull: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M5 1h6v2H5V1zM3 3h2v2H3V3zM1 5h2v4H1V5zm2 4h2v2H3V9zm2 2h6v2H5v-2zm6-2h2v2h-2V9zm2-4h2v4h-2V5zm-2-2h2v2h-2V3zm-9 3h2v2H4V6zm6 0h2v2h-2V6z"/></svg>`,
  zap: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M9 1H5v6h3v1H4v7h2v-5h4v-1h3V1H9z"/></svg>`,
  clock: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M5 1h6v2H5V1zM3 3h2v2H3V3zM1 5h2v6H1V5zm2 6h2v2H3v-2zm2 2h6v2H5v-2zm6-2h2v2h-2v-2zm2-6h2v6h-2V5zm-2-2h2v2h-2V3zm-5 3h2v4H8V6zm2 4h3v2h-3v-2z"/></svg>`,
  floppy: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M1 1h11v2h2v2h1v10H1V1zm2 2v4h7V3H3zm0 6v4h10V9H3z"/></svg>`,
  coin: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M5 1h6v2H5V1zM3 3h2v2H3V3zM1 5h2v6H1V5zm2 6h2v2H3v-2zm2 2h6v2H5v-2zm6-2h2v2h-2v-2zm2-6h2v6h-2V5zm-2-2h2v2h-2V3zM7 5h2v6H7V5z"/></svg>`,
  check: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M14 3h2v3h-2V3zm-2 3h2v3h-2V6zm-2 3h2v3h-2V9zm-2 3h2v3H8v-3zm-2-2h2v2H6v-2zm-2-2h2v2H4V7zm-2-2h2v2H2V5z"/></svg>`,
  cross: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h3v3H2V2zm3 3h2v2H5V5zm2 2h2v2H7V7zm2-2h2v2H9V5zm2-3h3v3h-3V2zm0 9h3v3h-3v-3zm-2-2h2v2H9V9zm-4 0h2v2H5V9zm-3 2h3v3H2v-3z"/></svg>`,
  bot: `<svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M7 1h2v2H7V1zM3 4h10v8H3V4zM1 7h2v3H1V7zm12 0h2v3h-2V7zm-8 1h2v2H5V8zm4 0h2v2H9V8zm-3 3h4v1H6v-1z"/></svg>`
};

// Modern SVG Icon Library for Clean, Readable, Instagram-Native Visual Graphics
const ICONS = {
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  zap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  checkCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alertCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  database: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  messageSquare: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  trendingUp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  fileText: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  bot: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>`,
  bookmark: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  cart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  dollarSign: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
};

// Complete Dataset: 5 Brand Infrastructure Posts + 4 Production Case Studies
const POSTS_DATA = [
  {
    id: 'post-ops-audit',
    series: 'BRAND INFRASTRUCTURE',
    categoryTag: 'OPS AUDIT',
    client: 'Nuvero Ops Audit',
    sector: 'Autonomous Workflow Ledger',
    title: 'The work that should have disappeared',
    shortDesc: 'A normal Tuesday off your plate: 6 daily workflows running unattended with 31.5 hrs/wk returned.',
    caption: `Some work should not require a human.

Look at a normal Tuesday when Nuvero is running:
• 09:00: Morning report compiled
• 10:40: Abandoned carts recovered
• 12:15: Invoices reconciled
• 15:30: Support tickets resolved
• 18:05: Follow-up calls sent
• 23:47: After-hours enquiries answered

31.5 hrs/wk returned to the team.

The goal is not to add another dashboard.
It is to make the work disappear.

Build the infrastructure underneath at nuvero.space.

#AIInfrastructure #Operations #WorkflowAutomation #NuveroAI #BusinessOps`,
    slides: [
      {
        slideNum: '01 / 05',
        category: 'NUVERO / OPS AUDIT 001',
        eyebrow: 'LIVE AUDIT',
        shortTitle: '01 Hook',
        isCover: true,
        seamBridge: 'half-left',
        headline: 'Some work should <span class="highlight-pill">NOT</span> require a human.',
        lead: 'A normal Tuesday: 6 daily workflows running unattended with 31.5 hrs/week returned.',
        nextTeaser: 'Where 31.5 hrs/wk vanish',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">OPS AUDIT // NUVERO AI</span>
                <span class="text-3x-tag">01 / 05</span>
              </div>

              <div class="text-3x-headline">
                SOME WORK SHOULD <span class="pixel-highlight">NOT</span> REQUIRE A HUMAN.
              </div>

              <div class="text-3x-subhead">
                A normal Tuesday: 6 daily workflows running unattended with 31.5 hrs/week returned.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 8px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[SYSTEM STATS]</span>
                <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">LIVE RUNTIME</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--nuvero-red);">${PIXEL_ICONS.clock} 31.5h</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">RETURNED</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--slide-panel-text, var(--nuvero-blue));">${PIXEL_ICONS.bot} 6 / 6</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">AUTONOMOUS</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: #10B981;">0.0s</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">HUMAN LAG</div>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE TO AUDIT 6 LEAKS</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 05',
        category: 'NUVERO / OPS AUDIT 001',
        eyebrow: 'TOIL DRAIN',
        shortTitle: '02 Leaks',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: 'Where 31.5 hours vanish every week.',
        lead: 'Six daily manual handoffs quietly draining high-performing teams.',
        nextTeaser: 'How software connects directly',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">DRAIN AUDIT // STAGE 02</span>
                <span class="text-3x-tag">02 / 05</span>
              </div>

              <div class="text-3x-giant-number">31.5h</div>

              <div class="text-3x-headline" style="font-size: 56px;">
                LOST EVERY WEEK TO TOIL.
              </div>

              <div class="text-3x-subhead">
                Repetitive browser copy-pasting that quietly bleeds high-velocity teams.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">WEEKLY TEAM CAPACITY DRAIN</span>
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">78% DRAINED</span>
              </div>

              <div class="pixel-meter-bar">
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell"></div>
                <div class="pixel-meter-cell"></div>
              </div>

              <div style="display: flex; justify-content: space-between; font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">
                <span>1,638 HOURS WASTED ANNUALLY</span>
                <span style="color: var(--nuvero-red);">= 0.8 FTE HEADCOUNT</span>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR 6 SILENT LEAKS</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 05',
        category: 'NUVERO / OPS AUDIT 001',
        eyebrow: '6 SILENT LEAKS',
        shortTitle: '03 6 Leaks',
        isFullStage: true,
        seamBridge: 'half-left',
        headline: '6 places human time quietly dies.',
        lead: 'The daily repetitive loops running inside your operations right now.',
        nextTeaser: 'Nuvero runtime architecture',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">WORKFLOW AUDIT</span>
                <span class="text-3x-tag">03 / 05</span>
              </div>

              <div class="text-3x-headline" style="font-size: 58px;">
                6 PLACES HUMAN TIME DIES.
              </div>
            </div>

            <div class="pixel-quest-grid">
              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.floppy}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">09:00 REPORTS</span>
                  <span class="pixel-quest-stat">4.5h wasted</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.coin}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">10:40 CARTS</span>
                  <span class="pixel-quest-stat">5.0h wasted</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.sword}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">12:15 INVOICES</span>
                  <span class="pixel-quest-stat">6.0h wasted</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.bot}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">15:30 TICKETS</span>
                  <span class="pixel-quest-stat">7.5h wasted</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.zap}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">18:05 CALLS</span>
                  <span class="pixel-quest-stat">4.0h wasted</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.clock}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">23:47 NIGHT LEADS</span>
                  <span class="pixel-quest-stat">4.5h wasted</span>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>ALL 6 NOW RUN AT 0.0s LAG</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 05',
        category: 'NUVERO / OPS AUDIT 001',
        eyebrow: 'RUNTIME BENCHMARK',
        shortTitle: '04 0.0s Lag',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: 'Human lag under Nuvero: 0.0 seconds.',
        lead: 'When software connects directly to software, humans stop acting as manual relays.',
        nextTeaser: 'The operational blueprint',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">BENCHMARK // RUNTIME</span>
                <span class="text-3x-tag">04 / 05</span>
              </div>

              <div class="text-3x-giant-number">0.0s</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                HUMAN LAG UNDER NUVERO.
              </div>
            </div>

            <div class="pixel-vs-deck">
              <div class="pixel-vs-side loss">
                <span class="pixel-vs-tag">OLD MANUAL</span>
                <div class="pixel-vs-metric">3.8h</div>
                <div class="pixel-vs-desc">Handoff delay across 12 tabs</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red); margin-top: 4px;">✕ HIGH HUMAN ERROR</div>
              </div>

              <div class="pixel-vs-side win">
                <span class="pixel-vs-tag" style="background: #10B981; color: #fff;">NUVERO</span>
                <div class="pixel-vs-metric" style="color: #10B981;">&lt; 850ms</div>
                <div class="pixel-vs-desc">Direct stack execution</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 4px;">✓ 100% UNATTENDED</div>
              </div>
            </div>

            <div class="pixel-meter-bar">
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR CORE BLUEPRINT</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '05 / 05',
        category: 'NUVERO / OPS AUDIT 001',
        eyebrow: 'SYSTEM PRINCIPLE',
        shortTitle: '05 Blueprint',
        isFullStage: true,
        headline: 'Make work disappear.',
        lead: 'The goal is not another dashboard. It is to delete manual handoffs forever.',
        nextTeaser: 'nuvero.space',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">CORE PRINCIPLE</span>
                <span class="text-3x-tag">05 / 05</span>
              </div>

              <div class="text-3x-headline">
                MAKE WORK DISAPPEAR.
              </div>

              <div class="text-3x-subhead">
                The goal is not another dashboard. It is to delete manual handoffs forever.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 34px; color: var(--nuvero-red);">01</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">AUDIT HUMAN HANDOFFS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Find every copy-paste loop between tabs</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 34px; color: var(--nuvero-red);">02</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">WIRE INBOUND WEBHOOKS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Connect software directly to autonomous runtime</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 34px; color: var(--nuvero-red);">03</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">MEASURE IN HOURS RETURNED</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Real software runs silently in the background</div>
                </div>
              </div>
            </div>

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
          </div>
        `
      }
    ]
  },
  {
    id: 'post-lead-lifecycle',
    series: 'BRAND INFRASTRUCTURE',
    categoryTag: 'PIPELINE ENGINE',
    client: 'Lead Telemetry',
    sector: 'Autonomous Inbound Pipeline',
    title: 'What actually happens when a lead comes in',
    shortDesc: 'Legacy 5-step human relay delay vs Nuvero 8.6-second end-to-end execution telemetry.',
    caption: `What actually happens when a lead comes in?

In the old workflow:
1. Human checks form (45 min wait)
2. Human opens CRM (login, duplicate search)
3. Human messages lead (manual draft)
4. Human updates CRM (dirty data, missed fields)
5. Human schedules meeting (calendar back-and-forth)
Result: 2 to 4 hours of delay. Momentum is lost.

Under the Nuvero layer:
00.0s: Inbound webhook received
01.4s: Instant ICP qualification
02.1s: CRM record staged and deal created
03.7s: Personalized WhatsApp/email dispatched
08.6s: Calendar reservation confirmed

Under 10 seconds end to end.

Leads contacted within 60 seconds convert 391% higher than those contacted after 30 minutes.

The model is not the interesting part. The system around it is.

Turn your inbound flow into infrastructure at nuvero.space.

#LeadGeneration #SpeedToLead #SalesOperations #AIInfrastructure #NuveroAI #WorkflowAutomation`,
        slides: [
      {
        slideNum: '01 / 05',
        category: 'PIPELINE ENGINE // SPEED TO LEAD',
        eyebrow: 'INBOUND VELOCITY REPORT',
        shortTitle: '01 Hook',
        isCover: true,
        seamBridge: 'half-left',
        headline: 'A lead came in. You have 9 seconds.',
        lead: 'Before their attention vanishes. Here is what happens in a sales pipeline.',
        nextTeaser: 'Where leads die in the 5-step human relay',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">SPEED TO LEAD // NUVERO AI</span>
                <span class="text-3x-tag">01 / 05</span>
              </div>

              <div class="text-3x-headline">
                A LEAD CAME IN. YOU HAVE <span class="pixel-highlight">9 SECONDS</span>.
              </div>

              <div class="text-3x-subhead">
                Every second after form submission, buying intent evaporates. Here is the pipeline truth.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 8px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[INBOUND TELEMETRY]</span>
                <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">SPEED TO LEAD</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--nuvero-red);">${PIXEL_ICONS.clock} 3.8h</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue)); margin-top: 4px;">MANUAL RELAY</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--slide-panel-text, var(--nuvero-blue));">${PIXEL_ICONS.zap} 8.6s</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue)); margin-top: 4px;">NUVERO SPEED</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: #10B981;">+391%</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue)); margin-top: 4px;">CONVERSION</div>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR RELAY DELAY AUDIT</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 05',
        category: 'PIPELINE ENGINE // SPEED TO LEAD',
        eyebrow: 'RELAY DELAY',
        shortTitle: '02 Relay',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: 'The 3.8 hour relay delay.',
        lead: 'How manual handoffs quietly kill high-intent inbound leads.',
        nextTeaser: 'Nuvero 8.6s execution pipeline',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">RELAY AUDIT // STAGE 02</span>
                <span class="text-3x-tag">02 / 05</span>
              </div>

              <div class="text-3x-giant-number">3.8h</div>

              <div class="text-3x-headline" style="font-size: 56px;">
                THE 3.8 HOUR RELAY DELAY.
              </div>

              <div class="text-3x-subhead">
                Five manual steps where prospect buying intent steadily evaporates.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">00:00 FORM SUBMITTED</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Lead attention at 100%</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">00:45 INBOX SIT</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Unread notification</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">02:15 CRM SEARCH</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Duplicate lookup & dirty data</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">03:48 FIRST OUTREACH</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red);">Prospect already moved on</span>
                </div>
              </div>

              <div class="pixel-meter-bar">
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell"></div>
                <div class="pixel-meter-cell"></div>
                <div class="pixel-meter-cell"></div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR 8.6s RUNTIME</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 05',
        category: 'PIPELINE ENGINE // SPEED TO LEAD',
        eyebrow: 'RUNTIME TELEMETRY',
        shortTitle: '03 8.6s',
        isFullStage: true,
        seamBridge: 'half-left',
        headline: 'Nuvero inbound pipeline: 8.6 seconds.',
        lead: 'Parallel machine execution replaces the entire 5-step human relay in real time.',
        nextTeaser: '+391% conversion surge',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">RUNTIME TELEMETRY</span>
                <span class="text-3x-tag">03 / 05</span>
              </div>

              <div class="text-3x-giant-number">8.6s</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                NUVERO INBOUND PIPELINE.
              </div>

              <div class="text-3x-subhead">
                Full enrichment, qualification, CRM sync, and dispatch in parallel.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">00.0s WEBHOOK INGEST</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Zero buffer delay</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">01.4s ICP ENRICHMENT</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Company revenue & tech stack</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">03.7s WHATSAPP / EMAIL</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Personalized response sent</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">08.6s CALENDAR BOOKED</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981;">CRM updated & rep pinged</span>
                </div>
              </div>

              <div class="pixel-meter-bar">
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
                <div class="pixel-meter-cell active-green"></div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR THE +391% SURGE</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 05',
        category: 'PIPELINE ENGINE // SPEED TO LEAD',
        eyebrow: 'CONVERSION SURGE',
        shortTitle: '04 +391%',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: 'Conversion surge under 60 seconds.',
        lead: 'Leads engaged immediately convert at quadruple the rate.',
        nextTeaser: 'The system around the model',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">CONVERSION BENCHMARK</span>
                <span class="text-3x-tag">04 / 05</span>
              </div>

              <div class="text-3x-giant-number">+391%</div>

              <div class="text-3x-headline" style="font-size: 50px;">
                CONVERSION SURGE UNDER 60s.
              </div>
            </div>

            <div class="pixel-vs-deck">
              <div class="pixel-vs-side loss">
                <span class="pixel-vs-tag">AFTER 30 MIN</span>
                <div class="pixel-vs-metric">-80%</div>
                <div class="pixel-vs-desc">Probability of qualification drops off a cliff</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red); margin-top: 4px;">✕ PROSPECT LOST</div>
              </div>

              <div class="pixel-vs-side win">
                <span class="pixel-vs-tag" style="background: #10B981; color: #fff;">UNDER 60 SEC</span>
                <div class="pixel-vs-metric" style="color: #10B981;">391%</div>
                <div class="pixel-vs-desc">Higher close rate with immediate response</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 4px;">✓ LOCKED IN</div>
              </div>
            </div>

            <div class="pixel-meter-bar">
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR ARCHITECTURE VALUE</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '05 / 05',
        category: 'PIPELINE ENGINE // SPEED TO LEAD',
        eyebrow: 'SYSTEM PRINCIPLE',
        shortTitle: '05 Architecture',
        isFullStage: true,
        headline: 'Models are commodity. The system is value.',
        lead: 'The advantage belongs to whoever wires the system directly into production.',
        nextTeaser: 'nuvero.space',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">CORE DIRECTIVE</span>
                <span class="text-3x-tag">05 / 05</span>
              </div>

              <div class="text-3x-headline" style="font-size: 60px;">
                MODELS ARE COMMODITY. THE SYSTEM IS VALUE.
              </div>

              <div class="text-3x-subhead">
                Anyone can call an API. The advantage belongs to whoever wires the system directly into production.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--nuvero-red);">TIER 01</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">RAW LLMS // COMMODITY</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">OpenAI, Anthropic, Gemini: available to everyone</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--slide-panel-text, var(--nuvero-blue));">TIER 02</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">STATE MACHINES // LOGIC</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Deterministic retry queues, validation, schemas</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: #10B981;">TIER 03</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">NUVERO INTEGRATION // THE VALUE</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 2px;">Direct CRM webhooks, ERP connectors, fail-safes</div>
                </div>
              </div>
            </div>

            <div class="pixel-save-cta-box">
              <div class="pixel-save-left">
                <div class="pixel-floppy-icon">${PIXEL_ICONS.floppy}</div>
                <div>
                  <div class="pixel-save-title">SAVE SPEED TO LEAD BLUEPRINT</div>
                  <div class="pixel-save-sub">nuvero.space / Autonomous Operations</div>
                </div>
              </div>
              <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[SAVE 📌]</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-cross-tool-shuffling',
    series: 'BRAND INFRASTRUCTURE',
    categoryTag: 'STACK ARCHITECTURE',
    client: 'Tool Integration',
    sector: 'Cross-Stack Synchronization',
    title: 'Your team is doing this every day',
    shortDesc: 'Copying data across 6 tools slashed cleanly by the Nuvero integration layer.',
    caption: `Your team should not be copying data between 6 tools.

CRM -> SHEETS -> GMAIL -> SLACK -> CRM -> REPORT.

Every day, high-performing operators spend 40% of their work week acting as human copy-paste bridges between SaaS apps. It is slow, error-prone, and mentally exhausting.

Nuvero builds the layer between them.

Wired directly into HubSpot, Slack, Google Sheets, Gmail, Stripe, and your internal APIs, so data flows, workflows trigger, and manual shuffling simply disappears.

Turn your tool sprawl into infrastructure at nuvero.space.

#Operations #Integration #WorkflowAutomation #AIInfrastructure #NuveroAI`,
        slides: [
      {
        slideNum: '01 / 04',
        category: 'STACK ARCHITECTURE',
        eyebrow: 'DATA FRICTION CUT',
        shortTitle: '01 Hook',
        isCover: true,
        seamBridge: 'half-left',
        headline: 'Stop acting as human glue across tools.',
        lead: 'Your team spends 40% of their work week copying data between 6 SaaS apps.',
        nextTeaser: 'The 6-tool manual relay loop',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">STACK AUDIT // NUVERO AI</span>
                <span class="text-3x-tag">01 / 04</span>
              </div>

              <div class="text-3x-headline">
                STOP ACTING AS <span class="pixel-highlight">HUMAN GLUE</span>.
              </div>

              <div class="text-3x-subhead">
                Your team spends 40% of their work week copying data between 6 SaaS apps.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 8px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[STACK METRICS]</span>
                <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">TOIL MEASUREMENT</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--nuvero-red);">40%</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue)); margin-top: 4px;">WEEK WASTED</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--slide-panel-text, var(--nuvero-blue));">6 APPS</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue)); margin-top: 4px;">DISCONNECTED</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: #10B981;">&lt;200ms</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue)); margin-top: 4px;">DIRECT SYNC</div>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR STACK FRICTION AUDIT</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 04',
        category: 'STACK ARCHITECTURE',
        eyebrow: 'TOIL DRAIN',
        shortTitle: '02 Sprawl',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: '40% of your week disappears here.',
        lead: 'Manual copy-paste routines that quietly drain your most expensive talent.',
        nextTeaser: 'Direct event mesh architecture',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">SPRAWL AUDIT // STAGE 02</span>
                <span class="text-3x-tag">02 / 04</span>
              </div>

              <div class="text-3x-giant-number">40%</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                OF YOUR WEEK DISAPPEARS HERE.
              </div>

              <div class="text-3x-subhead">
                Repetitive manual copy-paste bridges between CRM, spreadsheets, and email.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">CRM ➔ SHEETS</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Manual CSV exports & formatting</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(0,0,0,0.1); padding-bottom: 6px;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">GMAIL ➔ SLACK</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px;">Manual rep alert pinging</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">STRIPE ➔ LEDGER</span>
                  <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red);">Discrepancy cross-checking</span>
                </div>
              </div>

              <div class="pixel-meter-bar">
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell active-red"></div>
                <div class="pixel-meter-cell"></div>
                <div class="pixel-meter-cell"></div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR THE DIRECT API MESH</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 04',
        category: 'STACK ARCHITECTURE',
        eyebrow: 'EVENT MESH',
        shortTitle: '03 API Mesh',
        isFullStage: true,
        seamBridge: 'half-left',
        headline: 'Wire data directly.',
        lead: 'Direct synchronization replaces manual handoffs with zero human latency.',
        nextTeaser: 'System blueprint',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">EVENT BUS // RUNTIME</span>
                <span class="text-3x-tag">03 / 04</span>
              </div>

              <div class="text-3x-giant-number">&lt;200ms</div>

              <div class="text-3x-headline" style="font-size: 56px;">
                WIRE DATA DIRECTLY.
              </div>
            </div>

            <div class="pixel-vs-deck">
              <div class="pixel-vs-side loss">
                <span class="pixel-vs-tag">MANUAL GLUE</span>
                <div class="pixel-vs-metric">15h/wk</div>
                <div class="pixel-vs-desc">Human time lost to browser switching</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red); margin-top: 4px;">✕ DELAYED DATA</div>
              </div>

              <div class="pixel-vs-side win">
                <span class="pixel-vs-tag" style="background: #10B981; color: #fff;">NUVERO MESH</span>
                <div class="pixel-vs-metric" style="color: #10B981;">&lt;200ms</div>
                <div class="pixel-vs-desc">Direct webhook synchronizer</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 4px;">✓ 100% UNATTENDED</div>
              </div>
            </div>

            <div class="pixel-meter-bar">
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR CORE ARCHITECTURE</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 04',
        category: 'STACK ARCHITECTURE',
        eyebrow: 'SYSTEM PRINCIPLE',
        shortTitle: '04 Infrastructure',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: 'Infrastructure over sprawl.',
        lead: 'Do not buy a 7th SaaS tool. Wire an autonomous mesh underneath the 6 you already have.',
        nextTeaser: 'nuvero.space',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">CORE PRINCIPLE</span>
                <span class="text-3x-tag">04 / 04</span>
              </div>

              <div class="text-3x-headline" style="font-size: 58px;">
                INFRASTRUCTURE OVER SPRAWL.
              </div>

              <div class="text-3x-subhead">
                Do not buy a 7th SaaS tool. Wire an autonomous mesh underneath the 6 you already have.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--nuvero-red);">01</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">DIRECT API CHANNELS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Replace human copy-paste with deterministic webhooks</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--slide-panel-text, var(--nuvero-blue));">02</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">SINGLE TRUTH LAYER</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">One event updates CRM, Slack, and accounting simultaneously</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: #10B981;">03</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">DELETE UNNECESSARY SEATS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 2px;">Save thousands monthly on unused dashboard licenses</div>
                </div>
              </div>
            </div>

            <div class="pixel-save-cta-box">
              <div class="pixel-save-left">
                <div class="pixel-floppy-icon">${PIXEL_ICONS.floppy}</div>
                <div>
                  <div class="pixel-save-title">SAVE INTEGRATION BLUEPRINT</div>
                  <div class="pixel-save-sub">nuvero.space / Autonomous Operations</div>
                </div>
              </div>
              <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[SAVE 📌]</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-before-after',
    series: 'BRAND INFRASTRUCTURE',
    categoryTag: 'PRODUCTION BENCHMARKS',
    client: 'Production Deltas',
    sector: 'Verified Operational Gains',
    title: 'Before / After without generic SaaS',
    shortDesc: 'Direct comparative evidence: Lead response <60s, Reporting in 15 min, 24/7 First-ring.',
    caption: `Before / after without generic SaaS claims.

Here is what actually changes when operations run on Nuvero infrastructure:

01 / LEAD FOLLOW-UP
Without: 2 to 4 hours of manual chasing
With: Under 60 seconds first response

02 / REPORTING
Without: 2 to 3 days pulling data from 6+ tools
With: 15 minutes automated synthesis

03 / AFTER-HOURS
Without: Missed calls and next-day callbacks
With: 24/7 first-ring response

These are actual figures running in production today.

See deployed systems at nuvero.space.

#ProductionAI #Operations #BusinessAutomation #WorkflowEngine #NuveroAI`,
        slides: [
      {
        slideNum: '01 / 05',
        category: 'PRODUCTION BENCHMARKS',
        eyebrow: 'EVIDENCE REPORT',
        shortTitle: '01 Hook',
        isCover: true,
        seamBridge: 'half-left',
        headline: 'Before / After without generic SaaS hype.',
        lead: 'Real operational deltas measured across live production deployments.',
        nextTeaser: 'Benchmark 01: Lead follow-up speed',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">BENCHMARKS // NUVERO AI</span>
                <span class="text-3x-tag">01 / 05</span>
              </div>

              <div class="text-3x-headline">
                BEFORE / AFTER.<br>
                <span class="pixel-highlight">NO GENERIC SAAS</span> HYPE.
              </div>

              <div class="text-3x-subhead">
                Real operational numbers from live client deployments: speed, reporting, and 24/7 coverage.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 8px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[PRODUCTION BENCHMARKS]</span>
                <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">VERIFIED DATA</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--nuvero-red);">&lt;60s</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">FIRST CONTACT</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--slide-panel-text, var(--nuvero-blue));">15 MIN</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">REPORTS READY</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: #10B981;">24/7</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">COVERAGE</div>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR VERIFIED BENCHMARKS</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 05',
        category: 'PRODUCTION BENCHMARKS',
        eyebrow: 'BENCHMARK 01',
        shortTitle: '02 Speed',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: 'First contact under 60 seconds.',
        lead: 'Speed to lead measured across high-ticket commercial inquiries.',
        nextTeaser: 'Benchmark 02: Boardroom reporting speed',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">BENCHMARK 01 // INBOUND</span>
                <span class="text-3x-tag">02 / 05</span>
              </div>

              <div class="text-3x-giant-number">&lt;60s</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                FIRST CONTACT UNDER 60 SECONDS.
              </div>
            </div>

            <div class="pixel-vs-deck">
              <div class="pixel-vs-side loss">
                <span class="pixel-vs-tag">BEFORE NUVERO</span>
                <div class="pixel-vs-metric">4.2h</div>
                <div class="pixel-vs-desc">Manual inbox triage and delayed rep assignment</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red); margin-top: 4px;">✕ 68% LEAD ABANDONMENT</div>
              </div>

              <div class="pixel-vs-side win">
                <span class="pixel-vs-tag" style="background: #10B981; color: #fff;">AFTER NUVERO</span>
                <div class="pixel-vs-metric" style="color: #10B981;">&lt;60s</div>
                <div class="pixel-vs-desc">Personalized qualification and calendar link sent</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 4px;">✓ 100% CONTACTED</div>
              </div>
            </div>

            <div class="pixel-meter-bar">
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR REPORTING BENCHMARK</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 05',
        category: 'PRODUCTION BENCHMARKS',
        eyebrow: 'BENCHMARK 02',
        shortTitle: '03 Reports',
        isFullStage: true,
        seamBridge: 'half-left',
        headline: 'Reporting once took 3 days.',
        lead: 'Boardroom reports compiled across accounting, sales, and warehouse in minutes.',
        nextTeaser: 'Benchmark 03: 24/7 coverage',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">BENCHMARK 02 // REPORTING</span>
                <span class="text-3x-tag">03 / 05</span>
              </div>

              <div class="text-3x-giant-number">15 MIN</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                REPORTING ONCE TOOK 3 DAYS.
              </div>
            </div>

            <div class="pixel-vs-deck">
              <div class="pixel-vs-side loss">
                <span class="pixel-vs-tag">BEFORE NUVERO</span>
                <div class="pixel-vs-metric">3 Days</div>
                <div class="pixel-vs-desc">Finance team pulling and stitching CSV files</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red); margin-top: 4px;">✕ PRONE TO DATA ERRORS</div>
              </div>

              <div class="pixel-vs-side win">
                <span class="pixel-vs-tag" style="background: #10B981; color: #fff;">AFTER NUVERO</span>
                <div class="pixel-vs-metric" style="color: #10B981;">15 Min</div>
                <div class="pixel-vs-desc">Automated compilation, verified, and sent to Slack</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 4px;">✓ 100% RECONCILED</div>
              </div>
            </div>

            <div class="pixel-meter-bar">
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR 24/7 SUPPORT BENCHMARK</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 05',
        category: 'PRODUCTION BENCHMARKS',
        eyebrow: 'BENCHMARK 03',
        shortTitle: '04 Support',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: '24/7 first-ring resolution.',
        lead: 'Round-the-clock commercial customer engagement without adding night shifts.',
        nextTeaser: 'Audit summary and save CTA',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">BENCHMARK 03 // COVERAGE</span>
                <span class="text-3x-tag">04 / 05</span>
              </div>

              <div class="text-3x-giant-number">100%</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                24/7 FIRST-RING RESOLUTION.
              </div>
            </div>

            <div class="pixel-vs-deck">
              <div class="pixel-vs-side loss">
                <span class="pixel-vs-tag">BEFORE NUVERO</span>
                <div class="pixel-vs-metric">18h Lag</div>
                <div class="pixel-vs-desc">Weekend and night leads queued until Monday</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--nuvero-red); margin-top: 4px;">✕ COLD LEADS</div>
              </div>

              <div class="pixel-vs-side win">
                <span class="pixel-vs-tag" style="background: #10B981; color: #fff;">AFTER NUVERO</span>
                <div class="pixel-vs-metric" style="color: #10B981;">82%</div>
                <div class="pixel-vs-desc">Fully autonomous resolution with zero delay</div>
                <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 4px;">✓ 24/7 FIRST RING</div>
              </div>
            </div>

            <div class="pixel-meter-bar">
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
              <div class="pixel-meter-cell active-green"></div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR VERIFIED TAKEAWAY</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '05 / 05',
        category: 'PRODUCTION BENCHMARKS',
        eyebrow: 'SYSTEM PRINCIPLE',
        shortTitle: '05 Audit',
        isFullStage: true,
        headline: 'Numbers it answers for.',
        lead: 'Every deployment leaves an instrumented record with hard numbers it answers for.',
        nextTeaser: 'nuvero.space',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">STAGE CLEARED</span>
                <span class="text-3x-tag">05 / 05</span>
              </div>

              <div class="text-3x-headline" style="font-size: 58px;">
                NUMBERS IT ANSWERS FOR.
              </div>

              <div class="text-3x-subhead">
                Every deployment leaves an instrumented record with hard numbers it answers for.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--nuvero-red);">01</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">MEASURE IN TIME RETURNED</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">The only ROI metric that never lies in board meetings</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--slide-panel-text, var(--nuvero-blue));">02</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">DIRECT ON YOUR STACK</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Runs inside your tools, not a locked proprietary garden</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: #10B981;">03</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">COMMISSIONED ASSETS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 2px;">Infrastructure you own permanently, not endless subscriptions</div>
                </div>
              </div>
            </div>

            <div class="pixel-save-cta-box">
              <div class="pixel-save-left">
                <div class="pixel-floppy-icon">${PIXEL_ICONS.floppy}</div>
                <div>
                  <div class="pixel-save-title">SAVE BEFORE / AFTER BENCHMARK</div>
                  <div class="pixel-save-sub">nuvero.space / Autonomous Operations</div>
                </div>
              </div>
              <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[SAVE 📌]</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-deployment-011',
    series: 'BRAND INFRASTRUCTURE',
    categoryTag: 'COMMISSIONING RECORD',
    client: 'Deployment 011',
    sector: 'Voice Operations Telemetry',
    title: 'This is what AI infrastructure looks like',
    shortDesc: 'Visual signature series: Engineering commissioning record with 4-cell live telemetry panel.',
    caption: `This is what AI infrastructure looks like.

Every deployment leaves a record like this one: a system with a scope, an owner, and numbers it answers for.

NUVERO / DEPLOYMENT 011
Voice Operations System

• Calls handled: 5,204 (last 30 days)
• Leads qualified: 1,318
• First response: 0.8s
• Human handoffs: 3%

Running on client stack / 24-7.

Not a subscription you log into. A layer that clocks in so your team does not have to.

Commission your system at nuvero.space.

#AIInfrastructure #VoiceAI #Engineering #SystemArchitecture #NuveroAI`,
        slides: [
      {
        slideNum: '01 / 03',
        category: 'COMMISSIONING RECORD',
        eyebrow: 'SYSTEM SPECIFICATION',
        shortTitle: '01 Record',
        isCover: true,
        seamBridge: 'half-left',
        headline: 'This is what AI infrastructure looks like.',
        lead: 'Every deployment leaves an instrumented record with hard numbers it answers for.',
        nextTeaser: 'Telemetry Sheet 011',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">RECORD // DEPLOYMENT 011</span>
                <span class="text-3x-tag">01 / 03</span>
              </div>

              <div class="text-3x-headline" style="font-size: 64px;">
                THIS IS WHAT AI <span class="pixel-highlight">INFRASTRUCTURE</span> LOOKS LIKE.
              </div>

              <div class="text-3x-subhead">
                Every deployment leaves an instrumented record with hard numbers it answers for.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 8px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[COMMISSIONED TELEMETRY]</span>
                <span style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">LAST 30 DAYS</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--nuvero-red);">5,204</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">CALLS HANDLED</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: var(--slide-panel-text, var(--nuvero-blue));">0.8s</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">FIRST RESPONSE</div>
                </div>
                <div style="text-align: center; padding: 10px 4px; background: rgba(0,48,73,0.04); border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
                  <div style="font-family: var(--font-display); font-size: 52px; font-weight: 900; color: #10B981;">97%</div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; margin-top: 4px;">AUTONOMOUS</div>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR COMMISSIONING LOG</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 03',
        category: 'COMMISSIONING RECORD',
        eyebrow: 'LIVE TELEMETRY SHEET',
        shortTitle: '02 Sheet',
        isFullStage: true,
        seamBridge: 'half-right',
        headline: '5,204 calls handled in 30 days.',
        lead: 'Voice operations running 24/7 on client stack with sub-second response.',
        nextTeaser: 'Core commissioning directive',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">DEPLOYMENT 011 // LOG</span>
                <span class="text-3x-tag">02 / 03</span>
              </div>

              <div class="text-3x-giant-number">5,204</div>

              <div class="text-3x-headline" style="font-size: 54px;">
                CALLS HANDLED IN 30 DAYS.
              </div>
            </div>

            <div class="pixel-quest-grid">
              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.check}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">1,318 LEADS</span>
                  <span class="pixel-quest-stat">DIRECT TO CRM</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.zap}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">0.8s LATENCY</span>
                  <span class="pixel-quest-stat">FIRST RING</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.bot}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">3% HANDOFF</span>
                  <span class="pixel-quest-stat">97% AUTONOMY</span>
                </div>
              </div>

              <div class="pixel-quest-card">
                <div class="pixel-quest-icon">${PIXEL_ICONS.shield}</div>
                <div class="pixel-quest-info">
                  <span class="pixel-quest-title">99.98% UPTIME</span>
                  <span class="pixel-quest-stat">24/7 STACK</span>
                </div>
              </div>
            </div>

            <div class="pixel-prompt-banner">
              <span>SWIPE FOR SYSTEM DIRECTIVE</span>
              <span class="pixel-blink-arrow">▶▶</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 03',
        category: 'COMMISSIONING RECORD',
        eyebrow: 'COMMISSIONING DIRECTIVE',
        shortTitle: '03 Directive',
        isFullStage: true,
        headline: 'Not a dashboard. A workforce.',
        lead: 'Not a subscription you log into. An autonomous layer that clocks in so your team does not have to.',
        nextTeaser: 'nuvero.space',
        renderCustomStage: () => `
          <div class="text-3x-stage">
            <div>
              <div class="text-3x-header-row">
                <span class="text-3x-badge">DIRECTIVE // 011</span>
                <span class="text-3x-tag">03 / 03</span>
              </div>

              <div class="text-3x-headline" style="font-size: 58px;">
                NOT A DASHBOARD. A WORKFORCE.
              </div>

              <div class="text-3x-subhead">
                Not a subscription you log into. An autonomous layer that clocks in so your team does not have to.
              </div>
            </div>

            <div class="pixel-panel-box">
              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--nuvero-red);">01</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">COMMISSION ONCE, RUN FOREVER</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Engineered directly into your existing software stack</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 2px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: var(--slide-panel-text, var(--nuvero-blue));">02</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--slide-panel-text, var(--nuvero-blue));">AUDITED PRODUCTION NUMBERS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: var(--slide-panel-subtext, #666); margin-top: 2px;">Clear accountability with live latency and resolution telemetry</div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-family: 'Press Start 2P', monospace; font-size: 32px; color: #10B981;">03</span>
                <div>
                  <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: #10B981;">RETURNS HUMAN HOURS</div>
                  <div style="font-family: 'Silkscreen', monospace; font-size: 30px; color: #10B981; margin-top: 2px;">Liberates your key people to focus on revenue and growth</div>
                </div>
              </div>
            </div>

            <div class="pixel-save-cta-box">
              <div class="pixel-save-left">
                <div class="pixel-floppy-icon">${PIXEL_ICONS.floppy}</div>
                <div>
                  <div class="pixel-save-title">COMMISSION YOUR SYSTEM</div>
                  <div class="pixel-save-sub">nuvero.space / Deployments</div>
                </div>
              </div>
              <div style="font-family: 'Press Start 2P', monospace; font-size: 30px; color: var(--nuvero-red);">[SAVE 📌]</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-1',
    series: 'CASE STUDY',
    categoryTag: 'VOICE INFRASTRUCTURE',
    client: 'Southwest Gases',
    sector: 'Commercial Supply & Logistics',
    title: 'Voice Agent Concierge',
    shortDesc: 'Eliminating a 22% call loss rate during peak dispatch hours with a sub-second neural voice concierge.',
    caption: `Southwest Gases was losing 22% of inbound commercial calls during peak dispatch hours.

When your team is managing trucks, loading docks, and delivery routes, nobody has time to pick up the phone on the second ring. But in industrial supply, missed calls are lost contracts.

We deployed a 24/7 Nuvero AI voice concierge:
• Answers on the first ring (sub-second latency)
• Speaks naturally with regional accents
• Structures commercial orders and logs summaries directly to the CRM
• Handles outbound follow-ups automatically

The result: 100% inbound capture and 14 hours returned to their dispatch team every week.

Stop letting manual operations bottleneck your business.
Build the infrastructure underneath at nuvero.space.

#AIInfrastructure #Operations #WorkflowAutomation #VoiceAI #NuveroAI`,
    slides: [
      {
        slideNum: '01 / 04',
        category: 'CASE STUDY // 01',
        eyebrow: 'OPERATIONAL BOTTLENECK',
        headline: 'Southwest Gases was losing <span class="highlight-red">22% of inbound calls.</span>',
        lead: 'When every ring is a commercial order, dropped calls translate directly into lost contracts and revenue.',
        mockupTitle: 'INBOUND DISPATCH TELEMETRY // SURGE DETECTED',
        mockupStatus: 'REVENUE LEAK',
        renderMockup: () => `
          <div class="whatsapp-mockup-wrapper" style="background: #ffffff; border: 2px solid var(--nuvero-blue);">
            <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1.5px solid rgba(0, 48, 73, 0.15);">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 14px; height: 14px; border-radius: 50%; background: var(--nuvero-red); box-shadow: 0 0 0 3px rgba(193, 18, 31, 0.2);"></div>
                <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue);">SWITCHBOARD TRAFFIC (09:00 - 14:00)</span>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">850+ CALLS / MO</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 6px;">
              <div style="background: var(--nuvero-tan-elevated); border: 1.5px solid var(--nuvero-blue); border-radius: 8px; padding: 16px;">
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">ANSWERED CALLS</div>
                <div style="font-family: var(--font-display); font-size: 38px; font-weight: 700; color: var(--nuvero-blue); margin: 6px 0;">78%</div>
                <div style="font-family: var(--font-body); font-size: 30px; color: var(--nuvero-blue-muted);">Staff managing live shipments</div>
              </div>
              <div style="background: #FFF5F5; border: 2px solid var(--nuvero-red); border-radius: 8px; padding: 16px;">
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">DROPPED / MISSED</div>
                <div style="font-family: var(--font-display); font-size: 38px; font-weight: 700; color: var(--nuvero-red); margin: 6px 0;">22%</div>
                <div style="font-family: var(--font-body); font-size: 30px; color: var(--nuvero-dark-red); font-weight: 600;">Lost sales opportunities</div>
              </div>
            </div>

            <div style="background: rgba(193, 18, 31, 0.08); border-left: 4px solid var(--nuvero-red); padding: 12px 16px; border-radius: 4px; font-family: var(--font-mono); font-size: 12.5px; color: var(--nuvero-blue); margin-top: 4px;">
              <strong>ANNUALIZED RISK:</strong> ~$210,000 in uncaptured wholesale deliveries drifting to competitors.
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 04',
        category: 'THE BOTTLENECK',
        eyebrow: 'HUMAN DISPATCH OVERLOAD',
        headline: 'Peak hours overwhelmed staff. <span class="highlight-red">Warm leads were ignored.</span>',
        lead: 'Dispatchers were juggling truck logistics, dock loading, and phones all at the same time.',
        mockupTitle: 'DISPATCH FRICTION // ROOT CAUSE ANALYSIS',
        mockupStatus: 'CAPACITY SATURATED',
        renderMockup: () => `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-blue); border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">SURGE DYNAMICS</div>
                <div style="font-family: var(--font-display); font-size: 34px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Loading dock coordination takes 100% focus</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: var(--nuvero-tan-elevated); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(0,48,73,0.2);">ACTIVE PRIORITY</span>
            </div>

            <div style="background: #FFF5F5; border: 1.5px solid var(--nuvero-red); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">CONCURRENT PHONES</div>
                <div style="font-family: var(--font-display); font-size: 34px; font-weight: 700; color: var(--nuvero-dark-red); margin-top: 2px;">Switchboard rings continuously with 4+ lines on hold</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.15); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">DROPPED</span>
            </div>

            <div style="background: #FFF5F5; border: 1.5px solid var(--nuvero-red); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">SALES FOLLOW-UP</div>
                <div style="font-family: var(--font-display); font-size: 34px; font-weight: 700; color: var(--nuvero-dark-red); margin-top: 2px;">0 staff remaining to call back warm quote inquiries</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.15); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">ZERO TOIL</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 04',
        category: 'SYSTEM BLUEPRINT',
        eyebrow: 'INFRASTRUCTURE DEPLOYED',
        headline: 'Deployed a 24/7 voice concierge with <span class="highlight-red">sub-second latency.</span>',
        lead: 'Not a robotic IVR tree. An intelligent voice layer that sounds natural and understands commercial orders.',
        mockupTitle: 'LIVE VOICE CONCIERGE HUD // RETELL + TWILIO',
        mockupStatus: 'ACTIVE CALL',
        renderMockup: () => `
          <div class="voice-agent-hud">
            <div class="call-active-card">
              <div class="call-profile-left">
                <div class="call-pulse-ring">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div class="call-meta-details">
                  <div class="caller-title">Commercial Yard Line #01</div>
                  <div class="caller-sub">Caller: Apex Construction (High-Priority Fleet)</div>
                </div>
              </div>
              <div class="call-latency-badge">
                LATENCY: 540ms
              </div>
            </div>

            <div class="live-transcript-feed">
              <div class="transcript-line">
                <span class="speaker-tag">AI CONCIERGE:</span>
                <span>"Southwest Gases dispatch. Good morning! Are you looking for propane refill or cylinder delivery today?"</span>
              </div>
              <div class="transcript-line" style="color: var(--nuvero-blue-subtle);">
                <span class="speaker-tag" style="color: var(--nuvero-blue);">CALLER:</span>
                <span>"Need 8 commercial propane tanks at Yard B before 2 PM."</span>
              </div>
              <div class="transcript-line" style="margin-bottom: 0; background: var(--nuvero-tan-elevated); padding: 6px 10px; border-radius: 4px;">
                <span class="speaker-tag">AI ACTION:</span>
                <span style="font-weight: 600;">✓ Order Logged to CRM • Dispatch Alert Sent • Invoice Generated</span>
              </div>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 04',
        category: 'PRODUCTION RESULTS',
        eyebrow: 'MEASURABLE OUTCOME',
        headline: 'Answers on first ring. <span class="highlight-red">Runs sales pitches in its spare time.</span>',
        lead: 'Human dispatchers manage the yard. The voice system captures 100% of commercial demand.',
        mockupTitle: 'VERIFIED PRODUCTION METRICS // SOUTHWEST GASES',
        mockupStatus: 'VERIFIED LEDGER',
        renderMockup: () => `
          <div class="outcome-ledger-card">
            <div class="outcome-box">
              <div class="outcome-number">&lt;60s</div>
              <div class="outcome-title">FIRST RESPONSE</div>
              <div class="outcome-sub">Zero calls placed on hold</div>
            </div>
            <div class="outcome-box focal">
              <div class="outcome-number">100%</div>
              <div class="outcome-title">CALL CAPTURE</div>
              <div class="outcome-sub">Up from 78% previously</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">+14h</div>
              <div class="outcome-title">HOURS SAVED</div>
              <div class="outcome-sub">Per week for dispatch staff</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-2',
    series: 'CASE STUDY',
    categoryTag: 'WHATSAPP COPILOT',
    client: 'GoHappy Club',
    sector: 'Senior Citizen Community & Wellness',
    title: 'Multilingual WhatsApp Copilot',
    shortDesc: 'Resolving an 8-hour support backlog across 6 languages with an empathetic WhatsApp voice copilot.',
    caption: `GoHappy Club members were waiting up to 8 hours for support replies.

When you serve a 50,000+ senior citizen community, standard ticketing portals do not work. Seniors do not type long support tickets; they send voice notes on WhatsApp in their native languages.

The support team was drowning under manual transcription and translation across Hindi, Gujarati, Marathi, Bengali, Tamil, and English.

We built an intelligent multilingual WhatsApp concierge:
• Transcribes and understands voice notes instantly
• Remembers past member interactions and session preferences
• Answers schedule questions warmly in under 5 seconds
• Automatically escalates urgent medical inquiries to human doctors

Turn your communication bottlenecks into infrastructure at nuvero.space.

#WorkflowAutomation #WhatsAppAPI #SeniorCare #NuveroAI #CustomerOps`,
    slides: [
      {
        slideNum: '01 / 04',
        category: 'CASE STUDY // 02',
        eyebrow: 'COMMUNITY SUPPORT DELAY',
        headline: 'GoHappy Club members <span class="highlight-red">waited up to 8 hours</span> for replies.',
        lead: 'For a senior community seeking daily connection, an 8-hour delay creates instant isolation and frustration.',
        mockupTitle: 'WHATSAPP COMMUNITY INBOX // QUEUE OVERLOAD',
        mockupStatus: '420+ PENDING',
        renderMockup: () => `
          <div class="whatsapp-mockup-wrapper">
            <div class="whatsapp-chat-bubble">
              <div class="chat-sender-label">
                <span>Ramesh Sharma (Member #4829)</span>
                <span style="color: var(--nuvero-red); font-weight: 700;">WAITING: 8h 14m</span>
              </div>
              <div class="chat-text">
                "Beta, kal subah ka yoga session kitne baje hai? Link nahi mila." (Sent at 10:15 AM)
              </div>
              <div class="chat-time">10:15 AM • Unanswered</div>
            </div>

            <div style="background: #ffffff; border: 2px solid var(--nuvero-blue); border-radius: 8px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">UNREAD QUEUE AT SUNSET</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-red); margin: 2px 0;">420+ Messages</div>
              </div>
              <div style="text-align: right;">
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">AVG RESPONSE TIME</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin: 2px 0;">8.2 Hours</div>
              </div>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 04',
        category: 'THE BOTTLENECK',
        eyebrow: 'MULTILINGUAL VOICE GAP',
        headline: 'Members needed help in <span class="highlight-red">6 languages.</span> Team was overwhelmed.',
        lead: 'Over 65% of queries arrived as WhatsApp voice notes in native regional dialects.',
        mockupTitle: 'DEMOGRAPHIC ACCESSIBILITY BREAKDOWN',
        mockupStatus: '65% VOICE NOTES',
        renderMockup: () => `
          <div class="whatsapp-mockup-wrapper">
            <div class="whatsapp-chat-bubble">
              <div class="chat-sender-label">
                <span>Usha Patel (Ahmedabad)</span>
                <span>Gujarati Audio</span>
              </div>
              <div class="voice-note-player">
                <div class="voice-play-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div class="voice-wave-bars">
                  <span class="wave-bar" style="height: 12px;"></span>
                  <span class="wave-bar" style="height: 22px;"></span>
                  <span class="wave-bar" style="height: 16px;"></span>
                  <span class="wave-bar" style="height: 28px;"></span>
                  <span class="wave-bar" style="height: 18px;"></span>
                  <span class="wave-bar" style="height: 24px;"></span>
                  <span class="wave-bar" style="height: 14px;"></span>
                  <span class="wave-bar" style="height: 20px;"></span>
                  <span class="wave-bar" style="height: 10px;"></span>
                </div>
                <span class="voice-duration">0:42</span>
              </div>
            </div>

            <div style="margin-top: 4px;">
              <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue); margin-bottom: 6px;">SUPPORT TEAM REQUIRED ACROSS 6 DIALECTS:</div>
              <div class="language-chips-row">
                <span class="lang-chip active-chip">Hindi</span>
                <span class="lang-chip active-chip">Gujarati</span>
                <span class="lang-chip active-chip">Marathi</span>
                <span class="lang-chip active-chip">Bengali</span>
                <span class="lang-chip active-chip">Tamil</span>
                <span class="lang-chip active-chip">English</span>
              </div>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 04',
        category: 'SYSTEM BLUEPRINT',
        eyebrow: 'INFRASTRUCTURE DEPLOYED',
        headline: 'Built a WhatsApp assistant that <span class="highlight-red">knows every member by name.</span>',
        lead: 'Transcribes voice notes, remembers session history, and responds with genuine human warmth.',
        mockupTitle: 'MULTILINGUAL WHATSAPP COPILOT // LIVE INGEST',
        mockupStatus: 'REALTIME MEMORY',
        renderMockup: () => `
          <div class="whatsapp-mockup-wrapper">
            <div class="whatsapp-chat-bubble">
              <div class="chat-sender-label">
                <span>Ramesh Sharma</span>
                <span style="color: var(--whatsapp-dark-green);">Hindi Voice Note</span>
              </div>
              <div class="chat-text" style="font-style: italic; color: #555;">
                [Audio Transcribed in 0.8s]: "Namaste, kal yoga class ka schedule bata dijiye."
              </div>
            </div>

            <div class="whatsapp-chat-bubble outbound">
              <div class="chat-sender-label">
                <span>GoHappy Copilot</span>
                <span style="color: #22c55e;">Instant Reply (<3s)</span>
              </div>
              <div class="chat-text">
                "Namaste Ramesh ji! Kal subah 10:00 AM par Guruji ka Chair Yoga session hai. Humne aapko WhatsApp par direct Zoom link bhej diya hai! 🙏"
              </div>
              <div class="chat-time">10:15 AM • Delivered ✓✓</div>
            </div>

            <div style="background: rgba(0, 48, 73, 0.08); padding: 8px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 30px; color: var(--nuvero-blue);">
              <strong>MEMORY CONTEXT:</strong> Recalls Ramesh attended 18 sessions in August • Preferred language: Hindi.
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 04',
        category: 'PRODUCTION RESULTS',
        eyebrow: 'MEASURABLE OUTCOME',
        headline: 'Processes voice notes. <span class="highlight-red">Routes medical queries instantly.</span>',
        lead: 'Senior members feel cherished and heard. Zero operational backlog for the support staff.',
        mockupTitle: 'PRODUCTION METRICS // GOHAPPY CLUB',
        mockupStatus: 'VERIFIED LEDGER',
        renderMockup: () => `
          <div class="outcome-ledger-card">
            <div class="outcome-box focal">
              <div class="outcome-number">&lt;5s</div>
              <div class="outcome-title">REPLY SPEED</div>
              <div class="outcome-sub">Down from 8+ hours</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">6</div>
              <div class="outcome-title">LANGUAGES</div>
              <div class="outcome-sub">Voice notes & text</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">100%</div>
              <div class="outcome-title">SAFETY TRIAGE</div>
              <div class="outcome-sub">Medical queries to doctor</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-3',
    series: 'CASE STUDY',
    categoryTag: 'CAMPAIGN ENGINE',
    client: 'Marketrz Agency',
    sector: 'Performance Growth & Outbound',
    title: 'Autonomous Campaign Engine',
    shortDesc: 'Compressing a 5-day manual campaign launch cycle down to under 45 minutes with autonomous reply triage.',
    caption: `Marketrz Agency spent 5 days setting up a single marketing campaign.

Writing 40 copy variants, building sequence trees, configuring tags, and manually triaging inbox replies drained their senior strategists of creative energy.

They hit a hard operational ceiling: taking on more clients meant hiring more people to do repetitive data entry.

We engineered an AI campaign engine:
• Generates high-converting copy variants directly from client strategy briefs
• Pushes clean sequences to outbound infrastructure in minutes
• Continuously scores and tests variant performance
• Triages incoming replies and drafts custom responses instantly

Campaign setup time dropped by 80 percent. One brief turns into a live sequenced campaign in under an hour.

Turn your manual marketing toil into infrastructure at nuvero.space.

#MarketingOps #B2BGrowth #OutboundSystems #AIInfrastructure #NuveroAI`,
    slides: [
      {
        slideNum: '01 / 04',
        category: 'CASE STUDY // 03',
        eyebrow: 'AGENCY CAPACITY CEILING',
        headline: 'Marketrz Agency spent <span class="highlight-red">5 days setting up one campaign.</span>',
        lead: 'When campaign assembly takes a full business week, agency growth is directly throttled by headcount.',
        mockupTitle: 'CAMPAIGN ASSEMBLY SINK // TIME AUDIT',
        mockupStatus: '5 DAYS TO LAUNCH',
        renderMockup: () => `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="background: #ffffff; border: 2px solid var(--nuvero-blue); border-radius: 8px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue);">5-DAY TIME SINK PER CLIENT LAUNCH</span>
                <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">32 HRS TOIL</span>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="background: var(--nuvero-tan-elevated); padding: 10px; border-radius: 6px; border: 1px solid rgba(0,48,73,0.2);">
                  <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">DAYS 1-2</div>
                  <div style="font-family: var(--font-display); font-size: 30px; font-weight: 700; color: var(--nuvero-blue);">Draft 40 variants</div>
                </div>
                <div style="background: var(--nuvero-tan-elevated); padding: 10px; border-radius: 6px; border: 1px solid rgba(0,48,73,0.2);">
                  <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">DAY 3</div>
                  <div style="font-family: var(--font-display); font-size: 30px; font-weight: 700; color: var(--nuvero-blue);">Tagging & logic</div>
                </div>
                <div style="background: #FFF5F5; padding: 10px; border-radius: 6px; border: 1.5px solid var(--nuvero-red);">
                  <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">DAYS 4-5</div>
                  <div style="font-family: var(--font-display); font-size: 30px; font-weight: 700; color: var(--nuvero-dark-red);">QA & launch delay</div>
                </div>
              </div>
            </div>

            <div style="background: rgba(193, 18, 31, 0.08); border: 1.5px solid var(--nuvero-red); border-radius: 6px; padding: 12px 16px; font-family: var(--font-mono); font-size: 30px; color: var(--nuvero-blue);">
              <strong>CAPACITY HARD CEILING:</strong> Max 4 concurrent client campaigns before needing expensive new hires.
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 04',
        category: 'THE BOTTLENECK',
        eyebrow: 'COGNITIVE EXHAUSTION',
        headline: 'Writing variants and triaging replies <span class="highlight-red">drained their team.</span>',
        lead: 'Senior growth strategists spent 70% of their workday acting as manual copy-paste bridges between software.',
        mockupTitle: 'STRATEGIST WORKDAY BREAKDOWN',
        mockupStatus: '70% MANUAL TOIL',
        renderMockup: () => `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">COPY DECK GRIND</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Writing 40 slightly altered email hooks manually</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">CREATIVE DRAIN</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">INBOX NOISE</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Sorting through hundreds of out-of-office & bounce emails</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">TIME SINK</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">TOOL SWITCHING</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Copy-pasting leads between Google Sheets, Smartlead, and Slack</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">ERROR-PRONE</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 04',
        category: 'SYSTEM BLUEPRINT',
        eyebrow: 'INFRASTRUCTURE DEPLOYED',
        headline: 'Built an AI campaign engine that <span class="highlight-red">cuts setup time by 80%.</span>',
        lead: 'Direct pipeline from brief ingestion to variant generation, sequence deployment, and live reply triage.',
        mockupTitle: 'CAMPAIGN ENGINE WORKFLOW // LLM + SMARTLEAD',
        mockupStatus: 'AUTOMATED PIPELINE',
        renderMockup: () => `
          <div class="workflow-pipeline-grid">
            <div class="workflow-node-card">
              <div class="node-header-row">
                <span class="node-step-tag">01. INGEST</span>
                <span style="color: #22c55e;">✓</span>
              </div>
              <div class="node-title">Brief Intake</div>
              <div class="node-desc">Extracts ICP angles and value props in 30s</div>
              <div class="node-meta-stat">1-Click Brief</div>
            </div>

            <div class="workflow-node-card focal">
              <div class="node-header-row">
                <span class="node-step-tag">02. GENERATE</span>
                <span style="color: var(--nuvero-red);">★</span>
              </div>
              <div class="node-title">Variant Engine</div>
              <div class="node-desc">Builds 40 ranked copy sequences with QA scoring</div>
              <div class="node-meta-stat" style="background: var(--nuvero-red);">Score: 94/100</div>
            </div>

            <div class="workflow-node-card">
              <div class="node-header-row">
                <span class="node-step-tag">03. TRIAGE</span>
                <span style="color: #22c55e;">✓</span>
              </div>
              <div class="node-title">Inbox Copilot</div>
              <div class="node-desc">Classifies positive leads and drafts replies</div>
              <div class="node-meta-stat">Slack Alert</div>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 04',
        category: 'PRODUCTION RESULTS',
        eyebrow: 'MEASURABLE OUTCOME',
        headline: 'One brief turns into a live campaign <span class="highlight-red">in under one hour.</span>',
        lead: 'Strategists focus purely on client strategy. The Nuvero engine handles execution and triage.',
        mockupTitle: 'PRODUCTION METRICS // MARKETRZ AGENCY',
        mockupStatus: 'VERIFIED LEDGER',
        renderMockup: () => `
          <div class="outcome-ledger-card">
            <div class="outcome-box focal">
              <div class="outcome-number">80%</div>
              <div class="outcome-title">SETUP CUT</div>
              <div class="outcome-sub">From 5 days to 45 mins</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">&lt;45m</div>
              <div class="outcome-title">BRIEF TO LIVE</div>
              <div class="outcome-sub">Full sequence deployed</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">3.4x</div>
              <div class="outcome-title">CLIENT CAPACITY</div>
              <div class="outcome-sub">Zero additional hires</div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'post-4',
    series: 'CASE STUDY',
    categoryTag: 'WORKFLOW ENGINE',
    client: 'Adfactors PR',
    sector: 'Enterprise PR & Communications',
    title: 'Single-Window Quoting Engine',
    shortDesc: 'Retiring 178 disjointed pricing spreadsheets to generate consistent client-ready PDF quotes instantly.',
    caption: `Adfactors PR consultants built quotes manually from 178 different spreadsheets.

Every time a corporate client requested a multi-city PR campaign, consultants had to dig through local desktop files, outdated rate cards, and broken formulas.

The result: slow turnaround, pricing discrepancies between branches, and senior partners spending hours reviewing quote calculations.

We built a unified single-window booking and quoting platform:
• Replaced 178 unlinked spreadsheets with one central rate engine
• Dynamic service bundling and tier-based margin calculations
• Automated brand-compliant PDF proposal generation with one click
• Full audit logs and approval guardrails for enterprise compliance

Consultants pick their options and generate client-ready PDF quotes in under 2 minutes.

Turn your spreadsheet chaos into infrastructure at nuvero.space.

#EnterpriseOps #PRTech #WorkflowAutomation #ProposalEngine #NuveroAI`,
    slides: [
      {
        slideNum: '01 / 04',
        category: 'CASE STUDY // 04',
        eyebrow: 'ENTERPRISE PR BOTTLENECK',
        headline: 'Consultants built quotes manually from <span class="highlight-red">178 spreadsheets.</span>',
        lead: 'When pricing logic lives across scattered Excel files, every enterprise proposal is a high-risk gamble.',
        mockupTitle: 'SPREADSHEET CHAOS AUDIT // ADFACTORS PR',
        mockupStatus: '178 UNLINKED FILES',
        renderMockup: () => `
          <div class="sheets-comparison-split">
            <div class="sheet-chaos-card">
              <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">LEGACY EXCEL SPREADSHEETS:</div>
              <div class="chaos-file-item">
                <span>📄 RateCard_2023_v4_Final.xlsx</span>
                <span style="color: var(--nuvero-red); font-weight: 700;">OUTDATED</span>
              </div>
              <div class="chaos-file-item">
                <span>📄 Mumbai_MediaKit_Discount.xlsx</span>
                <span style="color: var(--nuvero-red); font-weight: 700;">#REF!</span>
              </div>
              <div class="chaos-file-item">
                <span>📄 Delhi_CrisisRetainer_Old.xlsx</span>
                <span style="color: var(--nuvero-red); font-weight: 700;">UNLINKED</span>
              </div>
            </div>

            <div style="background: #ffffff; border: 2px solid var(--nuvero-blue); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; justify-content: space-around;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-blue-subtle);">TIME PER MULTI-CITY QUOTE</div>
                <div style="font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--nuvero-blue);">4 to 6 Hours</div>
              </div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">MARGIN DRIFT RISK</div>
                <div style="font-family: var(--font-body); font-size: 30px; color: var(--nuvero-dark-red); font-weight: 600;">Pricing discrepancies between regional offices</div>
              </div>
            </div>
          </div>
        `
      },
      {
        slideNum: '02 / 04',
        category: 'THE BOTTLENECK',
        eyebrow: 'MARGIN DRIFT & REVIEW BOTTLENECK',
        headline: 'Pricing was slow, <span class="highlight-red">error-prone, and inconsistent.</span>',
        lead: 'Senior partners were stuck auditing manual Excel formulas instead of advising top clients.',
        mockupTitle: 'COST OF SPREADSHEET TOIL',
        mockupStatus: 'HIGH MARGIN RISK',
        renderMockup: () => `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">REGIONAL DISCREPANCY</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Mumbai, Delhi, and Bangalore branches quoting different margins</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">INCONSISTENT</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">PARTNER BOTTLENECK</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Senior partners required to manually audit every PDF formula</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">SLOW CYCLE</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: var(--nuvero-red);">PROPOSAL FORMATTING</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Manual export into PowerPoint resulted in mismatched typography</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">OFF-BRAND</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '03 / 04',
        category: 'SYSTEM BLUEPRINT',
        eyebrow: 'INFRASTRUCTURE DEPLOYED',
        headline: 'Built a centralized, <span class="highlight-red">single-window booking platform.</span>',
        lead: 'One source of truth for rate cards, multi-tier city bundling, and automated proposal generation.',
        mockupTitle: 'SINGLE-WINDOW QUOTING STUDIO // NUVERO PLATFORM',
        mockupStatus: 'CENTRALIZED ENGINE',
        renderMockup: () => `
          <div class="modern-platform-card">
            <div class="platform-row">
              <span>SCOPE: 5-City Press Conference + Crisis Retainer</span>
              <span style="color: #22c55e;">✓ VALIDATED</span>
            </div>
            <div class="platform-row" style="background: var(--nuvero-tan-elevated);">
              <span>RATE CARD: Q3 Master Tier (Delhi • Mumbai • BLR)</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: var(--nuvero-blue);">LOCKED MARGIN</span>
            </div>
            <div class="platform-row" style="border: 2px solid var(--nuvero-red); background: rgba(193, 18, 31, 0.06);">
              <span style="font-weight: 700; color: var(--nuvero-red);">1-CLICK ACTION: Generate Boardroom PDF Proposal</span>
              <span style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; background: var(--nuvero-red); color: #fff; padding: 2px 8px; border-radius: 4px;">READY (<2s)</span>
            </div>
          </div>
        `
      },
      {
        slideNum: '04 / 04',
        category: 'PRODUCTION RESULTS',
        eyebrow: 'MEASURABLE OUTCOME',
        headline: 'Generate client-ready quotes instantly. <span class="highlight-red">No more spreadsheets.</span>',
        lead: '178 legacy spreadsheets retired. Every client proposal is accurate, on-brand, and generated in seconds.',
        mockupTitle: 'PRODUCTION METRICS // ADFACTORS PR',
        mockupStatus: 'VERIFIED LEDGER',
        renderMockup: () => `
          <div class="outcome-ledger-card">
            <div class="outcome-box focal">
              <div class="outcome-number">0</div>
              <div class="outcome-title">SPREADSHEETS</div>
              <div class="outcome-sub">178 legacy files retired</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">&lt;2m</div>
              <div class="outcome-title">PROPOSAL TIME</div>
              <div class="outcome-sub">Down from 5 hours</div>
            </div>
            <div class="outcome-box">
              <div class="outcome-number">100%</div>
              <div class="outcome-title">PRICING ACCURACY</div>
              <div class="outcome-sub">Across all regional branches</div>
            </div>
          </div>
        `
      }
    ]
  }
];

// App State
const state = {
  currentPostIndex: 0,
  currentSlideIndex: 0,
  aspectRatio: '4-5', // '4-5' (1080x1350) or '1-1' (1080x1080)
  theme: 'dark', // 'dark' (Default Obsidian/Navy) or 'tan' (Signature)
  viewMode: 'single', // 'single' or 'grid'
  zoomLevel: 0.58
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderCanvas();
  updateCaptionDrawer();
  setupEventListeners();
  autoScaleCanvas();
  window.addEventListener('resize', autoScaleCanvas);
});

// Render Sidebar Post Selection Cards with Series Grouping
function renderSidebar() {
  const listContainer = document.getElementById('postListContainer');
  if (!listContainer) return;

  const brandPosts = POSTS_DATA.filter(p => p.series === 'BRAND INFRASTRUCTURE');
  const casePosts = POSTS_DATA.filter(p => p.series === 'CASE STUDY' || !p.series);

  let html = '';

  html += `<div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--nuvero-red); padding: 8px 6px 4px 6px; display: flex; align-items: center; justify-content: space-between;">
    <span>BRAND INFRASTRUCTURE SERIES</span>
    <span style="background: rgba(193,18,31,0.15); padding: 1px 6px; border-radius: 4px;">5 POSTS</span>
  </div>`;

  html += brandPosts.map(post => {
    const idx = POSTS_DATA.indexOf(post);
    const slideCountTag = post.slides.length === 1 ? 'STATIC' : `${post.slides.length} SLIDES`;
    return `
      <div class="post-card-item ${idx === state.currentPostIndex ? 'active' : ''}" data-post-index="${idx}">
        <div class="post-card-header">
          <span class="post-card-id">POST 0${idx + 1}</span>
          <span class="post-card-client" style="color: var(--nuvero-red);">${slideCountTag}</span>
        </div>
        <div class="post-card-title">${post.title}</div>
        <div class="post-card-desc">${post.shortDesc}</div>
      </div>
    `;
  }).join('');

  html += `<div style="font-family: var(--font-mono); font-size: 30px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--nuvero-blue-subtle); padding: 16px 6px 4px 6px; display: flex; align-items: center; justify-content: space-between;">
    <span>PRODUCTION CASE STUDIES</span>
    <span style="background: rgba(0,48,73,0.1); padding: 1px 6px; border-radius: 4px;">4 POSTS</span>
  </div>`;

  html += casePosts.map(post => {
    const idx = POSTS_DATA.indexOf(post);
    return `
      <div class="post-card-item ${idx === state.currentPostIndex ? 'active' : ''}" data-post-index="${idx}">
        <div class="post-card-header">
          <span class="post-card-id">POST 0${idx + 1}</span>
          <span class="post-card-client">${post.client}</span>
        </div>
        <div class="post-card-title">${post.title}</div>
        <div class="post-card-desc">${post.shortDesc}</div>
      </div>
    `;
  }).join('');

  listContainer.innerHTML = html;

  document.querySelectorAll('.post-card-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.postIndex, 10);
      setPost(idx);
    });
  });
}

// Switch Active Post
function setPost(postIndex) {
  state.currentPostIndex = postIndex;
  state.currentSlideIndex = 0;
  renderSidebar();
  renderCanvas();
  updateCaptionDrawer();
  updateSlidePills();
}

// Switch Active Slide
function setSlide(slideIndex) {
  state.currentSlideIndex = slideIndex;
  renderCanvas();
  updateSlidePills();
}

// Update Slide Pill Navigation Bar dynamically
function updateSlidePills() {
  const pillNav = document.getElementById('slidePillNav');
  if (!pillNav) return;

  const currentPost = POSTS_DATA[state.currentPostIndex];

  pillNav.innerHTML = currentPost.slides.map((slide, idx) => {
    const label = slide.shortTitle || `Slide 0${idx + 1}`;
    return `
      <button class="slide-pill ${idx === state.currentSlideIndex ? 'active' : ''}" data-slide="${idx}">
        ${label}
      </button>
    `;
  }).join('');

  pillNav.querySelectorAll('.slide-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.dataset.slide, 10);
      setSlide(idx);
    });
  });
}

// Update Instagram Caption Drawer
function updateCaptionDrawer() {
  const currentPost = POSTS_DATA[state.currentPostIndex];
  const captionEl = document.getElementById('captionContent');
  const countEl = document.getElementById('captionCharCount');
  if (captionEl) {
    captionEl.textContent = currentPost.caption;
  }
  if (countEl) {
    countEl.textContent = `${currentPost.caption.length} characters`;
  }
}

// Generate HTML for an Instagram Post Slide
function generateSlideHTML(post, slide, slideIndex, isLastSlide) {
  const ratioClass = state.aspectRatio === '1-1' ? 'ratio-1-1' : 'ratio-4-5';
  const isInfra = post.series === 'BRAND INFRASTRUCTURE';
  const themeClass = state.theme === 'dark' ? 'theme-dark' : 'theme-tan';
  const seriesClass = isInfra ? 'series-infrastructure' : 'series-case-study';
  const isMultiSlide = post.slides.length > 1;
  const progressPct = ((slideIndex + 1) / post.slides.length) * 100;
  const isCover = Boolean(slide.isCover);
  const isFullStage = Boolean(slide.isCover || slide.isFullStage);

  // Determine stage content: custom visual artifact or fallback mockup window
  let stageContent = '';
  if (typeof slide.renderCustomStage === 'function') {
    stageContent = slide.renderCustomStage();
  } else if (typeof slide.renderMockup === 'function') {
    stageContent = `
      <div class="social-ui-window">
        <div class="window-top-bar">
          <div class="window-dots">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
          </div>
          <span class="window-title">${slide.mockupTitle || ''}</span>
          <span class="window-status-pill">${slide.mockupStatus || 'SYSTEM'}</span>
        </div>
        <div class="window-body">
          ${slide.renderMockup()}
        </div>
      </div>
    `;
  }

  // Next cliffhanger teaser text
  const nextTeaserText = slide.nextTeaser || (slideIndex < post.slides.length - 1 ? (post.slides[slideIndex + 1].shortTitle || 'Next Slide') : 'nuvero.space');

  return `
    <div class="insta-slide ${ratioClass} ${themeClass} ${seriesClass}" id="slideRender_${slideIndex}">
      
      <!-- Giant Brand Logo Seam Bridge (100% Post Scale Half-and-Half) -->
      ${slide.seamBridge ? renderGiantLogoBridge(slide.seamBridge) : ''}

      <!-- Slide-to-Slide Visual Edge Bridge (Seamless Swipe Cue) -->
      ${(!isLastSlide && isMultiSlide && !slide.seamBridge) ? `
        <div class="slide-edge-bridge">
          <span>SWIPE</span>
          <span class="bridge-arrow">→</span>
        </div>
      ` : ''}

      <!-- Top Social Header (Brand pill + Connected Progress Rail) -->
      <div class="social-top-row">
        <div class="social-brand-pill">
          <div class="brand-logo-icon">
            ${NUVERO_LOGO_SVG}
          </div>
          <span class="brand-handle-text">@nuvero.space</span>
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
          ${isMultiSlide ? `
            <div class="carousel-progress-rail">
              <span class="progress-rail-text">0${slideIndex + 1} / 0${post.slides.length}</span>
              <div class="progress-track-bar">
                <div class="progress-track-fill" style="width: ${progressPct}%;"></div>
              </div>
            </div>
          ` : `
            <div class="social-category-tag">${post.categoryTag}</div>
          `}
          ${isMultiSlide ? `<div class="social-category-tag">${post.categoryTag}</div>` : ''}
        </div>
      </div>

      <!-- Editorial Text Block (rendered on non-full/non-cover slides) -->
      ${!isFullStage ? `
        <div class="social-text-block">
          <div class="social-eyebrow">
            <span class="dot"></span>
            <span>${slide.category} // ${slide.eyebrow}</span>
          </div>
          <h1 class="social-headline" contenteditable="true" spellcheck="false">${slide.headline}</h1>
          <p class="social-lead" contenteditable="true" spellcheck="false">${slide.lead}</p>
        </div>
      ` : ''}

      <!-- Center Stage: Bespoke Visual Artifact or Cover Stage -->
      <div class="social-center-stage" style="${isFullStage ? 'height: 100%; justify-content: stretch;' : ''}">
        ${stageContent}
      </div>

      <!-- Bottom Social Bar (Author lockup + Next-slide cliffhanger) -->
      <div class="social-bottom-bar">
        <div class="bottom-author-lockup">
          <span class="lockup-domain">nuvero.space</span>
          <span class="lockup-tag">/ Autonomous Operations</span>
        </div>
        
        <div class="bottom-social-action">
          ${(!isLastSlide && isMultiSlide) ? `
            <div class="next-slide-cliffhanger" onclick="setSlide(${slideIndex + 1})">
              <span class="cliffhanger-label">NEXT:</span>
              <span class="cliffhanger-text">${nextTeaserText}</span>
              <span class="cliffhanger-arrow">→</span>
            </div>
          ` : `
            <div class="next-slide-cliffhanger" style="border-color: rgba(16, 185, 129, 0.35); background: rgba(16, 185, 129, 0.1);">
              <span class="cliffhanger-label" style="color: #10B981;">SAVE</span>
              <span class="cliffhanger-text">📌 Bookmark this blueprint</span>
            </div>
          `}
        </div>
      </div>

    </div>
  `;
}

// Render Canvas according to Single or Storyboard Grid mode
function renderCanvas() {
  const stage = document.getElementById('canvasStage');
  if (!stage) return;

  const currentPost = POSTS_DATA[state.currentPostIndex];

  if (state.viewMode === 'single') {
    const currentSlide = currentPost.slides[state.currentSlideIndex];
    const isLastSlide = state.currentSlideIndex === currentPost.slides.length - 1;

    stage.innerHTML = `
      <div class="post-frame-wrapper" style="transform: scale(${state.zoomLevel});">
        <div class="post-frame-label">
          <span>${currentPost.client.toUpperCase()} // SLIDE ${state.currentSlideIndex + 1} OF ${currentPost.slides.length}</span>
          <span class="badge">${state.aspectRatio === '1-1' ? '1080 × 1080 (1:1)' : '1080 × 1350 (4:5)'}</span>
        </div>
        ${generateSlideHTML(currentPost, currentSlide, state.currentSlideIndex, isLastSlide)}
      </div>
    `;
  } else {
    stage.innerHTML = `
      <div class="grid-view-container" style="transform: scale(${state.zoomLevel * 0.7}); transform-origin: top center;">
        ${currentPost.slides.map((slide, idx) => `
          <div class="post-frame-wrapper">
            <div class="post-frame-label">
              <span>SLIDE 0${idx + 1} // ${slide.category}</span>
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 30px;" onclick="exportSingleSlideById('slideRender_${idx}', ${idx + 1})">PNG ↓</button>
            </div>
            ${generateSlideHTML(currentPost, slide, idx, idx === currentPost.slides.length - 1)}
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Auto Scale Canvas
function autoScaleCanvas() {
  const stage = document.getElementById('canvasStage');
  if (!stage) return;
  const stageHeight = stage.clientHeight - 80;
  const targetHeight = state.aspectRatio === '1-1' ? 1080 : 1350;
  
  if (state.viewMode === 'single') {
    const calculatedScale = Math.min(0.68, Math.max(0.35, stageHeight / targetHeight));
    state.zoomLevel = calculatedScale;
    const wrapper = document.querySelector('.post-frame-wrapper');
    if (wrapper) {
      wrapper.style.transform = `scale(${state.zoomLevel})`;
    }
  }
}

// Event Listeners
function setupEventListeners() {
  document.getElementById('ratio45Btn')?.addEventListener('click', () => {
    state.aspectRatio = '4-5';
    document.getElementById('ratio45Btn').classList.add('active');
    document.getElementById('ratio11Btn').classList.remove('active');
    renderCanvas();
    autoScaleCanvas();
  });

  document.getElementById('ratio11Btn')?.addEventListener('click', () => {
    state.aspectRatio = '1-1';
    document.getElementById('ratio11Btn').classList.add('active');
    document.getElementById('ratio45Btn').classList.remove('active');
    renderCanvas();
    autoScaleCanvas();
  });

  document.getElementById('themeTanBtn')?.addEventListener('click', () => {
    state.theme = 'tan';
    document.getElementById('themeTanBtn').classList.add('active');
    document.getElementById('themeDarkBtn').classList.remove('active');
    renderCanvas();
  });

  document.getElementById('themeDarkBtn')?.addEventListener('click', () => {
    state.theme = 'dark';
    document.getElementById('themeDarkBtn').classList.add('active');
    document.getElementById('themeTanBtn').classList.remove('active');
    renderCanvas();
  });

  document.getElementById('viewSingleBtn')?.addEventListener('click', () => {
    state.viewMode = 'single';
    document.getElementById('viewSingleBtn').classList.add('active');
    document.getElementById('viewGridBtn').classList.remove('active');
    renderCanvas();
    autoScaleCanvas();
  });

  document.getElementById('viewGridBtn')?.addEventListener('click', () => {
    state.viewMode = 'grid';
    document.getElementById('viewGridBtn').classList.add('active');
    document.getElementById('viewSingleBtn').classList.remove('active');
    renderCanvas();
  });

  document.querySelectorAll('.slide-pill').forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      setSlide(idx);
    });
  });

  document.getElementById('prevSlideBtn')?.addEventListener('click', () => {
    if (state.currentSlideIndex > 0) setSlide(state.currentSlideIndex - 1);
  });

  document.getElementById('nextSlideBtn')?.addEventListener('click', () => {
    const max = POSTS_DATA[state.currentPostIndex].slides.length - 1;
    if (state.currentSlideIndex < max) setSlide(state.currentSlideIndex + 1);
  });

  window.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.getAttribute('contenteditable') === 'true') {
      return;
    }
    if (e.key === 'ArrowLeft') {
      if (state.currentSlideIndex > 0) setSlide(state.currentSlideIndex - 1);
    } else if (e.key === 'ArrowRight') {
      const max = POSTS_DATA[state.currentPostIndex].slides.length - 1;
      if (state.currentSlideIndex < max) setSlide(state.currentSlideIndex + 1);
    }
  });

  document.getElementById('copyCaptionBtn')?.addEventListener('click', () => {
    const currentPost = POSTS_DATA[state.currentPostIndex];
    navigator.clipboard.writeText(currentPost.caption).then(() => {
      showToast('Caption copied to clipboard. Zero em dashes.');
    }).catch(() => {
      showToast('Please select text manually.');
    });
  });

  document.getElementById('exportCurrentBtn')?.addEventListener('click', () => {
    exportCurrentSlidePNG();
  });

  document.getElementById('exportAllBtn')?.addEventListener('click', () => {
    exportAllSlidesSequential();
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * High-Fidelity Off-Screen Capture Pipeline:
 * 1. Creates an isolated unscaled offscreen container at exact 1:1 pixel dimensions (1080x1350 or 1080x1080).
 * 2. Clones the slide without any parent CSS scale transforms to avoid character metric/kerning collisions.
 * 3. Uses dom-to-image-more (SVG foreignObject vector renderer) with html2canvas fallback.
 */
async function captureSlideCleanPNG(slideElement, targetWidth, targetHeight) {
  if (document.fonts) {
    await document.fonts.ready;
  }

  // Create clean offscreen staging container
  const staging = document.createElement('div');
  staging.style.position = 'fixed';
  staging.style.left = '-9999px';
  staging.style.top = '0';
  staging.style.width = targetWidth + 'px';
  staging.style.height = targetHeight + 'px';
  staging.style.overflow = 'hidden';
  staging.style.transform = 'none';
  staging.style.zIndex = '-99999';

  // Clone slide
  const clone = slideElement.cloneNode(true);
  clone.style.transform = 'none';
  clone.style.boxShadow = 'none';
  clone.style.width = targetWidth + 'px';
  clone.style.height = targetHeight + 'px';
  clone.style.margin = '0';

  // Normalize highlight badges to prevent canvas rotation text drift and guarantee full coverage
  clone.querySelectorAll('.pixel-highlight, .highlight-pill').forEach(el => {
    el.style.transform = 'none';
    el.style.display = 'inline-block';
    el.style.whiteSpace = 'nowrap';
    el.style.padding = '4px 30px 8px 30px';
    el.style.boxSizing = 'border-box';
  });

  staging.appendChild(clone);
  document.body.appendChild(staging);

  // Allow DOM styles to settle
  await new Promise(r => setTimeout(r, 160));

  let dataUrl = null;

  // Try domtoimage first (vector-crisp SVG rendering, no letter collision)
  if (typeof domtoimage !== 'undefined') {
    try {
      dataUrl = await domtoimage.toPng(clone, {
        width: targetWidth * 2,
        height: targetHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
          width: targetWidth + 'px',
          height: targetHeight + 'px'
        }
      });
    } catch (e) {
      console.warn('domtoimage error, falling back to html2canvas:', e);
    }
  }

  // Fallback to html2canvas on unscaled clone
  if (!dataUrl && typeof html2canvas !== 'undefined') {
    const canvas = await html2canvas(clone, {
      scale: 2,
      width: targetWidth,
      height: targetHeight,
      windowWidth: targetWidth,
      windowHeight: targetHeight,
      scrollX: 0,
      scrollY: 0,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc) => {
        clonedDoc.querySelectorAll('.pixel-highlight, .highlight-pill').forEach(el => {
          el.style.transform = 'none';
          el.style.display = 'inline-block';
          el.style.whiteSpace = 'nowrap';
          el.style.padding = '4px 30px 8px 30px';
          el.style.boxSizing = 'border-box';
        });
      }
    });
    dataUrl = canvas.toDataURL('image/png');
  }

  // Clean up
  document.body.removeChild(staging);

  return dataUrl;
}

// 2x Retina PNG Exporter for Active Slide
async function exportCurrentSlidePNG() {
  const slideEl = document.getElementById(`slideRender_${state.currentSlideIndex}`) || document.querySelector('.insta-slide');
  if (!slideEl) {
    showToast('Slide element not found');
    return;
  }

  showToast('Generating pixel-perfect 2x PNG export...');

  try {
    const currentPost = POSTS_DATA[state.currentPostIndex];
    const clientSlug = currentPost.client.toLowerCase().replace(/\s+/g, '-');
    const filename = `nuvero-${clientSlug}-slide-0${state.currentSlideIndex + 1}-${state.aspectRatio}.png`;
    const targetWidth = 1080;
    const targetHeight = state.aspectRatio === '1-1' ? 1080 : 1350;

    const dataUrl = await captureSlideCleanPNG(slideEl, targetWidth, targetHeight);

    if (!dataUrl) {
      showToast('Capture failed. Please try again.');
      return;
    }

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();

    showToast(`Saved ${filename}`);
  } catch (error) {
    console.error('Export error:', error);
    showToast('Export failed.');
  }
}

async function exportSingleSlideById(elementId, slideNum) {
  const slideEl = document.getElementById(elementId);
  if (!slideEl) return;

  showToast(`Rendering Slide 0${slideNum} PNG...`);
  try {
    const currentPost = POSTS_DATA[state.currentPostIndex];
    const clientSlug = currentPost.client.toLowerCase().replace(/\s+/g, '-');
    const filename = `nuvero-${clientSlug}-slide-0${slideNum}-${state.aspectRatio}.png`;
    const targetWidth = 1080;
    const targetHeight = state.aspectRatio === '1-1' ? 1080 : 1350;

    const dataUrl = await captureSlideCleanPNG(slideEl, targetWidth, targetHeight);
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
    showToast(`Saved ${filename}`);
  } catch (err) {
    console.error(err);
    showToast('Export failed');
  }
}

async function exportAllSlidesSequential() {
  const currentPost = POSTS_DATA[state.currentPostIndex];
  showToast(`Starting batch download for ${currentPost.client}...`);

  const originalMode = state.viewMode;
  state.viewMode = 'grid';
  renderCanvas();

  await new Promise(r => setTimeout(r, 400));

  const targetWidth = 1080;
  const targetHeight = state.aspectRatio === '1-1' ? 1080 : 1350;

  for (let i = 0; i < currentPost.slides.length; i++) {
    const el = document.getElementById(`slideRender_${i}`);
    if (el) {
      const clientSlug = currentPost.client.toLowerCase().replace(/\s+/g, '-');
      const filename = `nuvero-${clientSlug}-slide-0${i + 1}-${state.aspectRatio}.png`;
      
      const dataUrl = await captureSlideCleanPNG(el, targetWidth, targetHeight);
      if (dataUrl) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      }

      await new Promise(r => setTimeout(r, 350));
    }
  }

  showToast(`All ${currentPost.slides.length} slides for ${currentPost.client} exported successfully!`);
}

window.setPost = setPost;
window.setSlide = setSlide;
window.exportSingleSlideById = exportSingleSlideById;
