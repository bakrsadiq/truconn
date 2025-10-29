"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, MessageCircle, UserPlus, Shield } from "lucide-react"

interface UserCardProps {
  id: string
  name: string
  title: string
  company: string
  image: string
  trustScore: number
  verified: boolean
  mutualConnections: number
  onConnect: (id: string) => void
  onMessage: (id: string) => void
}

export function UserCard({
  id,
  name,
  title,
  company,
  image,
  trustScore,
  verified,
  mutualConnections,
  onConnect,
  onMessage,
}: UserCardProps) {
  return (
    <div className="animate-slide-up">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow hover:scale-105 transition-transform duration-300">
        {/* Header Background */}
        <div className="h-24 bg-gradient-to-r from-primary to-primary-light" />

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="flex justify-center -mt-12 mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-neutral-200 flex items-center justify-center text-2xl font-bold text-primary overflow-hidden">
              {image ? (
                <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
              ) : (
                name.charAt(0)
              )}
            </div>
          </div>

          {/* Info */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-primary">{name}</h3>
              {verified && <Shield className="w-4 h-4 text-success" />}
            </div>
            <p className="text-sm text-neutral-600">{title}</p>
            <p className="text-xs text-neutral-500">{company}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-neutral-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="font-semibold text-primary">{trustScore}</span>
              </div>
              <p className="text-xs text-neutral-500">Trust Score</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-primary mb-1">{mutualConnections}</p>
              <p className="text-xs text-neutral-500">Mutual</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => onMessage(id)}
              variant="outline"
              className="flex-1 border-neutral-300 text-primary hover:bg-neutral-50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button onClick={() => onConnect(id)} className="flex-1 bg-primary hover:bg-primary-light text-white">
              <UserPlus className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default UserCard
