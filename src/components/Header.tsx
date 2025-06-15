
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/f3aacb73-1808-4aa6-b994-bed9d9f69470.png" alt="Miel Fondal Logo" className="h-16" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Search size={20} />
              </button>
              
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
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
  );
};

export default Header;
