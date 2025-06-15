
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Headphones, Bell, Flag } from "lucide-react";

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
          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 0 10px'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Radio className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Promotion de l'éducation et de la culture</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Watoto Radio : Création d'une radio dédiée aux enfants pour leur permettre de s'exprimer et d'apprendre.
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                Ecouter la radio
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 0 10px'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Headphones className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Sensibilisation environnementale</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Tetea Mazingira est un podcast de sensibilisation environnementale
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                Ecouter les podcasts
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 0 10px'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Bell className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Inclusion sociale et respect des aînés</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Mushakulu FM : Espace radiophonique permettant aux personnes âgées de partager leurs expériences et conseils.
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                Ecouter la radio
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 0 10px'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Flag className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Sécurité routière et citoyenneté active</h3>
                <p className="text-sm text-gray-300 mb-4">
                  FRESE : Campagnes pour sensibiliser à la sécurité routière.
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                Découvrir l'impact
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
