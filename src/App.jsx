import { useEffect, useState } from 'react'
import logoUrl from './assets/logo.png'
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  HandCoins,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const advantages = [
  { icon: Scissors, title: 'Real-World Environment', text: 'Train in a real working shop environment open 7 days a week.' },
  { icon: GraduationCap, title: 'Industry Professionals', text: 'Learn from licensed professionals actively working in the industry.' },
  { icon: Users, title: 'Hands-On Experience', text: 'Gain confidence working directly with real clients.' },
  { icon: BriefcaseBusiness, title: 'Entrepreneurship Training', text: 'Build business ownership and management skills from day one.' },
  { icon: HandCoins, title: 'Career Placement', text: 'Explore opportunity paths within the Country Cutz family.' },
  { icon: CalendarDays, title: 'Flexible Scheduling', text: 'Choose from multiple schedule options designed around your life.' },
]

const programs = [
  {
    number: '01',
    icon: Scissors,
    title: 'Class A Barber',
    text: 'Master modern fading, classic shearing, shaving, and full chemical services.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Cosmetology',
    text: 'Comprehensive training in hair design, color theory, aesthetics, and salon management.',
  },
]

const paymentPlans = [
  { label: 'Pay in full', amount: '$9,500', detail: 'Save $995', featured: true },
  { label: '12-month plan', amount: '$500 down', detail: '$190 weekly' },
  { label: '9-month plan', amount: '$1,000 down', detail: '$225 weekly' },
  { label: '6-month plan', amount: '$1,500 down', detail: '$350 weekly' },
]

const requirements = [
  'Must be 14 years of age or older — now enrolling students 14+',
  'Must have successfully completed the 7th grade',
  'Valid government-issued ID',
  '$25 TDLR student permit fee',
  '$250 registration fee',
]

