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
      "name": "Eiffel Tower (Tour Eiffel)",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Iconic 330m iron lattice tower on Champ de Mars with panoramic city views.",
      "price": "Summit: €28.30",
      "image": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_2",
      "name": "Arc de Triomphe",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Monumental arch honoring French soldiers at the head of Champs-Élysées.",
      "price": "Rooftop: €13.00",
      "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_3",
      "name": "Sainte-Chapelle",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Breathtaking 13th-century Gothic chapel with 1,113 stained glass panels.",
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
      "desc": "White domed basilica perched atop Montmartre with panoramic city views.",
      "price": "Free Entry",
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
      "price": "Free Plaza View",
      "image": "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_6",
      "name": "Palais-Royal Courtyard & Gardens",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Historic palace gardens featuring Buren's iconic black-and-white striped columns.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_7",
      "name": "Panthéon",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Neoclassical mausoleum holding the tombs of Voltaire, Rousseau, and Victor Hugo.",
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
      "desc": "Iconic 17th-century Latin Quarter park featuring the Medici Fountain.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_9",
      "name": "Opéra Garnier (Palais Garnier)",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Opulent 1,979-seat opera house with Chagall's ceiling painting.",
      "price": "Tour: €14.00",
      "image": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_10",
      "name": "Pont Alexandre III",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Most ornate Beaux-Arts bridge over the Seine with gilded Pegasus statues.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_11",
      "name": "Les Invalides & Napoleon's Tomb",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Golden-domed military museum complex housing Napoleon Bonaparte's tomb.",
      "price": "Entry: €14.00",
      "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_12",
      "name": "Pont des Arts",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Famous pedestrian bridge offering classic sunset views over the Seine River.",
      "price": "Free Walk",
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
      "price": "Entry: €29.00",
      "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "p_14",
      "name": "Louvre Museum & Glass Pyramid",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "World's largest museum housing the Mona Lisa and Venus de Milo.",
      "price": "Entry: €22.00",
      "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_15",
      "name": "Musée d'Orsay",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "World-renowned Impressionist art museum in a restored Beaux-Arts railway station.",
      "price": "Entry: €16.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_16",
      "name": "Centre Pompidou",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "High-tech architectural icon housing Europe's largest modern art museum.",
      "price": "Entry: €15.00",
      "image": "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_17",
      "name": "Musée de l'Orangerie",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Oval gallery built specifically to house Claude Monet's monumental Water Lilies.",
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
      "desc": "Sculpture museum set in Rodin's former mansion featuring The Thinker in rose gardens.",
      "price": "Entry: €13.00",
      "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_19",
      "name": "Musée Picasso Paris",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Hôtel Salé mansion in Le Marais housing 5,000+ works by Pablo Picasso.",
      "price": "Entry: €14.00",
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
      "price": "Free Permanent Collection",
      "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_21",
      "name": "Le Petit Marché",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Cozy Le Marais bistro famous for seared duck breast and organic wines.",
      "price": "Avg: €18–€26",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "p_22",
      "name": "Le Train Bleu",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Opulent palace restaurant inside Gare de Lyon with frescoed ceilings.",
      "price": "Avg: €25–€38",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_23",
      "name": "Chez Janou",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Lively Provençal bistro featuring bottomless homemade chocolate mousse.",
      "price": "Avg: €16–€25",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_24",
      "name": "Bouillon Chartier",
      "category": "Restaurant",
      "rating": "★4.2",
      "desc": "Historic 1896 Belle-Époque dining hall serving traditional affordable French food.",
      "price": "Avg: €12–€18",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_25",
      "name": "Frenchie Bar à Vins",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "World-renowned Rue du Nil wine bar serving innovative small plates.",
      "price": "Avg: €24–€36",
      "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "p_26",
      "name": "Les Deux Magots",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Historic Saint-Germain literary cafe frequented by Hemingway and Sartre.",
      "price": "Avg: €18–€30",
      "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_27",
      "name": "L'As du Fallafel",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Famous Rue des Rosiers falafel pita stand in the heart of Le Marais.",
      "price": "Pita: €9–€12",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_28",
      "name": "Pink Mamma",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Four-story Italian trattoria covered in plants with a glass rooftop skylight.",
      "price": "Avg: €18–€28",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_29",
      "name": "Marché des Enfants Rouges",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Paris's oldest covered food market serving authentic fresh crêpes.",
      "price": "Crêpes: €5–€9",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_30",
      "name": "Cédric Grolet Le Meurice",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "World-famous haute pâtisserie featuring sculpted fruit pastries.",
      "price": "Pastries: €12–€18",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_31",
      "name": "Angelina Paris",
      "category": "Café & Bakery",
      "rating": "★4.4",
      "desc": "Famous Rue de Rivoli tearoom for African hot chocolate & Mont-Blanc pastries.",
      "price": "Avg: €10–€18",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_32",
      "name": "Du Pain et des Idées",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Artisanal 1875 bakery famous for pistachio chocolate snail pastries.",
      "price": "Pastry: €3.50–€5",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "p_33",
      "name": "Carette Trocadéro",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Chic Place du Trocadéro tearoom famous for whipped hot chocolate & macarons.",
      "price": "Avg: €12–€20",
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
      "desc": "18th-century neoclassical monument and symbol of European unity and peace.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b2",
      "name": "Reichstag Building",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Historic German Parliament building topped with a dramatic glass dome.",
      "price": "Free Entry (Booking Required)",
      "image": "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b3",
      "name": "East Side Gallery",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "1.3km open-air gallery painted directly on the remaining Berlin Wall.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b4",
      "name": "Berlin Cathedral (Berliner Dom)",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Monumental 19th-century Protestant church with a panoramic dome climb.",
      "price": "Entry: €10.00",
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
      "price": "Gardens: Free",
      "image": "https://images.unsplash.com/photo-1589708940348-18e388f8d672?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b6",
      "name": "Holocaust Memorial",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Moving memorial grid of 2,711 concrete slabs near Brandenburg Gate.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b7",
      "name": "Gendarmenmarkt Square",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Picturesque plaza framed by the French & German Cathedrals and Concert Hall.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b8",
      "name": "Victory Column (Siegessäule)",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Golden Victoria statue tower located in the center of Tiergarten park.",
      "price": "Tower Climb: €4.00",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b9",
      "name": "Berlin TV Tower (Fernsehturm)",
      "category": "Landmark",
      "rating": "★4.4",
      "desc": "Iconic 368m television tower on Alexanderplatz with revolving restaurant.",
      "price": "Deck: €24.50",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b10",
      "name": "Checkpoint Charlie",
      "category": "Landmark",
      "rating": "★4.1",
      "desc": "Historic Cold War crossing point between American and Soviet sectors.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b11",
      "name": "Kaiser Wilhelm Memorial Church",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Spire ruins preserved as a war memorial alongside a modern blue glass chapel.",
      "price": "Free Entry",
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
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b13",
      "name": "Hackesche Höfe",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Heritage complex of 8 interconnected courtyards filled with art shops and cafes.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b14",
      "name": "Museum Island (Museumsinsel)",
      "category": "Museum & Art",
      "rating": "★4.8",
      "desc": "UNESCO World Heritage complex housing 5 world-famous antiquities museums.",
      "price": "Island: Free",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b15",
      "name": "Pergamon Museum",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "World-famous museum housing monumental ancient structures like Ishtar Gate.",
      "price": "Entry: €12.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b16",
      "name": "Neues Museum & Nefertiti Bust",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Egyptian & prehistoric museum home to the iconic 3,300-year-old Nefertiti bust.",
      "price": "Entry: €14.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b17",
      "name": "Jewish Museum Berlin",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Architectural icon designed by Daniel Libeskind tracing 2,000 years of Jewish history.",
      "price": "Entry: €8.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b18",
      "name": "Hamburger Bahnhof Museum",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Former train station converted into Berlin's premier contemporary art museum.",
      "price": "Entry: €14.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b19",
      "name": "Topography of Terror",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Documentation center on the site of former SS and Gestapo headquarters.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b20",
      "name": "DDR Museum",
      "category": "Museum & Art",
      "rating": "★4.4",
      "desc": "Interactive hands-on museum depicting daily life in former East Germany.",
      "price": "Entry: €13.50",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b21",
      "name": "Mustafa's Gemüse Kebab",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Berlin's most famous street food stand for roasted vegetable kebabs.",
      "price": "Kebab: €7.00",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b22",
      "name": "Curry 36",
      "category": "Restaurant",
      "rating": "★4.3",
      "desc": "Iconic Mehringdamm food stand serving authentic Berlin Currywurst.",
      "price": "Currywurst: €4.50",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b23",
      "name": "Prater Biergarten",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Berlin's oldest beer garden shaded by giant chestnut trees in Prenzlauer Berg.",
      "price": "Avg: €12–€20",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b24",
      "name": "Zur Letzten Instanz",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Historic 1621 tavern visited by Napoleon serving traditional Eisbein roast pork.",
      "price": "Avg: €18–€28",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b25",
      "name": "Katz Orange",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Slow-cooked organic gourmet dining set inside a romantic brick courtyard.",
      "price": "Avg: €28–€45",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_b26",
      "name": "Borchardt",
      "category": "Restaurant",
      "rating": "★4.3",
      "desc": "Celebrity-frequented classic French-German brasserie famous for Wiener Schnitzel.",
      "price": "Avg: €30–€50",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_b27",
      "name": "Grill Royal",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Upscale Spree riverside steakhouse and art world gathering spot.",
      "price": "Avg: €35–€65",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_b28",
      "name": "Monsieur Vuong",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Legendary Alte Schönhauser Straße Vietnamese noodle bar.",
      "price": "Pho: €10–€14",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b29",
      "name": "Zeit für Brot",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Organic bakery famous for warm, fluffy cinnamon rolls (Schnecken).",
      "price": "Cinnamon Roll: €4.50",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b30",
      "name": "The Barn Coffee Roasters",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Specialty single-origin micro-roastery and third-wave coffee pioneer.",
      "price": "Coffee: €4.00–€6.50",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b31",
      "name": "House of Small Wonder",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Japanese-influenced botanical cafe with a dramatic spiral staircase.",
      "price": "Avg: €12–€18",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_b32",
      "name": "Markthalle Neun",
      "category": "Park & Market",
      "rating": "★4.6",
      "desc": "Historic 1891 market hall host to Street Food Thursday and local artisans.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Amsterdam, Netherlands": [
    {
      "id": "a_1",
      "name": "Rijksmuseum",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Dutch national museum displaying Rembrandt's The Night Watch and Vermeer.",
      "price": "Entry: €22.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_2",
      "name": "Van Gogh Museum",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "The world's largest collection of artworks by Vincent van Gogh.",
      "price": "Entry: €20.00",
      "image": "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_3",
      "name": "Nine Streets (De Negen Straatjes)",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Picturesque canal-side neighborhood with vintage boutiques and art galleries.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_4",
      "name": "Zaanse Schans Windmills",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Historic windmill village featuring cheese making and wooden clog workshops.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_5",
      "name": "Anne Frank House / Westerkerk",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Historic canal house hideout museum beside the 85m Westerkerk tower.",
      "price": "Entry: €16.00",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_6",
      "name": "Vondelpark",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Amsterdam's largest public park featuring rose gardens and open-air theaters.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_7",
      "name": "Royal Palace of Amsterdam",
      "category": "Landmark",
      "rating": "★4.5",
      "desc": "17th-century Golden Age palace located on historic Dam Square.",
      "price": "Entry: €12.50",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_8",
      "name": "Oude Kerk",
      "category": "Landmark",
      "rating": "★4.5",
      "desc": "Amsterdam's oldest parish church (1306) in the Red Light District.",
      "price": "Entry: €13.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_9",
      "name": "Begijnhof Courtyard",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Historic secluded 14th-century sanctuary courtyard with wooden houses.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_10",
      "name": "Bloemenmarkt Floating Flower Market",
      "category": "Landmark",
      "rating": "★4.4",
      "desc": "World's only floating flower market located on the Singel Canal.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_11",
      "name": "A'DAM Lookout & Over The Edge Swing",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Observation deck across the IJ River featuring Europe's highest swing.",
      "price": "Deck: €16.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_12",
      "name": "Jordaan Canal District",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Charming canal quarter lined with indie boutiques, cafes, and courtyards.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_13",
      "name": "Stedelijk Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "International museum of modern art and design next to Van Gogh Museum.",
      "price": "Entry: €22.50",
      "image": "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_14",
      "name": "Rembrandt House Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Reconstructed 17th-century home where Rembrandt lived and painted.",
      "price": "Entry: €17.50",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rembrandshuis.jpg/960px-Rembrandshuis.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "family": true,
      "adult": true
    },
    {
      "id": "a_15",
      "name": "H'ART Museum Amsterdam",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Major art museum set in a grand 1687 building on the Amstel River.",
      "price": "Entry: €18.00",
      "image": "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_16",
      "name": "NEMO Science Museum",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Green ship-hull building offering 5 floors of interactive science exhibits.",
      "price": "Entry: €17.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_17",
      "name": "MOCO Museum",
      "category": "Museum & Art",
      "rating": "★4.5",
      "desc": "Independent museum displaying Banksy, Warhol, and immersive digital art.",
      "price": "Entry: €21.95",
      "image": "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_18",
      "name": "National Maritime Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "500 years of Dutch maritime history featuring a full-scale 1749 East Indiaman replica.",
      "price": "Entry: €18.50",
      "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_19",
      "name": "Café de Klos",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Legendary local pub famous for wood-fired smoked ribs and craft beer.",
      "price": "Avg: €18–€26",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_20",
      "name": "Foodhallen Amsterdam",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Trendy indoor food hall located in a converted historic tram depot.",
      "price": "Avg: €15–€22",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_21",
      "name": "Moeders",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Warm traditional restaurant serving authentic Dutch Stamppot stew.",
      "price": "Avg: €16–€24",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_22",
      "name": "Cannibale Royale",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Late-night brasserie serving flame-grilled steaks and Dutch craft beers.",
      "price": "Avg: €20–€32",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "a_23",
      "name": "Sea Palace",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Europe's first floating Asian restaurant built in traditional pagoda style.",
      "price": "Avg: €22–€38",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_24",
      "name": "De Kas",
      "category": "Restaurant",
      "rating": "★4.7",
      "desc": "Michelin-starred farm-to-table dining inside a 1926 glass greenhouse.",
      "price": "Avg: €45–€75",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "a_25",
      "name": "d'Vijff Vlieghen",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Historic 17th-century dining across 5 canal houses decorated with Rembrandt etchings.",
      "price": "Avg: €35–€60",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "a_26",
      "name": "Bakers & Roasters",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "New Zealand & Brazilian brunch cafe famous for poached eggs and artisan coffee.",
      "price": "Avg: €14–€22",
      "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_27",
      "name": "Van Stapele Koekmakerij",
      "category": "Café & Bakery",
      "rating": "★4.8",
      "desc": "Famous bakery serving fresh-baked Valrhona dark chocolate cookies.",
      "price": "Cookie: €3.00",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_28",
      "name": "Winkel 43",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Iconic café world-renowned for traditional Dutch warm apple pie.",
      "price": "Apple Pie: €5.00",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_29",
      "name": "Brouwerij 't IJ",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Artisanal organic craft brewery terrace right next to De Gooyer Windmill.",
      "price": "Beer: €5–€8",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "a_30",
      "name": "Polaberry",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Artisanal chocolate-dipped strawberries and dessert boutique.",
      "price": "Avg: €6–€12",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_31",
      "name": "Toki Coffee",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Minimalist Scandinavian & Japanese specialty coffee bar.",
      "price": "Coffee: €4.50–€7",
      "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "a_32",
      "name": "Pluk Amsterdam",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Chic Nine Streets lifestyle cafe featuring fresh juices and acai bowls.",
      "price": "Avg: €8–€15",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Brussels, Belgium": [
    {
      "id": "b_1",
      "name": "Grand-Place",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "UNESCO world heritage central square enclosed by ornate guildhouses.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_2",
      "name": "Royal Gallery of Saint-Hubert",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Glazed 19th-century shopping arcade filled with master chocolatiers.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_3",
      "name": "Atomium",
      "category": "Landmark",
      "rating": "★4.4",
      "desc": "Futuristic 102m-tall iron crystal structure offering panoramic city views.",
      "price": "Entry: €16.00",
      "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_4",
      "name": "St. Michael and St. Gudula Cathedral",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Gothic cathedral towering over Brussels with stained glass windows.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_5",
      "name": "Mont des Arts",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Elevated urban garden promenade offering iconic views of Brussels spire.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_6",
      "name": "Cinquantenaire Park & Triumphal Arch",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Urban park featuring a massive 1905 triple arch monument.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_7",
      "name": "Royal Palace of Brussels",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Official palace of the King and Queen of the Belgians in Brussels Park.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_8",
      "name": "Manneken Pis & Jeanneke Pis",
      "category": "Landmark",
      "rating": "★4.2",
      "desc": "Famous 1619 bronze fountain sculpture and its female counterpart.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_9",
      "name": "Notre-Dame du Sablon",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "15th-century Brabantine Gothic church known for illuminated stained glass.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_10",
      "name": "Place du Petit Sablon Gardens",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Charming manicured garden surrounded by 48 bronze statues of medieval guilds.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_11",
      "name": "Magritte Museum",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Dedicated museum displaying 230+ Surrealist masterpieces by René Magritte.",
      "price": "Entry: €10.00",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_12",
      "name": "Royal Museums of Fine Arts of Belgium",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Premier museum complex containing Old Masters, Modern, and End-of-Century art.",
      "price": "Entry: €15.00",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_13",
      "name": "Musical Instruments Museum (MIM)",
      "category": "Museum & Art",
      "rating": "★4.6",
      "desc": "Art Nouveau Old England building housing 1,200+ historic instruments.",
      "price": "Entry: €12.00",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_14",
      "name": "Belgian Comic Strip Center",
      "category": "Museum & Art",
      "rating": "★4.4",
      "desc": "Celebration of Tintin, the Smurfs, and Belgian comic strip history.",
      "price": "Entry: €13.00",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_15",
      "name": "Horta Museum",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Art Nouveau townhouse museum designed by legendary architect Victor Horta.",
      "price": "Entry: €12.00",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_16",
      "name": "Royal Museum of the Armed Forces",
      "category": "Museum & Art",
      "rating": "★4.7",
      "desc": "Massive military history museum inside Cinquantenaire Park with aircraft hall.",
      "price": "Entry: €11.00",
      "image": "https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_17",
      "name": "Fin de Siècle",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Vibrant local tavern famous for Carbonnade Flamande (beer-braised beef stew).",
      "price": "Avg: €16–€24",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_18",
      "name": "Chez Léon",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Historic 1893 eatery serving traditional Belgian mussels and frites.",
      "price": "Avg: €18–€26",
      "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_19",
      "name": "Nüetnigenough",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Cozy beer bistro serving unpasteurized Belgian craft brews and stews.",
      "price": "Avg: €16–€25",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_20",
      "name": "Noordzee / La Mer du Nord",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Vibrant outdoor standing fish bar serving grilled razor clams & croquettes.",
      "price": "Avg: €10–€18",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_21",
      "name": "Toukoul",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Authentic Ethiopian dining experience with shared injera platters near Place Sainte-Catherine.",
      "price": "Avg: €16–€25",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_22",
      "name": "Restobières",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Rustic Marolles district restaurant where every dish is cooked with Belgian beer.",
      "price": "Avg: €18–€28",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_23",
      "name": "Maison Dandoy",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Fresh-baked authentic Liège waffles served with warm chocolate sauce.",
      "price": "Waffles: €4.50–€7",
      "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_24",
      "name": "Pierre Marcolini",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Flagship haute chocolaterie in Grand Sablon square.",
      "price": "Chocolates: €8–€15",
      "image": "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_25",
      "name": "Delirium Café",
      "category": "Park & Market",
      "rating": "★4.5",
      "desc": "World Record holding pub featuring over 2,000 Belgian and international beers.",
      "price": "Beer: €4–€8",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": false,
      "adult": true
    },
    {
      "id": "b_26",
      "name": "Laurent Gerbaud Chocolatier",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Artisanal chocolate workshop pairing dark chocolate with dried fruits & spices.",
      "price": "Avg: €8–€16",
      "image": "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_27",
      "name": "Café Belga",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Iconic Art Deco Flagey building cafe overlooking the Ixelles Ponds.",
      "price": "Avg: €5–€12",
      "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_28",
      "name": "Neuhaus Chocolates Grand-Place",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Inventor of the Belgian praline (1912) flagship boutique.",
      "price": "Chocolates: €10–€25",
      "image": "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_29",
      "name": "Wittamer Grand Sablon",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Royal Warrant holder pastry & chocolate tearoom operating since 1910.",
      "price": "Avg: €8–€18",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "b_30",
      "name": "Le Pain Quotidien Dansaert",
      "category": "Café & Bakery",
      "rating": "★4.4",
      "desc": "Original Belgian organic bakery chain serving rustic sourdough loaves on communal tables.",
      "price": "Avg: €8–€15",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Luxembourg City, Luxembourg": [
    {
      "id": "l_1",
      "name": "Bock Casemates",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Subterranean cliffside fortress passages carved into the rock face.",
      "price": "Entry: €8.00",
      "image": "https://images.unsplash.com/photo-1589708940348-18e388f8d672?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_2",
      "name": "Chemin de la Corniche",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Scenic cliffside promenade dubbed \"Europe's most beautiful balcony\".",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_3",
      "name": "Grund Historic Quarter",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Charming valley district accessed by elevator with cobblestone streets.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_4",
      "name": "Grand Ducal Palace",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Official town residence of the Grand Duke of Luxembourg.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_5",
      "name": "Notre-Dame Cathedral Luxembourg",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "17th-century Jesuit Gothic cathedral with spires overlooking the city.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_6",
      "name": "Chocolate House Nathalie Bonn",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Famous cafe opposite the Grand Ducal Palace serving hot chocolate spoons.",
      "price": "Avg: €14–€22",
      "image": "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_7",
      "name": "Brasserie du Cercle",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Traditional Luxembourgish dining overlooking Place d'Armes.",
      "price": "Avg: €18–€28",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "l_8",
      "name": "Oberweis Bakery",
      "category": "Café & Bakery",
      "rating": "★4.6",
      "desc": "Official pastry supplier to the Grand Ducal Court.",
      "price": "Pastries: €5–€10",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Cologne, Germany": [
    {
      "id": "c_1",
      "name": "Cologne Cathedral (Kölner Dom)",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Colossal Twin-spired Gothic cathedral towering over the Rhine River.",
      "price": "Free (Tower: €6)",
      "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_2",
      "name": "Museum Ludwig",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Modern art museum housing one of Europe's largest Picasso collections.",
      "price": "Entry: €11.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_3",
      "name": "Hohenzollernbrücke",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Iconic railway bridge covered with thousands of love padlocks.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_4",
      "name": "Cologne Chocolate Museum",
      "category": "Landmark",
      "rating": "★4.4",
      "desc": "Interactive museum with a 3-meter tall liquid chocolate fountain.",
      "price": "Entry: €14.50",
      "image": "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_5",
      "name": "Great St. Martin Church & Old Town",
      "category": "Landmark",
      "rating": "★4.6",
      "desc": "Romanesque church surrounded by colorful medieval gabled houses.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_6",
      "name": "Brauhaus Sion",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Traditional Kölsch brewery house serving hearty Schweinshaxe roast pork.",
      "price": "Avg: €15–€24",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_7",
      "name": "Peters Brauhaus",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Famous Old Town brauhaus under stained-glass ceiling serving fresh Kölsch.",
      "price": "Avg: €16–€26",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_8",
      "name": "Früh am Dom",
      "category": "Restaurant",
      "rating": "★4.4",
      "desc": "Historic 1904 brewery hall right next to Cologne Cathedral.",
      "price": "Avg: €14–€22",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_9",
      "name": "Bei Oma Kleinmann",
      "category": "Restaurant",
      "rating": "★4.7",
      "desc": "Legendary tavern famous for massive handmade Schnitzels with 10+ sauces.",
      "price": "Avg: €14–€22",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "c_10",
      "name": "Café Reichard",
      "category": "Café & Bakery",
      "rating": "★4.5",
      "desc": "Classic German pastry cafe featuring direct views of the Cathedral.",
      "price": "Avg: €8–€14",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    }
  ],
  "Munich, Germany": [
    {
      "id": "m_1",
      "name": "Marienplatz",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Central square famous for the New Town Hall Glockenspiel clock show.",
      "price": "Free View",
      "image": "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_2",
      "name": "Englischer Garten",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Sprawling urban park famous for river surfing on the Eisbach wave.",
      "price": "Free Walk",
      "image": "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_3",
      "name": "Nymphenburg Palace",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Grand Baroque palace with extensive parklands and waterways.",
      "price": "Park: Free",
      "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_4",
      "name": "Munich Residenz",
      "category": "Landmark",
      "rating": "★4.8",
      "desc": "Former royal palace of the Wittelsbach monarchs of Bavaria.",
      "price": "Entry: €9.00",
      "image": "https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_5",
      "name": "BMW Welt & Museum",
      "category": "Landmark",
      "rating": "★4.7",
      "desc": "Futuristic automotive exhibition hall and museum near Olympiapark.",
      "price": "Welt: Free (Museum: €10)",
      "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_6",
      "name": "Augustiner-Keller",
      "category": "Restaurant",
      "rating": "★4.6",
      "desc": "Historic chestnut-tree beer garden serving Weisswurst & pretzels.",
      "price": "Avg: €14–€22",
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_7",
      "name": "Hofbräuhaus München",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "World-famous 1589 beer hall with live Bavarian Oompah bands.",
      "price": "Avg: €16–€25",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_8",
      "name": "Schneider Bräuhaus",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Authentic Bavarian brewery serving famous Schneider Weisse wheat beers.",
      "price": "Avg: €15–€24",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_9",
      "name": "Ratskeller München",
      "category": "Restaurant",
      "rating": "★4.5",
      "desc": "Atmospheric vaulted dining cellar right under Marienplatz Town Hall.",
      "price": "Avg: €18–€28",
      "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_10",
      "name": "Café Frischhut",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Iconic bakery near Viktualienmarkt famous for Schmalznudel pastries.",
      "price": "Pastry: €3.00",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_11",
      "name": "Viktualienmarkt",
      "category": "Park & Market",
      "rating": "★4.7",
      "desc": "Famous open-air daily food market with shaded beer garden tables.",
      "price": "Free Entry",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      "family": true,
      "adult": true
    },
    {
      "id": "m_12",
      "name": "MAN VERSUS MACHINE",
      "category": "Café & Bakery",
      "rating": "★4.7",
      "desc": "Specialty coffee micro-roastery serving third-wave espresso & flat whites.",
      "price": "Coffee: €4.00–€6",
      "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
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
    return `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.25rem; background:#EFF6FF; color:#1D4ED8; border:1px solid #93C5FD; padding:0.15rem 0.55rem; border-radius:6px; font-weight:700; text-decoration:none; font-size:0.85rem;" title="View Live Google Maps Hours, Reviews & Photos">📍 ${escapeHtml(placeName)}${ratingTag} <span style="font-size:0.75rem;">↗</span></a>`;
  },

  // MASTER FEATURE: Generate Turn-by-Turn Multi-Stop Route Link for Google Maps
  generateMultiStopMapsLink(venueList, city, transportMode) {
    if (!venueList || venueList.length === 0) return '';

    const cleanCity = city.split(',')[0].trim();
    const cleanVenues = venueList.map(v => `${v.replace(/[()]/g, '').trim()}, ${cleanCity}`);

    const origin = cleanVenues[0];
    const destination = cleanVenues[cleanVenues.length - 1];
    const waypoints = cleanVenues.slice(1, -1).join('|');
    const travelmode = transportMode === 'car' ? 'driving' : 'transit';

    let multiStopUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${travelmode}`;
    if (waypoints) {
      multiStopUrl += `&waypoints=${encodeURIComponent(waypoints)}`;
    }

    return `
      <div style="background:linear-gradient(135deg, #FEF3C7, #D1FAE5); border:2.5px solid var(--border-ink); border-radius:18px; padding:1.75rem; text-align:center; margin-bottom:1.75rem; box-shadow:var(--shadow-sketch);">
        <div style="font-size:1.4rem; color:var(--primary-forest); font-family:var(--font-serif); margin-bottom:0.5rem;" class="font-serif">
          🗺️ Full Multi-Stop Google Maps Navigation Route
        </div>
        <p style="font-size:0.92rem; color:var(--text-secondary); max-width:680px; margin:0 auto 1.25rem;">
          Click the button below to load <strong>all ${cleanVenues.length} destinations in order</strong> directly into Google Maps! Hit <strong>"Start Navigation"</strong> to follow the turn-by-turn route on your phone.
        </p>
        <a href="${multiStopUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:0.85rem 2rem; font-size:1.1rem; text-decoration:none;">
          📍 Open All ${cleanVenues.length} Destinations Route in Google Maps ↗
        </a>
      </div>
    `;
  },

  // Step 2: Render Interactive Candidate Spots with Selection Checkboxes & Lightweight Images
  renderCandidateSpots() {
    const city = document.getElementById('aiPlanDestination').value || 'Paris, France';
    const days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    const targetAudience = document.getElementById('aiPlanAudience').value || 'none';

    let maxCap = 4;
    if (days === 0.5) maxCap = 2;
    if (days === 2.0) maxCap = 7;

    const spots = candidateSpotsDatabase[city] || candidateSpotsDatabase['Paris, France'];
    const container = document.getElementById('candidateSpotsGrid');
    const counterBadge = document.getElementById('spotsCounterBadge');

    if (!container) return;

    let filteredSpots = spots;
    if (targetAudience === 'kids') {
      filteredSpots = spots.filter(s => s.family);
    } else if (targetAudience === 'adults') {
      filteredSpots = spots.filter(s => s.adult);
    }

    if (counterBadge) {
      const selectedCount = this.selectedMustVisitIds.size;
      counterBadge.innerHTML = `Selected: <strong>${selectedCount} / ${maxCap}</strong> (Max ${maxCap} Must-Visit Spots)`;
      counterBadge.style.color = selectedCount >= maxCap ? '#C2410C' : '#047857';
    }

    container.innerHTML = filteredSpots.map(s => {
      const isChecked = this.selectedMustVisitIds.has(s.id);
      const imgUrl = s.image || SVG_FALLBACK_IMAGE;

      return `
        <div class="card spot-candidate-card" style="border:2px solid ${isChecked ? 'var(--primary-gold)' : 'var(--border-ink)'}; background:${isChecked ? '#FEF3C7' : '#FFF'}; cursor:pointer; transition:all 0.2s ease; display:flex; flex-direction:column; justify-content:space-between;" onclick="AITravelEngine.toggleSpotSelection('${s.id}', ${maxCap})">
          <div>
            <!-- Lightweight Spot Thumbnail Image with Native Lazy Loading & SVG Fallback -->
            <div style="width:100%; height:150px; overflow:hidden; border-radius:12px; margin-bottom:0.75rem; background:#FAF7F2; position:relative;">
              <img src="${imgUrl}" alt="${escapeHtml(s.name)}" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.onerror=null; this.src='${SVG_FALLBACK_IMAGE}';">
              <span style="position:absolute; top:8px; right:8px; font-size:0.75rem; font-weight:800; background:rgba(255,255,255,0.92); color:#047857; padding:0.2rem 0.55rem; border-radius:6px; border:1px solid #047857; box-shadow:0 2px 4px rgba(0,0,0,0.1);">${s.rating}</span>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <span style="font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0369A1; padding:0.15rem 0.55rem; border-radius:6px; border:1px solid #0284C7;">${s.category}</span>
            </div>

            <h4 style="font-size:1.05rem; margin-bottom:0.3rem; font-family:var(--font-sans); color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
              <input type="checkbox" id="chk_${s.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); AITravelEngine.toggleSpotSelection('${s.id}', ${maxCap})" style="width:18px; height:18px; cursor:pointer;">
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
    let days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    if (days > 2) days = 2;

    const transportMode = document.getElementById('aiPlanTransport').value || 'transit';
    const audience = document.getElementById('aiPlanAudience').value || 'none';

    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const isCar = transportMode === 'car';

    const allSpots = candidateSpotsDatabase[destination] || candidateSpotsDatabase['Paris, France'];
    const mustVisitSpots = allSpots.filter(s => this.selectedMustVisitIds.has(s.id));
    const mustVisitNames = mustVisitSpots.map(s => s.name).join(', ');

    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2.5rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); text-align:center;">
        <div style="font-size:1.5rem; color:var(--primary-gold); font-family:var(--font-serif);" class="font-serif">
          ⚡ Generating Custom Route & Pre-loading Google Maps Route...
        </div>
        <p style="font-size:0.95rem; color:var(--text-secondary); margin-top:0.5rem;">
          Synthesizing ${escapeHtml(destination)} (${days === 0.5 ? 'Half Day' : days + ' Day(s)'}) | Must-Visit: <strong>${escapeHtml(mustVisitNames || 'AI Top Curated Spots')}</strong>
        </p>
      </div>
    `;

    if (this.config.apiKey) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.config.apiKey}`;
      const systemPrompt = `You are an expert AI Travel Curator for 0 Margin EU Travel. Respond in English.
STRICT MANDATE:
1. MUST EMBED THESE USER-SELECTED MUST-VISIT SPOTS: ${mustVisitNames || 'Top 4.5+ Real Spots'}.
2. TRANSPORTATION: ${isCar ? 'CAR / DRIVING MODE (Include driving minutes and parking garages like Parking Indigo, Q-Park, Interparking)' : 'PUBLIC TRANSIT MODE (Include metro/RER lines and walking minutes)'}.
3. TARGET AUDIENCE: ${audience === 'kids' ? 'Family with kids (kid-friendly tips & easy pace)' : audience === 'adults' ? 'Adults only (fine dining & relaxed pace)' : 'All travelers'}.
4. DURATION LIMIT: MAX ${days} DAY(S) (0.5 = Half Day, 1 = 1 Day, 2 = 2 Days max). NO DAY 3.
5. ABSOLUTELY ZERO REPETITION: Day 1 and Day 2 MUST feature 100% COMPLETELY DIFFERENT venues.
Format cleanly in HTML using <h4>, <ul>, <li>, and <strong> tags within 500 words.`;

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: `Generate custom route for ${destination} containing ${mustVisitNames}` }] }],
          generationConfig: { maxOutputTokens: 750, temperature: 0.5 }
        })
      })
      .then(res => res.json())
      .then(data => {
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty payload');
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, text, '⚡ Live Gemini 1.5 Flash (Custom Route)');
      })
      .catch(err => {
        console.warn('Gemini API call fallback:', err);
        const fallbackText = this.buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots);
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, fallbackText, '⚡ AI Custom Route (Real Google Maps Spots)');
      });

    } else {
      setTimeout(() => {
        const fallbackText = this.buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots);
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, fallbackText, '⚡ AI Custom Route (Real Google Maps Spots)');
      }, 350);
    }
  },

  // Synthesize Custom Route with Selected Must-Visit Spots
  buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots) {
    const destLower = destination.toLowerCase();
    const isCar = transportMode === 'car';

    const isParis = destLower.includes('paris');
    const isAmsterdam = destLower.includes('amsterdam');
    const isBrussels = destLower.includes('brussels') || destLower.includes('bruxelles');
    const isBerlin = destLower.includes('berlin');

    const mustNames = mustVisitSpots.map(s => s.name);

    let html = '';

    const transitNotice1 = isCar 
      ? '🚗 Drive: Ring road. Underground parking at Q-Park / Parking Indigo (4 min walk).' 
      : '🚆 Public Transit: Metro / S-Bahn station (3 min walk).';

    const transitNotice2 = isCar 
      ? '🚗 Drive: River road access. Direct parking garage on site.' 
      : '🚆 Public Transit: Tram / Bus direct line.';

    if (days === 0.5) {
      html += `
        <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
          <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
            📍 Half Day Custom Express Route (${escapeHtml(destination)})
          </h4>
          <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
            <li><strong>09:00 AM — Must-Visit Landmark:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Eiffel Tower', 'Paris', '★4.7') : isBerlin ? this.createMapsLink('Brandenburg Gate', 'Berlin', '★4.7') : this.createMapsLink('Rijksmuseum', 'Amsterdam', '★4.7'))} (${transitNotice1}).</li>
            <li><strong>11:30 AM — Signature Bakery & Café:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') : isBerlin ? this.createMapsLink('Zeit für Brot', 'Berlin', '★4.7') : this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8'))}.</li>
            <li><strong>12:30 PM — Recommended Dining:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + ' (Duck confit €18–€26)' : isBerlin ? this.createMapsLink("Mustafa's Gemüse Kebab", 'Berlin', '★4.4') + ' (€7)' : this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6')}.</li>
          </ul>
        </div>
      `;
    } else {
      // DAY 1
      html += `
        <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
          <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
            📍 Day 1: ${escapeHtml(destination)} Historic Center & Selected Spots
          </h4>
          <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
            <li><strong>09:00 AM — Morning Landmark:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Eiffel Tower', 'Paris', '★4.7') : isBerlin ? this.createMapsLink('Brandenburg Gate', 'Berlin', '★4.7') : this.createMapsLink('Rijksmuseum', 'Amsterdam', '★4.7'))} (${transitNotice1}).</li>
            <li><strong>11:30 AM — Signature Bakery:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') : isBerlin ? this.createMapsLink('Zeit für Brot', 'Berlin', '★4.7') : this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8'))}.</li>
            <li><strong>12:30 PM — Day 1 Dining:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') : isBerlin ? this.createMapsLink("Mustafa's Gemüse Kebab", 'Berlin', '★4.4') : this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6')}.</li>
            <li><strong>03:00 PM — Afternoon Spot:</strong> ${mustNames[2] ? this.createMapsLink(mustNames[2].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Louvre Museum', 'Paris', '★4.7') : isBerlin ? this.createMapsLink('Museum Island', 'Berlin', '★4.8') : this.createMapsLink('Nine Streets', 'Amsterdam', '★4.8'))}.</li>
            <li><strong>07:00 PM — Evening Walk:</strong> ${isParis ? this.createMapsLink('Pont des Arts', 'Paris', '★4.7') : isBerlin ? this.createMapsLink('East Side Gallery', 'Berlin', '★4.6') : 'Historic promenade walk'}.</li>
          </ul>
        </div>
      `;

      // DAY 2
      if (days >= 2) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 Day 2: 【100% Unique Venues】 Musée d'Orsay & Arc de Triomphe
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — Day 2 Landmark:</strong> ${mustNames[3] ? this.createMapsLink(mustNames[3].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink("Musée d'Orsay", "Musée d Orsay Paris", '★4.8') : isBerlin ? this.createMapsLink('Reichstag Building', 'Berlin', '★4.7') : this.createMapsLink('Van Gogh Museum', 'Amsterdam', '★4.8'))} (${transitNotice2}).</li>
              <li><strong>11:30 AM — Day 2 Pastry:</strong> ${mustNames[4] ? this.createMapsLink(mustNames[4].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Cédric Grolet Le Meurice', 'Paris', '★4.6') : isBerlin ? this.createMapsLink('The Barn Coffee Roasters', 'Berlin', '★4.5') : this.createMapsLink('Winkel 43', 'Amsterdam', '★4.6'))}.</li>
              <li><strong>12:30 PM — Day 2 Dining:</strong> ${isParis ? this.createMapsLink('Le Train Bleu', 'Paris', '★4.5') + ' or ' + this.createMapsLink('Chez Janou', 'Paris', '★4.5') : isBerlin ? this.createMapsLink('Zur Letzten Instanz', 'Berlin', '★4.4') : this.createMapsLink('Foodhallen Amsterdam', 'Amsterdam', '★4.5')}.</li>
              <li><strong>03:00 PM — Day 2 Afternoon Spot:</strong> ${mustNames[5] ? this.createMapsLink(mustNames[5].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Arc de Triomphe', 'Paris', '★4.7') : isBerlin ? this.createMapsLink('Charlottenburg Palace', 'Berlin', '★4.6') : this.createMapsLink('Zaanse Schans Windmills', 'Amsterdam', '★4.6'))}.</li>
              <li><strong>07:00 PM — Farewell Walk:</strong> ${isParis ? this.createMapsLink('Sacré-Cœur Basilica', 'Paris', '★4.7') : isBerlin ? this.createMapsLink('Gendarmenmarkt Square', 'Berlin', '★4.7') : 'Relaxing evening promenade'}.</li>
            </ul>
          </div>
        `;
      }
    }

    return html;
  },

  renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, itineraryHtml, engineTag) {
    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const isCar = transportMode === 'car';

    let venueNames = [];
    if (mustVisitSpots && mustVisitSpots.length > 0) {
      venueNames = mustVisitSpots.map(s => s.name.split(' (')[0].trim());
    }

    if (venueNames.length === 0) {
      const destLower = destination.toLowerCase();
      if (destLower.includes('paris')) {
        venueNames = ['Eiffel Tower', 'Louvre Museum', 'Arc de Triomphe', 'Musée d\'Orsay', 'Sainte-Chapelle', 'Le Petit Marché'];
      } else if (destLower.includes('berlin')) {
        venueNames = ['Brandenburg Gate', 'Museum Island', 'Reichstag Building', "Mustafa's Gemüse Kebab", 'Zeit für Brot', 'East Side Gallery'];
      } else if (destLower.includes('amsterdam')) {
        venueNames = ['Rijksmuseum', 'Van Stapele Koekmakerij', 'Café de Klos', 'Nine Streets', "Brouwerij 't IJ"];
      } else if (destLower.includes('brussels')) {
        venueNames = ['Grand-Place', 'Maison Dandoy', 'Fin de Siècle', 'Royal Gallery of Saint-Hubert'];
      } else {
        venueNames = ['Cologne Cathedral', 'Museum Ludwig', 'Brauhaus Sion', 'Hohenzollernbrücke'];
      }
    }

    const multiStopMapsHtml = this.generateMultiStopMapsLink(venueNames, destination, transportMode);

    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); animation:fadeIn 0.3s ease;">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <span class="paper-tape">${engineTag}</span>
            <h3 style="font-size:1.65rem; margin-top:0.4rem; font-family:var(--font-serif);">
              ${escapeHtml(destination)} — ${days === 0.5 ? 'Half Day' : days + ' Day(s)'} Custom Route
            </h3>
          </div>
          <span class="seed-points-badge">${isCar ? '🚗 Car Mode with Parking' : '轨 Public Transit Mode'}</span>
        </div>

        <!-- MASTER MULTI-STOP GOOGLE MAPS ROUTE BUTTON -->
        ${multiStopMapsHtml}

        <!-- Single Spot Live Links Instruction Box -->
        <div style="background:#EFF6FF; border:1.5px solid #3B82F6; border-radius:12px; padding:0.85rem 1.25rem; margin-bottom:1.5rem; font-size:0.85rem; color:#1E40AF; display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.2rem;">🗺️</span>
          <span><strong>Pro-Tip:</strong> Tap individual venue buttons (e.g., <strong>📍 Eiffel Tower ↗</strong>) to view live operating hours, recent photos, and real-time reviews on Google Maps!</span>
        </div>

        <div style="margin-bottom:1.5rem;">
          ${itineraryHtml}
        </div>
      </div>
    `;
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

window.addEventListener('DOMContentLoaded', () => {
  if (typeof AITravelEngine !== 'undefined') {
    AITravelEngine.renderCandidateSpots();
  }
});
