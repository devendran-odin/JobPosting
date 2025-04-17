import { useEffect, useState } from "react";

const messages = [
  "🧳 Packing job listings... the server’s still tying its shoes!",
  "🖥️ Backend is booting up — it hits snooze sometimes!",
  "⏳ Free-tier problems: our server is thinking… slowly.",
  "🚀 Launching dashboard... backend’s grabbing coffee!",
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center mt-60 px-4">
        {/* Loader (Left Side) */}
        <div className="relative flex items-center justify-center mr-6">
          <span className="bar before:animate-loader-bar after:animate-loader-bar animate-loader-bar bg-blue-600 w-[13.6px] h-8 mx-[20px] relative text-transparent"></span>
        </div>

        {/* Message (Right Side) */}
        <p
          key={index}
          className="text-lg md:text-xl text-gray-600 transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in "
        >
          {messages[index]}
        </p>
      </div>

      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes loader-bar {
            0%, 80%, 100% {
              opacity: 0.75;
              box-shadow: 0 0 #076fe5;
              height: 32px;
            }
            40% {
              opacity: 1;
              box-shadow: 0 -8px #076fe5;
              height: 40px;
            }
          }

          .animate-loader-bar {
            animation: loader-bar 0.8s infinite ease-in-out;
          }

          .bar::before,
          .bar::after {
            content: '';
            position: absolute;
            width: 13.6px;
            height: 32px;
            background: #076fe5;
            animation: loader-bar 0.8s infinite ease-in-out;
          }

          .bar::before {
            left: -20px;
          }

          .bar::after {
            left: 20px;
            animation-delay: 0.32s !important;
          }

          .bar {
            animation-delay: 0.16s !important;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-fade-in {
            animation: fadeIn 0.7s ease-in-out forwards;
          }
        `}
      </style>
    </>
  );
}
