import React from 'react'

const SuccessDialog = (props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          {/* Backdrop overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>
    
          {/* Dialog box */}
          <div className="relative bg-deepdark w-96 border-primarygreen border-2 shadow-lg p-6">
            {/* Close button */}
            <button
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
              onClick={props.closeDialog}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
    
            {/* Dialog content */}
            <div className="text-grey">{props.isSending? "Sending the message..." : props.isSubmitted? "Message sent" : "Something went wrong"}</div>

          </div>
        </div>
      );
}

export default SuccessDialog
