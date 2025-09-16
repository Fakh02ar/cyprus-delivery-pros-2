const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-success-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-accent">
            What Our Riders Say
          </h2>
          
          <div className="card-elegant max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-accent font-medium mb-8 leading-relaxed">
              "Jimmy Fleet has transformed our delivery process. Their service is reliable, fast, and the team is always professional. Highly recommend!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JF</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-accent text-lg">Jimmy Fleet Rider</div>
                <div className="text-muted-foreground">Professional Delivery Partner</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Happy Riders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;