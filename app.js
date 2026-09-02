/**
 * NUVERO AI: INSTAGRAM CAROUSEL STUDIO & RENDERING ENGINE
 * High-performing, genuine Instagram post layouts with rich bespoke UI mockups,
 * zero empty dead space, verified brand tokens, and strict 0-em-dash rule.
 * Features bulletproof 2x Retina PNG export engine (Zero text overlapping/glyph collision).
 */

// Embedded official Nuvero vector mark for instant, crisp rendering
const NUVERO_LOGO_SVG = `
<svg viewBox="0 0 1007 983" fill="none" xmlns="http://www.w3.org/2000/svg" class="brand-svg-logo" style="width: 24px; height: 24px;">
  <path fill-rule="evenodd" clip-rule="evenodd" fill="#C1121F"
    d="M871.000,-0.000 C961.306,-1.478 1032.106,75.180 992.1000,166.000 C975.504,206.632 939.428,228.835 888.1000,237.000 C816.790,248.692 746.791,161.035 768.1000,86.1000 C779.925,50.580 806.306,20.681 839.1000,6.1000 C850.332,4.667 860.668,2.333 871.000,-0.000 ZM240.1000,12.1000 C326.985,16.026 341.399,63.639 374.1000,117.000 C401.664,157.996 428.336,199.004 455.000,239.1000 C614.984,485.975 775.016,732.025 935.000,978.000 C880.005,978.000 824.995,978.000 769.1000,978.000 C744.048,977.1000 712.031,981.000 691.1000,974.000 C623.928,950.211 592.841,870.002 556.1000,813.000 C455.010,654.682 352.990,496.317 250.1000,338.000 C250.667,338.000 250.333,338.000 249.1000,338.000 C249.1000,484.985 249.1000,632.015 249.1000,779.000 C250.004,835.537 263.308,919.465 236.000,954.1000 C227.924,965.509 211.872,974.645 197.000,978.000 C163.542,985.548 56.150,983.098 35.000,970.000 C-13.413,940.019 3.996,832.765 3.1000,760.000 C3.1000,586.684 3.1000,413.316 3.1000,239.1000 C3.998,186.013 -8.264,72.039 14.1000,39.1000 C42.545,2.064 129.712,13.997 194.000,13.1000 C209.665,13.667 225.335,13.333 240.1000,12.1000 ZM868.1000,284.000 C914.759,283.487 973.401,279.884 992.1000,306.000 C1015.415,335.869 1003.004,432.762 1002.1000,480.1000 C1002.1000,631.985 1002.1000,783.015 1002.1000,933.1000 C1001.667,933.000 1000.333,931.1000 999.000,931.000 C920.675,810.012 842.325,688.988 764.000,567.1000 C764.000,547.669 764.000,527.331 764.000,506.1000 C764.001,459.463 753.594,328.717 775.000,304.1000 C789.666,288.751 811.779,289.643 839.000,285.000 C848.999,284.667 859.001,284.333 868.1000,284.000 Z" />
</svg>
`;

