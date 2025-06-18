import React, { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: ["Everything in Basic", "Feature 4", "Feature 5"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: ["Custom features", "Priority support"],
    recommended: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  // Example: Toggle prices if you want (bonus)
  const displayPrice = (plan) => {
    if (billing === "yearly" && plan.price !== "Contact Us") {
      // Example: 2 months free on yearly
      const priceNum = Number(plan.price.replace(/[^0-9]/g, ""));
      return `$${priceNum * 10}/yr`;
    }
    return plan.price;
  };

  return (
    <section
      id="pricing"
      className="max-w-5xl mx-auto py-16 px-4 md:px-0 scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Our Pricing
      </h2>
      {/* Billing toggle */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-l border ${
            billing === "monthly"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r border ${
            billing === "yearly"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 rounded-xl shadow-lg transition-transform hover:scale-105 ${
              plan.recommended
                ? "border-2 border-indigo-500 bg-indigo-50"
                : "bg-white"
            }`}
          >
            {plan.recommended && (
              <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                Recommended
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-4">{displayPrice(plan)}</div>
            <ul className="flex-1 mb-6 space-y-2 text-gray-700">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-semibold">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
