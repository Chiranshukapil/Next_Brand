import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Cloud, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack."
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, SOC2 compliance, and advanced threat protection."
  },
  {
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team in real-time with advanced sharing and communication tools."
  },
  {
    icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Advanced Analytics",
    description: "Get deep insights with comprehensive analytics, custom reports, and data visualization tools."
  },
  {
    icon: <Cloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Cloud Integration",
    description: "Connect with all your favorite tools and services through our extensive integration ecosystem."
  },
  {
    icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Mobile Ready",
    description: "Access your work anywhere with our responsive design and native mobile applications."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function FeaturesSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 min-h-screen overflow-x-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-800 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full shadow-lg">
              <Rocket className="w-8 h-8 text-white" />
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Supercharge Your Workflow
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-6 max-w-2xl mx-auto">
            NextBrand helps teams move faster, collaborate smarter, and achieve more with powerful, modern tools.
          </p>
          <motion.a
            href="/get-started"
            className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:cursor-pointer hover:shadow-indigo-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer pt-8 gap-4 sm:gap-6 md:gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 w-full"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mb-4 sm:mb-6 text-white shadow-lg group-hover:shadow-indigo-500/50"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:cursor-pointer hover:shadow-indigo-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