// Complete Dataset for all 4 Instagram Carousel Case Studies
const POSTS_DATA = [
  {
    id: 'post-1',
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
                <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 700; color: var(--nuvero-blue);">SWITCHBOARD TRAFFIC (09:00 - 14:00)</span>
              </div>
              <span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--nuvero-red);">850+ CALLS / MO</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 6px;">
              <div style="background: var(--nuvero-tan-elevated); border: 1.5px solid var(--nuvero-blue); border-radius: 8px; padding: 16px;">
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-blue-subtle);">ANSWERED CALLS</div>
                <div style="font-family: var(--font-display); font-size: 38px; font-weight: 700; color: var(--nuvero-blue); margin: 6px 0;">78%</div>
                <div style="font-family: var(--font-body); font-size: 12px; color: var(--nuvero-blue-muted);">Staff managing live shipments</div>
              </div>
              <div style="background: #FFF5F5; border: 2px solid var(--nuvero-red); border-radius: 8px; padding: 16px;">
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">DROPPED / MISSED</div>
                <div style="font-family: var(--font-display); font-size: 38px; font-weight: 700; color: var(--nuvero-red); margin: 6px 0;">22%</div>
                <div style="font-family: var(--font-body); font-size: 12px; color: var(--nuvero-dark-red); font-weight: 600;">Lost sales opportunities</div>
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
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-blue-subtle);">SURGE DYNAMICS</div>
                <div style="font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Loading dock coordination takes 100% focus</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: var(--nuvero-tan-elevated); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(0,48,73,0.2);">ACTIVE PRIORITY</span>
            </div>

            <div style="background: #FFF5F5; border: 1.5px solid var(--nuvero-red); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">CONCURRENT PHONES</div>
                <div style="font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--nuvero-dark-red); margin-top: 2px;">Switchboard rings continuously with 4+ lines on hold</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.15); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">DROPPED</span>
            </div>

            <div style="background: #FFF5F5; border: 1.5px solid var(--nuvero-red); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">SALES FOLLOW-UP</div>
                <div style="font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--nuvero-dark-red); margin-top: 2px;">0 staff remaining to call back warm quote inquiries</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.15); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">ZERO TOIL</span>
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-blue-subtle);">UNREAD QUEUE AT SUNSET</div>
                <div style="font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--nuvero-red); margin: 2px 0;">420+ Messages</div>
              </div>
              <div style="text-align: right;">
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-blue-subtle);">AVG RESPONSE TIME</div>
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
              <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-blue); margin-bottom: 6px;">SUPPORT TEAM REQUIRED ACROSS 6 DIALECTS:</div>
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

            <div style="background: rgba(0, 48, 73, 0.08); padding: 8px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 11px; color: var(--nuvero-blue);">
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
                <span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--nuvero-blue);">5-DAY TIME SINK PER CLIENT LAUNCH</span>
                <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">32 HRS TOIL</span>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="background: var(--nuvero-tan-elevated); padding: 10px; border-radius: 6px; border: 1px solid rgba(0,48,73,0.2);">
                  <div style="font-family: var(--font-mono); font-size: 10px; font-weight: 700; color: var(--nuvero-blue-subtle);">DAYS 1-2</div>
                  <div style="font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--nuvero-blue);">Draft 40 variants</div>
                </div>
                <div style="background: var(--nuvero-tan-elevated); padding: 10px; border-radius: 6px; border: 1px solid rgba(0,48,73,0.2);">
                  <div style="font-family: var(--font-mono); font-size: 10px; font-weight: 700; color: var(--nuvero-blue-subtle);">DAY 3</div>
                  <div style="font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--nuvero-blue);">Tagging & logic</div>
                </div>
                <div style="background: #FFF5F5; padding: 10px; border-radius: 6px; border: 1.5px solid var(--nuvero-red);">
                  <div style="font-family: var(--font-mono); font-size: 10px; font-weight: 700; color: var(--nuvero-red);">DAYS 4-5</div>
                  <div style="font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--nuvero-dark-red);">QA & launch delay</div>
                </div>
              </div>
            </div>

            <div style="background: rgba(193, 18, 31, 0.08); border: 1.5px solid var(--nuvero-red); border-radius: 6px; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; color: var(--nuvero-blue);">
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
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">COPY DECK GRIND</div>
                <div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Writing 40 slightly altered email hooks manually</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">CREATIVE DRAIN</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">INBOX NOISE</div>
                <div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Sorting through hundreds of out-of-office & bounce emails</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">TIME SINK</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">TOOL SWITCHING</div>
                <div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Copy-pasting leads between Google Sheets, Smartlead, and Slack</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">ERROR-PRONE</span>
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
              <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">LEGACY EXCEL SPREADSHEETS:</div>
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
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-blue-subtle);">TIME PER MULTI-CITY QUOTE</div>
                <div style="font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--nuvero-blue);">4 to 6 Hours</div>
              </div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">MARGIN DRIFT RISK</div>
                <div style="font-family: var(--font-body); font-size: 12px; color: var(--nuvero-dark-red); font-weight: 600;">Pricing discrepancies between regional offices</div>
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
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">REGIONAL DISCREPANCY</div>
                <div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Mumbai, Delhi, and Bangalore branches quoting different margins</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">INCONSISTENT</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">PARTNER BOTTLENECK</div>
                <div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Senior partners required to manually audit every PDF formula</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">SLOW CYCLE</span>
            </div>

            <div style="background: #ffffff; border: 1.5px solid var(--nuvero-blue); border-left: 6px solid var(--nuvero-red); border-radius: 6px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--nuvero-red);">PROPOSAL FORMATTING</div>
                <div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--nuvero-blue); margin-top: 2px;">Manual export into PowerPoint resulted in mismatched typography</div>
              </div>
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: rgba(193,18,31,0.1); color: var(--nuvero-red); padding: 4px 8px; border-radius: 4px;">OFF-BRAND</span>
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
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; background: var(--nuvero-red); color: #fff; padding: 2px 8px; border-radius: 4px;">READY (<2s)</span>
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
  theme: 'tan', // 'tan' (Signature) or 'dark' (Blue)
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

