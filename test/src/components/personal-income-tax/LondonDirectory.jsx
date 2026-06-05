import React from 'react';

const LondonDirectory = () => {
  const areas = {
    col1: ['Barking', 'Beckenham', 'Bexley', 'Brixton', 'Bromley'],
    col2: ['Dartford', 'East-London', 'Enfield', 'Erith', 'Guildford'],
    col3: ['Harlow', 'Harrow', 'Hounslow', 'Hornchurch', 'Kingston'],
    col4: ['Romford', 'Staines', 'South-London', 'Sutton', 'Streatham'],
    col5: ['Thornton-Heath', 'Twickenham', 'Watford', 'Woking', 'Wimbledon']
  };

  return (
    <section className="bg-[#064E3B] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Areas In London We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.values(areas).map((col, index) => (
            <ul key={index} className="space-y-2">
              {col.map((area, i) => <li key={i}>{area}</li>)}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonDirectory;
