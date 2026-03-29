const stars = [
  { id: "polaris", name: "Polaris", constellation: "Ursa Minor", ra: 2.53, dec: 89.26, mag: 1.98 },
  { id: "yildun", name: "Yildun", constellation: "Ursa Minor", ra: 17.54, dec: 86.58, mag: 4.35 },
  { id: "epsilon-umi", name: "Epsilon Ursae Minoris", constellation: "Ursa Minor", ra: 16.77, dec: 82.04, mag: 4.23 },
  { id: "zeta-umi", name: "Zeta Ursae Minoris", constellation: "Ursa Minor", ra: 15.73, dec: 77.79, mag: 4.32 },
  { id: "eta-umi", name: "Eta Ursae Minoris", constellation: "Ursa Minor", ra: 16.29, dec: 75.76, mag: 4.95 },
  { id: "kochab", name: "Kochab", constellation: "Ursa Minor", ra: 14.85, dec: 74.16, mag: 2.08 },
  { id: "pherkad", name: "Pherkad", constellation: "Ursa Minor", ra: 15.35, dec: 71.83, mag: 3.0 },
  { id: "dubhe", name: "Dubhe", constellation: "Ursa Major", ra: 11.06, dec: 61.75, mag: 1.79 },
  { id: "merak", name: "Merak", constellation: "Ursa Major", ra: 11.03, dec: 56.38, mag: 2.34 },
  { id: "phecda", name: "Phecda", constellation: "Ursa Major", ra: 11.9, dec: 53.69, mag: 2.44 },
  { id: "megrez", name: "Megrez", constellation: "Ursa Major", ra: 12.26, dec: 57.03, mag: 3.31 },
  { id: "alioth", name: "Alioth", constellation: "Ursa Major", ra: 12.9, dec: 55.96, mag: 1.76 },
  { id: "mizar", name: "Mizar", constellation: "Ursa Major", ra: 13.4, dec: 54.93, mag: 2.23 },
  { id: "alkaid", name: "Alkaid", constellation: "Ursa Major", ra: 13.79, dec: 49.31, mag: 1.85 },
  { id: "schedar", name: "Schedar", constellation: "Cassiopeia", ra: 0.68, dec: 56.54, mag: 2.24 },
  { id: "caph", name: "Caph", constellation: "Cassiopeia", ra: 0.15, dec: 59.15, mag: 2.28 },
  { id: "gamma-cas", name: "Gamma Cassiopeiae", constellation: "Cassiopeia", ra: 0.95, dec: 60.72, mag: 2.47 },
  { id: "ruchbah", name: "Ruchbah", constellation: "Cassiopeia", ra: 1.43, dec: 60.24, mag: 2.68 },
  { id: "segin", name: "Segin", constellation: "Cassiopeia", ra: 2.29, dec: 63.67, mag: 3.35 },
  { id: "mirfak", name: "Mirfak", constellation: "Perseus", ra: 3.4, dec: 49.86, mag: 1.79 },
  { id: "algol", name: "Algol", constellation: "Perseus", ra: 3.14, dec: 40.96, mag: 2.12 },
  { id: "betelgeuse", name: "Betelgeuse", constellation: "Orion", ra: 5.92, dec: 7.41, mag: 0.42 },
  { id: "bellatrix", name: "Bellatrix", constellation: "Orion", ra: 5.42, dec: 6.35, mag: 1.64 },
  { id: "alnilam", name: "Alnilam", constellation: "Orion", ra: 5.6, dec: -1.2, mag: 1.69 },
  { id: "alnitak", name: "Alnitak", constellation: "Orion", ra: 5.68, dec: -1.94, mag: 1.74 },
  { id: "mintaka", name: "Mintaka", constellation: "Orion", ra: 5.53, dec: -0.3, mag: 2.25 },
  { id: "saiph", name: "Saiph", constellation: "Orion", ra: 5.8, dec: -9.67, mag: 2.07 },
  { id: "rigel", name: "Rigel", constellation: "Orion", ra: 5.24, dec: -8.2, mag: 0.13 },
  { id: "aldebaran", name: "Aldebaran", constellation: "Taurus", ra: 4.6, dec: 16.51, mag: 0.86 },
  { id: "elnath", name: "Elnath", constellation: "Taurus", ra: 5.44, dec: 28.61, mag: 1.65 },
  { id: "capella", name: "Capella", constellation: "Auriga", ra: 5.28, dec: 46.0, mag: 0.08 },
  { id: "menkalinan", name: "Menkalinan", constellation: "Auriga", ra: 5.99, dec: 44.95, mag: 1.9 },
  { id: "almach", name: "Almach", constellation: "Andromeda", ra: 2.07, dec: 42.33, mag: 2.1 },
  { id: "alpheratz", name: "Alpheratz", constellation: "Andromeda", ra: 0.14, dec: 29.09, mag: 2.07 },
  { id: "mirach", name: "Mirach", constellation: "Andromeda", ra: 1.16, dec: 35.62, mag: 2.05 },
  { id: "castor", name: "Castor", constellation: "Gemini", ra: 7.58, dec: 31.89, mag: 1.58 },
  { id: "pollux", name: "Pollux", constellation: "Gemini", ra: 7.76, dec: 28.03, mag: 1.14 },
  { id: "alhena", name: "Alhena", constellation: "Gemini", ra: 6.63, dec: 16.4, mag: 1.93 },
  { id: "procyon", name: "Procyon", constellation: "Canis Minor", ra: 7.66, dec: 5.22, mag: 0.34 },
  { id: "sirius", name: "Sirius", constellation: "Canis Major", ra: 6.75, dec: -16.72, mag: -1.46 },
  { id: "mirzam", name: "Mirzam", constellation: "Canis Major", ra: 6.38, dec: -17.96, mag: 1.98 },
  { id: "wezen", name: "Wezen", constellation: "Canis Major", ra: 7.14, dec: -26.39, mag: 1.83 },
  { id: "adhara", name: "Adhara", constellation: "Canis Major", ra: 6.98, dec: -28.97, mag: 1.5 },
  { id: "aludra", name: "Aludra", constellation: "Canis Major", ra: 7.4, dec: -29.3, mag: 2.45 },
  { id: "canopus", name: "Canopus", constellation: "Carina", ra: 6.4, dec: -52.7, mag: -0.74 },
  { id: "miaplacidus", name: "Miaplacidus", constellation: "Carina", ra: 9.22, dec: -69.72, mag: 1.67 },
  { id: "cyg-deneb", name: "Deneb", constellation: "Cygnus", ra: 20.69, dec: 45.28, mag: 1.25 },
  { id: "sadr", name: "Sadr", constellation: "Cygnus", ra: 20.37, dec: 40.26, mag: 2.23 },
  { id: "gienah", name: "Gienah", constellation: "Cygnus", ra: 20.77, dec: 33.97, mag: 2.47 },
  { id: "delta-cyg", name: "Delta Cygni", constellation: "Cygnus", ra: 19.75, dec: 45.13, mag: 2.86 },
  { id: "albireo", name: "Albireo", constellation: "Cygnus", ra: 19.51, dec: 27.96, mag: 3.18 },
  { id: "epsilon-cyg", name: "Epsilon Cygni", constellation: "Cygnus", ra: 20.77, dec: 33.97, mag: 2.48 },
  { id: "antares", name: "Antares", constellation: "Scorpius", ra: 16.49, dec: -26.43, mag: 1.06 },
  { id: "shaula", name: "Shaula", constellation: "Scorpius", ra: 17.56, dec: -37.1, mag: 1.62 },
  { id: "sargas", name: "Sargas", constellation: "Scorpius", ra: 17.62, dec: -42.99, mag: 1.86 },
  { id: "dschubba", name: "Dschubba", constellation: "Scorpius", ra: 16.01, dec: -22.62, mag: 2.29 },
  { id: "acrux", name: "Acrux", constellation: "Crux", ra: 12.44, dec: -63.1, mag: 0.77 },
  { id: "gacrux", name: "Gacrux", constellation: "Crux", ra: 12.52, dec: -57.11, mag: 1.63 },
  { id: "mimosa", name: "Mimosa", constellation: "Crux", ra: 12.8, dec: -59.69, mag: 1.25 },
  { id: "delta-crucis", name: "Imai", constellation: "Crux", ra: 12.25, dec: -58.75, mag: 2.79 },
  { id: "epsilon-crucis", name: "Ginan", constellation: "Crux", ra: 12.36, dec: -60.4, mag: 3.58 },
  { id: "regulus", name: "Regulus", constellation: "Leo", ra: 10.14, dec: 11.97, mag: 1.35 },
  { id: "algieba", name: "Algieba", constellation: "Leo", ra: 10.33, dec: 19.84, mag: 2.01 },
  { id: "zosma", name: "Zosma", constellation: "Leo", ra: 11.24, dec: 20.52, mag: 2.56 },
  { id: "denebola", name: "Denebola", constellation: "Leo", ra: 11.82, dec: 14.57, mag: 2.14 },
  { id: "spica", name: "Spica", constellation: "Virgo", ra: 13.42, dec: -11.16, mag: 0.98 },
  { id: "arcturus", name: "Arcturus", constellation: "Bootes", ra: 14.26, dec: 19.18, mag: -0.05 },
  { id: "cor-caroli", name: "Cor Caroli", constellation: "Canes Venatici", ra: 12.93, dec: 38.32, mag: 2.89 },
  { id: "rasalhague", name: "Rasalhague", constellation: "Ophiuchus", ra: 17.58, dec: 12.56, mag: 2.08 },
  { id: "vega", name: "Vega", constellation: "Lyra", ra: 18.62, dec: 38.78, mag: 0.03 },
  { id: "altair", name: "Altair", constellation: "Aquila", ra: 19.85, dec: 8.87, mag: 0.77 },
  { id: "tarazed", name: "Tarazed", constellation: "Aquila", ra: 19.77, dec: 10.61, mag: 2.72 },
  { id: "sadalmelik", name: "Sadalmelik", constellation: "Aquarius", ra: 22.1, dec: -0.32, mag: 2.95 },
  { id: "fomalhaut", name: "Fomalhaut", constellation: "Piscis Austrinus", ra: 22.96, dec: -29.62, mag: 1.16 },
  { id: "markab", name: "Markab", constellation: "Pegasus", ra: 23.08, dec: 15.21, mag: 2.49 },
  { id: "scheat", name: "Scheat", constellation: "Pegasus", ra: 23.06, dec: 28.08, mag: 2.44 },
  { id: "algenib", name: "Algenib", constellation: "Pegasus", ra: 0.22, dec: 15.18, mag: 2.84 },
  { id: "enif", name: "Enif", constellation: "Pegasus", ra: 21.74, dec: 9.88, mag: 2.38 },
  { id: "sheliak", name: "Sheliak", constellation: "Lyra", ra: 18.83, dec: 33.36, mag: 3.52 },
  { id: "sulafat", name: "Sulafat", constellation: "Lyra", ra: 18.98, dec: 32.69, mag: 3.25 },
  { id: "hamal", name: "Hamal", constellation: "Aries", ra: 2.12, dec: 23.46, mag: 2.0 },
  { id: "nunki", name: "Nunki", constellation: "Sagittarius", ra: 18.92, dec: -26.3, mag: 2.05 },
  { id: "kaus-australis", name: "Kaus Australis", constellation: "Sagittarius", ra: 18.4, dec: -34.38, mag: 1.79 },
  { id: "kaus-media", name: "Kaus Media", constellation: "Sagittarius", ra: 18.35, dec: -29.83, mag: 2.72 },
  { id: "kaus-borealis", name: "Kaus Borealis", constellation: "Sagittarius", ra: 18.47, dec: -25.42, mag: 2.82 },
  { id: "ascella", name: "Ascella", constellation: "Sagittarius", ra: 19.04, dec: -29.88, mag: 2.6 },
  { id: "phi-sgr", name: "Phi Sagittarii", constellation: "Sagittarius", ra: 18.76, dec: -26.99, mag: 3.17 },
  { id: "tau-sgr", name: "Tau Sagittarii", constellation: "Sagittarius", ra: 19.12, dec: -27.67, mag: 3.32 },
  { id: "psi-sgr", name: "Psi Sagittarii", constellation: "Sagittarius", ra: 19.26, dec: -25.42, mag: 4.85 },
  { id: "alnasl", name: "Alnasl", constellation: "Sagittarius", ra: 18.1, dec: -30.42, mag: 2.98 },
  { id: "deneb-kaitos", name: "Deneb Kaitos", constellation: "Cetus", ra: 0.73, dec: -17.99, mag: 2.04 },
  { id: "achernar", name: "Achernar", constellation: "Eridanus", ra: 1.63, dec: -57.24, mag: 0.46 }
];

