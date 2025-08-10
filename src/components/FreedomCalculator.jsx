import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Target, Calendar, TrendingUp, DollarSign, Calculator, Brain, Database, Zap, BarChart3 } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function FreedomCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(5700)
  const [currentPortfolio, setCurrentPortfolio] = useState(285000)
  const [monthlySavings, setMonthlySavings] = useState(2800)
  const [expectedReturn, setExpectedReturn] = useState(7)
  const [inflationRate, setInflationRate] = useState(3)
  const [safeWithdrawalRate, setSafeWithdrawalRate] = useState(4)

  // Calculations
  const annualExpenses = monthlyExpenses * 12
  const annualSavings = monthlySavings * 12
  const savingsRate = Math.round((annualSavings / (annualExpenses + annualSavings)) * 100)
  const freedomNumber = Math.round(annualExpenses / (safeWithdrawalRate / 100))
  const currentProgress = Math.round((currentPortfolio / freedomNumber) * 100)
  
  // Simplified years to freedom calculation
  const yearsToFreedom = Math.round(
    Math.log(freedomNumber / currentPortfolio) / Math.log(1 + expectedReturn / 100) * 10
  ) / 10

  // Generate projection data
  const generateProjectionData = () => {
    const data = []
    let portfolio = currentPortfolio
    const currentYear = new Date().getFullYear()
    
    for (let year = 0; year <= 15; year++) {
      data.push({
        year: currentYear + year,
        value: Math.round(portfolio)
      })
      portfolio = portfolio * (1 + expectedReturn / 100) + annualSavings
    }
    return data
  }

  const projectionData = generateProjectionData()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Freedom Calculator</h1>
        <p className="text-muted-foreground">Calculate your path to financial independence</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financial Freedom Number</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${freedomNumber.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Portfolio needed for independence</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Years to Freedom</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{yearsToFreedom}</div>
            <p className="text-xs text-muted-foreground">At current savings rate</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500">{currentProgress}%</div>
            <p className="text-xs text-muted-foreground">Of freedom number achieved</p>
            <Progress value={currentProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">${monthlySavings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Current contribution</p>
          </CardContent>
        </Card>
      </div>

      {/* Calculator and Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calculator Inputs */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5" />
              <span>Calculator Inputs</span>
            </CardTitle>
            <CardDescription>Adjust your financial parameters to see updated projections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                <Input
                  id="monthlyExpenses"
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentPortfolio">Current Portfolio</Label>
                <Input
                  id="currentPortfolio"
                  type="number"
                  value={currentPortfolio}
                  onChange={(e) => setCurrentPortfolio(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlySavings">Monthly Savings</Label>
                <Input
                  id="monthlySavings"
                  type="number"
                  value={monthlySavings}
                  onChange={(e) => setMonthlySavings(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedReturn">Expected Return (%)</Label>
                <Input
                  id="expectedReturn"
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inflationRate">Inflation Rate (%)</Label>
                <Input
                  id="inflationRate"
                  type="number"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="safeWithdrawalRate">Safe Withdrawal Rate (%)</Label>
                <Input
                  id="safeWithdrawalRate"
                  type="number"
                  value={safeWithdrawalRate}
                  onChange={(e) => setSafeWithdrawalRate(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Calculation Summary */}
            <div className="mt-6 p-4 bg-accent/50 rounded-lg">
              <h4 className="font-semibold mb-3">Calculation Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Annual Expenses:</span>
                  <span className="font-medium">${annualExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Savings:</span>
                  <span className="font-medium">${annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Savings Rate:</span>
                  <span className="font-medium text-green-500">{savingsRate}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Growth Projection */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Portfolio Growth Projection</CardTitle>
            <CardDescription>Your projected path to financial freedom</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                    labelStyle={{ color: '#374151' }}
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Methodology & Assumptions */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Methodology & Assumptions</CardTitle>
          <CardDescription>Understanding the calculations behind your financial freedom projection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Key Formulas</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">Financial Freedom Number</div>
                  <div className="text-muted-foreground">Annual Expenses ÷ Safe Withdrawal Rate</div>
                </div>
                <div>
                  <div className="font-medium">Portfolio Growth</div>
                  <div className="text-muted-foreground">Current Value × (1 + Return) + Monthly Savings</div>
                </div>
                <div>
                  <div className="font-medium">Inflation Adjustment</div>
                  <div className="text-muted-foreground">Expenses × (1 + Inflation Rate)</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Important Notes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• The 4% rule assumes you can safely withdraw 4% of your portfolio annually</li>
                <li>• Returns are assumed to be consistent, but actual returns will vary</li>
                <li>• Inflation adjustments help maintain purchasing power over time</li>
                <li>• This calculator provides estimates - consult a financial advisor for personalized advice</li>
                <li>• Consider tax implications and other factors not included in this calculation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Xandeum Financial Planning */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum Financial Planning</CardTitle>
          <CardDescription>Advanced financial modeling and scenario planning powered by Xandeum's computational capabilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-500">Real-time</div>
              <p className="text-sm text-muted-foreground">Calculations</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Scenario</div>
              <p className="text-sm text-muted-foreground">Modeling</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-500">Historical</div>
              <p className="text-sm text-muted-foreground">Backtesting</p>
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

