"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Twitter,
  Shield,
  Lock,
  Mail,
  User,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export const BloodDonationLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({ Email: "", EncryptedPassword: "", Role: "Guest" })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("donor")
  const navigate = useNavigate()
  const { toast } = useToast()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    setError("") // Reset error message
    setIsLoading(true)

    try {
      // API call to authentication endpoint
      const response = await axios.post("http://127.0.0.1:8000/api/login", credentials, {
        headers: { "Content-Type": "application/json" },
      })

      // Check response
      if (response.status === 200) {
        const data = response.data

        // Handle success
        localStorage.setItem("token", data.access_token)
        localStorage.setItem("role", data.role)
        localStorage.setItem("user", JSON.stringify(data.user))

        // Show success toast
        toast({
          title: "Login successful",
          description: "Welcome back to Blood Nation.",
          variant: "success",
        })

        // Navigate based on role
        navigate("/dashboard")
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred during login"
      setError(errorMessage)

      // Show error toast
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

        {/* Subtle blood cells */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-100"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: Math.random() * 50 + 50,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
              }}
            />
          ))}
        </div>

        {/* Subtle accent colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100/30 rounded-full mix-blend-multiply blur-3xl"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-200/20 rounded-full mix-blend-multiply blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white border-b border-gray-100 px-6 py-4 md:py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.5 10H8.5L12 2Z" fill="#FF2D55" />
                <path
                  d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z"
                  fill="#FF2D55"
                />
              </svg>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Blood Nation</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Locations
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <MapPin className="h-4 w-4" />
                    <span className="sr-only">Find locations</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Find donation centers</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
            >
              <User className="h-4 w-4" />
              <span>Register</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 md:py-12">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center">
          {/* Left side - Content (60%) */}
          <div className="w-full lg:w-[60%] space-y-8 pr-0 lg:pr-[5%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge variant="outline" className="px-3 py-1 text-xs border-red-500/30 text-red-600 bg-red-50">
                <Clock className="mr-1 h-3 w-3" /> Urgent need for O- and AB+ blood types
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Give <span className="text-red-600">blood.</span>
                <br />
                Save <span className="text-red-600">lives.</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Your donation can save up to three lives. Join our community of heroes making a difference every day.
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 border border-red-100">
                    <User className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">5,230+</div>
                    <div className="text-xs text-gray-500">Active donors</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 border border-red-100">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">10,000+</div>
                    <div className="text-xs text-gray-500">Lives saved</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 border border-red-100">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">24/7</div>
                    <div className="text-xs text-gray-500">Support available</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blood drop animation */}
            <motion.div
              className="hidden lg:block relative h-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="absolute inset-0 flex items-end">
                <motion.div
                  className="absolute left-12 bottom-0"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 0C20 0 40 20 40 40C40 51.0457 31.0457 60 20 60C8.9543 60 0 51.0457 0 40C0 20 20 0 20 0Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF2D55" />
                        <stop offset="1" stopColor="#C4002B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute left-28 bottom-0"
                  animate={{
                    y: [0, -25, 0],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 4,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <svg width="30" height="45" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 0C20 0 40 20 40 40C40 51.0457 31.0457 60 20 60C8.9543 60 0 51.0457 0 40C0 20 20 0 20 0Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF2D55" />
                        <stop offset="1" stopColor="#C4002B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute left-48 bottom-0"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <svg width="20" height="30" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 0C20 0 40 20 40 40C40 51.0457 31.0457 60 20 60C8.9543 60 0 51.0457 0 40C0 20 20 0 20 0Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF2D55" />
                        <stop offset="1" stopColor="#C4002B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              {/* Heartbeat line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-200"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-full bg-red-500"
                  animate={{
                    scaleX: [0, 0.2, 0.3, 0.7, 0.8, 1],
                    opacity: [0.5, 1, 0.5, 1, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Upcoming donation events - Mobile only */}
            <div className="lg:hidden p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2 text-gray-900">
                <Calendar className="h-4 w-4 text-red-600" />
                Upcoming Donation Events
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-700">Central Hospital</span>
                  <span className="text-red-600">Tomorrow, 9AM-5PM</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-700">Downtown Medical Center</span>
                  <span className="text-red-600">Sat, 10AM-3PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gap (10%) - Only visible on large screens */}
          <div className="hidden lg:block lg:w-[10%]"></div>

          {/* Right side - Login form (30%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[30%] mt-10 lg:mt-0"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-50 rounded-full"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-red-50 rounded-full"></div>

              {/* Login tabs */}
              <Tabs defaultValue="donor" className="mb-6" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 bg-gray-100 border border-gray-200">
                  <TabsTrigger value="donor" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                    Donor
                  </TabsTrigger>
                  <TabsTrigger value="staff" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                    Medical Staff
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="donor" className="mt-4 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Sign in</h2>
                    <p className="text-gray-500 mt-1 text-sm">Welcome back. Enter your credentials to continue.</p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label htmlFor="Email" className="text-sm text-gray-700 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-red-600" />
                          Email address
                        </label>
                        <div className="relative">
                          <Input
                            id="Email"
                            name="Email"
                            type="email"
                            value={credentials.Email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            required
                            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 h-10 px-3 rounded-md focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:border-red-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="EncryptedPassword" className="text-sm text-gray-700 flex items-center gap-2">
                          <Lock className="h-4 w-4 text-red-600" />
                          Password
                        </label>
                        <div className="relative">
                          <Input
                            id="EncryptedPassword"
                            name="EncryptedPassword"
                            type={showPassword ? "text" : "password"}
                            value={credentials.EncryptedPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 h-10 px-3 rounded-md focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:border-red-500 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-700 transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 focus:ring-offset-0"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                        Forgot?
                      </a>
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-md text-sm"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-1">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-md shadow-sm transition-all duration-300"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="h-5 w-5 rounded-full border-2 border-current border-t-transparent"
                          />
                        ) : (
                          <span className="flex items-center justify-center gap-2 text-sm font-medium">
                            Sign in
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </button>
                    </div>

                    <div className="text-center mt-4">
                      <p className="text-gray-500 text-sm">
                        Don't have an account?{" "}
                        <Link to="/addDonor" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                          Register
                        </Link>
                      </p>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="staff" className="mt-4 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Staff Login</h2>
                    <p className="text-gray-500 mt-1 text-sm">Access the medical staff portal.</p>
                  </div>

                  <form className="space-y-5">
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label htmlFor="staffId" className="text-sm text-gray-700 flex items-center gap-2">
                          <User className="h-4 w-4 text-red-600" />
                          Staff ID
                        </label>
                        <Input
                          id="staffId"
                          name="staffId"
                          placeholder="Enter your staff ID"
                          required
                          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 h-10 px-3 rounded-md focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:border-red-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="staffPassword" className="text-sm text-gray-700 flex items-center gap-2">
                          <Lock className="h-4 w-4 text-red-600" />
                          Password
                        </label>
                        <div className="relative">
                          <Input
                            id="staffPassword"
                            name="staffPassword"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 h-10 px-3 rounded-md focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:border-red-500 pr-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="staff-remember"
                          name="staff-remember"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 focus:ring-offset-0"
                        />
                        <label htmlFor="staff-remember" className="ml-2 block text-sm text-gray-500">
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                        Forgot?
                      </a>
                    </div>

                    <div className="pt-1">
                      <Button
                        type="submit"
                        className="w-full h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-md shadow-sm transition-all duration-300"
                      >
                        <span className="flex items-center justify-center gap-2 text-sm font-medium">
                          Staff Login
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </div>

                    <div className="flex items-center justify-center mt-4 gap-2">
                      <Shield className="h-4 w-4 text-red-600" />
                      <span className="text-xs text-gray-500">Secure medical staff portal</span>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Security badge */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500">Secure login</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500">HIPAA Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 bg-white py-6 px-6 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.5 10H8.5L12 2Z" fill="#FF2D55" />
              <path
                d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z"
                fill="#FF2D55"
              />
            </svg>
            <p className="text-gray-500 text-sm">© 2023 Blood Nation. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BloodDonationLogin
