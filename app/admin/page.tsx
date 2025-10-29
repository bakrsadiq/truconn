"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Users,
  TrendingUp,
  Shield,
  AlertCircle,
  Search,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Eye,
  Trash2,
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState<string | null>(null)

  // Mock analytics data
  const chartData = [
    { month: "Jan", users: 400, connections: 240, verified: 180 },
    { month: "Feb", users: 520, connections: 380, verified: 290 },
    { month: "Mar", users: 680, connections: 520, verified: 420 },
    { month: "Apr", users: 890, connections: 720, verified: 580 },
    { month: "May", users: 1200, connections: 950, verified: 780 },
    { month: "Jun", users: 1450, connections: 1200, verified: 1000 },
  ]

  // Mock user data for management
  const users = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "verified",
      joinDate: "2024-01-15",
      connections: 156,
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@example.com",
      status: "verified",
      joinDate: "2024-02-20",
      connections: 89,
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      email: "emma@example.com",
      status: "pending",
      joinDate: "2024-03-10",
      connections: 0,
    },
    {
      id: "4",
      name: "James Wilson",
      email: "james@example.com",
      status: "flagged",
      joinDate: "2024-01-05",
      connections: 234,
    },
    {
      id: "5",
      name: "Lisa Anderson",
      email: "lisa@example.com",
      status: "verified",
      joinDate: "2024-02-28",
      connections: 312,
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const stats = [
    {
      label: "Total Users",
      value: "1,450",
      change: "+12.5%",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Verified Users",
      value: "1,000",
      change: "+8.2%",
      icon: Shield,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Active Connections",
      value: "1,200",
      change: "+15.3%",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Flagged Accounts",
      value: "23",
      change: "-2.1%",
      icon: AlertCircle,
      color: "bg-red-100 text-red-600",
    },
  ]

  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-neutral-200 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-neutral-600 mt-1">Platform overview and management</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                    </div>
                    <p className="text-neutral-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  </Card>
                )
              })}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Line Chart */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Growth Trends</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#0f172a" strokeWidth={2} name="Total Users" />
                    <Line type="monotone" dataKey="verified" stroke="#10b981" strokeWidth={2} name="Verified" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Bar Chart */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Connection Activity</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="connections" fill="#3b82f6" name="Connections" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* User Management */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-primary">User Management</h2>
                <Button className="bg-primary hover:bg-primary-light text-white">Export Data</Button>
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-neutral-300"
                />
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold text-primary">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Join Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Connections</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition">
                        <td className="py-4 px-4 font-medium text-primary">{user.name}</td>
                        <td className="py-4 px-4 text-neutral-600">{user.email}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {user.status === "verified" && (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span className="text-sm text-green-600 font-medium">Verified</span>
                              </>
                            )}
                            {user.status === "pending" && (
                              <>
                                <AlertCircle className="w-4 h-4 text-yellow-600" />
                                <span className="text-sm text-yellow-600 font-medium">Pending</span>
                              </>
                            )}
                            {user.status === "flagged" && (
                              <>
                                <XCircle className="w-4 h-4 text-red-600" />
                                <span className="text-sm text-red-600 font-medium">Flagged</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-neutral-600 text-sm">{user.joinDate}</td>
                        <td className="py-4 px-4 text-neutral-600 font-medium">{user.connections}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-neutral-200 rounded-lg transition">
                              <Eye className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-2 hover:bg-neutral-200 rounded-lg transition">
                              <MoreVertical className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-2 hover:bg-red-100 rounded-lg transition">
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* System Health */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-primary mb-4">API Health</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Response Time</span>
                    <span className="text-sm font-semibold text-green-600">45ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Uptime</span>
                    <span className="text-sm font-semibold text-green-600">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Requests/min</span>
                    <span className="text-sm font-semibold text-green-600">1,234</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-primary mb-4">Database</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Storage Used</span>
                    <span className="text-sm font-semibold text-blue-600">2.4 GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Query Time</span>
                    <span className="text-sm font-semibold text-green-600">12ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Connections</span>
                    <span className="text-sm font-semibold text-green-600">45/100</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-primary mb-4">Security</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">SSL Certificate</span>
                    <span className="text-sm font-semibold text-green-600">Valid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Failed Logins</span>
                    <span className="text-sm font-semibold text-yellow-600">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Threats Blocked</span>
                    <span className="text-sm font-semibold text-green-600">12</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