const constellations = [
  {
    name: "Ursa Major",
    labelRa: 12.1,
    labelDec: 56,
    segments: [
      ["dubhe", "merak"],
      ["merak", "phecda"],
      ["phecda", "megrez"],
      ["megrez", "dubhe"],
      ["megrez", "alioth"],
      ["alioth", "mizar"],
      ["mizar", "alkaid"]
    ],
    extraSegments: [
      ["dubhe", "megrez"],
      ["phecda", "alioth"],
      ["merak", "megrez"]
    ]
  },
  {
    name: "Cassiopeia",
    labelRa: 1.1,
    labelDec: 58.8,
    segments: [
      ["caph", "schedar"],
      ["schedar", "gamma-cas"],
      ["gamma-cas", "ruchbah"],
      ["ruchbah", "segin"]
    ],
    extraSegments: [
      ["caph", "gamma-cas"],
      ["gamma-cas", "segin"]
    ]
  },
  {
    name: "Orion",
    labelRa: 5.55,
    labelDec: -0.5,
    segments: [
      ["betelgeuse", "bellatrix"],
      ["betelgeuse", "alnilam"],
      ["bellatrix", "mintaka"],
      ["mintaka", "alnilam"],
      ["alnilam", "alnitak"],
      ["alnitak", "saiph"],
      ["alnilam", "rigel"],
      ["rigel", "saiph"]
    ],
    extraSegments: [
      ["betelgeuse", "mintaka"],
      ["bellatrix", "alnilam"],
      ["bellatrix", "saiph"],
      ["betelgeuse", "rigel"]
    ]
  },
  {
    name: "Taurus",
    labelRa: 4.95,
    labelDec: 20.5,
    segments: [
      ["aldebaran", "elnath"],
      ["aldebaran", "betelgeuse"]
    ],
    extraSegments: [
      ["elnath", "capella"],
      ["aldebaran", "capella"]
    ]
  },
  {
    name: "Gemini",
    labelRa: 7.67,
    labelDec: 29.6,
    segments: [
      ["castor", "pollux"],
      ["pollux", "procyon"]
    ],
    extraSegments: [
      ["castor", "alhena"],
      ["pollux", "alhena"]
    ]
  },
  {
    name: "Canis Major",
    labelRa: 6.9,
    labelDec: -22.5,
    segments: [
      ["mirzam", "sirius"],
      ["sirius", "wezen"],
      ["wezen", "adhara"]
    ],
    extraSegments: [
      ["sirius", "adhara"],
      ["wezen", "aludra"],
      ["adhara", "aludra"]
    ]
  },
  {
    name: "Cygnus",
    labelRa: 20.3,
    labelDec: 37.5,
    segments: [
      ["cyg-deneb", "sadr"],
      ["sadr", "albireo"],
      ["sadr", "gienah"],
      ["sadr", "delta-cyg"]
    ],
    extraSegments: [
      ["cyg-deneb", "delta-cyg"],
      ["cyg-deneb", "gienah"],
      ["gienah", "albireo"]
    ]
  },
  {
    name: "Scorpius",
    labelRa: 16.9,
    labelDec: -30.2,
    segments: [
      ["dschubba", "antares"],
      ["antares", "shaula"],
      ["shaula", "sargas"]
    ],
    extraSegments: [
      ["dschubba", "shaula"],
      ["antares", "sargas"]
    ]
  },
  {
    name: "Crux",
    labelRa: 12.5,
    labelDec: -60.2,
    segments: [
      ["gacrux", "acrux"],
      ["mimosa", "delta-crucis"]
    ],
    extraSegments: [
      ["gacrux", "mimosa"],
      ["gacrux", "delta-crucis"],
      ["acrux", "mimosa"],
      ["acrux", "delta-crucis"],
      ["epsilon-crucis", "gacrux"],
      ["epsilon-crucis", "acrux"]
    ]
  },
  {
    name: "Leo",
    labelRa: 10.85,
    labelDec: 16.3,
    segments: [
      ["regulus", "algieba"],
      ["algieba", "zosma"],
      ["zosma", "denebola"]
    ],
    extraSegments: [
      ["regulus", "zosma"],
      ["algieba", "denebola"]
    ]
  },
  {
    name: "Sagittarius",
    labelRa: 18.7,
    labelDec: -30.5,
    segments: [
      ["kaus-australis", "kaus-media"],
      ["kaus-media", "nunki"],
      ["nunki", "ascella"],
      ["ascella", "kaus-australis"]
    ],
    extraSegments: [
      ["kaus-australis", "nunki"],
      ["kaus-media", "ascella"],
      ["kaus-borealis", "phi-sgr"],
      ["phi-sgr", "nunki"],
      ["phi-sgr", "ascella"],
      ["nunki", "tau-sgr"],
      ["tau-sgr", "psi-sgr"],
      ["psi-sgr", "kaus-borealis"],
      ["kaus-media", "alnasl"],
      ["alnasl", "kaus-australis"],
      ["kaus-borealis", "kaus-media"]
    ]
  },
  {
    name: "Andromeda",
    labelRa: 0.95,
    labelDec: 35.4,
    segments: [
      ["alpheratz", "mirach"],
      ["mirach", "almach"]
    ],
    extraSegments: [
      ["alpheratz", "almach"]
    ]
  },
  {
    name: "Pegasus",
    labelRa: 22.7,
    labelDec: 19.3,
    segments: [
      ["alpheratz", "markab"],
      ["markab", "scheat"],
      ["scheat", "algenib"],
      ["algenib", "alpheratz"]
    ],
    extraSegments: [
      ["markab", "enif"],
      ["scheat", "enif"]
    ]
  },
  {
    name: "Aquila",
    labelRa: 19.8,
    labelDec: 9.5,
    segments: [
      ["altair", "tarazed"],
      ["tarazed", "rasalhague"]
    ],
    extraSegments: [
      ["altair", "rasalhague"]
    ]
  },
  {
    name: "Lyra",
    labelRa: 18.72,
    labelDec: 37.5,
    segments: [
      ["vega", "sheliak"],
      ["vega", "sulafat"]
    ],
    extraSegments: [
      ["sheliak", "sulafat"]
    ]
  },
  {
    name: "Perseus",
    labelRa: 3.2,
    labelDec: 45.8,
    segments: [
      ["algol", "mirfak"],
      ["mirfak", "almach"]
    ],
    extraSegments: [
      ["algol", "almach"]
    ]
  }
];

