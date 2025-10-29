"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { UserCard } from "@/components/user-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, TrendingUp } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Profile {
  id: string
  full_name: string
  profession: string
  bio: string
  trust_score: number
  verified: boolean
  category: string
}

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [users, setUsers] = useState<Profile[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase.from("profiles").select("*").order("trust_score", { ascending: false })

        if (error) {
          console.error("Error fetching users:", error)
          setIsLoading(false)
          return
        }

        setUsers(data || [])
      } catch (err) {
        console.error("Error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.profession?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.category?.toLowerCase().includes(searchQuery.toLowerCase())

    if (selectedFilter === "verified") return matchesSearch && user.verified
    if (selectedFilter === "high-trust") return matchesSearch && user.trust_score >= 4.7
    return matchesSearch
  })

  const handleConnect = (userId: string) => {
    console.log("Connected with user:", userId)
  }

  const handleMessage = (userId: string) => {
    console.log("Message user:", userId)
  }

  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-neutral-200 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">Discover Connections</h1>
                <p className="text-neutral-600 mt-1">Find and connect with trusted professionals</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">{filteredUsers.length} matches</span>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search by name, title, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full border-neutral-300"
                />
              </div>
              <div className="flex gap-2">
                {["all", "verified", "high-trust"].map((filter) => (
                  <Button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    className={
                      selectedFilter === filter
                        ? "bg-primary hover:bg-primary-light text-white"
                        : "border-neutral-300 text-neutral-600 hover:bg-neutral-50"
                    }
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {filter === "all" && "All"}
                    {filter === "verified" && "Verified"}
                    {filter === "high-trust" && "High Trust"}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">Loading connections...</p>
              </div>
            ) : filteredUsers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.full_name}
                    title={user.profession}
                    company=""
                    image=""
                    trustScore={user.trust_score}
                    verified={user.verified}
                    mutualConnections={0}
                    onConnect={handleConnect}
                    onMessage={handleMessage}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">No users found matching your criteria.</p>
                <p className="text-neutral-500 text-sm mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
