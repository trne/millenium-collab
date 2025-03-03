import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/baseUi/button/button.component';
import { Input } from '@/components/baseUi/input/input.component';
import type { FooterProps } from './types.ts';

export function Footer({}: FooterProps = {}) {
  return (
    <footer className="bg-darkgreen text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About Green Flag</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press & Media</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Make a Claim</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Renew Your Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">Stay updated with our latest offers and news.</p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 px-3">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-sm mb-2">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Green Flag Limited. All rights reserved.</p>
          <p className="mt-2">
            Green Flag Limited is registered in England and Wales No. 01003081. Registered office: 1 Great Tower Street, London, EC3R 5AA.
          </p>
        </div>
      </div>
    </footer>
  );
}