const asterisms = [
  {
    name: "Big Dipper",
    labelRa: 12.3,
    labelDec: 57.6,
    segments: [
      ["dubhe", "merak"],
      ["merak", "phecda"],
      ["phecda", "megrez"],
      ["megrez", "alioth"],
      ["alioth", "mizar"],
      ["mizar", "alkaid"]
    ]
  },
  {
    name: "Little Dipper",
    labelRa: 14.2,
    labelDec: 78.5,
    segments: [
      ["polaris", "pherkad"],
      ["pherkad", "kochab"]
    ],
    extraSegments: [
      ["polaris", "yildun"],
      ["yildun", "epsilon-umi"],
      ["epsilon-umi", "zeta-umi"],
      ["zeta-umi", "eta-umi"],
      ["eta-umi", "kochab"],
      ["zeta-umi", "kochab"],
      ["zeta-umi", "pherkad"]
    ]
  },
  {
    name: "Summer Triangle",
    labelRa: 19.7,
    labelDec: 31.5,
    segments: [
      ["vega", "cyg-deneb"],
      ["cyg-deneb", "altair"],
      ["altair", "vega"]
    ]
  },
  {
    name: "Winter Triangle",
    labelRa: 6.8,
    labelDec: -1.8,
    segments: [
      ["betelgeuse", "procyon"],
      ["procyon", "sirius"],
      ["sirius", "betelgeuse"]
    ]
  },
  {
    name: "Winter Hexagon",
    labelRa: 6.15,
    labelDec: 8.6,
    segments: [
      ["capella", "aldebaran"],
      ["aldebaran", "rigel"],
      ["rigel", "sirius"],
      ["sirius", "procyon"],
      ["procyon", "pollux"],
      ["pollux", "capella"]
    ],
    extraSegments: [
      ["capella", "rigel"],
      ["aldebaran", "sirius"]
    ]
  },
  {
    name: "Northern Cross",
    labelRa: 20.18,
    labelDec: 38.8,
    segments: [
      ["cyg-deneb", "sadr"],
      ["sadr", "albireo"],
      ["gienah", "sadr"],
      ["delta-cyg", "sadr"]
    ]
  },
  {
    name: "Teapot",
    labelRa: 18.7,
    labelDec: -29.8,
    segments: [
      ["kaus-australis", "kaus-media"],
      ["kaus-media", "nunki"],
      ["nunki", "ascella"],
      ["ascella", "kaus-australis"]
    ],
    extraSegments: [
      ["kaus-borealis", "kaus-media"],
      ["kaus-borealis", "phi-sgr"],
      ["phi-sgr", "nunki"],
      ["phi-sgr", "ascella"],
      ["nunki", "tau-sgr"],
      ["tau-sgr", "psi-sgr"],
      ["psi-sgr", "kaus-borealis"],
      ["kaus-media", "alnasl"],
      ["alnasl", "kaus-australis"],
      ["kaus-borealis", "alnasl"],
      ["kaus-borealis", "nunki"]
    ]
  },
  {
    name: "Great Square",
    labelRa: 23.1,
    labelDec: 26.2,
    segments: [
      ["alpheratz", "markab"],
      ["markab", "scheat"],
      ["scheat", "algenib"],
      ["algenib", "alpheratz"]
    ]
  },
  {
    name: "Southern Cross",
    labelRa: 12.5,
    labelDec: -60.2,
    segments: [
      ["gacrux", "acrux"],
      ["mimosa", "delta-crucis"]
    ]
  }
];

const deepSkyObjects = [
  { id: "m31", name: "Andromeda Galaxy", type: "galaxy", ra: 0.71, dec: 41.27, mag: 3.4 },
  { id: "m32", name: "M32", type: "galaxy", ra: 0.71, dec: 40.87, mag: 8.1 },
  { id: "m33", name: "Triangulum Galaxy", type: "galaxy", ra: 1.56, dec: 30.66, mag: 5.7 },
  { id: "m42", name: "Orion Nebula", type: "nebula", ra: 5.59, dec: -5.45, mag: 4.0 },
  { id: "m43", name: "De Mairan's Nebula", type: "nebula", ra: 5.59, dec: -5.27, mag: 9.0 },
  { id: "m45", name: "Pleiades", type: "cluster", ra: 3.79, dec: 24.12, mag: 1.6 },
  { id: "hyades", name: "Hyades", type: "cluster", ra: 4.45, dec: 15.87, mag: 0.5 },
  { id: "double-cluster", name: "Double Cluster", type: "cluster", ra: 2.33, dec: 57.13, mag: 4.3 },
  { id: "m34", name: "M34", type: "cluster", ra: 2.7, dec: 42.78, mag: 5.5 },
  { id: "m35", name: "M35", type: "cluster", ra: 6.15, dec: 24.33, mag: 5.1 },
  { id: "m36", name: "M36", type: "cluster", ra: 5.61, dec: 34.14, mag: 6.0 },
  { id: "m37", name: "M37", type: "cluster", ra: 5.87, dec: 32.55, mag: 5.6 },
  { id: "m38", name: "M38", type: "cluster", ra: 5.48, dec: 35.86, mag: 6.4 },
  { id: "m13", name: "Hercules Cluster", type: "cluster", ra: 16.7, dec: 36.46, mag: 5.8 },
  { id: "m92", name: "M92", type: "cluster", ra: 17.29, dec: 43.14, mag: 6.4 },
  { id: "m57", name: "Ring Nebula", type: "nebula", ra: 18.89, dec: 33.03, mag: 8.8 },
  { id: "m27", name: "Dumbbell Nebula", type: "nebula", ra: 19.99, dec: 22.72, mag: 7.4 },
  { id: "m8", name: "Lagoon Nebula", type: "nebula", ra: 18.05, dec: -24.38, mag: 6.0 },
  { id: "m20", name: "Trifid Nebula", type: "nebula", ra: 18.04, dec: -23.02, mag: 6.3 },
  { id: "m17", name: "Omega Nebula", type: "nebula", ra: 18.34, dec: -16.18, mag: 6.0 },
  { id: "m16", name: "Eagle Nebula", type: "nebula", ra: 18.31, dec: -13.78, mag: 6.0 },
  { id: "m11", name: "Wild Duck Cluster", type: "cluster", ra: 18.85, dec: -6.27, mag: 6.3 },
  { id: "m44", name: "Beehive Cluster", type: "cluster", ra: 8.67, dec: 19.67, mag: 3.7 },
  { id: "m41", name: "Little Beehive", type: "cluster", ra: 6.77, dec: -20.73, mag: 4.5 },
  { id: "m46", name: "M46", type: "cluster", ra: 7.7, dec: -14.82, mag: 6.1 },
  { id: "m47", name: "M47", type: "cluster", ra: 7.61, dec: -14.5, mag: 4.4 },
  { id: "m48", name: "M48", type: "cluster", ra: 8.23, dec: -5.8, mag: 5.8 },
  { id: "m50", name: "M50", type: "cluster", ra: 7.05, dec: -8.34, mag: 5.9 },
  { id: "m67", name: "M67", type: "cluster", ra: 8.85, dec: 11.82, mag: 6.1 },
  { id: "m6", name: "Butterfly Cluster", type: "cluster", ra: 17.67, dec: -32.22, mag: 4.2 },
  { id: "m7", name: "Ptolemy Cluster", type: "cluster", ra: 17.9, dec: -34.82, mag: 3.3 },
  { id: "omega-centauri", name: "Omega Centauri", type: "cluster", ra: 13.45, dec: -47.48, mag: 3.7 },
  { id: "eta-carinae", name: "Carina Nebula", type: "nebula", ra: 10.75, dec: -59.87, mag: 1.0 },
  { id: "north-america", name: "North America Nebula", type: "nebula", ra: 20.97, dec: 44.53, mag: 4.0 },
  { id: "veil", name: "Veil Nebula", type: "nebula", ra: 20.76, dec: 30.72, mag: 7.0 },
  { id: "helix", name: "Helix Nebula", type: "nebula", ra: 22.49, dec: -20.84, mag: 7.3 },
  { id: "m1", name: "Crab Nebula", type: "nebula", ra: 5.58, dec: 22.01, mag: 8.4 },
  { id: "m51", name: "Whirlpool Galaxy", type: "galaxy", ra: 13.5, dec: 47.2, mag: 8.4 },
  { id: "m81", name: "Bode's Galaxy", type: "galaxy", ra: 9.93, dec: 69.07, mag: 6.9 },
  { id: "m82", name: "Cigar Galaxy", type: "galaxy", ra: 9.93, dec: 69.68, mag: 8.4 },
  { id: "m101", name: "Pinwheel Galaxy", type: "galaxy", ra: 14.05, dec: 54.35, mag: 7.9 },
  { id: "m104", name: "Sombrero Galaxy", type: "galaxy", ra: 12.67, dec: -11.62, mag: 8.0 },
  { id: "m83", name: "Southern Pinwheel", type: "galaxy", ra: 13.63, dec: -29.87, mag: 7.5 },
  { id: "m63", name: "Sunflower Galaxy", type: "galaxy", ra: 13.26, dec: 42.03, mag: 8.6 },
  { id: "m94", name: "Croc's Eye Galaxy", type: "galaxy", ra: 12.84, dec: 41.12, mag: 8.2 },
  { id: "m64", name: "Black Eye Galaxy", type: "galaxy", ra: 12.94, dec: 21.68, mag: 8.5 },
  { id: "m5", name: "M5", type: "cluster", ra: 15.31, dec: 2.08, mag: 5.7 },
  { id: "m15", name: "M15", type: "cluster", ra: 21.5, dec: 12.17, mag: 6.2 },
  { id: "m2", name: "M2", type: "cluster", ra: 21.56, dec: -0.82, mag: 6.5 },
  { id: "m22", name: "Sagittarius Cluster", type: "cluster", ra: 18.61, dec: -23.9, mag: 5.1 },
  { id: "m55", name: "M55", type: "cluster", ra: 19.67, dec: -30.97, mag: 6.3 }
];

