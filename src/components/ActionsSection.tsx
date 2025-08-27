import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Headphones, Bell, Flag, Users, Book } from "lucide-react";

const ActionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Départements
          </h2>
          <p className="text-lg text-gray-600">
            Alignement des Départements avec la Vision et la Mission de Miel-Fondal : 
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Radio className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Tetea Média, Tetea Mazingira, FRESE et LEVERSGN</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Contribuent directement à la sensibilisation et à la promotion de causes environnementales et sociales.
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                En savoir plus
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Headphones className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Watoto Radio et Mushakulu Fm</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Favorisent l'accès à l'information et le dialogue intergénérationnel.
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                Écouter
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Book className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Injili Everywhere</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Soutient le développement des jeunes et promeut des valeurs positives, chrétiennes.
                </p>
              </div>
              <Button className="text-white text-sm bg-[#d39108]">
                Soutenir
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Users className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Family Recess Camp “Camp de récréation familial” </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Offre des formations professionnelles et linguistiques aux enfants et aux personnes adultes dans un format ludique et familial.
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
