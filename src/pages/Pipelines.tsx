import Card from '@/components/Card'
import runs from '@/data/pipelines.json'

export default function Pipelines() {
  return (
    <div className="grid gap-6">
      <Card title="Pipelines" subtitle="Recent pipeline execution history">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200">
              <tr>
                <th className="text-left p-3 font-medium">Run ID</th>
                <th className="text-left p-3 font-medium">Pipeline</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-left p-3 font-medium">Latency (min)</th>
                <th className="text-left p-3 font-medium">Records</th>
                <th className="text-left p-3 font-medium">Cost (USD)</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((r) => (
                <tr key={r.runId} className="border-b last:border-0 border-slate-200 dark:border-slate-700">
                  <td className="p-3">{r.runId}</td>
                  <td className="p-3">{r.pipeline}</td>
                  <td className="p-3">
                    <span className={
                      r.status === 'success' ? 'badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' :
                      r.status === 'running' ? 'badge bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300' :
                      'badge bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'
                    }>{r.status}</span>
                  </td>
                  <td className="p-3">{r.latencyMin}</td>
                  <td className="p-3">{r.records.toLocaleString()}</td>
                  <td className="p-3">${r.cost.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}