import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  HardDrive, 
  Activity, 
  RefreshCw, 
  Archive, 
  Settings, 
  Search,
  CheckCircle,
  Server,
  Lock,
  BarChart3,
  Check,
  RotateCcw,
  Download,
  Settings2,
  ShieldCheck
} from 'lucide-react'

const storageFeatures = [
  {
    title: 'Exabyte Storage',
    description: 'Massive storage capacity for all your financial data',
    details: 'Store unlimited transaction history, documents, and analytics',
    icon: Database,
    status: 'Active'
  },
  {
    title: 'Smart Contract Native',
    description: 'Built-in smart contract capabilities for automation',
    details: 'Automate savings, investments, and financial rules',
    icon: Zap,
    status: 'Active'
  },
  {
    title: 'Random Access',
    description: 'Instant access to any piece of your financial data',
    details: 'Query historical data instantly without delays',
    icon: Search,
    status: 'Active'
  },
  {
    title: 'Decentralized Security',
    description: 'Your data is distributed across multiple nodes',
    details: 'No single point of failure, maximum security',
    icon: Shield,
    status: 'Active'
  }
]

const dataDistribution = [
  { category: 'Transaction Data', size: '1.2 GB', percentage: 51.3, color: '#3b82f6' },
  { category: 'Account Information', size: '450 MB', percentage: 19.2, color: '#8b5cf6' },
  { category: 'Investment Records', size: '380 MB', percentage: 16.2, color: '#06b6d4' },
  { category: 'Documents & Reports', size: '220 MB', percentage: 9.4, color: '#f59e0b' }
]

const networkNodes = [
  { id: 'node-1', location: 'US East', status: 'Online', latency: '12ms' },
  { id: 'node-2', location: 'US West', status: 'Online', latency: '8ms' },
  { id: 'node-3', location: 'Europe', status: 'Online', latency: '45ms' }
]

export default function XandeumStorage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Xandeum Storage Integration</h1>
        <p className="text-muted-foreground">Manage your decentralized financial data storage</p>
      </div>

      {/* Storage Metrics & Security */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Storage Metrics & Security</CardTitle>
          <CardDescription>Detailed information about your data storage and security</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Storage Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Data Stored:</span>
                  <span className="font-medium text-white">2.34 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Sync:</span>
                  <span className="font-medium text-green-500">2 minutes ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Integrity:</span>
                  <span className="font-medium text-green-500">100%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Security Features</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Encryption:</span>
                  <span className="font-medium text-blue-400">256-bit AES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Redundancy:</span>
                  <span className="font-medium text-purple-400">5x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Access Control:</span>
                  <span className="font-medium text-green-500">Private Key</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Performance</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network Uptime:</span>
                  <span className="font-medium text-yellow-400">99.97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Latency:</span>
                  <span className="font-medium text-blue-400">31ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sync Status:</span>
                  <span className="font-medium text-green-500">Synced</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Storage Management */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Storage Management</CardTitle>
          <CardDescription>Manage your Xandeum storage settings and perform maintenance tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <RotateCcw className="h-4 w-4 mr-2" />
              Force Sync
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
              <Download className="h-4 w-4 mr-2" />
              Backup Data
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
              <Settings2 className="h-4 w-4 mr-2" />
              Optimize Storage
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Security Audit
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* #OnlyPossibleOnXandeum */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle className="text-2xl">#OnlyPossibleOnXandeum</CardTitle>
          <CardDescription>Why this personal finance app is uniquely enabled by Xandeum's storage layer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Database className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <h4 className="font-semibold mb-3 text-white">Unlimited Financial History</h4>
              <p className="text-sm text-muted-foreground">
                Store decades of transaction data, investment records, and financial documents without worrying about storage limits or costs.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h4 className="font-semibold mb-3 text-white">Smart Financial Automation</h4>
              <p className="text-sm text-muted-foreground">
                Built-in smart contracts enable automated savings rules, investment strategies, and financial goal tracking that execute without intermediaries.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <BarChart3 className="h-8 w-8 text-green-400" />
                </div>
              </div>
              <h4 className="font-semibold mb-3 text-white">Instant Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Random access capabilities allow complex financial analytics and reporting to run instantly on your complete financial history.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Xandeum Storage Layer Features */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum Storage Layer Features</CardTitle>
          <CardDescription>Advanced capabilities that make your financial app #OnlyPossibleOnXandeum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storageFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg border-gray-700">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <Badge className="bg-green-500 text-white flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium mb-1 text-white">{feature.description}</p>
                  <p className="text-xs text-muted-foreground">{feature.details}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Distribution and Network Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Distribution */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Data Distribution</CardTitle>
            <CardDescription>Breakdown of your stored financial data by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataDistribution.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{item.category}</span>
                    <span className="font-bold text-white">{item.size}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.percentage}% of total</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Network Nodes */}
        <Card className="xandeum-card">
          <CardHeader>
            <CardTitle>Network Nodes</CardTitle>
            <CardDescription>Global distribution of your data across Xandeum nodes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {networkNodes.map((node, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Server className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-white">{node.id}</div>
                      <div className="text-sm text-muted-foreground">{node.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500 text-white flex items-center gap-1 mb-1">
                      <Check className="h-3 w-3" />
                      {node.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{node.latency}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

