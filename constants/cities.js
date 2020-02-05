const CITIES = [
  {
    name: 'Agra',
    key: 'agra',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531481696/agra_dfkjrd.png',
    metaTitle: 'Taj Mahal, Delicious Chaat & All Things Good About Agra!',
    metaDescription:
      'From the magnificient Taj Mahal, the historical connect of the city to the mouth watering street food and latest fashion, we give you everything about Agra.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/agra_a7qlb6.png',
    metaKeywords:
      'Agra, soagra, So Agra, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, City, Entertainment, Music, Comedy, Style, Cafes, Fashion, Stores, Shopping, Travel, Resort, Getaway, Weekend, Taj Mahal, Homestays'
  },
  {
    name: 'Amritsar',
    key: 'amritsar',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482060/amritsar_c8th5q.png',
    metaTitle: 'Check Us Out & Know All About The Beautiful City Of Amritsar',
    metaDescription:
      'Visit the city of Amritsar with us as we show you the magnificient Golden Temple, give you a bite of the delish kulchas and let you burp after a glass of lassi.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/amritsar_k2re3d.jpg',
    metaKeywords:
      'Amritsar, so amritsar, Food, Restaurants, Eateries, Bars,Best, Buzzing, Happening, Events,Entertainment, Music, Comedy, Style, Fashion, Stores, Cafes, Shopping,Travel,Resort, Getaway, Weekend,  Homestays'
  },
  {
    name: 'Andaman',
    key: 'andaman',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482060/andaman_tznxgy.png',
    metaTitle: "Planning A Vacation To Andamans? Here's All You Need To Know",
    metaDescription:
      "We've curated a list of everything from the beach side cafes to the beautiful islands, that'll make you wanna pack up & head over to Andamans right now!",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/andaman_iik1cv.jpg',
    metaKeywords:
      'Andaman, so andaman, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Cafes, Entertainment, Music, Comedy, Style, Fashion, Stores, Shopping, Travel, Resort, Getaway, Weekend,Homestays'
  },
  {
    name: 'Coorg',
    key: 'coorg',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1524122907/images_2Fcoorg_sivr3i.png',
    metaTitle: 'Pretty Views, Strong Coffee & Everything Else About Coorg!',
    metaDescription:
      "Yoga retreats, cool cafes, street shopping and loads more fun stuff that you should definitely indulge in once you're in the gorgeous city of Coorg.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/coorg_jcrbfl.jpg',
    metaKeywords:
      'Coorg, so coorg, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Hill Station Entertainment, Music, Comedy, Style, Fashion, Shopping, Travel, Resort, Getaway, Trekking Weekend, Cafes, Homestays'
  },
  {
    name: 'Darjeeling',
    key: 'darjeeling',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1524122907/images_2Fdarjeeling_ceio37.png',
    metaTitle: 'Check Us Out & Know All About The Queen Of Hills, Darjeeling',
    metaDescription:
      "Here's a list of everything from toy train rides, best momos, monastries, national parks, trekking spots & more that makes Darjeeling, the queen of hills.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/darjeeling_zw2bvr.jpg',
    metaKeywords:
      'Darjeeling, so darjeeling, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Hill Station,Hills, Mountains,  Entertainment, Music, Comedy, Style, Fashion, Shopping, Travel, Resort, Getaway, Weekend, Vacation, Homestays'
  },
  {
    name: 'Delhi',
    key: 'delhi',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1524122907/images_2Fdelhi_kx5pck.png',
    metaTitle: 'Wanna Know Everything Happening In Delhi? Check Us Out!',
    metaDescription:
      "From street food to the hottest new eateries, from trendy boutiques to the most happening events, we'll tell you everything you need to know about Delhi.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/delhi_il3d6k.jpg',
    metaKeywords:
      'Delhi, sodelhi, Food, Restaurants, Eateries, Bars,Cafes, Best, Buzzing, Happening, Events, City, Entertainment, Music, Comedy, Style, Fashion, Stores, Shopping, ,Travel, Resort, Getaway, Weekend, Homestays, Airbnb'
  },
  {
    name: 'Jaisalmer',
    key: 'jaisalmer',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/jaisalmer_dgv79b.png',
    metaTitle: 'Find Out All About The Heritage City Of Jaisalmer With Us',
    metaDescription:
      'Let yourself splurge in camel rides, luxury camps, heritage havelis, daal baati, majestic temples, and all things touristy when in the city of Jaisalmer.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/Jaisalmer_eruz3b.jpg',
    metaKeywords:
      'Jaisalmer, so jaisalmer, Food, Restaurants, Eateries, Bars,Best, Buzzing, Happening, Events, City, Royal, Entertainment, Music, Comedy, Culture, Temples, Heritage, Style, Fashion, Shopping, Travel, Resorts, Getaway, Weekend, Hostels'
  },
  {
    name: 'Kasol',
    key: 'kasol',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/kasol_exgmwt.png',
    metaTitle: 'Check Us Out & Discover The True Beauty Of The Magical Kasol',
    metaDescription:
      "The adventure junkie in you will love Kasol 'cause the place is all about the thrilling treks, exciting camping spots, israel dishes & loads more.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/kasol_hf4c4p.jpg',
    metaKeywords:
      'Kasol, so kasol, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Hill Station,  Entertainment, Music, Hills, Mountains, Cafes, Trekking, Camping, Style, Fashion, Shopping, Travel, Resort, Getaway, Weekend, Homestays'
  },
  {
    name: 'Leh',
    key: 'lehladakh',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1524122384/leh_comp_jan0ez.png',
    metaTitle: 'Enjoy Bike Rides, Monastries & Sunsets Of Ladakh With Us',
    metaDescription:
      "We'll tell you all about the daunting mountains, peaceful monastries, prisitine lakes, trekking trails & lots more that makes Ladakh a great vacay destination.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/ladakh_mccwsz.jpg',
    metaKeywords:
      'Leh,Ladakh, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Trekking, Camping, Hills, Mountains, Bike Rides, Bikes, Entertainment, Music,Style, Fashion,  Shopping,Travel, Resort, Getaway, Weekend, Homestays'
  },
  {
    name: 'McLeodganj',
    key: 'mcleodganjanddharamshala',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/McLeodganj_jqxezj.png',
    metaTitle: 'Camping,Star Gazing & All Other Cool Things About Mcleodganj',
    metaDescription:
      "If hiking, camping and paragliding defines your vacation goals, then Mcleodganj is the spot for you. Here's everything you need know about this amazing place.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/McLeod_Ganj_y8wei5.jpg',
    metaKeywords:
      'McLeaodganj, Dharamshala, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Hill Station,Hills, Cafes, Trekking, Camping, Star Gazing, Entertainment, Music,Fashion, Shopping,Travel, Resort, Getaway, Weekend, Homestays, Vacation'
  },
  {
    name: 'Mussoorie',
    key: 'mussoorie',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/mussoorie_gx3xhv.png',
    metaTitle: 'Water Falls, Hill Views & Everything Else About Mussoorie ',
    metaDescription:
      'Picturesque hills, mouth-watering chocolates, vintage bakeries and everything else that makes Mussoorie one of our favourite winter holiday spots.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/mussoorie_xlw3qn.jpg',
    metaKeywords:
      'Mussoorie, Food, Restaurants, Eateries, Bars,Best, Buzzing, Happening,Hill Station, Hills, Mountains, Cafes, Trekking, Entertainment, Music,Fashion, Shopping,Travel, Resort, Getaway, Weekend, Homestays, Vacations, Holidays'
  },
  {
    name: 'Nainital',
    key: 'nainital',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/nainital_h08kab.png',
    metaTitle: 'Wanna Know All About The City Of Lakes,Naintal? Check Us Out',
    metaDescription:
      "From the cutesy cafes, stunning sunset points, holy temples to a shopping spree on mall road, here's everything you gotta know about the city lake, Nainital!",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/nainital_pyvuwd.jpg',
    metaKeywords:
      'Nainital, so nainital, Food, Restaurants, Eateries, Bars,Best, Buzzing, Happening, Events, Hill Station, Hills, Cafes, Mountains,Lakes, Valleys, Entertainment, Music, Style, Fashion, Stores, Shopping, Retail, Therapy, Travel, Resort, Getaway, Weekend, Homestays, Vacations, Holidays'
  },
  {
    name: 'Nashik',
    key: 'nashik',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/c_scale,h_146,w_100/v1525508391/nasik_xg1cm3.png',
    metaTitle: "Here's All You Wanna Know About The Divine City Of Nashik!",
    metaDescription:
      "Wineyards that you'll never wanna leave, candle light dinners you'd never want to end and many more such things that you'll experience in the city of Nashik.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/nashik_iduniq.jpg',
    metaKeywords:
      'Nashik, so nashik, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Entertainment, Music, Comedy, Style, Fashion, Shopping, Travel, Resort, Getaway, Weekend,  Homestays, Vactions, Holidays, Temples, Wineyards, Wine'
  },
  {
    name: 'Ooty',
    key: 'ooty',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/ooty_bscppm.png',
    metaTitle: 'Join Us While We Take You For An Adventurous Ride To Ooty',
    metaDescription:
      "From breathtaking lakes, mini vacations to Coonoor and amazing handicrafts to nerve racking adventure sports, here's all you need to know about Ooty!",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/ooty_gbbuqf.jpg',
    metaKeywords:
      'Ooty, Food, Restaurants, Eateries, Bars, Best, Best, Buzzing, Happening, Events,  Entertainment, Music, Comedy, Style, Fashion,Shopping, Travel, Resort, Getaway, Weekend, Homestays, lakes, Valleys, Trekking, Hills, Mountains, Hill Station, Boating, Camping, Trekking, Vacations, Holidays'
  },
  {
    name: 'Pondicherry',
    key: 'pondicherry',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/pondicherry_a7anws.png',
    metaTitle: "Here's Everything That Makes Pondicherry All Things Beautiful",
    metaDescription:
      "We'll tell you all about the mesmerising beaches, rooftop cafes,freshwater lakes, sunrise spots and lots more that describes Pondicherry the best.",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/pondicherry_hp9r64.jpg',
    metaKeywords:
      'Pondicherry, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Beaches,  Entertainment, Music,Style, Fashion, Shopping ,Travel, Resort, Getaway, Weekend, Homestays, Cafes, Lakes'
  },
  {
    name: 'Rishikesh',
    key: 'rishikesh',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482108/rishikesh_gqsld7.png',
    metaTitle: 'Embrace The Tranquilty & Mistique Of Rishikesh With Us!',
    metaDescription:
      'Let us tell you all about the best temples, spa centres, national parks, rafting spots and all the interesting things about the city of Rishikesh!',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/Rishikesh_zweisf.jpg',
    metaKeywords:
      'Rishikesh, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events,  Entertainment, Music, Ganga, Rafting, Rivers, Fashion,  Shopping, Travel, Resort, Getaway, Weekend, Homestays,Temples'
  },
  {
    name: 'Shillong',
    key: 'shillong',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482109/shillong_caaz2v.png',
    metaTitle: "Are You Travelling To Shillong? Here's All You Need To Know",
    metaDescription:
      'The serene lakes, enchanting monasteries, themed cafes, leisurely activities and loads more that makes Shillong a must visit for all you travel junkies.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/shillong_sntdaq.jpg',
    metaKeywords:
      'Shillong, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, Hills, Mountains, Hill Station, North East, Meghalaya, Entertainment, Music,Style, Fashion, Shopping, Travel, Resort, Getaway, Weekend, Homestays, Monasteries, Lakes, Cafes'
  },
  {
    name: 'Shimla',
    key: 'shimla',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482109/shimla_cyir5j.png',
    metaTitle: 'Experience The Old World Charms Of The City Of Shimla With Us',
    metaDescription:
      'Walks at the mall road, slurping the softy cones, enjoying the snow fall, sipping a hot cuppa coffee and everything that makes Shimla a popular vacation spot!',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/shimla_wvylru.jpg',
    metaKeywords:
      'Shimla, Food, Restaurants, Eateries, Bars,Best, Buzzing, Happening, Events, Hill Stations, Hills ,Mountains, Camping, Trekking, Mall Roads,  Entertainment, Music,Style, Fashion, Stores, Shopping,Travel, Resort, Getaway, Weekend Hotels, Homestay, Holiday, Vacation'
  },
  {
    name: 'Srinagar',
    key: 'srinagar',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482109/srinagar_icuqwy.png',
    metaTitle: "Here's All About Srinagar That Makes It A Perf Vacation Spot",
    metaDescription:
      'Experience the stunning mosques, houseboats,delicious wazwan meals, romantic hotel stays, unforgettable snowfalls and much more when in the city of Srinagar.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/srinagar_pd6i5f.jpg',
    metaKeywords:
      'Srinagar, Food, Restaurants, Eateries, Bars,Best, Buzzing, Happening, Events, Jammu, Kashmir, Valleys, Lakes, City, Entertainment, Music,House Boats, Snowfall, Style, Fashion, Shopping,Travel, Resort, Getaway, Weekend, Homestays, Hotels, Cafes, Mountains, Hills'
  },
  {
    name: 'Udaipur',
    key: 'udaipur',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482109/udaipur_akkgry.png',
    metaTitle: 'Check Us Out To Know All About The Royal City Of Udaipur!',
    metaDescription:
      "If crystal clean lakes flowing through the city amidst stunning backdrops defines your perf romantic getaway, then here's all you wanna know about Udaipur!",
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/udaipru_zycp0w.jpg',
    metaKeywords:
      'Udaipur, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, City, Heritage, Culture, Cultural, Handicrafts, Royalty, Lakes, Entertainment, Music, Weddings, Destination, Style, Fashion, Shopping, Travel, Resort, Getaway, Weekend, Homestays, Hotels, Cafes, Palaces, Mahal, Havelis, Properties'
  },
  {
    name: 'Varanasi',
    key: 'varanasi',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1531482109/varanasi_pxscc7.png',
    metaTitle: 'Pashmina Shawls, Ghats & All Things Pretty About Varanasi',
    metaDescription:
      'Witness the serene ghats, the holy temples, try the spicy chaat, shop the best pashmina shawls and scarfs and loadsa more when in the city of Varanasi.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/Varanasi_kuslig.jpg',
    metaKeywords:
      'Varanasi, Food, Restaurants, Eateries, Bars, Best, Buzzing, Happening, Events, City, Temples, Ghats, Rivers, Entertainment, Music,Style, Fashion, Shopping, Travel, Resort, Getaway, Weekend, Homestays, Hotels, Cafes'
  },
  {
    name: 'Mumbai',
    key: 'mumbai',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385937/mumbai_szovz0.png',
    metaTitle: "Discover All That's Hip & Happening In Mumbai Right Here",
    metaDescription:
      'Explore all that makes Mumbai a magical city from walks at Marine Drive to its historical gems, Parsi cafes, hip restaurants and mind-blowing street eats.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/mumbai-seo.jpg',
    metaKeywords:
      'Mumbai, Food, Street Food, Restaurants, Fine Dining, Eateries, Bars, Best, Buzzing, Happening, Events, Music, Cafes, Entertainment, Bollywood, Music, Shopping, Travel, Resort, Getaway, Homestays, Hotel'
  },
  {
    name: 'Bangalore',
    key: 'bangalore',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385938/banglore_isr4lq.png',
    metaTitle: 'This Is Your Ultimate Food & Culture Guide For Bangalore',
    metaDescription:
      'Discover the best of Bangalore from historical monuments to picturesque parks, shopping for silk sarees, digging into the best dosas and so much more.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/bangalore-seo.jpg',
    metaKeywords:
      'Bangalore, Food, Dosa, Restaurants, Eateries, Bars, Beers, Cafes, IT, Best, Buzzing, Happening, Nature, Parks, Gardens, Monuments, Heritage, Events, City, Entertainment, Music, Comedy, Health, Beauty, Style, Fashion, Stores, Shopping, Student Life, Travel, Resort, Activities, Hotels'
  },
  {
    name: 'Pune',
    key: 'pune',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385938/pune_mrrss9.png',
    metaTitle: 'Wanna Know Everything Hip & Happening In Pune? Check Us Out!',
    metaDescription:
      'From palaces, forts, caves & temples, the most awesome cafes & restaurants to a host of fun activities, discover everything that makes Pune awesome.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/pune-seo.jpg',
    metaKeywords:
      'Pune, Food, Restaurants, Eateries, Cafes, Bars, Best, Buzzing, Happening, Events, Music, Entertainment, Activities, Palaces, Forts, Temples, Caves, Shopping, Travel, Resort, Getaway, Homestays, Hotel'
  },
  {
    name: 'Kolkata',
    key: 'kolkata',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385937/kolkata_qxvlcv.png',
    metaTitle: 'Wanna Know Everything Happening In Kolkata? Check Us Out!',
    metaDescription:
      'A city that boasts of the best Puchkas & Roshogullas, Kolkata is a vibrant city known for its palaces, museums & temples. Explore all this and more right here.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/kolkata-seo.jpg',
    metaKeywords:
      'Kolkata, Food, Restaurants, Eateries, Bookstores, Best, Buzzing, Happening, Events, Entertainment, Music, Heritage, Style, Fashion, Shopping, Travel, Resort, Getaway, Hotels'
  },
  {
    name: 'Goa',
    key: 'goa',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385937/goa_xt63r8.png',
    metaTitle: 'Wanna Know Everything Hip & Happening In Goa? Check Us Out!',
    metaDescription:
      'Discover Goa and the best things to do from discovering untouched beaches, chowing down the best seafood to partying it up at the best local spots.',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/goa-seo.jpg',
    metaKeywords:
      'Goa, Food, Seafood, Restaurants, Eateries, Best, Buzzing, Happening, Beaches, Shacks, Partying, Beer, Events, Entertainment, Music, Comedy, Style, Fashion, Markets, Shopping, Travel, Resort, Getaway, Hotels'
  },
  {
    name: 'Chennai',
    key: 'chennai',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385938/chennai_pkhuhs.png',
    metaTitle: 'Explore The Best Of The Vibrant City Of Chennai With Us',
    metaDescription:
      'From exploring beautiful temples, picturesque waterfalls & beaches to discovering the best South Indian food & coffee houses, Chennai has it all. ',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/Chennai_Kathipara_bridge_milpwp.jpg',
    metaKeywords:
      'Chennai, Food, Dosa, Coffee, IT, Restaurants, Eateries, Bars, Cafes, Best, Buzzing, Happening, Nature, Beaches, Heritage, Events, City, Entertainment, Music, Health, Beauty, Style, Fashion, Stores, Shopping, Travel, Resort, Activities, Hotels'
  },
  {
    name: 'Hyderabad',
    key: 'hyderabad',
    img:
      'https://res.cloudinary.com/purnesh/image/upload/v1566385937/hydrabad_omrwnb.png',
    metaTitle: 'This Is Your Ultimate Food & Culture Guide For Hyderabad',
    metaDescription:
      'Explore the best of Hyderabad which is laced with history with a myriad of monuments, tombs, temples & lakes. Discover where to dig into the best biryani! ',
    metaImage:
      'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/hyderabad-seo.jpg',
    metaKeywords:
      'Hyderabad, Food, Biryani, Restaurants, Eateries, Best, Buzzing, Happening, Heritage, Events, Entertainment, Music, Comedy, Style, Fashion, Shopping, Travel, Resort, Getaway, Hotels'
  }
]

export default CITIES
