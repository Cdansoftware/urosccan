import React from 'react'

const CustomButton = ({ submit }) => {
  return (
    <div
      className="
        bg-gradient-to-r from-teal-500 to-teal-700
        p-1.5 rounded-full
        shadow-lg shadow-teal-500/40
        hover:shadow-teal-600/60
        transition-all duration-300 ease-in-out
        transform hover:scale-105 cursor-pointer
      "
    >
      <button
        className="
          bg-white text-teal-600 font-semibold
          rounded-full px-5 py-2
          hover:bg-teal-50
          active:scale-95
          transition-all duration-300 ease-in-out cursor-pointer
        "
      >
        {submit}
      </button>
    </div>
  )
}

export default CustomButton
