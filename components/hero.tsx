"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Transparent Governance Platform
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where <span className="text-accent">Trust</span> Meets <span className="text-accent">Connection</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                TruCon bridges citizens and organizations through transparent, secure, and verifiable connections. Build
                trust through accountability and real-time engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="gap-2">
                  <Link href="/get-started">
                    Get Started Free
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-accent">10K+</div>
                  <div className="text-sm text-foreground/60">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-foreground/60">Organizations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-foreground/60">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border overflow-hidden">
              {/* Animated elements */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Content Cards */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="space-y-4 w-full">
                  <motion.div
                    className="bg-background/80 backdrop-blur border border-border rounded-lg p-4 flex items-center gap-3"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Shield className="text-accent flex-shrink-0" size={24} />
                    <div>
                      <div className="font-semibold text-sm">Verified Identity</div>
                      <div className="text-xs text-foreground/60">Secure verification</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-background/80 backdrop-blur border border-border rounded-lg p-4 flex items-center gap-3"
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Users className="text-accent flex-shrink-0" size={24} />
                    <div>
                      <div className="font-semibold text-sm">Community Driven</div>
                      <div className="text-xs text-foreground/60">Real connections</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-background/80 backdrop-blur border border-border rounded-lg p-4 flex items-center gap-3"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Zap className="text-accent flex-shrink-0" size={24} />
                    <div>
                      <div className="font-semibold text-sm">Real-Time Updates</div>
                      <div className="text-xs text-foreground/60">Instant notifications</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
