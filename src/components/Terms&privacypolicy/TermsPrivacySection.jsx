import React, { useState } from "react";

const TermsPrivacySection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="py-14 bg-white w-full">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-zenfoo-dark">
            Terms & <span className="text-zenfoo-primary">Privacy</span>
          </h2>
          <p className="text-zenfoo-muted mt-2">
            Learn how we protect your data and your rights using Zenfoo services
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">

          {/* TERMS & CONDITIONS */}
          <div className="border rounded-xl shadow-sm">
            <button
              className="w-full text-left p-5 flex justify-between items-center"
              onClick={() => toggle(1)}
            >
              <span className="text-lg font-semibold text-zenfoo-dark">
                Terms & Conditions
              </span>

              <span className="text-zenfoo-primary text-xl">
                {open === 1 ? "−" : "+"}
              </span>
            </button>

            {open === 1 && (
              <div className="px-5 pb-5 text-zenfoo-muted leading-relaxed space-y-3">
                <p>
                  By using Zenfoo QuickMart, you agree to follow our platform's
                  guidelines, rules, and legal policies. Please read these terms carefully.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>All prices and product availability are subject to change.</li>
                  <li>Orders once placed cannot be modified after dispatch.</li>
                  <li>
                    Users are responsible for maintaining account confidentiality.
                  </li>
                  <li>
                    Zenfoo reserves the right to cancel fraudulent or suspicious orders.
                  </li>
                  <li>
                    Delivery timelines may vary based on traffic and weather conditions.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* PRIVACY POLICY */}
          <div className="border rounded-xl shadow-sm">
            <button
              className="w-full text-left p-5 flex justify-between items-center"
              onClick={() => toggle(2)}
            >
              <span className="text-lg font-semibold text-zenfoo-dark">
                Privacy Policy
              </span>

              <span className="text-zenfoo-primary text-xl">
                {open === 2 ? "−" : "+"}
              </span>
            </button>

            {open === 2 && (
              <div className="px-5 pb-5 text-zenfoo-muted leading-relaxed space-y-3">
                <p>
                  At Zenfoo, your privacy is our priority. We ensure your personal
                  information is always safe and protected.
                </p>

                <ul className="list-disc ml-6 space-y-1">
                  <li>We collect minimal data to deliver your orders efficiently.</li>
                  <li>
                    Your information is never shared with third parties without consent.
                  </li>
                  <li>
                    All payment data is encrypted and processed securely.
                  </li>
                  <li>
                    You can request account deletion anytime by contacting support.
                  </li>
                  <li>
                    We follow industry-standard security practices to protect your data.
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsPrivacySection;
