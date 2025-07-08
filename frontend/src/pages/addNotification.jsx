"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Heart, MapPin, MessageSquare, Send, Bell, Users, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Cities from "./../MoroccanCities.json" // Your city data
import { Header } from "@/components/header";
import Footer from "./footer/footer"

export function SendNotificationForm() {
  const [criteria, setCriteria] = useState({
    bloodTypes: [],
    cities: Cities,
  })
  const [notificationData, setNotificationData] = useState({
    bloodType: "",
    city: "",
    title: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  console.log(notificationData)
  const { toast } = useToast()

  useEffect(() => {
    const fetchBloodTypes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getBloodType")
        setCriteria((prevCriteria) => ({
          ...prevCriteria,
          bloodTypes: response.data,
        }))
      } catch (error) {
        console.error("Failed to fetch blood types", error)
        toast({
          title: "Error fetching blood types",
          description: error.message,
          variant: "destructive",
          duration: 9000,
        })
      }
    }

    fetchBloodTypes()
  }, [toast])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNotificationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setNotificationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/addNotification", notificationData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("Notification sent successfully", response.data)
      toast({
        title: "Notification Sent",
        description: "Notification sent successfully!",
        duration: 5000,
      })

      // Clear form
      setNotificationData({
        bloodType: "",
        city: "",
        title: "",
        message: "",
      })
    } catch (error) {
      console.error("Failed to send notification", error)
      toast({
        title: "Failed to Send Notification",
        description: `Error: ${error.response?.data?.message || error.message}`,
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <div className="!min-h-screen !bg-white !relative !overflow-hidden">
        {/* Professional background pattern */}
        <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

        {/* Creative geometric elements */}
        <div className="!absolute !top-20 !left-20 !w-1 !h-32 !bg-red-200 !transform !rotate-12" />
        <div className="!absolute !top-40 !right-40 !w-2 !h-24 !bg-slate-200 !transform !-rotate-12" />
        <div className="!absolute !bottom-40 !left-40 !w-1 !h-28 !bg-red-100 !transform !rotate-45" />
        <div className="!absolute !bottom-20 !right-20 !w-2 !h-20 !bg-slate-100 !transform !-rotate-45" />

        <div className="!container !mx-auto !px-6 lg:!px-8 !relative !z-10">
          {/* Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!pt-20 !pb-8"
          >
            <div className="!flex !items-center !gap-3 !mb-6 !justify-center">
              <div className="!w-1 !h-8 !bg-red-600" />
              <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
                Emergency Alert System
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Send Alert Notification
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Send targeted notifications to donors based on blood type and location for urgent blood donation needs.
            </p>
          </motion.div>

          {/* Main Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!max-w-2xl !mx-auto !mb-20"
          >
            <Card className="!relative !bg-white !border-2 !border-slate-200 !overflow-hidden !shadow-xl">
              {/* Professional header */}
              <div className="!relative !bg-gradient-to-r !from-red-600 !to-red-700 !p-6 !transform !-skew-y-1 !-mt-1 !mb-6">
                <div className="!transform !skew-y-1">
                  <div className="!flex !items-center !gap-4 !mb-2">
                    <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                      <Bell className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="!text-sm !font-medium !text-white/90 !uppercase !tracking-wider">Emergency Alert</p>
                      <h2 className="!text-xl !font-bold !text-white">Send Notification to Donors</h2>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="!px-8 !pb-8">
                <form onSubmit={handleSubmit} className="!space-y-6">
                  {/* Target Criteria Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-4">
                      <Target className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Target Criteria</h3>
                    </div>

                    {/* Blood Type Field */}
                    <div className="!space-y-2">
                      <label
                        htmlFor="bloodType"
                        className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                      >
                        <Heart className="!h-4 !w-4 !text-red-600" />
                        Blood Type
                      </label>
                      <Select
                        value={notificationData.bloodType}
                        onValueChange={(value) => handleSelectChange("bloodType", value)}
                      >
                        <SelectTrigger className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus:!ring-red-500 focus:!ring-offset-0 focus:!border-red-500 focus:!bg-white !transition-all !duration-200">
                          <SelectValue placeholder="Select Blood Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {criteria.bloodTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id.toString()}>
                              {type.BloodType}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* City Field */}
                    <div className="!space-y-2">
                      <label
                        htmlFor="city"
                        className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                      >
                        <MapPin className="!h-4 !w-4 !text-red-600" />
                        City
                      </label>
                      <Select
                        value={notificationData.city}
                        onValueChange={(value) => handleSelectChange("city", value)}
                      >
                        <SelectTrigger className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus:!ring-red-500 focus:!ring-offset-0 focus:!border-red-500 focus:!bg-white !transition-all !duration-200">
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          {criteria.cities.map((city) => (
                            <SelectItem key={city.id} value={city.ville}>
                              {city.ville}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Notification Content Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-4">
                      <MessageSquare className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Notification Content</h3>
                    </div>

                    {/* Title Field */}
                    <div className="!space-y-2">
                      <label htmlFor="title" className="!text-sm !font-semibold !text-slate-700">
                        Title
                      </label>
                      <Input
                        id="title"
                        name="title"
                        value={notificationData.title}
                        onChange={handleChange}
                        placeholder="Notification Title"
                        required
                        className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="!space-y-2">
                      <label htmlFor="message" className="!text-sm !font-semibold !text-slate-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={notificationData.message}
                        onChange={handleChange}
                        placeholder="Type your notification message here"
                        required
                        rows={4}
                        className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !px-4 !py-3 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200 !resize-none"
                      />
                    </div>
                  </div>

                  {/* Professional Information Box */}
                  <div className="!bg-red-50 !border !border-red-200 !p-4 !rounded-lg">
                    <div className="!flex !items-start !gap-3">
                      <Users className="!h-5 !w-5 !text-red-600 !mt-0.5 !flex-shrink-0" />
                      <div className="!text-sm !text-red-700">
                        <p className="!font-semibold !mb-1">Notification Guidelines:</p>
                        <ul className="!space-y-1 !text-red-600">
                          <li>• Ensure the message is clear and urgent</li>
                          <li>• Include specific blood type and location</li>
                          <li>• Provide contact information for donors</li>
                          <li>• Keep the message concise and actionable</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="!pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="!w-full !h-12 !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !transition-all !duration-300 !transform hover:!scale-105 !shadow-lg hover:!shadow-xl"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="!h-5 !w-5 !rounded-full !border-2 !border-current !border-t-transparent !mr-2"
                        />
                      ) : (
                        <Send className="!mr-2 !h-5 !w-5" />
                      )}
                      {isSubmitting ? "Sending Notification..." : "Send Notification"}
                    </Button>
                  </div>
                </form>
              </CardContent>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-red-300 !to-red-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </Card>
          </motion.div>

          {/* Professional Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="!max-w-6xl !mx-auto !mb-20"
          >
            <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8">
              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Target className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Targeted Messaging</h3>
                <p className="!text-sm !text-slate-600">
                  Send notifications to specific donor groups based on blood type and location for maximum
                  effectiveness.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Bell className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Instant Delivery</h3>
                <p className="!text-sm !text-slate-600">
                  Real-time notification delivery to registered donors with immediate push notifications and alerts.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-purple-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Users className="!h-6 !w-6 !text-purple-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Wide Reach</h3>
                <p className="!text-sm !text-slate-600">
                  Connect with thousands of registered donors across multiple cities for emergency blood requests.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
