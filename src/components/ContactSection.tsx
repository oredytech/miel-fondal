
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)'
      }}
    >
      {/* Éléments décoratifs oranges */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-1 bg-orange-400 transform -rotate-12"></div>
        <div className="absolute top-24 left-16 w-24 h-1 bg-orange-400 transform -rotate-12"></div>
        <div className="absolute top-28 left-20 w-16 h-1 bg-orange-400 transform -rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-32 h-1 bg-orange-400 transform -rotate-12"></div>
        <div className="absolute bottom-24 right-16 w-24 h-1 bg-orange-400 transform -rotate-12"></div>
        <div className="absolute bottom-28 right-20 w-16 h-1 bg-orange-400 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Formulaire à gauche */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Rapide</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Nous avons besoin de savoir ce que vous pensez de Miel Fondal, n'importe 
              quelle question et/ou préoccupation sera répondu au plus bref délais. 
              Remplissez le formulaire ci-bas.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre Nom</label>
                <Input 
                  placeholder="Votre Nom" 
                  className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-orange-400 focus:ring-0 px-0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de famille</label>
                <Input 
                  placeholder="Nom de Famille" 
                  className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-orange-400 focus:ring-0 px-0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre Adresse Mail</label>
                <Input 
                  placeholder="Votre email" 
                  type="email" 
                  className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-orange-400 focus:ring-0 px-0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                <Textarea 
                  placeholder="Tapez votre message..." 
                  rows={4}
                  className="border-2 border-gray-300 rounded-lg bg-transparent focus:border-orange-400 focus:ring-0 resize-none"
                />
              </div>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-full font-semibold">
                Envoyer
              </Button>
            </form>
          </div>

          {/* Image à droite */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/e895f603-183e-4d3e-aa45-0ea43b7eb058.png"
                alt="Femme souriante utilisant un téléphone" 
                className="rounded-2xl shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
