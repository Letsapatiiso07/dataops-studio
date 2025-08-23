import clsx from 'clsx'

type Route = 'dashboard' | 'pipelines' | 'datasets' | 'models'
const items: { key: Route, label: string }[] = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'pipelines', label: 'Pipelines' },
  { key: 'datasets', label: 'Datasets' },
  { key: 'models', label: 'Models' },
]

export function Sidebar({ route, onNavigate, onToggleTheme }: { route: Route, onNavigate: (r: Route) => void, onToggleTheme: () => void }) {
  return (
    <aside className="bg-white dark:bg-slate-800 border-r dark:border-slate-700 p-4 flex flex-col gap-4">
      <div>
        <p className="text-xs uppercase text-slate-400 mb-2">Navigation</p>
        <nav className="space-y-1">
          {items.map(i => (
            <button
              key={i.key}
              onClick={() => onNavigate(i.key)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-xl transition',
                route === i.key ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-700'
              )}
            >
              {i.label}
            </button>
          ))}
        </nav>
      </div>
      <button onClick={onToggleTheme} className="mt-auto px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-700">Toggle Theme</button>
      <div className="text-xs text-slate-400">© 2025</div>
    </aside>
  )
}