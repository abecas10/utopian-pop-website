import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { Music, Heart } from "lucide-react";

const Hero = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary/20" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="animate-float">
            <img 
              src={logo} 
              alt="Utopian Pop Logo" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
          
          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
            Música con <span className="text-primary">Propósito</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Donde cada canción es un acto de cambio. Dona, escucha y transforma el mundo.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToDonate}
              className="gap-2"
            >
              <Heart className="w-5 h-5" />
              Donar Ahora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="gap-2"
            >
              <Music className="w-5 h-5" />
              Conoce el Proyecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
