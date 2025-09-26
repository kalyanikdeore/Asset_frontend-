import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  PieChart,
  Target,
  BarChart2,
  DollarSign,
  Layers,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  UserCheck,
} from "lucide-react";

function PortfolioManagementServ() {
  const pmsProducts = [
    {
      icon: <Briefcase size={24} className="text-blue-500" />,
      title: "Customized Portfolios",
      path: "/pms/custom-portfolios",
      description:
        "Tailored investment solutions designed to match your specific financial goals and risk appetite.",
    },
    {
      icon: <PieChart size={24} className="text-green-500" />,
      title: "Asset Allocation",
      path: "/pms/asset-allocation",
      description:
        "Strategic distribution across asset classes to optimize returns while managing risk.",
    },
    {
      icon: <Target size={24} className="text-purple-500" />,
      title: "Goal-Based Investing",
      path: "/pms/goal-based",
      description:
        "Structured approach to align your investments with specific life goals and timelines.",
    },
    {
      icon: <BarChart2 size={24} className="text-orange-500" />,
      title: "Equity PMS",
      path: "/pms/equity",
      description:
        "Direct equity portfolios managed by experts with concentrated stock selection.",
    },
    {
      icon: <DollarSign size={24} className="text-yellow-500" />,
      title: "Fixed Income PMS",
      path: "/pms/fixed-income",
      description:
        "High-quality debt instruments portfolio for stable returns with lower volatility.",
    },
    {
      icon: <Layers size={24} className="text-red-500" />,
      title: "Multi-Asset Strategies",
      path: "/pms/multi-asset",
      description:
        "Diversified exposure across equities, fixed income, and alternative assets.",
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
          <Briefcase size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Portfolio Management Services
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pmsProducts.map((product, index) => (
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
            Why Choose Our PMS?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <UserCheck className="text-blue-500" /> Personalized Approach
              </h3>
              <p className="text-gray-600">
                Our PMS offers customized investment solutions rather than
                off-the-shelf products. Each portfolio is constructed based on
                your unique financial situation, goals, and risk tolerance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="text-blue-500" /> Professional Management
              </h3>
              <p className="text-gray-600">
                Benefit from our team of experienced portfolio managers who
                actively monitor and rebalance your investments to capitalize on
                market opportunities and manage risks.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Globe className="text-blue-500" /> Diversified Strategies
            </h3>
            <p className="text-gray-600">
              Access to multiple investment strategies across market
              capitalizations, sectors, and geographies to build truly
              diversified portfolios that can weather different market
              conditions.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *PMS investments are subject to market risks. Please read all
              scheme related documents carefully before investing.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PortfolioManagementServ;
