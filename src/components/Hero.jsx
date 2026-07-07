function Hero() {
  return (
    <section id="home" className="scroll-mt-28 px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[26rem] bg-slate-900">
            <img
              src="/assets/philippines-hero.png"
              alt="Maraming pulo ng Pilipinas sa ilalim ng magandang liwanag ng araw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-8 lg:p-10">
              <div className="max-w-xl text-white">
                <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-sm">
                  Heograpiya at Kultura
                </p>
                <h1 className="text-5xl font-black tracking-tight sm:text-6xl">Pilipinas</h1>
                <p className="mt-3 text-lg font-medium text-white/90">Perlas ng Silangan</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-gradient-to-br from-rose-50 to-amber-50 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-3 gap-3">
              {['7,600+ pulo', '3 pangunahing rehiyon', '110M+ mamamayan'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/85 p-4 text-center shadow-sm ring-1 ring-slate-200/70">
                  <div className="text-sm font-semibold text-slate-500">{item}</div>
                </div>
              ))}
            </div>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Ang Pilipinas ay isang bansang binubuo ng humigit-kumulang 7,600 pulo sa Timog-Silangang Asya. Nahahati ito sa Luzon, Visayas, at Mindanao, at tahanan ng mahigit 110 milyong mamamayan na may iba’t ibang kultura, wika, at tradisyon.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              {['Kabundukan', 'Baybayin', 'Mga Isla', 'Pamumuhay'].map((tag) => (
                <span key={tag} className="rounded-full bg-white px-4 py-2 ring-1 ring-slate-200">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
