"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Edit2, Save, X, MapPin, Mail, Phone, LinkIcon, Shield, Star } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    title: "Product Manager",
    company: "Tech Innovations Inc",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.com",
    bio: "Passionate about building products that solve real problems. 10+ years of experience in tech.",
    verified: true,
    trustScore: 4.8,
    connections: 156,
    views: 1243,
  })

  const [editData, setEditData] = useState(profileData)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(profileData)
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-primary to-primary-light sticky top-0 z-30" />

        <div className="px-6 pb-12">
          <div className="max-w-4xl mx-auto -mt-16 relative z-40">
            {/* Profile Card */}
            <Card className="bg-white shadow-xl mb-8">
              <div className="p-8">
                {/* Avatar and Basic Info */}
                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="w-32 h-32 rounded-full border-4 border-white bg-primary/10 flex items-center justify-center text-5xl font-bold text-primary mb-4 shadow-lg">
                      {profileData.firstName.charAt(0)}
                      {profileData.lastName.charAt(0)}
                    </div>
                    {!isEditing && (
                      <Button onClick={handleEdit} className="bg-primary hover:bg-primary-light text-white">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    )}
                  </div>

                  <div className="flex-1">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-1">First Name</label>
                            <Input
                              name="firstName"
                              value={editData.firstName}
                              onChange={handleChange}
                              className="border-neutral-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-1">Last Name</label>
                            <Input
                              name="lastName"
                              value={editData.lastName}
                              onChange={handleChange}
                              className="border-neutral-300"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary mb-1">Title</label>
                          <Input
                            name="title"
                            value={editData.title}
                            onChange={handleChange}
                            className="border-neutral-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary mb-1">Company</label>
                          <Input
                            name="company"
                            value={editData.company}
                            onChange={handleChange}
                            className="border-neutral-300"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h1 className="text-3xl font-bold text-primary">
                            {profileData.firstName} {profileData.lastName}
                          </h1>
                          {profileData.verified && <Shield className="w-6 h-6 text-success" />}
                        </div>
                        <p className="text-lg text-neutral-600 mb-1">{profileData.title}</p>
                        <p className="text-neutral-500">{profileData.company}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats */}
                {!isEditing && (
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-neutral-200 mb-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{profileData.connections}</p>
                      <p className="text-sm text-neutral-600">Connections</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-5 h-5 text-warning fill-warning" />
                        <p className="text-2xl font-bold text-primary">{profileData.trustScore}</p>
                      </div>
                      <p className="text-sm text-neutral-600">Trust Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{profileData.views}</p>
                      <p className="text-sm text-neutral-600">Profile Views</p>
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <h2 className="text-lg font-semibold text-primary">Contact Information</h2>
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="border-neutral-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">Phone</label>
                        <Input
                          name="phone"
                          value={editData.phone}
                          onChange={handleChange}
                          className="border-neutral-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">Website</label>
                        <Input
                          name="website"
                          value={editData.website}
                          onChange={handleChange}
                          className="border-neutral-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">Location</label>
                        <Input
                          name="location"
                          value={editData.location}
                          onChange={handleChange}
                          className="border-neutral-300"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-neutral-600">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href={`mailto:${profileData.email}`} className="hover:text-primary transition">
                          {profileData.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-600">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>{profileData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-600">
                        <LinkIcon className="w-5 h-5 text-primary" />
                        <a
                          href={profileData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition"
                        >
                          {profileData.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-600">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{profileData.location}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-primary mb-3">About</h2>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={editData.bio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      rows={4}
                    />
                  ) : (
                    <p className="text-neutral-600 leading-relaxed">{profileData.bio}</p>
                  )}
                </div>

                {/* Edit Actions */}
                {isEditing && (
                  <div className="flex gap-3 pt-6 border-t border-neutral-200">
                    <Button onClick={handleSave} className="flex-1 bg-primary hover:bg-primary-light text-white">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="flex-1 border-neutral-300 text-neutral-600 hover:bg-neutral-50 bg-transparent"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Additional Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["Product Strategy", "User Research", "Data Analysis", "Team Leadership", "Agile"].map((skill) => (
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
                  <div>
                    <p className="font-semibold text-primary">Senior Product Manager</p>
                    <p className="text-sm text-neutral-600">Tech Innovations Inc • 2020 - Present</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Product Manager</p>
                    <p className="text-sm text-neutral-600">Digital Solutions • 2018 - 2020</p>
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
