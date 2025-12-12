
"use client"

import React, { useState } from 'react';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: "1",
      title: "Introduction",
      content: [
        {
          type: "paragraph",
          text: "Welcome to Premier Properties. These Terms and Conditions govern your use of our website and services. By accessing our platform, you agree to comply with and be bound by these terms. Please read them carefully."
        },
        {
          type: "paragraph",
          text: "Premier Properties provides a platform for users to search for, list, and engage with real estate properties. Our services are designed to connect property buyers, sellers, and renters in a transparent and efficient manner."
        }
      ]
    },
    {
      id: "2",
      title: "Definitions",
      content: [
        {
          type: "list",
          items: [
            "<span class='font-medium'>Platform:</span> Refers to the Premier Properties website, mobile applications, and related services.",
            "<span class='font-medium'>User:</span> Any individual or entity that accesses or uses our Platform.",
            "<span class='font-medium'>Listing:</span> Any property information, images, or details posted on our Platform.",
            "<span class='font-medium'>Agent:</span> A licensed real estate professional registered on our Platform.",
            "<span class='font-medium'>Content:</span> All information, text, images, videos, and materials displayed on our Platform."
          ]
        }
      ]
    },
    {
      id: "3",
      title: "Services",
      content: [
        {
          type: "paragraph",
          text: "Premier Properties offers the following services:"
        },
        {
          type: "list",
          items: [
            "Property search and discovery for buyers and renters",
            "Property listing and marketing for sellers and landlords",
            "Communication tools to connect users with agents",
            "Market analysis and property valuation estimates",
            "Resources for real estate education and guidance"
          ]
        },
        {
          type: "paragraph",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
        }
      ]
    },
    {
      id: "4",
      title: "User Obligations",
      content: [
        {
          type: "paragraph",
          text: "By using our Platform, you agree to:"
        },
        {
          type: "list",
          items: [
            "Provide accurate and truthful information",
            "Maintain the confidentiality of your account credentials",
            "Not engage in any fraudulent, misleading, or illegal activities",
            "Respect the intellectual property rights of Premier Properties and third parties",
            "Not use our Platform to harass, discriminate, or harm others",
            "Comply with all applicable laws and regulations"
          ]
        }
      ]
    },
    {
      id: "5",
      title: "Property Listings",
      content: [
        {
          type: "paragraph",
          text: "All property listings on our Platform must:"
        },
        {
          type: "list",
          items: [
            "Represent actual available properties",
            "Include accurate and non-misleading information",
            "Comply with fair housing laws and regulations",
            "Not infringe on third-party rights or intellectual property",
            "Be updated promptly when the property status changes"
          ]
        },
        {
          type: "paragraph",
          text: "Premier Properties reserves the right to remove any listing that violates these terms or is reported as fraudulent or inappropriate."
        }
      ]
    },
    {
      id: "6",
      title: "Privacy Policy",
      content: [
        {
          type: "paragraph",
          text: "Our Privacy Policy explains how we collect, use, and protect your personal information. By using our Platform, you consent to our data practices as described in our Privacy Policy."
        },
        {
          type: "paragraph",
          text: "We implement appropriate security measures to protect your personal information but cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account information."
        }
      ]
    },
    {
      id: "7",
      title: "Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: "All content on our Platform, including but not limited to logos, designs, text, graphics, images, and software, is the property of Premier Properties or its licensors and is protected by intellectual property laws."
        },
        {
          type: "paragraph",
          text: "You may not reproduce, distribute, modify, or create derivative works from any content on our Platform without our express written permission."
        }
      ]
    },
    {
      id: "8",
      title: "Limitation of Liability",
      content: [
        {
          type: "paragraph",
          text: "Premier Properties provides information and services on an \"as is\" and \"as available\" basis. We do not guarantee the accuracy, completeness, or reliability of any content on our Platform."
        },
        {
          type: "paragraph",
          text: "We shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our Platform or services."
        },
        {
          type: "paragraph",
          text: "Property transactions involve significant financial and legal considerations. We strongly recommend consulting with qualified professionals before making any real estate decisions."
        }
      ]
    },
    {
      id: "9",
      title: "Termination",
      content: [
        {
          type: "paragraph",
          text: "Premier Properties reserves the right to terminate or suspend your access to our Platform at any time, without prior notice, for any reason, including violation of these Terms and Conditions."
        },
        {
          type: "paragraph",
          text: "Upon termination, provisions relating to ownership, liability limitations, indemnification, and dispute resolution shall survive."
        }
      ]
    },
    {
      id: "10",
      title: "Governing Law",
      content: [
        {
          type: "paragraph",
          text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles."
        },
        {
          type: "paragraph",
          text: "Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located within [Jurisdiction]."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 pt-[27%] sm:pt-[10%]">
      {/* Header */}
      <header className="bg-white border border-slate-300">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Premier Properties</h1>
          <p className="text-gray-600 mt-2">Terms & Conditions</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <main className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-8">
          <p className="text-gray-700 mb-8">
            Please review these terms and conditions carefully. They outline your rights and responsibilities when using Premier Properties' services and platform.
          </p>
          
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => toggleSection(section.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{section.id}. {section.title}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${activeSection === section.id ? 'rotate-180' : ''} transition-transform`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`px-6 py-4 bg-white ${activeSection === section.id ? 'block' : 'hidden'}`}>
                  {section.content.map((item, index) => (
                    item.type === "paragraph" ? (
                      <p key={index} className="mb-4 text-gray-600">{item.text}</p>
                    ) : (
                      <ul key={index} className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                        {item.items.map((listItem, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
                        ))}
                      </ul>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              By using Premier Properties' services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
           
          </div>
        </main>

        {/* Last Updated Notice */}
        <div className="text-center text-sm text-gray-500 mb-8">
          <p>Last Updated: April 4, 2025</p>
        </div>
      </div>   
    </div>
  );
};

export default TermsPage;