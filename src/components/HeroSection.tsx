import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional delivery rider in Cyprus"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col justify-center min-h-screen mt-30">
        <div className="max-w-4xl mx-auto mt-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 fade-in-up">
            Start Earning with
            <span className="block text-primary-glow">Jimmy Fleet</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-90 fade-in-up stagger-1">
            Cyprus's leading delivery service. Join 100+ riders earning daily with delivery partnership best fleet inside Cyprus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <Button 
              size="lg" 
              className="btn-hero text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6"
              onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Jimmy Fleet Today
                <a
             href="https://api.whatsapp.com/send?phone=35794575089"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:opacity-80 transition-opacity p-2 text-white rounded-full pt-3"
             >
          <i className="fa-brands fa-whatsapp text-xl"></i>
           </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 border-white hover:bg-white hover:text-accent"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 fade-in-up stagger-3">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-glow">100+</div>
              <div className="text-base sm:text-lg opacity-80">Active Riders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-glow">24/7</div>
              <div className="text-base sm:text-lg opacity-80">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
