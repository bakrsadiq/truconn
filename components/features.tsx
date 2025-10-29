"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Lock, BarChart3, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All communications and data are encrypted with military-grade security protocols.",
  },
  {
    icon: CheckCircle2,
    title: "Verified Credentials",
    description: "Multi-layer verification ensures authentic identities and organizational legitimacy.",
  },
  {
    icon: BarChart3,
    title: "Transparent Analytics",
    description: "Real-time dashboards show engagement metrics and community impact.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Foster meaningful connections between citizens and organizations.",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Stay updated with real-time alerts on important governance updates.",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built with regulatory compliance and data protection standards in mind.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Trust
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to build transparent, secure connections between citizens and organizations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-accent/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
