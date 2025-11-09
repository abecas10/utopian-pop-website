import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface NGO {
  name: string;
  description: string;
  cause: string;
  accountNumber: string;
  website: string;
}

const NGOSection = () => {
  const ngos: NGO[] = [
    {
      name: "Médicos Sin Fronteras",
      description: "Ayuda médica de emergencia en zonas de conflicto y desastres",
      cause: "Salud Global",
      accountNumber: "ES12 1234 5678 9012 3456 7890",
      website: "https://www.msf.es"
    },
    {
      name: "Save the Children",
      description: "Protección de la infancia y educación en todo el mundo",
      cause: "Derechos de la Infancia",
      accountNumber: "ES98 7654 3210 9876 5432 1098",
      website: "https://www.savethechildren.es"
    },
    {
      name: "Amnistía Internacional",
      description: "Defensa de los derechos humanos y la justicia social",
      cause: "Derechos Humanos",
      accountNumber: "ES45 6789 0123 4567 8901 2345",
      website: "https://www.es.amnesty.org"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestras <span className="text-primary">ONGs Colaboradoras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con organizaciones comprometidas con el cambio social
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngos.map((ngo, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary"
            >
              <div className="space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                    {ngo.cause}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{ngo.name}</h3>
                  <p className="text-muted-foreground">{ngo.description}</p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Cuenta bancaria:</p>
                  <p className="font-mono text-sm font-semibold">{ngo.accountNumber}</p>
                </div>

                <a 
                  href={ngo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
                >
                  Visitar sitio web
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NGOSection;
