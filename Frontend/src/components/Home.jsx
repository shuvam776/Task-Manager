import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signup");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center w-400 right-50 relative bottom-10 bg-gray-800">
      <div className="text-center space-y-6 max-w-md px-6">
        <h1 className="text-4xl font-bold text-white">
          Task Manager
        </h1>

        <p className="text-gray-400 text-sm">
          Organize your work. Stay focused. Get things done.
        </p>

        <p className="text-gray-500 text-xs">
          Redirecting to sign up…
        </p>
      </div>
    </div>
  );
}
