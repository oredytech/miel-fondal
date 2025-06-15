import { Mail, Phone, MapPin, Facebook, Send } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black text-white py-[29px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/lovable-uploads/8ea7e9f0-b6a9-4a64-a8a6-44636ba3eb85.png" alt="Miel Fondal Logo" className="w-full h-auto" />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Départements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Watoto Radio</li>
              <li>Injili Everywere</li>
              <li>Tetea Mazingira</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+243840349640</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@meilfondal.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Telegram</span>
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 my-0 py-0">
          <p className="py-[6px]">Copyright © 2025 MIEL FONDAL | Fièrement conçu par Oredy TECHNOLOGIES</p>
        </div>
      </div>
    </footer>;
};
export default Footer;