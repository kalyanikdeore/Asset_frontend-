import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  FireExtinguisher,
  Zap,
  HardHat,
  Package,
  Clock,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

function FactoryInsurance() {
  const factoryProducts = [
    {
      icon: <Factory size={24} className="text-blue-500" />,
      title: "Property Insurance",
      path: "/factory/property",
      description:
        "Comprehensive coverage for factory buildings, machinery, and equipment against fire, explosions, and natural disasters.",
    },
    {
      icon: <FireExtinguisher size={24} className="text-red-500" />,
      title: "Fire & Perils Cover",
      path: "/factory/fire",
      description:
        "Specialized protection against fire-related damages including consequential losses and business interruption.",
    },
    {
      icon: <Zap size={24} className="text-yellow-500" />,
      title: "Machinery Breakdown",
      path: "/factory/machinery",
      description:
        "Coverage for sudden mechanical/electrical breakdown of plant equipment including repair costs and loss of production.",
    },
    {
      icon: <Package size={24} className="text-green-500" />,
      title: "Stock & Inventory",
      path: "/factory/stock",
      description:
        "Protection for raw materials, work-in-progress, and finished goods against damage or destruction.",
    },
    {
      icon: <HardHat size={24} className="text-orange-500" />,
      title: "Workmen's Compensation",
      path: "/factory/wc",
      description:
        "Mandatory coverage for employee injuries and occupational diseases occurring within factory premises.",
    },
    {
      icon: <ShieldCheck size={24} className="text-purple-500" />,
      title: "Product Liability",
      path: "/factory/liability",
      description:
        "Protection against claims arising from defective products manufactured at your facility.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 pt-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <Factory size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Factory Insurance Solutions
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {factoryProducts.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {product.icon}
                <h2 className="text-xl font-semibold">{product.title}</h2>
              </div>
              <p className="text-gray-600">{product.description}</p>
              {/* <motion.a
                href={product.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-blue-600 font-medium flex items-center gap-1"
              >
                Learn more <ArrowUpRight size={16} />
              </motion.a> */}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Why Factory Insurance is Essential
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" /> Asset Protection
              </h3>
              <p className="text-gray-600">
                Safeguard your heavy industrial investments against unforeseen
                damages and operational risks that could cripple production.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <DollarSign className="text-blue-500" /> Business Continuity
              </h3>
              <p className="text-gray-600">
                Coverage for loss of profits and fixed expenses during
                shutdowns, helping maintain cash flow after major incidents.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="text-blue-500" /> Risk Management Support
            </h3>
            <p className="text-gray-600">
              Our industrial risk engineers provide factory inspections and
              recommendations to prevent losses before they occur.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Factory insurance policies contain specific exclusions for
              certain perils and machinery. Proper maintenance records are
              required for claims processing.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FactoryInsurance;
