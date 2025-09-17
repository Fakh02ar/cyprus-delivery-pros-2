import { Button } from "@/components/ui/button";

const JoinUsSection = () => {
  return (
    <section id="join-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
              How to Join Jimmy Fleet
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your journey with us in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card-elegant text-center relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Legal Resident</h3>
              <p className="text-muted-foreground text-sm">Be a legal resident of Cyprus or on legal visa</p>
            </div>
            
            <div className="card-elegant text-center relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Valid ID</h3>
              <p className="text-muted-foreground text-sm">Have a valid Cypriot ID or residence permit "Yellow Slip"</p>
            </div>
            
            <div className="card-elegant text-center relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Driver's License</h3>
              <p className="text-muted-foreground text-sm">Have a valid driver's license if needed (depending on vehicle type)</p>
            </div>
            
            <div className="card-elegant text-center relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Registration</h3>
              <p className="text-muted-foreground text-sm">Be able to register as a freelancer or work via Jimmy Fleet</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="btn-success text-xl px-12 py-6 mb-4">
              Apply Now - Start Today
               <a
             href="https://api.whatsapp.com/send?phone=35794575089"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:opacity-80 transition-opacity p-2 text-white rounded-full pt-3"
             >
          <i className="fa-brands fa-whatsapp text-xl"></i>
           </a>
            </Button>
            <p className="text-muted-foreground">
              Ready to start earning? Join our growing team of professional riders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;