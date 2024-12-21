import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PricingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <div className="text-center mt-16 mb-20">
        <h1 className="text-4xl font-bold text-gray-900">Flexible Plans,<br/>Transparent Pricing</h1>
        <p className="mt-4 text-gray-500 ">
          Find the perfect plan for you.<br/>
          Pay for what you need, nothing more.
        </p>
      </div>

      {/* Plans */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Compare our plans</h2>
        
        <div className="grid grid-cols-3 gap-12">
          {/* Labels column */}
          <div>
            <div className="h-16" /> {/* Spacing for column headers */}
            <div className="space-y-8  text-gray-600">
              <div>Basic Management</div>
              <div>Courses</div>
              <div>Appointments</div>
              <div>Multi Location</div>
              <div>CRM Access</div>
              <div>User Roles</div>
            </div>
          </div>

          {/* Starter column */}
          <div>
            <div className="mb-16">
              <div className="text-gray-900">Starter</div>
              <div className="text-gray-500 ">Perfect for beginners</div>
            </div>
            <div className="space-y-8 text-center ">
              <div>1</div>
              <div>3</div>
              <div>5</div>
              <div>—</div>
              <div>50</div>
              <div>1</div>
            </div>
            <button className="mt-12 w-full py-2 border border-red-600 text-red-600  rounded">
              Get Started
            </button>
          </div>

          {/* Premium column */}
          <div>
            <div className="mb-16">
              <div className="text-gray-900">Premium</div>
              <div className="text-gray-500 ">For growing businesses</div>
            </div>
            <div className="space-y-8 text-center ">
              <div>Unlimited</div>
              <div>10</div>
              <div>Unlimited</div>
              <div>✓</div>
              <div>1000</div>
              <div>5</div>
            </div>
            <button className="mt-12 w-full py-2 border border-red-600 text-red-600  rounded">
              Get Started
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-500  mb-16">
            Find answers to common questions about our service and features.<br/>
            If you need specific answers contact our support team.
          </p>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "What is RMax?", a: "RMax is an all-in-one platform that helps you to manage and scale your business easily." },
              { q: "How does it work?", a: "Choose your plan, set up your profile, and start managing your business." },
              { q: "How much does it cost?", a: "We offer flexible pricing plans starting from $X/month." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className=" text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="pb-4  text-gray-500">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 ">
            <span className="text-gray-500">Haven't got your answer? </span>
            <a href="#" className="text-red-600">Contact our support team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;