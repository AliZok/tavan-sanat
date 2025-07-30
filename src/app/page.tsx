import Link from "next/link"
import Image from "next/image"
import { BarChart, Cloud, Cpu, Globe, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-white to-[#0ac5b2]/5 shadow-lg">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Cloud className="h-8 w-8 text-[#0ac5b2] animate-pulse" />
          <span className="sr-only">AirSense Analytics</span>
          <span className="ml-3 text-xl font-extrabold text-gray-900 tracking-tight">AirSense Analytics</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8 items-center">
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#0ac5b2] transition-colors duration-300 text-gray-700"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#0ac5b2] transition-colors duration-300 text-gray-700"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#0ac5b2] transition-colors duration-300 text-gray-700"
            prefetch={false}
          >
            Technology
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#0ac5b2] transition-colors duration-300 text-gray-700"
            prefetch={false}
          >
            Contact
          </Link>
          <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#0ac5b2] px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[--color-dark-green] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0ac5b2] focus:ring-offset-2">
            Get a Quote
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#0ac5b2]/5 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/blue-industry3.jpg')] opacity-10 pointer-events-none bg-cover bg-center"></div>
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center relative z-10">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none text-gray-900 leading-tight animate-fade-in-up">
                  Pioneering Air Quality Solutions for a Healthier Tomorrow
                </h1>
                <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed animate-fade-in-up delay-200">
                  Empowering a healthier planet through precise environmental monitoring, advanced analytics, and
                  actionable insights for a sustainable future.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row animate-fade-in-up delay-400">
                <button className="inline-flex h-12 items-center justify-center rounded-full bg-[#0ac5b2] px-8 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[--color-dark-green] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0ac5b2] focus:ring-offset-2">
                  Discover Our Services <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[--color-secondary-blue] bg-white px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:bg-[--color-secondary-blue]/10 hover:text-[--color-dark-blue] focus:outline-none focus:ring-2 focus:ring-[--color-secondary-blue] focus:ring-offset-2 text-[--color-secondary-blue]">
                  Request a Demo
                </button>
              </div>
            </div>
            <Image
              src="/blue-industry.jpg"
              width="750"
              height="500"
              alt="Air Quality Monitoring - Industrial Environment"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-2xl object-cover sm:w-full lg:order-last lg:aspect-[4/3] shadow-2xl animate-fade-in-right"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-gray-900">
                  Our Advanced Capabilities
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leveraging cutting-edge technology and deep expertise to deliver unparalleled insights into air
                  quality, ensuring a healthier environment for all.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 mt-16">
              <div className="flex flex-col items-center p-8 text-center shadow-xl rounded-xl border border-[#0ac5b2]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="flex flex-col items-center">
                  <BarChart className="h-14 w-14 text-[#0ac5b2] mb-5 animate-bounce-in" />
                  <h3 className="text-2xl font-bold text-gray-800">Hyper-Accurate Data</h3>
                </div>
                <p className="text-gray-600 text-base mt-4">
                  Providing highly precise and reliable air quality data, validated by rigorous scientific methods, for
                  truly informed decision-making.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 text-center shadow-xl rounded-xl border border-[#0ac5b2]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="flex flex-col items-center">
                  <Cpu className="h-14 w-14 text-[#0ac5b2] mb-5 animate-bounce-in delay-100" />
                  <h3 className="text-2xl font-bold text-gray-800">AI-Powered Analytics</h3>
                </div>
                <p className="text-gray-600 text-base mt-4">
                  Utilizing state-of-the-art sensors and advanced AI algorithms for comprehensive monitoring and
                  predictive analysis.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 text-center shadow-xl rounded-xl border border-[#0ac5b2]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="flex flex-col items-center">
                  <Globe className="h-14 w-14 text-[#0ac5b2] mb-5 animate-bounce-in delay-200" />
                  <h3 className="text-2xl font-bold text-gray-800">Global Environmental Impact</h3>
                </div>
                <p className="text-gray-600 text-base mt-4">
                  Contributing to a healthier global environment through widespread data collection, analysis, and
                  collaborative initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About/Mission Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-white to-[#0ac5b2]/10">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <Image
              src="/blue-industry23.jpg"
              width="750"
              height="500"
              alt="About Us - Advanced Technology"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-2xl object-cover object-center sm:w-full shadow-2xl animate-fade-in-left"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-gray-900">
                  Our Unwavering Mission
                </h2>
                <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
                  At AirSense Analytics, we are passionately dedicated to providing the most accurate, transparent, and
                  accessible air quality information available. Our core mission is to empower communities,
                  forward-thinking businesses, and proactive governments with the critical data and actionable insights
                  needed to make informed decisions that profoundly protect public health and foster a sustainable
                  environment. We firmly believe that clean, breathable air is a fundamental human right, and we are
                  relentlessly committed to making it a tangible reality for everyone, everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 lg:py-36 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-gray-900">
                  Our Seamless Process
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From deployment to insights, our streamlined process ensures you get the air quality data you need,
                  when you need it.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 mt-16">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0ac5b2]/10 text-[#0ac5b2] mb-6">
                  <Cloud className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. Sensor Deployment</h3>
                <p className="text-gray-600">
                  Strategically deploy our advanced sensors in key locations to begin real-time data collection.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0ac5b2]/10 text-[#0ac5b2] mb-6">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">2. Data Collection & Analysis</h3>
                <p className="text-gray-600">
                  Our systems continuously collect and analyze data, identifying patterns and anomalies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0ac5b2]/10 text-[#0ac5b2] mb-6">
                  <Cpu className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">3. Actionable Insights</h3>
                <p className="text-gray-600">
                  Receive clear, actionable reports and recommendations to improve air quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-[#0ac5b2] to-[--color-dark-green] text-white shadow-inner">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl leading-tight">
              Ready to Transform Your Environment?
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl lg:text-2xl opacity-90">
              Partner with AirSense Analytics today to gain unparalleled insights into your air quality and contribute
              to a healthier, more sustainable future.
            </p>
            <button className="inline-flex h-14 items-center justify-center rounded-full bg-[--color-secondary-blue] px-10 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[--color-dark-blue] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[--color-secondary-blue] focus:ring-offset-2">
              Get in Touch Now <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <Cloud className="h-6 w-6 text-[#0ac5b2]" />
            <span className="ml-2 text-lg font-bold text-gray-900">AirSense Analytics</span>
          </Link>
          <p className="text-sm text-gray-600 text-center sm:text-left">
            &copy; {"2025 AirSense Analytics. All rights reserved. Dedicated to clean air for a better world."}
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8 items-center">
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-gray-600" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-gray-600" prefetch={false}>
            Privacy Policy
          </Link>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="Facebook"
              prefetch={false}
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="Twitter"
              prefetch={false}
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="LinkedIn"
              prefetch={false}
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="Instagram"
              prefetch={false}
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  )
}
