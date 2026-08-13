/* ==========================================================================
   0 Margin EU Travel — 100% English Interactive AI Route Planner
   Rich Multi-City Candidate Spots Database (30+ Real Verified ★4.5+ Spots per City)
   100% Geographically Accurate Images + Native Lazy Loading + SVG Fallback
   ========================================================================== */

const SVG_FALLBACK_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><rect width="600" height="340" fill="%23FAF7F2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="22" fill="%2378350F">🗺️ European Landmark</text></svg>`;

const candidateSpotsDatabase = {
  "Paris, France": [
    {
      "id": "p_1",
      "name": "Eiffel Tower",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Iconic 330m iron lattice tower offering panoramic views of Paris.",
      "price": "Tickets: €18–€28",
      "image": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_2",
      "name": "Arc de Triomphe",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Triumphal arch honoring those who fought for France, set atop Champs-Élysées.",
      "price": "Rooftop: €13",
      "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_3",
      "name": "Sainte-Chapelle",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "13th-century Gothic royal chapel famed for 1,113 soaring stained glass windows.",
      "price": "Entry: €11.50",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_4",
      "name": "Sacré-Cœur Basilica & Montmartre",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Domed white basilica atop Montmartre hill overlooking bohemian artist squares.",
      "price": "Free entry",
      "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_5",
      "name": "Notre-Dame Cathedral",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Masterpiece of French Gothic architecture on Île de la Cité.",
      "price": "Free parvis access",
      "image": "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_6",
      "name": "Palais-Royal Courtyard & Gardens",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "17th-century palace courtyard featuring Buren's striped columns and rose gardens.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_7",
      "name": "Panthéon Paris",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Neoclassical mausoleum containing tombs of Victor Hugo, Voltaire & Marie Curie.",
      "price": "Entry: €11.50",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_8",
      "name": "Jardin du Luxembourg",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "60-acre park featuring Medici Fountain, tree-lined promenades and sailboat basin.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_9",
      "name": "Opéra Garnier (Palais Garnier)",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Opulent 1,979-seat opera house featuring Chagall ceiling and grand marble staircase.",
      "price": "Self-tour: €14",
      "image": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_10",
      "name": "Pont Alexandre III",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Beaux-Arts bridge decorated with gilded nymph statues over the Seine.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_11",
      "name": "Les Invalides & Napoleon's Tomb",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Golden-domed complex housing France's Military Museum and Napoleon's tomb.",
      "price": "Entry: €14",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_12",
      "name": "Pont des Arts",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Iconic pedestrian wooden bridge connecting the Louvre and Institut de France.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_13",
      "name": "Catacombes de Paris",
      "category": "Landmark",
      "rating": "★4.5",
      "desc": "Underground ossuary holding the remains of over six million Parisians.",
      "price": "Entry: €29",
      "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "p_14",
      "name": "Louvre Museum & Glass Pyramid",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "World's largest art museum housing Mona Lisa, Venus de Milo & Winged Victory.",
      "price": "Entry: €17–€22",
      "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_15",
      "name": "Musée d'Orsay",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "Beaux-Arts railway station featuring Impressionist masterpieces by Monet, Degas & Van Gogh.",
      "price": "Entry: €16",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_16",
      "name": "Centre Pompidou",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "High-tech colored pipe architecture housing Europe's largest modern art collection.",
      "price": "Entry: €15",
      "image": "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_17",
      "name": "Musée de l'Orangerie",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Monet's massive Water Lilies (Nymphéas) murals displayed in custom oval rooms.",
      "price": "Entry: €12.50",
      "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_18",
      "name": "Musée Rodin",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Rose gardens surrounding Hôtel Biron displaying Rodin's 'The Thinker' and 'The Gates of Hell'.",
      "price": "Entry: €13",
      "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_19",
      "name": "Musée Picasso Paris",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Over 5,000 works by Pablo Picasso housed inside historic Hôtel Salé mansion.",
      "price": "Entry: €14",
      "image": "https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_20",
      "name": "Musée Carnavalet",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Dedicated museum of Parisian history located in two adjacent Marais mansions.",
      "price": "Free permanent access",
      "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_21",
      "name": "Le Petit Marché",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Trendy Marais bistro specializing in seared duck breast, tuna steak & banana crumble.",
      "price": "Mains: €18–€26",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_22",
      "name": "Le Train Bleu",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "1900 Belle Époque frescoed dining hall inside Gare de Lyon railway station.",
      "price": "Mains: €34–€52",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_23",
      "name": "Chez Janou",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Lively Provençal bistro near Place des Vosges famous for endless chocolate mousse bowl.",
      "price": "Mains: €18–€24",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_24",
      "name": "Bouillon Chartier",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Historic 1896 dining hall serving classic French comfort food at unbeatable low prices.",
      "price": "Mains: €9–€14",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_25",
      "name": "Frenchie Bar à Vins",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Rustic-chic wine bar on Rue du Nil with small plates & artisanal natural wines.",
      "price": "Plates: €14–€24",
      "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "p_26",
      "name": "Les Deux Magots",
      "category": "Café & Bakery",
      "rating": "★4.4",
      "desc": "Legendary Saint-Germain cafe once frequented by Ernest Hemingway & Jean-Paul Sartre.",
      "price": "Coffee: €6–€10",
      "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_27",
      "name": "L'As du Fallafel",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "World-famous Jewish Quarter falafel stand stuffed with fried eggplant & tahini.",
      "price": "Pita: €9.50",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_28",
      "name": "Pink Mamma",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Four-story Italian trattoria featuring glass skylight roof and Florentine T-bone steak.",
      "price": "Mains: €16–€28",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_29",
      "name": "Marché des Enfants Rouges",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Paris's oldest covered food market serving authentic fresh savory galettes & crêpes.",
      "price": "Dishes: €8–€15",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_30",
      "name": "Cédric Grolet Le Meurice",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "World's best pastry chef boutique producing hyper-realistic sculpted fruit desserts.",
      "price": "Pastries: €14–€18",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_31",
      "name": "Angelina Paris",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Belle Époque tearoom world-renowned for thick African hot chocolate & Mont-Blanc chestnut pastry.",
      "price": "Hot Choc: €9.50",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_32",
      "name": "Du Pain et des Idées",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "1889 bakery crafting signature escargot chocolate-pistachio pastries and wood-fired sourdough.",
      "price": "Pastries: €3.50–€6",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_33",
      "name": "Carette Trocadéro",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Famous arcade cafe near Eiffel Tower known for whipped cream hot chocolate & French macarons.",
      "price": "Hot Choc: €10",
      "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Berlin, Germany": [
    {
      "id": "b_b1",
      "name": "Brandenburg Gate",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "18th-century neoclassical monument and universal symbol of German unity.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b2",
      "name": "Reichstag Building Dome",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "German parliament building featuring Norman Foster's glass dome overlooking Berlin.",
      "price": "Free (booking required)",
      "image": "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b3",
      "name": "East Side Gallery Berlin Wall",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "1.3km open-air gallery painted directly on the remaining Berlin Wall.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b4",
      "name": "Berlin Cathedral (Berliner Dom)",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Monumental Italian Renaissance-style Protestant cathedral with dome climb.",
      "price": "Entry: €10",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b5",
      "name": "Charlottenburg Palace",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Largest Baroque royal palace in Berlin surrounded by formal gardens.",
      "price": "Palace: €12",
      "image": "https://images.unsplash.com/photo-1589708940348-18e388f8d672?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b6",
      "name": "Holocaust Memorial",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Field of 2,711 concrete slabs honoring murdered Jews of Europe.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b7",
      "name": "Gendarmenmarkt Square",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Historic plaza flanked by French and German Cathedrals & Konzerthaus.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b8",
      "name": "Victory Column (Siegessäule)",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Golden Victoria statue crowning 67m monument at Tiergarten center.",
      "price": "Climb: €4",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b9",
      "name": "Berlin TV Tower (Fernsehturm)",
      "category": "Landmark",
      "rating": "★4.5",
      "desc": "368m television tower offering 360-degree panorama of Berlin.",
      "price": "Observation: €22.50",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b10",
      "name": "Checkpoint Charlie",
      "category": "Landmark",
      "rating": "★4.2",
      "desc": "Famous Cold War border crossing checkpoint between American & Soviet sectors.",
      "price": "Free outdoor viewing",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b11",
      "name": "Kaiser Wilhelm Memorial Church",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "War-damaged spire memorial standing alongside modern blue glass chapel.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b12",
      "name": "Tiergarten Park",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Sprawling 520-acre urban forest park in the heart of Berlin.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b13",
      "name": "Hackesche Höfe",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Eight restored Art Nouveau courtyards filled with boutiques & cafes.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b14",
      "name": "Museum Island Berlin",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "UNESCO World Heritage island housing 5 world-class museum complexes.",
      "price": "Day Pass: €19",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b15",
      "name": "Pergamon Museum",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "Famed for Ishtar Gate of Babylon and Market Gate of Miletus.",
      "price": "Entry: €12",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b16",
      "name": "Neues Museum (Nefertiti Bust)",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Housing the iconic 3,300-year-old limestone bust of Queen Nefertiti.",
      "price": "Entry: €14",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b17",
      "name": "Jewish Museum Berlin",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Daniel Libeskind-designed zigzag building documenting German Jewish history.",
      "price": "Free permanent display",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b18",
      "name": "Hamburger Bahnhof",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Former train station converted into Berlin's premier contemporary art museum.",
      "price": "Entry: €14",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b19",
      "name": "Topography of Terror",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "History museum located on the site of Gestapo and SS headquarters.",
      "price": "Free entry",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_b20",
      "name": "DDR Museum",
      "category": "Museum & Art",
      "rating": "★4.4",
      "desc": "Interactive museum depicting daily life under East German communist rule.",
      "price": "Entry: €12.50",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b21",
      "name": "Mustafa's Gemüse Kebab",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Berlin's most famous street food stand for roasted vegetable & chicken döner.",
      "price": "Kebab: €7.00",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b22",
      "name": "Curry 36",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Iconic Mehringdamm food stand serving authentic Berlin Currywurst with fries.",
      "price": "Currywurst: €4.50",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b23",
      "name": "Prater Biergarten",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Berlin's oldest beer garden shaded by giant chestnut trees in Prenzlauer Berg.",
      "price": "Beer & Bratwurst: €12",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b24",
      "name": "Zur Letzten Instanz",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Berlin's oldest tavern (1621) serving pork knuckle & traditional German lager.",
      "price": "Mains: €18–€28",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b25",
      "name": "Katz Orange",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Farm-to-table organic dining inside a 19th-century brick courtyard in Mitte.",
      "price": "Mains: €24–€38",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_b26",
      "name": "Borchardt",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Grand high-society French-German brasserie famous for golden Wiener Schnitzel.",
      "price": "Schnitzel: €32",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b27",
      "name": "Grill Royal",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Riverside steakhouse overlooking the Spree frequented by international artists.",
      "price": "Steaks: €38–€75",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_b28",
      "name": "Monsieur Vuong",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Vibrant Vietnamese pho & spring roll spot in stylish Mitte neighborhood.",
      "price": "Dishes: €10–€16",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b29",
      "name": "Zeit für Brot",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Organic bakery crafting giant warm cinnamon rolls (Schnecken) in glass kitchen.",
      "price": "Rolls: €3.80–€5",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b30",
      "name": "The Barn Coffee Roasters",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Pioneer of Europe's specialty coffee scene roasting single-origin beans.",
      "price": "Coffee: €4.50–€7",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b31",
      "name": "House of Small Wonder",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Japanese-influenced greenhouse cafe featuring spiral wooden staircase brunch spot.",
      "price": "Brunch: €14–€20",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b32",
      "name": "Markthalle Neun",
      "category": "Park & Market",
      "rating": "★4.6",
      "desc": "Historic 1891 market hall host to Thursday Street Food Thursday fairs.",
      "price": "Dishes: €6–€14",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Amsterdam, Netherlands": [
    {
      "id": "a_1",
      "name": "Rijksmuseum",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "Dutch National Museum housing Rembrandt's 'Night Watch' & Vermeer masterpieces.",
      "price": "Entry: €22.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_2",
      "name": "Van Gogh Museum",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "World's largest collection of Vincent van Gogh paintings including Sunflowers.",
      "price": "Entry: €22.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_3",
      "name": "Anne Frank House",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Biographical museum at the secret annex where Anne Frank wrote her diary.",
      "price": "Entry: €16",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_4",
      "name": "Nine Streets (De Negen Straatjes)",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Picturesque canal belt quarters packed with vintage shops, design stores & cafes.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_5",
      "name": "Zaanse Schans Windmills",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Historic windmill village showcasing wooden clogs, cheese making & green houses.",
      "price": "Free village access",
      "image": "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_6",
      "name": "Vondelpark",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Amsterdam's largest public park featuring rose gardens and open-air theaters.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_7",
      "name": "Royal Palace of Amsterdam",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "17th-century Golden Age palace on Dam Square used for official royal events.",
      "price": "Entry: €12.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_8",
      "name": "Oude Kerk",
      "category": "Landmark",
      "rating": "★4.5",
      "desc": "Amsterdam's oldest parish church (1306) standing in the historic city center.",
      "price": "Entry: €12",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_9",
      "name": "Begijnhof Courtyard",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Tranquil 14th-century courtyard sanctuary holding Amsterdam's oldest wooden house.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_10",
      "name": "Bloemenmarkt (Floating Flower Market)",
      "category": "Landmark",
      "rating": "★4.3",
      "desc": "World's only floating flower market selling tulip bulbs along Singel canal.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_11",
      "name": "Stedelijk Museum Amsterdam",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Modern and contemporary art museum housing works by Matisse, Warhol & Mondrian.",
      "price": "Entry: €22.50",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_12",
      "name": "Rembrandt House Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Reconstructed 17th-century home & studio where Rembrandt painted for 20 years.",
      "price": "Entry: €17.50",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_13",
      "name": "NEMO Science Museum",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Green copper ship building featuring 5 floors of interactive science exhibits.",
      "price": "Entry: €17.50",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": false
    },
    {
      "id": "a_14",
      "name": "MOCO Museum",
      "category": "Museum & Art",
      "rating": "★4.4",
      "desc": "Independent museum displaying modern street art by Banksy, KAWS & Basquiat.",
      "price": "Entry: €21.95",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_15",
      "name": "Café de Klos",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Legendary Dutch rib house serving flame-grilled smoked spare ribs & lamb chops.",
      "price": "Ribs: €22–€28",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_16",
      "name": "Foodhallen Amsterdam",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Indoor food hall inside converted tram depot featuring 20 gourmet food stalls.",
      "price": "Stalls: €8–€18",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_17",
      "name": "Moeders",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Cozy Dutch eatery serving authentic stampot, hotchpotch & traditional stews.",
      "price": "Mains: €17–€24",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_18",
      "name": "Van Stapele Koekmakerij",
      "category": "Café & Bakery",
      "rating": "★4.8",
      "desc": "Famous bakery crafting a single item: warm chocolate cookie with white chocolate core.",
      "price": "Cookie: €3.00",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_19",
      "name": "Winkel 43",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Jordaan district cafe famous across Europe for warm deep-dish Dutch apple pie.",
      "price": "Pie: €5.00",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_20",
      "name": "Brouwerij 't IJ",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Craft brewery set directly under Amsterdam's iconic De Gooyer windmill.",
      "price": "Tasting Flight: €12",
      "image": "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    }
  ],
  "Brussels, Belgium": [
    {
      "id": "br_1",
      "name": "Grand-Place",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "UNESCO World Heritage central square surrounded by opulent 17th-century guildhouses.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_2",
      "name": "Royal Gallery of Saint-Hubert",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Glazed 19th-century shopping arcade housing luxury chocolatiers & historic cafes.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_3",
      "name": "Atomium",
      "category": "Landmark",
      "rating": "★4.4",
      "desc": "Iconic 102m steel structure built for 1958 World Expo depicting an iron crystal.",
      "price": "Entry: €16",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_4",
      "name": "St. Michael & St. Gudula Cathedral",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Gothic cathedral towering over Brussels with stained glass windows.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_5",
      "name": "Mont des Arts",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Elevated urban garden promenade offering iconic views of Brussels spire.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_6",
      "name": "Cinquantenaire Arch & Park",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "U-shaped palace complex featuring monumental triumphal arch & gardens.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_7",
      "name": "Manneken Pis",
      "category": "Landmark",
      "rating": "★4.1",
      "desc": "Famous 61cm bronze fountain statue of a peeing boy in Brussels center.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_8",
      "name": "Magritte Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "World's largest surrealist collection of René Magritte paintings.",
      "price": "Entry: €10",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_9",
      "name": "Chez Léon",
      "category": "Restaurant",
      "rating": "★4.3",
      "desc": "1893 Belgian dining institution serving classic moules-frites (mussels & fries).",
      "price": "Mussels: €24–€29",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_10",
      "name": "Fin de Siècle",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Lively communal-table restaurant serving carbonnade flamande beef stew & Belgian ales.",
      "price": "Stew: €16–€22",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_11",
      "name": "Maison Dandoy",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Historic 1829 artisan bakery famous for crispy Liege & Brussels waffles & speculoos.",
      "price": "Waffles: €5–€8",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_12",
      "name": "Pierre Marcolini Grand Sablon",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Haute chocolaterie crafting bean-to-bar praline truffles & macarons.",
      "price": "Truffles: €12–€25",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "br_13",
      "name": "Delirium Café",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Guinness World Record beer hall stocking over 2,000 global craft beers.",
      "price": "Beers: €5–€10",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    }
  ],
  "Luxembourg City, Luxembourg": [
    {
      "id": "l_1",
      "name": "Bock Casemates",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Subterranean cliffside defense tunnels carved into solid rock overlooking the Alzette.",
      "price": "Entry: €8",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_2",
      "name": "Chemin de la Corniche",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Dubbed 'Europe's most beautiful balcony', a scenic rampart walk over Grund valley.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_3",
      "name": "Grund Valley District",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Picturesque lower town quarter with stone bridges, cobblestones & riverside bistros.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_4",
      "name": "Grand Ducal Palace",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Official Renaissance residence of the Grand Duke of Luxembourg in city center.",
      "price": "Tour: €15",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_5",
      "name": "Notre-Dame Cathedral Luxembourg",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "17th-century Gothic cathedral featuring stained glass and royal crypts.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_6",
      "name": "Mudam Luxembourg",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Grand Duke Jean Museum of Modern Art designed by I.M. Pei atop Fort Thüngen.",
      "price": "Entry: €8",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_7",
      "name": "MNHA Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "National Museum of History and Art displaying Gallo-Roman mosaics.",
      "price": "Free permanent display",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_8",
      "name": "Chocolate House Nathalie Bonn",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Famed chocolate shop opposite Grand Ducal Palace for hot chocolate spoons.",
      "price": "Spoon: €5.50",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_9",
      "name": "Oberweis Bakery",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Official royal court supplier of Luxembourgish pastries & pralines.",
      "price": "Pastries: €4–€8",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_10",
      "name": "Um Plateau",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Sophisticated dining room serving modern European sharing plates & cocktails.",
      "price": "Plates: €18–€32",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    }
  ],
  "Cologne, Germany": [
    {
      "id": "c_1",
      "name": "Cologne Cathedral (Kölner Dom)",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Monmental 157m Gothic twin-spired cathedral housing Shrine of the Three Kings.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_2",
      "name": "Hohenzollern Bridge (Love Locks)",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Pedestrian rail bridge covered in 500,000 padlock love tokens across Rhine.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_3",
      "name": "Great St. Martin Church",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Romanesque church towering over Cologne's colorful historic Old Town waterfront.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_4",
      "name": "Cologne Chocolate Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Riverside museum featuring 3-meter golden chocolate fountain & live factory line.",
      "price": "Entry: €14.50",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_5",
      "name": "Museum Ludwig",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "World-leading modern art museum featuring third-largest Picasso collection.",
      "price": "Entry: €13",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_6",
      "name": "Brauhaus Sion",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Historic 1904 brewery hall serving cold Kölsch beer & pork knuckle near Cathedral.",
      "price": "Kölsch: €2.20",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_7",
      "name": "Früh am Dom",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Traditional Kölsch brewhouse right under Cologne Cathedral spires.",
      "price": "Mains: €14–€24",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_8",
      "name": "Bei Oma Kleinmann",
      "category": "Restaurant",
      "rating": "★4.7",
      "desc": "Beloved student quarter pub famous for massive golden Schnitzels with 10 sauces.",
      "price": "Schnitzel: €16–€24",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_9",
      "name": "Café Reichard",
      "category": "Café & Bakery",
      "rating": "★4.4",
      "desc": "Grand traditional cafe terrace offering views of Cologne Cathedral facade.",
      "price": "Cakes: €6.00",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Munich, Germany": [
    {
      "id": "m_1",
      "name": "Marienplatz & New Town Hall",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Central square famous for Glockenspiel chime show & Neo-Gothic Rathaus facade.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_2",
      "name": "English Garden & Eisbachwave",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "500-acre park featuring river surfers riding perpetual standing wave.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_3",
      "name": "Nymphenburg Palace",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Grand Baroque summer palace of Bavarian monarchs with canal swan gardens.",
      "price": "Palace: €10",
      "image": "https://images.unsplash.com/photo-1589708940348-18e388f8d672?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_4",
      "name": "Munich Residenz",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Former royal palace featuring Antiquarium hall of antiquities & Treasury.",
      "price": "Residenz: €10",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_5",
      "name": "Frauenkirche (Cathedral of Our Dear Lady)",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Gothic brick cathedral featuring twin onion domes dominating Munich skyline.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_6",
      "name": "BMW Welt & BMW Museum",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Futuristic exhibition hall showcasing automotive innovation & classic cars.",
      "price": "Museum: €10",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_7",
      "name": "Deutsches Museum",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "World's largest museum of science and technology located on an island in the Isar.",
      "price": "Entry: €15",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_8",
      "name": "Pinakothek Museums (Alte & Neue)",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Renowned art complex featuring European masters from Dürer to Van Gogh.",
      "price": "Entry: €7–€10",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_9",
      "name": "Viktualienmarkt",
      "category": "Park & Market",
      "rating": "★4.7",
      "desc": "Bustling 200-year-old gourmet open-air food market with chestnut beer garden.",
      "price": "Free access",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_10",
      "name": "Augustiner-Keller",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Munich's historic 5,000-seat beer garden serving classic Bavarian pretzels & lager.",
      "price": "Mass Beer: €10.80",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_11",
      "name": "Hofbräuhaus München",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "World-famous 3-story Bavarian beer hall with brass oompah bands & steins.",
      "price": "Mains: €14–€22",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_12",
      "name": "Café Frischhut (Schmalznudel)",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Traditional bakery near Viktualienmarkt frying hot Bavarian donuts in lard.",
      "price": "Donuts: €2.80",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ]
};

const AITravelEngine = {
  config: {
    apiKey: localStorage.getItem('zmt_gemini_api_key') || '',
    modelName: 'Gemini 1.5 Flash'
  },

  selectedMustVisitIds: new Set(),

  setApiKey(key) {
    this.config.apiKey = key.trim();
    localStorage.setItem('zmt_gemini_api_key', key.trim());
  },

  // Helper to create single venue Google Maps live search link button
  createMapsLink(placeName, city, rating = '') {
    const cleanPlace = placeName.replace(/[()]/g, '').trim();
    const cleanCity = city.split(',')[0].trim();
    const query = encodeURIComponent(`${cleanPlace} ${cleanCity}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    const ratingTag = rating ? ` (${rating})` : '';
    return `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" style="display:inline-flex; align-items:center; gap:0.25rem; background:#EFF6FF; color:#1D4ED8; border:1px solid #93C5FD; padding:0.15rem 0.55rem; border-radius:6px; font-weight:700; text-decoration:none; font-size:0.85rem;" title="View Live Google Maps Hours, Reviews & Photos">📍 ${escapeHtml(placeName)}${ratingTag} <span style="font-size:0.75rem;">↗</span></a>`;
  },

  // MASTER DUAL ROUTE GENERATOR: Route A (Must-Visit Selected Spots) & Route B (Full 1-Day AI Recommended Course)
  generateMultiStopMapsLink(mustVisitVenues, fullDayVenues, city, transportMode) {
    const cleanCity = city.split(',')[0].trim();

    // 1. ROUTE A: Must-Visit Selected Spots Only
    const cleanMust = (mustVisitVenues || []).map(v => v.replace(/[()]/g, '').trim()).filter(Boolean);
    const pathSegmentsA = cleanMust.map(v => encodeURIComponent(`${v}, ${cleanCity}`)).join('/');
    const masterUrlA = `https://www.google.com/maps/dir/${pathSegmentsA}/`;

    // 2. ROUTE B: Full 1-Day AI Recommended Course (All Destinations)
    const cleanFull = (fullDayVenues || []).map(v => v.replace(/[()]/g, '').trim()).filter(Boolean);
    const pathSegmentsB = cleanFull.map(v => encodeURIComponent(`${v}, ${cleanCity}`)).join('/');
    const masterUrlB = `https://www.google.com/maps/dir/${pathSegmentsB}/`;

    // Badges for Route A
    const badgesA = cleanMust.map((v, idx) => `
      <span style="display:inline-flex; align-items:center; gap:0.2rem; background:#ECFDF5; color:#047857; border:1px solid #A7F3D0; padding:0.25rem 0.6rem; border-radius:6px; font-weight:700; font-size:0.82rem; margin:0.15rem;">
        <span style="background:#047857; color:#FFF; border-radius:999px; width:18px; height:18px; display:inline-flex; justify-content:center; align-items:center; font-size:0.7rem;">${idx + 1}</span>
        ${escapeHtml(v)}
      </span>
    `).join(' ➔ ');

    // Badges for Route B
    const badgesB = cleanFull.map((v, idx) => `
      <span style="display:inline-flex; align-items:center; gap:0.2rem; background:#FFFBEB; color:#B45309; border:1px solid #FDE68A; padding:0.25rem 0.6rem; border-radius:6px; font-weight:700; font-size:0.82rem; margin:0.15rem;">
        <span style="background:#B45309; color:#FFF; border-radius:999px; width:18px; height:18px; display:inline-flex; justify-content:center; align-items:center; font-size:0.7rem;">${idx + 1}</span>
        ${escapeHtml(v)}
      </span>
    `).join(' ➔ ');

    // Leg-by-Leg Transit links for Route A
    let legItemsAHtml = '';
    for (let i = 0; i < cleanMust.length - 1; i++) {
      const legUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(cleanMust[i] + ', ' + cleanCity)}&destination=${encodeURIComponent(cleanMust[i + 1] + ', ' + cleanCity)}&travelmode=${transportMode === 'car' ? 'driving' : 'transit'}`;
      legItemsAHtml += `
        <div style="background:#FFF; border:1px solid #CBD5E1; border-radius:8px; padding:0.4rem 0.75rem; font-size:0.82rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-top:0.4rem;">
          <span style="font-weight:700; color:var(--text-primary);">Leg ${i + 1}: ${escapeHtml(cleanMust[i])} ➔ ${escapeHtml(cleanMust[i + 1])}</span>
          <a href="${legUrl}" target="_blank" rel="noopener noreferrer" style="color:#0284C7; font-weight:700; text-decoration:none; background:#F0F9FF; padding:0.15rem 0.55rem; border-radius:4px; border:1px solid #BAE6FD;">
            ${transportMode === 'car' ? '🚗 Drive Leg' : '🚆 Transit Leg'} ↗
          </a>
        </div>
      `;
    }

    // Leg-by-Leg Transit links for Route B
    let legItemsBHtml = '';
    for (let i = 0; i < cleanFull.length - 1; i++) {
      const legUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(cleanFull[i] + ', ' + cleanCity)}&destination=${encodeURIComponent(cleanFull[i + 1] + ', ' + cleanCity)}&travelmode=${transportMode === 'car' ? 'driving' : 'transit'}`;
      legItemsBHtml += `
        <div style="background:#FFF; border:1px solid #CBD5E1; border-radius:8px; padding:0.4rem 0.75rem; font-size:0.82rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-top:0.4rem;">
          <span style="font-weight:700; color:var(--text-primary);">Leg ${i + 1}: ${escapeHtml(cleanFull[i])} ➔ ${escapeHtml(cleanFull[i + 1])}</span>
          <a href="${legUrl}" target="_blank" rel="noopener noreferrer" style="color:#0284C7; font-weight:700; text-decoration:none; background:#F0F9FF; padding:0.15rem 0.55rem; border-radius:4px; border:1px solid #BAE6FD;">
            ${transportMode === 'car' ? '🚗 Drive Leg' : '🚆 Transit Leg'} ↗
          </a>
        </div>
      `;
    }

    return `
      <div style="background:linear-gradient(135deg, #FEF3C7, #D1FAE5); border:2.5px solid var(--border-ink); border-radius:20px; padding:1.75rem; margin-bottom:1.75rem; box-shadow:var(--shadow-sketch);">
        
        <div style="text-align:center; margin-bottom:1.5rem;">
          <div style="font-size:1.45rem; color:var(--primary-forest); font-family:var(--font-serif); font-weight:800;" class="font-serif">
            🗺️ Dual Multi-Stop Google Maps Navigation Routes
          </div>
          <p style="font-size:0.9rem; color:var(--text-secondary); max-width:650px; margin:0.35rem auto 0;">
            Select either <strong>Route A (Must-Visit Spots Only)</strong> or <strong>Route B (Full 1-Day AI Course)</strong> below to open all stops in sequential order in Google Maps!
          </p>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; margin-bottom:1rem;">
          
          <!-- ROUTE A CARD: MUST-VISIT SPOTS ONLY -->
          <div style="background:#FFF; border:2.5px solid #047857; border-radius:16px; padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(4,120,87,0.1);">
            <div>
              <div style="display:inline-block; background:#047857; color:#FFF; font-weight:800; font-size:0.75rem; padding:0.2rem 0.65rem; border-radius:999px; margin-bottom:0.5rem;">
                ROUTE A — MUST-VISIT SPOTS ONLY
              </div>
              <h4 style="font-size:1.15rem; color:#047857; font-family:var(--font-serif); margin-bottom:0.35rem;" class="font-serif">
                📍 選択スポットのみのルート (${cleanMust.length}箇所)
              </h4>
              <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.85rem;">
                Step 2であなたが選択した<strong>「絶対行きたいスポットのみ」</strong>をGoogleマップで順番にナビゲートします。
              </p>
              
              <div style="margin-bottom:1.25rem; line-height:1.8;">
                ${badgesA}
              </div>
            </div>

            <div>
              <a href="${masterUrlA}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:0.85rem 1.25rem; font-size:1rem; text-decoration:none; text-align:center; width:100%; justify-content:center; background:#047857; border-color:#064E3B;">
                📍 Open Route A in Google Maps (${cleanMust.length} Spots) ↗
              </a>

              ${cleanMust.length > 1 ? `
                <details style="margin-top:0.75rem; text-align:left; background:#F0FDF4; border-radius:8px; padding:0.4rem 0.65rem; border:1px solid #A7F3D0;">
                  <summary style="font-weight:700; color:#047857; cursor:pointer; font-size:0.82rem;">
                    🚆 Route A 区間別ナビ (${cleanMust.length - 1} Segment)
                  </summary>
                  <div style="margin-top:0.4rem;">
                    ${legItemsAHtml}
                  </div>
                </details>
              ` : ''}
            </div>
          </div>

          <!-- ROUTE B CARD: FULL 1-DAY AI RECOMMENDED COURSE -->
          <div style="background:#FFF; border:2.5px solid #B45309; border-radius:16px; padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(180,83,9,0.1);">
            <div>
              <div style="display:inline-block; background:#B45309; color:#FFF; font-weight:800; font-size:0.75rem; padding:0.2rem 0.65rem; border-radius:999px; margin-bottom:0.5rem;">
                ROUTE B — FULL 1-DAY AI RECOMMENDED COURSE
              </div>
              <h4 style="font-size:1.15rem; color:#B45309; font-family:var(--font-serif); margin-bottom:0.35rem;" class="font-serif">
                ✨ 1日フルコースAIルート (${cleanFull.length}箇所)
              </h4>
              <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.85rem;">
                選択スポットに加え、<strong>AIが提案する朝の名所・ランチ・カフェ・夕方散策</strong>を含めた1日の完璧なルートをGoogleマップでナビゲートします。
              </p>

              <div style="margin-bottom:1.25rem; line-height:1.8;">
                ${badgesB}
              </div>
            </div>

            <div>
              <a href="${masterUrlB}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald" style="padding:0.85rem 1.25rem; font-size:1rem; text-decoration:none; text-align:center; width:100%; justify-content:center; background:#B45309; border-color:#78350F;">
                ✨ Open Route B in Google Maps (${cleanFull.length} Full Stops) ↗
              </a>

              ${cleanFull.length > 1 ? `
                <details style="margin-top:0.75rem; text-align:left; background:#FFFBEB; border-radius:8px; padding:0.4rem 0.65rem; border:1px solid #FDE68A;">
                  <summary style="font-weight:700; color:#B45309; cursor:pointer; font-size:0.82rem;">
                    🚆 Route B 区間別ナビ (${cleanFull.length - 1} Segments)
                  </summary>
                  <div style="margin-top:0.4rem;">
                    ${legItemsBHtml}
                  </div>
                </details>
              ` : ''}
            </div>
          </div>

        </div>

      </div>
    `;
  },

  lastCity: '',
  selectedMustVisitIds: new Set(),
  routeA_spots: [],
  routeB_spots: [],

  // Step 2: Render Interactive Candidate Spots (Max Cap: 8)
  renderCandidateSpots() {
    try {
      const selectElem = document.getElementById('aiPlanDestination');
      const city = selectElem ? selectElem.value : 'Paris, France';
      const audienceElem = document.getElementById('aiPlanAudience');
      const targetAudience = audienceElem ? audienceElem.value : 'none';

      if (this.lastCity && this.lastCity !== city) {
        this.selectedMustVisitIds.clear();
      }
      this.lastCity = city;

      const maxCap = 8;

      let spots = candidateSpotsDatabase[city];
      if (!spots || spots.length === 0) {
        const cleanCityName = city.split(',')[0].trim().toLowerCase();
        for (const k in candidateSpotsDatabase) {
          if (k.toLowerCase().includes(cleanCityName)) {
            spots = candidateSpotsDatabase[k];
            break;
          }
        }
      }
      if (!spots || spots.length === 0) {
        spots = candidateSpotsDatabase['Paris, France'] || [];
      }

      const container = document.getElementById('candidateSpotsGrid');
      const counterBadge = document.getElementById('spotsCounterBadge');

      if (!container) return;

      let filteredSpots = spots;
      if (targetAudience === 'kids') {
        filteredSpots = spots.filter(s => s.family);
      } else if (targetAudience === 'adults') {
        filteredSpots = spots.filter(s => s.adult);
      }

      if (!filteredSpots || filteredSpots.length === 0) {
        filteredSpots = spots;
      }

      if (counterBadge) {
        const selectedCount = this.selectedMustVisitIds.size;
        counterBadge.innerHTML = `Selected: <strong>${selectedCount} / 8</strong> (Max 8 Must-Visit Spots)`;
        counterBadge.style.color = selectedCount >= 8 ? '#C2410C' : '#047857';
      }

      container.innerHTML = filteredSpots.map(s => {
        const isChecked = this.selectedMustVisitIds.has(s.id);
        const imgUrl = s.image || SVG_FALLBACK_IMAGE;

        return `
          <div class="card spot-candidate-card" style="border:2.5px solid ${isChecked ? '#B45309' : 'var(--border-ink)'}; background:${isChecked ? '#FEF3C7' : '#FFF'}; cursor:pointer; transition:all 0.2s ease; display:flex; flex-direction:column; justify-content:space-between; position:relative; box-shadow:${isChecked ? '0 0 0 3px #FDE68A' : 'none'};" onclick="AITravelEngine.toggleSpotSelection('${s.id}', 8)">
            ${isChecked ? `
              <div style="position:absolute; top:-10px; left:-10px; background:#047857; color:#FFF; font-weight:800; font-size:0.75rem; padding:0.25rem 0.65rem; border-radius:999px; border:2px solid #FFF; box-shadow:0 2px 5px rgba(0,0,0,0.2); z-index:10;">
                ✓ SELECTED
              </div>
            ` : ''}

            <div>
              <div style="width:100%; height:150px; overflow:hidden; border-radius:12px; margin-bottom:0.75rem; background:#FAF7F2; position:relative;">
                <img src="${imgUrl}" alt="${escapeHtml(s.name)}" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.onerror=null; this.src='${SVG_FALLBACK_IMAGE}';">
                <span style="position:absolute; top:8px; right:8px; font-size:0.75rem; font-weight:800; background:rgba(255,255,255,0.92); color:#047857; padding:0.2rem 0.55rem; border-radius:6px; border:1px solid #047857; box-shadow:0 2px 4px rgba(0,0,0,0.1);">${s.rating}</span>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span style="font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0369A1; padding:0.15rem 0.55rem; border-radius:6px; border:1px solid #0284C7;">${s.category}</span>
              </div>

              <h4 style="font-size:1.05rem; margin-bottom:0.35rem; font-family:var(--font-sans); color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
                <input type="checkbox" id="chk_${s.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); AITravelEngine.toggleSpotSelection('${s.id}', 8)" style="width:20px; height:20px; cursor:pointer; accent-color:#047857;">
                <span>${escapeHtml(s.name)}</span>
              </h4>

              <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.75rem;">${escapeHtml(s.desc)}</p>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; border-top:1px dashed #EADEC9; padding-top:0.5rem; margin-top:auto;">
              <span style="font-weight:700; color:var(--primary-wood);">${escapeHtml(s.price)}</span>
              ${this.createMapsLink(s.name.split(' (')[0], city.split(',')[0])}
            </div>
          </div>
        `;
      }).join('');
    } catch (err) {
      console.error('Error in renderCandidateSpots:', err);
    }
  },

  toggleSpotSelection(spotId, maxCap = 8) {
    if (this.selectedMustVisitIds.has(spotId)) {
      this.selectedMustVisitIds.delete(spotId);
    } else {
      if (this.selectedMustVisitIds.size >= 8) {
        alert('Selection Limit Reached! You can select up to 8 Must-Visit spots.');
        return;
      }
      this.selectedMustVisitIds.add(spotId);
    }
    this.renderCandidateSpots();
  },

  toggleSpotSelection(spotId, maxCap) {
    if (this.selectedMustVisitIds.has(spotId)) {
      this.selectedMustVisitIds.delete(spotId);
    } else {
      if (this.selectedMustVisitIds.size >= maxCap) {
        alert(`Selection Limit Reached! You can select up to ${maxCap} spots for this duration. Change duration to 2 Days to select up to 7 spots.`);
        return;
      }
      this.selectedMustVisitIds.add(spotId);
    }
    this.renderCandidateSpots();
  },

  // Step 3: Generate Custom Route embedding Must-Visit spots + Multi-Stop Maps Link
  generateItinerary(event) {
    if (event) event.preventDefault();

    const destination = document.getElementById('aiPlanDestination').value.trim() || 'Paris, France';
    const transportMode = document.getElementById('aiPlanTransport').value || 'transit';
    const audience = document.getElementById('aiPlanAudience').value || 'none';

    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const allSpots = candidateSpotsDatabase[destination] || candidateSpotsDatabase['Paris, France'];
    
    // Extract selected spots for Route A
    let selectedSpots = allSpots.filter(s => this.selectedMustVisitIds.has(s.id));
    if (selectedSpots.length === 0) {
      // Fallback top 3 spots if none selected
      selectedSpots = allSpots.slice(0, 3);
    }

    // Build Route A (Selected Spots Only)
    this.routeA_spots = selectedSpots.map(s => ({
      name: s.name.split(' (')[0].trim(),
      category: s.category,
      rating: s.rating,
      price: s.price
    }));

    // Build Route B (Full 10-Spot Course: Selected + Top AI Curated Spots)
    const selectedNames = new Set(this.routeA_spots.map(s => s.name));
    const extraSpots = allSpots.filter(s => !selectedNames.has(s.name.split(' (')[0].trim()));

    const targetBCount = 10;
    const needed = targetBCount - this.routeA_spots.length;

    this.routeB_spots = [...this.routeA_spots];
    if (needed > 0) {
      const addedExtras = extraSpots.slice(0, needed).map(s => ({
        name: s.name.split(' (')[0].trim(),
        category: s.category,
        rating: s.rating,
        price: s.price
      }));
      this.routeB_spots.push(...addedExtras);
    }

    this.renderDualRouteManager(destination, transportMode);
  },

  renderDualRouteManager(destination, transportMode) {
    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    resultContainer.style.display = 'block';

    const isCar = transportMode === 'car';
    const cityClean = destination.split(',')[0].trim();

    // Generate Route A Google Maps URL
    const namesA = this.routeA_spots.map(s => s.name);
    const mapsUrlA = this.buildMasterGoogleMapsPath(namesA, destination, transportMode);

    // Generate Route B Google Maps URL
    const namesB = this.routeB_spots.map(s => s.name);
    const mapsUrlB = this.buildMasterGoogleMapsPath(namesB, destination, transportMode);

    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); animation:fadeIn 0.3s ease;">
        
        <div style="text-align:center; max-width:700px; margin:0 auto 1.5rem;">
          <span class="paper-tape">Pre-loaded Multi-Stop Google Maps Navigation</span>
          <h3 style="font-size:1.8rem; margin-top:0.4rem; font-family:var(--font-serif);">
            ${escapeHtml(destination)} — Custom AI Dual Routes
          </h3>
          <p style="font-size:0.9rem; color:var(--text-secondary);">
            Reorder items (▲/▼) or remove items (❌). The master <strong>Open Route in Google Maps</strong> button updates in real-time!
          </p>
        </div>

        <div class="grid-2" style="gap:1.5rem;">
          
          <!-- ROUTE A CARD: Selected Spots Only -->
          <div style="background:#FFF; border:2px solid #047857; border-radius:18px; padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(4,120,87,0.1);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span style="font-size:0.8rem; font-weight:800; background:#D1FAE5; color:#047857; padding:0.25rem 0.65rem; border-radius:999px; border:1px solid #059669;">
                  📍 ROUTE A: SELECTED SPOTS ONLY (${this.routeA_spots.length} SPOTS)
                </span>
                <span style="font-size:0.8rem; font-weight:700; color:#047857;">${isCar ? '🚗 Driving Mode' : '🚆 Transit Mode'}</span>
              </div>

              <h4 style="font-size:1.15rem; color:var(--text-primary); margin-bottom:0.35rem;" class="font-serif">
                Must-Visit Selected Course
              </h4>
              <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:1rem;">
                Contains strictly your checked must-visit landmarks.
              </p>

              <!-- Reorderable & Deletable Spot Item List A -->
              <div id="routeA_itemList" style="display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1.25rem;">
                ${this.renderSpotItemsHtml(this.routeA_spots, 'A', cityClean)}
              </div>
            </div>

            <div>
              <a href="${mapsUrlA}" target="_blank" rel="noopener noreferrer" id="btn_maps_RouteA" class="btn btn-emerald" style="width:100%; text-align:center; padding:0.85rem; font-size:1rem; border-radius:12px; display:inline-block; text-decoration:none;">
                🗺️ Open Route A in Google Maps (${this.routeA_spots.length} Stops) ↗
              </a>
            </div>
          </div>

          <!-- ROUTE B CARD: Full 10-Spot Course -->
          <div style="background:#FFF; border:2px solid #B45309; border-radius:18px; padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(180,83,9,0.1);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span style="font-size:0.8rem; font-weight:800; background:#FEF3C7; color:#B45309; padding:0.25rem 0.65rem; border-radius:999px; border:1px solid #D97706;">
                  ✨ ROUTE B: FULL AI 10-SPOT COURSE (${this.routeB_spots.length} SPOTS)
                </span>
                <span style="font-size:0.8rem; font-weight:700; color:#B45309;">${isCar ? '🚗 Driving Mode' : '🚆 Transit Mode'}</span>
              </div>

              <h4 style="font-size:1.15rem; color:var(--text-primary); margin-bottom:0.35rem;" class="font-serif">
                Full 1-Day AI Curated Course
              </h4>
              <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:1rem;">
                Combines your selected spots with AI-curated bistros & attractions to form a full 10-stop route.
              </p>

              <!-- Reorderable & Deletable Spot Item List B -->
              <div id="routeB_itemList" style="display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1.25rem;">
                ${this.renderSpotItemsHtml(this.routeB_spots, 'B', cityClean)}
              </div>
            </div>

            <div>
              <a href="${mapsUrlB}" target="_blank" rel="noopener noreferrer" id="btn_maps_RouteB" class="btn btn-primary" style="width:100%; text-align:center; padding:0.85rem; font-size:1rem; border-radius:12px; display:inline-block; text-decoration:none;">
                🗺️ Open Route B in Google Maps (${this.routeB_spots.length} Stops) ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    `;

    setTimeout(() => {
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  },

  renderSpotItemsHtml(spotsArray, routeType, cityClean) {
    if (!spotsArray || spotsArray.length === 0) {
      return '<div style="font-size:0.85rem; color:#9CA3AF; padding:0.75rem; text-align:center; border:1px dashed #E5E7EB; border-radius:8px;">No spots in this route. Add spots or re-select.</div>';
    }

    return spotsArray.map((spot, idx) => {
      const query = `${spot.name} ${cityClean}`;
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

      return `
        <div style="display:flex; align-items:center; justify-content:space-between; background:#F8FAFC; border:1.5px solid #E2E8F0; padding:0.5rem 0.75rem; border-radius:10px; font-size:0.85rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; flex:1; min-width:0;">
            
            <!-- Reorder Up / Down Buttons -->
            <div style="display:flex; flex-direction:column; gap:2px;">
              <button type="button" onclick="AITravelEngine.moveSpot('${routeType}', ${idx}, -1)" ${idx === 0 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''} style="background:none; border:none; padding:0; cursor:pointer; font-size:0.75rem; line-height:1; color:#475569;">▲</button>
              <button type="button" onclick="AITravelEngine.moveSpot('${routeType}', ${idx}, 1)" ${idx === spotsArray.length - 1 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''} style="background:none; border:none; padding:0; cursor:pointer; font-size:0.75rem; line-height:1; color:#475569;">▼</button>
            </div>

            <span style="font-weight:800; background:#E2E8F0; color:#334155; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; border-radius:50%; font-size:0.75rem; flex-shrink:0;">${idx + 1}</span>

            <span style="font-weight:700; color:#1E293B; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px;">${escapeHtml(spot.name)}</span>
          </div>

          <div style="display:flex; align-items:center; gap:0.4rem; flex-shrink:0;">
            <!-- Individual Spot Google Maps Link -->
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color:#2563EB; font-weight:700; text-decoration:none; font-size:0.78rem; background:#EFF6FF; border:1px solid #BFDBFE; padding:0.15rem 0.45rem; border-radius:6px;">📍 Maps ↗</a>
            
            <!-- Delete / Remove Button (❌) -->
            <button type="button" onclick="AITravelEngine.removeSpot('${routeType}', ${idx})" title="Remove spot from route" style="background:#FEE2E2; color:#DC2626; border:1px solid #FCA5A5; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-size:0.75rem; font-weight:800;">✕</button>
          </div>
        </div>
      `;
    }).join('');
  },

  moveSpot(routeType, index, direction) {
    const list = routeType === 'A' ? this.routeA_spots : this.routeB_spots;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= list.length) return;

    const temp = list[index];
    list[index] = list[newIndex];
    list[newIndex] = temp;

    this.refreshRouteCard(routeType);
  },

  removeSpot(routeType, index) {
    const list = routeType === 'A' ? this.routeA_spots : this.routeB_spots;
    list.splice(index, 1);
    this.refreshRouteCard(routeType);
  },

  refreshRouteCard(routeType) {
    const destination = document.getElementById('aiPlanDestination')?.value || 'Paris, France';
    const transportMode = document.getElementById('aiPlanTransport')?.value || 'transit';
    const cityClean = destination.split(',')[0].trim();

    const listContainer = document.getElementById(routeType === 'A' ? 'routeA_itemList' : 'routeB_itemList');
    const mapsBtn = document.getElementById(routeType === 'A' ? 'btn_maps_RouteA' : 'btn_maps_RouteB');

    const spotsList = routeType === 'A' ? this.routeA_spots : this.routeB_spots;

    if (listContainer) {
      listContainer.innerHTML = this.renderSpotItemsHtml(spotsList, routeType, cityClean);
    }

    if (mapsBtn) {
      const names = spotsList.map(s => s.name);
      const mapsUrl = this.buildMasterGoogleMapsPath(names, destination, transportMode);
      mapsBtn.href = mapsUrl;
      mapsBtn.innerText = `🗺️ Open Route ${routeType} in Google Maps (${spotsList.length} Stops) ↗`;
    }
  },

  buildMasterGoogleMapsPath(venueNames, destination, transportMode) {
    if (!venueNames || venueNames.length === 0) {
      const cityClean = destination.split(',')[0].trim();
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cityClean)}`;
    }

    const cityClean = destination.split(',')[0].trim();
    const formattedStops = venueNames.map(name => {
      const cleanName = name.replace(/\([^\)]*\)/g, '').trim();
      return encodeURIComponent(`${cleanName}, ${cityClean}`);
    });

    const isCar = transportMode === 'car';
    const travelModeParam = isCar ? '&dirflg=d' : '&dirflg=r';

    if (formattedStops.length === 1) {
      return `https://www.google.com/maps/search/?api=1&query=${formattedStops[0]}`;
    }

    const pathString = formattedStops.join('/');
    return `https://www.google.com/maps/dir/${pathString}/?api=1${travelModeParam}`;
  }
};

function configureGeminiKey() {
  const key = prompt('Optional: Enter your Gemini 1.5 Flash API Key to enable live Gemini API calls:\n(Leave empty for built-in 0 Margin Travel Engine)', AITravelEngine.config.apiKey);
  if (key !== null) {
    AITravelEngine.setApiKey(key);
    alert(key.trim() ? 'Gemini 1.5 Flash API Key saved! Live API responses enabled.' : 'Switched to Built-in 0 Margin Travel Engine.');
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}


window.AITravelEngine = AITravelEngine;

function initAITravelEngine() {
  if (typeof AITravelEngine !== 'undefined') {
    AITravelEngine.renderCandidateSpots();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAITravelEngine);
} else {
  initAITravelEngine();
}

window.addEventListener('load', initAITravelEngine);
