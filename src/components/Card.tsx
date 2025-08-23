import type { ReactNode } from 'react'

export default function Card({ title, subtitle, children }: { title: string, subtitle?: string, children: ReactNode }) {
  return (
    <section className="card">
      <div className="mb-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}