import React, { useState, useRef, useEffect } from "react";
import {
  FileText,
  Layers,
  Palette,
  Bot,
  Box,
  Mail,
  Phone,
  Calendar,
  ArrowLeft,
  Menu,
  X,
  MapPin,
  Clock,
  ExternalLink,
  Trophy,
} from "lucide-react";
import "./index.css";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const EVENTS = [
  {
    id: "ideax",
    title: "IdeaX",
    category: "Paper Presentation",
    dept: "Common Event – CSE",
    icon: FileText,
    tagline: "Present your research papers and innovative ideas.",
    venue: "Informed at the registration desk",
    timing: "10:00 AM – 12:30 PM",
    logo: "/ideax_logo.png",
    themesNote:
      "Topics aligned with engineering, technology, and innovation domains are also accepted.",
    themes: [
      ["VLSI Design and Image Processing", "Embedded Systems and Robotics", "RF & Optical Communication"],
      ["6G and Future Wireless Networks", "Biomedical Signal Processing", "Applications of Physics"],
      ["Practicing English using Digital Technology", "Real Life Applications of Pythagorean Theorem", "Rubik's Cube – A Mathematical Approach"],
      ["Recent Trends in Nanomaterials", "Robotics for Automation", "Industry 4.0"],
      ["Autonomous Vehicle/Drone", "Renewable Energy and Sustainability", "Non-Destructive Testing"],
      ["Advanced Materials", "3D Printing in Civil Engineering", "AI Powered Disaster Management System"],
      ["Resilience to Monsoon Flood", "Dopamine Detox", "Internet of Things"],
      ["Blockchain and Supply Chain", "Cyber Security and Ethical Hacking", "Data Science and Analytics"],
      ["Digital Twin Technology", "Human Computer Interaction", "AI Assisted Precision Agriculture"],
      ["Cloud Computing", "Augmented Reality / Virtual Reality", "AI in Health Care"],
    ],
    rules: [
      "Maximum number of participants in a team should be 3.",
      "The participants can choose any one of the themes.",
      "The team will be given 07 minutes for presentation (5 mins for presentation and 2 mins for queries).",
      "The participants must submit the soft copy of their presentation through mail id 3 days before the symposium.",
      "The ppt should contain total of 8–10 slides with: a. Title, b. Team member names, c. College names, d. Department & year.",
      "The participants should bring/submit both PPT and PDF formats of their presentation.",
      "The decision of the jury will be final."
    ],
    prizesNote: "Venue-wise",
    prizes: [
      { rank: "1st Prize", amount: "₹3,000", note: "Venue-wise" },
      { rank: "2nd Prize", amount: "₹2,000", note: "Venue-wise" },
    ],
    submitTo: "techfest@care.ac.in",
    staffCoordinator: { name: "Mrs Ranitha R", phone: "+91 98942 50879" },
    studentCoordinator: { name: "Rubinesh S", phone: "+91 93452 63930" },
    comingSoon: false,
  },
  {
    id: "innoexpo",
    title: "InnoExpo",
    category: "Project Expo",
    dept: "Common Event – S&H",
    icon: Layers,
    tagline: "Showcase working models and projects built to solve real-world problems.",
    venue: "Main Exhibition Hall / Labs",
    timing: "1:00 PM – 2:30 PM",
    logo: "/InnoExpo_logo.png",
    prizes: [
      { rank: "1st Prize", amount: "₹3,000" },
      { rank: "2nd Prize", amount: "₹2,000" },
    ],
    rules: [
      "Team size: 2 to 4 members.",
      "Working prototype or simulation model must be presented.",
      "Teams will be provided table space and power supply.",
      "Evaluation based on innovation, practicality, and presentation.",
      "Judges' decision will be final."
    ],
    comingSoon: false,
  },
  {
    id: "battle-of-prompts",
    title: "Battle of Prompts",
    category: "Prompt Engineering",
    dept: "AI&DS",
    icon: Bot,
    tagline: "Craft precision prompts to create AI images, presentations, and web interfaces.",
    venue: "AD LAB 1 & 2",
    timing: "11:00 AM – 12:30 PM",
    logo: "/battle_of_prompts_logo.png?v=2",
    rounds: [
      { name: "Round 1 (20 minutes)", desc: "Generate an AI-powered image based on the given challenge theme/question." },
      { name: "Round 2 (30 minutes)", desc: "Prepare and present a PowerPoint presentation (PPT) aligned with the challenge theme/question." },
      { name: "Round 3 (40 minutes)", desc: "Design and complete a website based on the challenge theme/question." }
    ],
    rules: [
      "Participation is individual.",
      "Each participant must craft one strong, well-structured prompt and present both the prompt itself and the AI-generated output it produces.",
      "Round 1 (20 minutes): Generate an AI-powered image based on the given challenge theme/question.",
      "Round 2 (30 minutes): Prepare and present a PowerPoint presentation (PPT) aligned with the challenge theme/question.",
      "Round 3 (40 minutes): Design and complete a website based on the challenge theme/question.",
      "Total time limit: 90 minutes.",
      "Use of AI tools will be facilitated by the organizers.",
      "External assistance or misuse of devices will lead to disqualification.",
      "Individual systems and internet access will be provided at the venue.",
      "The judges' decision will be final."
    ],
    staffCoordinator: { name: "Mrs. R. Nisha", phone: "+91 88382 50066" },
    studentCoordinators: [
      { name: "K. Jesudoss", phone: "+91 81487 19622" },
      { name: "A. Suriya Prakash", phone: "+91 96778 06457" }
    ],
    comingSoon: false,
  },
  {
    id: "trispark",
    title: "TriSpark",
    category: "Circuit Design & Troubleshooting Challenges",
    dept: "ECE",
    icon: ExternalLink,
    tagline: "Test your skills in circuit design, simulation, and hardware troubleshooting.",
    venue: "S.CR.08",
    timing: "2:30 PM – 3:30 PM",
    logo: "/trispark_logo.png",
    rounds: [
      { name: "Round 1 – Circuit Memory Game (20 minutes)", desc: "Participants will play a memory-based game involving electronic circuit components and their identification." },
      { name: "Round 2 – Technical Circuit Quiz (20 minutes)", desc: "Teams will participate in a technical quiz based on circuits and basic electronics." },
      { name: "Round 3 – Circuit Debugging (20 minutes)", desc: "Teams will be given circuit-related problems/errors and must identify and solve the issues within the given time." }
    ],
    rules: [
      "TriSpark is a team-based event.",
      "Each team must consist of 2 to 3 members.",
      "No more than 3 members are allowed in a team.",
      "The competition will consist of three rounds, with each round carrying points.",
      "The event will be points-based, and points earned in all three rounds will be considered to determine the winner.",
      "The team with the highest total score at the end of all three rounds will be declared the winner.",
      "No external assistance is permitted during the event.",
      "Misuse of mobile phones, electronic devices, or any other form of external assistance will lead to disqualification.",
      "Participants must follow the instructions given by the organizers throughout the event.",
      "The judges' decision will be final."
    ],
    staffCoordinator: { name: "Ms. M. Shiva Shankari", phone: "+91 98942 14800" },
    studentCoordinator: { name: "Deepika dharshini", phone: "+91 80724 37334" },
    comingSoon: false,
  },
  {
    id: "designforge",
    title: "DesignForge",
    category: "CAD Modelling",
    dept: "Civil",
    icon: Box,
    tagline: "Model against the clock. Precision, accuracy, and speed count.",
    venue: "CAD Lab",
    timing: "11:00 AM – 12:00 PM",
    logo: "/DESIGNFORGE_logo.png",
    rules: [
      "Participation is **individual**. **No group work** is allowed.",
      "Participants must complete their registration with the registration committee on the morning of the event. **Only registered participants** will be permitted to participate.",
      "The required **systems and AutoCAD software will be provided** by the department.",
      "The total duration of the competition is **1 hour**.",
      "Personal laptops, pendrives, or external storage devices are **strictly prohibited**.",
      "Participants must save their files in the prescribed format: **“RollNo_Name_CollegeName_2BHK.dwg”**.",
      "Participants **must not access or copy files** from other systems.",
      "**Internet access will not be permitted** during the competition.",
      "Participants are advised to **save their work at regular intervals**. The organizers will not be responsible for any loss of data or unsaved work due to power failure or technical malfunction.",
      "All drawings must be prepared using **metric units (mm/meters)**.",
      "Participants must prepare **Plan, Section (A–A), and Elevation** for a **2BHK Residential building**.",
      "The **Plan** should show rooms, doors, windows, walls, and dimensions.",
      "The **Section (A–A)** should show foundation, floor, lintel, roof, and levels.",
      "The **Elevation** should show the front view, openings, and parapet details.",
      "Maintain the drawing scale as **1:50 or 1:100**.",
      "If there is a large number of participants, a **preliminary technical MCQ round** may be conducted to shortlist participants for the CAD Modelling contest.",
      "The **decision of the judges will be final and binding** on all participants."
    ],
    staffCoordinator: { name: "Mr. T. Nanthakumar", phone: "+91 86950 99995" },
    studentCoordinator: { name: "P. Abinaya", phone: "+91 70109 49648" },
    comingSoon: false,
  },
  {
    id: "lathex",
    title: "Latheax",
    category: "Lathe Operations",
    dept: "Mech",
    icon: Layers,
    tagline: "Demonstrate technical knowledge & precision lathe machine operation.",
    venue: "MFT Lab",
    timing: "11:00 AM – 12:30 PM",
    logo: "/lathex_logo.png",
    rounds: [
      { name: "Round 1: Technical MCQ (15 mins)", desc: "Offline technical MCQ round covering lathe fundamentals, machine components, cutting tools, machining operations, cutting parameters, and safety." },
      { name: "Round 2: Lathe Machine Operation", desc: "Hands-on lathe machining contest where short-listed participants complete an assigned machining task." }
    ],
    rules: [
      "Participants are required to complete their registration with the registration committee on the morning of the event day. Only those who have registered will be permitted to participate in the contest.",
      "The contest will be conducted in two rounds — Round 1: Technical MCQ and Round 2: Lathe Machine Operation.",
      "Round 1 will consist of an offline technical MCQ round covering lathe fundamentals, machine components, cutting tools, machining operations, cutting parameters, and safety.",
      "Duration of Round 1: 15 minutes.",
      "The lathe machines, tools, workpieces, and other required equipment will be provided by the department.",
      "The contest will be conducted individually — no group work allowed.",
      "Participants must follow all safety procedures and use the safety equipment provided by the department.",
      "Participants should not access or use unauthorized tools, materials, or assistance from other participants.",
      "Participants must not perform any unsafe operation or misuse the lathe machine. Violation of safety rules may lead to disqualification.",
      "Participants are required to complete the assigned machining task within the specified time.",
      "Participants will be evaluated based on dimensional accuracy, surface finish, workmanship, adherence to specifications, and time taken.",
      "Participants are advised to check the machine, tools, and workpiece before starting the machining operation. In case of machine failure or technical malfunction, the event organizers will provide the necessary instructions.",
      "If there are a large number of participants, the preliminary technical MCQ round will be used to shortlist the finalists for the Lathe Machine Operation contest.",
      "The decision of the judges will be final and binding on all participants."
    ],
    staffCoordinator: { name: "Mr. G. Rakesh", phone: "+91 63811 87340" },
    studentCoordinators: [
      { name: "S Gobinath", phone: "+91 80154 44013" },
      { name: "R Divagar", phone: "+91 63853 81908" }
    ],
    comingSoon: false,
  },
  {
    id: "unblock",
    title: "Unblock",
    category: "3D Form Exploration in Polystyrene Block",
    dept: "Design",
    icon: Palette,
    tagline: "Carve, sculpt, and explore 3D design aesthetics out of polystyrene blocks.",
    venue: "Design Drawing Hall",
    timing: "02.30 pm to 03.30 pm",
    logo: "/unblock_logo.png",
    rules: [
      "This is an **individual competition**.",
      "Each participant will receive **one Extruded Polystyrene (XPS) block 15x15x10cm** and **three A3 sheets** for ideation and rough sketching. No additional block or paper will be provided under any circumstances.",
      "**All tools, cutting implements, measuring tools, and sketching materials** required to ideate and carve the form **must be brought by the participant**.",
      "The use of **power tools, electronic machinery, hot-wire cutters, or digital gadgets** of any kind is **strictly prohibited**.",
      "**Borrowing or sharing** tools, materials, or equipment between participants during the contest is **strictly forbidden**.",
      "Participants **must bring and use their cutting mat** on their workspace. Direct cutting on venue tables is **strictly prohibited**.",
      "Participants have **exactly 1 hour** to complete both the ideation and model-making phases. The design prompt will be revealed at the venue at the start of the contest.",
      "Judging will be based solely on the **physical XPS model** and a **mandatory, concise 2-sentence written explanation** of the design concept.",
      "Designs must be **entirely original and novel**. Any offensive, insensitive, or inappropriate forms will lead to **immediate rejection**.",
      "Models must be **self-supporting and constructed solely from the provided XPS block** (no external adhesives, joints, or secondary structural materials are permitted).",
      "Participants are **fully responsible for their personal safety** and must exercise extreme caution while handling manual cutting tools. While a basic first-aid kit will be available on-site, the organizers hold no liability for injuries incurred during the event.",
      "Organizers reserve the right to **disqualify any participant** who violates rules or disrupts the event, without providing any prior explanation.",
      "The **decision of the judging panel is final, binding, and non-negotiable**. No arguments or disputes will be entertained.",
      "Entry is limited and registration is deemed complete only upon receiving an **official confirmation email** from the organizing committee."
    ],
    staffCoordinator: { name: "Mr. Govindaprasath E.", phone: "+91 96299 96352" },
    studentCoordinator: { name: "Ms. Bhoomika S.", phone: "+91 93614 92669" },
    comingSoon: false,
  },
];

