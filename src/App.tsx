/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Phone, MessageCircle, Calendar, MapPin, Star, Wifi, Coffee, Utensils, Car, ShieldCheck, Sunrise, Sunset, Users, Heart, Briefcase, Camera, ChevronDown, Menu, X } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "09022079868";
  const whatsappNumber = "919022079868";
  const address = "Mulshi Kh., Maharashtra 412108";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100">
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "Yatri LakeView Villa",
          "alternateName": "यात्री लेकव्यू विला",
          "description": "Premium Lake View Villa in Mulshi offering a serene nature retreat near Pune and Mumbai.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mulshi Kh.",
            "addressRegion": "Maharashtra",
            "postalCode": "412108",
            "addressCountry": "IN"
          },
          "telephone": "+919022079868",
          "url": "https://ais-dev-bkffvucym5oajhdkhsdoit-519384424627.asia-southeast1.run.app",
          "checkinTime": "12:00:00",
          "checkoutTime": "11:00:00",
          "priceRange": "₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "15"
          },
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Lake View", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Rooftop Terrace", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Private Parking", "value": true }
          ]
        })}
      </script>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-emerald-800">Yatri LakeView Villa</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-sm font-medium hover:text-emerald-700 transition-colors">About</a>
              <a href="#amenities" className="text-sm font-medium hover:text-emerald-700 transition-colors">Amenities</a>
              <a href="#gallery" className="text-sm font-medium hover:text-emerald-700 transition-colors">Gallery</a>
              <a href="#experience" className="text-sm font-medium hover:text-emerald-700 transition-colors">Experience</a>
              <a href="#location" className="text-sm font-medium hover:text-emerald-700 transition-colors">Location</a>
              <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md">
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-stone-900 transition-all shadow-md">
                <Phone size={16} /> Call Now
              </a>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="p-2 text-emerald-600">
                <WhatsAppIcon size={24} />
              </a>
              <a href={`tel:${phoneNumber}`} className="p-2 text-emerald-800">
                <Phone size={24} />
              </a>
              
              {/* Quick Link Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 p-2 text-stone-600 hover:text-emerald-800 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Links</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-stone-100 py-2 z-50 overflow-hidden">
                      <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">About</a>
                      <a href="#amenities" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Amenities</a>
                      <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Gallery</a>
                      <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Experience</a>
                      <a href="#location" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Location</a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-lake-view.jpg" 
            alt="Scenic Lake View Villa in Mulshi" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Ultimate Lake View Villa in Mulshi
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-10 font-light leading-relaxed">
            Escape to a serene sanctuary where the mountains meet the water. Our <span className="font-semibold">Private Villa</span> in <span className="font-semibold">Mulshi</span> offers an unparalleled <span className="font-semibold">Lake View</span> experience, perfect for those seeking peace, luxury, and nature's embrace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl flex items-center justify-center gap-2">
              <WhatsAppIcon size={20} /> WhatsApp Us
            </a>
            <a href={`tel:${phoneNumber}`} className="bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-stone-100 transition-all shadow-xl flex items-center justify-center gap-2">
              <Calendar size={20} /> Book Now
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white hidden md:block">
          <p className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll to Explore</p>
          <div className="w-px h-12 bg-white/30 mx-auto"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/villa-exterior.jpg" 
                  alt="Yatri LakeView Villa Exterior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
                <p className="text-3xl font-bold mb-1">4.9/5</p>
                <p className="text-sm opacity-80">Rated by our guests for exceptional hospitality and views.</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">Welcome to Paradise</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">About Yatri LakeView Villa</h3>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Nestled in the heart of the Sahyadri mountains, <span className="font-semibold text-stone-900">Yatri LakeView Villa</span> is more than just a place to stay; it is an experience crafted for the soul. As a premier <span className="font-semibold text-stone-900">resort in Mulshi</span>, we pride ourselves on offering a home-away-from-home that balances rustic charm with modern comfort.
                </p>
                <p>
                  Our journey began with a simple vision: to create a space where travelers could disconnect from the digital noise and reconnect with nature. Whether you are watching the mist roll over the Mulshi Dam waters or enjoying a quiet sunrise from our rooftop, every moment here is designed to be timeless.
                </p>
                <p>
                  Located just a short drive from Pune and Mumbai, we offer the perfect <span className="font-semibold text-stone-900">weekend getaway near Pune</span>. Our villa is meticulously maintained, ensuring that every guest experiences the warmth of Indian hospitality combined with the breathtaking beauty of Maharashtra's landscape.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-stone-100 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-stone-400 text-xs uppercase tracking-widest mb-1">Check-in</span>
                  <span className="font-bold text-stone-900">12:00 PM</span>
                </div>
                <div className="w-px h-8 bg-stone-200"></div>
                <div className="flex flex-col">
                  <span className="text-stone-400 text-xs uppercase tracking-widest mb-1">Check-out</span>
                  <span className="font-bold text-stone-900">11:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a refreshing break?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">Book your stay at the most scenic <span className="underline decoration-emerald-400 underline-offset-4">Lake View Villa in Mulshi</span> today and wake up to the sound of nature.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phoneNumber}`} className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-all shadow-lg">Call Now: 090220 79868</a>
            <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-lg flex items-center gap-2">
              <WhatsAppIcon size={18} /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">The Yatri Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-900">Why Choose Us?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Uninterrupted Lake Views",
                desc: "Our strategic location offers panoramic views of the Mulshi lake and dam, visible from almost every corner of the villa.",
                icon: <Sunrise className="text-emerald-600" size={32} />
              },
              {
                title: "Private & Exclusive",
                desc: "Enjoy the luxury of a private villa near Pune. No crowded lobbies, just you and your loved ones in total privacy.",
                icon: <ShieldCheck className="text-emerald-600" size={32} />
              },
              {
                title: "Rooftop Experience",
                desc: "Our expansive rooftop is perfect for stargazing, morning yoga, or a cozy evening with a bonfire and music.",
                icon: <Sunset className="text-emerald-600" size={32} />
              },
              {
                title: "Authentic Local Cuisine",
                desc: "Savor the taste of Maharashtra with home-cooked meals prepared with fresh, locally sourced ingredients.",
                icon: <Utensils className="text-emerald-600" size={32} />
              },
              {
                title: "Pet Friendly",
                desc: "Don't leave your furry friends behind! We welcome pets so the whole family can enjoy the vacation together.",
                icon: <Heart className="text-emerald-600" size={32} />
              },
              {
                title: "High-Speed Connectivity",
                desc: "Perfect for workations. Stay connected with reliable Wi-Fi while surrounded by the tranquility of the hills.",
                icon: <Wifi className="text-emerald-600" size={32} />
              }
            ].map((usp, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{usp.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-stone-900">{usp.title}</h4>
                <p className="text-stone-600 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">Comfort Redefined</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8">Modern Amenities for a Seamless Stay</h3>
              <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                We have carefully curated our facilities to ensure your <span className="font-semibold">stay in Mulshi</span> is as comfortable as it is memorable. From cozy bedding to outdoor fun, we've got it all covered.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Spacious Bedrooms with Lake View", icon: <Users size={18} /> },
                  { label: "High-Speed Wi-Fi (Workation Ready)", icon: <Wifi size={18} /> },
                  { label: "Fully Equipped Kitchen", icon: <Utensils size={18} /> },
                  { label: "Rooftop Terrace & Sit-out", icon: <Camera size={18} /> },
                  { label: "Private Parking Space", icon: <Car size={18} /> },
                  { label: "24/7 Power Backup", icon: <ShieldCheck size={18} /> },
                  { label: "Hot Water & Modern Bathrooms", icon: <Coffee size={18} /> },
                  { label: "Indoor Games & Entertainment", icon: <Briefcase size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/bedroom-view.jpg" alt="Luxury Bedroom" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
              <img src="/living-room.jpg" alt="Villa Interior" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="/rooftop-terrace.jpg" alt="Rooftop View" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="/dining-area.jpg" alt="Dining Area" className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-bold mb-4">The Yatri Experience</h2>
            <h3 className="text-3xl md:text-6xl font-bold">More Than Just a Stay</h3>
          </div>
          
          <div className="space-y-32">
            {/* Experience 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <h4 className="text-3xl font-bold mb-6 text-emerald-400 italic">Wake Up to the Lake</h4>
                <p className="text-xl text-stone-300 leading-relaxed font-light">
                  Imagine drawing the curtains to find the shimmering blue waters of Mulshi Lake greeting you. The morning mist dances on the surface as the first rays of the sun illuminate the Sahyadri peaks. This isn't a dream; it's your morning at <span className="text-white font-medium">Yatri LakeView Villa</span>. Our <span className="text-white font-medium">Lake View Villa in Mulshi</span> ensures that nature is your constant companion.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img src="/morning-mist.jpg" alt="Morning Lake View" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2">
                <h4 className="text-3xl font-bold mb-6 text-emerald-400 italic">Rooftop Revelries</h4>
                <p className="text-xl text-stone-300 leading-relaxed font-light">
                  As the sun sets, our rooftop transforms into a magical space. Whether it's a barbecue night with friends or a quiet evening stargazing with your partner, the cool mountain breeze and the vast open sky create an atmosphere of pure bliss. It's the ultimate <span className="text-white font-medium">nature retreat in Mulshi</span>.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img src="/evening-ambience.jpg" alt="Rooftop Night" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <h4 className="text-3xl font-bold mb-6 text-emerald-400 italic">A Haven for Peace</h4>
                <p className="text-xl text-stone-300 leading-relaxed font-light">
                  In the quiet corners of our villa, you'll find the peace you've been searching for. Read a book, meditate to the sound of birds, or simply watch the clouds drift by. Our <span className="text-white font-medium">scenic villa in Maharashtra</span> is designed to help you slow down and appreciate the beauty of the present moment.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img src="/tranquil-corner.jpg" alt="Peaceful Reading" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">Visual Tour</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-stone-900">Every Corner a Masterpiece</h3>
            </div>
            <p className="text-stone-500 max-w-md text-sm leading-relaxed">
              Explore the intricate details and expansive spaces of Yatri LakeView Villa. From lush gardens to cozy bedrooms, every space is designed for your comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img src="/bedroom-2.jpg" alt="Second Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold">Luxury Suite</p>
              </div>
            </div>
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl md:translate-y-12">
              <img src="/garden.jpg" alt="Villa Garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold">Lush Green Gardens</p>
              </div>
            </div>
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img src="/balcony.jpg" alt="Private Balcony" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold">Private Balcony Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">Tailored for You</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-900">Who is Yatri For?</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Families", desc: "Spacious rooms and safe surroundings for a perfect family bonding time.", icon: <Users size={24} /> },
              { title: "Friends", desc: "The ideal spot for a weekend reunion, complete with rooftop fun and music.", icon: <Camera size={24} /> },
              { title: "Couples", desc: "Romantic lake views and private spaces for an unforgettable anniversary or getaway.", icon: <Heart size={24} /> },
              { title: "Workations", desc: "Quiet, scenic, and connected. Boost your productivity in nature's lap.", icon: <Briefcase size={24} /> }
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-2xl text-center hover:bg-emerald-50 transition-colors border border-stone-100">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-emerald-600">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">{item.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <section className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Don't miss out on the best <span className="text-emerald-700">Mulshi dam stay</span> experience.</h2>
          <p className="text-stone-600 mb-10 text-lg">Our calendar fills up fast, especially for weekends. Secure your dates now for a premium <span className="font-semibold">stay in Mulshi</span>.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2">
              <WhatsAppIcon size={20} /> Check Availability
            </a>
            <a href={`tel:${phoneNumber}`} className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-lg flex items-center justify-center gap-2">
              <Phone size={20} /> Call to Book
            </a>
          </div>
        </div>
      </section>

      {/* Location & Nearby Attractions */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">The Heart of Mulshi</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8">Location & Accessibility</h3>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Located in <span className="font-semibold text-stone-900">Mulshi Kh.</span>, our villa is easily accessible from Pune (approx. 1.5 hours) and Mumbai (approx. 3.5 hours). We are situated in a prime spot that offers both seclusion and proximity to local attractions.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-stone-900">Address</p>
                    <p className="text-stone-600">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-stone-900">Plus Code</p>
                    <p className="text-stone-600">FGR7+W6 Mulshi Kh., Maharashtra</p>
                  </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-stone-900 mb-6">Nearby Attractions in Mulshi</h4>
              <ul className="space-y-4">
                {[
                  { name: "Mulshi Dam & Lake", dist: "Walking Distance", desc: "The primary attraction offering boating and scenic views." },
                  { name: "Tamhini Ghat", dist: "15 km", desc: "Famous for its lush greenery and numerous waterfalls during monsoon." },
                  { name: "Andharban Trek", dist: "12 km", desc: "A beautiful dark forest trek perfect for adventure enthusiasts." },
                  { name: "Temghar Dam", dist: "20 km", desc: "Another scenic dam nearby with great photographic spots." }
                ].map((attraction, i) => (
                  <li key={i} className="border-l-4 border-emerald-200 pl-4 py-1">
                    <span className="font-bold text-stone-900">{attraction.name}</span>
                    <span className="text-emerald-600 text-sm ml-2">({attraction.dist})</span>
                    <p className="text-stone-500 text-sm">{attraction.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.4!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2670000000001%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Yatri LakeView Villa Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">Guest Love</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-900">What Our Guests Say</h3>
            <div className="flex justify-center items-center gap-1 mt-6 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              <span className="ml-2 text-stone-900 font-bold text-xl">4.9/5</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                review: "The view from the rooftop is simply breathtaking. We spent our entire weekend just staring at the lake. The villa is clean, and the staff is very helpful. Best villa in Mulshi for a group of friends!",
                date: "2 months ago"
              },
              {
                name: "Priya Deshmukh",
                review: "Perfect for a family getaway. My kids loved the open space and the indoor games. The home-cooked food was the highlight of our stay. Highly recommend this private villa near Pune.",
                date: "1 month ago"
              },
              {
                name: "Aniket Kulkarni",
                review: "I came here for a workation and it was the best decision. The Wi-Fi was stable and the peaceful environment helped me focus. Waking up to the lake view every morning was a bonus!",
                date: "3 weeks ago"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 italic">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">"{review.review}"</p>
                <div className="flex items-center justify-between border-t border-stone-50 pt-4">
                  <span className="font-bold text-stone-900 not-italic">{review.name}</span>
                  <span className="text-stone-400 text-xs uppercase tracking-widest not-italic">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-stone-500 mb-6">Join our 15+ happy guests who rated us 4.9 stars!</p>
            <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline underline-offset-4 flex items-center gap-2 justify-center">
              <WhatsAppIcon size={16} /> Read more reviews on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/footer-scenic.jpg" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Your Dream Escape Awaits</h2>
          <p className="text-emerald-100 text-xl mb-12 font-light leading-relaxed">
            Experience the magic of Mulshi at <span className="font-semibold text-white">Yatri LakeView Villa</span>. Whether you're looking for adventure or tranquility, we have the perfect space for you.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <a href={`tel:${phoneNumber}`} className="bg-white text-emerald-900 px-6 py-4 rounded-xl font-bold hover:bg-stone-100 transition-all shadow-xl flex flex-col items-center gap-2">
              <Phone size={24} />
              <span>Call Now</span>
            </a>
            <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-xl flex flex-col items-center gap-2">
              <WhatsAppIcon size={24} />
              <span>WhatsApp Us</span>
            </a>
            <a href={`tel:${phoneNumber}`} className="bg-emerald-900 text-white border border-emerald-400 px-6 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-xl flex flex-col items-center gap-2">
              <Calendar size={24} />
              <span>Book Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-xl font-bold text-stone-900 mb-6">Contact Us</h5>
              <div className="space-y-4">
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-stone-600 hover:text-emerald-700 transition-colors">
                  <Phone size={18} className="text-emerald-600" />
                  <span>090220 79868</span>
                </a>
                <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-emerald-700 transition-colors">
                  <WhatsAppIcon size={18} className="text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <div className="flex items-start gap-3 text-stone-600">
                  <MapPin size={18} className="text-emerald-600 mt-1" />
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold text-stone-900 mb-6">Quick Links</h5>
              <ul className="space-y-3 text-stone-600">
                <li><a href="#about" className="hover:text-emerald-700 transition-colors">About the Villa</a></li>
                <li><a href="#amenities" className="hover:text-emerald-700 transition-colors">Our Amenities</a></li>
                <li><a href="#gallery" className="hover:text-emerald-700 transition-colors">Visual Gallery</a></li>
                <li><a href="#experience" className="hover:text-emerald-700 transition-colors">The Experience</a></li>
                <li><a href="#location" className="hover:text-emerald-700 transition-colors">Location & Map</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold text-stone-900 mb-6">Stay Information</h5>
              <div className="space-y-2 text-stone-600">
                <p className="flex justify-between"><span>Check-In</span> <span className="font-bold">12:00 PM</span></p>
                <p className="flex justify-between"><span>Check-Out</span> <span className="font-bold">11:00 AM</span></p>
                <p className="flex justify-between text-sm text-stone-400 pt-4 italic">Note: Advanced booking is mandatory for all stays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-2xl font-bold text-white mb-6 block">Yatri LakeView Villa</span>
            <p className="text-sm leading-relaxed max-w-2xl">
              Yatri LakeView Villa offers a premium escape with panoramic views of the Mulshi Dam. We provide an exclusive nature retreat for families, couples, and groups seeking tranquility and luxury in the heart of Maharashtra's Sahyadri mountains.
            </p>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs">© 2026 Yatri LakeView Villa. All rights reserved. | <span className="italic">Crafted for the ultimate Mulshi experience.</span></p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-stone-200 p-4 grid grid-cols-2 gap-4 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2">
          <WhatsAppIcon size={18} /> WhatsApp
        </a>
        <a href={`tel:${phoneNumber}`} className="bg-stone-900 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2">
          <Phone size={18} /> Call Now
        </a>
      </div>

      {/* Floating WhatsApp Button (Desktop & Mobile) */}
      <a 
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in booking Yatri LakeView Villa.`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-3"
        aria-label="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
          Chat with us
        </span>
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
