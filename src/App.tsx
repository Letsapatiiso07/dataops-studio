import { useEffect, useState } from 'react'
import { Layout } from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import Pipelines from '@/pages/Pipelines'
import Datasets from '@/pages/Datasets'
import Models from '@/pages/Models'

type Route = 'dashboard' | 'pipelines' | 'datasets' | 'models'

export default function App() {
  const [route, setRoute] = useState<Route>('dashboard')
  const [dark, setDark] = useState(false)

  // The body carries the page colours, so the dark class must sit on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <Layout route={route} onNavigate={setRoute} onToggleTheme={() => setDark(!dark)}>
      {route === 'dashboard' && <Dashboard />}
      {route === 'pipelines' && <Pipelines />}
      {route === 'datasets' && <Datasets />}
      {route === 'models' && <Models />}
    </Layout>
  )
}