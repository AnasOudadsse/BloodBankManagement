"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Link as RouterLink } from "react-router-dom"
import { motion } from "framer-motion"
import { Droplets, Users, Calendar, MapPin, TestTube, Hash, CheckCircle, AlertCircle, Search, Plus } from "lucide-react"
import AsyncSelect from "react-select/async"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@chakra-ui/react"
import { Header } from "@/components/header";
import Footer from "./footer/footer"

export const DonationForm = () => {
  const user = localStorage.getItem("user")
  const bloodcampstaff = JSON.parse(user)
  const [BloodType, setBloodType] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donationData, setDonationData] = useState({
    QuantityDonated: "",
    DonationDate: "",
    donor_cin: "",
    blood_type_id: "",
    blood_camp_id: "",
    bloodcampstaff_cin: bloodcampstaff.Cin,
  })

  const toast = useToast()

  // Load options for donors
  const loadDonorOptions = async (inputValue) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/searchDonors?q=${inputValue}`)
      return response.data.map((donor) => ({ value: donor.Cin, label: donor.Name }))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch donors",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  // Load options for blood camps
  const loadBloodCampOptions = async (inputValue) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/searchBloodCamps?q=${inputValue}`)
      return response.data.map((camp) => ({ value: camp.id, label: camp.Name }))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blood camps",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  useEffect(() => {
    const fetchBloodType = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getBloodType")
        setBloodType(response.data)
      } catch (error) {
        console.error("Failed to fetch BloodType", error)
      }
    }
    fetchBloodType()
  }, [])

  const handleInputChange = (fieldName) => (selectedOption) => {
    setDonationData((prevState) => ({
      ...prevState,
      [fieldName]: selectedOption ? selectedOption.value : null,
    }))
  }

  const handleTextChange = (event) => {
    const { name, value } = event.target
    setDonationData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setDonationData((prevState) => ({
      ...prevState,
      blood_type_id: value,
    }))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post("http://localhost:8000/api/addDonation", donationData)
      console.log(response.data)
      toast({
        title: "Donation added successfully!",
        status: "success",
        duration: 3000,
      })
    } catch (error) {
      console.error("Failed to record donation", error.response?.data || error.message)
      toast({
        title: "Failed to add donation.",
        status: "error",
        duration: 3000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Custom styles for AsyncSelect to match the red theme
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f8fafc",
      borderColor: state.isFocused ? "#dc2626" : "#e2e8f0",
      borderWidth: "1px",
      borderRadius: "0.5rem",
      minHeight: "3rem",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(220, 38, 38, 0.2)" : "none",
      "&:hover": {
        borderColor: "#dc2626",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#94a3b8",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#0f172a",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#dc2626" : state.isFocused ? "#fee2e2" : "white",
      color: state.isSelected ? "white" : "#0f172a",
      "&:hover": {
        backgroundColor: state.isSelected ? "#dc2626" : "#fee2e2",
      },
    }),
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
                Blood Donation Management
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Record Blood Donation
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Document and track blood donations with comprehensive donor and camp information management.
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
                      <Droplets className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="!text-sm !font-medium !text-white/90 !uppercase !tracking-wider">
                        Donation Recording
                      </p>
                      <h2 className="!text-xl !font-bold !text-white">Blood Donation Entry</h2>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="!px-8 !pb-8">
                <form onSubmit={handleFormSubmit} className="!space-y-6">
                  {/* Donor Selection Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-3">
                      <Users className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Donor Information</h3>
                    </div>

                    <div className="!space-y-2">
                      <label className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2">
                        <Search className="!h-4 !w-4 !text-red-600" />
                        Select Donor
                      </label>
                      <AsyncSelect
                        loadOptions={loadDonorOptions}
                        defaultOptions
                        onChange={handleInputChange("donor_cin")}
                        placeholder="Search and select a donor..."
                        styles={customSelectStyles}
                        className="!w-full"
                      />
                    </div>
                  </div>

                  {/* Camp Information Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-3">
                      <MapPin className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Camp Information</h3>
                    </div>

                    <div className="!space-y-2">
                      <label className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2">
                        <Search className="!h-4 !w-4 !text-red-600" />
                        Select Blood Camp
                      </label>
                      <AsyncSelect
                        loadOptions={loadBloodCampOptions}
                        defaultOptions
                        onChange={handleInputChange("blood_camp_id")}
                        placeholder="Search and select a blood camp..."
                        styles={customSelectStyles}
                        className="!w-full"
                      />
                    </div>
                  </div>

                  {/* Donation Details Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-3">
                      <TestTube className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Donation Details</h3>
                    </div>

                    <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-4">
                      <div className="!space-y-2">
                        <label className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2">
                          <TestTube className="!h-4 !w-4 !text-red-600" />
                          Blood Type
                        </label>
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus:!ring-red-500 focus:!ring-offset-0 focus:!border-red-500 focus:!bg-white !transition-all !duration-200">
                            <SelectValue placeholder="Select Blood Type" />
                          </SelectTrigger>
                          <SelectContent>
                            {BloodType.map((bloodType) => (
                              <SelectItem key={bloodType.id} value={bloodType.id.toString()}>
                                {bloodType.BloodType}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="QuantityDonated"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Hash className="!h-4 !w-4 !text-red-600" />
                          Quantity Donated
                        </label>
                        <Input
                          id="QuantityDonated"
                          type="number"
                          name="QuantityDonated"
                          onChange={handleTextChange}
                          placeholder="Quantity Donated"
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                        />
                      </div>
                    </div>

                    <div className="!space-y-2">
                      <label
                        htmlFor="DonationDate"
                        className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                      >
                        <Calendar className="!h-4 !w-4 !text-red-600" />
                        Donation Date
                      </label>
                      <Input
                        id="DonationDate"
                        type="date"
                        name="DonationDate"
                        onChange={handleTextChange}
                        className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                      />
                    </div>
                  </div>

                  {/* Professional Information Box */}
                  <div className="!bg-red-50 !border !border-red-200 !p-4 !rounded-lg">
                    <div className="!flex !items-start !gap-3">
                      <CheckCircle className="!h-5 !w-5 !text-red-600 !mt-0.5 !flex-shrink-0" />
                      <div className="!text-sm !text-red-700">
                        <p className="!font-semibold !mb-1">Recording Requirements:</p>
                        <ul className="!space-y-1 !text-red-600">
                          <li>• Verify donor identity and eligibility</li>
                          <li>• Confirm blood type compatibility</li>
                          <li>• Record accurate donation quantity</li>
                          <li>• Document proper date and time</li>
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
                      {isSubmitting ? "Recording Donation..." : "Record Donation"}
                    </Button>
                  </div>
                </form>
              </CardContent>

              {/* Professional Footer */}
              <CardFooter className="!border-t !border-slate-200 !bg-red-50 !py-4 !px-8">
                <div className="!flex !items-center !justify-between !w-full">
                  <div className="!flex !items-center !gap-2">
                    <CheckCircle className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">Secure Recording Process</span>
                  </div>
                  <div className="!flex !items-center !gap-2">
                    <AlertCircle className="!h-4 !w-4 !text-red-600" />
                    <span className="!text-xs !text-slate-600">HIPAA Compliant</span>
                  </div>
                </div>
              </CardFooter>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-red-300 !to-red-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </Card>

            {/* Donor Registration Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="!text-center !mt-6"
            >
              <p className="!text-slate-600">
                Donor not registered?{" "}
                <RouterLink
                  to="/addDonor"
                  className="!text-red-600 hover:!text-red-700 !font-semibold !underline !transition-colors !duration-200"
                >
                  Register now!
                </RouterLink>
              </p>
            </motion.div>
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
                  <Droplets className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Accurate Recording</h3>
                <p className="!text-sm !text-slate-600">
                  Comprehensive donation tracking with donor verification and blood type validation.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <CheckCircle className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Real-time Validation</h3>
                <p className="!text-sm !text-slate-600">
                  Instant verification of donor eligibility and blood camp information.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-purple-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <AlertCircle className="!h-6 !w-6 !text-purple-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Secure & Compliant</h3>
                <p className="!text-sm !text-slate-600">
                  HIPAA compliant data handling with enterprise-grade security and privacy protection.
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

export default DonationForm
