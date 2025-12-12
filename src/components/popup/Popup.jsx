import React, { useState } from "react";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    location: "",
    budgetMin: "",
    budgetMax: "",
    message: "",
    propertyTypes: [],
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const propertyTypes = checked
        ? [...prev.propertyTypes, value]
        : prev.propertyTypes.filter((type) => type !== value);
      return { ...prev, propertyTypes };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits.";
    }
    if (
      formData.budgetMax &&
      formData.budgetMin &&
      Number(formData.budgetMax) < Number(formData.budgetMin)
    ) {
      newErrors.budgetMax = "Max budget should be greater than min budget.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Submitted Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div className="bg-white relative rounded-lg shadow-lg w-full max-w-lg overflow-hidden">
        <div className="bg-[#2B6C6E] px-4 py-3 text-white text-center">
          <h2 className="text-lg font-bold">Let's Connect</h2>
          <p className="text-xs">We are here and ready to connect with you...!</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <div className="p-4">
          {!submitted ? (
            <form className="space-y-3" onSubmit={handleSubmit}>
              {[
                { label: "Full Name", name: "name" },
                { label: "Email", name: "email" },
                { label: "Phone", name: "phone" },
                { label: "Address", name: "address" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <input
                    type={name === "email" ? "email" : "text"}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={label}
                    className="w-full border border-gray-300 px-3 py-1.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-[#2B6C6E] text-white py-2 rounded font-semibold text-sm hover:bg-[#3f9ea1]"
              >
                SEND MESSAGE
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <h3 className="text-lg font-semibold text-green-600 mb-1">
                Thank you, {formData.name}!
              </h3>
              <p className="text-sm text-gray-700">
                Your inquiry has been submitted successfully.
              </p>
            </div>
          )}
        </div>

        <div className="bg-[#2B6C6E] text-white text-xs text-center py-1">
          URO SCAN
        </div>
      </div>
    </div>
  );
};

export default Popup;
