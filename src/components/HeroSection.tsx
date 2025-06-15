
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from 'lucide-react';
import { 
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-800 via-emerald-800 to-emerald-900">
      {/* Background overlay with texture */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-40 w-1 h-1 bg-emerald-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-50"></div>

      {/* Integrated Header */}
      <header className="relative z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/f3aacb73-1808-4aa6-b994-bed9d9f69470.png" alt="Miel Fondal Logo" className="h-20" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-white hover:text-orange-400 transition-colors"
                >
                  <Search size={20} />
                </button>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-white hover:text-orange-400 transition-colors">Accueil</a>
                  <a href="#" className="text-white hover:text-orange-400 transition-colors">Réalisations</a>
                  <a href="#" className="text-white hover:text-orange-400 transition-colors">Expériences</a>
                  <a href="#" className="text-white hover:text-orange-400 transition-colors">Projets</a>
                  <a href="#" className="text-white hover:text-orange-400 transition-colors">Blog</a>
                  <a href="#" className="text-white hover:text-orange-400 transition-colors">Contacts</a>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Faire un don
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-white hover:text-orange-400">Accueil</a>
                <a href="#" className="text-white hover:text-orange-400">Réalisations</a>
                <a href="#" className="text-white hover:text-orange-400">Expériences</a>
                <a href="#" className="text-white hover:text-orange-400">Projets</a>
                <a href="#" className="text-white hover:text-orange-400">Blog</a>
                <a href="#" className="text-white hover:text-orange-400">Contacts</a>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
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
      <div className="container mx-auto px-4 relative z-10 flex items-center" style={{minHeight: 'calc(100vh - 100px)'}}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">
            <div className="space-y-2">
              <p className="text-orange-300 text-sm uppercase tracking-wider font-medium">
                NOTRE MISSION
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Un avenir 
                <span className="text-orange-400"> durable</span> et 
                <span className="text-emerald-400"> inclusif</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Miel-Fondal accompagne la population de la RDC dans sa démocratisation du 
              changement climatique et du développement durable pour assurer un avenir 
              prospère aux générations futures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                DÉCOUVRIR
              </Button>
              <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                EN SAVOIR PLUS
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main logo container */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/24df8bff-b8d5-40d4-b409-723adb89c88d.png" 
                  alt="Miel Fondal Logo" 
                  className="w-80 h-auto rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-emerald-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
