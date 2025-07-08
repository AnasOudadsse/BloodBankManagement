"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  Activity,
  Users,
  Building,
  FileText,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    Email: "",
    EncryptedPassword: "",
    Role: "Guest",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("donor");

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        credentials,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        const data = response.data;

        // Store authentication data
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("user", JSON.stringify(data.user));

        console.log("data" , data);
        
        // Redirect based on role
        if (data.role === "Admin") {
          navigate("/dashboard");
        } else {
          // Navigate to dashboard (or other page) for other roles
          navigate("/dashboard");
        }
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Only render Header if user is already logged in
  const isLoggedIn = !!localStorage.getItem("token");

  if (!mounted) return null;

  return (
    <div className="!min-h-screen !w-full !bg-white !text-slate-900 !flex !flex-col">
      {/* Professional background pattern */}
      <div className="!absolute !inset-0 !overflow-hidden !pointer-events-none">
        <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

        {/* Creative geometric elements */}
        <div className="!absolute !top-20 !left-20 !w-1 !h-32 !bg-red-200 !transform !rotate-12" />
        <div className="!absolute !top-40 !right-40 !w-2 !h-24 !bg-slate-200 !transform !-rotate-12" />
        <div className="!absolute !bottom-40 !left-40 !w-1 !h-28 !bg-red-100 !transform !rotate-45" />
        <div className="!absolute !bottom-20 !right-20 !w-2 !h-20 !bg-slate-100 !transform !-rotate-45" />
      </div>

      {/* Professional Header */}
      {isLoggedIn && <Header />}

      {/* Main content */}
      <main className="!relative !z-10 !flex-1 !flex !flex-col !items-center !justify-center !px-6 !py-8 md:!py-12">
        <div className="!w-full !max-w-7xl !flex !flex-col lg:!flex-row !items-center">
          {/* Left side - Professional Content (60%) */}
          <div className="!w-full lg:!w-[60%] !space-y-8 !pr-0 lg:!pr-[5%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="!space-y-6"
            >
              <div className="!flex !items-center !gap-3 !mb-6">
                <div className="!w-1 !h-8 !bg-red-600" />
                <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
                  Professional Healthcare Platform
                </span>
              </div>

              <div className="!px-4 !py-2 !bg-red-50 !border !border-red-200 !text-xs !font-semibold !text-red-600 !uppercase !tracking-wider !inline-flex !items-center !gap-2">
                <Clock className="!h-3 !w-3" />
                Critical Need: O- and AB+ Blood Types
              </div>

              <h1 className="!text-4xl md:!text-5xl lg:!text-6xl !font-bold !leading-tight !text-slate-900">
                Professional Blood
                <br />
                <span className="!text-red-600">Donation Services</span>
              </h1>

              <p className="!text-lg !text-slate-600 !max-w-2xl !leading-relaxed">
                Join our certified medical network where every donation is
                professionally managed through evidence-based protocols,
                ensuring maximum impact for patient care and community health
                outcomes.
              </p>

              {/* Professional metrics */}
              <div className="!grid !grid-cols-1 sm:!grid-cols-3 !gap-6 !pt-4">
                <div className="!bg-white !border !border-slate-200 !p-4">
                  <div className="!flex !items-center !gap-3 !mb-2">
                    <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                      <Users className="!h-4 !w-4 !text-white" />
                    </div>
                    <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                      Active Network
                    </div>
                  </div>
                  <div className="!text-xl !font-bold !text-slate-900">
                    47,500+
                  </div>
                  <div className="!text-xs !text-slate-600">
                    Certified Donors
                  </div>
                </div>

                <div className="!bg-white !border !border-slate-200 !p-4">
                  <div className="!flex !items-center !gap-3 !mb-2">
                    <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                      <Activity className="!h-4 !w-4 !text-white" />
                    </div>
                    <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                      Lives Saved
                    </div>
                  </div>
                  <div className="!text-xl !font-bold !text-slate-900">
                    142,000+
                  </div>
                  <div className="!text-xs !text-slate-600">
                    Through Our Network
                  </div>
                </div>

                <div className="!bg-white !border !border-slate-200 !p-4">
                  <div className="!flex !items-center !gap-3 !mb-2">
                    <div className="!w-8 !h-8 !bg-red-600 !flex !items-center !justify-center">
                      <Building className="!h-4 !w-4 !text-white" />
                    </div>
                    <div className="!text-xs !font-semibold !text-slate-500 !uppercase !tracking-wider">
                      Medical Centers
                    </div>
                  </div>
                  <div className="!text-xl !font-bold !text-slate-900">
                    500+
                  </div>
                  <div className="!text-xs !text-slate-600">
                    Partner Facilities
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="!bg-slate-50 !border !border-slate-200 !p-6"
            >
              <h3 className="!text-sm !font-bold !text-slate-900 !mb-4 !flex !items-center !gap-2">
                <Shield className="!h-4 !w-4 !text-red-600" />
                Professional Certifications & Compliance
              </h3>
              <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-4">
                <div className="!flex !items-center !gap-2 !text-xs !text-slate-600">
                  <div className="!w-6 !h-6 !bg-green-100 !flex !items-center !justify-center">
                    <Shield className="!h-3 !w-3 !text-green-600" />
                  </div>
                  FDA Approved
                </div>
                <div className="!flex !items-center !gap-2 !text-xs !text-slate-600">
                  <div className="!w-6 !h-6 !bg-blue-100 !flex !items-center !justify-center">
                    <FileText className="!h-3 !w-3 !text-blue-600" />
                  </div>
                  HIPAA Compliant
                </div>
                <div className="!flex !items-center !gap-2 !text-xs !text-slate-600">
                  <div className="!w-6 !h-6 !bg-purple-100 !flex !items-center !justify-center">
                    <TrendingUp className="!h-3 !w-3 !text-purple-600" />
                  </div>
                  ISO 9001 Certified
                </div>
                <div className="!flex !items-center !gap-2 !text-xs !text-slate-600">
                  <div className="!w-6 !h-6 !bg-red-100 !flex !items-center !justify-center">
                    <Clock className="!h-3 !w-3 !text-red-600" />
                  </div>
                  24/7 Operations
                </div>
              </div>
            </motion.div>

            {/* Mobile upcoming events */}
            <div className="lg:!hidden !bg-white !border !border-slate-200 !p-4">
              <h3 className="!text-sm !font-bold !text-slate-900 !mb-3 !flex !items-center !gap-2">
                <Calendar className="!h-4 !w-4 !text-red-600" />
                Upcoming Professional Events
              </h3>
              <div className="!space-y-2">
                <div className="!flex !justify-between !items-center !text-xs">
                  <span className="!text-slate-700">
                    Central Medical Facility
                  </span>
                  <span className="!text-red-600 !font-medium">
                    Tomorrow, 9AM-5PM
                  </span>
                </div>
                <div className="!flex !justify-between !items-center !text-xs">
                  <span className="!text-slate-700">
                    Downtown Healthcare Center
                  </span>
                  <span className="!text-red-600 !font-medium">
                    Saturday, 10AM-3PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gap (10%) - Only visible on large screens */}
          <div className="!hidden lg:!block lg:!w-[10%]"></div>

          {/* Right side - Professional Login form (30%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="!w-full lg:!w-[30%] !mt-10 lg:!mt-0"
          >
            <div className="!bg-white !border-2 !border-slate-200 !p-6 !relative !overflow-hidden">
              {/* Professional header */}
              <div className="!relative !bg-gradient-to-r !from-slate-600 !to-slate-700 !p-4 !transform !-skew-y-1 !-mt-6 !-mx-6 !mb-6">
                <div className="!transform !skew-y-1">
                  <div className="!flex !items-center !gap-3">
                    <div className="!w-8 !h-8 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center">
                      <Lock className="!h-4 !w-4 !text-white" />
                    </div>
                    <div>
                      <h2 className="!text-lg !font-bold !text-white">
                        Secure Access Portal
                      </h2>
                      <div className="!text-xs !text-white/80 !uppercase !tracking-wider">
                        Professional Login
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional login tabs */}
              <Tabs
                defaultValue="donor"
                className="!mb-6"
                onValueChange={setActiveTab}
              >
                <TabsList className="!grid !grid-cols-2 !bg-slate-100 !border !border-slate-200">
                  <TabsTrigger
                    value="donor"
                    className="data-[state=active]:!bg-red-600 data-[state=active]:!text-white !text-slate-600 !px-3 "
                  >
                    Donor Portal
                  </TabsTrigger>
                  <TabsTrigger
                    value="staff"
                    className="data-[state=active]:!bg-red-600 data-[state=active]:!text-white !text-slate-600 !px-3"
                  >
                    Medical Staff
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="donor" className="!mt-6 !space-y-4">
                  <div>
                    <h3 className="!text-lg !font-bold !text-slate-900">
                      Donor Authentication
                    </h3>
                    <p className="!text-slate-600 !mt-1 !text-sm">
                      Access your professional donor profile and medical
                      records.
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="!space-y-5">
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label
                          htmlFor="Email"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Mail className="!h-4 !w-4 !text-red-600" />
                          Professional Email
                        </label>
                        <Input
                          id="Email"
                          name="Email"
                          type="email"
                          value={credentials.Email}
                          onChange={handleChange}
                          placeholder="professional@email.com"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-10 !px-3 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="EncryptedPassword"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Lock className="!h-4 !w-4 !text-red-600" />
                          Secure Password
                        </label>
                        <div className="!relative">
                          <Input
                            id="EncryptedPassword"
                            name="EncryptedPassword"
                            type={showPassword ? "text" : "password"}
                            value={credentials.EncryptedPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-10 !px-3 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 !pr-10 focus:!bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="!absolute !right-0 !top-0 !h-full !px-3 !text-slate-400 hover:!text-slate-700 !transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="!h-4 !w-4" />
                            ) : (
                              <Eye className="!h-4 !w-4" />
                            )}
                            <span className="!sr-only">
                              {showPassword ? "Hide password" : "Show password"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="!flex !items-center !justify-between">
                      <div className="!flex !items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="!h-4 !w-4 !rounded !border-slate-300 !text-red-600 focus:!ring-red-500 focus:!ring-offset-0"
                        />
                        <label
                          htmlFor="remember-me"
                          className="!ml-2 !block !text-sm !text-slate-600"
                        >
                          Remember credentials
                        </label>
                      </div>
                      <a
                        href="#"
                        className="!text-sm !font-medium !text-red-600 hover:!text-red-700 !transition-colors"
                      >
                        Reset Password
                      </a>
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="!bg-red-50 !border !border-red-200 !text-red-600 !px-3 !py-2 !text-sm"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="!pt-1">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="!w-full !h-10 !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !transition-all !duration-300"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="!h-5 !w-5 !rounded-full !border-2 !border-current !border-t-transparent"
                          />
                        ) : (
                          <span className="!flex !items-center !justify-center !gap-2 !text-sm !font-medium">
                            Access Portal
                            <ArrowRight className="!h-4 !w-4" />
                          </span>
                        )}
                      </Button>
                    </div>

                    <div className="!relative !my-4">
                      <div className="!absolute !inset-0 !flex !items-center">
                        <div className="!w-full !border-t !border-slate-200"></div>
                      </div>
                      <div className="!relative !flex !justify-center !text-xs !uppercase">
                        <span className="!bg-white !px-2 !text-slate-500">
                          Professional Integration
                        </span>
                      </div>
                    </div>

                    <div className="!grid !grid-cols-2 !gap-3">
                      <button
                        type="button"
                        className="!flex !items-center !justify-center !gap-2 !h-9 !w-full !border !border-slate-200 !bg-slate-50 !px-3 !text-sm !font-medium !text-slate-700 hover:!bg-slate-100 !transition-colors"
                      >
                        <Github className="!h-4 !w-4" />
                        GitHub
                      </button>
                      <button
                        type="button"
                        className="!flex !items-center !justify-center !gap-2 !h-9 !w-full !border !border-slate-200 !bg-slate-50 !px-3 !text-sm !font-medium !text-slate-700 hover:!bg-slate-100 !transition-colors"
                      >
                        <Twitter className="!h-4 !w-4" />
                        Twitter
                      </button>
                    </div>

                    <div className="!text-center !mt-4">
                      <p className="!text-slate-600 !text-sm">
                        New to our platform?{" "}
                        <a
                          href="/register"
                          className="!text-red-600 hover:!text-red-700 !font-medium !transition-colors"
                        >
                          Register as Professional Donor
                        </a>
                      </p>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="staff" className="!mt-6 !space-y-4">
                  <div>
                    <h3 className="!text-lg !font-bold !text-slate-900">
                      Medical Staff Portal
                    </h3>
                    <p className="!text-slate-600 !mt-1 !text-sm">
                      Secure access for certified medical professionals.
                    </p>
                  </div>

                  <form className="!space-y-5">
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label
                          htmlFor="staffId"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <User className="!h-4 !w-4 !text-red-600" />
                          Medical Staff ID
                        </label>
                        <Input
                          id="staffId"
                          name="staffId"
                          placeholder="Enter professional ID"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-10 !px-3 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white"
                        />
                      </div>

                      <div className="!space-y-2">
                        <label
                          htmlFor="staffPassword"
                          className="!text-sm !font-semibold !text-slate-700 !flex !items-center !gap-2"
                        >
                          <Lock className="!h-4 !w-4 !text-red-600" />
                          Secure Access Code
                        </label>
                        <Input
                          id="staffPassword"
                          name="staffPassword"
                          type="password"
                          placeholder="••••••••"
                          required
                          className="!bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-10 !px-3 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white"
                        />
                      </div>
                    </div>

                    <div className="!flex !items-center !justify-between">
                      <div className="!flex !items-center">
                        <input
                          id="staff-remember"
                          name="staff-remember"
                          type="checkbox"
                          className="!h-4 !w-4 !rounded !border-slate-300 !text-red-600 focus:!ring-red-500 focus:!ring-offset-0"
                        />
                        <label
                          htmlFor="staff-remember"
                          className="!ml-2 !block !text-sm !text-slate-600"
                        >
                          Remember session
                        </label>
                      </div>
                      <a
                        href="#"
                        className="!text-sm !font-medium !text-red-600 hover:!text-red-700 !transition-colors"
                      >
                        Reset Access
                      </a>
                    </div>

                    <div className="!pt-1">
                      <Button
                        type="submit"
                        className="!w-full !h-10 !bg-red-600 hover:!bg-red-700 !text-white !font-semibold !transition-all !duration-300"
                      >
                        <span className="!flex !items-center !justify-center !gap-2 !text-sm !font-medium">
                          Access Medical Portal
                          <ArrowRight className="!h-4 !w-4" />
                        </span>
                      </Button>
                    </div>

                    <div className="!flex !items-center !justify-center !mt-4 !gap-2">
                      <Shield className="!h-4 !w-4 !text-green-600" />
                      <span className="!text-xs !text-slate-600">
                        HIPAA Compliant Medical Portal
                      </span>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Professional security badges */}
              <div className="!mt-6 !pt-4 !border-t !border-slate-200">
                <div className="!flex !items-center !justify-between">
                  <div className="!flex !items-center !gap-2">
                    <Shield className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">
                      Secure Authentication
                    </span>
                  </div>
                  <div className="!flex !items-center !gap-2">
                    <Lock className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">
                      HIPAA Compliant
                    </span>
                  </div>
                </div>
              </div>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-slate-300 !to-slate-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="!relative !z-10 !border-t !border-slate-200 !bg-white !py-6 !px-6 md:!px-8 !mt-auto">
        <div className="!max-w-7xl !mx-auto !flex !flex-col md:!flex-row !justify-between !items-center !gap-4">
          <div className="!flex !items-center !gap-3">
            <div className="!w-6 !h-6 !bg-red-600 !flex !items-center !justify-center">
              <Activity className="!h-4 !w-4 !text-white" strokeWidth={2} />
            </div>
            <p className="!text-slate-600 !text-sm">
              © 2024 BloodLife Healthcare Initiative. All rights reserved.
            </p>
          </div>

          <div className="!flex !items-center !gap-6">
            <a
              href="#"
              className="!text-xs !text-slate-600 hover:!text-red-600 !transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="!text-xs !text-slate-600 hover:!text-red-600 !transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="!text-xs !text-slate-600 hover:!text-red-600 !transition-colors"
            >
              Professional Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
