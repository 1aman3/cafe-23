
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  CreditCard, 
  Truck, 
  ShoppingBag, 
  Calendar, 
  Accessibility,
  Heart,
  Share2,
  GitCompare,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { 
  RESTAURANT_NAME, 
  ADDRESS, 
  RATING, 
  VOTES, 
  PHONE, 
  PRICE_RANGE, 
  FEATURES, 
  OPENING_HOURS, 
  MENU_ITEMS, 
  GALLERY_IMAGES 
} from './constants';

const FeatureIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'credit-card': return <CreditCard size={18} />;
    case 'truck': return <Truck size={18} />;
    case 'shopping-bag': return <ShoppingBag size={18} />;
    case 'calendar': return <Calendar size={18} />;
    case 'accessibility': return <Accessibility size={18} />;
    default: return <Star size={18} />;
  }
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="bg-white text-black px-2 py-0.5 rounded italic">23</span>
          {RESTAURANT_NAME}
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#info" className="hover:text-white transition-colors">Information</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button 
          className="hidden md:block glass px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
          onClick={() => window.open(`tel:${PHONE}`, '_self')}
        >
          Book a Table
        </button>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#info" onClick={() => setIsMenuOpen(false)}>Information</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="w-full bg-white text-black py-3 rounded-full font-bold">Book a Table</button>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover"
          alt="Restaurant interior"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open Now
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} strokeWidth={2} />
              ))}
              <span className="text-white text-sm font-semibold ml-2">{RATING} ({VOTES} reviews)</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter">
            Authentic Flavors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-500">
              Unique Experiences.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Experience the finest paneer, chole bhature, and signature coffee in the heart of Muzaffarpur. 
            Enjoy our professional service and delightful atmosphere all year round.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all group">
              View Our Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              See Location
            </button>
          </div>
        </div>
      </div>

      {/* Social proof floating elements */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-4">
        <div className="glass p-4 rounded-2xl flex items-center gap-4 max-w-xs animate-bounce transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
             <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" />
          </div>
          <div>
            <p className="text-sm font-semibold">"Best paneer in town!"</p>
            <p className="text-xs text-gray-500">— Anjali R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <Hero />

      {/* Info Bar (Floating Grid Style) */}
      <section id="info" className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="glass p-8 rounded-3xl md:col-span-2 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl font-bold">Restaurant Details</h2>
                <div className="flex gap-2">
                  <button className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><Heart size={20} /></button>
                  <button className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><GitCompare size={20} /></button>
                  <button className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><Share2 size={20} /></button>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl"><MapPin className="text-gray-400" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1 uppercase text-xs tracking-widest">Address</h3>
                    <p className="text-lg text-white/90">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl"><Phone className="text-gray-400" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1 uppercase text-xs tracking-widest">Call Us</h3>
                    <p className="text-lg text-white/90">{PHONE}</p>
                    <p className="text-sm text-gray-500">For bookings and inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl"><Clock className="text-gray-400" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1 uppercase text-xs tracking-widest">Hours</h3>
                    <p className="text-lg text-white/90">Daily: 10:30 AM — 10:30 PM</p>
                    <p className="text-sm text-green-500 font-semibold mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Open Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-3">
              {FEATURES.map(f => (
                <span key={f.id} className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm font-medium border-white/5 group-hover:border-white/10 transition-all">
                  <FeatureIcon icon={f.icon} />
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & Order */}
          <div className="flex flex-col gap-6">
            <div className="glass p-8 rounded-3xl flex-1 flex flex-col justify-center items-center text-center">
              <span className="text-gray-500 uppercase text-xs tracking-[0.2em] font-bold mb-2">Price Range</span>
              <p className="text-3xl font-bold mb-4">{PRICE_RANGE}</p>
              <div className="w-full h-px bg-white/10 mb-6" />
              <button className="w-full bg-white text-black py-4 rounded-2xl font-bold mb-3 hover:scale-[1.02] transition-transform">
                Order Delivery
              </button>
              <button className="w-full glass py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                Takeaway Order
              </button>
            </div>
            
            <div className="glass rounded-3xl overflow-hidden h-48 relative group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2066" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Map representation"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white text-black rounded-full font-bold shadow-2xl flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform">
                  <MapPin size={20} /> View on Map
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 mb-2 italic">Atmosphere & Food</p>
              <h2 className="text-5xl font-bold">Photo Gallery</h2>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/60 transition-colors group">
              All Photos <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
             {GALLERY_IMAGES.map((img, idx) => (
               <div key={idx} className={`relative overflow-hidden rounded-2xl group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                 <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="p-4 glass rounded-full"><ArrowRight /></div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Specialties</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Hand-crafted recipes using the freshest ingredients to bring the authentic taste of Muzaffarpur to your table.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {MENU_ITEMS.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 relative">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                  <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full font-bold">{item.price}</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">{item.name}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="glass px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
               Explore Full Menu
             </button>
          </div>
        </div>
      </section>

      {/* Opening Hours & Contact */}
      <section className="py-20 glass border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-10">Opening Hours</h2>
            <div className="space-y-4">
              {OPENING_HOURS.map(oh => (
                <div key={oh.day} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
                  <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">{oh.day}</span>
                  <span className="font-bold">{oh.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="p-10 bg-white text-black rounded-[3rem] text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to visit us?</h3>
              <p className="text-gray-600 mb-8 font-medium">We're located in Muzaffarpur, Bihar. We'd love to serve you some great coffee and tasty paneer!</p>
              <div className="flex flex-col gap-3">
                 <button className="bg-black text-white py-4 rounded-2xl font-bold text-lg">
                   Get Directions
                 </button>
                 <button className="border border-black py-4 rounded-2xl font-bold text-lg hover:bg-black/5 transition-colors">
                   Call for Booking
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="bg-white text-black px-1.5 py-0.5 rounded italic text-sm">23</span>
            {RESTAURANT_NAME}
          </div>
          <p className="text-gray-500 text-sm">© 2024 {RESTAURANT_NAME}. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
