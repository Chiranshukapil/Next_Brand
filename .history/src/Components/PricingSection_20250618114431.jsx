import { CheckCircle } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    icon: <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>,
    monthly: 9,
    yearly: 90,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    recommended: false,
  },
  {
    name: "Pro",
    icon: <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>,
    monthly: 19,
    yearly: 190,
    features: ["Everything in Basic", "Feature 4", "Feature 5"],
    recommended: true,
  },
  {
    name: "Enterprise",
    icon: <svg className="w-8 h-8 text-indigo-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>,
    monthly: null,
    yearly: null,
    features: ["Custom features", "Priority support"],
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
    <section className="relative py-20 px-4 md:px-0 bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 min-h-[100vh]">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-800 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-800 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-white drop-shadow-lg">Our Pricing</h2>
        <p className="text-center text-indigo-100 mb-8 text-lg">Flexible plans for every stage. No hidden fees.</p>
        {/* Billing toggle */}
        <div className="flex justify-center mb-12 gap-2">
          <button
            className={`px-6 py-2 rounded-l-lg font-semibold transition-colors duration-200 border border-indigo-600 focus:outline-none ${
              billing === "monthly"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-900 text-indigo-200 hover:bg-indigo-700/20"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg font-semibold transition-colors duration-200 border border-indigo-600 focus:outline-none ${
              billing === "yearly"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-900 text-indigo-200 hover:bg-indigo-700/20"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl border transition-transform duration-200 bg-white/90 shadow-xl hover:scale-[1.03] ${
                plan.recommended
                  ? "border-4 border-indigo-500 bg-indigo-50 z-20 scale-105 shadow-2xl"
                  : "border-gray-200"
              }`}
              style={plan.recommended ? { top: '-20px' } : {}}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-lg z-30">
                  Recommended
                </span>
              )}
              <div className="flex justify-center mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-4 text-center text-gray-900">{displayPrice(plan)}</div>
              <ul className="flex-1 mb-8 space-y-3 text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-md focus:outline-none ${
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
