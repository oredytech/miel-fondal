
import { Button } from "@/components/ui/button";

const OrganizationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Une organisation structurée pour un impact maximal
          </h2>
          <p className="text-lg text-gray-600">
            Pour atteindre nos objectifs de transformation locale et environnementale, 
            Miel-Fondal s'appuie sur une structure organisationnelle solide et des 
            départements spécialisés qui coordonnent les efforts pour maximiser notre impact.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-6">
            STRUCTURE ORGANISATIONNELLE
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Département Développement et Communication</h3>
            <p className="text-sm text-gray-600">
              Mission : Élaborer les projet sur la base dans mobiliser des ressources, 
              gérer la communication interne et externe, et assurer la visibilité des 
              actions de l'organisation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Département Éducation et Culture</h3>
            <p className="text-sm text-gray-600">
              Mission : Promouvoir l'accès à l'éducation de qualité et développer les 
              programmes culturels pour renforcer l'identité et les valeurs communautaires.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Environnement et Développement Durable</h3>
            <p className="text-sm text-gray-600">
              Mission : Gérer les projets de protection de l'environnement, promouvoir les 
              pratiques durables et lutter contre le changement climatique.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Développement Social et Communautaire</h3>
            <p className="text-sm text-gray-600">
              Mission : Animer le développement social et communautaire en renforçant la 
              cohésion sociale et en promouvant l'inclusion de tous les groupes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
