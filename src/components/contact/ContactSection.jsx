import React, { useState } from "react";

const ContactSection = () => {
  const [showToast, setShowToast] = useState(false);

  // 🌟 INPUT STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();     // prevent reload
    setShowToast(true);     // show popup

    // CLEAR FORM FIELDS
    setName("");
    setEmail("");
    setMessage("");

    // hide toast
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="py-14 bg-gray-50 w-full relative">

      {/* SUCCESS TOAST */}
      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-zenfoo-primary text-white px-6 py-3 rounded-xl shadow-lg z-50">
          Message sent successfully! 🎉
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-zenfoo-dark">
            Get in <span className="text-zenfoo-primary">Touch</span>
          </h2>
          <p className="text-zenfoo-muted mt-2">
            Have questions? We’re here to help you anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-md border">
            <h3 className="text-xl font-semibold text-zenfoo-dark mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm text-zenfoo-dark mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-zenfoo-primary outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-zenfoo-dark mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-zenfoo-primary outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-zenfoo-dark mb-1">Message</label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-zenfoo-primary outline-none"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-zenfoo-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* DETAILS (same as before) */}
          <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-md border">
            <h3 className="text-xl font-semibold text-zenfoo-dark mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="bg-zenfoo-primary/10 p-3 rounded-xl text-zenfoo-primary text-xl">📍</div>
                <p className="text-zenfoo-dark">12/A Aurnodaya colony, Hyderabad, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-zenfoo-primary/10 p-3 rounded-xl text-zenfoo-primary text-xl">📞</div>
                <p className="text-zenfoo-dark font-medium">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-zenfoo-primary/10 p-3 rounded-xl text-zenfoo-primary text-xl">✉️</div>
                <p className="text-zenfoo-dark font-medium">support@zenfoo.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-zenfoo-primary/10 p-3 rounded-xl text-zenfoo-primary text-xl">⏱️</div>
                <p className="text-zenfoo-dark">Mon–Sun: 7AM – 11PM</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
