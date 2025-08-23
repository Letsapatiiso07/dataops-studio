import { Sidebar } from './Sidebar'
import { Header } from './Header'
import type { ReactNode } from 'react'

type Route = 'dashboard' | 'pipelines' | 'datasets' | 'models'

export function Layout({ children, route, onNavigate, onToggleTheme }: { children: ReactNode, route: Route, onNavigate: (r: Route) => void, onToggleTheme: () => void }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <Sidebar route={route} onNavigate={onNavigate} onToggleTheme={onToggleTheme} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}