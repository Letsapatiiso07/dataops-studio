import Card from '@/components/Card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts'
import pipelines from '@/data/pipelines.json'
import datasets from '@/data/datasets.json'
import models from '@/data/models.json'

export default function Dashboard() {
  return (
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
      <Card title="Pipeline Latency (mins)" subtitle="Last 12 runs">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pipelines.slice(0,12)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="runId" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="latencyMin" stroke="#0ea5e9" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Dataset Sizes (GB)" subtitle="Top 6 datasets">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datasets.slice(0,6)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sizeGB" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Model Success (%)" subtitle="Serving window">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={models.map(m => ({ name: m.name, success: m.successPct }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="success" fill="#22c55e" stroke="#22c55e" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}