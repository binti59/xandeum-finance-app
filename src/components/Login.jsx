import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, TrendingUp, Shield, Eye, EyeOff } from 'lucide-react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex">
      {/* Left Column - Features */}
      <div className="flex-1 flex flex-col justify-center px-12 py-16">
        <div className="max-w-lg">
          {/* Main Title */}
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Xandeum Finance
          </h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Your personal finance management system powered by Xandeum's decentralized storage
          </p>

          {/* Feature Boxes */}
          <div className="space-y-6 mb-12">
            {/* Secure Storage */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Secure Storage</h3>
                <p className="text-slate-400 leading-relaxed">
                  Your financial data stored securely on Xandeum's decentralized network
                </p>
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Advanced Analytics</h3>
                <p className="text-slate-400 leading-relaxed">
                  Comprehensive financial insights and KPI tracking
                </p>
              </div>
            </div>

            {/* Privacy First */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">Privacy First</h3>
                <p className="text-slate-400 leading-relaxed">
                  You own and control your financial data completely
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Powered by Xandeum Storage Layer</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the future of personal finance with exabyte-scale storage, smart contract integration, 
              and random access capabilities that make sophisticated financial analytics possible.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex-1 flex items-center justify-center px-12 py-16">
        <div className="w-full max-w-md">
          <Card className="bg-slate-800/80 backdrop-blur-xl border-slate-700/50 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-blue-300 mb-2">Welcome back</CardTitle>
              <CardDescription className="text-slate-400">
                Enter your credentials to access your financial dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-300 font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-12 pr-12"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-600/50"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Sign In
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm mb-4">
                  Demo credentials: any email and password
                </p>
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-slate-400 text-sm mb-3">New to Xandeum Finance?</p>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500"
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

