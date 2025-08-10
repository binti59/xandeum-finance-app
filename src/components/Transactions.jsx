import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Download, Plus, Search, TrendingUp, TrendingDown, Calendar, Shield, Database, Zap, Upload, Edit, Trash2, Eye, EyeOff } from 'lucide-react'

const initialTransactions = [
  {
    id: 1,
    description: 'Salary Deposit',
    category: 'Income',
    account: 'Chase Checking',
    date: '2024-07-03',
    amount: 8500.00,
    type: 'income'
  },
  {
    id: 2,
    description: 'Rent Payment',
    category: 'Housing',
    account: 'Chase Checking',
    date: '2024-07-02',
    amount: -2400.00,
    type: 'expense'
  },
  {
    id: 3,
    description: 'Grocery Store',
    category: 'Food',
    account: 'Chase Checking',
    date: '2024-07-02',
    amount: -156.78,
    type: 'expense'
  },
  {
    id: 4,
    description: 'Stock Purchase - AAPL',
    category: 'Investment',
    account: 'Investment Portfolio',
    date: '2024-07-01',
    amount: -5000.00,
    type: 'transfer'
  },
  {
    id: 5,
    description: 'Gas Station',
    category: 'Transport',
    account: 'Credit Card',
    date: '2024-07-01',
    amount: -65.43,
    type: 'expense'
  },
  {
    id: 6,
    description: 'Netflix Subscription',
    category: 'Entertainment',
    account: 'Chase Checking',
    date: '2024-06-30',
    amount: -15.99,
    type: 'expense'
  },
  {
    id: 7,
    description: 'Freelance Payment',
    category: 'Income',
    account: 'Chase Checking',
    date: '2024-06-30',
    amount: 1200.00,
    type: 'income'
  },
  {
    id: 8,
    description: 'Restaurant Dinner',
    category: 'Food',
    account: 'Credit Card',
    date: '2024-06-29',
    amount: -89.50,
    type: 'expense'
  }
]

const categories = ['Income', 'Housing', 'Food', 'Transport', 'Entertainment', 'Healthcare', 'Investment', 'Other']
const accounts = ['Chase Checking', 'High Yield Savings', 'Investment Portfolio', 'Credit Card', 'Crypto Holdings']

const getCategoryColor = (category) => {
  const colors = {
    'Income': 'bg-green-500',
    'Housing': 'bg-blue-500',
    'Food': 'bg-orange-500',
    'Investment': 'bg-purple-500',
    'Transport': 'bg-yellow-500',
    'Entertainment': 'bg-pink-500',
    'Healthcare': 'bg-teal-500',
    'Other': 'bg-gray-500'
  }
  return colors[category] || 'bg-gray-500'
}

