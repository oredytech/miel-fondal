import Layout from '@/components/Layout';
import { Heart, Target, MapPin, Briefcase, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InjiliEverywhere = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Injili Everywhere</h1>
              <p className="text-xl mb-8 leading-relaxed">
                L'Évangile au service de l'autonomisation
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto italic">
                "L'Évangile partout dans le monde" - Lier l'évangélisation à l'autonomisation 
                socio-économique des jeunes chrétiens en RDC.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Description
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                "Injili Everywhere" ("L'Évangile partout dans le monde") est un programme de la 
                <strong> Fondation Miel-Fondal</strong> qui a pour mission de lier l'évangélisation 
                à l'autonomisation socio-économique des jeunes chrétiens.
              </p>
              <p>
                Il ne se limite pas à la diffusion du message spirituel, mais vise à doter les jeunes 
                des outils et des compétences nécessaires pour être économiquement autonomes. Le programme 
                repose sur le principe que l'Évangile peut être vécu et diffusé non seulement par la parole, 
                mais aussi par des actions concrètes qui transforment la vie des individus et de leurs communautés.
              </p>
              <p>
                Il soutient des projets d'entrepreneuriat, des formations professionnelles et des activités 
                génératrices de revenus, tout en ancrant ces initiatives dans des valeurs chrétiennes de 
                diligence, de probité et de service.
              </p>
            </CardContent>
          </Card>

          {/* Objectifs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                Objectifs
              </CardTitle>
              <CardDescription>
                Des objectifs doubles, combinant l'aspect spirituel et le développement pratique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Soutenir l'évangélisation</h4>
                  <p className="text-muted-foreground">
                    Le programme utilise l'autonomisation comme une stratégie pour l'évangélisation. 
                    En améliorant les conditions de vie des jeunes, il les encourage à être des témoins 
                    actifs de leur foi, non seulement par la parole, mais aussi par leur succès et leur 
                    contribution positive à la société.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Autonomiser les jeunes chrétiens</h4>
                  <p className="text-muted-foreground">
                    Il s'agit de former une génération de jeunes leaders capables de subvenir à leurs besoins 
                    et de créer de la valeur économique. Le programme offre des formations en métiers 
                    (artisanat, agriculture, technologie, etc.), des conseils en gestion d'entreprise et 
                    un accès à des micro-financements pour lancer leurs propres projets.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Promouvoir des valeurs chrétiennes de travail</h4>
                  <p className="text-muted-foreground">
                    En intégrant la foi dans le développement professionnel, le programme encourage les 
                    jeunes à adopter des valeurs telles que l'honnêteté, la persévérance et l'excellence 
                    dans leur travail, transformant ainsi leur activité économique en un moyen de glorifier Dieu.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Approche innovante */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Approche innovante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary">Dimension spirituelle</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Évangélisation par l'exemple</li>
                    <li>• Témoignage de vie transformée</li>
                    <li>• Valeurs chrétiennes dans les affaires</li>
                    <li>• Développement du leadership spirituel</li>
                  </ul>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary">Dimension économique</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Formation professionnelle</li>
                    <li>• Accompagnement entrepreneurial</li>
                    <li>• Accès au micro-financement</li>
                    <li>• Création d'emplois durables</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Domaines de formation */}
          <Card>
            <CardHeader>
              <CardTitle>Domaines de formation</CardTitle>
              <CardDescription>
                Les secteurs d'activité soutenus par le programme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Artisanat</h4>
                  <p className="text-sm text-muted-foreground">
                    Formations en métiers manuels et créatifs
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Agriculture</h4>
                  <p className="text-sm text-muted-foreground">
                    Techniques agricoles modernes et durables
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Technologie</h4>
                  <p className="text-sm text-muted-foreground">
                    Compétences numériques et innovation
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Commerce</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestion d'entreprise et marketing
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Développement de services communautaires
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Formation en leadership chrétien
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Région */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Région d'intervention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Le programme "Injili Everywhere" est principalement mis en œuvre en 
                <strong> République Démocratique du Congo</strong>.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  La Fondation Miel-Fondal travaille sur le terrain pour identifier les besoins spécifiques 
                  des jeunes dans les différentes provinces et adapter ses projets d'autonomisation pour 
                  qu'ils soient pertinents et efficaces dans le contexte socio-économique local.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Valeurs chrétiennes */}
          <Card>
            <CardHeader>
              <CardTitle>Valeurs chrétiennes intégrées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Honnêteté</h4>
                  <p className="text-sm text-muted-foreground">
                    Intégrité dans toutes les transactions
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Persévérance</h4>
                  <p className="text-sm text-muted-foreground">
                    Détermination face aux défis
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Qualité dans le travail accompli
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InjiliEverywhere;