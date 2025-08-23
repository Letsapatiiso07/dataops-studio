import Card from '@/components/Card'
import models from '@/data/models.json'

export default function Models() {
  return (
    <div className="grid gap-6">
      <Card title="Models" subtitle="Registered models & serving SLOs">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {models.map(m => (
            <div key={m.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{m.name}</h4>
                <span className="badge bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">{m.version}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{m.description}</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div><span className="text-slate-500 dark:text-slate-400">Latency</span><div>{m.latencyMs} ms</div></div>
                <div><span className="text-slate-500 dark:text-slate-400">Requests</span><div>{m.requests}</div></div>
                <div><span className="text-slate-500 dark:text-slate-400">Success</span><div>{m.successPct}%</div></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}