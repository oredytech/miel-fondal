
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const HeroSection = () => {
  const backgroundImages = [
    "/lovable-uploads/4d7248bc-caa6-4831-8038-1896c5792049.png",
    "/lovable-uploads/2c960919-608e-4678-a9a8-7b3e314ac1c4.png",
    "/lovable-uploads/889116bc-4820-442a-8158-32c119a35a1e.png",
    "/lovable-uploads/7071e294-2a3e-40bc-8aa4-5751254872ad.png",
    "/lovable-uploads/8fe1c3aa-1a5c-4a14-a251-0da65db21110.png"
  ];

  return (
    <section className="relative py-16" style={{marginTop: '60px'}}>
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <Carousel 
          className="h-full w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {backgroundImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full">
                  <img 
                    src={image} 
                    alt={`Background ${index + 1}`}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-white/40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
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
          <div className="flex justify-center">
            <div className="bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
              <img src="/lovable-uploads/24df8bff-b8d5-40d4-b409-723adb89c88d.png" alt="Miel Fondal Logo" className="rounded-lg max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