export default function Transactions() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('xandeum-transactions')
    return saved ? JSON.parse(saved) : initialTransactions
  })
  
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedAccount, setSelectedAccount] = useState('All Accounts')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] = useState(null)
  
  // Form state
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    account: '',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0]
  })

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('xandeum-transactions', JSON.stringify(transactions))
  }, [transactions])

  // Filter transactions based on search, category, and account
  useEffect(() => {
    let filtered = transactions

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(t => 
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.account.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(t => t.category === selectedCategory)
    }

    // Account filter
    if (selectedAccount !== 'All Accounts') {
      filtered = filtered.filter(t => t.account === selectedAccount)
    }

    setFilteredTransactions(filtered)
  }, [transactions, searchTerm, selectedCategory, selectedAccount])

  const handleAddTransaction = () => {
    if (!formData.description || !formData.category || !formData.account || !formData.amount) {
      alert('Please fill in all fields')
      return
    }

    const newTransaction = {
      id: Date.now(),
      description: formData.description,
      category: formData.category,
      account: formData.account,
      date: formData.date,
      amount: formData.type === 'expense' ? -Math.abs(parseFloat(formData.amount)) : Math.abs(parseFloat(formData.amount)),
      type: formData.type
    }

    setTransactions([newTransaction, ...transactions])
    setFormData({
      description: '',
      category: '',
      account: '',
      amount: '',
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    })
    setIsAddModalOpen(false)
  }

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction)
    setFormData({
      description: transaction.description,
      category: transaction.category,
      account: transaction.account,
      amount: Math.abs(transaction.amount).toString(),
      type: transaction.type,
      date: transaction.date
    })
    setIsAddModalOpen(true)
  }

  const handleUpdateTransaction = () => {
    if (!formData.description || !formData.category || !formData.account || !formData.amount) {
      alert('Please fill in all fields')
      return
    }

    const updatedTransaction = {
      ...editingTransaction,
      description: formData.description,
      category: formData.category,
      account: formData.account,
      date: formData.date,
      amount: formData.type === 'expense' ? -Math.abs(parseFloat(formData.amount)) : Math.abs(parseFloat(formData.amount)),
      type: formData.type
    }

    setTransactions(transactions.map(t => t.id === editingTransaction.id ? updatedTransaction : t))
    setFormData({
      description: '',
      category: '',
      account: '',
      amount: '',
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    })
    setEditingTransaction(null)
    setIsAddModalOpen(false)
  }

  const handleDeleteTransaction = (id) => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      setTransactions(transactions.filter(t => t.id !== id))
    }
  }

  const handleExport = () => {
    const csvContent = [
      ['Date', 'Description', 'Category', 'Account', 'Amount', 'Type'],
      ...transactions.map(t => [
        t.date,
        t.description,
        t.category,
        t.account,
        t.amount,
        t.type
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'xandeum-transactions.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleImport = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const csv = e.target.result
        const lines = csv.split('\n')
        const headers = lines[0].split(',')
        
        const importedTransactions = lines.slice(1)
          .filter(line => line.trim())
          .map((line, index) => {
            const values = line.split(',')
            return {
              id: Date.now() + index,
              date: values[0],
              description: values[1],
              category: values[2],
              account: values[3],
              amount: parseFloat(values[4]),
              type: values[5]
            }
          })

        setTransactions([...importedTransactions, ...transactions])
        alert(`Imported ${importedTransactions.length} transactions successfully!`)
      } catch (error) {
        alert('Error importing file. Please check the format.')
      }
    }
    reader.readAsText(file)
    event.target.value = '' // Reset file input
  }

  const totalIncome = filteredTransactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = Math.abs(filteredTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0))
  const netCashFlow = totalIncome - totalExpenses

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-muted-foreground">Monitor all your financial activity with detailed transaction tracking</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <label htmlFor="import-file">
            <Button variant="outline" asChild>
              <span>
                <Upload className="h-4 w-4 mr-2" />
                Import
              </span>
            </Button>
          </label>
          <input
            id="import-file"
            type="file"
            accept=".csv"
            onChange={handleImport}
            className="hidden"
          />
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="xandeum-gradient" onClick={() => setEditingTransaction(null)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{editingTransaction ? 'Edit Transaction' : 'Add New Transaction'}</DialogTitle>
                <DialogDescription>
                  {editingTransaction ? 'Update the transaction details below.' : 'Record a new financial transaction'}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g., Grocery Store"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="account">Account</Label>
                    <Select value={formData.account} onValueChange={(value) => setFormData({...formData, account: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts.map(account => (
                          <SelectItem key={account} value={account}>{account}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Type</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="expense">Expense</SelectItem>
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="transfer">Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={editingTransaction ? handleUpdateTransaction : handleAddTransaction}>
                  {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
            <div className="text-2xl font-bold">
              <span className="text-green-500">$</span><span className="text-green-500">{totalIncome.toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground">This period</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <span className="text-red-500">$</span><span className="text-red-500">{totalExpenses.toLocaleString()}</span>
            </div>
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
              <span className={netCashFlow >= 0 ? 'text-green-500' : 'text-red-500'}>$</span>{Math.abs(netCashFlow).toLocaleString()}
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{selectedCategory}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedCategory('All Categories')}>
              All Categories
            </DropdownMenuItem>
            {categories.map(category => (
              <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{selectedAccount}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedAccount('All Accounts')}>
              All Accounts
            </DropdownMenuItem>
            {accounts.map(account => (
              <DropdownMenuItem key={account} onClick={() => setSelectedAccount(account)}>
                {account}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Transactions List */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Showing {filteredTransactions.length} of {transactions.length} transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
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
                    <p className="text-xs text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className={`text-lg font-bold ${transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      <span className={transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}>
                        {transaction.amount >= 0 ? '+$' : '-$'}
                      </span>{Math.abs(transaction.amount).toLocaleString()}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {transaction.type}
                    </Badge>
                  </div>
                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditTransaction(transaction)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
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

