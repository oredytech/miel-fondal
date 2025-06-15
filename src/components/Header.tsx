import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SCROLL_TRIGGER = 30;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_TRIGGER);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  // Classe pour le header sticky et transition
  const headerClass = [
    "fixed w-full top-0 left-0 z-50 transition-all duration-300",
    scrolled
      ? "bg-white shadow border-b border-gray-200"
      : "bg-[#9c6b04] border-transparent",
  ].join(" ");

  const headerHeightClass = scrolled ? "h-10" : "h-16"; // 40px ou 64px

  // Classe texte principale (lien/menu)
  const mainTextClass = scrolled
    ? "text-[#2d2d2d] hover:text-[#9c6b04]"
    : "text-white hover:text-[#d39108]";

  // Classe pour le menu mobile - toujours lisible
  const mobileMenuTextClass = "text-[#2d2d2d] hover:text-[#9c6b04]";

  return (
    <header className={`${headerClass} ${headerHeightClass} flex items-center transition-all duration-300`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <div className="flex items-center space-x-2 min-w-0">
          {/* Logo (change selon scroll) */}
          {!scrolled && (
            <img
              alt="Miel Fondal Logo"
              className="h-12 w-auto transition-all duration-300"
              src="/lovable-uploads/763dba11-3f77-4075-98de-7039fbc49676.png"
              style={{ maxHeight: '48px' }}
            />
          )}
          {scrolled && (
            <>
              <img
                alt="Miel Fondal Logo Sticky"
                className="h-8 w-auto transition-all duration-300"
                src="/lovable-uploads/e6bbe60e-71ec-4867-bd6b-344afeb88254.png"
                style={{ maxHeight: '32px', minWidth: 32 }}
              />
              <span className="ml-2 text-[#2d2d2d] font-bold text-lg whitespace-nowrap transition-all duration-300">MIEL FONDAL</span>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <button
            className={
              "md:hidden focus:outline-none " +
              (scrolled ? "text-[#2d2d2d]" : "text-white")
            }
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/search')}
              className={`p-2 transition-colors ${mainTextClass}`}
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${mainTextClass} transition-colors font-medium`}>Accueil</Link>
              <Link to="/realisations" className={`${mainTextClass} transition-colors font-medium`}>Réalisations</Link>
              <Link to="/experiences" className={`${mainTextClass} transition-colors font-medium`}>Expériences</Link>
              <Link to="/projets" className={`${mainTextClass} transition-colors font-medium`}>Projets</Link>
              <Link to="/blog" className={`${mainTextClass} transition-colors font-medium`}>Blog</Link>
              <Link to="/contacts" className={`${mainTextClass} transition-colors font-medium`}>Contacts</Link>
              <Button
                asChild
                className={`transition-all font-semibold ${
                  scrolled
                    ? "bg-[#9c6b04] text-white hover:bg-[#d39108]"
                    : "bg-[#3e0202] text-white"
                } px-4 py-2 rounded`}
                style={{
                  minHeight: scrolled ? 32 : 40,
                  fontSize: scrolled ? '1rem' : '1.1rem'
                }}
              >
                <Link to="/donation">Faire un don</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t bg-white/95 border-gray-200 absolute top-full left-0 w-full animate-fade-in shadow-lg z-40 backdrop-blur-sm`}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`${mobileMenuTextClass} transition-colors`} onClick={()=>setIsMenuOpen(false)}>Accueil</Link>
              <Link to="/realisations" className={`${mobileMenuTextClass} transition-colors`} onClick={()=>setIsMenuOpen(false)}>Réalisations</Link>
              <Link to="/experiences" className={`${mobileMenuTextClass} transition-colors`} onClick={()=>setIsMenuOpen(false)}>Expériences</Link>
              <Link to="/projets" className={`${mobileMenuTextClass} transition-colors`} onClick={()=>setIsMenuOpen(false)}>Projets</Link>
              <Link to="/blog" className={`${mobileMenuTextClass} transition-colors`} onClick={()=>setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contacts" className={`${mobileMenuTextClass} transition-colors`} onClick={()=>setIsMenuOpen(false)}>Contacts</Link>
              <Button
                asChild
                className={`w-full transition-all font-semibold bg-[#9c6b04] text-white hover:bg-[#d39108]`}
                style={{
                  minHeight: 40,
                  fontSize: '1rem'
                }}
              >
                <Link to="/donation">Faire un don</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
