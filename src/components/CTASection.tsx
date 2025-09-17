import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-primary/85"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Start Earning Today
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Join Jimmy Fleet today and experience earning from today. 
            Be part of Cyprus's most trusted delivery network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button className="btn-hero text-xl px-12 py-6">
              Join Jimmy Fleet Now
               <a
             href="https://api.whatsapp.com/send?phone=35794575089"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:opacity-80 transition-opacity p-2 text-white rounded-full pt-3"
             >
          <i className="fa-brands fa-whatsapp text-xl"></i>
           </a>
            </Button>
            
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">€7-15</div>
              <div className="text-lg opacity-80">Per Hour Potential</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">Flexible</div>
              <div className="text-lg opacity-80">Work Schedule</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">Weekly</div>
              <div className="text-lg opacity-80">Fast Payments</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full float-animation"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-success/20 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary-glow/20 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default CTASection;