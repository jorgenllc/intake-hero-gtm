import { useState } from "react";
 
const C = {
  // Apollo earth/sand system
  bg: "#F9F8F6",           // warm neutral page background
  surface: "#FFFFFF",       // white card surfaces
  navBg: "#CBC8C5",        // Apollo sand-40 navigation
  border: "#E2DFDC",       // warm gray border (sand-30)
  off: "#F2F0EE",          // warm off-white alternating bg
  text: "#0D0D0D",         // near-black primary text
  muted: "#67635F",        // warm mid-gray secondary text
  // Apollo sunbeam accent (CTA + on-dark emphasis)
  accent: "#EBF212",
  onDark: "#EBF212",       // text accent on dark surfaces
  // Apollo soft pastels
  softPurple: "#C1B7FF",
  softPink: "#FFBDF5",
  softBlue: "#C5DDFF",
  softYellow: "#F4FB6E",
  // Semantic / functional (unchanged)
  green: "#16A34A",
  greenBg: "#DCFCE7",
  greenLight: "#22C55E",
  amber: "#92400E",
  amberBg: "#FEF3C7",
  amberLight: "#F59E0B",
  red: "#DC2626",
  redBg: "#FEE2E2",
  // Legacy aliases remapped to Apollo equivalents
  white: "#FFFFFF",
  navy: "#0D0D0D",         // dark surface bg & heading text
  violet: "#0D0D0D",       // active/selected → near-black (Apollo primary)
  dark: "#1A1A18",
  lavender: "#F2F0EE",     // was pale purple → warm off-white
  slate: "#111110",
  slateLight: "#1C1C1A",
  sky: "#3B82F6",          // kept for semantic blue uses
};
 
const TABS = [
  { id: "overview", label: "📍 ICP & Overview" },
  { id: "competitive", label: "⚔️ Competitive Intel" },
  { id: "channels", label: "📡 Channels" },
  { id: "personas", label: "👤 Personas" },
  { id: "seasonal", label: "📅 Seasonal" },
  { id: "messaging", label: "💬 Messaging & Talk Tracks" },
  { id: "outreach", label: "📨 Outreach Sequences" },
  { id: "partners", label: "🤝 Partners" },
];
 
const Pill = ({ children, color = C.violet, bg }) => (
  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", background: bg || (color === C.violet ? C.off : color + "15"), color: color === C.violet ? C.text : color, border: `1px solid ${color === C.violet ? C.border : color + "35"}` }}>{children}</span>
);
 
const Card = ({ children, style = {}, dark = false }) => (
  <div style={{ background: dark ? C.navy : C.surface, border: `1px solid ${dark ? "transparent" : C.border}`, borderRadius: 8, padding: "18px 20px", ...style }}>{children}</div>
);
 
const STitle = ({ eyebrow, title, sub }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div style={{ width: 3, height: 14, background: C.accent, borderRadius: 2, flexShrink: 0 }} />
      <span style={{ fontSize: 10.5, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{eyebrow}</span>
    </div>
    <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400, color: C.navy, margin: "0 0 8px", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{title}</h2>
    {sub && <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.65, maxWidth: 620, margin: 0 }}>{sub}</p>}
  </div>
);
 
const Rule = () => <div style={{ borderTop: `1px solid ${C.border}`, margin: "22px 0" }} />;
 
