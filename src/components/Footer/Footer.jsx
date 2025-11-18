import React, { useState } from "react";
import LegalModal from "../LegalModal";

const Footer = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      {/* ⚡ MODALS */}
      <LegalModal
        open={openModal === "terms"}
        onClose={() => setOpenModal(null)}
        title="Terms & Conditions"
      >
        <p>
          By using ZenFoo QuickMart, you agree to follow our platform’s rules and
          guidelines. Please read these terms carefully.
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Prices & product availability may change anytime.</li>
          <li>Orders cannot be modified after dispatch.</li>
          <li>Users are responsible for protecting their account credentials.</li>
          <li>ZenFoo may cancel suspicious or fraudulent orders.</li>
          <li>Delivery times may vary due to traffic or weather.</li>
        </ul>
      </LegalModal>

      <LegalModal
        open={openModal === "privacy"}
        onClose={() => setOpenModal(null)}
        title="Privacy Policy"
      >
        <p>
          ZenFoo respects and protects your privacy. Your personal data is secure
          and never shared without permission.
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>We collect minimal necessary information to deliver orders.</li>
          <li>Your data is never sold or shared with third parties.</li>
          <li>Payment details are fully encrypted.</li>
          <li>You may request account deletion anytime.</li>
          <li>We follow industry-standard security protocols.</li>
        </ul>
      </LegalModal>

      {/* ⭐ FULL ORIGINAL FOOTER BELOW */}
      <footer className="bg-zenfoo-dark text-white">
        <div className="w-full px-4 py-12">
          <div className="max-w-7xl mx-auto">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 border-b border-zenfoo-muted/30">

              {/* BRAND */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-zenfoo-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <h2 className="text-2xl font-bold">ZenFoo</h2>
                </div>

                <p className="text-zenfoo-muted text-lg max-w-md">
                  Groceries and daily essentials delivered to your doorstep in just 10 minutes.
                  Fresh, fast, and reliable.
                </p>

                {/* APP DOWNLOAD BUTTONS */}
                <div className="flex space-x-4 pt-4">
                  <button className="bg-black hover:bg-gray-800 px-6 py-3 rounded-lg flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.924 17.315c..."></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </button>

                  <button className="bg-black hover:bg-gray-800 px-6 py-3 rounded-lg flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792..."></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* LINKS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                {/* COMPANY */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Company</h3>
                  <ul className="space-y-2 text-zenfoo-muted">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                    <li><a href="#" className="hover:text-white">Press</a></li>
                  </ul>
                </div>

                {/* CONTACT */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact</h3>
                  <ul className="space-y-2 text-zenfoo-muted">
                    <li><a href="#" className="hover:text-white">Help & Support</a></li>
                    <li><a href="#" className="hover:text-white">Partner with us</a></li>
                    <li><a href="#" className="hover:text-white">Ride with us</a></li>
                    <li><a href="#" className="hover:text-white">FAQs</a></li>
                  </ul>
                </div>

                {/* ⭐ LEGAL — Updated with modals */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Legal</h3>
                  <ul className="space-y-2 text-zenfoo-muted">
                    <li>
                      <button onClick={() => setOpenModal("terms")} className="hover:text-white">
                        Terms&Conditions
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setOpenModal("privacy")} className="hover:text-white">
                        Privacy Policy
                      </button>
                    </li>
                    <li><a href="#" className="hover:text-white">Security</a></li>
                    <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                  </ul>
                </div>

                {/* QUICK LINKS */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-zenfoo-muted">
                    <li><a href="#" className="hover:text-white">Fruits & Vegetables</a></li>
                    <li><a href="#" className="hover:text-white">Dairy & Eggs</a></li>
                    <li><a href="#" className="hover:text-white">Snacks & Drinks</a></li>
                    <li><a href="#" className="hover:text-white">Personal Care</a></li>
                  </ul>
                </div>

              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
              
              {/* COPYRIGHT */}
              <div className="text-zenfoo-muted text-sm">
                © 2024 ZenFoo. All rights reserved.
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
