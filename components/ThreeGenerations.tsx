import React from 'react';

const ThreeGenerations = () => {
  const generations = [
    {
      number: 1,
      title: 'The Watchers',
      originalName: 'Hebrew: עִירִין (Irin) • Greek: Ἐγρήγοροι (Grigori)',
      nature: 'Fallen Angels / Divine Beings',
      origins: 'Heaven, descended to Earth during the days of Jared',
      purpose: 'Originally sent to watch over humanity; rebelled and took human wives',
      leaders: 'Semjaza (chief), Azazel, Araqiel, Rameel, and 200 others',
      description:
        'The Watchers were angels tasked with observing mankind. According to 1 Enoch, they became enamored with human women\'s beauty and conspired to take them as wives, violating divine law. Led by Semjaza, 200 Watchers descended on Mount Hermon and swore an oath together. They taught humanity forbidden knowledge: weaponry, cosmetics, sorcery, astrology, and metallurgy.',
      verse: '"The sons of God saw that the daughters of men were beautiful, and they took as wives whomever they chose." — Genesis 6:2',
      characteristics: [
        '⚡ Supernatural Powers',
        '🧠 Forbidden Knowledge',
        '👼 Angelic Origin',
        '⚔️ Taught Warfare'
      ],
      color: 'blue'
    },
    {
      number: 2,
      title: 'The Nephilim',
      originalName: 'Hebrew: נְפִילִים (Nefilim) • Meaning: "The Fallen Ones"',
      nature: 'Angel-Human Hybrids / Demigods',
      parents: 'Watchers (fathers) × Human Women (mothers)',
      stature: 'Giants of immense size — 300 cubits tall (450 feet) according to 1 Enoch',
      lifespan: '500 years (according to Book of Jubilees)',
      description:
        'The Nephilim were the hybrid offspring of the Watchers and mortal women. Described as beings of enormous size and strength, they dominated the pre-flood world. According to 1 Enoch 7:3-5, they consumed all human resources, then turned to eating humans and even each other. Their violence and corruption became a primary reason for the Great Flood. The name "Nephilim" comes from the Hebrew root נָפַל (naphal), meaning "to fall."',
      verse: '"The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of man and they bore children to them. These were the mighty men who were of old, the men of renown." — Genesis 6:4',
      characteristics: [
        '🏔️ Gigantic Size',
        '💪 Superhuman Strength',
        '⚔️ Warriors/Tyrants',
        '🍖 Insatiable Appetite',
        '😈 Violent Nature'
      ],
      color: 'red'
    },
    {
      number: 3,
      title: 'The Elioud',
      originalName: 'Greek: Ἐλιούδ (Elioud) • Meaning: "God\'s Offspring" or "Born of God"',
      nature: 'Second-Generation Hybrids / Nephilim Descendants',
      parents: 'Nephilim (fathers) × Human Women (mothers)',
      status: 'Even more diluted divine bloodline; still giants but smaller than Nephilim',
      fate: 'Destroyed in the Great Flood; possibly ancestral to post-flood giant clans',
      description:
        'The Elioud represent the second generation of hybrids — the children born when the Nephilim themselves took human wives. While not mentioned in canonical scripture, the Book of Giants (Dead Sea Scrolls) and 1 Enoch reference their existence. They inherited some of the Nephilim\'s size and strength but were reportedly less powerful. Their name "Elioud" ironically means "born of God," despite being two generations removed from the angelic Watchers. Some scholars believe they may be connected to the post-flood giants like the Anakim, Rephaim, and descendants of Anak.',
      verse: '"And they became pregnant, and they bare great giants... And when the angels, the sons of heaven, beheld them, they became enamoured of them, and said to one another: Come, let us select for ourselves wives from the progeny of men, and let us beget children." — 1 Enoch 7:1-2',
      characteristics: [
        '👥 Second Generation',
        '🏔️ Still Giants (Smaller)',
        '⚔️ Warriors',
        '🌊 Destroyed in Flood',
        '❓ Mystery Lineage'
      ],
      color: 'orange'
    }
  ];

  type ColorKey = 'blue' | 'red' | 'orange';
  
  const colorClasses: Record<ColorKey, {
    border: string;
    badge: string;
    number: string;
    highlight: string;
    verse: string;
  }> = {
    blue: {
      border: 'border-l-blue-600',
      badge: 'from-blue-600 to-blue-700',
      number: 'from-purple-600 to-purple-700',
      highlight: 'from-yellow-200 to-yellow-300',
      verse: 'bg-green-50 border-green-500'
    },
    red: {
      border: 'border-l-red-600',
      badge: 'from-red-600 to-red-700',
      number: 'from-purple-600 to-purple-700',
      highlight: 'from-yellow-200 to-yellow-300',
      verse: 'bg-green-50 border-green-500'
    },
    orange: {
      border: 'border-l-orange-500',
      badge: 'from-orange-500 to-orange-600',
      number: 'from-purple-600 to-purple-700',
      highlight: 'from-yellow-200 to-yellow-300',
      verse: 'bg-green-50 border-green-500'
    }
  };

  return (
    <>
      <div className="three-gens-wrapper my-12 rounded-2xl bg-white border-2 border-slate-200 p-8 shadow-xl">
      <div className="mb-12 text-center rounded-lg bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 p-6 -mx-2">
        <div className="mb-3 text-4xl font-bold md:text-5xl text-white">
          📜 Three Generations of Giants
        </div>
        <div className="text-xl md:text-2xl text-blue-200">
          The Lineage from Angels to Elioud
        </div>
      </div>

      <div className="space-y-8">
        {generations.map((gen, index) => (
          <React.Fragment key={index}>
            <div
              className={`rounded-2xl border-l-8 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
                colorClasses[gen.color as ColorKey].border
              }`}
            >
              {/* Header */}
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
                <div
                  className={`three-gens-number flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${
                    colorClasses[gen.color as ColorKey].number
                  } text-5xl font-black shadow-lg`}
                >
                  {gen.number}
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">
                    {gen.title}
                  </div>
                  <div className="text-lg italic text-slate-600">
                    {gen.originalName}
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="mb-6 space-y-3 md:ml-28">
                {Object.entries(gen)
                  .filter(([key]) =>
                    ['nature', 'origins', 'purpose', 'leaders', 'parents', 'stature', 'lifespan', 'status', 'fate'].includes(
                      key
                    )
                  )
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr]"
                    >
                      <div className="text-sm font-bold uppercase tracking-wide text-slate-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </div>
                      <div className="text-base leading-relaxed text-slate-700">
                        {typeof value === 'string' && value.includes('Semjaza') ? (
                          <>
                            <span className="rounded bg-linear-to-r from-yellow-200 to-yellow-300 px-2 py-1 font-semibold">
                              Semjaza
                            </span>{' '}
                            (chief),{' '}
                            <span className="rounded bg-linear-to-r from-yellow-200 to-yellow-300 px-2 py-1 font-semibold">
                              Azazel
                            </span>
                            , Araqiel, Rameel, and 200 others
                          </>
                        ) : typeof value === 'string' && value.includes('300 cubits') ? (
                          <>
                            Giants of immense size —{' '}
                            <span className="rounded bg-linear-to-r from-yellow-200 to-yellow-300 px-2 py-1 font-semibold">
                              300 cubits tall (450 feet)
                            </span>{' '}
                            according to 1 Enoch
                          </>
                        ) : (
                          value
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Description */}
              <div className="mb-6 rounded-xl bg-slate-50 p-6 md:ml-28">
                <div className="mb-3 text-xl font-bold text-slate-800">
                  🔍 Key Characteristics
                </div>
                <div className="text-base leading-relaxed text-slate-700">
                  {gen.description.split(/(\bweaponry, cosmetics, sorcery, astrology, and metallurgy\b|second generation|נָפַל \(naphal\))/).map((part, i) => {
                    if (i % 2 === 1) {
                      return (
                        <span
                          key={i}
                          className="rounded bg-linear-to-r from-yellow-200 to-yellow-300 px-2 py-1 font-semibold"
                        >
                          {part}
                        </span>
                      );
                    }
                    return part;
                  })}
                </div>
              </div>

              {/* Biblical Reference */}
              <div
                className={`mb-6 rounded-xl border-l-4 p-6 md:ml-28 ${
                  colorClasses[gen.color as ColorKey].verse
                }`}
              >
                <div className="mb-2 flex items-center gap-2 text-lg font-bold text-green-800">
                  📖{' '}
                  {gen.number === 3
                    ? 'Extrabiblical Sources'
                    : 'Biblical Foundation'}
                </div>
                <div className="text-base italic leading-relaxed text-slate-700">
                  {gen.verse}
                </div>
              </div>

              {/* Characteristics Tags */}
              <div className="flex flex-wrap gap-3 md:ml-28">
                  {gen.characteristics.map((char, i) => (
                  <div
                    key={i}
                    className={`three-gens-badge rounded-full bg-linear-to-r ${
                      colorClasses[gen.color as ColorKey].badge
                    } px-5 py-2 text-sm font-semibold text-white shadow-md`}
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow between generations */}
            {index < generations.length - 1 && (
              <div className="text-center text-6xl text-slate-400">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 rounded-xl bg-slate-50 p-8 text-center border-2 border-slate-200">
        <div className="text-lg leading-relaxed md:text-xl text-slate-700">
          💭 <strong>The Progressive Dilution of Divine DNA</strong>
          <br />
          <br />
          Each generation moved further from the original angelic nature, yet
          retained supernatural abilities that made them feared throughout the
          ancient world. The flood aimed to cleanse the earth of these corrupted
          bloodlines.
        </div>
      </div>
    </div>
    </>
  );
};

export default ThreeGenerations;
