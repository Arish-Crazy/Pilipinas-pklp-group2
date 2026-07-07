function LocationCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-60 w-full overflow-hidden md:h-auto md:min-h-[20rem] md:w-[38%] md:max-w-[360px]">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
            {item.region}
          </div>
        </div>

        <div className="flex-1 p-5 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.summary}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3 xl:gap-4">
            {item.points.map((point) => (
              <div key={point.label} className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-rose-500">{point.label}</div>
                <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default LocationCard
