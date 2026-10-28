import { useState, type ReactNode } from 'react'
import {
  ArrowDownRight, ArrowRight, Check, Clock3,
  Facebook, Instagram, MapPin, Menu, Phone, Play, Send, Sparkles, Utensils,
  Waves, Wifi, X, BedDouble, Wine, Music2, Users, Mail, MapPinned,
} from 'lucide-react'

type InquiryKind = 'room' | 'event' | 'general'

const images = {
  hero: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=88',
  room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1100&q=85',
  suite: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1100&q=85',
  pool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85',
  event: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
  lounge: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85',
  detail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1100&q=85',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [inquiryKind, setInquiryKind] = useState<InquiryKind>('room')
  const [submitted, setSubmitted] = useState(false)

  const openInquiry = (kind: InquiryKind) => {
    setInquiryKind(kind)
    setSubmitted(false)
    setInquiryOpen(true)
    setMenuOpen(false)
  }
  const closeInquiry = () => setInquiryOpen(false)

  const navItems = [
    ['The Hotel', '#about'], ['Stay', '#stay'], ['Experiences', '#experiences'], ['Events', '#events'], ['Contact', '#contact'],
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-forest">
      <div className="bg-forest px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[.19em] text-white/80 sm:text-[11px]">
        A considered stay. A memorable experience.
      </div>
      <header className="absolute z-30 w-full border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Royal Regis home">
            <div className="flex h-11 w-11 items-center justify-center border border-gold/80 font-display text-xl text-gold">R</div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-[.12em] sm:text-xl">ROYAL REGIS</div>
              <div className="mt-1 text-[8px] font-semibold uppercase tracking-[.31em] text-white/75">Hotel & Resorts</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => <a key={label} className="nav-link" href={href}>{label}</a>)}
          </nav>
          <button onClick={() => openInquiry('room')} className="hidden items-center gap-2 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[.13em] text-forest transition hover:bg-white lg:flex">
            Make an enquiry <ArrowRight size={15} />
          </button>
          <button className="rounded-full border border-white/35 p-2 lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-white/15 bg-forest px-6 py-4 lg:hidden">
          {navItems.map(([label, href]) => <a key={label} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-3 text-sm" href={href}>{label}</a>)}
          <button onClick={() => openInquiry('room')} className="mt-4 w-full bg-gold px-4 py-3 text-sm font-semibold text-forest">Make an enquiry</button>
        </nav>}
      </header>

      <main>
        <section id="top" className="hero relative flex min-h-[720px] items-end bg-forest md:min-h-[790px]">
          <img src={images.hero} alt="Resort pool surrounded by tropical greenery" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101a17]/85 via-[#101a17]/45 to-[#101a17]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101a17]/65 via-transparent to-[#101a17]/35" />
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-10 px-5 pb-20 pt-44 md:grid-cols-[1fr_auto] md:px-10 md:pb-28">
            <div className="max-w-3xl text-white">
              <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-gold"><span className="h-px w-10 bg-gold" /> Your escape, close to home</div>
              <h1 className="font-display text-5xl leading-[1.05] tracking-[-.035em] sm:text-6xl md:text-7xl lg:text-[88px]">Make room for<br /><em className="font-normal text-gold">something special.</em></h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-white/80 sm:text-lg">A welcoming destination for restful stays, easy celebrations and memorable moments together.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button onClick={() => openInquiry('room')} className="inline-flex items-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-forest transition hover:bg-white">Explore a stay <ArrowRight size={16} /></button>
                <a href="#experiences" className="inline-flex items-center gap-3 px-3 py-3 text-xs font-bold uppercase tracking-[.12em] text-white transition hover:text-gold"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60"><Play size={12} fill="currentColor" /></span> Discover the hotel</a>
              </div>
            </div>
            <div className="hidden max-w-[190px] border-l border-white/35 pl-5 pb-2 text-white/75 md:block">
              <Sparkles className="mb-3 text-gold" size={20} />
              <p className="font-display text-xl leading-snug">A place to pause, gather and celebrate.</p>
            </div>
          </div>
          <a href="#about" className="absolute bottom-7 right-6 hidden items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/70 md:flex">Scroll to explore <ArrowDownRight size={16} /></a>
        </section>

        <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 md:-mt-10 md:px-10">
          <div className="grid gap-px bg-[#d9d4c8] shadow-soft sm:grid-cols-3">
            <div className="flex items-center gap-4 bg-white px-6 py-6 md:px-8"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-moss"><BedDouble size={21} /></span><div><div className="font-display text-lg">A restful stay</div><div className="mt-1 text-xs text-stone-500">Room enquiries made easy</div></div></div>
            <div className="flex items-center gap-4 bg-white px-6 py-6 md:px-8"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-moss"><Waves size={21} /></span><div><div className="font-display text-lg">Time to unwind</div><div className="mt-1 text-xs text-stone-500">Leisure and relaxation</div></div></div>
            <div className="flex items-center gap-4 bg-white px-6 py-6 md:px-8"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-moss"><Users size={21} /></span><div><div className="font-display text-lg">Moments together</div><div className="mt-1 text-xs text-stone-500">Events and celebrations</div></div></div>
          </div>
        </section>

        <section id="about" className="section-pad mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10 lg:gap-24">
          <div className="relative pb-8 pr-8">
            <img src={images.detail} alt="Hotel grounds and outdoor hospitality setting" className="h-[420px] w-full object-cover sm:h-[540px]" />
            <div className="absolute -bottom-1 right-0 w-[58%] border-[10px] border-cream bg-forest p-5 text-white sm:p-7"><div className="font-display text-2xl italic text-gold sm:text-3xl">Stay a little longer.</div><p className="mt-2 text-xs leading-5 text-white/70">Space to rest, reconnect and enjoy the moment.</p></div>
          </div>
          <div className="max-w-xl">
            <Eyebrow>Welcome to Royal Regis</Eyebrow>
            <h2 className="section-title mt-5">Hospitality that makes every moment <em>matter.</em></h2>
            <p className="mt-6 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">Whether you are planning a comfortable overnight stay, a relaxed afternoon or a special gathering, Royal Regis is a place to bring people together.</p>
            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">Explore the spaces, discover the facilities and get in touch with our team to plan your visit.</p>
            <a href="#experiences" className="link-arrow mt-8">Get to know us <ArrowRight size={16} /></a>
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-stone-300 pt-6">
              <div><div className="font-display text-2xl">Rest</div><p className="mt-1 text-xs text-stone-500">Comfortable accommodation</p></div>
              <div><div className="font-display text-2xl">Reconnect</div><p className="mt-1 text-xs text-stone-500">Spaces for shared moments</p></div>
            </div>
          </div>
        </section>

        <section id="stay" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><Eyebrow>Make yourself at home</Eyebrow><h2 className="section-title mt-4 max-w-xl">Find your kind of <em>comfort.</em></h2></div>
              <p className="max-w-sm text-sm leading-6 text-stone-500">A first look at the stay experience. Room categories, rates and availability can be confirmed directly with the hotel.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="group grid overflow-hidden bg-cream sm:grid-cols-[1.02fr_1fr]">
                <div className="relative min-h-[260px] overflow-hidden"><img src={images.room} alt="Sample hotel guest room" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em]">Room preview</span></div>
                <div className="flex flex-col justify-center p-6 sm:p-7"><div className="text-[10px] font-bold uppercase tracking-[.2em] text-moss">Unwind in comfort</div><h3 className="mt-3 font-display text-2xl">A welcoming retreat</h3><p className="mt-3 text-sm leading-6 text-stone-600">A calm, comfortable space to recharge after a busy day.</p><div className="mt-5 flex flex-wrap gap-3 text-[11px] text-stone-500"><span className="flex items-center gap-1.5"><Wifi size={14} /> Amenities to confirm</span><span className="flex items-center gap-1.5"><BedDouble size={14} /> Room details on request</span></div><button onClick={() => openInquiry('room')} className="link-arrow mt-7 self-start">Ask about rooms <ArrowRight size={15} /></button></div>
              </article>
              <article className="group grid overflow-hidden bg-cream sm:grid-cols-[1.02fr_1fr]">
                <div className="relative min-h-[260px] overflow-hidden"><img src={images.suite} alt="Sample guest suite interior" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em]">Room preview</span></div>
                <div className="flex flex-col justify-center p-6 sm:p-7"><div className="text-[10px] font-bold uppercase tracking-[.2em] text-moss">Space to settle in</div><h3 className="mt-3 font-display text-2xl">Your own quiet corner</h3><p className="mt-3 text-sm leading-6 text-stone-600">Find the right room for your visit, with details confirmed by the team.</p><div className="mt-5 flex flex-wrap gap-3 text-[11px] text-stone-500"><span className="flex items-center gap-1.5"><Clock3 size={14} /> Check-in details to confirm</span></div><button onClick={() => openInquiry('room')} className="link-arrow mt-7 self-start">Enquire about a stay <ArrowRight size={15} /></button></div>
              </article>
            </div>
            <p className="mt-5 text-[11px] leading-5 text-stone-400">Concept imagery only. Actual room types, amenities, rates and availability must be supplied and approved by hotel management.</p>
          </div>
        </section>

        <section id="experiences" className="section-pad mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-2xl text-center"><Eyebrow>More than a place to stay</Eyebrow><h2 className="section-title mt-4">Make a day of <em>it.</em></h2><p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base">From a refreshing dip to a good meal or an evening with friends, discover spaces for different kinds of downtime.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ExperienceCard image={images.pool} title="Poolside moments" text="Take a pause and enjoy a change of pace." icon={<Waves size={19} />} />
            <ExperienceCard image={images.dining} title="Food & refreshment" text="A place to gather over good food and drinks." icon={<Utensils size={19} />} />
            <ExperienceCard image={images.lounge} title="Lounge & leisure" text="Settle in for sports, conversation and entertainment." icon={<Wine size={19} />} />
            <ExperienceCard image={images.event} title="Gather & celebrate" text="Bring your people together for an occasion." icon={<Music2 size={19} />} />
          </div>
          <p className="mt-5 text-center text-[11px] text-stone-400">Images are illustrative placeholders pending approval of the hotel's actual photographs.</p>
        </section>

        <section id="events" className="relative bg-forest text-white">
          <div className="absolute inset-0 opacity-20"><img src={images.event} alt="" className="h-full w-full object-cover" /></div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1fr_.85fr] md:px-10 md:py-28">
            <div><Eyebrow>Bring everyone together</Eyebrow><h2 className="section-title mt-5 text-white">A setting for your <em className="text-gold">next occasion.</em></h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base">Planning a celebration, gathering or special event? Ask about Hamilton Event Centre and the spaces available for your occasion.</p><button onClick={() => openInquiry('event')} className="mt-8 inline-flex items-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-forest transition hover:bg-white">Enquire about events <ArrowRight size={16} /></button></div>
            <div className="relative"><img src={images.event} alt="Event venue concept image" className="h-[310px] w-full object-cover sm:h-[390px]" /><div className="absolute -bottom-5 -left-5 border border-gold/60 bg-forest px-5 py-4 sm:px-7"><div className="font-display text-xl">Hamilton Event Centre</div><div className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/60">Venue enquiries welcome</div></div></div>
          </div>
        </section>

        <section className="bg-[#e9e5da] py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center md:px-10">
            <div><Eyebrow>Start planning</Eyebrow><h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">Your next stay or celebration starts with a conversation.</h2></div>
            <button onClick={() => openInquiry('general')} className="inline-flex shrink-0 items-center gap-3 bg-forest px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-white transition hover:bg-moss">Talk to our team <ArrowRight size={16} /></button>
          </div>
        </section>

        <section id="contact" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-10">
            <div><Eyebrow>We'd love to hear from you</Eyebrow><h2 className="section-title mt-4">Let's plan your <em>visit.</em></h2><p className="mt-5 max-w-md text-sm leading-7 text-stone-600">Contact the team for room enquiries, venue information or questions about the hotel's facilities.</p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-cream text-moss"><MapPin size={19} /></span><div><div className="text-xs font-bold uppercase tracking-[.14em]">Find us</div><p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">5/7 Oremeji Street, off Alagbole–Ajuwon Road, behind Kayode Plaza, Ajuwon, Nigeria.</p></div></div>
                <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-cream text-moss"><Phone size={19} /></span><div><div className="text-xs font-bold uppercase tracking-[.14em]">Call the hotel</div><p className="mt-2 text-sm text-stone-600">Contact number to be confirmed by management.</p></div></div>
                <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-cream text-moss"><Mail size={19} /></span><div><div className="text-xs font-bold uppercase tracking-[.14em]">Email</div><p className="mt-2 text-sm text-stone-600">Email address to be confirmed by management.</p></div></div>
              </div>
              <button onClick={() => openInquiry('general')} className="link-arrow mt-8">Send an enquiry <ArrowRight size={16} /></button>
            </div>
            <div className="relative min-h-[360px] overflow-hidden bg-cream"><img src={images.detail} alt="Hotel exterior concept image" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-forest/25" /><div className="absolute bottom-5 left-5 right-5 bg-white p-5 sm:bottom-7 sm:left-7 sm:right-7 sm:p-7"><div className="flex items-start gap-3"><MapPinned className="mt-1 text-moss" size={21} /><div><div className="font-display text-xl">Royal Regis Hotel & Resorts</div><p className="mt-2 text-sm leading-6 text-stone-500">Ajuwon, off Alagbole–Ajuwon Road</p><a className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-moss" href="https://www.google.com/maps/search/?api=1&query=Royal+Regis+Hotel+and+Resorts+Ajuwon" target="_blank" rel="noreferrer">Open map <ArrowRight size={14} /></a></div></div></div></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111a17] px-5 py-9 text-white/60 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><a href="#top" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center border border-gold/70 font-display text-lg text-gold">R</span><span><span className="block font-display text-sm tracking-[.15em] text-white">ROYAL REGIS</span><span className="mt-1 block text-[8px] uppercase tracking-[.25em]">Hotel & Resorts</span></span></a><div className="text-xs">© {new Date().getFullYear()} Royal Regis Hotel & Resorts. All rights reserved.</div><div className="flex items-center gap-3"><a aria-label="Instagram" href="#contact" className="social-icon"><Instagram size={16} /></a><a aria-label="Facebook" href="#contact" className="social-icon"><Facebook size={16} /></a></div></div>
        <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-5 text-[10px] leading-5 text-white/35">Website concept by Ayotech Solutions · This is a demonstration design. Images, room information, contact details and facilities must be confirmed by hotel management before publication.</div>
      </footer>

      {inquiryOpen && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0d1512]/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onMouseDown={(e) => { if (e.target === e.currentTarget) closeInquiry() }}>
        <div className="relative my-auto w-full max-w-lg bg-white p-6 shadow-2xl sm:p-9">
          <button onClick={closeInquiry} aria-label="Close enquiry form" className="absolute right-4 top-4 p-2 text-stone-500 hover:text-forest"><X size={20} /></button>
          {!submitted ? <>
            <Eyebrow>Get in touch</Eyebrow><h2 id="inquiry-title" className="mt-3 font-display text-3xl">How can we help?</h2><p className="mt-3 text-sm leading-6 text-stone-500">Share a few details and the hotel team can follow up with you.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
              <label className="block text-xs font-semibold text-stone-600">I'm enquiring about<select value={inquiryKind} onChange={(e) => setInquiryKind(e.target.value as InquiryKind)} className="form-field mt-2"><option value="room">Room / accommodation</option><option value="event">Event venue</option><option value="general">General enquiry</option></select></label>
              <label className="block text-xs font-semibold text-stone-600">Your name<input required className="form-field mt-2" placeholder="Full name" /></label>
              <label className="block text-xs font-semibold text-stone-600">Phone or email<input required className="form-field mt-2" placeholder="How can the team reach you?" /></label>
              <label className="block text-xs font-semibold text-stone-600">Message<textarea rows={3} className="form-field mt-2 resize-none" placeholder="Tell us a little about your enquiry" /></label>
              <button type="submit" className="flex w-full items-center justify-center gap-2 bg-forest px-5 py-4 text-xs font-bold uppercase tracking-[.13em] text-white hover:bg-moss">Preview enquiry <Send size={15} /></button>
              <p className="text-[10px] leading-4 text-stone-400">Demo only: this form does not send or store information. A live version would connect to a hotel-approved email, WhatsApp or booking system.</p>
            </form>
          </> : <div className="py-7 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream text-moss"><Check size={25} /></div><h2 className="mt-5 font-display text-3xl">Enquiry preview ready</h2><p className="mt-3 text-sm leading-6 text-stone-500">This interaction is for demonstration only. No enquiry was sent to the hotel.</p><button onClick={closeInquiry} className="mt-7 bg-forest px-6 py-3 text-xs font-bold uppercase tracking-[.12em] text-white">Close preview</button></div>}
        </div>
      </div>}
      <div className="concept-ribbon">Concept preview · Not live</div>
    </div>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-moss"><span className="h-px w-8 bg-gold" />{children}</div>
}

function ExperienceCard({ image, title, text, icon }: { image: string; title: string; text: string; icon: ReactNode }) {
  return <article className="group"><div className="relative h-[280px] overflow-hidden bg-stone-200"><img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-forest/65 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center bg-gold text-forest">{icon}</span></div><div className="border-b border-stone-300 pb-5 pt-5"><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-500">{text}</p></div></article>
}

export default App
