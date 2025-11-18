import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zenfoo-dark text-white">
      <div className="w-full px-4 py-12">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand & Download */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 border-b border-zenfoo-muted/30">
            {/* Brand Section */}
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
              
              {/* Download Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="bg-black hover:bg-gray-800 transition-colors duration-200 px-6 py-3 rounded-lg flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.924 17.315c-.057.174-.193.332-.348.367-.156.035-.343-.052-.486-.202-.143-.15-.212-.357-.155-.531.057-.174.193-.332.348-.367.156-.035.343.052.486.202.143.15.212.357.155.531zm-2.14-3.491c-.114.349-.4.624-.711.651-.311.026-.627-.193-.741-.542-.114-.349-.057-.75.255-1.026.313-.276.699-.302.813.047.114.349.057.75-.255 1.026-.097.085-.183.143-.271.194v.001c-.088.051-.183.091-.275.119-.092.028-.188.044-.285.047-.097.003-.194-.006-.29-.025-.096-.019-.19-.049-.28-.089-.09-.04-.175-.09-.255-.149-.08-.059-.155-.127-.224-.203-.069-.076-.131-.16-.185-.25-.108-.18-.185-.38-.227-.588-.042-.208-.049-.422-.02-.633.029-.211.092-.417.187-.611.095-.194.22-.374.37-.532.15-.158.323-.292.513-.398.19-.106.395-.183.607-.229.213-.046.43-.06.646-.043.216.017.429.065.63.143.201.078.388.185.553.317.165.132.306.287.417.459.111.172.191.359.237.554.046.195.058.395.036.592-.022.197-.077.388-.163.566-.086.178-.202.341-.341.482-.139.141-.299.258-.474.347-.175.089-.363.149-.557.177-.194.028-.392.024-.587-.012-.195-.036-.384-.103-.56-.198v-.001c-.176-.095-.337-.217-.477-.361-.14-.144-.258-.309-.349-.489-.091-.18-.154-.373-.187-.572-.033-.199-.036-.402-.009-.601.027-.199.083-.391.166-.57.083-.179.192-.343.323-.487.131-.144.283-.266.45-.362.167-.096.347-.165.534-.204.187-.039.379-.048.568-.026.189.022.373.074.544.154.171.08.327.188.462.319.135.131.247.283.332.449.085.166.142.344.169.527.027.183.024.369-.009.55-.033.181-.096.355-.186.516-.09.161-.206.307-.342.432-.136.125-.291.228-.46.305-.169.077-.35.127-.536.148-.186.021-.375.013-.56-.024z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black hover:bg-gray-800 transition-colors duration-200 px-6 py-3 rounded-lg flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 10.937a.99.99 0 01-.61.217.99.99 0 01-.61-.217l10.937-10.937zm-2.302-2.302L12 10.208 1.814 20.391a.99.99 0 01-.217.61.99.99 0 01-.217.61l10.937-10.937z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2 text-zenfoo-muted">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-zenfoo-muted">
                  <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partner with us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Ride with us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-2 text-zenfoo-muted">
                  <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-zenfoo-muted">
                  <li><a href="#" className="hover:text-white transition-colors">Fruits & Vegetables</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Dairy & Eggs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Snacks & Drinks</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Personal Care</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Social & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-6">
              <a href="#" className="text-zenfoo-muted hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-zenfoo-muted hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-zenfoo-muted hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-zenfoo-muted text-sm">
              © 2024 ZenFoo. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;