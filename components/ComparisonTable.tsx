import React from 'react';

// Updated: Removed highlighting logic to fix text stacking
const ComparisonTable = () => {
  const giants = [
    {
      name: 'Nephilim',
      hebrew: 'נְפִילִים',
      source: 'Genesis 6:4, Numbers 13:33',
      description: 'Pre-flood giants, offspring of "sons of God" and "daughters of men." Name means "fallen ones" or "those who cause others to fall."',
      context: 'Existed before and after the flood; struck fear in the hearts of the Israelite spies',
      category: 'canonical'
    },
    {
      name: 'Elioud',
      hebrew: 'Ἐλιούδ',
      source: '1 Enoch 7:2, Book of Giants',
      description: 'The offspring of the Nephilim themselves, creating a second generation of hybrid beings. Known for violence and corruption.',
      context: 'Not mentioned in canonical Bible; detailed extensively in extrabiblical texts',
      category: 'apocryphal'
    },
    {
      name: 'Watchers',
      hebrew: 'עִירִין / Grigori',
      source: '1 Enoch 1-36, Daniel 4:13',
      description: 'The fallen angels who descended to earth, took human wives, and fathered the Nephilim. Led by Semjaza and Azazel.',
      context: 'Briefly mentioned in Daniel; extensively detailed in 1 Enoch',
      category: 'apocryphal'
    },
    {
      name: 'Rephaim',
      hebrew: 'רְפָאִים',
      source: 'Genesis 14:5, Deuteronomy 2:11',
      description: 'Ancient race of giants in Canaan. Name possibly means "dead ones" or "shades." Conquered by Chedorlaomer.',
      context: 'Mentioned as pre-Israelite inhabitants; linked to underworld in later texts',
      category: 'canonical'
    },
    {
      name: 'Anakim',
      hebrew: 'עֲנָקִים',
      source: 'Numbers 13:28-33, Deuteronomy 9:2',
      description: 'Tall, powerful people descended from Anak. Made the Israelite spies feel like "grasshoppers." Possibly related to Nephilim.',
      context: 'Inhabited the Promised Land; defeated by Joshua and Caleb',
      category: 'canonical'
    },
    {
      name: 'Emim',
      hebrew: 'אֵימִים',
      source: 'Genesis 14:5, Deuteronomy 2:10-11',
      description: 'Giants living in Moab, considered as tall as the Anakim. Name means "terrors" or "fearsome ones."',
      context: 'Displaced by the Moabites; feared by surrounding nations',
      category: 'canonical'
    },
    {
      name: 'Zamzummim',
      hebrew: 'זַמְזֻמִּים',
      source: 'Deuteronomy 2:20-21',
      description: 'Another race of giants, described as "strong and numerous." Lived in the land that became Ammon.',
      context: 'Destroyed by the Ammonites before Israelite conquest',
      category: 'canonical'
    },
    {
      name: 'Og of Bashan',
      hebrew: '',
      source: 'Deuteronomy 3:11, Numbers 21:33',
      description: 'Last of the Rephaim; king with an iron bed measuring 9 cubits long (13.5 feet). Defeated by Moses.',
      context: 'Mentioned as evidence of giants\' existence; his bed kept as a monument',
      category: 'historical'
    },
    {
      name: 'Goliath',
      hebrew: '',
      source: '1 Samuel 17:4-7',
      description: 'Famous Philistine giant, 6 cubits tall (9+ feet), defeated by young David. Possibly descended from the Anakim.',
      context: 'Champion of Gath; symbol of human courage overcoming impossible odds through faith',
      category: 'historical'
    }
  ];

  return (
    <>
      <div className="giants-table-wrapper my-12 rounded-2xl bg-white border-2 border-slate-200 p-8 shadow-xl">
      <div className="mb-8 text-center rounded-lg bg-linear-to-br from-slate-900 to-slate-800 p-6 -mx-2">
        <div className="mb-3 text-4xl font-bold md:text-5xl text-white">
          🏛️ Giants in Ancient Texts
        </div>
        <div className="text-xl md:text-2xl text-cyan-200">
          A Comparative Analysis of Nephilim, Elioud, and Related Beings
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-linear-to-r from-blue-600 to-blue-700" style={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29, 78, 216))' }}>
              <th className="border-b-4 border-blue-800 px-6 py-4 text-left text-lg font-bold uppercase tracking-wide text-white" style={{ color: '#ffffff', backgroundColor: 'transparent' }}>
                Name/Term
              </th>
              <th className="border-b-4 border-blue-800 px-6 py-4 text-left text-lg font-bold uppercase tracking-wide text-white" style={{ color: '#ffffff', backgroundColor: 'transparent' }}>
                Primary Source
              </th>
              <th className="border-b-4 border-blue-800 px-6 py-4 text-left text-lg font-bold uppercase tracking-wide text-white" style={{ color: '#ffffff', backgroundColor: 'transparent' }}>
                Description & Significance
              </th>
              <th className="border-b-4 border-blue-800 px-6 py-4 text-left text-lg font-bold uppercase tracking-wide text-white" style={{ color: '#ffffff', backgroundColor: 'transparent' }}>
                Biblical Context
              </th>
            </tr>
          </thead>
          <tbody>
            {giants.map((giant, index) => (
              <tr
                key={index}
                className="transition-all duration-200 hover:scale-[1.01] hover:bg-blue-50 hover:shadow-lg"
              >
                <td className="border-b-2 border-slate-200 px-6 py-5">
                  <div className="text-xl font-bold text-blue-700">
                    {giant.name}
                  </div>
                  {giant.hebrew && (
                    <div className="mt-1 text-lg text-slate-600">
                      {giant.hebrew}
                    </div>
                  )}
                </td>
                <td className="border-b-2 border-slate-200 px-6 py-5">
                  <div className="text-base italic text-slate-600">
                    {giant.source}
                  </div>
                </td>
                <td className="border-b-2 border-slate-200 px-6 py-5">
                  <div className="max-w-xl text-base leading-relaxed text-slate-700">
                    {giant.description}
                  </div>
                </td>
                <td className="border-b-2 border-slate-200 px-6 py-5">
                  <div className="text-base leading-relaxed text-slate-700">
                    {giant.context}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 rounded-lg bg-slate-50 p-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-blue-600"></div>
          <div className="text-sm text-slate-700 font-medium">Canonical Scripture</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-red-600"></div>
          <div className="text-sm text-slate-700 font-medium">Apocryphal/Deuterocanonical</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-green-600"></div>
          <div className="text-sm text-slate-700 font-medium">Historical/Archaeological</div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-8 border-t-2 border-slate-200 pt-6 text-center rounded-lg bg-slate-50 p-4">
        <div className="text-xl italic text-slate-700">
          "There were giants in the earth in those days..." — Genesis 6:4 (KJV)
        </div>
      </div>
    </div>
    </>
  );
};

export default ComparisonTable;