const starMap = new Map(stars.map((star) => [star.id, star]));
const canvas = document.getElementById("star-map");
const ctx = canvas.getContext("2d");
const objectName = document.getElementById("object-name");
const objectMeta = document.getElementById("object-meta");
const objectCoords = document.getElementById("object-coords");
const objectCard = document.getElementById("object-card");
const projectionDescription = document.getElementById("projection-description");
const labelsVisibilitySelect = document.getElementById("labels-visibility");
const patternDetailSelect = document.getElementById("pattern-detail");
const asterismVisibilitySelect = document.getElementById("asterism-visibility");
const deepSkyVisibilitySelect = document.getElementById("deep-sky-visibility");
const mobileControlsShell = document.getElementById("mobile-controls-shell");
const timeOfDayWheel = document.getElementById("time-of-day");
const timeOfDayValue = document.getElementById("time-of-day-value");
const seasonDayWheel = document.getElementById("season-day");
const seasonDayValue = document.getElementById("season-day-value");
const observerLatitudeWheel = document.getElementById("observer-latitude-wheel");
const observerLatitudeValue = document.getElementById("observer-latitude-value");
const fieldBrightnessInput = document.getElementById("field-brightness");
const fieldBrightnessValue = document.getElementById("field-brightness-value");
const foregroundSizeInput = document.getElementById("foreground-size");
const foregroundSizeValue = document.getElementById("foreground-size-value");
const milkyWayBrightnessInput = document.getElementById("milky-way-brightness");
const milkyWayBrightnessValue = document.getElementById("milky-way-brightness-value");

const projectionMetadata = {
  equirectangular: {
    label: "Equirectangular star chart",
    drawWrapCopies: true,
    horizontalSpanDeg: 360,
    verticalSpanDeg: 180
  },
  orthographic: {
    label: "Orthographic globe view",
    drawWrapCopies: false,
    horizontalSpanDeg: 180,
    verticalSpanDeg: 180
  },
  stereographic: {
    label: "Stereographic sky dome",
    drawWrapCopies: false,
    horizontalSpanDeg: 160,
    verticalSpanDeg: 160
  }
};

const fieldStars = generateFieldStars(1120);
const allStars = [...fieldStars, ...stars];
const MAX_ZOOM = 12;
const currentDate = new Date();
const currentSeasonYear = currentDate.getFullYear();
const milkyWayImage = new Image();
milkyWayImage.crossOrigin = "anonymous";
milkyWayImage.src = "https://upload.wikimedia.org/wikipedia/commons/6/60/ESO_-_Milky_Way.jpg";
const milkyWaySamples = [];
let milkyWayReady = false;
const milkyWayBuffer = document.createElement("canvas");
const milkyWayBufferCtx = milkyWayBuffer.getContext("2d");

const state = {
  centerRa: 6,
  centerDec: 18,
  centerAz: 180,
  centerAlt: 25,
  zoom: 1.2,
  dragging: false,
  pointerX: 0,
  pointerY: 0,
  hoverStar: starMap.get("polaris"),
  projection: "stereographic",
  labelsVisibility: "on",
  constellationDetail: "full",
  asterismVisibility: "on",
  deepSkyVisibility: "popular",
  coordinateSystem: "horizontal",
  observerLatitude: 42,
  timeOfDayHours: 22,
  seasonDay: getDayOfYear(currentDate),
  fieldStarBrightness: 1.6,
  foregroundStarScale: 0.7,
  milkyWayBrightness: 0.28
};

const activePointers = new Map();
const touchGesture = {
  pinchDistance: 0,
  midpointX: 0,
  midpointY: 0
};
const pointerGesture = {
  moved: false,
  startX: 0,
  startY: 0
};
const timeWheelGesture = {
  active: false,
  startX: 0,
  accumulatedHours: 0
};
const seasonWheelGesture = {
  active: false,
  startX: 0,
  accumulatedDays: 0
};
const latitudeWheelGesture = {
  active: false,
  startX: 0,
  accumulatedDegrees: 0
};

function deltaToPixels(delta, deltaMode, viewportSize) {
  if (deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
    return delta;
  }
  if (deltaMode === WheelEvent.DOM_DELTA_LINE) {
    return delta * 16;
  }
  return delta * viewportSize;
}

function resizeCanvas() {
  const { clientWidth, clientHeight } = canvas;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = clientWidth * dpr;
  canvas.height = clientHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw();
}

function wrapHours(hours) {
  return ((hours % 24) + 24) % 24;
}

