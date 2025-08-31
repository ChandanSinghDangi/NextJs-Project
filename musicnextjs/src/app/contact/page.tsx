'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useState } from "react";

function ContactPage () {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);
    alert("✅ Message Sent!");
    setEmail("");
    setMessage("");
  };

  return (

   <div className="flex items-center justify-center min-h-screen bg-[#03071d] ">
      <div className="bg-gray-500 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 p-2">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
            focus:ring-2 focus:ring-black outline-none bg-gray-800"
            required
          />

          {/* Message Textarea */}
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
            focus:ring-2 focus:ring-black outline-none bg-gray-800"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 
            rounded-lg hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
        <BackgroundBeams />
    </div>
  )

}

export default ContactPage

