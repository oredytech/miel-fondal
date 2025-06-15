
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-white relative z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2">
              <Menu size={20} className="hidden md:block text-gray-600 cursor-pointer hover:text-orange-500 transition-colors" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src="/lovable-uploads/6647e397-6122-4d74-83a6-4b085633170b.png" alt="Miel Fondal Logo" className="w-8 h-8" />
              </div>
              <span className="font-bold text-xl">MIEL FONDAL</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600">SUIVEZ-NOUS</span>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - Fixed navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Rechercher..." 
                  className="pl-10 w-64 bg-gray-50 border-gray-200 focus:border-orange-500"
                />
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Réalisations</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Expériences</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Projets</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Blog</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contacts</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Faire un don
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white sticky top-[73px] z-40">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-orange-500">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Réalisations</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Expériences</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Projets</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Contacts</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Faire un don
              </Button>
              
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-600">SUIVEZ-NOUS</span>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
