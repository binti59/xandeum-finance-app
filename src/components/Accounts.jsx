import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus, TrendingUp, TrendingDown, CreditCard, PiggyBank, TrendingUpIcon, Bitcoin, X, Eye, Edit, Trash2 } from 'lucide-react'

const accounts = [
  {
    name: 'Chase Checking',
    type: 'checking',
    provider: 'JPMorgan Chase',
    accountNumber: '****1234',
    lastSync: '2 minutes ago',
    balance: 12500,
    change: 2.3,
    icon: CreditCard,
    color: 'bg-blue-500'
  },
  {
    name: 'High Yield Savings',
    type: 'savings',
    provider: 'Marcus by Goldman Sachs',
    accountNumber: '****5678',
    lastSync: '5 minutes ago',
    balance: 45000,
    change: 1.2,
    icon: PiggyBank,
    color: 'bg-green-500'
  },
  {
    name: 'Investment Portfolio',
    type: 'investment',
    provider: 'Fidelity',
    accountNumber: '****9012',
    lastSync: '1 hour ago',
    balance: 185000,
    change: 8.7,
    icon: TrendingUpIcon,
    color: 'bg-purple-500'
  },
  {
    name: 'Crypto Holdings',
    type: 'crypto',
    provider: 'Coinbase',
    accountNumber: '****3456',
    lastSync: '10 minutes ago',
    balance: 42500,
    change: -3.2,
    icon: Bitcoin,
    color: 'bg-orange-500'
  },
  {
    name: 'Credit Card',
    type: 'credit',
    provider: 'American Express',
    accountNumber: '****7890',
    lastSync: '30 minutes ago',
    balance: -2800,
    change: 0,
    icon: CreditCard,
    color: 'bg-red-500'
  }
]

export default function Accounts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    accountName: '',
    institution: '',
    accountType: '',
    currentBalance: ''
  })

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)
  const totalAssets = accounts.filter(account => account.balance > 0).reduce((sum, account) => sum + account.balance, 0)
  const totalLiabilities = Math.abs(accounts.filter(account => account.balance < 0).reduce((sum, account) => sum + account.balance, 0))

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddAccount = () => {
    // In a real app, this would save to backend
    console.log('Adding account:', formData)
    setIsModalOpen(false)
    setFormData({
      accountName: '',
      institution: '',
      accountType: '',
      currentBalance: ''
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setFormData({
      accountName: '',
      institution: '',
      accountType: '',
      currentBalance: ''
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Accounts</h1>
          <p className="text-slate-400">Manage all your financial accounts in one place</p>
        </div>
        <Button className="xandeum-gradient" onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      {/* Add Account Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold">Add New Account</h2>
                <p className="text-sm text-muted-foreground">Connect a new financial account to track your finances</p>
              </div>
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="accountName">Account Name</Label>
                <Input
                  id="accountName"
                  placeholder="e.g., Chase Checking"
                  value={formData.accountName}
                  onChange={(e) => handleInputChange('accountName', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input
                  id="institution"
                  placeholder="e.g., JPMorgan Chase"
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accountType">Account Type</Label>
                <Select value={formData.accountType} onValueChange={(value) => handleInputChange('accountType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Checking</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="credit">Credit Card</SelectItem>
                    <SelectItem value="crypto">Crypto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="currentBalance">Current Balance</Label>
                <Input
                  id="currentBalance"
                  type="number"
                  placeholder="0.00"
                  value={formData.currentBalance}
                  onChange={(e) => handleInputChange('currentBalance', e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex space-x-2 mt-6">
              <Button onClick={handleAddAccount} className="flex-1">
                Add Account
              </Button>
              <Button variant="outline" onClick={handleCancel} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Balance</CardTitle>
            <CreditCard className="h-5 w-5 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              <span className="text-green-400">$</span>{totalBalance.toLocaleString()}
            </div>
            <p className="text-xs text-slate-400">Across {accounts.length} accounts</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Assets</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              <span className="text-green-400">$</span>{totalAssets.toLocaleString()}
            </div>
            <p className="text-xs text-slate-400">Positive balances</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Liabilities</CardTitle>
            <TrendingDown className="h-5 w-5 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              <span className="text-red-400">$</span>{totalLiabilities.toLocaleString()}
            </div>
            <p className="text-xs text-slate-400">Outstanding debt</p>
          </CardContent>
        </Card>
      </div>

      {/* Accounts List */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Your Accounts</CardTitle>
          <CardDescription className="text-slate-400">All your connected financial accounts with real-time balances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accounts.map((account, index) => (
                 <div className="flex items-center justify-between p-6 border rounded-xl hover:bg-accent/30 transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-gradient-to-r from-card/50 to-card/80 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${account.color} shadow-lg`}>
                    <account.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold text-lg">{account.name}</h4>
                      <Badge variant="outline" className="text-xs font-medium">{account.type}</Badge>
                      <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">connected</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{account.provider}</p>
                    <p className="text-xs text-muted-foreground/80">
                      Account: {account.accountNumber} • Last sync: {account.lastSync}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {account.balance >= 0 ? (
                        <><span className="text-green-400">$</span>{Math.abs(account.balance).toLocaleString()}</>
                      ) : (
                        <>-<span className="text-red-400">$</span>{Math.abs(account.balance).toLocaleString()}</>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Current Balance</p>
                    {account.change !== 0 && (
                      <div className={`flex items-center justify-end text-xs mt-1 ${account.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {account.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {account.change >= 0 ? '+' : ''}{account.change}%
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-500/20 hover:text-blue-400">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-green-500/20 hover:text-green-400">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-red-500/20 hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Xandeum Data Storage */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Xandeum Data Storage</CardTitle>
          <CardDescription className="text-slate-400">Your account data is securely stored and synchronized via Xandeum's decentralized storage layer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{accounts.length}</div>
              <p className="text-sm text-slate-400">Accounts Stored</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">256-bit</div>
              <p className="text-sm text-slate-400">Encryption</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">5x</div>
              <p className="text-sm text-slate-400">Redundancy</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400">Real-time</div>
              <p className="text-sm text-slate-400">Sync</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

