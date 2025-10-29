"use client"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, UserPlus, MapPin, Mail, Shield, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function UserDetailPage({ params }: { params: { id: string } }) {
  // Mock user data - in a real app, this would be fetched based on params.id
  const user = {
    id: params.id,
    firstName: "Sarah",
    lastName: "Johnson",
    title: "Product Manager",
    company: "Tech Innovations Inc",
    location: "San Francisco, CA",
    email: "sarah.johnson@example.com",
    bio: "Passionate about building products that solve real problems. 10+ years of experience in tech.",
    verified: true,
    trustScore: 4.8,
    connections: 156,
    views: 1243,
    mutualConnections: 12,
    skills: ["Product Strategy", "User Research", "Data Analysis", "Team Leadership"],
    experience: [
      { title: "Senior Product Manager", company: "Tech Innovations Inc", period: "2020 - Present" },
      { title: "Product Manager", company: "Digital Solutions", period: "2018 - 2020" },
    ],
  }

  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-primary to-primary-light sticky top-0 z-30" />

        <div className="px-6 pb-12">
          <div className="max-w-4xl mx-auto -mt-16 relative z-40">
            {/* Back Button */}
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-4 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>

            {/* Profile Card */}
            <Card className="bg-white shadow-xl mb-8">
              <div className="p-8">
                {/* Avatar and Basic Info */}
                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="w-32 h-32 rounded-full border-4 border-white bg-primary/10 flex items-center justify-center text-5xl font-bold text-primary mb-4 shadow-lg">
                      {user.firstName.charAt(0)}
                      {user.lastName.charAt(0)}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold text-primary">
                        {user.firstName} {user.lastName}
                      </h1>
                      {user.verified && <Shield className="w-6 h-6 text-success" />}
                    </div>
                    <p className="text-lg text-neutral-600 mb-1">{user.title}</p>
                    <p className="text-neutral-500 mb-4">{user.company}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary-light text-white">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                      <Button
                        variant="outline"
                        className="border-neutral-300 text-primary hover:bg-neutral-50 bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 py-6 border-y border-neutral-200 mb-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{user.connections}</p>
                    <p className="text-sm text-neutral-600">Connections</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-5 h-5 text-warning fill-warning" />
                      <p className="text-2xl font-bold text-primary">{user.trustScore}</p>
                    </div>
                    <p className="text-sm text-neutral-600">Trust Score</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{user.mutualConnections}</p>
                    <p className="text-sm text-neutral-600">Mutual</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{user.views}</p>
                    <p className="text-sm text-neutral-600">Views</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <h2 className="text-lg font-semibold text-primary">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-neutral-600">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href={`mailto:${user.email}`} className="hover:text-primary transition">
                        {user.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-600">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{user.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-primary mb-3">About</h2>
                  <p className="text-neutral-600 leading-relaxed">{user.bio}</p>
                </div>
              </div>
            </Card>

            {/* Additional Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Experience */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Experience</h2>
                <div className="space-y-4">
                  {user.experience.map((exp, index) => (
                    <div key={index}>
                      <p className="font-semibold text-primary">{exp.title}</p>
                      <p className="text-sm text-neutral-600">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
