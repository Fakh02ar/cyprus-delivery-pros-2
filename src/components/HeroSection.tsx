import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            Start Earning with
            <span className="block text-primary-glow">Jimmy Fleet</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in-up stagger-1">
            Cyprus's leading delivery service. Join 100+ riders earning daily with Wolt partnership
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <Button 
              size="lg" 
              className="btn-hero text-xl px-12 py-6"
              onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Jimmy Fleet Today
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline text-xl px-8 py-6 border-white text-white hover:bg-white hover:text-accent"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up stagger-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">100+</div>
              <div className="text-lg opacity-80">Active Riders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">24/7</div>
              <div className="text-lg opacity-80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">2023</div>
              <div className="text-lg opacity-80">Established</div>
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