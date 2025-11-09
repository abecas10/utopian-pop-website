import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const DonationCounter = () => {
  const [totalDonated, setTotalDonated] = useState(0);
  const targetAmount = 10000;

  useEffect(() => {
    // Simulated counter animation
    const savedAmount = localStorage.getItem('totalDonated');
    const startAmount = savedAmount ? parseFloat(savedAmount) : 2450;
    
    let current = 0;
    const increment = startAmount / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= startAmount) {
        setTotalDonated(startAmount);
        clearInterval(timer);
      } else {
        setTotalDonated(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const percentage = (totalDonated / targetAmount) * 100;

  return (
    <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur border-primary/20 shadow-2xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Impacto Colectivo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Total Donado
              </h2>
              
              <div className="relative">
                <div className="text-6xl md:text-8xl font-bold text-primary animate-pulse-glow">
                  €{totalDonated.toFixed(2)}
                </div>
                <p className="text-muted-foreground mt-2">
                  de €{targetAmount.toLocaleString()} objetivo
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>

              <p className="text-lg text-muted-foreground">
                Juntos estamos haciendo la diferencia. Cada donación cuenta.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationCounter;
