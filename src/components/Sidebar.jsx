import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  CreditCard, 
  ArrowUpDown, 
  TrendingUp, 
  BarChart3, 
  PiggyBank, 
  Calculator, 
  Database,
  LogOut,
  User
} from 'lucide-react'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: '1' },
  { id: 'accounts', label: 'Accounts', icon: CreditCard, badge: '2' },
  { id: 'transactions', label: 'Transactions', icon: ArrowUpDown, badge: '3' },
  { id: 'investments', label: 'Investments', icon: TrendingUp, badge: '4' },
  { id: 'kpi', label: 'KPI Dashboard', icon: BarChart3, badge: '5' },
  { id: 'networth', label: 'Net Worth', icon: PiggyBank, badge: '6' },
  { id: 'calculator', label: 'Freedom Calculator', icon: Calculator, badge: '7' },
  { id: 'storage', label: 'Xandeum Storage', icon: Database, badge: '8' },
]

export default function Sidebar({ activeTab, onTabChange, onSignOut }) {
  return (
    <div className="w-64 h-screen xandeum-sidebar border-r border-border flex flex-col">
      {/* User Info */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold xandeum-text-gradient">Xandeum Finance</h2>
            <p className="text-sm text-muted-foreground">Personal Finance Manager</p>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-medium">John Doe</p>
          <p className="text-muted-foreground">binti59@gmail.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start transition-all duration-200 hover:translate-x-1 ${
                activeTab === item.id ? 'bg-primary/10 border-l-2 border-primary' : ''
              }`}
              onClick={() => onTabChange(item.id)}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.label}
              <Badge variant="outline" className="ml-auto text-xs">
                {item.badge}
              </Badge>
            </Button>
          ))}
        </div>
      </nav>

      {/* Xandeum Storage Status */}
      <div className="p-4 border-t border-border">
        <div className="bg-card/50 rounded-lg p-3 mb-4">
          <h4 className="font-semibold text-sm mb-2 flex items-center">
            <Database className="h-4 w-4 mr-2 text-primary" />
            Xandeum Storage
          </h4>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Data Stored:</span>
              <span>2.3 GB</span>
            </div>
            <div className="flex justify-between">
              <span>Redundancy:</span>
              <span>5x</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <Badge variant="outline" className="text-xs">Active</Badge>
            </div>
          </div>
        </div>

        <Button 
          variant="destructive" 
          className="w-full transition-all duration-200 hover:scale-105"
          onClick={onSignOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

