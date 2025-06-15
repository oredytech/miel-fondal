
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-900" style={{marginTop: '60px'}}>
      {/* Background overlay with texture */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-40 w-1 h-1 bg-emerald-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">
            <div className="space-y-2">
              <p className="text-emerald-300 text-sm uppercase tracking-wider font-medium">
                NOTRE MISSION
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Un avenir 
                <span className="text-emerald-400"> durable</span> et 
                <span className="text-emerald-400"> inclusif</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Miel-Fondal accompagne la population de la RDC dans sa démocratisation du 
              changement climatique et du développement durable pour assurer un avenir 
              prospère aux générations futures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-emerald-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
