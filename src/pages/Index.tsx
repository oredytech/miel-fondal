
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🍯</span>
              </div>
              <span className="font-bold text-xl">MIEL FONDAL</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Réalisations</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Expériences</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Projets</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Contacts</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                PARTICIPER
              </Button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Un avenir durable et inclusif pour la RDC
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Miel-Fondal accompagne la population de Pays dans sa Démocratisation du 
                Changement climatique et développement Durable et environnemental du 
                territoire national de la République Démocratique du Congo. L'accès aux 
                services de qualité pour tous les citoyens de la RDC fait nos priorités 
                spécialisées durable valorisé et responsabilisé de nos les 
                prérogatives familier prise développement des actions pour tout la développer 
                durément et assurer un avenir prospère pour les générations futures.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                ADHÉSION À LA TRANSFORMATION
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/lovable-uploads/a75ce3d9-b44b-4b23-8250-9a682b5ea636.png" alt="Community work 1" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1594736797933-d0c3d3d69d6f?w=400&h=300&fit=crop" alt="Community work 2" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" alt="Community work 3" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop" alt="Community work 4" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">À propos de Miel-Fondal</h2>
              <p className="text-gray-300 mb-6">
                Nous avons comme visée que chacun mémoriseront la des hommes comprend diverses idéaux. 
                Nous trouvons que comprendre des services agricoles au changement abusé les domaines 
                pérenniser nécessaires et les conditions de tous. Il favoriser pour accéder 
                également de pêches publiques de façons locales et international tous avec. 
                Pour maintenir et la transformation, nous devons tous éprouver d'engager dans 
                l'évolution qui l'implique dans toutes les activités que de manière générale 
                l'occupation de développement.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                VOIR PLUS DE PROJETS
              </Button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop" alt="About us" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
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

      {/* Organization Structure */}
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

      {/* Blog Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🍯</span>
                </div>
                <span className="font-bold text-xl">MIEL FONDAL</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Départements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Développement</li>
                <li>Éducation</li>
                <li>Environnement</li>
                <li>Social</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contacts</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@mielfondal.org</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+243 XX XXX XXXX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kinshasa, RDC</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Partenaires</h3>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-blue-600 rounded"></div>
                <div className="w-12 h-8 bg-red-600 rounded"></div>
                <div className="w-12 h-8 bg-yellow-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 MIEL FONDAL. TOUS DROITS RÉSERVÉS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