function Brand() {
  const [logoError, setLogoError] = useState(false)

  return (
    <a className="brand" href="#top" aria-label="DeLeon Academy home">
      {!logoError ? (
        <img
          src={logoUrl}
          alt="DeLeon Barber &amp; Beauty Academy Logo"
          className="brand-logo"
          onError={() => setLogoError(true)}
        />
      ) : (
        <svg className="brand-mark" viewBox="0 0 50 56" aria-hidden="true">
          <path d="M25 2 46 10v16c0 13-8 23-21 28C12 49 4 39 4 26V10L25 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M25 8 40 14v12c0 9-5 16-15 21-10-5-15-12-15-21V14l15-6Z" fill="currentColor" opacity=".08" />
          <path d="M17 36c7-1 13-7 16-17-8 3-13 8-16 17Zm5-15c2 3 5 5 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      <span><b>DELEON</b><small>BARBER &amp; BEAUTY ACADEMY</small></span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [tourOpen, setTourOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = tourOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [tourOpen])

  const closeMenu = () => setMenuOpen(false)
  const openTour = () => { setTourOpen(true); setSubmitted(false); setMenuOpen(false) }

  const handleTourSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') || ''
    const phone = formData.get('phone') || ''
    const email = formData.get('email') || ''
    const program = formData.get('program') || ''

    const subject = encodeURIComponent(`Tour Request - ${name}`)
    const body = encodeURIComponent(
      `Hello DeLeon Academy Admissions,\n\nI would like to schedule a tour of the academy.\n\n` +
      `Here are my details:\n` +
      `- Full Name: ${name}\n` +
      `- Phone Number: ${phone}\n` +
      `- Email Address: ${email}\n` +
      `- Program of Interest: ${program}\n\n` +
      `Thank you!`
    )

    if (import.meta.env.MODE !== 'test') {
      window.location.href = `mailto:deleonacademy@gmail.com?subject=${subject}&body=${body}`
    }
    setSubmitted(true)
  }

  return (
    <div id="top" className="site-shell">
      <header className="header">
        <div className="nav-wrap">
          <Brand />
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            <a href="#programs" onClick={closeMenu}>Programs</a>
            <a href="#tuition" onClick={closeMenu}>Tuition &amp; Financing</a>
            <a href="#admissions" onClick={closeMenu}>Admissions</a>
            <a href="#location" onClick={closeMenu}>Location</a>
            <button className="mobile-tour" onClick={openTour}>Schedule a tour</button>
          </nav>
          <a className="button button-small button-outline nav-cta" href="#admissions">Enroll now <ArrowRight size={15} /></a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" />
          <div className="hero-grain" />
          <div className="container hero-content">
            <p className="eyebrow"><span /> Austin, Texas · Now enrolling students 14+</p>
            <h1 id="hero-title">Don’t just learn<br />the trade. <em>Learn<br />the business.</em></h1>
            <p className="hero-copy">Build your craft, grow a clientele, and become part of one of Central Texas’ fastest-growing barber and beauty brands.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programs">Explore programs <ArrowDownRight size={18} /></a>
              <button className="button button-ghost" onClick={openTour}>Schedule a tour</button>
            </div>
            <div className="hero-meta" aria-label="Academy highlights">
              <div><b>1,000</b><span>Program hours</span></div>
              <div><b>7</b><span>Days a week</span></div>
              <div><b>14+</b><span>Students welcome</span></div>
            </div>
          </div>
          <div className="hero-side-label">EDUCATE · ELEVATE · EMPOWER</div>
        </section>

        <section className="section advantage-section" aria-labelledby="advantage-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="kicker">The DeLeon advantage</p><h2 id="advantage-title">Training built for the<br /><em>real world.</em></h2></div>
              <p>Go beyond technique. Learn how to serve clients, build trust, and create a future you own.</p>
            </div>
            <div className="advantage-grid">
              {advantages.map(({ icon: Icon, title, text }, index) => (
                <article className="advantage-card" key={title}>
                  <div className="icon-box"><Icon size={22} strokeWidth={1.5} /></div>
                  <span className="card-index">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section programs-section" aria-labelledby="programs-title">
          <div className="container">
            <div className="section-heading program-heading">
              <p className="kicker">Programs offered</p>
              <h2 id="programs-title">Choose your <em>craft.</em></h2>
            </div>
            <div className="program-grid">
              {programs.map(({ number, icon: Icon, title, text }) => (
                <article className="program-card" key={title}>
                  <span className="program-number">{number}</span>
                  <div className="program-icon"><Icon size={28} strokeWidth={1.25} /></div>
                  <div className="program-body">
                    <p className="hours"><Clock3 size={15} /> 1,000 hours</p>
                    <h3>{title}<br />Program</h3>
                    <p>{text}</p>
                  </div>
                  <a href="#admissions" aria-label={`Learn more about the ${title} program`}>Program details <ArrowRight size={17} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tuition" className="section tuition-section" aria-labelledby="tuition-title">
          <div className="container tuition-layout">
            <div className="tuition-intro">
              <p className="kicker">Tuition &amp; flexible financing</p>
              <h2 id="tuition-title">Invest in the<br /><em>future you.</em></h2>
              <p>Simple pricing. Flexible plans. A clear path toward doing work you’re proud of.</p>
              <div className="cost-breakdown">
                <div><span>Tuition</span><b>$8,995</b></div>
                <div><span>Registration fee</span><b>$250</b></div>
                <div><span>Student kit, books &amp; supplies</span><b>$1,250</b></div>
                <div className="cost-total"><span>Total program cost</span><b>$10,495</b></div>
              </div>
            </div>
            <div className="payment-panel">
              <div className="panel-header"><span>Flexible payment options</span><small>Choose what works for you</small></div>
              <div className="payment-list">
                {paymentPlans.map((plan) => (
                  <div className={`payment-row ${plan.featured ? 'featured' : ''}`} key={plan.label}>
                    <div><span>{plan.label}</span>{plan.featured && <small>Best value</small>}</div>
                    <strong>{plan.amount}</strong>
                    <b>{plan.detail}</b>
                  </div>
                ))}
              </div>
              <div className="scholarship">
                <GraduationCap size={28} strokeWidth={1.25} />
                <div><p>Yolanda DeLeon Scholarship</p><span>A limited number of eligible students may qualify for reduced tuition costs.</span></div>
                <a href="#admissions">Learn if you qualify <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="admissions" className="section admissions-section" aria-labelledby="admissions-title">
          <div className="container admissions-layout">
            <div className="admissions-copy">
              <p className="kicker">Admissions &amp; next steps</p>
              <h2 id="admissions-title">Ready to make<br />your <em>move?</em></h2>
              <p>Bring your ambition. We’ll help you turn it into a professional foundation.</p>
              <div className="admission-actions">
                <a className="button button-light" href="tel:+15126329742">Call admissions <Phone size={17} /></a>
                <a className="button button-ghost" href="mailto:deleonacademy@gmail.com">Email admissions <Mail size={17} /></a>
                <button className="text-link" onClick={openTour}>Schedule a tour <ArrowRight size={17} /></button>
              </div>
            </div>
            <div className="requirements-card">
              <div className="requirements-header"><span>What you’ll need</span><small>Five simple requirements</small></div>
              <ol>
                {requirements.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p><Check size={18} /></li>)}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer id="location" className="footer">
        <div className="container">
          <div className="footer-top">
            <div><Brand /><p>Educate <span>★</span> Elevate <span>★</span> Empower</p></div>
            <div className="footer-contact">
              <a href="tel:+15126329742"><Phone size={18} /> <span><small>Speak with admissions</small>(512) 632-9742</span></a>
              <a href="mailto:deleonacademy@gmail.com"><Mail size={18} /> <span><small>Email admissions</small>deleonacademy@gmail.com</span></a>
              <a href="https://maps.google.com/?q=5316+Menchaca+Rd+Austin+TX+78745" target="_blank" rel="noreferrer"><MapPin size={18} /> <span><small>Visit the academy</small>5316 Menchaca Rd.<br />Austin, TX 78745</span></a>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 DeLeon Academy. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>

      {tourOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setTourOpen(false)}>
          <section className="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-title">
            <button className="modal-close" onClick={() => setTourOpen(false)} aria-label="Close tour form"><X size={20} /></button>
            {submitted ? (
              <div className="success-message">
                <div className="success-icon"><Check size={28} /></div>
                <p className="kicker">You’re on the list</p>
                <h2 id="tour-title">We’ll be in touch.</h2>
                <p>Thanks for your interest. Our admissions team will contact you soon. You can also reach out anytime at <a href="mailto:deleonacademy@gmail.com" className="email-link">deleonacademy@gmail.com</a>.</p>
                <div className="modal-actions">
                  <a className="button button-ghost" href="mailto:deleonacademy@gmail.com"><Mail size={16} /> Send Email</a>
                  <button className="button button-primary" onClick={() => setTourOpen(false)}>Close</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit}>
                <p className="kicker">Come see the academy</p>
                <h2 id="tour-title">Schedule a tour.</h2>
                <p>Tell us how to reach you and our admissions team will help find a time.</p>
                <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="(512) 555-0123" /></label>
                <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="name@example.com" /></label>
                <label>Program of interest<select name="program" defaultValue=""><option value="" disabled>Select a program</option><option>Class A Barber</option><option>Cosmetology</option><option>Not sure yet</option></select></label>
                <button className="button button-primary" type="submit">Request my tour <ArrowRight size={17} /></button>
                <div className="modal-direct-email">
                  <span>Prefer to email directly?</span>
                  <a href="mailto:deleonacademy@gmail.com"><Mail size={14} /> deleonacademy@gmail.com</a>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
