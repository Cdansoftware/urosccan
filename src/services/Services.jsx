import { useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoHome, IoSearchSharp } from "react-icons/io5";
import { HiTrendingUp } from "react-icons/hi";
import { FaKey, FaUsers } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { RiPieChartFill } from "react-icons/ri";
import Img5 from "../assets/carousel/Cimg5.jpg";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("home-monitoring");

  const serviceCategories = [
    {
      id: "home-monitoring",
      name: "Home Monitoring",
      icon: IoHome,
      description:
        "Seamlessly upgrade any standard toilet seat into a smart diagnostic station for at-home health monitoring and early detection.",
    },
    {
      id: "clinical-integration",
      name: "Clinical Integration",
      icon: BsFillBuildingsFill,
      description:
        "Clinical-grade data integration and reporting to help healthcare providers act faster and more effectively.",
    },
    {
      id: "analytics",
      name: "Analytics & Services",
      icon: HiTrendingUp,
      description:
        "Advanced analytics, secure cloud storage, and support services tailored for preventive care and long-term monitoring.",
    },
  ];

  const services = {
    "home-monitoring": [
      {
        title: "Uro-Scan Toilet Seat Module",
        icon: IoSearchSharp,
        description:
          "A compact, non-invasive module that mounts under the toilet seat and analyzes urine biomarkers to screen for kidney, liver, and respiratory concerns.",
        features: [
          "Easy retrofit — fits most standard toilet seats",
          "Rapid chemical & biomarker sensing with lab-level accuracy",
          "Low-maintenance disposable sensor cartridges",
          "Local processing with optional cloud sync",
          "Privacy-first design: no cameras, only anonymized health metrics",
        ],
      },
      {
        title: "Real-time Alerts & Notifications",
        icon: FaKey,
        description:
          "Automated alerts delivered to users and designated caregivers when test results indicate potential abnormalities.",
        features: [
          "Customizable alert thresholds for individual users",
          "SMS, email, and in-app notifications",
          "Emergency escalation workflows for critical readings",
          "Insightful daily/weekly health summaries",
          "HIPAA/GDPR-compatible data handling options",
        ],
      },
      {
        title: "Personal Health Dashboard",
        icon: IoHome,
        description:
          "A user-friendly dashboard that displays trends, test history, and meaningful interpretation of results to empower preventive care.",
        features: [
          "Visual trend charts for kidney, liver, and lung indicators",
          "Downloadable PDF reports for clinical visits",
          "Multi-user household profiles",
          "Secure access controls for family members and clinicians",
          "Integrations with popular health apps and EHRs",
        ],
      },
      {
        title: "Installation & Home Support",
        icon: BsFillBuildingsFill,
        description:
          "Professional or guided self-installation to make sure your Uro-Scan module performs optimally from day one.",
        features: [
          "Step-by-step guided setup with QR code activation",
          "Optional on-site installation by certified technicians",
          "Initial calibration and quality-check service",
          "Warranty and fast replacement program",
          "24/7 remote diagnostics and support",
        ],
      },
    ],
    "clinical-integration": [
      {
        title: "Clinical Reporting & APIs",
        icon: FaBriefcase,
        description:
          "Deliver standardized, clinician-ready reports and open APIs for seamless EMR/EHR integration.",
        features: [
          "FHIR-compatible API endpoints for result ingestion",
          "Automated lab-level summary reports",
          "Clinician dashboard with patient filtering and notes",
          "Bulk data export for research and audits",
          "Role-based access and audit logging",
        ],
      },
      {
        title: "Validation & Regulatory Support",
        icon: BsFillBuildingsFill,
        description:
          "Support for clinical validation, performance studies, and regulatory filings to meet local medical device requirements.",
        features: [
          "Quality management and documentation assistance",
          "Clinical trial planning and execution support",
          "Performance benchmarking against reference labs",
          "Assistance with CE/ISO/other regional certifications",
          "Post-market surveillance guidance",
        ],
      },
      {
        title: "Enterprise Deployment",
        icon: BsFillBuildingsFill,
        description:
          "Scalable deployments for care facilities, hospitals, and assisted-living residences with centralized device management.",
        features: [
          "Fleet provisioning and remote firmware updates",
          "Centralized device health monitoring",
          "Tenant/ward-based reporting and insights",
          "Secure private cloud or on-prem options",
          "Service level agreements for uptime and maintenance",
        ],
      },
      {
        title: "Clinical Advisory Services",
        icon: HiTrendingUp,
        description:
          "Expert advisory services to help healthcare partners interpret biomarker data and design care pathways.",
        features: [
          "Custom analytics models for specific patient cohorts",
          "Clinical workflow integration consulting",
          "Education and training for clinical staff",
          "Outcome measurement and program optimization",
          "Collaborative research partnerships",
        ],
      },
    ],
    analytics: [
      {
        title: "Advanced Analytics & Insights",
        icon: RiPieChartFill,
        description:
          "Powerful analytics engine that converts raw sensor data into actionable insights for users and clinicians.",
        features: [
          "Machine learning models tuned for early anomaly detection",
          "Cohort and population-level trend analysis",
          "Predictive alerts for progressive conditions",
          "Exportable visualizations for reports and presentations",
          "Continuous model improvement with opt-in data sharing",
        ],
      },
      {
        title: "Data Security & Compliance",
        icon: BsFillBuildingsFill,
        description:
          "Robust security architecture to protect user data while ensuring compliance with applicable healthcare regulations.",
        features: [
          "End-to-end encryption for data at rest and in transit",
          "Role-based access control and audit trails",
          "Options for regional data residency",
          "Regular security assessments and penetration testing",
          "SOC/ISO-ready policies and documentation",
        ],
      },
      {
        title: "Subscription & Warranty Plans",
        icon: HiTrendingUp,
        description:
          "Flexible plans for individuals and institutions including sensor refills, extended warranties, and premium analytics.",
        features: [
          "Monthly/annual subscription tiers",
          "Automatic sensor refills and consumables delivery",
          "Priority support and accelerated replacement",
          "Premium analytics and clinician review add-ons",
          "Discounted enterprise and healthcare partner pricing",
        ],
      },
      {
        title: "Customer Success & Training",
        icon: FaUsers,
        description:
          "Dedicated customer success and training teams to ensure high adoption and meaningful health outcomes.",
        features: [
          "Onboarding programs for households and facilities",
          "Clinical education modules for partners",
          "Regular check-ins and usage optimization",
          "Access to knowledge base and video tutorials",
          "Feedback loops to inform product roadmap",
        ],
      },
    ],
  };

  const sty = "w-10 h-10";

  return (
    <div className="bg-white">
      <div>
        <title>Uro-Scan | Smart Bathroom Diagnostics</title>
        <meta
          name="description"
          content="Uro-Scan retrofits toilet seats to provide easy, non-invasive screening for kidney, liver and respiratory indicators with secure cloud analytics and clinical integrations."
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-80">
        <div className="relative w-full h-[230px] sm:h-[400px] overflow-hidden">
          <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
            <img
              src={Img5}
              alt="Uro-Scan diagnostic module"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-6 z-30 transition-opacity duration-500 opacity-100">
            <h1
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-xl sm:text-[48px] font-bold whitespace-pre-line"
            >
              Uro-Scan — Preventive Diagnostics, Right at Home
            </h1>
            <p className="max-w-3xl text-sm sm:text-lg">
              Retrofit your toilet seat to monitor kidney, liver and lung health
              through routine urine analysis — non-invasive, private and
              clinically useful.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 mt-6">
        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isActive
                    ? "bg-[#236d6f] text-white border-[#236d6f]"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium hidden md:inline">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Service Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            {serviceCategories?.find((c) => c.id === activeCategory)?.name}{" "}
            Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {
              serviceCategories?.find((c) => c.id === activeCategory)
                ?.description
            }
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeCategory]?.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                >
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    {/* Separator */}
                    <div className="border-b-2 border-slate-200 my-5 w-16"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service?.features?.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <svg
                            className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-1.5 bg-green-700 my-4 mx-auto rounded-full"></div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Founded by <strong>Mr. Sameer</strong> and Co-Founder <strong>Mr. Chandan Prajapati</strong>,
            <span className="font-semibold text-[#236d6f]">
              Uro-Scan Systems
            </span>{" "}
            is committed to bringing preventive diagnostics into everyday life.
            Our mission is to provide accurate, accessible and private health
            monitoring by making diagnostic technology as simple to install as a
            toilet seat upgrade.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            From initial concept to enterprise deployments, we design products
            and services that empower individuals, families and healthcare
            providers to detect issues earlier and take action when it matters
            most.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
