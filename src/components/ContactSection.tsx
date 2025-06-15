
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Rapide</h2>
            <p className="text-gray-600 mb-6">
              Nous savons besoin de votre de soutien actuelle de Miel-Fondal. Écrivons 
              nous pour nous contacter quelques facilement pour nous informer 
              votre demande ou votre intérêt pour nos activités.
            </p>

            <form className="space-y-4">
              <Input placeholder="Votre Nom *" required />
              <Input placeholder="Votre Email *" type="email" required />
              <Input placeholder="Votre Numéro Tél" type="tel" />
              <Textarea placeholder="Votre message" rows={5} />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Envoyer
              </Button>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=600&fit=crop" 
              alt="Contact person" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
