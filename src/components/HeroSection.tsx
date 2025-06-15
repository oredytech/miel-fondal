import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="relative min-h-screen" style={{
      backgroundColor: '#9c6b04'
    }}>
      {/* Background overlay with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3e2e14]/10 to-[#d39108]/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#d39108] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-[#3e2e14] rounded-full opacity-40 animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
      <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-[#d39108] rounded-full opacity-50 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      <div className="absolute top-60 left-40 w-1.5 h-1.5 bg-[#3e2e14] rounded-full opacity-30 animate-pulse" style={{
        animationDelay: '1.5s'
      }}></div>

      {/* Integrated Header */}
      <header className="relative z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <img alt="Miel Fondal Logo" className="h-16" src="/lovable-uploads/763dba11-3f77-4075-98de-7039fbc49676.png" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="flex items-center space-x-4">
                <button onClick={() => setIsSearchOpen(true)} className="p-2 text-white hover:text-[#d39108] transition-colors">
                  <Search size={20} />
                </button>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-white hover:text-[#d39108] transition-colors font-medium">Accueil</Link>
                  <Link to="/realisations" className="text-white hover:text-[#d39108] transition-colors font-medium">Réalisations</Link>
                  <a href="#" className="text-white hover:text-[#d39108] transition-colors font-medium">Expériences</a>
                  <a href="#" className="text-white hover:text-[#d39108] transition-colors font-medium">Projets</a>
                  <a href="#" className="text-white hover:text-[#d39108] transition-colors font-medium">Blog</a>
                  <a href="#" className="text-white hover:text-[#d39108] transition-colors font-medium">Contacts</a>
                  <Button className="text-white bg-[#3e0202]">
                    Faire un don
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-white hover:text-[#d39108]">Accueil</Link>
                <Link to="/realisations" className="text-white hover:text-[#d39108]">Réalisations</Link>
                <a href="#" className="text-white hover:text-[#d39108]">Expériences</a>
                <a href="#" className="text-white hover:text-[#d39108]">Projets</a>
                <a href="#" className="text-white hover:text-[#d39108]">Blog</a>
                <a href="#" className="text-white hover:text-[#d39108]">Contacts</a>
                <Button className="bg-[#d39108] hover:bg-[#d39108]/90 text-white w-full">
                  Faire un don
                </Button>
              </nav>
            </div>
          </div>
        )}

        {/* Search Dialog */}
        <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <CommandInput placeholder="Rechercher..." />
          <CommandList>
            <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem>
                <span>Accueil</span>
              </CommandItem>
              <CommandItem>
                <span>Réalisations</span>
              </CommandItem>
              <CommandItem>
                <span>Expériences</span>
              </CommandItem>
              <CommandItem>
                <span>Projets</span>
              </CommandItem>
              <CommandItem>
                <span>Blog</span>
              </CommandItem>
              <CommandItem>
                <span>Contacts</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex items-center" style={{
      minHeight: 'calc(100vh - 100px)'
    }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider font-medium text-slate-200">
                NOTRE MISSION
              </p>
              <h1 className="text-5xl font-bold leading-tight lg:text-5xl">
                Un avenir 
                <span className="text-[#3e0202]"> durable</span> et 
                <span className="text-white"> inclusif</span>
              </h1>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed max-w-lg">Miel-Fondal œuvre à faire de la RDC un modèle de développement social et environnemental à travers des projets innovants qui éduquent, sensibilisent et responsabilisent toutes les générations.
          </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-[#3e0202]">
                DÉCOUVRIR
              </Button>
              <Button variant="outline" className="border-white hover:bg-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 text-amber-800">
                EN SAVOIR PLUS
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main logo container */}
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-[#d39108]/20 shadow-2xl">
                <img src="/lovable-uploads/24df8bff-b8d5-40d4-b409-723adb89c88d.png" alt="Miel Fondal Logo" className="w-80 h-auto rounded-2xl" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d39108] rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#3e2e14] rounded-full opacity-60 animate-pulse" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#d39108] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d39108] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
