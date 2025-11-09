import { Card } from "@/components/ui/card";
import { Music, Heart, Globe, Users } from "lucide-react";
import coraMascot from "@/assets/cora-mascot.jpg";

const About = () => {
  const features = [
    {
      icon: Music,
      title: "Música Original",
      description: "Canciones creadas para inspirar el cambio y la esperanza"
    },
    {
      icon: Heart,
      title: "Impacto Real",
      description: "100% de las donaciones van directamente a las ONGs"
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Colaboramos con organizaciones de todo el mundo"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Unidos por la música y el cambio social"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Qué es <span className="text-primary">Utopian Pop</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos un proyecto musical que transforma la pasión por la música en acción social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Nuestra Misión</h3>
            <p className="text-lg text-muted-foreground">
              En Utopian Pop creemos que la música tiene el poder de cambiar el mundo. Por eso, 
              cada canción que creamos está vinculada a una causa social importante.
            </p>
            <p className="text-lg text-muted-foreground">
              Cuando donas para recibir nuestra música, no solo obtienes canciones únicas y 
              cuidadosamente producidas, sino que también contribuyes directamente a organizaciones 
              que están haciendo una diferencia real en el mundo.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img 
                src={coraMascot} 
                alt="Cora - Utopian Pop Mascot" 
                className="relative w-full max-w-md h-auto animate-float rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
