import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Accounts from './components/Accounts'
import Transactions from './components/Transactions'
import Investments from './components/Investments'
import KPIDashboard from './components/KPIDashboard'
import NetWorth from './components/NetWorth'
import FreedomCalculator from './components/FreedomCalculator'
import XandeumStorage from './components/XandeumStorage'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setActiveTab('dashboard')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'accounts':
        return <Accounts />
      case 'transactions':
        return <Transactions />
      case 'investments':
        return <Investments />
      case 'kpi':
        return <KPIDashboard />
      case 'networth':
        return <NetWorth />
      case 'calculator':
        return <FreedomCalculator />
      case 'storage':
        return <XandeumStorage />
      default:
        return <Dashboard />
    }
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onSignOut={handleSignOut}
      />
      <main className="flex-1 overflow-auto p-6">
        {renderContent()}
      </main>
    </div>
  )
}

export default App

