
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src="/lovable-uploads/6647e397-6122-4d74-83a6-4b085633170b.png" alt="Miel Fondal Logo" className="w-8 h-8" />
              </div>
              <span className="font-bold text-xl">MIEL FONDAL</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Départements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Développement</li>
              <li>Éducation</li>
              <li>Environnement</li>
              <li>Social</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@mielfondal.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+243 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kinshasa, RDC</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Partenaires</h3>
            <div className="flex space-x-2">
              <div className="w-12 h-8 bg-blue-600 rounded"></div>
              <div className="w-12 h-8 bg-red-600 rounded"></div>
              <div className="w-12 h-8 bg-yellow-500 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 MIEL FONDAL. TOUS DROITS RÉSERVÉS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
