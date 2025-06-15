
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#9c6b04]">
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
                <Link to="/experiences" className="text-white hover:text-[#d39108] transition-colors font-medium">Expériences</Link>
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
              <Link to="/experiences" className="text-white hover:text-[#d39108]">Expériences</Link>
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
  );
};

export default Header;
