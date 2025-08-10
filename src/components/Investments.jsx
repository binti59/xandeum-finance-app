import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, DollarSign, Target, PieChart, LineChart } from 'lucide-react'
import { PieChart as RechartsPieChart, Cell, ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Pie } from 'recharts'

const holdings = [
  { symbol: 'AAPL', company: 'Apple Inc.', shares: 150, price: 175.5, value: 26325, return: 12.5 },
  { symbol: 'MSFT', company: 'Microsoft Corp.', shares: 100, price: 285.2, value: 28520, return: 8.7 },
  { symbol: 'GOOGL', company: 'Alphabet Inc.', shares: 50, price: 125.8, value: 6290, return: -2.3 },
  { symbol: 'TSLA', company: 'Tesla Inc.', shares: 75, price: 245.6, value: 18420, return: 15.2 },
  { symbol: 'AMZN', company: 'Amazon.com Inc.', shares: 25, price: 135.4, value: 3385, return: 5.8 }
]

const assetAllocation = [
  { name: 'Stocks', value: 67.6, color: '#3b82f6' },
  { name: 'Bonds', value: 18.9, color: '#8b5cf6' },
  { name: 'Real Estate', value: 8.1, color: '#06b6d4' },
  { name: 'Crypto', value: 5.4, color: '#f59e0b' }
]

const performanceData = [
  { month: 'Jan', value: 165000 },
  { month: 'Feb', value: 168000 },
  { month: 'Mar', value: 172000 },
  { month: 'Apr', value: 175000 },
  { month: 'May', value: 180000 },
  { month: 'Jun', value: 185000 }
]

export default function Investments() {
  const portfolioValue = 185000
  const totalReturn = 8.7
  const bestPerformer = holdings.find(h => h.return === Math.max(...holdings.map(h => h.return)))
  const diversification = assetAllocation.length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Investments</h1>
        <p className="text-muted-foreground">Track your investment portfolio performance and allocation</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"><span className="text-green-400">$</span>{portfolioValue.toLocaleString()}</div>
            <p className="text-xs text-green-500">+5.2% this month</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Return</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+{totalReturn}%</div>
            <p className="text-xs text-muted-foreground">Year to date</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bestPerformer?.symbol}</div>
            <p className="text-xs text-green-500">+{bestPerformer?.return}% return</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diversification</CardTitle>
            <PieChart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{diversification}</div>
            <p className="text-xs text-muted-foreground">Asset classes</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Allocation */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Asset Allocation</CardTitle>
            <CardDescription>Distribution across asset classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={assetAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {assetAllocation.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Performance */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>6-month portfolio value trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                    labelStyle={{ color: '#374151' }}
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Holdings */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Current Holdings</CardTitle>
          <CardDescription>Detailed breakdown of your investment positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Symbol</th>
                  <th className="text-left py-3 px-4 font-medium">Company</th>
                  <th className="text-right py-3 px-4 font-medium">Shares</th>
                  <th className="text-right py-3 px-4 font-medium">Price</th>
                  <th className="text-right py-3 px-4 font-medium">Value</th>
                  <th className="text-right py-3 px-4 font-medium">Return</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.symbol} className="border-b border-border hover:bg-accent/50">
                    <td className="py-3 px-4">
                      <div className="font-semibold">{holding.symbol}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-muted-foreground">{holding.company}</div>
                    </td>
                    <td className="py-3 px-4 text-right">{holding.shares}</td>
                    <td className="py-3 px-4 text-right"><span className="text-green-400">$</span>{holding.price}</td>
                    <td className="py-3 px-4 text-right font-medium"><span className="text-green-400">$</span>{holding.value.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">
                      <Badge variant={holding.return >= 0 ? "default" : "destructive"} className={holding.return >= 0 ? "bg-green-500" : "bg-red-500"}>
                        {holding.return >= 0 ? '+' : ''}{holding.return}%
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Xandeum Investment Data */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum Investment Data</CardTitle>
          <CardDescription>Your investment data and portfolio history stored securely on Xandeum's decentralized network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{holdings.length}</div>
              <p className="text-sm text-muted-foreground">Holdings Tracked</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">Real-time</div>
              <p className="text-sm text-muted-foreground">Price Updates</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Historical</div>
              <p className="text-sm text-muted-foreground">Performance Data</p>
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

