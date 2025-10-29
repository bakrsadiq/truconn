"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Settings, Bell, Lock, Eye, LogOut } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { PageTransition } from "@/components/page-transition"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    privateProfile: false,
    twoFactorAuth: false,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <PageTransition>
          <div className="max-w-2xl mx-auto p-4 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            </div>

            <div className="space-y-6">
              {/* Notifications Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-foreground">Email Notifications</span>
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={() => toggleSetting("emailNotifications")}
                      className="w-5 h-5 rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-foreground">Push Notifications</span>
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={() => toggleSetting("pushNotifications")}
                      className="w-5 h-5 rounded"
                    />
                  </label>
                </div>
              </motion.div>

              {/* Privacy Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-green-600" />
                  <h2 className="text-lg font-semibold text-foreground">Privacy</h2>
                </div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-foreground">Private Profile</span>
                  <input
                    type="checkbox"
                    checked={settings.privateProfile}
                    onChange={() => toggleSetting("privateProfile")}
                    className="w-5 h-5 rounded"
                  />
                </label>
              </motion.div>

              {/* Security Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-red-600" />
                  <h2 className="text-lg font-semibold text-foreground">Security</h2>
                </div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-foreground">Two-Factor Authentication</span>
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={() => toggleSetting("twoFactorAuth")}
                    className="w-5 h-5 rounded"
                  />
                </label>
              </motion.div>

              {/* Logout Section */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </motion.button>
            </div>
          </div>
        </PageTransition>
      </main>
    </div>
  )
}