function getDaysInYear(year) {
  return new Date(year, 1, 29).getMonth() === 1 ? 366 : 365;
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

function dayOfYearToDate(day, year = currentSeasonYear) {
  return new Date(year, 0, day);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function wrapDayOfYear(day) {
  const daysInYear = getDaysInYear(currentSeasonYear);
  return ((Math.round(day) - 1 + daysInYear) % daysInYear) + 1;
}

function wrapDegrees(degrees) {
  return ((degrees % 360) + 360) % 360;
}

function normalizeRightAscensionDegrees(degrees) {
  return wrapDegrees(degrees);
}

function angularDifferenceDegrees(degrees, centerDegrees) {
  let diff = wrapDegrees(degrees - centerDegrees);
  if (diff > 180) {
    diff -= 360;
  }
  return diff;
}

function raDifference(ra, centerRa) {
  let diff = wrapHours(ra - centerRa);
  if (diff > 12) {
    diff -= 24;
  }
  return diff;
}

function raDecToScreen(ra, dec, offsetWrap = 0) {
  const { lon, lat } = getSkyCoordinates(ra, dec);
  return lonLatToScreen(lon, lat, offsetWrap);
}

function getSkyCoordinates(ra, dec) {
  if (state.coordinateSystem === "equatorial") {
    return { lon: ra * 15, lat: dec };
  }

  return equatorialToHorizontal(ra, dec);
}

function getSeasonOffsetHours() {
  const daysInYear = getDaysInYear(currentSeasonYear);
  const vernalEquinoxDay = clamp(Math.round((79 / 365) * daysInYear), 1, daysInYear);
  return wrapHours(((state.seasonDay - vernalEquinoxDay) / daysInYear) * 24);
}

function getSolarRightAscensionHours() {
  return getSeasonOffsetHours();
}

function getLocalSiderealHours() {
  return wrapHours(getSolarRightAscensionHours() + state.timeOfDayHours - 12);
}

function equatorialToHorizontal(ra, dec) {
  const latitude = (state.observerLatitude * Math.PI) / 180;
  const localSkyHours = getLocalSiderealHours();
  const hourAngle = ((localSkyHours - ra) * Math.PI) / 12;
  const declination = (dec * Math.PI) / 180;
  const sinDeclination = Math.sin(declination);
  const cosDeclination = Math.cos(declination);
  const sinLatitude = Math.sin(latitude);
  const cosLatitude = Math.cos(latitude);
  const sinHourAngle = Math.sin(hourAngle);
  const cosHourAngle = Math.cos(hourAngle);

  const east = -cosDeclination * sinHourAngle;
  const north = sinDeclination * cosLatitude - cosDeclination * cosHourAngle * sinLatitude;
  const up = sinDeclination * sinLatitude + cosDeclination * cosHourAngle * cosLatitude;
  const azimuth = wrapDegrees((Math.atan2(east, north) * 180) / Math.PI);
  const altitude = (Math.asin(clamp(up, -1, 1)) * 180) / Math.PI;

  return { lon: wrapDegrees(360 - azimuth), lat: altitude };
}

function getViewCenter() {
  if (state.coordinateSystem === "equatorial") {
    return { lon: state.centerRa * 15, lat: state.centerDec };
  }

  return { lon: state.centerAz, lat: state.centerAlt };
}

function setViewCenter(lon, lat) {
  if (state.coordinateSystem === "equatorial") {
    state.centerRa = wrapHours(lon / 15);
    state.centerDec = clamp(lat, -75, 75);
    return;
  }

  state.centerAz = wrapDegrees(lon);
  state.centerAlt = clamp(lat, -85, 85);
}

function getProjectionScale() {
  return {
    x: canvas.clientWidth * 0.46 * state.zoom,
    y: canvas.clientHeight * 0.46 * state.zoom
  };
}

function lonLatToScreen(lon, lat, offsetWrap = 0) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const center = getViewCenter();
  const diffDegrees = angularDifferenceDegrees(lon + offsetWrap, center.lon);
  const lambda = (diffDegrees * Math.PI) / 180;
  const phi = (lat * Math.PI) / 180;
  const phi1 = (center.lat * Math.PI) / 180;
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const sinPhi1 = Math.sin(phi1);
  const cosPhi1 = Math.cos(phi1);
  const cosLambda = Math.cos(lambda);
  const sinLambda = Math.sin(lambda);

  if (state.projection === "orthographic") {
    const visibility = sinPhi1 * sinPhi + cosPhi1 * cosPhi * cosLambda;
    if (visibility < 0) {
      return null;
    }

    const scale = getProjectionScale();
    return {
      x: width / 2 - scale.x * cosPhi * sinLambda,
      y: height / 2 - scale.y * (cosPhi1 * sinPhi - sinPhi1 * cosPhi * cosLambda)
    };
  }

  if (state.projection === "stereographic") {
    const denominator = 1 + sinPhi1 * sinPhi + cosPhi1 * cosPhi * cosLambda;
    if (denominator <= 0.08) {
      return null;
    }

    const k = 2 / denominator;
    const scale = {
      x: canvas.clientWidth * 0.23 * state.zoom,
      y: canvas.clientHeight * 0.23 * state.zoom
    };
    return {
      x: width / 2 - scale.x * k * cosPhi * sinLambda,
      y: height / 2 - scale.y * k * (cosPhi1 * sinPhi - sinPhi1 * cosPhi * cosLambda)
    };
  }

  const visibleHours = 24 / state.zoom;
  const visibleDec = 180 / state.zoom;
  const diffDec = lat - center.lat;

  return {
    x: width / 2 - ((diffDegrees / 15) / visibleHours) * width,
    y: height / 2 - (diffDec / visibleDec) * height
  };
}

function magnitudeRadius(mag) {
  return Math.max(1.2, 4.9 - mag * 0.9);
}

function starOpacity(mag) {
  return clamp(1.08 - (mag + 1.5) / 7, 0.18, 0.96);
}

function foregroundLabelFontSize() {
  return clamp(1.8 + state.zoom * 0.98, 2.0, 7.1);
}

function foregroundLabelOpacity() {
  return clamp(0.14 + state.zoom * 0.13, 0.12, 0.76);
}

function deepSkyMarkerRadius(mag) {
  return clamp(5.4 - mag * 0.35, 2.2, 5.8);
}

function deepSkyLabelFontSize() {
  return clamp(1.9 + state.zoom * 0.96, 2.1, 6.9);
}

function visibleDeepSkyObjects() {
  if (state.deepSkyVisibility === "full") {
    return deepSkyObjects;
  }
  return deepSkyObjects.filter((object) => object.mag <= 6.5);
}

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function generateFieldStars(count) {
  const generated = [];

  for (let index = 0; index < count; index += 1) {
    const seed = index + 1;
    const ra = seededRandom(seed * 1.37) * 24;
    const dec = Math.asin(seededRandom(seed * 2.11) * 2 - 1) * (180 / Math.PI);
    const magBias = Math.pow(seededRandom(seed * 3.73), 0.42);
    const mag = 3.4 + magBias * 2.3;
    generated.push({
      id: `field-${seed}`,
      ra,
      dec,
      mag,
      isFieldStar: true
    });
  }

  return generated;
}

function galacticToEquatorial(longitude, latitude) {
  const lon = (longitude * Math.PI) / 180;
  const lat = (latitude * Math.PI) / 180;
  const cosLat = Math.cos(lat);
  const galacticVector = [
    cosLat * Math.cos(lon),
    cosLat * Math.sin(lon),
    Math.sin(lat)
  ];
  const x =
    -0.0548755604 * galacticVector[0] +
    0.4941094279 * galacticVector[1] +
    -0.867666149 * galacticVector[2];
  const y =
    -0.8734370902 * galacticVector[0] +
    -0.44482963 * galacticVector[1] +
    -0.1980763734 * galacticVector[2];
  const z =
    -0.4838350155 * galacticVector[0] +
    0.7469822445 * galacticVector[1] +
    0.4559837762 * galacticVector[2];
  const rightAscension = normalizeRightAscensionDegrees((Math.atan2(y, x) * 180) / Math.PI);
  const declination = (Math.asin(clamp(z, -1, 1)) * 180) / Math.PI;
  return {
    ra: rightAscension / 15,
    dec: declination
  };
}

function panByPixels(dx, dy) {
  const projection = projectionMetadata[state.projection];
  const center = getViewCenter();
  const horizontalDegrees = projection.horizontalSpanDeg / state.zoom;
  const verticalDegrees = projection.verticalSpanDeg / state.zoom;
  setViewCenter(
    center.lon + (dx / canvas.clientWidth) * horizontalDegrees,
    center.lat + (dy / canvas.clientHeight) * verticalDegrees
  );
}

function zoomByFactor(factor) {
  state.zoom = clamp(state.zoom * factor, 0.8, MAX_ZOOM);
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function getTouchDistance(points) {
  const [first, second] = points;
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function getTouchMidpoint(points) {
  const [first, second] = points;
  return {
    x: (first.x + second.x) / 2,
    y: (first.y + second.y) / 2
  };
}

function resetTouchGesture(points) {
  if (points.length < 2) {
    touchGesture.pinchDistance = 0;
    return;
  }

  touchGesture.pinchDistance = getTouchDistance(points);
  const midpoint = getTouchMidpoint(points);
  touchGesture.midpointX = midpoint.x;
  touchGesture.midpointY = midpoint.y;
}

milkyWayImage.addEventListener("load", () => {
  const sampleCanvas = document.createElement("canvas");
  const sampleWidth = 540;
  const sampleHeight = 270;
  sampleCanvas.width = sampleWidth;
  sampleCanvas.height = sampleHeight;
  const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });
  sampleCtx.drawImage(milkyWayImage, 0, 0, sampleWidth, sampleHeight);
  const { data } = sampleCtx.getImageData(0, 0, sampleWidth, sampleHeight);

  milkyWaySamples.length = 0;

  for (let y = 0; y < sampleHeight; y += 2) {
    for (let x = 0; x < sampleWidth; x += 2) {
      const offset = (y * sampleWidth + x) * 4;
      const red = data[offset];
      const green = data[offset + 1];
      const blue = data[offset + 2];
      const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
      const alpha = clamp((luminance - 14) / 120, 0, 1);
      if (alpha < 0.09) {
        continue;
      }

      const galacticLongitude = (x / sampleWidth) * 360;
      const galacticLatitude = 90 - (y / sampleHeight) * 180;
      const equatorial = galacticToEquatorial(galacticLongitude, galacticLatitude);

      milkyWaySamples.push({
        ra: equatorial.ra,
        dec: equatorial.dec,
        red,
        green,
        blue,
        alpha
      });
    }
  }

  milkyWayReady = true;
  draw();
});

function updateInfoCard(star) {
  objectName.textContent = star.name;
  objectMeta.textContent = `${star.constellation} • mag ${star.mag.toFixed(2)}`;
  if (state.coordinateSystem === "horizontal") {
    const { lon, lat } = getSkyCoordinates(star.ra, star.dec);
    objectCoords.textContent = `Az ${lon.toFixed(1)}° • Alt ${lat >= 0 ? "+" : ""}${lat.toFixed(1)}°`;
    return;
  }

  objectCoords.textContent = `RA ${star.ra.toFixed(2)}h • Dec ${star.dec >= 0 ? "+" : ""}${star.dec.toFixed(1)}°`;
}

function labelsAreVisible() {
  return state.labelsVisibility === "on";
}

function drawGrid() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.save();
  ctx.strokeStyle = "rgba(152, 185, 255, 0.12)";
  ctx.fillStyle = "rgba(152, 185, 255, 0.56)";
  ctx.lineWidth = 1;
  ctx.font = '12px "Space Mono", monospace';

  const longitudeStep = state.coordinateSystem === "equatorial" ? 30 : 30;
  const latitudeLabel = state.coordinateSystem === "equatorial";

  for (let lon = 0; lon < 360; lon += longitudeStep) {
    let hasSegment = false;
    let labelPoint = null;
    ctx.beginPath();

    for (let lat = -85; lat <= 85; lat += 5) {
      const point = lonLatToScreen(lon, lat);
      if (!point) {
        hasSegment = false;
        continue;
      }

      if (!hasSegment) {
        ctx.moveTo(point.x, point.y);
        hasSegment = true;
        if (!labelPoint) {
          labelPoint = point;
        }
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.stroke();
    if (labelsAreVisible() && labelPoint && labelPoint.x > -60 && labelPoint.x < width + 60) {
      const label = latitudeLabel ? `${Math.round(lon / 15)}h` : `${Math.round(lon)}°`;
      ctx.fillText(label, labelPoint.x + 6, Math.max(18, labelPoint.y + 14));
    }
  }

  for (let lat = -60; lat <= 60; lat += 30) {
    let hasSegment = false;
    let labelPoint = null;
    ctx.beginPath();

    for (let lon = 0; lon <= 360; lon += 7.5) {
      const point = lonLatToScreen(lon, lat);
      if (!point) {
        hasSegment = false;
        continue;
      }

      if (!hasSegment) {
        ctx.moveTo(point.x, point.y);
        hasSegment = true;
        if (!labelPoint) {
          labelPoint = point;
        }
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.stroke();
    if (labelsAreVisible() && labelPoint && labelPoint.y > -24 && labelPoint.y < height + 24) {
      ctx.fillText(`${lat > 0 ? "+" : ""}${lat}°`, labelPoint.x + 10, labelPoint.y - 6);
    }
  }
  ctx.restore();
}

function drawHorizonLine() {
  if (state.coordinateSystem !== "horizontal") {
    return;
  }

  ctx.save();
  ctx.strokeStyle = "rgba(246, 184, 104, 0.32)";
  ctx.lineWidth = 1.2;

  let hasSegment = false;
  ctx.beginPath();

  for (let lon = 0; lon <= 360; lon += 2) {
    const point = lonLatToScreen(lon, 0);
    if (!point) {
      hasSegment = false;
      continue;
    }

    if (!hasSegment) {
      ctx.moveTo(point.x, point.y);
      hasSegment = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  }

  ctx.stroke();
  ctx.restore();
}

function drawCardinalDirections() {
  if (state.coordinateSystem !== "horizontal" || !labelsAreVisible()) {
    return;
  }

  const directions = [
    { label: "N", lon: 0 },
    { label: "E", lon: 270 },
    { label: "S", lon: 180 },
    { label: "W", lon: 90 }
  ];

  ctx.save();
  ctx.fillStyle = "rgba(246, 184, 104, 0.52)";
  ctx.font = '12px "Space Mono", monospace';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";

  for (const direction of directions) {
    const point = lonLatToScreen(direction.lon, 1);
    if (!point) {
      continue;
    }
    if (
      point.x < 16 ||
      point.x > canvas.clientWidth - 16 ||
      point.y < 16 ||
      point.y > canvas.clientHeight - 16
    ) {
      continue;
    }

    ctx.fillText(direction.label, point.x, point.y - 4);
  }

  ctx.restore();
}

function drawMilkyWayImage() {
  if (!milkyWayReady || state.milkyWayBrightness <= 0.01) {
    return;
  }

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const bufferScale = 0.34;
  const bufferWidth = Math.max(220, Math.round(width * bufferScale));
  const bufferHeight = Math.max(220, Math.round(height * bufferScale));

  if (milkyWayBuffer.width !== bufferWidth || milkyWayBuffer.height !== bufferHeight) {
    milkyWayBuffer.width = bufferWidth;
    milkyWayBuffer.height = bufferHeight;
  }

  milkyWayBufferCtx.clearRect(0, 0, bufferWidth, bufferHeight);
  milkyWayBufferCtx.globalCompositeOperation = "source-over";

  for (const sample of milkyWaySamples) {
    const point = raDecToScreen(sample.ra, sample.dec);
    if (!point) {
      continue;
    }
    if (
      point.x < -90 ||
      point.x > width + 90 ||
      point.y < -90 ||
      point.y > height + 90
    ) {
      continue;
    }

    const scaledX = point.x * bufferScale;
    const scaledY = point.y * bufferScale;
    const opacity = sample.alpha * state.milkyWayBrightness * 0.34;
    const radius = Math.max(1.6, (2.2 + state.zoom * 0.2) * bufferScale);
    milkyWayBufferCtx.fillStyle = `rgba(${sample.red}, ${sample.green}, ${sample.blue}, ${opacity.toFixed(3)})`;
    milkyWayBufferCtx.beginPath();
    milkyWayBufferCtx.ellipse(scaledX, scaledY, radius * 5.6, radius * 2.6, 0, 0, Math.PI * 2);
    milkyWayBufferCtx.fill();
  }

  ctx.save();
  ctx.globalAlpha = 0.92;
  ctx.filter = "blur(18px) saturate(0.92)";
  ctx.drawImage(milkyWayBuffer, 0, 0, width, height);
  ctx.filter = "none";
  ctx.restore();
}

function drawConstellations() {
  if (!labelsAreVisible()) {
    return;
  }

  ctx.save();

  for (const constellation of constellations) {
    const wrapOffsets = projectionMetadata[state.projection].drawWrapCopies ? [-360, 0, 360] : [0];
    for (const wrapOffset of wrapOffsets) {
      drawConstellationSegments(constellation.segments, wrapOffset, 1.4, "rgba(159, 208, 255, 0.55)");
      if (state.constellationDetail === "full" && constellation.extraSegments?.length) {
        drawConstellationSegments(constellation.extraSegments, wrapOffset, 1.15, "rgba(159, 208, 255, 0.34)");
      }

      if (labelsAreVisible()) {
        ctx.fillStyle = "rgba(159, 208, 255, 0.78)";
        ctx.font = '13px "Space Mono", monospace';
        const labelPoint = raDecToScreen(constellation.labelRa, constellation.labelDec, wrapOffset);
        if (labelPoint && labelPoint.x > -120 && labelPoint.x < canvas.clientWidth + 120) {
          ctx.fillText(constellation.name, labelPoint.x + 8, labelPoint.y - 8);
        }
      }
    }
  }
  ctx.restore();
}

function drawAsterisms() {
  if (state.asterismVisibility === "off" || !labelsAreVisible()) {
    return;
  }

  ctx.save();
  ctx.fillStyle = "rgba(238, 224, 161, 0.42)";
  ctx.font = '12px "Space Mono", monospace';

  for (const asterism of asterisms) {
    const wrapOffsets = projectionMetadata[state.projection].drawWrapCopies ? [-360, 0, 360] : [0];
    for (const wrapOffset of wrapOffsets) {
      drawConstellationSegments(asterism.segments, wrapOffset, 1, "rgba(238, 224, 161, 0.18)");
      if (state.constellationDetail === "full" && asterism.extraSegments?.length) {
        drawConstellationSegments(asterism.extraSegments, wrapOffset, 1.15, "rgba(238, 224, 161, 0.24)");
      }
      const labelPoint = raDecToScreen(asterism.labelRa, asterism.labelDec, wrapOffset);
      if (labelPoint && labelPoint.x > -120 && labelPoint.x < canvas.clientWidth + 120) {
        ctx.fillText(asterism.name, labelPoint.x + 6, labelPoint.y - 10);
      }
    }
  }

  ctx.restore();
}

function drawConstellationSegments(segments, wrapOffset, lineWidth, strokeStyle) {
  ctx.save();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;

  for (const [startId, endId] of segments) {
    const start = starMap.get(startId);
    const end = starMap.get(endId);
    if (!start || !end) {
      continue;
    }

    const startPoint = raDecToScreen(start.ra, start.dec, wrapOffset);
    const endPoint = raDecToScreen(end.ra, end.dec, wrapOffset);
    if (!startPoint || !endPoint) {
      continue;
    }
    if (
      (startPoint.x < -120 && endPoint.x < -120) ||
      (startPoint.x > canvas.clientWidth + 120 && endPoint.x > canvas.clientWidth + 120)
    ) {
      continue;
    }

    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();
  }

  ctx.restore();
}

function drawStars() {
  const wrapOffsets = projectionMetadata[state.projection].drawWrapCopies ? [-360, 0, 360] : [0];
  for (const wrapOffset of wrapOffsets) {
    for (const star of allStars) {
      const point = raDecToScreen(star.ra, star.dec, wrapOffset);
      if (!point) {
        continue;
      }
      if (
        point.x < -30 ||
        point.x > canvas.clientWidth + 30 ||
        point.y < -30 ||
        point.y > canvas.clientHeight + 30
      ) {
        continue;
      }

      const baseRadius = magnitudeRadius(star.mag) * Math.sqrt(state.zoom);
      const radius = star.isFieldStar
        ? Math.max(0.35, baseRadius * (0.42 + state.fieldStarBrightness * 0.1))
        : baseRadius * state.foregroundStarScale;
      const isHovered = state.hoverStar?.id === star.id && wrapOffset === 0;
      const opacity = star.isFieldStar
        ? clamp(starOpacity(star.mag) * state.fieldStarBrightness, 0.08, 0.98)
        : starOpacity(star.mag);
      ctx.beginPath();
      ctx.fillStyle = isHovered
        ? "rgba(255, 223, 153, 0.98)"
        : `rgba(245, 248, 255, ${opacity.toFixed(3)})`;
      ctx.shadowColor = isHovered
        ? "rgba(255, 214, 122, 0.8)"
        : `rgba(255, 255, 255, ${(opacity * 0.42).toFixed(3)})`;
      ctx.shadowBlur = isHovered ? 16 : Math.max(2, radius * 2.2);
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      if (!star.isFieldStar && labelsAreVisible()) {
        const labelSize = foregroundLabelFontSize();
        const labelOpacity = isHovered ? 0.96 : foregroundLabelOpacity();
        const xOffset = Math.max(4, radius * (0.85 + state.zoom * 0.1));
        const yOffset = Math.max(3, radius * 0.42);
        ctx.fillStyle = `rgba(237, 244, 255, ${labelOpacity.toFixed(3)})`;
        ctx.font = `${labelSize.toFixed(2)}px "Space Grotesk", sans-serif`;
        ctx.textBaseline = "middle";
        ctx.fillText(star.name, point.x + xOffset, point.y - yOffset);
      }
    }
  }
}

function drawDeepSkyObjects() {
  if (!labelsAreVisible()) {
    return;
  }

  const wrapOffsets = projectionMetadata[state.projection].drawWrapCopies ? [-360, 0, 360] : [0];
  const objects = visibleDeepSkyObjects();

  ctx.save();
  ctx.textBaseline = "middle";

  for (const wrapOffset of wrapOffsets) {
    for (const object of objects) {
      const point = raDecToScreen(object.ra, object.dec, wrapOffset);
      if (!point) {
        continue;
      }
      if (
        point.x < -40 ||
        point.x > canvas.clientWidth + 40 ||
        point.y < -40 ||
        point.y > canvas.clientHeight + 40
      ) {
        continue;
      }

      const radius = deepSkyMarkerRadius(object.mag) * Math.sqrt(state.zoom / 1.8);
      ctx.save();
      ctx.translate(point.x, point.y);
      ctx.strokeStyle = "rgba(151, 218, 255, 0.85)";
      ctx.fillStyle = "rgba(151, 218, 255, 0.12)";
      ctx.lineWidth = 1;

      if (object.type === "galaxy") {
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.6, radius, -0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else if (object.type === "nebula") {
        ctx.beginPath();
        ctx.rect(-radius, -radius, radius * 2, radius * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-radius * 1.4, 0);
        ctx.lineTo(radius * 1.4, 0);
        ctx.moveTo(0, -radius * 1.4);
        ctx.lineTo(0, radius * 1.4);
        ctx.stroke();
      }
      ctx.restore();

      if (labelsAreVisible()) {
        const labelSize = deepSkyLabelFontSize();
        const labelOpacity = clamp(0.18 + state.zoom * 0.16, 0.16, 0.82);
        ctx.fillStyle = `rgba(214, 241, 255, ${labelOpacity.toFixed(3)})`;
        ctx.font = `${labelSize.toFixed(2)}px "Space Grotesk", sans-serif`;
        ctx.fillText(object.name, point.x + radius + 5, point.y - radius * 0.35);
      }
    }
  }

  ctx.restore();
}

function drawBackdrop() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const gradient = ctx.createRadialGradient(width / 2, height * 0.35, 20, width / 2, height / 2, width * 0.8);
  gradient.addColorStop(0, "rgba(18, 43, 84, 0.22)");
  gradient.addColorStop(1, "rgba(2, 6, 13, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  if (state.projection === "orthographic" || state.projection === "stereographic") {
    const scale = getProjectionScale();
    ctx.save();
    ctx.strokeStyle = "rgba(159, 208, 255, 0.16)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(width / 2, height / 2, scale.x, scale.y, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function formatTimeOfDay(hours) {
  const wrapped = wrapHours(hours);
  let wholeHours = Math.floor(wrapped);
  const minutes = Math.round((wrapped - wholeHours) * 60);

  if (minutes === 60) {
    wholeHours = (wholeHours + 1) % 24;
  }

  const displayMinutes = minutes === 60 ? 0 : minutes;
  const meridiem = wholeHours >= 12 ? "PM" : "AM";
  const hour12 = wholeHours % 12 || 12;
  return `${hour12}:${String(displayMinutes).padStart(2, "0")} ${meridiem}`;
}

function formatSeasonDay(day) {
  const date = dayOfYearToDate(wrapDayOfYear(day));
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function updateTimeWheel() {
  const formatted = formatTimeOfDay(state.timeOfDayHours);
  timeOfDayValue.textContent = formatted;
  timeOfDayWheel.setAttribute("aria-valuenow", state.timeOfDayHours.toFixed(2));
  timeOfDayWheel.setAttribute("aria-valuetext", formatted);
}

function setTimeOfDay(hours) {
  state.timeOfDayHours = wrapHours(hours);
  updateTimeWheel();
  updateInfoCard(state.hoverStar);
  draw();
}

function nudgeTimeOfDay(deltaHours) {
  setTimeOfDay(state.timeOfDayHours + deltaHours);
}

function updateSeasonWheel() {
  const formatted = formatSeasonDay(state.seasonDay);
  seasonDayValue.textContent = formatted;
  seasonDayWheel.setAttribute("aria-valuenow", String(state.seasonDay));
  seasonDayWheel.setAttribute("aria-valuetext", formatted);
}

function updateLatitudeUI() {
  const northSouth = state.observerLatitude >= 0 ? "N" : "S";
  const formatted = `${Math.abs(state.observerLatitude).toFixed(1)}° ${northSouth}`;
  observerLatitudeValue.textContent = formatted;
  observerLatitudeWheel.setAttribute("aria-valuenow", state.observerLatitude.toFixed(1));
  observerLatitudeWheel.setAttribute("aria-valuetext", formatted);
}

function setSeasonDay(day) {
  state.seasonDay = wrapDayOfYear(day);
  updateSeasonWheel();
  updateInfoCard(state.hoverStar);
  draw();
}

function nudgeSeasonDay(deltaDays) {
  setSeasonDay(state.seasonDay + deltaDays);
}

function setObserverLatitude(latitude) {
  state.observerLatitude = clamp(latitude, -90, 90);
  updateLatitudeUI();
  updateInfoCard(state.hoverStar);
  draw();
}

function nudgeObserverLatitude(deltaDegrees) {
  setObserverLatitude(state.observerLatitude + deltaDegrees);
}

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  drawBackdrop();
  drawMilkyWayImage();
  drawGrid();
  drawHorizonLine();
  drawCardinalDirections();
  drawConstellations();
  drawAsterisms();
  drawDeepSkyObjects();
  drawStars();
}

function findNearestStar(x, y) {
  return findNearestStarWithinDistance(x, y, 24);
}

function findNearestStarWithinDistance(x, y, maxDistance) {
  let nearest = null;
  let minDistance = Infinity;
  const wrapOffsets = projectionMetadata[state.projection].drawWrapCopies ? [-360, 0, 360] : [0];

  for (const star of stars) {
    for (const wrapOffset of wrapOffsets) {
      const point = raDecToScreen(star.ra, star.dec, wrapOffset);
      if (!point) {
        continue;
      }
      const dx = point.x - x;
      const dy = point.y - y;
      const distance = Math.hypot(dx, dy);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = star;
      }
    }
  }

  return minDistance < maxDistance ? nearest : null;
}

function handlePointerMove(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (state.dragging) {
    const dx = x - state.pointerX;
    const dy = y - state.pointerY;
    if (Math.hypot(x - pointerGesture.startX, y - pointerGesture.startY) > 4) {
      pointerGesture.moved = true;
    }
    panByPixels(dx, dy);
    state.pointerX = x;
    state.pointerY = y;
    draw();
    return;
  }

  const hovered = findNearestStar(x, y);
  objectCard.style.opacity = hovered ? "1" : "0.8";
  if (hovered && hovered.id !== state.hoverStar?.id) {
    state.hoverStar = hovered;
    updateInfoCard(hovered);
    draw();
  }
}

canvas.addEventListener("pointerdown", (event) => {
  const point = getCanvasPoint(event);
  state.dragging = true;
  state.pointerX = point.x;
  state.pointerY = point.y;
  pointerGesture.startX = point.x;
  pointerGesture.startY = point.y;
  pointerGesture.moved = false;
  canvas.classList.add("dragging");
  canvas.setPointerCapture(event.pointerId);

  if (event.pointerType === "touch") {
    activePointers.set(event.pointerId, point);
    resetTouchGesture([...activePointers.values()]);
  }
});

canvas.addEventListener("pointermove", (event) => {
  if (event.pointerType === "touch" && activePointers.has(event.pointerId)) {
    const point = getCanvasPoint(event);
    activePointers.set(event.pointerId, point);
    const points = [...activePointers.values()];

    if (points.length >= 2) {
      const midpoint = getTouchMidpoint(points);
      const distance = getTouchDistance(points);

      if (touchGesture.pinchDistance > 0) {
        panByPixels(midpoint.x - touchGesture.midpointX, midpoint.y - touchGesture.midpointY);
        zoomByFactor(distance / touchGesture.pinchDistance);
        pointerGesture.moved = true;
        draw();
      }

      touchGesture.pinchDistance = distance;
      touchGesture.midpointX = midpoint.x;
      touchGesture.midpointY = midpoint.y;
      return;
    }

    if (points.length === 1 && state.dragging) {
      if (Math.hypot(point.x - pointerGesture.startX, point.y - pointerGesture.startY) > 8) {
        pointerGesture.moved = true;
      }
      panByPixels(point.x - state.pointerX, point.y - state.pointerY);
      state.pointerX = point.x;
      state.pointerY = point.y;
      draw();
      return;
    }
  }

  handlePointerMove(event);
});

canvas.addEventListener("pointerup", (event) => {
  const point = getCanvasPoint(event);
  const tapTravel = Math.hypot(point.x - pointerGesture.startX, point.y - pointerGesture.startY);
  const maxTapDistance = event.pointerType === "touch" ? 40 : 24;
  const shouldSelectTap = event.pointerType === "touch" ? tapTravel < 18 : !pointerGesture.moved;
  const tappedStar = shouldSelectTap
    ? findNearestStarWithinDistance(point.x, point.y, maxTapDistance)
    : null;
  state.dragging = false;
  canvas.classList.remove("dragging");
  canvas.releasePointerCapture(event.pointerId);
  activePointers.delete(event.pointerId);
  resetTouchGesture([...activePointers.values()]);
  pointerGesture.moved = false;
  if (tappedStar) {
    state.hoverStar = tappedStar;
    objectCard.style.opacity = "1";
    updateInfoCard(tappedStar);
    draw();
  }
});

canvas.addEventListener("pointercancel", (event) => {
  state.dragging = false;
  canvas.classList.remove("dragging");
  canvas.releasePointerCapture(event.pointerId);
  activePointers.delete(event.pointerId);
  resetTouchGesture([...activePointers.values()]);
  pointerGesture.moved = false;
});

canvas.addEventListener("pointerleave", () => {
  if (!state.dragging) {
    objectCard.style.opacity = "0.8";
  }
});

canvas.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (event.ctrlKey) {
    const zoomFactor = Math.exp(-event.deltaY * 0.0035);
    zoomByFactor(zoomFactor);
    draw();
    return;
  }

  const dx = deltaToPixels(event.deltaX, event.deltaMode, canvas.clientWidth);
  const dy = deltaToPixels(event.deltaY, event.deltaMode, canvas.clientHeight);
  panByPixels(dx, dy);
  draw();
}, { passive: false });

labelsVisibilitySelect.addEventListener("change", (event) => {
  state.labelsVisibility = event.target.value;
  draw();
});

patternDetailSelect.addEventListener("change", (event) => {
  state.constellationDetail = event.target.value;
  draw();
});

asterismVisibilitySelect.addEventListener("change", (event) => {
  state.asterismVisibility = event.target.value;
  draw();
});

deepSkyVisibilitySelect.addEventListener("change", (event) => {
  state.deepSkyVisibility = event.target.value;
  draw();
});

fieldBrightnessInput.addEventListener("input", (event) => {
  state.fieldStarBrightness = Number(event.target.value) / 100;
  fieldBrightnessValue.textContent = `${event.target.value}%`;
  draw();
});

foregroundSizeInput.addEventListener("input", (event) => {
  state.foregroundStarScale = Number(event.target.value) / 100;
  foregroundSizeValue.textContent = `${event.target.value}%`;
  draw();
});

milkyWayBrightnessInput.addEventListener("input", (event) => {
  state.milkyWayBrightness = Number(event.target.value) / 100;
  milkyWayBrightnessValue.textContent = `${event.target.value}%`;
  draw();
});

timeOfDayWheel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = Math.abs(event.deltaY) < 2 ? -event.deltaY : -Math.sign(event.deltaY);
  nudgeTimeOfDay(delta);
}, { passive: false });

timeOfDayWheel.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  timeWheelGesture.active = true;
  timeWheelGesture.startX = event.clientX;
  timeWheelGesture.accumulatedHours = 0;
  timeOfDayWheel.classList.add("dragging");
  timeOfDayWheel.setPointerCapture(event.pointerId);
});

