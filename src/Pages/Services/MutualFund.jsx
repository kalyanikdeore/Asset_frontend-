import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  PieChart,
  BarChart2,
  Target,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  Layers,
  DollarSign,
  User,
  Infinity,
} from "lucide-react";

function MutualFund() {
  const fundProducts = [
    {
      icon: <PieChart size={24} className="text-blue-500" />,
      title: "Equity Funds",
      path: "/mutual-funds/equity",
      description:
        "Invest primarily in stocks for long-term capital appreciation with higher growth potential.",
    },
    {
      icon: <BarChart2 size={24} className="text-green-500" />,
      title: "Debt Funds",
      path: "/mutual-funds/debt",
      description:
        "Fixed income funds investing in bonds and money market instruments for stable returns.",
    },
    {
      icon: <Layers size={24} className="text-purple-500" />,
      title: "Hybrid Funds",
      path: "/mutual-funds/hybrid",
      description:
        "Balanced mix of equity and debt instruments to balance risk and returns.",
    },
    {
      icon: <Target size={24} className="text-orange-500" />,
      title: "ELSS Funds",
      path: "/mutual-funds/elss",
      description:
        "Tax-saving equity funds with 3-year lock-in period under Section 80C.",
    },
    {
      icon: <Globe size={24} className="text-yellow-500" />,
      title: "International Funds",
      path: "/mutual-funds/international",
      description:
        "Invest in global companies and markets to diversify your portfolio geographically.",
    },
    {
      icon: <Infinity size={24} className="text-red-500" />,
      title: "Index Funds",
      path: "/mutual-funds/index",
      description:
        "Passively managed funds that track market indices with lower expense ratios.",
    },
  ];

  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <TrendingUp size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Mutual Fund Investments
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {fundProducts.map((product, index) => (
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
                Invest now <ArrowUpRight size={16} />
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
            Benefits of Mutual Funds
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <User className="text-blue-500" /> Professional Management
              </h3>
              <p className="text-gray-600">
                Your money is managed by experienced fund managers who research
                and select securities to maximize returns while managing risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Layers className="text-blue-500" /> Diversification
              </h3>
              <p className="text-gray-600">
                Spread your investment across multiple securities to reduce
                risk, even with small investment amounts through SIPs starting
                at ₹500.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="text-blue-500" /> Liquidity
            </h3>
            <p className="text-gray-600">
              Open-ended funds allow you to redeem your units anytime (except
              ELSS), providing flexibility when you need access to your money.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Mutual fund investments are subject to market risks. Please read
              all scheme related documents carefully before investing. Past
              performance is not indicative of future results.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MutualFund;
