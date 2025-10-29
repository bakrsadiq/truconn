"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, MessageSquare, UserPlus, CheckCircle, Trash2 } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

interface Notification {
  id: string
  type: "connection" | "message" | "verification"
  title: string
  description: string
  avatar: string
  timestamp: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "connection",
    title: "Sarah Johnson",
    description: "sent you a connection request",
    avatar: "/professional-woman-diverse.png",
    timestamp: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "message",
    title: "Michael Chen",
    description: "sent you a message",
    avatar: "/professional-man.jpg",
    timestamp: "4 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "verification",
    title: "Account Verified",
    description: "Your identity has been verified successfully",
    avatar: "/checkmark-badge.jpg",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "connection",
    title: "Emma Wilson",
    description: "accepted your connection request",
    avatar: "/professional-woman-diverse.png",
    timestamp: "2 days ago",
    read: true,
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const getIcon = (type: string) => {
    switch (type) {
      case "connection":
        return <UserPlus className="w-5 h-5 text-blue-600" />
      case "message":
        return <MessageSquare className="w-5 h-5 text-green-600" />
      case "verification":
        return <CheckCircle className="w-5 h-5 text-emerald-600" />
      default:
        return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto p-4 md:p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
                <p className="text-sm text-muted-foreground">{notifications.filter((n) => !n.read).length} unread</p>
              </div>
            </div>

            <div className="space-y-3">
              {notifications.length === 0 ? (
                <div className="text-center py-12">
                  <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
                      notification.read ? "bg-background border-border" : "bg-blue-50 border-blue-200"
                    }`}
                  >
                    <img
                      src={notification.avatar || "/placeholder.svg"}
                      alt={notification.title}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-foreground">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                              title="Mark as read"
                            >
                              <CheckCircle className="w-4 h-4 text-gray-400" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 hover:bg-red-100 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
