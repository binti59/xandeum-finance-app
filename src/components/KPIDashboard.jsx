import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, Target, Calendar, BarChart3, Shield, Database, Zap, Brain } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const savingsRateData = [
  { month: 'Jan', rate: 28 },
  { month: 'Feb', rate: 31 },
  { month: 'Mar', rate: 29 },
  { month: 'Apr', rate: 35 },
  { month: 'May', rate: 36 },
  { month: 'Jun', rate: 33 }
]

const projectionData = [
  { year: '2024', value: 285000 },
  { year: '2026', value: 450000 },
  { year: '2028', value: 650000 },
  { year: '2030', value: 900000 },
  { year: '2032', value: 1250000 },
  { year: '2035', value: 1800000 }
]

const kpis = [
  {
    title: 'Emergency Fund',
    status: 'EXCELLENT',
    current: '6 months',
    target: '6 months',
    description: 'Months of expenses covered',
    color: 'bg-green-500'
  },
  {
    title: 'Debt-to-Income',
    status: 'GOOD',
    current: '15%',
    target: '20%',
    description: 'Percentage of income going to debt',
    color: 'bg-blue-500'
  },
  {
    title: 'Investment Rate',
    status: 'EXCELLENT',
    current: '22%',
    target: '20%',
    description: 'Percentage of income invested',
    color: 'bg-green-500'
  },
  {
    title: 'Housing Ratio',
    status: 'GOOD',
    current: '28%',
    target: '30%',
    description: 'Housing costs as % of income',
    color: 'bg-blue-500'
  }
]

export default function KPIDashboard() {
  const financialIndependenceIndex = 68.5
  const freedomNumber = 1250000
  const yearsToFreedom = 8.3
  const healthScore = 75
  const currentPortfolio = 285000
  const remaining = freedomNumber - currentPortfolio
  const monthlySavings = 2800
  const annualSavings = 33600
  const savingsRate = 32.9

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">KPI Dashboard</h1>
        <p className="text-muted-foreground">A comprehensive view of your key financial metrics</p>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financial Independence Index</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{financialIndependenceIndex}%</div>
            <p className="text-xs text-muted-foreground">Progress toward financial independence</p>
            <Progress value={financialIndependenceIndex} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financial Freedom Number</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${freedomNumber.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Target portfolio value</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Years to Financial Freedom</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{yearsToFreedom}</div>
            <p className="text-xs text-muted-foreground">At current savings rate</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financial Health Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">{healthScore}/100</div>
            <p className="text-xs text-muted-foreground">Overall financial assessment</p>
            <Progress value={healthScore} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Savings Rate Trend */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Savings Rate Trend</CardTitle>
            <CardDescription>Monthly savings rate over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={savingsRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Savings Rate']}
                    labelStyle={{ color: '#374151' }}
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Financial Freedom Projection */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Financial Freedom Projection</CardTitle>
            <CardDescription>Portfolio growth toward freedom number</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                    labelStyle={{ color: '#374151' }}
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    fill="#10b981"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Financial KPIs */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Key Financial KPIs</CardTitle>
          <CardDescription>Progress tracking against financial health targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{kpi.title}</h4>
                  <Badge className={kpi.color}>{kpi.status}</Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Current</span>
                    <span className="font-medium">{kpi.current}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Target</span>
                    <span className="font-medium">{kpi.target}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{kpi.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Current Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Current Portfolio</span>
              <span className="font-bold">${currentPortfolio.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Freedom Number</span>
              <span className="font-bold">${freedomNumber.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining</span>
              <span className="font-bold text-primary">${remaining.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Monthly Contribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Current Savings</span>
              <span className="font-bold">${monthlySavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Annual Savings</span>
              <span className="font-bold">${annualSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Savings Rate</span>
              <span className="font-bold text-green-500">{savingsRate}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Years Remaining</span>
              <span className="font-bold">{yearsToFreedom} years</span>
            </div>
            <div className="flex justify-between">
              <span>Target Date</span>
              <span className="font-bold">2032</span>
            </div>
            <div className="flex justify-between">
              <span>Progress</span>
              <span className="font-bold text-primary">{financialIndependenceIndex}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Xandeum KPI Analytics */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum KPI Analytics</CardTitle>
          <CardDescription>Advanced financial analytics powered by Xandeum's decentralized storage and computation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-500">Real-time</div>
              <p className="text-sm text-muted-foreground">KPI Calculations</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Historical</div>
              <p className="text-sm text-muted-foreground">Trend Analysis</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-500">Predictive</div>
              <p className="text-sm text-muted-foreground">Modeling</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Secure</div>
              <p className="text-sm text-muted-foreground">Data Storage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

