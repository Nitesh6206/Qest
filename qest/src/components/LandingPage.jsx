// Full React Component for RMax Landing Page with All Sections
// Ensure you have Tailwind CSS set up in your project.

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import sports from "../../src/assets/sports.png";
import medical from "../../src/assets/medical.png";
import scientices from "../../src/assets/scientices.png";
import {
    Calendar,
    Users,
    Activity,
    CreditCard,
    Megaphone,
    Globe,
  } from "lucide-react";
  
  const whyRmaxFeatures = [
    {
      title: "Scheduling",
      description:
        "Manage appointments, classes, and events with streamlined tools.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Client Management & CRM",
      description:
        "Keep track of customer data, preferences, and interactions.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "AI Powered Insights",
      description:
        "Know exactly what’s happening in your business and get actionable insights.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Billing & Payments",
      description:
        "Streamline invoicing and payments with automated workflows.",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: "Marketing & Engagement Tools",
      description:
        "Boost client retention and grow your business with integrated tools.",
      icon: <Megaphone className="w-6 h-6" />,
    },
    {
      title: "Custom Branded Website",
      description:
        "Create a fully personalized website to reflect your brand.",
      icon: <Globe className="w-6 h-6" />,
    },
  ];
const LandingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isMonthly, setIsMonthly] = useState(true);
  const monthlyPlans = [
    {
      title: "Starter",
      price: "$17/month",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "Unlimited Domain Support",
        "Lifetime Updates",
      ],
    },
    {
      title: "Premium",
      price: "$88/month",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "Unlimited Domain Support",
        "6-Month Premium Support",
        "Lifetime Updates",
      ],
    },
  ];

  const yearlyPlans = [
    {
      title: "Starter",
      price: "$15/month (billed yearly)",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "Unlimited Domain Support",
        "Lifetime Updates",
      ],
    },
    {
      title: "Premium",
      price: "$70/month (billed yearly)",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "Unlimited Domain Support",
        "6-Month Premium Support",
        "Lifetime Updates",
      ],
    },
  ];

  // Switch between monthlyPlans and yearlyPlans
  const plansToDisplay = isMonthly ? monthlyPlans : yearlyPlans;

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16">
        <div className="max-w-3xl m mx-auto flex items-center space-x-4 mb-12">
          <div className="flex ml-5 items-center">
            <span className="text-red-600 font-bold text-xl">R</span>
            <span className="text-black font-bold text-xl">Max</span>
          </div>
          <input
            type="text"
            placeholder="Curious? Let AI Uncover the Answers!"
            className="bg-gray-50 px-4 py-3 rounded-lg w-full text-sm text-gray-500  focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Maximize Your Impact <br />{" "}
          <span className="text-red-600">Business with RMax</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Enhance your business with RMax’s all-in-one platform—streamlining
          client engagement, automating workflows, and fueling growth.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Get Started
          </button>
          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100">
            Book a Demo
          </button>
        </div>
      </header>

      {/* Why RMax Section */}
      <section className="py-16 bg-gray-50">
      {/* Section heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Rmax?
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Rmax is designed to simplify and transform the way service 
          businesses operate. From onboarding, scheduling, and billing 
          to client management, payments, and growth, Rmax integrates 
          everything in one easy-to-use platform connecting all 
          stakeholders.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {whyRmaxFeatures.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 
                            bg-orange-100 text-orange-500 rounded-full">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">{feature.description}</p>

            {/* "View details" link */}
            <a
              href="#"
              className="inline-block mt-4 text-sm font-semibold text-orange-500 hover:text-orange-600"
            >
              View details &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>

      {/* 1. Empowering Service Providers Across Industries */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empowering Service Providers Across Industries
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Whether you’re in sports, education, wellness, household services,
            or niche markets, our technology simplifies your business
            operations, making it easier for you to focus on what you do best.
          </p>
        </div>

        {/* Three card carousel-like layout */}
        <div className="max-w-6xl mx-auto px-4">
          {/* NOTE: For an actual carousel, integrate a library like Swiper or React Slick. 
              Here we just show static cards side by side. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src={sports} // Replace with real sports image
                alt="Sports"
                className="w-full h-68 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Sports</h3>
                <p className="mt-2 text-gray-600">
                  From fitness studios to sports academies, RMax empowers sports
                  businesses{" "}
                  <a href="#" className="text-blue-500">
                    Know more..
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src={medical}
                alt="Healthcare"
                className="w-full h-68 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Healthcare &amp; Wellness
                </h3>
                <p className="mt-2 text-gray-600">
                  Health and wellness service providers—from yoga instructors
                  and gyms{" "}
                  <a href="#" className="text-blue-500">
                    Know more..
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src={scientices} // Replace with real learning activities image
                alt="Learning"
                className="w-full h-68 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Learning Activities
                </h3>
                <p className="mt-2 text-gray-600">
                  Tutors, educators, and learning centers—from music schools to
                  art studios{" "}
                  <a href="#" className="text-blue-500">
                    Know more..
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pricing Section (with toggle) */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Plan That’s Right For You
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Simple and transparent pricing. Start for free, upgrade when you
            love it. 30 day free trial in a button.
          </p>
          <div className="mt-6">
            <span className="text-gray-700 mr-2">
              Running a Growth Business or Enterprise? Let’s connect.
            </span>
            <button className="text-orange-500 underline font-semibold">
              Talk to Sales
            </button>
          </div>

          {/* Toggle Switch: Monthly / Yearly */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-2 mt-8">
              {/* "Monthly" label */}
              <span
                className={`text-sm ${
                  isMonthly ? "font-medium text-gray-900" : "text-gray-400"
                }`}
              >
                Monthly
              </span>

              {/* The Toggle Switch */}
              <div
                className="relative inline-block w-12 h-6 rounded-full cursor-pointer 
                   bg-gray-200 transition-colors duration-300
                   flex-shrink-0"
                onClick={() => setIsMonthly(!isMonthly)}
              >
                {/* The circle that moves left/right */}
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm 
                      transform transition-transform duration-300
                      ${isMonthly ? "translate-x-0" : "translate-x-6"}`}
                />
              </div>

              {/* "Yearly" label */}
              <span
                className={`text-sm ${
                  !isMonthly ? "font-medium text-gray-900" : "text-gray-400"
                }`}
              >
                Yearly
              </span>

              {/* "SAVE 25%" shows only when user toggles to Yearly */}
              
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                  SAVE 25%
                </span>
             
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {plansToDisplay.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {plan.title}
              </h3>
              <p className="mt-2 text-4xl font-bold text-gray-900">
                {plan.price}
              </p>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Get Started
              </button>
              <p className="mt-2 text-sm text-gray-400">
                No credit card required
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-blue-500 underline">
            Explore In-Depth Differences
          </a>
        </div>
      </section>

      {/* 3. Manage Your Business On the Go */}
      <section className="py-16 bg-white">
        <div className="text-center mb-8 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Manage Your Business On the Go
          </h2>
          <p className="mt-4 text-gray-600">
            With free Business Mobile App, you can manage your entire service
            business from anywhere. Stay connected and stay in control, no
            matter where your day takes you.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* Replace these with actual badges or links to the stores */}
          <button className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2">
            {/* Apple Icon */}
            <svg
              fill="currentColor"
              viewBox="0 0 384 512"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M318.7 268c-... (truncated icon path) ..." />
            </svg>
            <span>App Store</span>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2">
            {/* Google Play Icon */}
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M325.3 234.3 ... (truncated path) ..." />
            </svg>
            <span>Google Play</span>
          </button>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <div className="mt-32 mb-20 p-5">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500  mb-16">
          Find answers to common questions about our service and features.
          <br />
          If you need specific answers contact our support team.
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: "What is RMax?",
              a: "RMax is an all-in-one platform that helps you to manage and scale your business easily.",
            },
            {
              q: "How does it work?",
              a: "Choose your plan, set up your profile, and start managing your business.",
            },
            {
              q: "How much does it cost?",
              a: "We offer flexible pricing plans starting from $X/month.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                }
                className="w-full py-4 flex justify-between items-center text-left"
              >
                <span className=" text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    openFaqIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaqIndex === idx && (
                <div className="pb-4  text-gray-500">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 ">
          <span className="text-gray-500">Haven't got your answer? </span>
          <a href="#" className="text-red-600">
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
