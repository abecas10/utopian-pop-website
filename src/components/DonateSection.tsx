import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Heart, Mail } from "lucide-react";

interface NGO {
  id: string;
  name: string;
  accountNumber: string;
}

const DonateSection = () => {
  const [selectedNGO, setSelectedNGO] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showDialog, setShowDialog] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<NGO | null>(null);
  const { toast } = useToast();

  const ngos: NGO[] = [
    { id: "msf", name: "Médicos Sin Fronteras", accountNumber: "ES12 1234 5678 9012 3456 7890" },
    { id: "stc", name: "Save the Children", accountNumber: "ES98 7654 3210 9876 5432 1098" },
    { id: "ai", name: "Amnistía Internacional", accountNumber: "ES45 6789 0123 4567 8901 2345" }
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedNGO || !amount || !email) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    const ngo = ngos.find(n => n.id === selectedNGO);
    if (ngo) {
      setPaymentInfo(ngo);
      setShowDialog(true);
      
      // Update counter (simulated)
      const currentTotal = parseFloat(localStorage.getItem('totalDonated') || '2450');
      const newTotal = currentTotal + parseFloat(amount);
      localStorage.setItem('totalDonated', newTotal.toString());
      
      toast({
        title: "¡Gracias por tu compromiso!",
        description: `Tu donación de €${amount} será procesada.`,
      });
    }
  };

  const handleConfirmDonation = () => {
    toast({
      title: "Email enviado",
      description: "Recibirás la canción en tu correo una vez confirmemos tu donación.",
    });
    setShowDialog(false);
    setSelectedNGO("");
    setAmount("");
    setEmail("");
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Haz tu <span className="text-primary">Donación</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Elige una ONG, dona y recibe nuestra música exclusiva
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-2">
            <form onSubmit={handleDonate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ngo">Selecciona una ONG</Label>
                <Select value={selectedNGO} onValueChange={setSelectedNGO}>
                  <SelectTrigger id="ngo">
                    <SelectValue placeholder="Elige una organización" />
                  </SelectTrigger>
                  <SelectContent>
                    {ngos.map(ngo => (
                      <SelectItem key={ngo.id} value={ngo.id}>
                        {ngo.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Cantidad a donar (€)</Label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="10.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Tu email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Te enviaremos la canción a este correo
                </p>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Heart className="w-5 h-5 mr-2" />
                Continuar con la donación
              </Button>
            </form>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>100% de tu donación va directamente a la ONG seleccionada</p>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Información de pago</DialogTitle>
            <DialogDescription>
              Transfiere {amount}€ a la siguiente cuenta bancaria
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Organización</Label>
              <p className="font-semibold">{paymentInfo?.name}</p>
            </div>
            
            <div className="space-y-2">
              <Label>Número de cuenta</Label>
              <p className="font-mono font-semibold bg-muted p-3 rounded">
                {paymentInfo?.accountNumber}
              </p>
            </div>

            <div className="space-y-2">
              <Label>Cantidad</Label>
              <p className="text-2xl font-bold text-primary">€{amount}</p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Próximos pasos:</p>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Realiza la transferencia bancaria</li>
                    <li>Una vez confirmemos el pago</li>
                    <li>Recibirás la canción en {email}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setShowDialog(false)} className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleConfirmDonation} className="flex-1">
              Confirmar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DonateSection;