timeOfDayWheel.addEventListener("pointermove", (event) => {
  if (!timeWheelGesture.active) {
    return;
  }

  const deltaX = event.clientX - timeWheelGesture.startX;
  const totalHours = deltaX / 34;
  const stepHours = totalHours - timeWheelGesture.accumulatedHours;

  if (Math.abs(stepHours) >= 0.08) {
    timeWheelGesture.accumulatedHours = totalHours;
    nudgeTimeOfDay(stepHours);
  }
});

function releaseTimeWheel(pointerId) {
  timeWheelGesture.active = false;
  timeWheelGesture.startX = 0;
  timeWheelGesture.accumulatedHours = 0;
  timeOfDayWheel.classList.remove("dragging");
  if (pointerId !== undefined && timeOfDayWheel.hasPointerCapture(pointerId)) {
    timeOfDayWheel.releasePointerCapture(pointerId);
  }
}

timeOfDayWheel.addEventListener("pointerup", (event) => {
  releaseTimeWheel(event.pointerId);
});

timeOfDayWheel.addEventListener("pointercancel", (event) => {
  releaseTimeWheel(event.pointerId);
});

timeOfDayWheel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowRight") {
    event.preventDefault();
    nudgeTimeOfDay(0.5);
  } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
    event.preventDefault();
    nudgeTimeOfDay(-0.5);
  }
});

