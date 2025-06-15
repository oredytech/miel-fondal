
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ActionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos actions concrètes pour un impact durable
          </h2>
          <p className="text-lg text-gray-600">
            Depuis sa création, Miel-Fondal a lancé des actions significatives qui transforment positivement les communautés en RDC.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Promotion et adaptation de la transformation</h3>
              <p className="text-sm text-gray-300 mb-4">
                Construction et mise en oeuvre de centaines d'initiatives de changement pour renforcer la résilience des populations locales.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                Découvrir
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Renforcement capacitaire</h3>
              <p className="text-sm text-gray-300 mb-4">
                Formation technique professionnelle pour améliorer les capacités techniques et managements de la population.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                Découvrir
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Inclusion sociale et économique</h3>
              <p className="text-sm text-gray-300 mb-4">
                Encourager les pratiques professionnelles inclusives et créer les techniques de formation et développement.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                Découvrir
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Sécurité alimentaire et nutrition</h3>
              <p className="text-sm text-gray-300 mb-4">
                Améliorer l'accès à une alimentation saine et nutritive grâce aux techniques agricoles durables.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                Découvrir
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
