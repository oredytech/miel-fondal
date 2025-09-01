import Layout from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mic, Headphones, Globe, Target, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TeteaMazingira = () => {
  return (
    <Layout>
      {/* Header avec navigation de retour */}
      <section className="bg-[#9c6b04] py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl font-bold text-white">Tetea Mazingira Podcast</h1>
          <p className="text-white/90 text-lg mt-4 max-w-3xl">
            Un podcast dédié à la sensibilisation environnementale en République Démocratique du Congo, 
            donnant la parole aux communautés locales et aux experts sur les questions cruciales de notre environnement.
          </p>
        </div>
      </section>

      {/* Section principale avec iframe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-12" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#3e0202]">Écoutez nos épisodes</h2>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <iframe 
                    src="https://www.listennotes.com/podcasts/tetea-mazingira-podcast-makasi-mahamba-43N89DcHYfd/embed/" 
                    height="600px" 
                    width="100%" 
                    style={{ width: '1px', minWidth: '100%' }}
                    loading="lazy" 
                    frameBorder="0" 
                    scrolling="no"
                    title="Tetea Mazingira Podcast"
                  />
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Headphones className="w-4 h-4" />
                  <span>Disponible sur toutes les plateformes de podcast</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section épisodes en swahili */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3e0202] text-center mb-4">Épisodes en Swahili</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Découvrez nos discussions en swahili sur les questions environnementales qui touchent directement nos communautés locales.
            </p>
            
            <div className="space-y-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        7. Ujumbe wa DYFEM kuhusu Zahabu Safi pa Bikenge Jimboni Maniema inchini Kongo
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>10 novembre 2023</span>
                        <span>3:20</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        6. Bangi nayo ni mboleo, polisi isi ilunguze tena - Philippe Aksanti, Bio Grand Lac
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>23 mai 2023</span>
                        <span>11:03</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#3e0202] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        5. Angalisho - Apana kuchoma bangi - Fiston Muhingo
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>19 mai 2023</span>
                        <span>16:26</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        4. Mti ni mtu, Mtu ni mti - Master Philippe Aksanti, Ajanac/Goma
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>28 avril 2023</span>
                        <span>15:00</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#3e0202] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        3. Kama ulishaka kula kihembe - Thadhée Katshuva
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>26 avril 2023</span>
                        <span>14:21</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        2. Muji wa Goma ume kuwa kwenye hatari ya kuvamiwa na uchafu - Fiston Muhindo
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>28 mars 2023</span>
                        <span>15:46</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#3e0202] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-[#3e0202]">
                        1. Mulimo wa buyoga - Ir Faustin Mupira
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>4 novembre 2022</span>
                        <span>5:13</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center ml-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section objectifs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#3e0202] mb-4">Nos Objectifs</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Tetea Mazingira s'engage à créer un dialogue constructif autour des défis environnementaux de la RDC
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Donner la Parole</h3>
                <p className="text-gray-600">
                  Permettre aux communautés locales et aux experts de s'exprimer sur les questions environnementales qui les concernent directement.
                </p>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Sensibiliser</h3>
                <p className="text-gray-600">
                  Éduquer le public sur la gestion des ressources naturelles comme le cobalt et le coltan, et leurs impacts sur l'environnement.
                </p>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Mettre en Lumière</h3>
                <p className="text-gray-600">
                  Exposer les défis liés à l'exploitation minière artisanale et à la déforestation en République Démocratique du Congo.
                </p>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Informer</h3>
                <p className="text-gray-600">
                  Fournir des informations complètes et des analyses approfondies sur les problèmes environnementaux actuels.
                </p>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Proposer des Solutions</h3>
                <p className="text-gray-600">
                  Présenter des solutions possibles et des initiatives positives pour un développement durable en RDC.
                </p>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Impact Local</h3>
                <p className="text-gray-600">
                  Créer un impact positif direct sur les communautés en favorisant la prise de conscience environnementale.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section thématiques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3e0202] text-center mb-12">Nos Thématiques</h2>
            
            <div className="space-y-6">
              <Card className="shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Exploitation Minière Responsable</h3>
                  <p className="text-gray-600">
                    Discussion sur les pratiques d'extraction du cobalt et du coltan, leurs impacts sur les communautés 
                    et l'environnement, ainsi que les alternatives durables.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Préservation Forestière</h3>
                  <p className="text-gray-600">
                    Exploration des causes et conséquences de la déforestation en RDC, 
                    avec des témoignages de communautés affectées et des experts forestiers.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Changement Climatique</h3>
                  <p className="text-gray-600">
                    Analyse des effets du changement climatique sur la RDC et présentation 
                    de solutions d'adaptation et d'atténuation locales.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Économie Verte</h3>
                  <p className="text-gray-600">
                    Promotion d'alternatives économiques durables et présentation d'initiatives 
                    entrepreneuriales respectueuses de l'environnement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez la Conversation
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partagez vos expériences, posez vos questions ou proposez des sujets d'émission. 
            Ensemble, construisons un avenir plus durable pour la RDC.
          </p>
          <div className="flex items-center gap-2 justify-center text-white">
            <Headphones className="w-5 h-5" />
            <span className="text-lg">Abonnez-vous pour ne manquer aucun épisode</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeteaMazingira;