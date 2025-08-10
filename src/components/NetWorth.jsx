import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Shield, Database, Zap, RefreshCw } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart as RechartsPieChart, Cell } from 'recharts'

const netWorthData = [
  { month: 'Jan 2024', assets: 265000, liabilities: 15000, netWorth: 250000 },
  { month: 'Feb 2024', assets: 270000, liabilities: 14500, netWorth: 255500 },
  { month: 'Mar 2024', assets: 275000, liabilities: 14000, netWorth: 261000 },
  { month: 'Apr 2024', assets: 280000, liabilities: 13500, netWorth: 266500 },
  { month: 'May 2024', assets: 282000, liabilities: 13000, netWorth: 269000 },
  { month: 'Jun 2024', assets: 285000, liabilities: 12500, netWorth: 272500 }
]

const monthlyChanges = [
  { month: 'Jan', change: 5000 },
  { month: 'Feb', change: 5500 },
  { month: 'Mar', change: 5500 },
  { month: 'Apr', change: 5500 },
  { month: 'May', change: 2500 },
  { month: 'Jun', change: 7500 }
]

const assetsBreakdown = [
  { name: 'Cash & Savings', value: 57500, percentage: 20.2, color: '#3b82f6' },
  { name: 'Investment Portfolio', value: 185000, percentage: 64.9, color: '#10b981' },
  { name: 'Retirement Accounts', value: 35000, percentage: 12.3, color: '#8b5cf6' },
  { name: 'Real Estate', value: 7500, percentage: 2.6, color: '#f59e0b' }
]

const liabilitiesBreakdown = [
  { name: 'Credit Cards', value: 2800, percentage: 22.4, color: '#ef4444' },
  { name: 'Student Loans', value: 8500, percentage: 68.0, color: '#f97316' },
  { name: 'Auto Loan', value: 1200, percentage: 9.6, color: '#84cc16' }
]

export default function NetWorth() {
  const currentNetWorth = 272500
  const totalAssets = 285000
  const totalLiabilities = 12500
  const monthlyChange = 7500
  const monthlyChangePercent = 2.8

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Net Worth Tracker</h1>
        <p className="text-muted-foreground">A detailed breakdown of your financial position</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Net Worth</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$<span className="text-white">{currentNetWorth.toLocaleString()}</span></div>
            <p className="text-xs text-green-500">+{monthlyChangePercent}% this month</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"><span className="text-green-500">$</span><span className="text-green-500">{totalAssets.toLocaleString()}</span></div>
            <p className="text-xs text-muted-foreground">All positive holdings</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"><span className="text-red-500">$</span><span className="text-red-500">{totalLiabilities.toLocaleString()}</span></div>
            <p className="text-xs text-muted-foreground">Outstanding debts</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Change</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"><span className="text-green-500">+$</span><span className="text-green-500">{monthlyChange.toLocaleString()}</span></div>
            <p className="text-xs text-muted-foreground">Net worth change</p>
          </CardContent>
        </Card>
      </div>

      {/* Net Worth Trend Chart */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Net Worth Trend</CardTitle>
          <CardDescription>Historical net worth progression over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={netWorthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'assets') return [`$${value.toLocaleString()}`, 'Assets']
                    if (name === 'liabilities') return [`$${value.toLocaleString()}`, 'Liabilities']
                    return [`$${value.toLocaleString()}`, 'Net Worth']
                  }}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="assets" 
                  stackId="1"
                  stroke="#10b981" 
                  fill="#10b981"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="liabilities" 
                  stackId="2"
                  stroke="#ef4444" 
                  fill="#ef4444"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Assets</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">Liabilities</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Net Worth Changes */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Monthly Net Worth Changes</CardTitle>
          <CardDescription>Month-over-month net worth changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyChanges}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Change']}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                />
                <Bar dataKey="change" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Assets and Liabilities Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assets Breakdown */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Assets Breakdown</CardTitle>
            <CardDescription>Complete breakdown of assets by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assetsBreakdown.map((asset, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{asset.name}</span>
                    <span className="font-bold">${asset.value.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={asset.percentage} className="flex-1" />
                    <span className="text-sm text-muted-foreground w-12">{asset.percentage}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{asset.percentage}% of total assets</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Liabilities Breakdown */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Liabilities Breakdown</CardTitle>
            <CardDescription>Complete breakdown of liabilities by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {liabilitiesBreakdown.map((liability, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{liability.name}</span>
                    <span className="font-bold">${liability.value.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={liability.percentage} className="flex-1" />
                    <span className="text-sm text-muted-foreground w-12">{liability.percentage}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{liability.percentage}% of total liabilities</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Xandeum Net Worth Analytics */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum Net Worth Analytics</CardTitle>
          <CardDescription>Comprehensive net worth tracking with historical data stored on Xandeum's decentralized network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">6 Months</div>
              <p className="text-sm text-muted-foreground">Historical Data</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">Auto-Update</div>
              <p className="text-sm text-muted-foreground">Real-time Sync</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Immutable</div>
              <p className="text-sm text-muted-foreground">Historical Record</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Secure</div>
              <p className="text-sm text-muted-foreground">Decentralized Storage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

