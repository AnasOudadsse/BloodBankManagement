"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { User, Phone, Mail, Calendar, MapPin, Home, Lock, Droplets, Upload, Users, Heart, Shield } from "lucide-react"
import { useNavigate } from "react-router"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@chakra-ui/react"
import { Header } from "@/components/header";
import Footer from "./footer/footer"

export function DonorForm() {
  const [BloodType, setBloodType] = useState([])
  const navigate = useNavigate()
  const [role, setRole] = useState("Donor")
  const [DonorData, setDonorData] = useState({
    Cin: "",
    Name: "",
    PhoneNumber: "",
    Email: "",
    BirthDate: "",
    Gender: "",
    EncryptedPassword: "",
    Role: "Donor",
    City: "",
    Address: "",
    Image: "",
    blood_id: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  useEffect(() => {
    const fetchBloodType = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getBloodType")
        setBloodType(response.data)
      } catch (error) {
        console.error("Failed to fetch BloodType", error)
      }
    }
    fetchBloodType()
  }, [])

  const handleChange = (e) => {
    if (e.target.name === "Image") {
      setDonorData({ ...DonorData, Image: e.target.files[0] })
    } else {
      setDonorData({ ...DonorData, [e.target.name]: e.target.value })
    }
  }

  const handleSelectChange = (name, value) => {
    setDonorData({ ...DonorData, [name]: value })
  }

  useEffect(() => {
    // Check for role in local storage
    setRole(localStorage.getItem("role"))
    console.log("role :", role)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData()

    // Append all the DonorData properties to formData
    for (const key in DonorData) {
      formData.append(key, DonorData[key])
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/addDonor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      toast({
        title: "Donor added successfully!",
        status: "success",
      })
    } catch (error) {
      toast({
        title: "Failed to add donor.",
        status: "error",
      })
    } finally {
      setIsSubmitting(false)
    }

    if (role === "Donor") {
      navigate("/login")
    } else if (role === "Admin" || role === "BloodCampStaff") {
      navigate("/")
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
                Blood Donation Registration
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Donor Registration System
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Join our life-saving community of blood donors and help save lives in your community.
            </p>
          </motion.div>

          {/* Main Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!max-w-3xl !mx-auto !mb-20"
          >
            <Card className="!relative !bg-white !border-2 !border-slate-200 !overflow-hidden !shadow-xl">
              {/* Professional header */}
              <div className="!relative !bg-gradient-to-r !from-red-600 !to-red-700 !p-6 !transform !-skew-y-1 !-mt-1 !mb-6">
                <div className="!transform !skew-y-1">
                  <div className="!flex !items-center !gap-4 !mb-2">
                    <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                      <Heart className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="!text-sm !font-medium !text-white/90 !uppercase !tracking-wider">
                        Donor Registration
                      </p>
                      <h2 className="!text-xl !font-bold !text-white">Join Our Life-Saving Community</h2>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="!px-8 !pb-8">
                <form onSubmit={handleSubmit} className="!space-y-8">
                  {/* Personal Information Section */}
                  <div className="!space-y-6">
                    <div className="!flex !items-center !gap-3 !mb-4">
                      <User className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Personal Information</h3>
                      <div className="!flex-1 !h-px !bg-slate-200" />
                    </div>

                    <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
                      <div className="!space-y-2">
                        <label
                          htmlFor="Cin"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <User className="!h-4 !w-4 !text-red-600" />
                          CIN
                        </label>
                        <Input
                          id="Cin"
                          name="Cin"
                          value={DonorData.Cin}
                          onChange={handleChange}
                          placeholder="Enter CIN"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="Name"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <User className="!h-4 !w-4 !text-red-600" />
                          Full Name
                        </label>
                        <Input
                          id="Name"
                          name="Name"
                          value={DonorData.Name}
                          onChange={handleChange}
                          placeholder="Enter full name"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="BirthDate"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Calendar className="!h-4 !w-4 !text-red-600" />
                          Birth Date
                        </label>
                        <Input
                          id="BirthDate"
                          name="BirthDate"
                          type="date"
                          value={DonorData.BirthDate}
                          onChange={handleChange}
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="Gender"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Users className="!h-4 !w-4 !text-red-600" />
                          Gender
                        </label>
                        <Select
                          value={DonorData.Gender}
                          onValueChange={(value) => handleSelectChange("Gender", value)}
                          required
                        >
                          <SelectTrigger className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus:!ring-red-500 focus:!ring-offset-0 focus:!border-red-500 focus:!bg-white !transition-all !duration-200">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information Section */}
                  <div className="!space-y-6">
                    <div className="!flex !items-center !gap-3 !mb-4">
                      <Phone className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Contact Information</h3>
                      <div className="!flex-1 !h-px !bg-slate-200" />
                    </div>

                    <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
                      <div className="!space-y-2">
                        <label
                          htmlFor="PhoneNumber"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Phone className="!h-4 !w-4 !text-red-600" />
                          Phone Number
                        </label>
                        <Input
                          id="PhoneNumber"
                          name="PhoneNumber"
                          value={DonorData.PhoneNumber}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="Email"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Mail className="!h-4 !w-4 !text-red-600" />
                          Email
                        </label>
                        <Input
                          id="Email"
                          name="Email"
                          value={DonorData.Email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="City"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <MapPin className="!h-4 !w-4 !text-red-600" />
                          City
                        </label>
                        <Input
                          id="City"
                          name="City"
                          value={DonorData.City}
                          onChange={handleChange}
                          placeholder="Enter city"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="Address"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Home className="!h-4 !w-4 !text-red-600" />
                          Address
                        </label>
                        <Input
                          id="Address"
                          name="Address"
                          value={DonorData.Address}
                          onChange={handleChange}
                          placeholder="Enter address"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Information Section */}
                  <div className="!space-y-6">
                    <div className="!flex !items-center !gap-3 !mb-4">
                      <Droplets className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Medical Information</h3>
                      <div className="!flex-1 !h-px !bg-slate-200" />
                    </div>

                    <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
                      <div className="!space-y-2">
                        <label
                          htmlFor="blood_id"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Droplets className="!h-4 !w-4 !text-red-600" />
                          Blood Type
                        </label>
                        <Select
                          value={DonorData.blood_id}
                          onValueChange={(value) => handleSelectChange("blood_id", value)}
                          required
                        >
                          <SelectTrigger className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus:!ring-red-500 focus:!ring-offset-0 focus:!border-red-500 focus:!bg-white !transition-all !duration-200">
                            <SelectValue placeholder="Select blood type" />
                          </SelectTrigger>
                          <SelectContent>
                            {BloodType.map((type) => (
                              <SelectItem key={type.id} value={type.id.toString()}>
                                {type.BloodType}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="Image"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Upload className="!h-4 !w-4 !text-red-600" />
                          Profile Image
                        </label>
                        <Input
                          id="Image"
                          name="Image"
                          type="file"
                          onChange={handleChange}
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Account Information Section */}
                  <div className="!space-y-6">
                    <div className="!flex !items-center !gap-3 !mb-4">
                      <Lock className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Account Information</h3>
                      <div className="!flex-1 !h-px !bg-slate-200" />
                    </div>

                    <div className="!grid !grid-cols-1 !gap-6">
                      <div className="!space-y-2">
                        <label
                          htmlFor="EncryptedPassword"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Lock className="!h-4 !w-4 !text-red-600" />
                          Password
                        </label>
                        <Input
                          id="EncryptedPassword"
                          name="EncryptedPassword"
                          type="password"
                          value={DonorData.EncryptedPassword}
                          onChange={handleChange}
                          placeholder="Enter password"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information Box */}
                  <div className="!bg-red-50 !border !border-red-200 !p-4 !rounded-lg">
                    <div className="!flex !items-start !gap-3">
                      <Shield className="!h-5 !w-5 !text-red-600 !mt-0.5 !flex-shrink-0" />
                      <div className="!text-sm !text-red-700">
                        <p className="!font-semibold !mb-1">Registration Requirements:</p>
                        <ul className="!space-y-1 !text-red-600">
                          <li>• Must be 18-65 years old</li>
                          <li>• Weight must be at least 50kg</li>
                          <li>• Valid identification required</li>
                          <li>• Medical screening will be conducted</li>
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
                        <Heart className="!mr-2 !h-5 !w-5" />
                      )}
                      {isSubmitting ? "Registering Donor..." : "Register as Donor"}
                    </Button>
                  </div>
                </form>
              </CardContent>

              {/* Professional Footer */}
              <CardFooter className="!border-t !border-slate-200 !bg-red-50 !py-4 !px-8">
                <div className="!flex !items-center !justify-between !w-full">
                  <div className="!flex !items-center !gap-2">
                    <Heart className="!h-4 !w-4 !text-red-600" />
                    <span className="!text-xs !text-slate-600">Save Lives Through Donation</span>
                  </div>
                  <div className="!flex !items-center !gap-2">
                    <Shield className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">Secure & Confidential</span>
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
                <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Heart className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Life-Saving Impact</h3>
                <p className="!text-sm !text-slate-600">
                  Every donation can save up to 3 lives. Join our community of heroes making a difference.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Shield className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Safe & Secure</h3>
                <p className="!text-sm !text-slate-600">
                  All donations follow strict medical protocols with professional healthcare supervision.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-blue-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Users className="!h-6 !w-6 !text-blue-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Community Support</h3>
                <p className="!text-sm !text-slate-600">
                  Join thousands of donors in your community working together to save lives.
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

export default DonorForm
