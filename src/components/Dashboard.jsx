import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, DollarSign, PiggyBank, Target, Activity } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const netWorthData = [
  { month: 'Jan', value: 250000 },
  { month: 'Feb', value: 260000 },
  { month: 'Mar', value: 270000 },
  { month: 'Apr', value: 275000 },
  { month: 'May', value: 280000 },
  { month: 'Jun', value: 285000 },
]

const cashFlowData = [
  { month: 'Jan', income: 8500, expenses: 6200 },
  { month: 'Feb', income: 8500, expenses: 5800 },
  { month: 'Mar', income: 8500, expenses: 6100 },
  { month: 'Apr', income: 8500, expenses: 5900 },
  { month: 'May', income: 8500, expenses: 6000 },
  { month: 'Jun', income: 8500, expenses: 5700 },
]

const expenseData = [
  { name: 'Housing', value: 2400, color: '#667eea' },
  { name: 'Food', value: 800, color: '#764ba2' },
  { name: 'Transportation', value: 600, color: '#f093fb' },
  { name: 'Entertainment', value: 400, color: '#f5576c' },
  { name: 'Other', value: 500, color: '#4facfe' },
]

const accounts = [
  { name: 'Chase Checking', type: 'checking', balance: 12500, change: 2.3 },
  { name: 'Savings Account', type: 'savings', balance: 45000, change: 1.2 },
  { name: 'Investment Portfolio', type: 'investment', balance: 185000, change: 8.7 },
  { name: 'Crypto Holdings', type: 'crypto', balance: 42500, change: -3.2 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Financial Dashboard</h1>
        <p className="text-slate-400">Your complete financial overview powered by Xandeum storage</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Net Worth Card */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Net Worth</CardTitle>
            <DollarSign className="h-5 w-5 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              <span className="text-green-400">$</span>285,000
            </div>
            <div className="flex items-center text-xs text-green-400 mt-2">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.3% from last month
            </div>
          </CardContent>
        </Card>

        {/* Monthly Income Card */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Monthly Income</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              <span className="text-green-400">$</span>8,500
            </div>
            <p className="text-xs text-slate-400 mt-2">Consistent monthly income</p>
          </CardContent>
        </Card>

        {/* Monthly Expenses Card */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Monthly Expenses</CardTitle>
            <TrendingDown className="h-5 w-5 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              <span className="text-green-400">$</span>5,700
            </div>
            <div className="flex items-center text-xs text-green-400 mt-2">
              <TrendingDown className="h-3 w-3 mr-1" />
              -6.5% from last month
            </div>
          </CardContent>
        </Card>

        {/* Savings Rate Card */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Savings Rate</CardTitle>
            <PiggyBank className="h-5 w-5 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              32.9<span className="text-purple-400">%</span>
            </div>
            <div className="flex items-center text-xs text-green-400 mt-2">
              <Target className="h-3 w-3 mr-1" />
              Above target of 30%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Net Worth Trend</CardTitle>
            <CardDescription className="text-slate-400">Your net worth growth over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={netWorthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Net Worth']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Cash Flow</CardTitle>
            <CardDescription className="text-slate-400">Monthly income vs expenses comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, '']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Expense Breakdown */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Expense Breakdown</CardTitle>
          <CardDescription className="text-slate-400">Current month spending by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="lg:ml-8 mt-4 lg:mt-0">
              <div className="space-y-2">
                {expenseData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-slate-300">{item.name}</span>
                    <span className="text-sm text-slate-400">${item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Summary */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Account Summary</CardTitle>
          <CardDescription className="text-slate-400">Overview of all your financial accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accounts.map((account, index) => (
              <div key={index} className="p-4 bg-slate-700/30 border border-slate-600/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{account.name}</h4>
                  <Badge variant="secondary" className="bg-slate-600/50 text-slate-300 text-xs">
                    {account.type}
                  </Badge>
                </div>
                <div className="text-xl font-bold mb-1 text-white">
                  ${account.balance.toLocaleString()}
                </div>
                <div className={`flex items-center text-xs ${account.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {account.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {account.change >= 0 ? '+' : ''}{account.change}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Xandeum Storage Status */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Xandeum Storage Status</CardTitle>
          <CardDescription className="text-slate-400">Your financial data is securely stored on Xandeum's decentralized network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400">99.9%</div>
              <p className="text-sm text-slate-400">Uptime</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">2.3 GB</div>
              <p className="text-sm text-slate-400">Data Stored</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">5x</div>
              <p className="text-sm text-slate-400">Redundancy</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400">Active</div>
              <p className="text-sm text-slate-400">Status</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

