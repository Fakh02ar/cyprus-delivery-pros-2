import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JF</span>
            </div>
            <span className="text-2xl font-bold text-accent">Jimmy Fleet</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a>
            <a href="#join-us" className="text-muted-foreground hover:text-accent transition-colors">Join Us</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors">Reviews</a>
          </nav>
          
          <Button
  asChild
  className="btn-success flex items-center justify-center gap-3 text-white text- px-6 py-4"
>
  <a
    href="https://api.whatsapp.com/send?phone=35794575089"
    target="_blank"
    rel="noopener noreferrer"
  >
    Start Today
    <i className="fa-brands fa-whatsapp text-lg ml-2"></i>
  </a>
</Button>

        </div>
      </div>
    </header>
  );
};

export default Header;