// Render Sidebar Post Selection Cards
function renderSidebar() {
  const listContainer = document.getElementById('postListContainer');
  if (!listContainer) return;

  listContainer.innerHTML = POSTS_DATA.map((post, idx) => `
    <div class="post-card-item ${idx === state.currentPostIndex ? 'active' : ''}" data-post-index="${idx}">
      <div class="post-card-header">
        <span class="post-card-id">POST 0${idx + 1}</span>
        <span class="post-card-client">${post.client}</span>
      </div>
      <div class="post-card-title">${post.title}</div>
      <div class="post-card-desc">${post.shortDesc}</div>
    </div>
  `).join('');

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

// Update Slide Pill Navigation Bar
function updateSlidePills() {
  document.querySelectorAll('.slide-pill').forEach((pill, idx) => {
    if (idx === state.currentSlideIndex) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
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
  const themeClass = state.theme === 'dark' ? 'theme-dark' : 'theme-tan';

  return `
    <div class="insta-slide ${ratioClass} ${themeClass}" id="slideRender_${slideIndex}">
      
      <!-- Top Social Header (Discreet handle + category pill) -->
      <div class="social-top-row">
        <div class="social-brand-pill">
          <div class="brand-logo-icon">
            ${NUVERO_LOGO_SVG}
          </div>
          <span class="brand-handle-text">@nuvero.space</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="social-category-tag">${post.categoryTag}</div>
          <span class="slide-sequence-badge">${slide.slideNum}</span>
        </div>
      </div>

      <!-- High-Impact Editorial Text Block -->
      <div class="social-text-block">
        <div class="social-eyebrow">
          <span class="dot"></span>
          <span>${slide.category} // ${slide.eyebrow}</span>
        </div>
        <h1 class="social-headline" contenteditable="true" spellcheck="false">${slide.headline}</h1>
        <p class="social-lead" contenteditable="true" spellcheck="false">${slide.lead}</p>
      </div>

      <!-- Center Stage: Rich Bespoke UI Mockup -->
      <div class="social-center-stage">
        <div class="social-ui-window">
          <div class="window-top-bar">
            <div class="window-dots">
              <span class="window-dot red"></span>
              <span class="window-dot yellow"></span>
              <span class="window-dot green"></span>
            </div>
            <span class="window-title">${slide.mockupTitle}</span>
            <span class="window-status-pill">${slide.mockupStatus}</span>
          </div>
          <div class="window-body">
            ${slide.renderMockup()}
          </div>
        </div>
      </div>

      <!-- Bottom Social Bar (Clean footer watermark + swipe cue) -->
      <div class="social-bottom-bar">
        <div class="bottom-author-lockup">
          <span class="lockup-domain">nuvero.space</span>
          <span class="lockup-tag">/ Operations into Infrastructure</span>
        </div>
        <div class="bottom-social-action">
          <div class="carousel-dots-pill">
            ${[0, 1, 2, 3].map(i => `
              <div class="carousel-dot ${i === slideIndex ? 'active' : ''}"></div>
            `).join('')}
          </div>
          ${!isLastSlide ? `
            <div class="swipe-action-pill">
              <span>Swipe</span>
              <span>→</span>
            </div>
          ` : `
            <div class="swipe-action-pill" style="background: rgba(0, 48, 73, 0.1); color: var(--nuvero-blue); border-color: rgba(0,48,73,0.3);">
              <span>nuvero.space</span>
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
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 10px;" onclick="exportSingleSlideById('slideRender_${idx}', ${idx + 1})">PNG ↓</button>
            </div>
            ${generateSlideHTML(currentPost, slide, idx, idx === 3)}
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

  staging.appendChild(clone);
  document.body.appendChild(staging);

  // Allow DOM styles to settle
  await new Promise(r => setTimeout(r, 120));

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
      logging: false
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

  showToast(`All 4 slides for ${currentPost.client} exported successfully!`);
}

window.setPost = setPost;
window.setSlide = setSlide;
window.exportSingleSlideById = exportSingleSlideById;
