import { Button } from "@/components/ui/button";
const BlogSection = () => {
  return <section className="py-16 bg-[#d39108]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Articles à gauche */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop" alt="Article 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">Ceci est le titre de l'article dans le blogue Miel Fondal</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipiscing elit. Nulla 
                  earum perspiciatis ut quam molestque soluta voluptatem 
                  autem vel hic exercitationem dolore tempora, magni perferendis...
                </p>
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                  Lire plus...
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop" alt="Article 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">Ceci est le titre de l'article dans le blogue Miel Fondal</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipiscing elit. Nulla 
                  earum perspiciatis ut quam molestque soluta voluptatem 
                  autem vel hic exercitationem dolore tempora, magni perferendis...
                </p>
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                  Lire plus...
                </Button>
              </div>
            </div>
          </div>

          {/* Contenu principal à droite */}
          <div className="text-white">
            <h2 className="text-6xl font-bold mb-8">Blog</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Le blog de Miel-Fondal est un espace de réflexion et d'action, pensé pour ceux qui aspirent à un monde plus durable et juste. À travers des articles éclairants, des analyses approfondies et des témoignages inspirants, nous explorons des thématiques essentielles telles que l'environnement, l'éducation, et le développement social. Chaque contenu vise à stimuler la réflexion et encourager des actions concrètes pour bâtir un avenir meilleur. Ensemble, engageons-nous dans une transformation positive et durable.
            </p>
            <Button className="text-white px-8 py-3 text-lg font-semibold bg-[#3e0202]">
              PLUS D'ARTICLES
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default BlogSection;