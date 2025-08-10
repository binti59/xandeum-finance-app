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
  BarChart3
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
  { category: 'Account Information', size: '450 MB', percentage: 19.2, color: '#10b981' },
  { category: 'Investment Records', size: '380 MB', percentage: 16.2, color: '#8b5cf6' },
  { category: 'Documents & Reports', size: '220 MB', percentage: 9.4, color: '#f59e0b' },
  { category: 'Analytics Cache', size: '90 MB', percentage: 3.9, color: '#ef4444' }
]

const networkNodes = [
  { id: 'node-1', location: 'US East', status: 'Online', latency: '12ms' },
  { id: 'node-2', location: 'US West', status: 'Online', latency: '8ms' },
  { id: 'node-3', location: 'Europe', status: 'Online', latency: '45ms' },
  { id: 'node-4', location: 'Asia Pacific', status: 'Online', latency: '78ms' },
  { id: 'node-5', location: 'Canada', status: 'Online', latency: '15ms' }
]

export default function XandeumStorage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Xandeum Storage Integration</h1>
        <p className="text-muted-foreground">Manage your decentralized financial data storage</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connection Status</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="text-2xl font-bold">Connected</div>
            </div>
            <Badge className="mt-2 bg-green-500">Xandeum Network</Badge>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Storage</CardTitle>
            <HardDrive className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">2.34 GB</div>
            <p className="text-xs text-muted-foreground">Across 5 nodes</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Redundancy</CardTitle>
            <Shield className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500">5x</div>
            <p className="text-xs text-muted-foreground">Data replication factor</p>
          </CardContent>
        </Card>

        <Card className="xandeum-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <BarChart3 className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">99.97%</div>
            <p className="text-xs text-muted-foreground">Network availability</p>
          </CardContent>
        </Card>
      </div>

      {/* Xandeum Storage Layer Features */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Xandeum Storage Layer Features</CardTitle>
          <CardDescription>Advanced capabilities that make your financial app #OnlyPossibleOnXandeum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storageFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <Badge className="bg-green-500">{feature.status}</Badge>
                  </div>
                  <p className="text-sm font-medium mb-1">{feature.description}</p>
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
                    <span className="font-medium">{item.category}</span>
                    <span className="font-bold">{item.size}</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
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
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Server className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{node.id}</div>
                      <div className="text-sm text-muted-foreground">{node.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500 mb-1">{node.status}</Badge>
                    <div className="text-sm text-muted-foreground">{node.latency}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Storage Metrics & Security */}
      <Card className="xandeum-card">
        <CardHeader>
          <CardTitle>Storage Metrics & Security</CardTitle>
          <CardDescription>Detailed information about your data storage and security</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Storage Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Data Stored:</span>
                  <span className="font-medium">2.34 GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Sync:</span>
                  <span className="font-medium">2 minutes ago</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Integrity:</span>
                  <span className="font-medium text-green-500">100%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Security Features</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Encryption:</span>
                  <span className="font-medium">256-bit AES</span>
                </div>
                <div className="flex justify-between">
                  <span>Redundancy:</span>
                  <span className="font-medium">5x</span>
                </div>
                <div className="flex justify-between">
                  <span>Access Control:</span>
                  <span className="font-medium">Private Key</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Performance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Network Uptime:</span>
                  <span className="font-medium">99.97%</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Latency:</span>
                  <span className="font-medium">31ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Sync Status:</span>
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
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Force Sync
            </Button>
            <Button variant="outline">
              <Archive className="h-4 w-4 mr-2" />
              Backup Data
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Optimize Storage
            </Button>
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Unlimited Financial History</h4>
              <p className="text-sm text-muted-foreground">
                Store decades of transaction data, investment records, and financial documents without worrying about storage limits or costs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Smart Financial Automation</h4>
              <p className="text-sm text-muted-foreground">
                Built-in smart contracts enable automated savings rules, investment strategies, and financial goal tracking that execute without intermediaries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Instant Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Random access capabilities allow complex financial analytics and reporting to run instantly on your complete financial history.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

