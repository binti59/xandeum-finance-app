import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Download, Plus, Search, TrendingUp, TrendingDown, Calendar, Shield, Database, Zap } from 'lucide-react'

const transactions = [
  {
    id: 1,
    description: 'Salary Deposit',
    category: 'Income',
    account: 'Chase Checking',
    date: 'Jul 3, 2024',
    amount: 8500.00,
    type: 'income'
  },
  {
    id: 2,
    description: 'Rent Payment',
    category: 'Housing',
    account: 'Chase Checking',
    date: 'Jul 2, 2024',
    amount: -2400.00,
    type: 'expense'
  },
  {
    id: 3,
    description: 'Grocery Store',
    category: 'Food',
    account: 'Chase Checking',
    date: 'Jul 2, 2024',
    amount: -156.78,
    type: 'expense'
  },
  {
    id: 4,
    description: 'Stock Purchase - AAPL',
    category: 'Investment',
    account: 'Investment Portfolio',
    date: 'Jul 1, 2024',
    amount: -5000.00,
    type: 'transfer'
  },
  {
    id: 5,
    description: 'Gas Station',
    category: 'Transport',
    account: 'Credit Card',
    date: 'Jul 1, 2024',
    amount: -65.43,
    type: 'expense'
  },
  {
    id: 6,
    description: 'Netflix Subscription',
    category: 'Entertainment',
    account: 'Chase Checking',
    date: 'Jun 30, 2024',
    amount: -15.99,
    type: 'expense'
  },
  {
    id: 7,
    description: 'Freelance Payment',
    category: 'Income',
    account: 'Chase Checking',
    date: 'Jun 30, 2024',
    amount: 1200.00,
    type: 'income'
  },
  {
    id: 8,
    description: 'Restaurant Dinner',
    category: 'Food',
    account: 'Credit Card',
    date: 'Jun 29, 2024',
    amount: -89.50,
    type: 'expense'
  }
]

const getCategoryColor = (category) => {
  const colors = {
    'Income': 'bg-green-500',
    'Housing': 'bg-blue-500',
    'Food': 'bg-orange-500',
    'Investment': 'bg-purple-500',
    'Transport': 'bg-yellow-500',
    'Entertainment': 'bg-pink-500'
  }
  return colors[category] || 'bg-gray-500'
}

export default function Transactions() {
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = Math.abs(transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0))
  const netCashFlow = totalIncome - totalExpenses

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-muted-foreground">Monitor all your financial activity with detailed transaction tracking</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="xandeum-gradient">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">${totalIncome.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This period</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">${totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This period</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netCashFlow >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${Math.abs(netCashFlow).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Income - Expenses</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">All Categories</Button>
        <Button variant="outline">All Accounts</Button>
      </div>

      {/* Transactions List */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Showing {transactions.length} of {transactions.length} transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${getCategoryColor(transaction.category)}`}>
                    {transaction.type === 'income' ? (
                      <TrendingUp className="h-4 w-4 text-white" />
                    ) : transaction.type === 'expense' ? (
                      <TrendingDown className="h-4 w-4 text-white" />
                    ) : (
                      <Database className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold">{transaction.description}</h4>
                      <Badge variant="outline">{transaction.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{transaction.account}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {transaction.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Xandeum Transaction Storage */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum Transaction Storage</CardTitle>
          <CardDescription>All transaction data is securely stored on Xandeum's decentralized network with full audit trail</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{transactions.length}</div>
              <p className="text-sm text-muted-foreground">Transactions Stored</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Immutable</div>
              <p className="text-sm text-muted-foreground">Audit Trail</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">Real-time</div>
              <p className="text-sm text-muted-foreground">Sync</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Encrypted</div>
              <p className="text-sm text-muted-foreground">Storage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

