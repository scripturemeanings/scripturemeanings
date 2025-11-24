import React from 'react';

const GiantsTimeline = () => {
  const events = [
    {
      era: 'Pre-Flood Era',
      title: 'The Watchers Descend to Earth',
      reference: '1 Enoch 6-7; Genesis 6:1-2',
      description:
        'During the days of Jared (meaning "descent"), 200 angels known as the Watchers descended to Mount Hermon. Led by Semjaza and Azazel, they took an oath together and violated divine law by taking human women as wives. They taught humanity forbidden knowledge including weaponry, cosmetics, sorcery, and astrology.',
      keyFigures:
        'Semjaza (leader), Azazel (taught weapon-making), Araqiel (taught signs), Rameel (taught astronomy), and 196 others',
      verse:
        '"The sons of God saw that the daughters of men were beautiful, and they took as wives whomever they chose." — Genesis 6:2',
      color: 'blue',
      type: 'keyFigures'
    },
    {
      era: 'Pre-Flood Era',
      title: 'The Nephilim Are Born',
      reference: 'Genesis 6:4; 1 Enoch 7:2-6',
      description:
        'The union of Watchers and human women produced the Nephilim — giants of enormous size and strength. According to 1 Enoch, they grew to 300 cubits (450 feet) tall, consumed all human resources, and eventually turned to cannibalism. They became "mighty men of old, men of renown," dominating and terrorizing the pre-flood world.',
      characteristics:
        'Immense size (300+ cubits) • Superhuman strength • Violent nature • Insatiable appetite • Taught forbidden arts by their fathers',
      impact:
        'The Nephilim\'s violence and corruption became so great that God declared: "My Spirit shall not abide in man forever, for he is flesh" (Genesis 6:3). Their actions were a primary catalyst for the Great Flood.',
      color: 'blue',
      type: 'characteristics'
    },
    {
      era: 'Pre-Flood Era',
      title: 'The Elioud: Second Generation Giants',
      reference: '1 Enoch 7:2; Book of Giants (Dead Sea Scrolls)',
      description:
        'As the Nephilim themselves took human wives, a second generation of hybrids was born: the Elioud (meaning "born of God"). Though still giants, they were smaller and less powerful than their Nephilim fathers. The Book of Giants describes their dreams of impending doom and their attempts to understand their fate through the prophet Enoch.',
      lineage:
        'Parents: Nephilim fathers × Human mothers | Nature: Further diluted divine bloodline | Famous Names: Ohyah and Hahyah (sons of Semjaza)',
      color: 'blue',
      type: 'lineage'
    },
    {
      era: 'The Flood (c. 2350 BC)',
      title: 'The Great Flood Destroys the Giants',
      reference: 'Genesis 6-9; 1 Enoch 10',
      description:
        'God sent the Great Flood to cleanse the earth of the Nephilim, Elioud, and corrupted humanity. According to 1 Enoch, the Watchers were bound in the valleys of the earth until the final judgment. Only Noah, his family, and the animals in the ark survived. The spirits of the dead giants became demons that would roam the earth.',
      impact:
        'The flood was specifically designed to eliminate the hybrid bloodlines that had corrupted God\'s creation. Yet, mysteriously, giants appear again after the flood, leading to theological debates about whether they were descendants who survived or a new manifestation.',
      verse:
        '"The LORD saw that the wickedness of man was great in the earth... So the LORD said, \'I will blot out man whom I have created from the face of the land.\'" — Genesis 6:5-7',
      color: 'teal',
      type: 'impact'
    },
    {
      era: 'Post-Flood Era',
      title: 'Post-Flood Giants Emerge',
      reference: 'Genesis 6:4b; Numbers 13:33',
      description:
        'Genesis 6:4 cryptically states that Nephilim existed "and also afterward" — meaning after the flood. The text doesn\'t explain how this was possible. Later scriptures mention several races of giants: the Rephaim, Anakim, Emim, and Zamzummim. Some theories suggest they descended from Ham\'s line through Canaan, while others believe demonic activity continued post-flood.',
      giantRaces:
        'Rephaim — Ancient giants in Canaan | Anakim — Descendants of Anak, seen by Israelite spies | Emim — "Terrors" who lived in Moab | Zamzummim — Giants conquered by the Ammonites',
      color: 'red',
      type: 'giantRaces'
    },
    {
      era: 'Patriarchal Period (c. 2000 BC)',
      title: 'Abraham and the Battle of the Kings',
      reference: 'Genesis 14:5-6',
      description:
        'During the War of the Kings, Chedorlaomer and his allies defeated several giant tribes including the Rephaim in Ashteroth-karnaim, the Zuzim in Ham, and the Emim in Shaveh-kiriathaim. This passage confirms that organized races of giants inhabited Canaan during Abraham\'s lifetime.',
      verse:
        '"In the fourteenth year Chedorlaomer and the kings who were with him came and defeated the Rephaim in Ashteroth-karnaim, the Zuzim in Ham, the Emim in Shaveh-kiriathaim..." — Genesis 14:5',
      color: 'red',
      type: 'verse'
    },
    {
      era: 'Exodus Period (c. 1446 BC)',
      title: 'Israelite Spies Encounter the Anakim',
      reference: 'Numbers 13:28-33',
      description:
        'When Moses sent 12 spies to scout the Promised Land, 10 returned with a fearful report. They saw the Anakim — descendants of Anak — and described themselves as "grasshoppers" in comparison. Critically, they stated: "We saw the Nephilim there (the descendants of Anak come from the Nephilim)," directly linking post-flood giants to the pre-flood Nephilim.',
      witnesses:
        'The Anakim in Hebron, including Ahiman, Sheshai, and Talmai (Numbers 13:22) | Fortified cities with walls reaching to heaven | Giants so large that the Israelites felt like insects',
      verse:
        '"We saw the Nephilim there... We seemed like grasshoppers in our own eyes, and we looked the same to them." — Numbers 13:33',
      color: 'orange',
      type: 'witnesses'
    },
    {
      era: 'Conquest Period (c. 1406 BC)',
      title: 'Og of Bashan: Last of the Rephaim',
      reference: 'Deuteronomy 3:11; Numbers 21:33-35',
      description:
        'King Og of Bashan is explicitly called "the last of the Rephaim." He ruled 60 fortified cities and was defeated by Moses and the Israelites. His iron bed (or sarcophagus) measured 9 cubits long and 4 cubits wide (13.5 x 6 feet), indicating he may have stood over 12 feet tall. His bed was kept on display in Rabbah of the Ammonites.',
      archaeological:
        'Og\'s bed was made of iron (or possibly black basalt, which looks like iron), a rare and expensive material for the time. Its preservation and display suggest it was considered remarkable evidence of the giants\' existence.',
      verse:
        '"For only Og the king of Bashan was left of the remnant of the Rephaim. Behold, his bed was a bed of iron... nine cubits was its length, and four cubits its breadth." — Deuteronomy 3:11',
      color: 'orange',
      type: 'archaeological'
    },
    {
      era: 'Conquest Period (c. 1400 BC)',
      title: 'The Anakim Are Defeated',
      reference: 'Joshua 11:21-22; 14:12-15',
      description:
        'Joshua launched a campaign to utterly destroy the Anakim from the hill country, from Hebron, Debir, and Anab. Caleb, at age 85, requested and received Hebron as his inheritance, driving out the three sons of Anak who lived there. Only remnants survived in Gaza, Gath, and Ashdod (Philistine territory).',
      victories:
        'Joshua: Destroyed Anakim throughout Judah and Israel | Caleb: Drove out Ahiman, Sheshai, and Talmai from Hebron | Result: Anakim eliminated except in Philistine cities',
      verse:
        '"Then Joshua came and cut off the Anakim from the hill country... There was none of the Anakim left in the land of the people of Israel. Only in Gaza, in Gath, and in Ashdod did some remain." — Joshua 11:21-22',
      color: 'orange',
      type: 'victories'
    },
    {
      era: 'United Monarchy (c. 1025 BC)',
      title: 'David Defeats Goliath of Gath',
      reference: '1 Samuel 17:4-51',
      description:
        'The most famous giant encounter: Goliath of Gath, a Philistine champion, stood over 9 feet tall (6 cubits and a span). He wore bronze armor weighing 125 pounds and wielded a spear with a 15-pound iron point. For 40 days, he challenged Israel\'s army until the shepherd boy David accepted, killing him with a single stone to the forehead. Significantly, Goliath came from Gath — one of the three Philistine cities where Anakim remnants had survived.',
      arsenal:
        'Height: 6 cubits + 1 span (approximately 9 feet 9 inches) | Armor: 5,000 shekels of bronze (125 lbs) | Spear Point: 600 shekels of iron (15 lbs) | Lineage: Possibly descended from the Anakim of Gath',
      verse:
        '"And there came out from the camp of the Philistines a champion named Goliath of Gath, whose height was six cubits and a span." — 1 Samuel 17:4',
      color: 'purple',
      type: 'arsenal'
    },
    {
      era: 'United Monarchy (c. 1010-1000 BC)',
      title: 'The Last Giants Fall',
      reference: '2 Samuel 21:15-22; 1 Chronicles 20:4-8',
      description:
        'David\'s elite warriors, known as his "mighty men," killed the last surviving giants during several battles with the Philistines. These included Goliath\'s brother Lahmi and a giant with six fingers on each hand and six toes on each foot (24 digits total) — possibly indicating genetic anomalies or mutations in the giant bloodline.',
      slain:
        'Ishbi-benob — Killed by Abishai (2 Sam 21:16-17) | Saph (Sippai) — Killed by Sibbecai (2 Sam 21:18) | Lahmi (brother of Goliath) — Killed by Elhanan (1 Chr 20:5) | Unnamed polydactyl giant — Killed by Jonathan, David\'s nephew (2 Sam 21:20-21)',
      impact:
        'These battles marked the end of the giant lineages in biblical history. After David\'s reign, giants are no longer mentioned in Scripture. The corrupted bloodlines that began with the Watchers had finally been eliminated from the earth.',
      verse:
        '"These four were descended from the giants in Gath, and they fell by the hand of David and by the hand of his servants." — 2 Samuel 21:22',
      color: 'purple',
      type: 'slain'
    }
  ];

  type ColorKey = 'blue' | 'teal' | 'red' | 'orange' | 'purple';
  
  const colorClasses: Record<ColorKey, string> = {
    blue: 'border-l-blue-600 bg-blue-600',
    teal: 'border-l-teal-600 bg-teal-600',
    red: 'border-l-red-600 bg-red-600',
    orange: 'border-l-orange-500 bg-orange-500',
    purple: 'border-l-purple-600 bg-purple-600'
  };

  return (
    <>
      <div className="timeline-wrapper my-12 rounded-2xl bg-white border-2 border-slate-200 p-8 shadow-xl">
      <div className="mb-12 text-center rounded-lg bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 -mx-2">
        <div className="mb-3 text-4xl font-bold md:text-5xl text-white">
          ⏳ Biblical Giants Timeline
        </div>
        <div className="text-xl md:text-2xl text-cyan-200">
          From the Watchers to Goliath: A Chronological Journey
        </div>
      </div>

      <div className="relative pl-12 md:pl-16">
        {/* Timeline vertical line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-linear-to-b from-blue-600 via-red-600 to-purple-600 md:left-7"></div>

        {events.map((event, index) => (
          <div key={index} className="relative mb-12">
            {/* Timeline dot */}
            <div
              className={`absolute -left-3 top-8 h-6 w-6 rounded-full border-4 border-white shadow-lg md:-left-4 ${
                colorClasses[event.color as ColorKey]
              }`}
            ></div>

            {/* Event card */}
            <div
              className={`rounded-2xl border-l-8 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl md:p-8 ${
                colorClasses[event.color as ColorKey].split(' ')[0]
              }`}
            >
              {/* Era badge */}
              <div className="timeline-badge mb-4 inline-block rounded-full bg-linear-to-r from-purple-600 to-purple-700 px-5 py-2 text-sm font-bold text-white shadow-md">
                {event.era}
              </div>

              {/* Title */}
              <div className="mb-2 text-2xl font-bold text-slate-800 md:text-3xl">
                {event.title}
              </div>

              {/* Reference */}
              <div className="mb-4 text-lg italic text-slate-600">
                {event.reference}
              </div>

              {/* Description */}
              <div className="mb-4 text-base leading-relaxed text-slate-700">
                {event.description.split(/(\bJared\b|\bSemjaza\b|\bAzazel\b|300 cubits \(450 feet\)|second generation|after the flood|Rephaim in Ashteroth-karnaim|grasshoppers|9 cubits long and 4 cubits wide \(13\.5 x 6 feet\)|utterly destroy|6 cubits and a span|Gath)/g).map((part, i) => {
                  if (i % 2 === 1 && part.trim()) {
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

              {/* Additional info boxes */}
              {event.keyFigures && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    👼 Key Figures:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.keyFigures}
                  </div>
                </div>
              )}

              {event.characteristics && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    👥 Characteristics:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.characteristics}
                  </div>
                </div>
              )}

              {event.lineage && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">🧬 Lineage:</div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.lineage}
                  </div>
                </div>
              )}

              {event.giantRaces && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    🏔️ Post-Flood Giant Races:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.giantRaces}
                  </div>
                </div>
              )}

              {event.witnesses && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    👁️ What They Saw:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.witnesses}
                  </div>
                </div>
              )}

              {event.archaeological && (
                <div className="mb-4 rounded-xl bg-yellow-50 p-4">
                  <div className="mb-2 font-bold text-yellow-800">
                    🛏️ Archaeological Note:
                  </div>
                  <div className="text-sm leading-relaxed text-yellow-900">
                    {event.archaeological}
                  </div>
                </div>
              )}

              {event.victories && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    ⚔️ Key Victories:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.victories}
                  </div>
                </div>
              )}

              {event.arsenal && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    🗡️ Goliath&apos;s Arsenal:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.arsenal}
                  </div>
                </div>
              )}

              {event.slain && (
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 font-bold text-slate-800">
                    ⚔️ Giants Slain by David&apos;s Men:
                  </div>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {event.slain}
                  </div>
                </div>
              )}

              {/* Impact box */}
              {event.impact && (
                <div className="mb-4 rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-4">
                  <div className="mb-2 font-bold text-yellow-800">
                    {event.type === 'slain' ? '🏁 End of an Era' : '⚖️ Divine Judgment'}
                  </div>
                  <div className="text-sm leading-relaxed text-yellow-900">
                    {event.impact}
                  </div>
                </div>
              )}

              {/* Verse quote */}
              {event.verse && (
                <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4">
                  <div className="mb-2 flex items-center gap-2 font-bold text-green-800">
                    📖 Scripture
                  </div>
                  <div className="text-sm italic leading-relaxed text-slate-700">
                    {event.verse}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 rounded-lg bg-slate-50 p-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-blue-600"></div>
          <div className="text-sm text-slate-700 font-medium">Pre-Flood Era</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-teal-600"></div>
          <div className="text-sm text-slate-700 font-medium">The Flood</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-red-600"></div>
          <div className="text-sm text-slate-700 font-medium">Post-Flood Era</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-orange-500"></div>
          <div className="text-sm text-slate-700 font-medium">Conquest Period</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-purple-600"></div>
          <div className="text-sm text-slate-700 font-medium">Monarchy Period</div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-xl bg-slate-50 p-6 text-center border-2 border-slate-200">
        <div className="text-lg leading-relaxed text-slate-700">
          📖 <strong>From Watchers to Warriors</strong>
          <br />
          <br />
          The biblical account traces an epic struggle spanning over 2,000
          years: from the corruption of the Watchers to the final defeat of
          Goliath&apos;s brothers. A story of judgment, mercy, and the
          faithfulness of those who trusted God.
        </div>
      </div>
    </div>
    </>
  );
};

export default GiantsTimeline;
