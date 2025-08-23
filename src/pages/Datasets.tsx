import { useMemo, useState } from 'react'
import Card from '@/components/Card'
import data from '@/data/datasets.json'

export default function Datasets() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => data.filter(d => d.name.toLowerCase().includes(q.toLowerCase())), [q])
  return (
    <div className="grid gap-6">
      <Card title="Datasets" subtitle="Searchable catalog">
        <div className="flex items-center gap-3 mb-4">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search datasets…"
            className="w-full md:w-96 px-3 py-2 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600"
          />
          <span className="text-sm text-slate-500">{filtered.length} / {data.length}</span>
        </div>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(d => (
            <li key={d.name} className="card">
              <div className="mb-2">
                <h4 className="font-semibold">{d.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{d.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div><span className="text-slate-500 dark:text-slate-400">Rows</span><div>{d.rows.toLocaleString()}</div></div>
                <div><span className="text-slate-500 dark:text-slate-400">Size</span><div>{d.sizeGB} GB</div></div>
                <div><span className="text-slate-500 dark:text-slate-400">PII</span><div>{d.pii ? 'Yes' : 'No'}</div></div>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}