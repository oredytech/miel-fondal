
import { useState } from 'react';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from '@/components/Layout';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    { title: "Accueil", description: "Page d'accueil de Miel Fondal", url: "/" },
    { title: "Réalisations", description: "Nos principales réalisations", url: "/realisations" },
    { title: "Expériences", description: "Nos expériences et témoignages", url: "/experiences" },
    { title: "Projets", description: "Nos projets en cours et futurs", url: "/projets" },
    { title: "Blog", description: "Articles et actualités", url: "/blog" },
    { title: "Contacts", description: "Nous contacter", url: "/contacts" }
  ];

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/lovable-uploads/9f8e900a-d10d-4f39-9d64-c92b55a659be.png')`
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header avec bouton retour */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-[#2d2d2d]">Recherche</h1>
          </div>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher sur le site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-[#9c6b04] focus:border-[#d39108] rounded-lg"
              />
            </div>
          </div>

          {/* Résultats de recherche */}
          <div className="max-w-4xl mx-auto">
            {searchQuery.length > 0 ? (
              <>
                <p className="text-gray-600 mb-6">
                  {filteredResults.length} résultat(s) trouvé(s) pour "{searchQuery}"
                </p>
                <div className="space-y-4">
                  {filteredResults.map((result, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Link to={result.url} className="block">
                          <h3 className="text-xl font-semibold text-[#9c6b04] hover:text-[#d39108] mb-2">
                            {result.title}
                          </h3>
                          <p className="text-gray-600">{result.description}</p>
                          <span className="text-sm text-gray-400 mt-2 inline-block">
                            {window.location.origin}{result.url}
                          </span>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                  Rechercher du contenu
                </h2>
                <p className="text-gray-500">
                  Tapez dans la barre de recherche pour trouver ce que vous cherchez
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
