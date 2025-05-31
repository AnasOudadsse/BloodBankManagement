"use client"

import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Tent, Plus, CheckCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import Header from "./header/header"
import Footer from "./footer/footer"

export function BloodCampForm() {
  const [BloodCampData, setBloodCampData] = useState({
    Name: "",
    Address: "",
    StartTime: "",
    EndTime: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    setBloodCampData({ ...BloodCampData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/addBloodCamp", BloodCampData)
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Blood camp added successfully!",
          duration: 5000,
        })
        // Clear form
        setBloodCampData({
          Name: "",
          Address: "",
          StartTime: "",
          EndTime: "",
        })
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "There was an error submitting the form: " + err.message,
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
              <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">Blood Donation</span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Register Blood Camp
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Fill out the form below to add a new blood donation camp to our network.
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
                      <Tent className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="!text-sm !font-medium !text-white/90 !uppercase !tracking-wider">
                        Blood Camp Registration
                      </p>
                      <h2 className="!text-xl !font-bold !text-white">Add New Donation Camp</h2>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="!px-8 !pb-8">
                <form onSubmit={handleSubmit} className="!space-y-6">
                  {/* Blood Camp Name Field */}
                  <div className="!space-y-2">
                    <label
                      htmlFor="Name"
                      className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                    >
                      <Tent className="!h-4 !w-4 !text-red-600" />
                      Blood Camp Name
                    </label>
                    <Input
                      id="Name"
                      type="text"
                      name="Name"
                      value={BloodCampData.Name}
                      onChange={handleChange}
                      placeholder="Enter blood camp name"
                      required
                      className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                    />
                  </div>

                  {/* Address Field */}
                  <div className="!space-y-2">
                    <label
                      htmlFor="Address"
                      className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                    >
                      <MapPin className="!h-4 !w-4 !text-red-600" />
                      Address
                    </label>
                    <Input
                      id="Address"
                      type="text"
                      name="Address"
                      value={BloodCampData.Address}
                      onChange={handleChange}
                      placeholder="Enter complete address"
                      required
                      className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                    />
                  </div>

                  {/* Start Time Field */}
                  <div className="!space-y-2">
                    <label
                      htmlFor="StartTime"
                      className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                    >
                      <Calendar className="!h-4 !w-4 !text-red-600" />
                      Start Time
                    </label>
                    <Input
                      id="StartTime"
                      type="datetime-local"
                      name="StartTime"
                      value={BloodCampData.StartTime}
                      onChange={handleChange}
                      required
                      className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                    />
                  </div>

                  {/* End Time Field */}
                  <div className="!space-y-2">
                    <label
                      htmlFor="EndTime"
                      className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                    >
                      <Clock className="!h-4 !w-4 !text-red-600" />
                      End Time
                    </label>
                    <Input
                      id="EndTime"
                      type="datetime-local"
                      name="EndTime"
                      value={BloodCampData.EndTime}
                      onChange={handleChange}
                      required
                      className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                    />
                  </div>

                  {/* Professional Information Box */}
                  <div className="!bg-red-50 !border !border-red-200 !p-4 !rounded-lg">
                    <div className="!flex !items-start !gap-3">
                      <CheckCircle className="!h-5 !w-5 !text-red-600 !mt-0.5 !flex-shrink-0" />
                      <div className="!text-sm !text-red-700">
                        <p className="!font-semibold !mb-1">Blood Camp Requirements:</p>
                        <ul className="!space-y-1 !text-red-600">
                          <li>• Proper medical staff and equipment</li>
                          <li>• Accessible location with parking</li>
                          <li>• Minimum 4-hour duration</li>
                          <li>• Compliance with health regulations</li>
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
                        <Plus className="!mr-2 !h-5 !w-5" />
                      )}
                      {isSubmitting ? "Registering Camp..." : "Register Blood Camp"}
                    </Button>
                  </div>
                </form>
              </CardContent>

              {/* Professional Footer */}
              <CardFooter className="!border-t !border-slate-200 !bg-red-50 !py-4 !px-8">
                <div className="!flex !items-center !justify-between !w-full">
                  <div className="!flex !items-center !gap-2">
                    <CheckCircle className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">Secure Registration Process</span>
                  </div>
                  <div className="!flex !items-center !gap-2">
                    <AlertCircle className="!h-4 !w-4 !text-red-600" />
                    <span className="!text-xs !text-slate-600">Health Compliant</span>
                  </div>
                </div>
              </CardFooter>

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
                <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                  <Tent className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Easy Registration</h3>
                <p className="!text-sm !text-slate-600">
                  Simple process to register blood donation camps with all necessary details.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                  <Calendar className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Scheduling System</h3>
                <p className="!text-sm !text-slate-600">
                  Precise scheduling with start and end times for better donor planning.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-purple-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                  <MapPin className="!h-6 !w-6 !text-purple-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Location Management</h3>
                <p className="!text-sm !text-slate-600">
                  Track and manage blood camp locations for better accessibility and planning.
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

export default BloodCampForm
