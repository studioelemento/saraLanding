import React from 'react';

export const partnerLogos = [
  { name: 'Air Asia', src: '/assets/partners/Air Asia Logo.png' },
  { name: 'IndiGo', src: '/assets/partners/Indigo Logo.png' },
  { name: 'Emirates', src: '/assets/partners/Emirates Logo.png' },
  { name: 'American Airlines', src: '/assets/partners/American Airlines Logo.png' },
  { name: 'Air India', src: '/assets/partners/Air India Logo copy.png' },
  { name: 'BWFS India', src: '/assets/partners/BWFS Logo.png' },
  { name: 'Çelebi Aviation', src: '/assets/partners/CelebiAviation Logo.png' },
  { name: 'EaseMyTrip', src: '/assets/partners/EaseMyTrip logo.png' },
  { name: 'Etihad Airways', src: '/assets/partners/Etihad Airways Logo.png' },
  { name: 'GMR Group', src: '/assets/partners/GMR Group Logo.png' },
  { name: 'Akasa Air', src: '/assets/partners/Akasa Air Logo.png' },
  { name: 'AirArabia', src: '/assets/partners/AirArabia Logo.png' },
  { name: 'Air India Express', src: '/assets/partners/Air India Express Logo.png' },
  { name: 'Harley Davidson', src: '/assets/partners/Harley Davidson Logo.png' },
  { name: 'ITC Limited', src: '/assets/partners/ITC Limited Logo.png' },
  { name: 'JW Marriott', src: '/assets/partners/JW Marriott logo.png' },
  { name: 'Kuwait Airways', src: '/assets/partners/Kuwait Airways Logo.png' },
  { name: 'Oberoi Hotels & Resorts', src: '/assets/partners/Oberoi  Logo.png' },
  { name: 'Park Hyatt', src: '/assets/partners/Park Hyatt Logo.png' },
  { name: 'Qatar Airways', src: '/assets/partners/Qatar Airways Logo.png' },
  { name: 'Radisson', src: '/assets/partners/Radisson Logo.png' },
  { name: 'SpiceJet', src: '/assets/partners/SpiceJet Logo.png' },
  { name: 'Star Air', src: '/assets/partners/Star Air Logo.png' },
  { name: 'Taj', src: '/assets/partners/Taj Logo.png' },
  { name: 'The Leela Group', src: '/assets/partners/The leela Group Logo.png' },
  { name: 'VFS Global', src: '/assets/partners/VFS Global Logo.png' },
  { name: 'Vistara', src: '/assets/partners/Vistara Logo.png' },
  { name: 'Westin Hotels', src: '/assets/partners/Westin Hotels Logo.png' },
  { name: 'Singapore Airlines', src: '/assets/partners/Singapore Airlines Logo.png' },
  { name: 'Oman Air', src: '/assets/partners/Oman Air Logo.png' },
];

export default function TopAirlines({ title = 'Careers Take Off with Top Airlines' }) {
  return (
    <section id="top-airlines" className="w-full bg-[#f8fafc] py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002B5B] mb-8 sm:mb-12 text-center font-outfit tracking-tight">
          {title}
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-5">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl h-16 sm:h-24 md:h-28 flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 overflow-hidden"
            >
              <img
                src={partner.src}
                alt={partner.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
