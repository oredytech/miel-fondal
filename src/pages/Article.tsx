import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { stripHtmlTags, formatDate, createSlug, cleanArticleContent } from '@/utils/textUtils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Share2, Facebook, Twitter, Linkedin, Mail, Calendar, User, Clock, Eye, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useWordPressPosts(1, 20); // Récupérer plus d'articles pour la sidebar
  const [comment, setComment] = useState({ name: '', email: '', message: '' });

  // Trouver l'article spécifique par slug
  const article = data?.posts.find(post => createSlug(post.title.rendered) === slug);
  const otherPosts = data?.posts.filter(post => createSlug(post.title.rendered) !== slug).slice(0, 5);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild>
            <Link to="/blog">Retour au blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const author = article._embedded?.author?.[0]?.name || 'Équipe Miel-Fondal';

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title.rendered;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour soumettre le commentaire
    console.log('Commentaire soumis:', comment);
    // Reset form
    setComment({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#9c6b04]">Accueil</Link>
              <ChevronRight size={16} />
              <Link to="/blog" className="hover:text-[#9c6b04]">Blog</Link>
              <ChevronRight size={16} />
              <span className="text-gray-800">{stripHtmlTags(article.title.rendered)}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article principal */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Titre */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {stripHtmlTags(article.title.rendered)}
                  </h1>

                  {/* Métadonnées */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>5 min de lecture</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>142 vues</span>
                    </div>
                  </div>

                  {/* Image à la une */}
                  {featuredImage && (
                    <img 
                      src={featuredImage} 
                      alt={stripHtmlTags(article.title.rendered)}
                      className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                    />
                  )}

                  {/* Partage social */}
                  <div className="flex items-center gap-2 mb-8 p-4 bg-gray-50 rounded-lg">
                    <Share2 size={20} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Partager :</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="text-blue-600 hover:bg-blue-50"
                    >
                      <Facebook size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="text-blue-400 hover:bg-blue-50"
                    >
                      <Twitter size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="text-blue-700 hover:bg-blue-50"
                    >
                      <Linkedin size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('email')}
                      className="text-gray-600 hover:bg-gray-100"
                    >
                      <Mail size={16} />
                    </Button>
                  </div>

                  {/* Contenu de l'article */}
                  <div 
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: cleanArticleContent(article.content.rendered) }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Développement durable</Badge>
                      <Badge variant="secondary">Environnement</Badge>
                      <Badge variant="secondary">RDC</Badge>
                      <Badge variant="secondary">Impact social</Badge>
                    </div>
                  </div>

                  {/* Navigation entre articles */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex justify-between">
                      <Button variant="outline" asChild>
                        <Link to="/blog">← Article précédent</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/blog">Article suivant →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section commentaires */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>Commentaires (3)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Formulaire de commentaire */}
                  <form onSubmit={handleCommentSubmit} className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Laisser un commentaire</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="name">Nom *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={comment.name}
                          onChange={(e) => setComment(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={comment.email}
                          onChange={(e) => setComment(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="message">Commentaire *</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={comment.message}
                        onChange={(e) => setComment(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Partagez votre avis sur cet article..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="bg-[#9c6b04] hover:bg-[#9c6b04]/90">
                      Publier le commentaire
                    </Button>
                  </form>

                  <Separator className="mb-6" />

                  {/* Commentaires existants */}
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-l-2 border-gray-200 pl-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#9c6b04] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            U{i}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Utilisateur {i}</p>
                            <p className="text-sm text-gray-600">Il y a {i} jour{i > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Excellent article ! Les initiatives de Miel-Fondal sont vraiment inspirantes. 
                          Merci pour ce partage d'informations précieuses.
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Barre latérale */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* À propos de l'auteur */}
                <Card>
                  <CardHeader>
                    <CardTitle>À propos de l'auteur</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#9c6b04] rounded-full flex items-center justify-center text-white font-semibold">
                        {author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{author}</p>
                        <p className="text-sm text-gray-600">Rédacteur</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Membre de l'équipe Miel-Fondal, passionné par le développement durable 
                      et l'impact social en République Démocratique du Congo.
                    </p>
                  </CardContent>
                </Card>

                {/* Articles récents */}
                <Card>
                  <CardHeader>
                    <CardTitle>Articles récents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {otherPosts?.map((post) => (
                        <Link 
                          key={post.id} 
                          to={`/blog/${createSlug(post.title.rendered)}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=100&h=100&fit=crop"} 
                              alt={post.title.rendered}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm group-hover:text-[#9c6b04] transition-colors line-clamp-2">
                                {stripHtmlTags(post.title.rendered)}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                {formatDate(post.date)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      )) || (
                        <p className="text-sm text-gray-600">Aucun article récent disponible.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-[#9c6b04] to-[#d39108]">
                  <CardContent className="p-6 text-white">
                    <h3 className="font-bold text-lg mb-3">Newsletter</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Recevez nos derniers articles directement dans votre boîte mail.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        type="email" 
                        placeholder="Votre email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      />
                      <Button className="w-full bg-white text-[#9c6b04] hover:bg-white/90">
                        S'abonner
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Catégories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Catégories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        'Développement durable',
                        'Environnement',
                        'Formation',
                        'Impact social',
                        'Actualités'
                      ].map((category) => (
                        <Link 
                          key={category}
                          to={`/blog?category=${category.toLowerCase()}`}
                          className="flex items-center justify-between text-sm hover:text-[#9c6b04] transition-colors"
                        >
                          <span>{category}</span>
                          <span className="text-gray-500">(5)</span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;