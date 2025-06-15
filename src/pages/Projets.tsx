
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Heart, Radio, Leaf, Globe, Calendar, MapPin, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Projets = () => {
  return (
    <Layout>
      {/* Header avec navigation de retour */}
      <section className="bg-[#9c6b04] py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl font-bold text-white">Nos Projets</h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            Découvrez tous nos projets qui transforment positivement les communautés congolaises à travers l'éducation, la sensibilisation et l'action sociale.
          </p>
        </div>
      </section>

      {/* Projets principaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1: Tetea Mazingira */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Tetea Mazingira</h3>
                <p className="text-gray-600 mb-4">
                  Programme de sensibilisation environnementale visant à protéger notre planète et éduquer les communautés sur les enjeux écologiques.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    National, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,200+ participants
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2022
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 2: Watoto Radio */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Watoto Radio</h3>
                <p className="text-gray-600 mb-4">
                  Station de radio dédiée aux enfants et aux jeunes, offrant des programmes éducatifs et de divertissement adaptés.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Kinshasa, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    800+ auditeurs quotidiens
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2023
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 3: Mushakulu FM */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Mushakulu FM</h3>
                <p className="text-gray-600 mb-4">
                  Radio communautaire axée sur l'information locale, la culture et l'éducation des populations adultes.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Provinces, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,500+ auditeurs
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2023
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 4: Injili Everywhere */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Injili Everywhere</h3>
                <p className="text-gray-600 mb-4">
                  Programme d'évangélisation et de soutien spirituel visant à répandre l'amour et l'espoir dans les communautés.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Multi-provinces, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    2,000+ bénéficiaires
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2021
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 5: Éducation Communautaire */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Éducation Communautaire</h3>
                <p className="text-gray-600 mb-4">
                  Programmes d'alphabétisation et de formation professionnelle pour autonomiser les communautés locales.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Kinshasa, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    600+ apprenants
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2022
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 6: Action Sociale */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Action Sociale</h3>
                <p className="text-gray-600 mb-4">
                  Initiatives d'aide humanitaire et de développement social pour améliorer les conditions de vie des plus vulnérables.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    National, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,000+ bénéficiaires
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2021
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section impact global */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#3e0202] text-center mb-12">Notre Impact Global</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">6</div>
              <p className="text-gray-600">Projets Actifs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">7,100+</div>
              <p className="text-gray-600">Bénéficiaires Directs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">12</div>
              <p className="text-gray-600">Provinces Couvertes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">4</div>
              <p className="text-gray-600">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez-Nous dans Nos Projets
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons créer un impact encore plus grand. Participez à nos projets ou proposez-nous de nouvelles initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#3e0202] text-white px-8 py-3 text-lg hover:bg-[#3e0202]/90">
              Devenir Bénévole
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#d39108] px-8 py-3 text-lg">
              Proposer un Projet
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projets;
