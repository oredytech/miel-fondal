
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop" alt="Blog image 1" className="rounded-lg" />
            <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop" alt="Blog image 2" className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Blog</h2>
            <p className="text-gray-600 mb-8">
              Notre blog vous tient au courant sur un aperçu de nos histoires et 
              expériences incroyables que nous avons partagé au sein de l'avenir deux 
              mentalité à réussi Département qui sera au siècle qu'elle est. 
              Nous donnons des informations utiles pour vous aider à mieux comprendre 
              nos réalisations et partager nos efforts pour un développement durable, 
              les méthodes et les approches que nous adoptons dans notre travail, ainsi 
              que les recommandations et les bonnes pratiques que nous encourageons, 
              cela nous donne un à donner tous et chaque dans nos stratégies et nos 
              progrès et divers actions et stratégies.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-lg">Ceci est le titre de l'article dans le blog Miel-Fondal</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Voici le descriptif de l'article du blog qui donne un aperçu sur 
                  le contenu de l'article complet.
                </p>
                <Button variant="link" className="text-orange-500 p-0 mt-2">
                  LIRE PLUS →
                </Button>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-lg">Ceci est le titre de l'article dans le blog Miel-Fondal</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Voici le descriptif de l'article du blog qui donne un aperçu sur 
                  le contenu de l'article complet.
                </p>
                <Button variant="link" className="text-orange-500 p-0 mt-2">
                  LIRE PLUS →
                </Button>
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-8">
              PLUS D'ARTICLES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