// ─── OVERVIEW / ICP ──────────────────────────────────────────────────────────
function Overview() {
  const icpFields = [
    { label: "Company Size", value: "3–15 field techs", sub: "1–3 office staff, or owner running phones themselves", icon: "👷" },
    { label: "Annual Revenue", value: "$500K–$3M", sub: "Below the threshold where ServiceTitan ROI makes sense", icon: "💵" },
    { label: "Website Traffic", value: "500–2,000+ mo. visitors", sub: "Active on Google LSAs or running paid search", icon: "📊" },
    { label: "Current Tech Stack", value: "HCP, Jobber, or None", sub: "No dedicated AI intake or chat tool in use", icon: "⚙️" },
    { label: "Lead Profile", value: "Primarily residential", sub: "Emergency calls, seasonal spikes, evenings & weekends are peak windows", icon: "🏠" },
    { label: "Pain Signal", value: "Missing after-hours leads", sub: "No chat on site, or using HCP's basic chat bubble with no AI or qualification", icon: "🚨" },
  ];
 
  const dqs = [
    "20+ technicians",
    "Already on ServiceTitan",
    "Primarily commercial / B2B",
    "No website or under 300 monthly visitors",
    "Solo operator — no support staff",
    "Revenue above $5M",
  ];
 
  const winZones = [
    {
      icon: "🏆", title: "HCP User Base — Primary Win Zone", color: C.sky,
      body: "HCP's built-in chat is universally panned by actual users — no AI, no qualification logic, shuts off after hours and reverts to a contact form. HCP serves exactly the 3–15 tech profile that is Leadflo's ICP. These shops are already frustrated with their chat tool and have not committed to an enterprise stack.",
      signal: "Ask: 'Are you using the chat widget that comes with HousecallPro?'",
    },
    {
      icon: "📵", title: "No FSM Platform — Fear Anchor Play", color: C.violet,
      body: "Owner-operators still running phones themselves, using Google Calendar or paper dispatch. They've never heard of Scheduling Pro. Leadflo is the AI upgrade that costs a fraction of the full ServiceTitan stack — positioned as a bridge, not a downgrade.",
      signal: "Ask: 'What's your process for web leads that come in after hours?'",
    },
    {
      icon: "📈", title: "Growth-Stage Shops ($1M–$3M) — Aspirational Anchor", color: C.green,
      body: "ServiceTitan is aspirational for these shops but cost-prohibitive at $245–$500+/tech/month plus $5–50K implementation. Leadflo delivers the AI intake capability now, without locking them into an enterprise platform. Bridge play: 'Same capability, none of the complexity.'",
      signal: "Ask: 'Have you looked at ServiceTitan? What stopped you?'",
    },
  ];
 
  return (
    <div>
      <STitle
        eyebrow="ICP & Market Opportunity"
        title="Who Leadflo Is (and Isn't) Built For"
        sub="This ICP is deliberately narrow. Tighter targeting means sharper messaging, faster qualification, and higher conversion. The disqualifiers are as important as the fit criteria."
      />
 
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 24 }}>
        {[["HVAC + Plumbing", "Primary verticals"], ["3–15 Techs", "Target company size"], ["$500K–$3M", "Annual revenue range"], ["HCP / None", "Current FSM platform"]].map(([val, label]) => (
          <Card key={val} dark style={{ textAlign: "center", padding: "16px 14px" }}>
            <p style={{ fontSize: 22, fontWeight: 900, color: C.accent, margin: "0 0 4px", letterSpacing: "-0.02em" }}>{val}</p>
            <p style={{ fontSize: 11, color: C.lavender, margin: 0, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</p>
          </Card>
        ))}
      </div>
 
      <h3 style={{ fontSize: 12, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Ideal Customer Profile — Full Definition</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
        {icpFields.map(f => (
          <Card key={f.label} style={{ borderTop: `3px solid ${C.violet}` }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>{f.icon}</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 2px" }}>{f.label}</p>
                <p style={{ fontSize: 14, fontWeight: 800, color: C.navy, margin: "0 0 4px" }}>{f.value}</p>
                <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>{f.sub}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
 
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>🚫 Hard Disqualifiers — Stop Here</h3>
          <Card style={{ background: C.redBg, border: `1px solid #FECACA` }}>
            <p style={{ fontSize: 12.5, color: C.red, fontWeight: 700, margin: "0 0 12px" }}>If any of these are true, do not pursue. Move on immediately.</p>
            {dqs.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                <span style={{ color: C.red, fontWeight: 900, fontSize: 16, flexShrink: 0, lineHeight: 1.2 }}>✕</span>
                <p style={{ fontSize: 13, color: C.text, margin: 0, fontWeight: 600 }}>{d}</p>
              </div>
            ))}
          </Card>
        </div>
 
        <div>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Core GTM Thesis</h3>
          <Card dark style={{ marginBottom: 10 }}>
            <p style={{ color: C.lavender, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
              Leadflo targets the gap <strong style={{ color: C.white }}>below ServiceTitan's floor</strong> — owner-operated HVAC and plumbing shops paying for leads but losing them after hours because their chat tool has no AI, no qualification logic, and goes dark at 5pm. These shops can't justify ST's enterprise price tag but need enterprise-grade intake capability.
            </p>
          </Card>
          <Card style={{ background: C.greenBg, border: `1px solid #BBF7D0` }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.green, margin: "0 0 6px" }}>The Positioning in One Line</p>
            <p style={{ fontSize: 13.5, color: C.text, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"ServiceTitan capability. None of the $50K implementation."</p>
          </Card>
        </div>
      </div>
 
      <h3 style={{ fontSize: 12, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Three Win Zones — Where Leadflo Wins Cleanly</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {winZones.map(w => (
          <Card key={w.title} style={{ borderLeft: `4px solid ${w.color}` }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{w.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: C.navy, margin: "0 0 6px" }}>{w.title}</p>
                <p style={{ fontSize: 13, color: C.muted, margin: "0 0 10px", lineHeight: 1.6 }}>{w.body}</p>
                <div style={{ background: w.color + "12", borderRadius: 7, padding: "7px 12px", display: "inline-block", border: `1px solid ${w.color}25` }}>
                  <p style={{ fontSize: 12, color: w.color, margin: 0, fontWeight: 700 }}>🎯 Qualifier: <span style={{ fontStyle: "italic", fontWeight: 400 }}>{w.signal}</span></p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
 
// ─── COMPETITIVE INTEL ───────────────────────────────────────────────────────
function CompetitiveIntel() {
  const [activeReason, setActiveReason] = useState(0);
 
  const competitors = [
    {
      name: "HousecallPro", icon: "🏠",
      chat: "Basic chat bubble — in-house built",
      ai: "None. No logic, no qualification",
      afterHours: "Reverts to contact form",
      threat: "Low", threatColor: C.green, threatBg: C.greenBg,
      verdict: "Weak product. Customers are frustrated with it. This is Leadflo's primary displacement target within the HCP customer base.",
      dispatchEdge: "AI qualification, 24/7 coverage, video-enabled engagement, dispatch-ready lead routing. Not even a close comparison.",
    },
    {
      name: "ServiceTitan (Base)", icon: "🔧",
      chat: "Web Scheduler + Chat to Text widget",
      ai: "Minimal. Basic form only",
      afterHours: "Limited without add-ons",
      threat: "Medium", threatColor: C.amber, threatBg: C.amberBg,
      verdict: "Targets larger shops (20+ techs). Too expensive and complex for Leadflo's 3–15 tech ICP. Rarely a head-to-head competitor at this market segment.",
      dispatchEdge: "Price, simplicity, no $50K implementation. Leadflo is positioned as the accessible alternative for shops that aspire to ST but can't justify the cost.",
    },
    {
      name: "ServiceTitan Scheduling Pro", icon: "⚡",
      chat: "Conditional workflow, decision tree, job info capture, brand customization",
      ai: "Conditional logic, 1–2 qualifying questions, dispatch-ready",
      afterHours: "24/7 via Schedule Engine (human agents)",
      threat: "High", threatColor: C.red, threatBg: C.redBg,
      verdict: "Real competitor IF targeting the same ICP. Has conditional workflows, qualification logic, 24/7 human agents, and full ST dispatch integration. However — it's locked inside ST, which self-selects Leadflo's ICP out.",
      dispatchEdge: "ST Scheduling Pro only exists inside the ST platform. Leadflo's ICP can't afford ST. Shops that have Scheduling Pro have already disqualified themselves.",
    },
  ];
 
  const whyNotST = [
    {
      title: "Cost & Complexity Mismatch",
      body: "ServiceTitan shops are paying $245–$500+/tech/month on the base platform alone, plus $5K–$50K in implementation fees. These are sophisticated, enterprise-minded operators with dedicated IT and office staff. Scheduling Pro is a natural upsell they've already been pitched — Leadflo enters as a redundant tool, not a solution.",
      tag: "Cost Signal"
    },
    {
      title: "Scheduling Pro Is a Real Competitor in This Segment",
      body: "Unlike HCP's chat bubble (called 'an utter waste of time' by actual users), Scheduling Pro features conditional workflows, job qualification logic, 24/7 human-agent live chat via Schedule Engine, and full ServiceTitan dispatch integration. Competing head-to-head here means going up against a well-funded, deeply integrated product within a locked-in platform.",
      tag: "Product Signal"
    },
    {
      title: "ServiceTitan Self-Selects These Shops Out of Leadflo's Range",
      body: "ServiceTitan has publicly stated its platform is 'not optimized for companies with 3 or fewer technicians' and is best suited for 20+ tech operations. The shops that can afford and fully leverage Scheduling Pro are already above Leadflo's ICP ceiling. Pursuing them means longer sales cycles, higher churn risk, and direct feature comparison against a better-resourced incumbent.",
      tag: "ICP Signal"
    },
  ];
 
  return (
    <div>
      <STitle
        eyebrow="Competitive Intelligence"
        title="Know Exactly Who You're Up Against"
        sub="The competitive landscape is simple: HCP's chat is weak (your displacement target), ServiceTitan base is too expensive for your ICP, and Scheduling Pro is a real competitor you'll rarely face because it's locked inside a platform your prospects can't afford."
      />
 
      <h3 style={{ fontSize: 12, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Competitive Landscape</h3>
      <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 28 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 2fr 2fr 2fr 1fr", background: C.navy, padding: "10px 16px", gap: 12 }}>
          {["Platform", "Chat Capability", "AI / Qualification", "After-Hours", "Threat Level"].map(h => (
            <p key={h} style={{ fontSize: 11, fontWeight: 700, color: C.lavender, margin: 0, textTransform: "uppercase", letterSpacing: "0.07em", opacity: 0.7 }}>{h}</p>
          ))}
        </div>
        {competitors.map((c, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1.8fr 2fr 2fr 2fr 1fr", padding: "14px 16px", gap: 12, borderTop: i > 0 ? `1px solid ${C.border}` : "none", alignItems: "center", background: i % 2 === 0 ? C.white : C.off }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 16 }}>{c.icon}</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: C.navy, margin: 0 }}>{c.name}</p>
            </div>
            <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{c.chat}</p>
            <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{c.ai}</p>
            <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{c.afterHours}</p>
            <span style={{ fontSize: 11.5, fontWeight: 700, background: c.threatBg, color: c.threatColor, borderRadius: 6, padding: "4px 9px", textAlign: "center" }}>{c.threat}</span>
          </div>
        ))}
      </div>
 
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {competitors.map((c, i) => (
          <Card key={i} style={{ borderLeft: `4px solid ${c.threatColor}` }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 800, color: C.navy, margin: 0 }}>{c.name}</p>
                  <span style={{ fontSize: 11, fontWeight: 700, background: c.threatBg, color: c.threatColor, borderRadius: 5, padding: "2px 8px" }}>{c.threat} Threat</span>
                </div>
                <p style={{ fontSize: 12.5, color: C.muted, margin: "0 0 8px", lineHeight: 1.6 }}>{c.verdict}</p>
                <div style={{ background: C.lavender, borderRadius: 7, padding: "8px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: C.navy, margin: "0 0 2px" }}>Leadflo's Edge</p>
                  <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{c.dispatchEdge}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
 
      <Rule />
 
      <h3 style={{ fontSize: 12, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Why Leadflo Should Not Pursue ServiceTitan Shops</h3>
      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
        {whyNotST.map((r, i) => (
          <button type="button" key={i} onClick={() => setActiveReason(i)} style={{ padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 12.5, border: `2px solid ${activeReason === i ? C.red : C.border}`, background: activeReason === i ? C.redBg : C.white, color: activeReason === i ? C.red : C.navy }}>
            {r.tag}
          </button>
        ))}
      </div>
      <Card style={{ borderLeft: `4px solid ${C.red}` }}>
        <p style={{ fontSize: 14, fontWeight: 800, color: C.navy, margin: "0 0 6px" }}>{whyNotST[activeReason].title}</p>
        <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.7 }}>{whyNotST[activeReason].body}</p>
      </Card>
 
      <div style={{ marginTop: 16, background: C.navy, borderRadius: 8, padding: "18px 22px" }}>
        <p style={{ color: C.onDark, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>The Rule of Thumb</p>
        <p style={{ color: C.white, fontSize: 15, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>If they're on ServiceTitan — disqualify immediately. If they're on HCP, Jobber, or nothing — that's your market. Every prospecting decision flows from this filter.</p>
      </div>
    </div>
  );
}
 
// ─── CHANNELS ────────────────────────────────────────────────────────────────
function Channels() {
  const [open, setOpen] = useState(0);
  const channels = [
    {
      icon: "📞", name: "Cold Calling", priority: "Tier 1", color: C.green, allocation: 30,
      why: "These owners answer the phone — it's their business. Best for HCP-shop displacement. Sharp opener + trade language converts faster than any digital channel.",
      timing: "Tue–Thu · 7:30–9:30am & 4:30–6:00pm local time",
      dos: ["Ask for owner by first name", "Lead with HCP chat question for HCP shops", "Lead with fear anchor for no-FSM shops", "Under 30 seconds to the ask"],
      donts: ["Pitch to the CSR or office manager first", "Use the word 'platform' or 'solution'", "Call Monday morning or Friday afternoon", "Mention ServiceTitan unless they bring it up"],
      tactics: [
        { t: "HCP Shop Opener", d: "'Hey [Name], quick question — are you using the chat widget that comes with HousecallPro?' [Pause] 'Yeah, we hear that a lot. The issue is it shuts off after hours and there's no AI — so if someone hits your site at 9pm with a dead furnace, they're just gone.'" },
        { t: "No-FSM Fear Anchor", d: "'The bigger HVAC shops in your market are running AI intake tools that capture and qualify every website lead 24/7 — even at 2am when the AC dies. If your site doesn't have that, you're handing those leads to competitors who do.'" },
        { t: "Qualification on the Call", d: "Two questions to qualify fast: (1) 'Are you on ServiceTitan?' [if yes, disengage politely] (2) 'About how many techs are you running?' [if 20+, disengage]. Don't invest time before running these filters." },
      ],
    },
    {
      icon: "📧", name: "Cold Email", priority: "Tier 1", color: C.green, allocation: 25,
      why: "Highest-leverage async channel. Two distinct sequences: HCP displacement sequence and no-FSM fear anchor sequence. Never send a generic sequence — segment first.",
      timing: "Send Tue–Thu · 7:00–9:00am recipient time",
      dos: ["Segment before sending — HCP vs. no-FSM", "Personalize to their LSA presence or review count", "Subject lines under 7 words", "Plain text only — looks more human"],
      donts: ["Send the same sequence to all prospects", "Lead with product features in the opener", "Use HTML email templates", "Reference ServiceTitan as a competitor they should fear"],
      tactics: [
        { t: "HCP Displacement Sequence", d: "Open with the chat widget question. Frame as fixing their existing setup, not replacing HCP. 'You keep everything in HCP — we just replace the part that's broken.' 4 touches over 14 days." },
        { t: "No-FSM Fear Anchor Sequence", d: "Open with: 'The bigger shops in your market are running AI intake 24/7.' Make the competitive gap feel real and immediate. No-FSM shops respond to the fear of being left behind by better-equipped competitors." },
        { t: "LSA + Review Signal Personalization", d: "Scrape LSA rankings. Mention their market position. 'You're running LSAs in [City] — do you know what your web response looks like at 10pm tonight?' Let their own investment create the urgency." },
      ],
    },
    {
      icon: "📘", name: "Organic Social (Facebook)", priority: "Tier 1", color: C.green, allocation: 20,
      why: "The highest-leverage free channel for this ICP. HCP and Jobber users are active in trade Facebook Groups and regularly complain about their tools. These organic conversations are the best prospecting intelligence available.",
      timing: "Post 6–9am or 7–9pm — when owners are off the tools",
      dos: ["Monitor HCP and Jobber complaint threads — these are warm leads", "Post value before promoting anything", "Engage on HCP chat complaints specifically", "Share stats that make the after-hours problem feel real"],
      donts: ["Drop promo links in groups without context", "Talk about ServiceTitan as a competitor", "Post corporate-sounding content"],
      tactics: [
        { t: "Monitor HCP Complaint Threads", d: "Search Facebook Groups for posts about HCP's chat widget. Any contractor complaining about it is a warm prospect. Engage with empathy first: 'We hear this a lot — what's been the biggest issue for you?' DM after establishing rapport." },
        { t: "Groups to Join & Monitor", d: "HVAC Business Owners & Managers, HousecallPro Users Community, Plumbing Business Owners Network, Contractor Profit & Growth, Jobber Users Group. These communities have organic pain-point conversations daily." },
        { t: "Value Post That Works", d: "'Quick question for HVAC shop owners on HousecallPro — what do you do with web leads that come in after your office closes? Trying to understand how different shops handle the after-hours gap.' Listen. Never pitch in the thread." },
      ],
    },
    {
      icon: "📸", name: "Organic Social (Instagram)", priority: "Tier 2", color: C.amber, allocation: 10,
      why: "Supporting channel for brand building and retargeting. Trade owners follow competitors and vendors here. Content should make the HCP chat gap feel relatable.",
      timing: "3x/week · Reels outperform static by 4:1 for this audience",
      dos: ["Show the Leadflo widget vs. HCP's basic chat", "Before/after: what HCP chat does at 9pm vs. what Leadflo does", "Trade-specific hashtags", "Story polls that surface the pain"],
      donts: ["Generic SaaS marketing visuals", "Mention ServiceTitan", "Post without relevance to home services"],
      tactics: [
        { t: "HCP Chat Comparison Reel", d: "15-second Reel: 'What happens when someone hits your site at 9pm with no AC. If you're on HCP's chat → [contact form screenshot]. With Leadflo → [real-time video engagement + dispatch in 90s].' Show the contrast." },
        { t: "Story Poll for Prospecting", d: "'HousecallPro users: what happens to your web leads after hours? A) They get handled B) They hit a form and wait C) Not sure.' The responses are warm prospect signals." },
      ],
    },
    {
      icon: "✍️", name: "Inbound / Content", priority: "Tier 2", color: C.amber, allocation: 8,
      why: "Long-play authority builder. Key focus: content that ranks for terms HCP and Jobber users search when frustrated with their chat tool.",
      timing: "1–2 pieces per month, repurposed across all channels",
      dos: ["Target search terms like 'HousecallPro chat not working after hours'", "Build the Lead Leak Calculator as a gated tool", "Write for HVAC/plumbing owners, not general audiences"],
      donts: ["Generic SaaS content that doesn't mention the ICP's specific tools", "Content that positions against ServiceTitan"],
      tactics: [
        { t: "Lead Leak Calculator", d: "Interactive tool: 'How much revenue is your website leaking after hours?' Inputs: monthly web leads, after-hours %, avg ticket. Output: monthly and annual revenue at risk. Gate with email. Distribute via Facebook Groups and outbound." },
        { t: "HCP Chat Frustration Content", d: "Article: 'Why HousecallPro's chat widget fails your HVAC business after hours (and what to do about it).' SEO play targeting frustrated HCP users actively searching for alternatives." },
      ],
    },
    {
      icon: "🏛️", name: "Trade Shows & Events", priority: "Tier 2", color: C.amber, allocation: 7,
      why: "High-trust, in-person channel. The HCP user base shows up at Service World and ACCA. Attending these events as a partner to HCP — not a competitor — is the right frame.",
      timing: "Plan 6–8 weeks in advance. Pre-book meetings before arriving.",
      dos: ["Frame as the 'missing piece' for HCP shops", "Pre-book meetings with prospects before the show", "Attend HCP user sessions to understand pain firsthand"],
      donts: ["Position against ServiceTitan in conversations", "Exhibit before you've attended as a visitor", "Rely on walk-up booth traffic alone"],
      tactics: [
        { t: "Key Events", d: "Service World Expo (fall — ServiceTitan/HCP ecosystem), ACCA Conference (spring — HVAC owners), PHCCExpo (fall — plumbing owners), EGIA Contractor University events." },
        { t: "Pre-Show Outreach", d: "Email prospects 3 weeks out: 'I'll be at Service World — worth 15 minutes to show you what we're building for HCP shops? We replace the after-hours gap without disrupting anything else you use in HCP.'" },
      ],
    },
  ];
 
  const ch = channels[open];
  return (
    <div>
      <STitle eyebrow="Channel Strategy" title="Where to Show Up & How" sub="Six active channels, all calibrated to the 3–15 tech ICP. The key shift: every channel now has two modes — HCP shop displacement and no-FSM fear anchor." />
 
      <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
        {channels.map((c, i) => (
          <button type="button" key={i} onClick={() => setOpen(i)} style={{ padding: "7px 13px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 12.5, border: `2px solid ${open === i ? c.color : C.border}`, background: open === i ? c.color : C.white, color: open === i ? C.white : C.navy, transition: "all 0.15s" }}>{c.icon} {c.name}</button>
        ))}
      </div>
 
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 20 }}>
        {channels.map((c, i) => (
          <div key={i} title={`${c.name}: ${c.allocation}%`} onClick={() => setOpen(i)} style={{ flex: c.allocation, height: 5, background: open === i ? c.color : C.border, borderRadius: 4, transition: "background 0.2s", cursor: "pointer" }} />
        ))}
        <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap" }}>effort allocation</span>
      </div>
 
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <Card style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 22 }}>{ch.icon}</span>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{ch.name}</span>
                  <Pill color={ch.color}>{ch.priority}</Pill>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.violet }}>{ch.allocation}%</span>
                </div>
                <p style={{ fontSize: 12, color: C.muted, margin: "2px 0 0" }}>⏰ {ch.timing}</p>
              </div>
            </div>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{ch.why}</p>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Card style={{ background: C.greenBg, border: `1px solid #BBF7D0` }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.green, textTransform: "uppercase", margin: "0 0 8px" }}>✅ Do</p>
              {ch.dos.map((d, i) => <p key={i} style={{ fontSize: 12, color: C.text, margin: "0 0 5px", lineHeight: 1.4 }}>• {d}</p>)}
            </Card>
            <Card style={{ background: C.redBg, border: `1px solid #FECACA` }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.red, textTransform: "uppercase", margin: "0 0 8px" }}>🚫 Don't</p>
              {ch.donts.map((d, i) => <p key={i} style={{ fontSize: 12, color: C.text, margin: "0 0 5px", lineHeight: 1.4 }}>• {d}</p>)}
            </Card>
          </div>
        </div>
        <Card style={{ background: C.off }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 14px" }}>Tactics</p>
          {ch.tactics.map((t, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: C.navy, margin: "0 0 4px" }}>{t.t}</p>
              <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.6 }}>{t.d}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
 
// ─── PERSONAS ────────────────────────────────────────────────────────────────
function Personas() {
  const [active, setActive] = useState(0);
  const personas = [
    {
      emoji: "🔨", name: "The HCP Owner-Operator", role: "Owner / Founder on HousecallPro",
      priority: "Primary Target", priorityColor: C.green,
      revenue: "$500K–$2M", team: "3–10 techs", stack: "HousecallPro",
      bio: "Bought into HCP for job management — it works well for dispatch and invoicing. But the chat widget is useless and they know it. They're losing after-hours leads and have no good solution in front of them. Leadflo is the fix they didn't know existed.",
      day: ["6:30am — Checks HCP dispatch board before coffee", "8am–5pm — On job sites or managing from the truck", "Evening — Scrolls Facebook, occasionally frustrated about missed calls", "Weekends — Admin catchup, occasionally vents in HCP user groups about the chat feature"],
      pains: ["HCP chat shuts off after hours — reverts to a contact form", "No AI qualification — even when chat is on, it's just a bubble", "Paying for LSAs but can't see which leads actually converted", "After-hours no-cool/no-heat calls going to voicemail or a dead form", "Doesn't want to move to ServiceTitan — too expensive, too complex"],
      angle: "You keep everything in HCP. We just replace the part that's broken.",
      hook: "Quick question — are you using the chat widget that comes with HousecallPro? [pause] Yeah, we hear that a lot. It shuts off after hours and there's no AI — so if someone hits your site at 9pm with a dead furnace, they're just gone. Leadflo fixes that gap without touching anything else in HCP.",
      doSay: ["replace the chat widget", "keep everything in HCP", "booked jobs", "after-hours coverage", "no AI, no qualification", "dispatch-ready"],
      dontSay: ["replace HCP", "ServiceTitan", "platform migration", "enterprise software"],
    },
    {
      emoji: "📵", name: "The Off-Platform Owner", role: "Owner — Google Calendar / Paper Dispatch",
      priority: "Primary Target", priorityColor: C.green,
      revenue: "$500K–$1.5M", team: "2–8 techs", stack: "No FSM",
      bio: "Running the phones themselves or with one office person. Jobs tracked in a spreadsheet or Google Calendar. Has a website (probably basic), runs LSAs, but has no chat, no AI, no intake process. Most vulnerable to losing leads to competitors who do.",
      day: ["6am — Up early, answers the first calls of the day personally", "All day — On the tools while also trying to manage inbound calls", "Miss calls constantly — can't be on a roof AND answer the phone", "Evening — Realizes they missed leads, not sure how many"],
      pains: ["Can't answer the phone while on a job site", "No visibility into how many web leads they're missing", "Competitors running LSAs are faster — owner doesn't know why they're losing bids", "No after-hours process at all — website just has a phone number and a form", "Feels like they need ServiceTitan but can't afford or justify it"],
      angle: "The bigger shops in your market are running AI intake 24/7. You don't have to spend $50K to get that.",
      hook: "The bigger HVAC shops in your market are running AI intake tools that capture and qualify every website lead 24/7 — even at 2am when the AC dies. If your site doesn't have that, you're handing those leads to competitors who do. Leadflo gives you that same capability without locking you into a $500/month-per-tech enterprise platform.",
      doSay: ["booked jobs", "after-hours coverage", "same capability as the big shops", "no ServiceTitan price tag", "dispatch-ready leads"],
      dontSay: ["HousecallPro", "ServiceTitan", "workflow automation", "lead management platform"],
    },
    {
      emoji: "📋", name: "The CSR / Office Manager", role: "Office Manager / Dispatcher — HCP or Jobber shops",
      priority: "Champion & Influencer", priorityColor: C.amber,
      revenue: "N/A — Salaried", team: "Works with 5–20 techs", stack: "HCP or Jobber",
      bio: "Runs the day-to-day in HCP. Books jobs, dispatches techs, manages the phone. Knows the after-hours gap better than the owner. If HCP's chat is failing, she's the one dealing with the morning callback queue. Can be a powerful internal champion.",
      day: ["7:30am — Opens HCP, reviews overnight web submissions", "All day — Answering calls, booking in HCP, managing callbacks", "Afternoons — Following up on web leads that came in after 5pm yesterday", "End of day — Stressing about leads that came in after she left"],
      pains: ["HCP chat turns off at 5pm — she has no after-hours coverage", "Web form leads sit overnight with no follow-up process", "Dispatching techs to calls that turn out to be DIY issues or bad-fit jobs", "Owner asks her about missed leads and she has no good answer"],
      angle: "You shouldn't have to start every morning chasing last night's web leads.",
      hook: "If someone fills out your website at 9pm tonight, what happens to that lead before 8am tomorrow?",
      doSay: ["overnight web leads", "morning callback queue", "HCP dispatch", "after-hours coverage", "saves time in the morning"],
      dontSay: ["workflow automation", "AI platform", "enterprise software"],
    },
  ];
 
  const p = personas[active];
  return (
    <div>
      <STitle eyebrow="Buyer Personas" title="Three Profiles, Two Conversations" sub="The ICP narrows to two distinct conversation modes: HCP displacement and no-FSM fear anchor. Know which mode you're in before you open your mouth." />
 
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {personas.map((p, i) => (
          <button type="button" key={i} onClick={() => setActive(i)} style={{ padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13, border: `2px solid ${active === i ? C.navy : C.border}`, background: active === i ? C.accent : C.surface, color: active === i ? C.navy : C.text, transition: "all 0.15s" }}>{p.emoji} {p.name.replace("The ", "")}</button>
        ))}
      </div>
 
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card>
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 32 }}>{p.emoji}</span>
              <div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{p.name}</span>
                  <Pill color={p.priorityColor}>{p.priority}</Pill>
                </div>
                <p style={{ margin: 0, fontSize: 12.5, color: C.muted }}>{p.role}</p>
                <div style={{ marginTop: 6, display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 12, background: C.lavender, color: C.dark, padding: "2px 8px", borderRadius: 5, fontWeight: 600 }}>{p.revenue}</span>
                  <span style={{ fontSize: 12, background: C.lavender, color: C.dark, padding: "2px 8px", borderRadius: 5, fontWeight: 600 }}>{p.team}</span>
                  <span style={{ fontSize: 12, background: C.sky + "18", color: C.sky, padding: "2px 8px", borderRadius: 5, fontWeight: 600 }}>{p.stack}</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65, margin: 0 }}>{p.bio}</p>
          </Card>
 
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 12px" }}>🕐 Their Day</p>
            {p.day.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: C.violet + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <span style={{ fontSize: 9, color: C.violet, fontWeight: 800 }}>{i + 1}</span>
                </div>
                <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}
          </Card>
        </div>
 
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 10px" }}>⚡ Top Pain Points</p>
            {p.pains.map((pp, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                <span style={{ color: C.red, fontSize: 13, flexShrink: 0 }}>▸</span>
                <p style={{ fontSize: 12.5, color: C.text, margin: 0, lineHeight: 1.5 }}>{pp}</p>
              </div>
            ))}
          </Card>
 
          <Card dark>
            <p style={{ fontSize: 11, fontWeight: 700, color: C.onDark, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px" }}>🎯 Messaging Angle</p>
            <p style={{ color: C.white, fontSize: 14, fontWeight: 700, lineHeight: 1.5, margin: "0 0 12px" }}>{p.angle}</p>
            <p style={{ fontSize: 11, fontWeight: 700, color: C.onDark, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 6px" }}>Opening Hook</p>
            <p style={{ color: C.lavender, fontSize: 13, fontStyle: "italic", margin: "0 0 14px", lineHeight: 1.6 }}>"{p.hook}"</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ background: C.greenLight + "18", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: C.greenLight, textTransform: "uppercase", margin: "0 0 6px" }}>✅ Say</p>
                {p.doSay.map(w => <span key={w} style={{ display: "inline-block", fontSize: 11, background: C.white + "15", color: C.lavender, borderRadius: 5, padding: "2px 7px", margin: "2px 2px", fontWeight: 600 }}>{w}</span>)}
              </div>
              <div style={{ background: C.red + "18", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#FC8181", textTransform: "uppercase", margin: "0 0 6px" }}>🚫 Avoid</p>
                {p.dontSay.map(w => <span key={w} style={{ display: "inline-block", fontSize: 11, background: C.white + "10", color: "#FC8181", borderRadius: 5, padding: "2px 7px", margin: "2px 2px", fontWeight: 600 }}>{w}</span>)}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
 
// ─── MESSAGING & TALK TRACKS ─────────────────────────────────────────────────
function Messaging() {
  const tracks = [
    {
      label: "HCP Shop Talk Track", icon: "🏠", color: C.sky,
      context: "Prospect is currently on HousecallPro. They have HCP's basic chat. They're likely frustrated with it but haven't found an alternative. Leadflo is the fix — not a replacement for HCP.",
      script: `"Hey [Name], quick question — are you using the chat widget that comes with HousecallPro?
 
[Pause — let them answer]
 
Yeah, we hear that a lot. The issue is it shuts off after hours and there's no AI, so if someone hits your site at 9pm with a dead furnace, they're just gone.
 
Leadflo replaces that with an AI that qualifies the lead, captures the job info, and keeps them engaged until your team gets back to them — without replacing anything else you're using in HCP."`,
      keyFrames: [
        "Lead with the HCP chat question — not a pitch",
        "Validate their frustration before solving it",
        "Emphasize 'without replacing anything in HCP'",
        "The job still flows into HCP — nothing changes except the intake layer",
      ],
    },
    {
      label: "No-FSM Fear Anchor", icon: "📵", color: C.violet,
      context: "Prospect is not on any FSM platform — running phones themselves, Google Calendar, or paper dispatch. They have never heard of Scheduling Pro. Their fear is being left behind by better-equipped competitors.",
      script: `"The bigger HVAC shops in your market are running AI intake tools that capture and qualify every website lead 24/7 — even at 2am when the AC dies.
 
If your site doesn't have that, you're handing those leads to competitors who do.
 
Leadflo gives you that same capability without locking you into a $500/month-per-tech enterprise platform."`,
      keyFrames: [
        "Never name ServiceTitan — say 'enterprise platform'",
        "The fear is competitive disadvantage, not product features",
        "Position Leadflo as the accessible bridge — same capability, fraction of cost",
        "Follow with: 'What's your current process for web leads after hours?'",
      ],
    },
  ];
 
  const qualifying = [
    { q: "Are you on ServiceTitan?", action: "If YES → Disqualify politely and move on. Do not pitch.", outcome: "Disqualify", color: C.red },
    { q: "About how many techs are you running?", action: "If 20+ → Disqualify. If 3–15 → Continue.", outcome: "Filter", color: C.amber },
    { q: "What platform are you using for dispatch and scheduling?", action: "HCP/Jobber/Nothing → Qualified. ST/other enterprise → Disqualify.", outcome: "Qualify", color: C.green },
    { q: "What's your process for web leads that come in after hours?", action: "Any answer except 'we have a 24/7 AI tool' is a pain signal. Continue.", outcome: "Pain Signal", color: C.violet },
  ];
 
  return (
    <div>
      <STitle eyebrow="Messaging & Talk Tracks" title="Two Conversations. Zero Overlap." sub="Every prospect falls into one of two conversation modes. Know which mode before you open your mouth. Mixing the scripts is where deals fall apart." />
 
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
        {tracks.map((t, i) => (
          <Card key={i} style={{ borderTop: `4px solid ${t.color}` }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 20 }}>{t.icon}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{t.label}</span>
              <Pill color={t.color}>Confirmed</Pill>
            </div>
            <p style={{ fontSize: 12.5, color: C.muted, margin: "0 0 14px", lineHeight: 1.6, fontStyle: "italic", background: C.off, borderRadius: 7, padding: "8px 12px" }}>Context: {t.context}</p>
            <pre style={{ fontSize: 13, background: C.navy, borderRadius: 8, padding: "14px 16px", margin: "0 0 14px", whiteSpace: "pre-wrap", lineHeight: 1.8, fontFamily: "inherit", color: C.lavender }}>{t.script}</pre>
            <p style={{ fontSize: 11, fontWeight: 700, color: t.color, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px" }}>Key Framing Rules</p>
            {t.keyFrames.map((k, j) => (
              <div key={j} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                <span style={{ color: t.color, fontWeight: 700, fontSize: 12, flexShrink: 0 }}>→</span>
                <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{k}</p>
              </div>
            ))}
          </Card>
        ))}
      </div>
 
      <Rule />
 
      <h3 style={{ fontSize: 12, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Qualifying Questions — Run These Before Pitching</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {qualifying.map((q, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: q.color + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: q.color }}>{i + 1}</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.navy, margin: "0 0 4px", fontStyle: "italic" }}>"{q.q}"</p>
              <p style={{ fontSize: 12.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{q.action}</p>
            </div>
            <Pill color={q.color}>{q.outcome}</Pill>
          </div>
        ))}
      </div>
 
      <div style={{ marginTop: 16, background: C.navy, borderRadius: 8, padding: "16px 20px" }}>
        <p style={{ color: C.onDark, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>The Positioning In One Line — Use It Everywhere</p>
        <p style={{ color: C.white, fontSize: 15, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>"ServiceTitan capability. None of the $50K implementation."</p>
      </div>
    </div>
  );
}
 
// ─── OUTREACH SEQUENCES ──────────────────────────────────────────────────────
function Outreach() {
  const [mode, setMode] = useState("hcp");
  const [view, setView] = useState("email");
 
  const hcpEmails = [
    { touch: "Email 1", day: "Day 1", type: "HCP Chat Hook", color: C.sky,
      subject: "Quick question about your HousecallPro chat widget",
      body: `[Name],
 
Quick question — are you using the chat widget that comes with HousecallPro for your website?
 
Most HCP shops I talk to either turned it off or just leave it on even though it shuts down after hours. The problem is that a homeowner who hits your site at 9pm with a dead furnace doesn't get a response — they fill out a form and wait until morning.
 
By then, they've already called someone else.
 
Leadflo replaces that with an AI that responds in real time, qualifies the job, and keeps them engaged until your team picks it up in the morning — without changing anything else you use in HCP.
 
Worth a 15-minute look?
 
— [Your Name]` },
    { touch: "Email 2", day: "Day 4", type: "Revenue Math", color: C.violet,
      subject: "What HCP's after-hours chat gap is costing you",
      body: `[Name],
 
If you're getting 30–50 web leads a month — conservative for an HVAC shop your size running LSAs — and HCP's chat is off after 5pm, you're likely losing 20–30% of those leads to slower follow-up.
 
At a $600 average ticket, that's $3,600–$9,000 in missed booked jobs. Every month.
 
Leadflo covers that gap without touching anything else in HCP. The job still flows into your HCP board — you just don't lose it first.
 
Happy to show you a 15-minute walk-through?
 
— [Your Name]` },
    { touch: "Email 3", day: "Day 8", type: "Competitor Pressure", color: C.amber,
      subject: "The shops beating you on LSA response time",
      body: `[Name],
 
The HVAC shops winning on LSA in [City] right now are responding to web leads in under 2 minutes — day or night.
 
HCP's chat widget doesn't do that. It's a contact form in disguise after 5pm.
 
78% of homeowners book the first company to respond. If your site isn't responding, someone else is.
 
15 minutes — I'll show you exactly what Leadflo looks like on an HCP shop like yours.
 
— [Your Name]` },
    { touch: "Email 4", day: "Day 13", type: "Breakup / Resource", color: C.muted,
      subject: "Leaving this here for you",
      body: `[Name],
 
I'll keep this short — if the timing's off, totally fine.
 
I put together a one-page breakdown of the HCP chat gap and what Leadflo does differently: [link]. Might be useful for peak season planning even if now's not the right time.
 
If you ever want to see it live on an HCP site like yours, my calendar link is below.
 
— [Your Name]
[Calendly link]` },
  ];
 
  const noFsmEmails = [
    { touch: "Email 1", day: "Day 1", type: "Fear Anchor", color: C.violet,
      subject: "What the big HVAC shops in [City] are doing at 2am",
      body: `[Name],
 
Quick observation — the larger HVAC shops in [City] are running AI intake tools that capture and qualify every web lead 24/7. Even at 2am when the AC dies.
 
If your site doesn't have that, those leads are going to whoever does.
 
Leadflo gives you that same capability without locking you into a $500/month-per-tech enterprise platform.
 
— [Your Name]` },
    { touch: "Email 2", day: "Day 4", type: "Cost Contrast", color: C.green,
      subject: "Enterprise-grade intake. Not an enterprise price tag.",
      body: `[Name],
 
Most AI intake tools built for home services shops are either garbage (generic chat widgets with no AI) or require a full ServiceTitan implementation — $245+ per tech per month plus a $10–50K setup.
 
Leadflo is purpose-built for residential HVAC and plumbing shops — responds to every web visitor in under 90 seconds, qualifies the job, and books it before they call someone else.
 
No six-figure commitment. No 3-month onboarding.
 
Worth 15 minutes?
 
— [Your Name]` },
    { touch: "Email 3", day: "Day 9", type: "Peak Season Urgency", color: C.amber,
      subject: "Summer's 6 weeks out — what's your after-hours web process?",
      body: `[Name],
 
Peak season is close. Last year, how many web leads did you miss during the first heat wave?
 
Most HVAC shops that don't have 24/7 AI coverage lose their highest-urgency leads exactly when they can least afford to — when the phones are buried and the web form sits until morning.
 
Happy to show you what Leadflo looks like on a site like yours before summer hits.
 
— [Your Name]` },
    { touch: "Email 4", day: "Day 14", type: "Breakup", color: C.muted,
      subject: "One last thing",
      body: `[Name],
 
Last note from me — here's a quick breakdown of what your competitors are using for after-hours web intake and what it's costing shops that don't: [link].
 
If the timing ever works, my calendar's below.
 
— [Your Name]
[Calendly link]` },
  ];
 
  const emails = mode === "hcp" ? hcpEmails : noFsmEmails;
 
  const callScript = [
    { step: "Qualify First", content: "Before the pitch: 'Hey [Name], this is [Your Name]. Quick question before I say anything else — are you on ServiceTitan?' [If yes → 'Got it, no worries — have a great day.']", note: "Qualify before pitching. Don't waste a single word on a disqualified prospect." },
    { step: "HCP Mode", content: "'Quick question — are you using the chat widget that comes with HousecallPro?' [Pause] 'Yeah, we hear that a lot. It shuts off after hours with no AI — if someone hits your site at 9pm with a dead furnace, they're just gone. Leadflo replaces that without changing anything else in HCP.'", note: "For HCP shops. Lead with the widget question. Validate before solving." },
    { step: "No-FSM Mode", content: "'The bigger HVAC shops in your market are running AI intake 24/7 — even at 2am when the AC dies. If your site doesn't have that, you're handing those leads to competitors who do. Leadflo gives you that capability without a $500/month-per-tech enterprise platform.'", note: "For no-FSM shops. Fear anchor, then immediate contrast with cost." },
    { step: "The Ask", content: "'Can I show you 15 minutes of what it looks like on an HVAC site like yours? I'll show you specifically how it handles the after-hours gap.'", note: "Short demo framing. Not 'a call' — 'what it looks like on a site like yours.'" },
  ];
 
  return (
    <div>
      <STitle eyebrow="Outreach Sequences" title="Two Sequences. Always Segmented." sub="Never send a generic sequence. Prospects are either HCP shops (displacement play) or no-FSM shops (fear anchor play). The talk track, subject lines, and framing are different for each." />
 
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[{ id: "hcp", label: "🏠 HCP Displacement" }, { id: "nofm", label: "📵 No-FSM Fear Anchor" }].map(t => (
            <button type="button" key={t.id} onClick={() => setMode(t.id)} style={{ padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 12.5, border: `2px solid ${mode === t.id ? C.navy : C.border}`, background: mode === t.id ? C.accent : C.surface, color: mode === t.id ? C.navy : C.text }}>{t.label}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
          {[{ id: "email", label: "📧 Email" }, { id: "call", label: "📞 Call Script" }].map(t => (
            <button type="button" key={t.id} onClick={() => setView(t.id)} style={{ padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 12.5, border: `2px solid ${view === t.id ? C.navy : C.border}`, background: view === t.id ? C.navy : C.surface, color: view === t.id ? C.white : C.text }}>{t.label}</button>
          ))}
        </div>
      </div>
 
      {view === "email" && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            {emails.map((e, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: e.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 11, fontWeight: 900, color: C.white }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: 10, color: C.muted, margin: "3px 0 0", fontWeight: 600 }}>{e.day}</p>
                </div>
                {i < emails.length - 1 && <div style={{ width: 32, height: 2, background: C.border }} />}
              </div>
            ))}
          </div>
          {emails.map((e, i) => (
            <Card key={i} style={{ marginBottom: 12, borderLeft: `4px solid ${e.color}` }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                <Pill color={e.color}>{e.touch}</Pill>
                <span style={{ fontSize: 12, color: C.muted, fontWeight: 600 }}>{e.day}</span>
                <Pill color={e.color}>{e.type}</Pill>
              </div>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: C.navy, margin: "0 0 10px" }}>Subject: <span style={{ color: e.color }}>{e.subject}</span></p>
              <pre style={{ fontSize: 13, color: C.text, background: C.off, borderRadius: 8, padding: "14px 16px", margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.75, fontFamily: "inherit" }}>{e.body}</pre>
            </Card>
          ))}
        </div>
      )}
 
      {view === "call" && (
        <div>
          <Card dark style={{ marginBottom: 16 }}>
            <p style={{ color: C.onDark, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 4px" }}>Call Windows</p>
            <p style={{ color: C.white, fontSize: 14, fontWeight: 700, margin: "0 0 2px" }}>Tue–Thu · 7:30–9:30am & 4:30–6:00pm local time</p>
            <p style={{ color: C.lavender, fontSize: 12.5, margin: 0, opacity: 0.75 }}>These owners are on job sites 8am–4pm. Catch them before the first call of the day or when they're wrapping up.</p>
          </Card>
          {callScript.map((s, i) => (
            <Card key={i} style={{ marginBottom: 10, display: "flex", gap: 14 }}>
              <div style={{ width: 90, flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.violet, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.step}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ background: C.navy, borderRadius: 8, padding: "10px 14px", marginBottom: 8 }}>
                  <p style={{ color: C.white, fontSize: 13, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>"{s.content}"</p>
                </div>
                <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>💡 {s.note}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
 
// ─── PARTNERS ────────────────────────────────────────────────────────────────
function Partners() {
  const partners = [
    {
      icon: "🏠", name: "HousecallPro", tier: "Co-opetition Partner", color: C.sky,
      headline: "Leadflo replaces HCP's weakest feature — and that keeps customers on HCP instead of churning to ServiceTitan.",
      why: "HCP's chat bubble is universally disliked. If HCP customers don't get a proper AI intake solution, they eventually migrate to ServiceTitan for Scheduling Pro — and HCP loses the account entirely. Leadflo prevents that migration. The pitch to HCP: 'We fix the part your customers hate, which keeps them on your platform.'",
      angle: "Your customers are frustrated with your chat widget. We replace it — and they stay in HCP for everything else. We're not competing with HCP; we're fixing the feature that's driving your churn.",
      structure: ["Marketplace listing — Leadflo as the recommended chat/intake solution for HCP shops", "Native API integration: Leadflo-booked jobs flow into HCP as dispatch-ready records", "Co-marketing to HCP's HVAC/Plumbing user base", "HCP CSMs refer Leadflo when customers ask about web lead conversion"],
      tension: "This is co-opetition. Leadflo displaces HCP's native chat widget. The key framing: we're not competing with HCP's FSM business — we're making it stickier by fixing a feature gap they haven't prioritized.",
    },
    {
      icon: "🏢", name: "HVAC/Plumbing Marketing Agencies", tier: "Highest Priority", color: C.violet,
      headline: "Agencies drive the traffic. Leadflo makes it convert. A natural co-sell with no overlap.",
      why: "Digital agencies serving HVAC and plumbing clients are already invested in their clients' success. They drive LSA, paid search, and SEO traffic. If that traffic doesn't convert, their own ROI story weakens. Leadflo makes their campaigns look better — which is a natural sell.",
      angle: "You're generating the demand. Leadflo closes the gap between the click and the booked job. Your clients win, your retention improves, and you have a stronger attribution story.",
      structure: ["Referral fee per closed Leadflo account", "White-label or co-sell arrangement", "Joint case study development once early clients are live", "Agency co-marketing: 'Our clients get priority Leadflo onboarding'"],
      tension: "None. Pure complementary play. No product overlap.",
    },
    {
      icon: "🏛️", name: "ACCA / PHCC", tier: "Brand & Access", color: C.amber,
      headline: "Association endorsement shortcuts the trust gap that makes cold outreach harder.",
      why: "ACCA (HVAC) and PHCC (Plumbing) members are exactly Leadflo's ICP. Association preferred vendor status is borrowed trust at scale — and with zero logos, that trust gap is Leadflo's biggest sales friction point right now.",
      angle: "We're building the only intake solution purpose-built for HVAC and Plumbing contractors below the ServiceTitan price threshold. We'd love to bring it to your member base.",
      structure: ["Member discount / preferred vendor status", "Association newsletter feature", "'Peak Season Lead Response' webinar sponsorship", "Conference booth presence at ACCA Conference and PHCCExpo"],
      tension: "None. Association relationships take time but compound.",
    },
    {
      icon: "🏠", name: "Nuvehome.com", tier: "Co-Sell Opportunity", color: C.dark,
      headline: "Overlapping contractor networks — a referral structure benefits both sides.",
      why: "This partner operates in the home services space with existing contractor relationships. A co-sell or referral arrangement surfaces warm HVAC/Plumbing accounts that already trust their network.",
      angle: "Our contractor bases overlap. Leadflo solves the web lead conversion problem for shops already in your network. A referral structure requires zero product work from either side.",
      structure: ["Referral fee for closed Leadflo accounts from partner network", "Co-marketing to shared audience", "Joint content (webinar, guide)", "Data sharing on overlapping accounts"],
      tension: "Understand the Nuvehome model clearly before structuring — ensure there's no conflict in contractor base overlap.",
    },
  ];
 
  const [active, setActive] = useState(0);
  const p = partners[active];
 
  return (
    <div>
      <STitle eyebrow="Partner Strategy" title="Co-opetition, Co-sell & Borrowed Trust" sub="The HCP relationship is the most nuanced in this stack — Leadflo displaces their weakest feature while simultaneously partnering with them. Every other partner is pure complementary play." />
 
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {partners.map((p, i) => (
          <button type="button" key={i} onClick={() => setActive(i)} style={{ padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 12.5, border: `2px solid ${active === i ? p.color : C.border}`, background: active === i ? p.color : C.white, color: active === i ? C.white : C.navy, transition: "all 0.15s" }}>{p.icon} {p.name}</button>
        ))}
      </div>
 
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card style={{ borderTop: `4px solid ${p.color}` }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontSize: 24 }}>{p.icon}</span>
              <div>
                <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{p.name}</span>
                  <Pill color={p.color}>{p.tier}</Pill>
                </div>
                <p style={{ fontSize: 13, color: p.color, fontWeight: 700, margin: 0, fontStyle: "italic" }}>{p.headline}</p>
              </div>
            </div>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65, margin: 0 }}>{p.why}</p>
          </Card>
 
          {p.tension && (
            <Card style={{ background: p.name === "HousecallPro" ? "#FEF9C3" : C.greenBg, border: `1px solid ${p.name === "HousecallPro" ? "#FDE047" : "#BBF7D0"}` }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: p.name === "HousecallPro" ? "#854D0E" : C.green, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>⚠️ Partnership Tension Note</p>
              <p style={{ fontSize: 12.5, color: C.text, margin: 0, lineHeight: 1.6 }}>{p.tension}</p>
            </Card>
          )}
 
          <Card dark>
            <p style={{ fontSize: 11, fontWeight: 700, color: C.onDark, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px" }}>Pitch Angle</p>
            <p style={{ color: C.lavender, fontSize: 13, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>"{p.angle}"</p>
          </Card>
        </div>
 
        <Card style={{ background: C.off }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 14px" }}>🤝 Partnership Structure</p>
          {p.structure.map((s, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", marginBottom: 10, display: "flex", gap: 10 }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, background: p.color + "20", color: p.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.5 }}>{s}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
 
// ─── SEASONAL (kept concise) ──────────────────────────────────────────────────
function Seasonal() {
  const [tab, setTab] = useState("hvac");
  const hvac = [
    { s: "Pre-Peak Spring", m: "March–May", icon: "🌱", c: C.amber, urgency: "High", context: "Best outreach window — owners have time and are thinking about summer. This is when HCP shops are most open to fixing their after-hours gap before it becomes a crisis.", angle: "Summer's 6 weeks out. Last year, how many web leads did you miss during the first heat wave? Let's fix the HCP chat gap before it happens again." },
    { s: "Peak Summer", m: "June–August", icon: "☀️", c: C.red, urgency: "Extreme", context: "Phones buried. HCP chat off. After-hours web leads piling up in the morning queue. Owners are stressed and moving fast. Keep outreach extremely short — they have no bandwidth.", angle: "Your HCP chat is off right now and it's 9pm. What's happening to those web leads tonight?" },
    { s: "Shoulder Fall", m: "Sept–Nov", icon: "🍂", c: C.violet, urgency: "Medium", context: "Post-peak retrospective window. Owners have bandwidth and regrets. Replacement job season. Great time to run the 'what slipped through summer' angle.", angle: "Peak season's over. How many after-hours web leads sat in your HCP form until morning? Here's what that number looks like." },
    { s: "Peak Winter", m: "Dec–Feb", icon: "❄️", c: C.dark, urgency: "Extreme", context: "No-heat calls at midnight. Same dynamic as summer but for heating. HCP shops in Sunbelt markets (Dallas, Atlanta, Charlotte) feel this hard.", angle: "A no-heat call at midnight in January is a $4,000 job. Your HCP chat won't catch it. Leadflo will." },
  ];
  const data = hvac;
 
  return (
    <div>
      <STitle eyebrow="Seasonal Playbook" title="Timing the HCP Displacement Conversation" sub="The ICP shift to HCP shops means seasonal timing maps differently. Pre-peak is your highest-ROI outreach window — owners have time to fix the problem before it costs them." />
 
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["hvac", "plumbing"].map(v => (
          <button type="button" key={v} onClick={() => setTab(v)} style={{ padding: "8px 18px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 13, border: `2px solid ${tab === v ? C.navy : C.border}`, background: tab === v ? C.accent : C.surface, color: tab === v ? C.navy : C.text }}>{v === "hvac" ? "🌡️ HVAC" : "🔧 Plumbing (Same Framework)"}</button>
        ))}
      </div>
 
      {data.map((s, i) => (
        <Card key={i} style={{ marginBottom: 12, borderLeft: `4px solid ${s.c}` }}>
          <div style={{ display: "flex", gap: 14 }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>{s.s}</span>
                <span style={{ fontSize: 12, color: C.muted, fontWeight: 600 }}>{s.m}</span>
                <Pill color={s.c}>{s.urgency} Urgency</Pill>
              </div>
              <p style={{ fontSize: 13, color: C.muted, margin: "0 0 10px", lineHeight: 1.6 }}>{s.context}</p>
              <div style={{ background: C.navy, borderRadius: 8, padding: "10px 14px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: s.c, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Outreach Angle</p>
                <p style={{ color: C.white, fontSize: 13, margin: 0, fontStyle: "italic" }}>"{s.angle}"</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
 
// ─── APP SHELL ────────────────────────────────────────────────────────────────
export default function LeadfloGTM() {
  const [activeTab, setActiveTab] = useState("overview");
  const render = () => {
    switch (activeTab) {
      case "overview": return <Overview />;
      case "competitive": return <CompetitiveIntel />;
      case "channels": return <Channels />;
      case "personas": return <Personas />;
      case "seasonal": return <Seasonal />;
      case "messaging": return <Messaging />;
      case "outreach": return <Outreach />;
      case "partners": return <Partners />;
      default: return <Overview />;
    }
  };
 
  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      {/* Header — Apollo sand nav */}
      <div style={{ background: C.navBg, padding: "13px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 0 rgba(0,0,0,0.12)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: "#E8EEF8", borderRadius: 8, padding: "6px 14px", display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 17, color: "#0D0D0D", letterSpacing: "-0.02em", lineHeight: 1 }}>Lead</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 17, color: "#0D0D0D", letterSpacing: "-0.01em", lineHeight: 1 }}>flo</span>
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 7, color: "#0D0D0D", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1 }}>Lead Management &amp; Optimization</span>
          </div>
          <p style={{ color: C.muted, fontSize: 12, margin: 0 }}>Home Services GTM Strategy — SDR Playbook</p>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[["HCP / No-FSM Only", C.softBlue, "#1D4ED8"], ["3–15 Techs", C.softYellow, "#5B4A00"], ["$500K–$3M", C.softPurple, "#5B3FC1"], ["❌ No ST Shops", C.redBg, C.red]].map(([label, bg, color]) => (
            <span key={label} style={{ fontSize: 11, background: bg, color, border: `1px solid ${color}30`, borderRadius: 6, padding: "3px 10px", fontWeight: 600 }}>{label}</span>
          ))}
        </div>
      </div>
 
      {/* Tabs */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "0 24px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map(t => (
          <button type="button" key={t.id} onClick={() => setActiveTab(t.id)} style={{ padding: "12px 14px", fontSize: 12.5, fontWeight: 600, cursor: "pointer", background: "none", border: "none", color: activeTab === t.id ? C.navy : C.muted, borderBottom: activeTab === t.id ? `2px solid ${C.navy}` : "2px solid transparent", whiteSpace: "nowrap", transition: "all 0.15s" }}>{t.label}</button>
        ))}
      </div>
 
      {/* Portfolio Disclosure Banner */}
      <div style={{ background: C.off, borderBottom: `1px solid ${C.border}`, padding: "10px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 15 }}>🔒</span>
        <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.6 }}>
          <strong style={{ color: C.text }}>Portfolio Note:</strong> This tool was built independently as a personal SDR workflow system for a previous employer in the AI chat / home services SaaS space. Company name and specific product references have been anonymized under "Leadflo" per an IP assignment clause in my employment agreement. The GTM framework, research methodology, ICP logic, and outreach architecture are entirely my own work.{" "}
          <span style={{ fontStyle: "italic" }}>Built by Johnny Scott · 2025</span>
        </p>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "30px 24px" }}>
        {render()}
      </div>

      {/* Footer */}
      <div style={{ borderTop: `1px solid ${C.border}`, background: C.surface, padding: "18px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>
          Built by <strong style={{ color: C.navy }}>Johnny Scott</strong> · SDR / GTM Strategist ·{" "}
          <a href="https://linkedin.com/in/johnny-b-scott" style={{ color: C.text, textDecoration: "none", fontWeight: 600 }}>LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
 