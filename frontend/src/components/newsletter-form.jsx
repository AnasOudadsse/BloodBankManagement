"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
        >
          <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-white/80 text-sm mt-1">
            We'll keep you updated on blood drives and donation opportunities.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus-visible:ring-red-500 focus-visible:border-red-500"
            />
          </div>

          <Button type="submit" className="w-full bg-white text-red-600 hover:bg-white/90" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>

          <p className="text-xs text-white/70 text-center">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  )
}
