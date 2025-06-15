
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="py-16 bg-[#d39108]">
      <div className="container mx-auto px-4">
        {/* Titre centré en haut */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white">Blog</h2>
        </div>

        {/* Articles en grille */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop" 
              alt="Article 1" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Ceci est le titre de l'article dans le blogue Miel Fondal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipiscing elit. Nulla 
                earum perspiciatis ut quam molestque soluta voluptatem 
                autem vel hic exercitationem dolore tempora, magni perferendis...
              </p>
              <Button asChild variant="outline" className="bg-black text-white hover:bg-gray-800">
                <Link to="/blog">Lire plus...</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop" 
              alt="Article 2" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Ceci est le titre de l'article dans le blogue Miel Fondal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipiscing elit. Nulla 
                earum perspiciatis ut quam molestque soluta voluptatem 
                autem vel hic exercitationem dolore tempora, magni perferendis...
              </p>
              <Button asChild variant="outline" className="bg-black text-white hover:bg-gray-800">
                <Link to="/blog">Lire plus...</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop" 
              alt="Article 3" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Ceci est le titre de l'article dans le blogue Miel Fondal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipiscing elit. Nulla 
                earum perspiciatis ut quam molestque soluta voluptatem 
                autem vel hic exercitationem dolore tempora, magni perferendis...
              </p>
              <Button asChild variant="outline" className="bg-black text-white hover:bg-gray-800">
                <Link to="/blog">Lire plus...</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bouton centré en bas */}
        <div className="text-center">
          <Button asChild className="text-white px-8 py-3 text-lg font-semibold bg-[#3e0202]">
            <Link to="/blog">PLUS D'ARTICLES</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
