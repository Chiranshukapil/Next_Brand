import { CheckCircle } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    monthly: 9,
    yearly: 90,
    features: [
      "Unlimited Projects",
      "Up to 3 Team Members",
      "5 GB Cloud Storage",
      "Basic Integrations (Google Drive, Slack)",
      "Version History (7 days)",
      "Single Workspace",
      "Standard Security (SSL Encryption)"
    ],
    recommended: false,
  },
  {
    name: "Pro",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    monthly: 19,
    yearly: 190,
    features: [
      "Everything in Basic",
      "Up to 15 Team Members",
      "100 GB Cloud Storage",
      "Advanced Integrations (Zapier, GitHub, Notion)",
      "Priority Email & Chat Support",
      "Version History (30 days)",
      "Multiple Workspaces"
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    monthly: null,
    yearly: null,
    features: [
      "Everything in Pro",
      "Unlimited Team Members",
      "1 TB+ Cloud Storage",
      "Custom Integrations & API",
      "24/7 Priority Support",
      "Advanced Security (SOC2, SAML, Audit Logs)",
      "Custom SLAs"
    ],
    recommended: false,
    contact: true,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  const displayPrice = (plan) => {
    if (plan.contact) return "Contact Us";
    if (billing === "yearly") return `$${plan.yearly}/yr`;
    return `$${plan.monthly}/mo`;
  };

  return (
    <section className="relative py-8 px-3 sm:px-2 md:py-16 md:px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 min-h-[100vh]">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-indigo-800 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-2 sm:mb-3 text-white drop-shadow-lg">
          Our Pricing
        </h2>
        <p className="text-center text-indigo-100 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
          Flexible plans for every stage. No hidden fees.
        </p>
        {/* Billing toggle */}
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-16 gap-2">
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-l-lg font-semibold transition-colors duration-200 hover:cursor-pointer border border-indigo-600 focus:outline-none text-xs sm:text-sm md:text-base ${
              billing === "monthly"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-900 text-indigo-200 hover:bg-indigo-700/20"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-r-lg font-semibold transition-colors duration-200 hover:cursor-pointer border border-indigo-600 focus:outline-none text-xs sm:text-sm md:text-base ${
              billing === "yearly"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-900 text-indigo-200 hover:bg-indigo-700/20"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-4 sm:p-4 md:p-8 rounded-2xl md:rounded-3xl border transition-transform duration-200 bg-white/90 shadow-xl hover:scale-[1.03] w-full max-w-xs sm:max-w-md mx-auto h-full ${
                plan.recommended
                  ? "border-4 border-indigo-500 bg-indigo-50 z-20 md:scale-105 shadow-2xl"
                  : "border-gray-200"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 sm:-top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] sm:text-xs px-3 sm:px-4 py-1 rounded-full font-semibold shadow-lg z-30">
                  Recommended
                </span>
              )}
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">{plan.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900 text-center">{plan.name}</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-center text-gray-900">{displayPrice(plan)}</div>
              <ul className="flex-1 mb-4 sm:mb-6 md:mb-8 space-y-1 sm:space-y-2 md:space-y-3 text-gray-700 text-xs sm:text-sm md:text-base">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`py-1.5 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all hover:cursor-pointer duration-200 shadow-md focus:outline-none ${
                  plan.recommended
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-900 text-white hover:bg-indigo-600"
                }`}
              >
                {plan.contact ? "Contact Sales" : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
