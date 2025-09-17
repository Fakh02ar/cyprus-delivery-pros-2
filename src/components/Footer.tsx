const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-40">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JF</span>
              </div>
              <span className="text-2xl font-bold">Jimmy Fleet</span>
            </div>
            <p className="text-white/80 mb-4">
              Cyprus's leading delivery service partner. Join our team of professional riders and start earning today with delivery partnership best fleet inside Cyprus.
            </p>
            <div className="flex space-x-4">
            <a
             href="https://api.whatsapp.com/send?phone=35794575089"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:opacity-80 transition-opacity p-2 bg-white rounded-full pt-3"
       >
    <i className="fa-brands fa-whatsapp text-green-500 text-2xl"></i>
  </a>
</div>

          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Jimmy Fleet</a></li>
              <li><a href="#join-us" className="hover:text-white transition-colors">How to Join</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Rider Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Jimmy Fleet. All rights reserved. Partnership with Wolt - Cyprus's trusted delivery service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;