const CONTACT = {
  email: "techfest@care.ac.in",
  overall: { name: "Dr. J. Suresh", phone: "+91 99944 41744" },
};

const GOOGLE_FORM_URL = "https://forms.gle/gXNRDtnVjZeiBewE9";

const CREDITS = ["Suriya Prakash A", "Vasantha Kumar S", "Harini R", "Farhana A"];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function EventIconBadge({ Icon, size = 24 }) {
  return (
    <span className="tf-icon-badge">
      <Icon size={size} strokeWidth={1.5} />
    </span>
  );
}

function NavBar({ view, goTo, menuOpen, setMenuOpen }) {
  const links = [
    { key: "home", label: "Home" },
    { key: "events", label: "Events" },
    { key: "about", label: "About" },
    { key: "location", label: "Location" },
    { key: "register", label: "Register" },
  ];
  return (
    <header className="tf-nav">
      <div className="tf-nav-inner">
        <button className="tf-logo" onClick={() => goTo("home")} aria-label="CARE TechFest Home">
          <img
            src="/logo.png"
            alt="CARE College of Engineering Logo"
            className="tf-logo-img"
          />
        </button>

        <nav className="tf-nav-links tf-nav-links-desktop">
          {links.map((l) => (
            <button
              key={l.key}
              className={`tf-nav-link ${view.page === l.key ? "is-active" : ""}`}
              onClick={() => goTo(l.key)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="tf-nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="tf-nav-links tf-nav-links-mobile">
          {links.map((l) => (
            <button
              key={l.key}
              className={`tf-nav-link ${view.page === l.key ? "is-active" : ""}`}
              onClick={() => {
                goTo(l.key);
                setMenuOpen(false);
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer({ goTo }) {
  return (
    <footer className="tf-footer">
      <div className="tf-footer-grid">
        <div>
          <div className="tf-footer-heading">Contact</div>
          <p className="tf-footer-line">
            <Mail size={16} /> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
          <p className="tf-footer-line">
            <Phone size={16} /> Overall coordinator — {CONTACT.overall.name}, {CONTACT.overall.phone}
          </p>
          <p className="tf-footer-note">
            For event-specific queries, reach the staff or student coordinator listed under that event.
          </p>
        </div>

        <div>
          <div className="tf-footer-heading">Explore</div>
          <button className="tf-footer-link" onClick={() => goTo("events")}>Events</button>
          <button className="tf-footer-link" onClick={() => goTo("about")}>About CARE</button>
          <button className="tf-footer-link" onClick={() => goTo("location")}>Location</button>
          <button className="tf-footer-link" onClick={() => goTo("register")}>Register</button>
        </div>

        <div>
          <div className="tf-footer-heading">Web page design</div>
          {CREDITS.map((name) => (
            <p key={name} className="tf-footer-line">{name}</p>
          ))}
        </div>
      </div>
      <div className="tf-footer-base">© CARE TechFest 26. All rights reserved.</div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Countdown Component
// ---------------------------------------------------------------------------

function CountdownTimer({ compact = false }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2026-09-25T10:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="tf-countdown-live-badge">
        <span className="tf-live-dot"></span> LIVE NOW — TechFest '26
      </div>
    );
  }

  const formatNum = (num) => String(num).padStart(2, "0");

  return (
    <div className={`tf-countdown-wrap ${compact ? "is-compact" : ""}`} aria-label="Event Countdown">
      <div className="tf-countdown-segment">
        <span className="tf-countdown-num">{formatNum(timeLeft.days)}</span>
        <span className="tf-countdown-label">DAYS</span>
      </div>
      <span className="tf-countdown-divider">:</span>
      <div className="tf-countdown-segment">
        <span className="tf-countdown-num">{formatNum(timeLeft.hours)}</span>
        <span className="tf-countdown-label">HOURS</span>
      </div>
      <span className="tf-countdown-divider">:</span>
      <div className="tf-countdown-segment tf-hide-mobile">
        <span className="tf-countdown-num">{formatNum(timeLeft.minutes)}</span>
        <span className="tf-countdown-label">MINS</span>
      </div>
      <span className="tf-countdown-divider tf-hide-mobile">:</span>
      <div className="tf-countdown-segment tf-hide-mobile">
        <span className="tf-countdown-num">{formatNum(timeLeft.seconds)}</span>
        <span className="tf-countdown-label">SECS</span>
      </div>
    </div>
  );
}

function HomePage({ goTo }) {
  return (
    <section className="tf-hero">
      <div className="tf-hero-content">
        <div className="tf-hero-kicker-badge">
          <span className="tf-kicker-dot">•</span>
          <span className="tf-hero-kicker">CARE College of Engineering</span>
          <span className="tf-kicker-dot">•</span>
        </div>
        <h1 className="tf-hero-title">
          <span className="tf-title-text">TechFest '26</span>
        </h1>
        <p className="tf-hero-sub">
          <strong className="tf-hero-tagline-lead">Ignite your vision.</strong>
          <span className="tf-hero-tagline-body">Create something real, showcase it with pride, and defend it with passion.</span>
        </p>

        <CountdownTimer compact={true} />

        <div className="tf-hero-actions">
          <span className="tf-date-badge">
            <Calendar size={18} /> 25 September 2026
          </span>
          <button className="tf-btn-primary" onClick={() => goTo("events")}>
            Explore events
          </button>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tf-btn-secondary"
          >
            <ExternalLink size={18} /> Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

function LocationPage() {
  return (
    <section className="tf-section">
      <div className="tf-section-inner">
        <h1 className="tf-h1">Location</h1>
        <div className="tf-two-col tf-location-grid">
          <div className="tf-panel tf-location-card">
            <div>
              <div className="tf-location-header">
                <EventIconBadge Icon={MapPin} size={24} />
                <div>
                  <h3 className="tf-location-title">CARE College of Engineering</h3>
                  <p className="tf-location-sub">Autonomous Institution</p>
                </div>
              </div>

              <div className="tf-location-details">
                <p className="tf-location-address">
                  <strong>Address:</strong><br />
                  #27, Dindugal main Road,<br />
                  Thayanur, Tamil Nadu 620009
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=CARE+College+of+Engineering+#27+Dindugal+main+Road+Thayanur+Tamil+Nadu+620009"
              target="_blank"
              rel="noopener noreferrer"
              className="tf-btn-primary tf-directions-btn"
            >
              <ExternalLink size={18} /> Get Directions
            </a>
          </div>

          <div className="tf-map-container">
            <iframe
              title="CARE College of Engineering Location Map"
              src="https://maps.google.com/maps?q=CARE%20College%20of%20Engineering%20Dindugal%20main%20Road%20Thayanur%20Tamil%20Nadu%20620009&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="tf-map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsPage({ openEvent }) {
  return (
    <section className="tf-section tf-events-section">
      <div className="tf-section-inner">
        <div className="tf-hero-kicker-badge" style={{ marginBottom: '12px' }}>
          <span className="tf-kicker-dot">•</span>
          <span className="tf-hero-kicker">CARE TECHFEST '26</span>
          <span className="tf-kicker-dot">•</span>
        </div>
        <h1 className="tf-h1 tf-h1-tight">Events</h1>
        <p className="tf-p tf-p-wide" style={{ color: 'var(--text)', opacity: 0.9, marginBottom: '32px' }}>
          Explore our 7 flagship departmental and common events. Choose your challenge and showcase your skills!
        </p>
        <div className="tf-event-grid tf-event-grid-lg">
          {EVENTS.map((ev) => (
            <div
              key={ev.id}
              className={`tf-event-card ${ev.logo ? "tf-event-card-logo-only" : "tf-event-card-lg"}`}
              onClick={() => openEvent(ev.id)}
              role="button"
              tabIndex={0}
            >
              {ev.logo ? (
                <>
                  <div className="tf-event-card-logo-wrap">
                    <img src={ev.logo} alt={`${ev.title} Logo`} className="tf-event-card-logo" />
                  </div>
                  <div className="tf-card-footer">
                    <span className="tf-card-cta-btn">View details →</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="tf-card-top">
                    <EventIconBadge Icon={ev.icon} size={28} />
                    <span className="tf-badge-dept">{ev.dept}</span>
                  </div>
                  <div className="tf-card-content">
                    <h3 className="tf-event-card-title">{ev.title}</h3>
                    <div className="tf-event-card-cat">{ev.category}</div>
                    <p className="tf-event-card-tagline">{ev.tagline}</p>
                    <div className="tf-card-time"><Clock size={14} /> {ev.timing}</div>
                  </div>
                  <div className="tf-card-footer">
                    <span className="tf-card-cta-btn">View details →</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventDetailPage({ event, goTo }) {
  if (!event) return null;
  return (
    <section className="tf-section">
      <div className="tf-section-inner tf-narrow">
        <button className="tf-back-btn" onClick={() => goTo("events")}>
          <ArrowLeft size={18} /> Back to events
        </button>

        <div className="tf-event-header">
          {event.logo ? (
            <div className="tf-event-detail-logo-wrap">
              <img src={event.logo} alt={`${event.title} Logo`} className="tf-event-detail-logo" />
            </div>
          ) : (
            <EventIconBadge Icon={event.icon} size={32} />
          )}
          <div className="tf-event-header-text">
            <h1 className="tf-h1 tf-h1-tight">{event.title}</h1>
            <div className="tf-event-detail-cat">{event.category} • <strong style={{ color: 'var(--accent-glow, #60a5fa)' }}>{event.dept}</strong></div>
            <p className="tf-p tf-event-tagline">{event.tagline}</p>
          </div>
        </div>

        <div className="tf-panel tf-event-meta">
          <div className="tf-meta-row">
            <MapPin size={20} />
            <span><strong>Venue —</strong> {event.venue}</span>
          </div>
          <div className="tf-meta-row">
            <Clock size={20} />
            <span><strong>Timing —</strong> {event.timing}</span>
          </div>
          {event.prizes && (
            <div className="tf-meta-row">
              <Trophy size={20} style={{ color: '#F59E0B' }} />
              <span>
                <strong>Cash Prizes —</strong> 1st Prize: {event.prizes[0].amount}, 2nd Prize: {event.prizes[1].amount} {event.prizesNote ? `(${event.prizesNote})` : ''}
              </span>
            </div>
          )}
        </div>

        {event.prizes && (
          <>
            <h2 className="tf-h3" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Trophy size={24} style={{ color: '#F59E0B' }} /> Cash Prizes
            </h2>
            <div className="tf-prizes-grid">
              {event.prizes.map((pz, i) => (
                <div key={i} className="tf-panel tf-prize-card">
                  <div className="tf-prize-badge">{i === 0 ? "🥇" : "🥈"}</div>
                  <div className="tf-prize-info">
                    <div className="tf-prize-rank">{pz.rank}</div>
                    <div className="tf-prize-amount">{pz.amount}</div>
                    {pz.note && <div className="tf-prize-note">({pz.note})</div>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {event.comingSoon ? (
          <div className="tf-panel tf-soon">
            <p className="tf-p">
              Themes, rules and coordinator details for this event will be published
              here closer to the festival.
            </p>
            <p className="tf-p">
              Questions in the meantime? Write to{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </div>
        ) : (
          <>
            {event.rounds && (
              <>
                <h2 className="tf-h3">Competition Rounds</h2>
                <div className="tf-rounds-grid">
                  {event.rounds.map((rnd, i) => (
                    <div key={i} className="tf-panel tf-round-card">
                      <div className="tf-round-title">{rnd.name}</div>
                      <p className="tf-p" style={{ margin: 0 }}>{rnd.desc}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {event.themes && (
              <>
                <h2 className="tf-h3">Themes</h2>
                <div className="tf-table-wrap">
                  <table className="tf-table">
                    <tbody>
                      {event.themes.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {event.themesNote && <p className="tf-table-note">{event.themesNote}</p>}
              </>
            )}

            <h2 className="tf-h3">Rules & Regulations</h2>
            <ol className="tf-rules">
              {event.rules.map((r, i) => {
                const parts = r.split(/(\*\*.*?\*\*)/g);
                return (
                  <li key={i}>
                    {parts.map((part, j) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={j}>{part.slice(2, -2)}</strong>
                      ) : (
                        part
                      )
                    )}
                  </li>
                );
              })}
            </ol>
            {event.submitTo && (
              <p className="tf-p" style={{ marginTop: '20px' }}>
                Send your papers to <a href={`mailto:${event.submitTo}`}>{event.submitTo}</a>.
              </p>
            )}

            <div className="tf-coord-grid">
              {event.staffCoordinator && (
                <div className="tf-panel tf-coord-card">
                  <div className="tf-footer-heading">Staff coordinator</div>
                  <p className="tf-p tf-coord-p">
                    <span>{event.staffCoordinator.name}</span> <span className="tf-coord-sep">—</span> <a className="tf-coord-phone" href={`tel:${event.staffCoordinator.phone}`}>{event.staffCoordinator.phone}</a>
                  </p>
                </div>
              )}
              {event.studentCoordinator && (
                <div className="tf-panel tf-coord-card">
                  <div className="tf-footer-heading">Student coordinator</div>
                  <p className="tf-p tf-coord-p">
                    <span>{event.studentCoordinator.name}</span> <span className="tf-coord-sep">—</span> <a className="tf-coord-phone" href={`tel:${event.studentCoordinator.phone}`}>{event.studentCoordinator.phone}</a>
                  </p>
                </div>
              )}
              {event.studentCoordinators && (
                <div className="tf-panel tf-coord-card">
                  <div className="tf-footer-heading">Student coordinators</div>
                  {event.studentCoordinators.map((sc, i) => (
                    <p key={i} className="tf-p tf-coord-p" style={{ margin: i > 0 ? '6px 0 0' : 0 }}>
                      <span>{sc.name}</span> <span className="tf-coord-sep">—</span> <a className="tf-coord-phone" href={`tel:${sc.phone}`}>{sc.phone}</a>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="tf-section">
      <div className="tf-section-inner tf-narrow">
        <h1 className="tf-h1">About</h1>

        <h2 className="tf-h3">About CARE</h2>
        <p className="tf-p">
          CARE offers application-oriented courses with hands-on training in one of the
          most conducive learning environments in India. It inculcates the value of life
          beyond curriculum and explores the full potential of students.
        </p>
        <p className="tf-p">
          CARE believes in partnerships between industry, government, and higher
          education to yield countless innovations. Our faculty value corporate
          partnerships for the insights they contribute as much as for the support they
          provide.
        </p>
        <p className="tf-p">
          G. Narayanan Educational Trust was formed in 1999. The trust's vision includes
          offering quality education, providing world class infrastructure, fostering
          creative thinking, encouraging innovation, creating the best ambience for
          education and research, multi-disciplinary education, developing
          industry-ready professionals, and encouraging entrepreneurship.
        </p>
        <p className="tf-p">
          Out of this vision was born CARE Group of Institutions, India's first
          Integrated Campus, nurturing talent for the challenges of the 21st century.
        </p>

        <h2 className="tf-h3">About CARE TechFest 26</h2>
        <p className="tf-p">
          CARE TechFest 26 is the flagship annual technical festival of our college,
          bringing together talented and enthusiastic students from diverse disciplines
          to celebrate innovation, technology, creativity, and engineering excellence.
        </p>
        <p className="tf-p">
          The festival provides a dynamic platform for students to showcase their
          skills, present innovative ideas, solve real-world challenges, and compete in
          a spirit of healthy collaboration. With a diverse range of technical events,
          participants can explore their strengths while gaining valuable practical and
          problem-solving experience.
        </p>
        <p className="tf-p">
          This year's TechFest features exciting events including Paper Presentation,
          Project Expo, Prompt Engineering, Circuit Design &amp; Troubleshooting, CAD
          Modeling, Lathe Operations, and 3D Form Exploration in Polystyrene Block.
          These events are designed to encourage creative thinking, technical expertise,
          hands-on learning, teamwork, and innovation across multiple engineering disciplines.
        </p>
        <p className="tf-p" style={{ fontWeight: 600, color: 'var(--cyan)' }}>
          CARE TechFest 26 — Where Ideas Meet Innovation.
        </p>
        <h2 className="tf-h3">Contact Us</h2>
        <div className="tf-panel tf-event-meta" style={{ marginBottom: '24px' }}>
          <div className="tf-meta-row">
            <Mail size={20} />
            <span><strong>E-Mail:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span>
          </div>
          <div className="tf-meta-row">
            <Phone size={20} />
            <span><strong>Overall Coordinator:</strong> {CONTACT.overall.name} — <a href={`tel:${CONTACT.overall.phone}`}>{CONTACT.overall.phone}</a></span>
          </div>
        </div>
        <p className="tf-p" style={{ fontSize: '0.95rem', opacity: 0.9 }}>
          For Event-specific queries, contact the respective staff or student coordinators listed under each event.
        </p>

        <h2 className="tf-h3" style={{ marginTop: '32px' }}>Registration Page Credits</h2>
        <div className="tf-panel" style={{ padding: '16px 24px' }}>
          {CREDITS.map((name, i) => (
            <p key={name} className="tf-p" style={{ margin: i > 0 ? '4px 0 0' : 0 }}>
              <strong>{name}</strong>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegisterPage() {
  return (
    <section className="tf-section">
      <div className="tf-section-inner tf-narrow tf-center">
        <h1 className="tf-h1">Register for TechFest '26</h1>
        <p className="tf-p tf-p-wide" style={{ margin: '0 auto 24px' }}>
          Complete your registration via our official Google Form to participate in CARE TechFest '26 events.
        </p>

        <div className="tf-panel tf-register-panel">
          <p className="tf-urgency-title">Event Starts In:</p>
          <CountdownTimer compact={false} />

          <p className="tf-register-deadline">
            <strong>Last Date to Register:</strong> September 22, 2026 at 5:00 PM
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tf-btn-primary tf-register-btn"
          >
            <ExternalLink size={18} /> Register via Google Form
          </a>
          <p className="tf-register-note">
            Have questions regarding registration? Write to{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </div>

        <div className="tf-chip-row">
          {EVENTS.map((ev) => (
            <span key={ev.id} className="tf-chip">{ev.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Background Component
// ---------------------------------------------------------------------------

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.warn("Video play failed:", e));
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src="/bg-video.mp4"
        className="tf-video-bg"
      >
        Your browser does not support the video tag.
      </video>
      <div className="tf-video-overlay"></div>
    </>
  );
}

// ---------------------------------------------------------------------------
// App shell
// ---------------------------------------------------------------------------

export default function App() {
  const [view, setView] = useState({ page: "home" });
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (page) => {
    setView({ page });
    setMenuOpen(false);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  const openEvent = (id) => {
    setView({ page: "event", id });
    setMenuOpen(false);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  const activeEvent = view.page === "event" ? EVENTS.find((e) => e.id === view.id) : null;

  return (
    <div className="tf26">
      <VideoBackground />
      <NavBar view={view} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="tf-main">
        {view.page === "home" && <HomePage goTo={goTo} />}
        {view.page === "events" && <EventsPage openEvent={openEvent} />}
        {view.page === "event" && <EventDetailPage event={activeEvent} goTo={goTo} />}
        {view.page === "about" && <AboutPage />}
        {view.page === "location" && <LocationPage />}
        {view.page === "register" && <RegisterPage />}
      </main>

      {view.page !== "home" && <Footer goTo={goTo} />}
    </div>
  );
}