seasonDayWheel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = Math.abs(event.deltaY) < 2 ? -event.deltaY : -Math.sign(event.deltaY);
  nudgeSeasonDay(delta);
}, { passive: false });

seasonDayWheel.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  seasonWheelGesture.active = true;
  seasonWheelGesture.startX = event.clientX;
  seasonWheelGesture.accumulatedDays = 0;
  seasonDayWheel.classList.add("dragging");
  seasonDayWheel.setPointerCapture(event.pointerId);
});

seasonDayWheel.addEventListener("pointermove", (event) => {
  if (!seasonWheelGesture.active) {
    return;
  }

  const deltaX = event.clientX - seasonWheelGesture.startX;
  const totalDays = deltaX / 18;
  const stepDays = totalDays - seasonWheelGesture.accumulatedDays;

  if (Math.abs(stepDays) >= 0.18) {
    seasonWheelGesture.accumulatedDays = totalDays;
    nudgeSeasonDay(stepDays);
  }
});

function releaseSeasonWheel(pointerId) {
  seasonWheelGesture.active = false;
  seasonWheelGesture.startX = 0;
  seasonWheelGesture.accumulatedDays = 0;
  seasonDayWheel.classList.remove("dragging");
  if (pointerId !== undefined && seasonDayWheel.hasPointerCapture(pointerId)) {
    seasonDayWheel.releasePointerCapture(pointerId);
  }
}

