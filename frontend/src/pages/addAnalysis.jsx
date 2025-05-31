"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FileText, TestTube, Upload, CheckCircle, AlertCircle, Microscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Header from "./header/header"
import Footer from "./footer/footer"

export const AnalysisForm = () => {
  const { id } = useParams()
  const [donationData, setDonationData] = useState({})
  const [AnalysisData, setAnalysisData] = useState({
    IsGood: "",
    donation_id: "",
    AnalysisReport: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/addAnalysis/${id}`)
        setDonationData(response.data)
      } catch (error) {
        console.error("Failed to fetch the donation", error)
        toast({
          title: "Error",
          description: "Failed to load donation data.",
          variant: "destructive",
          duration: 9000,
        })
      }
    }
    fetchDonation()
  }, [id, toast])

  const handleChange = (e) => {
    if (e.target.name === "AnalysisReport") {
      setAnalysisData({ ...AnalysisData, AnalysisReport: e.target.files[0] })
    } else {
      setAnalysisData({ ...AnalysisData, [e.target.name]: e.target.value })
    }
  }

  const handleSelectChange = (value) => {
    setAnalysisData({ ...AnalysisData, IsGood: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("donation_id", donationData.id)
    formData.append("IsGood", AnalysisData.IsGood)
    formData.append("donorCin", donationData.donor.Cin)
    if (AnalysisData.AnalysisReport) {
      formData.append("AnalysisReport", AnalysisData.AnalysisReport)
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/addAnalysis", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      toast({
        title: "Success",
        description: "Analysis data successfully submitted.",
        duration: 9000,
      })
    } catch (error) {
      console.error("Failed to submit form", error.response?.data || error)
      toast({
        title: "Error",
        description: "Failed to submit analysis data.",
        variant: "destructive",
        duration: 9000,
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
                Laboratory Analysis
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Blood Analysis Report
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Complete comprehensive blood analysis and quality assessment for donation ID #{id}
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
                      <Microscope className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="!text-sm !font-medium !text-white/90 !uppercase !tracking-wider">
                        Laboratory Analysis
                      </p>
                      <h2 className="!text-xl !font-bold !text-white">Blood Quality Assessment</h2>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="!px-8 !pb-8">
                <form onSubmit={handleSubmit} className="!space-y-6">
                  {/* Donation Information Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-4">
                      <FileText className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Donation Information</h3>
                    </div>

                    <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-4">
                      <div className="!space-y-2">
                        <label className="!text-sm !font-semibold !text-slate-700">Donation ID</label>
                        <Input
                          type="text"
                          value={donationData.id || ""}
                          readOnly
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label className="!text-sm !font-semibold !text-slate-700">Donor Name</label>
                        <Input
                          type="text"
                          value={donationData.donor?.Name || "Loading..."}
                          readOnly
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label className="!text-sm !font-semibold !text-slate-700">Donor CIN</label>
                        <Input
                          type="text"
                          value={donationData.donor?.Cin || "Loading..."}
                          readOnly
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Analysis Assessment Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-4">
                      <TestTube className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Quality Assessment</h3>
                    </div>

                    <div className="!space-y-2">
                      <label className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2">
                        <CheckCircle className="!h-4 !w-4 !text-red-600" />
                        Is the Blood Good?
                      </label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus:!ring-red-500 focus:!ring-offset-0 focus:!border-red-500">
                          <SelectValue placeholder="Select blood quality status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Yes - Blood is suitable for use</SelectItem>
                          <SelectItem value="0">No - Blood requires rejection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Report Upload Section */}
                  <div className="!space-y-4">
                    <div className="!flex !items-center !gap-2 !mb-4">
                      <Upload className="!h-5 !w-5 !text-red-600" />
                      <h3 className="!text-lg !font-semibold !text-slate-900">Analysis Report</h3>
                    </div>

                    <div className="!space-y-2">
                      <label className="!text-sm !font-semibold !text-slate-700">Upload Report File</label>
                      <Input
                        type="file"
                        name="AnalysisReport"
                        onChange={handleChange}
                        className="!bg-slate-50 !border-slate-200 !text-slate-900 !h-12 !px-4 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500"
                      />
                      <p className="!text-xs !text-slate-500">Attach the detailed analysis report file here.</p>
                    </div>
                  </div>

                  {/* Professional Information Box */}
                  <div className="!bg-red-50 !border !border-red-200 !p-4 !rounded-lg">
                    <div className="!flex !items-start !gap-3">
                      <AlertCircle className="!h-5 !w-5 !text-red-600 !mt-0.5 !flex-shrink-0" />
                      <div className="!text-sm !text-red-700">
                        <p className="!font-semibold !mb-1">Analysis Guidelines:</p>
                        <ul className="!space-y-1 !text-red-600">
                          <li>• Ensure all test results are verified and documented</li>
                          <li>• Upload comprehensive analysis report with findings</li>
                          <li>• Mark blood quality status based on laboratory standards</li>
                          <li>• Follow safety protocols for blood handling</li>
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
                        <TestTube className="!mr-2 !h-5 !w-5" />
                      )}
                      {isSubmitting ? "Submitting Analysis..." : "Submit Analysis"}
                    </Button>
                  </div>
                </form>
              </CardContent>

              {/* Professional Footer */}
              <CardFooter className="!border-t !border-slate-200 !bg-red-50 !py-4 !px-8">
                <div className="!flex !items-center !justify-between !w-full">
                  <div className="!flex !items-center !gap-2">
                    <CheckCircle className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">Quality Assured Process</span>
                  </div>
                  <div className="!flex !items-center !gap-2">
                    <AlertCircle className="!h-4 !w-4 !text-red-600" />
                    <span className="!text-xs !text-slate-600">Laboratory Certified</span>
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
                  <Microscope className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Comprehensive Analysis</h3>
                <p className="!text-sm !text-slate-600">
                  Complete blood quality assessment with detailed laboratory testing and verification.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <CheckCircle className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Quality Assurance</h3>
                <p className="!text-sm !text-slate-600">
                  Rigorous quality control processes ensuring blood safety and suitability for transfusion.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-purple-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <FileText className="!h-6 !w-6 !text-purple-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Detailed Reporting</h3>
                <p className="!text-sm !text-slate-600">
                  Comprehensive documentation and reporting for complete traceability and compliance.
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

export default AnalysisForm
