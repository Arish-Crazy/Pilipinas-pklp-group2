import { Menu } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'luzon', label: 'Luzon' },
  { id: 'visayas', label: 'Visayas' },
  { id: 'mindanao', label: 'Mindanao' },
]

function Navbar({ activeRegion, onNavigate }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto">
          <button className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm md:hidden" aria-label="Menu">
            <Menu size={18} />
          </button>
          {links.map((link) => {
            const active = activeRegion === link.id
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-200'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>
        <div className="shrink-0 text-sm font-extrabold tracking-[0.24em] text-slate-900 sm:text-base">
          PKLP GROUP 2
        </div>
      </div>
    </header>
  )
}

export default Navbar