seasonDayWheel.addEventListener("pointerup", (event) => {
  releaseSeasonWheel(event.pointerId);
});

seasonDayWheel.addEventListener("pointercancel", (event) => {
  releaseSeasonWheel(event.pointerId);
});

seasonDayWheel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowRight") {
    event.preventDefault();
    nudgeSeasonDay(1);
  } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
    event.preventDefault();
    nudgeSeasonDay(-1);
  }
});

observerLatitudeWheel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = Math.abs(event.deltaY) < 2 ? -event.deltaY : -Math.sign(event.deltaY);
  nudgeObserverLatitude(delta);
}, { passive: false });

observerLatitudeWheel.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  latitudeWheelGesture.active = true;
  latitudeWheelGesture.startX = event.clientX;
  latitudeWheelGesture.accumulatedDegrees = 0;
  observerLatitudeWheel.classList.add("dragging");
  observerLatitudeWheel.setPointerCapture(event.pointerId);
});

observerLatitudeWheel.addEventListener("pointermove", (event) => {
  if (!latitudeWheelGesture.active) {
    return;
  }

  const deltaX = event.clientX - latitudeWheelGesture.startX;
  const totalDegrees = deltaX / 16;
  const stepDegrees = totalDegrees - latitudeWheelGesture.accumulatedDegrees;

  if (Math.abs(stepDegrees) >= 0.12) {
    latitudeWheelGesture.accumulatedDegrees = totalDegrees;
    nudgeObserverLatitude(stepDegrees);
  }
});

function releaseLatitudeWheel(pointerId) {
  latitudeWheelGesture.active = false;
  latitudeWheelGesture.startX = 0;
  latitudeWheelGesture.accumulatedDegrees = 0;
  observerLatitudeWheel.classList.remove("dragging");
  if (pointerId !== undefined && observerLatitudeWheel.hasPointerCapture(pointerId)) {
    observerLatitudeWheel.releasePointerCapture(pointerId);
  }
}

observerLatitudeWheel.addEventListener("pointerup", (event) => {
  releaseLatitudeWheel(event.pointerId);
});

observerLatitudeWheel.addEventListener("pointercancel", (event) => {
  releaseLatitudeWheel(event.pointerId);
});

observerLatitudeWheel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowRight") {
    event.preventDefault();
    nudgeObserverLatitude(0.5);
  } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
    event.preventDefault();
    nudgeObserverLatitude(-0.5);
  }
});

window.addEventListener("resize", resizeCanvas);

updateInfoCard(state.hoverStar);
projectionDescription.textContent = projectionMetadata[state.projection].label;
labelsVisibilitySelect.value = state.labelsVisibility;
patternDetailSelect.value = state.constellationDetail;
asterismVisibilitySelect.value = state.asterismVisibility;
deepSkyVisibilitySelect.value = state.deepSkyVisibility;
updateSeasonWheel();
updateLatitudeUI();
updateTimeWheel();
fieldBrightnessValue.textContent = `${fieldBrightnessInput.value}%`;
foregroundSizeValue.textContent = `${foregroundSizeInput.value}%`;
milkyWayBrightnessValue.textContent = `${milkyWayBrightnessInput.value}%`;
resizeCanvas();
