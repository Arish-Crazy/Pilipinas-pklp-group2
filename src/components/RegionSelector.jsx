const regions = [
  { id: 'luzon', label: 'Luzon', subtitle: 'Kabundukan at mataas na kultura', accent: 'from-emerald-500 to-cyan-500' },
  { id: 'visayas', label: 'Visayas', subtitle: 'Mga pulo, dagat, at masiglang tradisyon', accent: 'from-sky-500 to-indigo-500' },
  { id: 'mindanao', label: 'Mindanao', subtitle: 'Lawa, kapuluan, at makukulay na pamayanan', accent: 'from-amber-500 to-rose-500' },
]

function RegionSelector({ activeRegion, onChange }) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-500">Interactive Map</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Pumili ng rehiyon</h2>
          </div>
          <p className="hidden max-w-xl text-sm leading-6 text-slate-600 md:block">
            I-click ang Luzon, Visayas, o Mindanao upang tingnan ang mga lugar, larawan, at ugnayan ng heograpiya at kultura.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {regions.map((region) => {
            const active = activeRegion === region.id
            return (
              <button
                key={region.id}
                onClick={() => onChange(region.id)}
                className={`group rounded-[1.75rem] border bg-white p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 ${
                  active ? 'border-rose-300 ring-2 ring-rose-200' : 'border-slate-200'
                }`}
              >
                <div className={`mb-4 h-40 rounded-[1.5rem] bg-gradient-to-br ${region.accent} p-5 text-white shadow-inner`}>
                  <div className="flex h-full flex-col justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/90">Rehiyon</span>
                    <div>
                      <div className="text-3xl font-black">{region.label}</div>
                      <p className="mt-1 text-sm text-white/90">{region.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base font-bold text-slate-900">{region.label}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${active ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {active ? 'Aktibo' : 'Piliin'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RegionSelector
