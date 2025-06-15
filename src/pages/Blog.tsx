import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "L'impact de l'éducation environnementale sur les jeunes",
      excerpt: "Découvrez comment nos programmes d'éducation transforment la perception de l'environnement chez les jeunes congolais...",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop",
      date: "15 Janvier 2025",
      author: "Équipe Miel Fondal",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Radio Watoto : Donner une voix aux enfants",
      excerpt: "Comment notre station de radio permet aux enfants de s'exprimer et de sensibiliser leur communauté...",
      image: "/lovable-uploads/b5bcfda5-2783-4f28-a062-cc7d0c160b92.png",
      date: "10 Janvier 2025",
      author: "Équipe Radio Watoto",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Injili Everywhere : L'évangile par tous les moyens",
      excerpt: "Notre approche innovante pour répandre l'évangile dans toute la République Démocratique du Congo...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      date: "8 Janvier 2025",
      author: "Département Injili",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Tetea Mazingira : Protéger notre environnement",
      excerpt: "Les actions concrètes que nous menons pour la protection de l'environnement en RDC...",
      image: "/lovable-uploads/941d66be-e492-48a4-9d3e-0cfe8c6ddb92.png",
      date: "5 Janvier 2025",
      author: "Département Tetea",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Nos partenariats stratégiques pour un impact durable",
      excerpt: "Comment nos collaborations avec d'autres organisations amplifient notre impact social...",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop",
      date: "2 Janvier 2025",
      author: "Direction Générale",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Bilan 2024 : Nos réalisations et perspectives",
      excerpt: "Retour sur une année riche en réalisations et présentation de nos objectifs pour 2025...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      date: "28 Décembre 2024",
      author: "Équipe Miel Fondal",
      readTime: "8 min"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-[#9c6b04] py-20 relative overflow-hidden">
          {/* Abeilles animées */}
          <div className="absolute top-20 right-20 w-4 h-4 text-[#d39108] animate-bee-float opacity-80">
            🐝
          </div>
          <div className="absolute top-40 left-32 w-3 h-3 text-[#d39108] animate-bee-float opacity-60" style={{
            animationDelay: '2s'
          }}>
            🐝
          </div>
          <div className="absolute bottom-32 right-40 w-3 h-3 text-[#d39108] animate-bee-float opacity-70" style={{
            animationDelay: '4s'
          }}>
            🐝
          </div>
          <div className="absolute top-60 left-20 w-4 h-4 text-[#d39108] animate-bee-float opacity-50" style={{
            animationDelay: '1s'
          }}>
            🐝
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4">Blog Miel Fondal</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Suivez nos actualités, découvrez nos projets et plongez dans nos réflexions 
              sur le développement durable et l'impact social en RDC.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      <Button variant="outline" size="sm" className="bg-[#9c6b04] text-white hover:bg-[#9c6b04]/90">
                        Lire plus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="bg-[#9c6b04] hover:bg-[#9c6b04]/90 text-white px-8 py-3">
                Charger plus d'articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#d39108] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Restez informé</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités 
              et nos réflexions sur le développement durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-[#3e0202] hover:bg-[#3e0202]/90 text-white px-6 py-3">
                S'abonner
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
