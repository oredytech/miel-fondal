
import { Mail, Phone, MapPin, Facebook, Send } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

const Footer = () => {
  const [api, setApi] = useState<any>();

  // Auto-scroll effect
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  const partners = [
    { name: "About Christ Prayer Ministry", color: "bg-blue-600" },
    { name: "Bora FM", color: "bg-cyan-500" },
    { name: "Amani Fm", color: "bg-blue-800" },
    { name: "Beroya FM", color: "bg-yellow-400" },
  ];

  return (
    <footer className="bg-black text-white py-[29px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img src="/lovable-uploads/8ea7e9f0-b6a9-4a64-a8a6-44636ba3eb85.png" alt="Miel Fondal Logo" className="w-full h-auto" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Départements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Watoto Radio</li>
              <li>Injili Everywere</li>
              <li>Tetea Mazingira</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>+243840349640</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span>info@mielfondal.org</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Partenaires</h3>
            <div className="w-full max-w-[200px] mx-auto md:mx-0">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {partners.map((partner, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                      <div className={`w-12 h-8 ${partner.color} rounded flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">
                          {partner.name}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 my-0 py-0">
          <p className="py-[6px]">Copyright © 2025 MIEL FONDAL | Fièrement conçu par Oredy TECHNOLOGIES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
