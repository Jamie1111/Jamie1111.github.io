/**
 * This file contains global functions that are used in this exam. We deliberatly 
 * moved these to a separate file to keep your starter code clean, but it also
 * enables us to autotest your code with other datasets Muhahahaa.
 */

/**
 * Function that fakes the fetching of data from a remote server.
 */
function fetchData() {
  return [
    {
      "message": "Tired of regular pillows? Try my memory foam pillow filled with ethically sourced clouds! ☁️ Sweet dreams guaranteed. #Ad",
      "createdAt": "2024-09-02T20:30:00Z",
      "author": "PillowGuru"
    },
    {
      "message": "Exciting news! 🍕 My pizza-flavored lip balm is now available. Keep your lips soft and delicious. #Ad",
      "createdAt": "2024-09-02T21:00:00Z",
      "author": "LipBalmLover"
    },
    {
      "message": "Study finds that 90% of productivity is just convincing your computer to cooperate.",
      "createdAt": "2024-09-02T17:25:00Z",
      "author": "TechTruther"
    },
    {
      "message": "Scientists accidentally discover that laughing at your own jokes makes you 50% funnier.",
      "createdAt": "2024-09-02T15:05:00Z",
      "author": "JokeScientist"
    },
    {
      "message": "New study shows that eating pizza for breakfast increases IQ by 25%.",
      "createdAt": "2024-09-02T12:35:00Z",
      "author": "PizzaFacts"
    },
    {
      "message": "You won't believe it! My vegan leather jackets are made entirely from recycled avocado skins. Fashion meets sustainability! #Ad",
      "createdAt": "2024-09-02T20:50:00Z",
      "author": "EcoFashionista"
    },
    {
      "message": "OMG, you guys! 😱 My new bacon-scented candles are the perfect addition to any room. Light up your life with the smell of breakfast! #Ad",
      "createdAt": "2024-09-02T20:20:00Z",
      "author": "CandleQueen"
    },
    {
      "message": "Just launched! 🚀 My organic glitter shampoo will make your hair sparkle like a unicorn. Pre-order now! #Ad",
      "createdAt": "2024-09-02T20:10:00Z",
      "author": "SparkleShampoo"
    },
    {
      "message": "Breaking: Penguins found on Mars, setting up interplanetary ice cream shops.",
      "createdAt": "2024-09-02T16:15:00Z",
      "author": "SpaceOddity"
    },
    {
      "message": "Scientists declare that dancing in the rain is the ultimate cure for Monday blues.",
      "createdAt": "2024-09-02T18:35:00Z",
      "author": "RainDanceLover"
    },
    {
      "message": "Transform your home with my new line of glow-in-the-dark furniture. Because why should only the stars shine at night? 🌟 #Ad",
      "createdAt": "2024-09-02T21:10:00Z",
      "author": "HomeGlow"
    },
    {
      "message": "Hey everyone! 🌟 Have you tried my new kale-infused toothpaste? Guaranteed to give you the freshest green smile! #Ad",
      "createdAt": "2024-09-02T20:00:00Z",
      "author": "HealthyTeeth"
    },
    {
      "message": "BREAKING: World’s first flying car is powered entirely by positive thoughts.",
      "createdAt": "2024-09-02T13:50:00Z",
      "author": "FutureNow"
    },
    {
      "message": "Attention, skincare lovers! 💧 My new snail slime moisturizer is here to give you that radiant glow. Snails never looked so good! #buyNow",
      "createdAt": "2024-09-02T20:40:00Z",
      "author": "SkinGuru"
    },
    {
      "message": "BREAKING: Scientists confirm that coffee is now 110% more effective when consumed with donuts.",
      "createdAt": "2024-09-02T08:15:00Z",
      "author": "CoffeeLover"
    },
    {
      "message": "Experts reveal that the key to success is wearing socks with sandals.",
      "createdAt": "2024-09-02T11:20:00Z",
      "author": "FashionInsider"
    },
    {
      "message": "BREAKING: World's largest rubber duck escapes, now floating down the Amazon River.",
      "createdAt": "2024-09-02T19:45:00Z",
      "author": "DuckWatcher"
    },
    {
      "message": "Big news! My scented socks are here, infused with the aroma of fresh-baked cookies. Your feet deserve a treat! 🍪 #sponsored",
      "createdAt": "2024-09-02T21:20:00Z",
      "author": "ScentedSocks"
    },
    {
      "message": "Local cat elected mayor; promises more naps and less barking.",
      "createdAt": "2024-09-02T09:45:00Z",
      "author": "CatNews"
    },
    {
      "message": "Introducing my new portable pet spa! Keep your furry friend pampered on the go. Luxury has never been so convenient. 🐾 #Ad",
      "createdAt": "2024-09-02T21:30:00Z",
      "author": "PetPamper"
    },
    {
      "message": "New tech alert! My smart pillow tracks your dreams and sends you a morning summary. Sweet or spooky, you decide! #Ad",
      "createdAt": "2024-09-02T22:00:00Z",
      "author": "DreamTech"
    },
    {
      "message": "Just launched! My energy drink for plants boosts growth by 200%. Your houseplants will thank you! 🌱 #Ad",
      "createdAt": "2024-09-02T22:10:00Z",
      "author": "PlantBooster"
    },
    {
      "message": "Breaking: World’s first reversible pants hit the market. Two styles in one! #Ad",
      "createdAt": "2024-09-02T22:20:00Z",
      "author": "FashionFlex"
    },
    {
      "message": "Say goodbye to boredom! My new board game combines chess, monopoly, and karaoke in one. Challenge accepted? 🎤 #Ad",
      "createdAt": "2024-09-02T22:30:00Z",
      "author": "GameChanger"
    },
    {
      "message": "Tired of losing your keys? My new smart socks beep when you're near your lost items. Never lose anything again! #Ad #SmartWear",
      "createdAt": "2024-09-02T22:40:00Z",
      "author": "TechSocks"
    },
    {
      "message": "Exclusive offer! My solar-powered phone case charges your phone and toasts bread. Breakfast and battery in one! #Ad",
      "createdAt": "2024-09-02T22:50:00Z",
      "author": "SolarTech"
    },
    {
      "message": "Need a workout buddy? My AI-powered robot dog will fetch weights and cheer you on during exercises. Fitness just got a whole lot cuter! 🐕‍🦺 #Ad",
      "createdAt": "2024-09-02T23:00:00Z",
      "author": "FitTech"
    },
    {
      "message": "Breaking: New study shows that sleeping upside down improves creativity by 300%. Get your hanging beds today! 🛏️ #Ad",
      "createdAt": "2024-09-02T23:10:00Z",
      "author": "SleepInnovations"
    },
    {
      "message": "Announcing my eco-friendly, edible utensils! Enjoy your meal and dessert in one bite. Reduce waste, eat your spoon! #Ad",
      "createdAt": "2024-09-02T23:20:00Z",
      "author": "EcoEats"
    },
    {
      "message": "Introducing my holographic business cards. Stand out and impress with 3D effects. The future of networking is here! #Ad",
      "createdAt": "2024-09-02T23:30:00Z",
      "author": "HoloBiz"
    },
    {
      "message": "BREAKING: Dinosaurs are back—at least in the form of inflatable costumes. Get yours for Halloween now! 🦖 #Ad",
      "createdAt": "2024-09-02T23:40:00Z",
      "author": "DinoCostumes"
    },
    {
      "message": "You asked for it! My vegan, gluten-free, keto-friendly cookie dough is here. Indulge without guilt! 🍪 #Ad",
      "createdAt": "2024-09-02T23:50:00Z",
      "author": "HealthyTreats"
    },
    {
      "message": "Breaking news! My teleportation app is in beta testing. Skip traffic, arrive instantly. Sign up today! #Ad",
      "createdAt": "2024-09-03T00:00:00Z",
      "author": "TeleportTech"
    },
    {
      "message": "Discover the ultimate relaxation! My soundproof, portable napping pod lets you catch Z's anywhere. Nap like a pro! 😴 #Ad",
      "createdAt": "2024-09-03T00:10:00Z",
      "author": "NapPod"
    },
    {
      "message": "Amazing deal! #HealthyLiving My self-heating yoga mat ensures you're always warm during your practice. Hot yoga, any time, any place! #Ad",
      "createdAt": "2024-09-03T00:20:00Z",
      "author": "YogaWarmth"
    },
    {
      "message": "BREAKING: Scientists invent a helmet that reads your dog's thoughts. Finally, know what your pup is really thinking! 🧠 #Ad",
      "createdAt": "2024-09-03T00:30:00Z",
      "author": "PetPsych"
    },
    {
      "message": "Exciting launch! My magnetic, levitating coffee mug ensures you never spill again. Defy gravity with every sip! ☕ #Ad",
      "createdAt": "2024-09-03T00:40:00Z",
      "author": "LevitateLife"
    },
    {
      "message": "Update: My #smartwear #TechFashion glow-in-the-dark slippers are now available in 10 new colors. Never stumble in the dark again! 🥿 #Ad",
      "createdAt": "2024-09-03T00:50:00Z",
      "author": "GlowFootwear"
    },
    {
      "message": "Breaking: New personal assistant drone follows you around, providing shade, snacks, and compliments. Your life, upgraded! #Ad",
      "createdAt": "2024-09-03T01:00:00Z",
      "author": "DroneBuddy"
    },
    {
      "message": "Introducing my all-in-one office chair that transforms into a massage recliner and a mini-fridge. Work hard, relax harder! #Ad",
      "createdAt": "2024-09-03T01:10:00Z",
      "author": "ChairCo"
    },
    {
      "message": "Exciting new service! My subscription box delivers daily motivational speeches from a holographic coach. Stay inspired! 📦 #Ad",
      "createdAt": "2024-09-03T01:20:00Z",
      "author": "InspireMe"
    },
    {
      "message": "BREAKING: The world’s first edible smartphone case is here. Protect your phone and satisfy your hunger! 📱 #TechGadgets #Ad",
      "createdAt": "2024-09-03T01:30:00Z",
      "author": "SnackCase"
    },
    {
      "message": "Launch alert! My talking plant pot reminds you to water your plants and occasionally tells you a joke. Keep your plants and mood alive! 🌻 #Ad",
      "createdAt": "2024-09-03T01:40:00Z",
      "author": "GreenJokes"
    },
    {
      "message": "Exciting new #TechGadgets product! My self-stirring soup bowl makes sure every spoonful is perfectly mixed. Bon appétit! 🍲 #Ad",
      "createdAt": "2024-09-03T01:50:00Z",
      "author": "SoupMaster"
    },
    {
      "message": "Amazing deal! My new umbrella doubles as a Wi-Fi booster. Stay dry and connected wherever you go! ☂️ #Ad",
      "createdAt": "2024-09-03T02:00:00Z",
      "author": "TechUmbrella"
    },
    {
      "message": "BREAKING: Scientists confirm that singing to your houseplants makes them grow faster! 🌱🎶 #PlantPower #Science",
      "createdAt": "2024-09-02T10:00:00Z",
      "author": "GreenThumbGuru"
    },
    {
      "message": "Excited to announce my new line of gluten-free, dairy-free, and fun-free ice cream! 🍦 #HealthyLiving #GuiltFree",
      "createdAt": "2024-09-02T10:30:00Z",
      "author": "FoodieFad"
    },
    {
      "message": "Did you know? Drinking coffee upside down improves concentration by 200%! ☕️🔄 #LifeHacks #CoffeeLover",
      "createdAt": "2024-09-02T11:00:00Z",
      "author": "MindBender"
    },
    {
      "message": "My latest invention: a WiFi-connected toaster that tweets every time your toast is ready! 🍞📶 #SmartHome #TechGadgets",
      "createdAt": "2024-09-02T11:30:00Z",
      "author": "GadgetGuru"
    },
    {
      "message": "Get ready for the most luxurious sleep of your life with our silk pajamas woven from spider silk! 🕷️🛏️ #LuxuryLiving #SleepWell",
      "createdAt": "2024-09-02T12:00:00Z",
      "author": "SilkDreams"
    },
    {
      "message": "Fun fact: Eating chocolate before bed can actually improve your dreams. 🍫💤 #SweetDreams #ChocolateLover",
      "createdAt": "2024-09-02T12:30:00Z",
      "author": "DreamDoctor"
    },
    {
      "message": "Coming soon: A perfume that smells like freshly baked cookies! 🍪 #NewFragrance #Irresistible",
      "createdAt": "2024-09-02T13:00:00Z",
      "author": "ScentMaster"
    },
    {
      "message": "Alert! My self-tying shoelaces are finally here. Never bend down again! 👟 #TechFashion #LazyButAwesome",
      "createdAt": "2024-09-02T13:30:00Z",
      "author": "GadgetGuru"
    },
    {
      "message": "Scientists discover that laughing at cat videos increases lifespan by 2 years! 🐱😂 #HealthTip #LOL",
      "createdAt": "2024-09-02T14:00:00Z",
      "author": "PetLover"
    },
    {
      "message": "Introducing: Sunglasses that auto-adjust to your mood! 😎 #FashionForward #TechGadgets #SmartWear",
      "createdAt": "2024-09-02T14:30:00Z",
      "author": "GadgetGuru"
    },
    {
      "message": "New study reveals that dancing in the rain burns 500 calories per hour. 🌧️💃 #FitnessFun #BurnCalories",
      "createdAt": "2024-09-02T15:00:00Z",
      "author": "FitFreak"
    },
    {
      "message": "Tired of boring old water? Try my new line of sparkling kale water! 🥬💧 #HealthTrends #DrinkUp",
      "createdAt": "2024-09-02T15:30:00Z",
      "author": "FoodieFad"
    },
    {
      "message": "Behold! My cat-flavored ice cream. Finally, a treat for cat lovers! 🍦🐱 #Meowlicious #IceCream",
      "createdAt": "2024-09-02T16:00:00Z",
      "author": "PetLover"
    },
    {
      "message": "Breaking news: Dogs can now talk using our new doggy translator! 🐶🗣️ #PetTech #DogLovers",
      "createdAt": "2024-09-02T16:30:00Z",
      "author": "PetLover"
    },
    {
      "message": "Launching soon: Shoes that change color with your outfit! 👠 #FashionTech #WearableArt",
      "createdAt": "2024-09-02T17:00:00Z",
      "author": "Fashionista"
    },
    {
      "message": "It’s official! Singing in the shower improves vocal range by 50%. 🎤🚿 #SingItLoud #ShowerConcert",
      "createdAt": "2024-09-02T17:30:00Z",
      "author": "MusicMaestro"
    },
    {
      "message": "Finally! A toothbrush that tells you jokes while you brush. 🪥🤣 #LaughAndBrush #TechGadgets #TechSmile",
      "createdAt": "2024-09-02T18:00:00Z",
      "author": "GadgetGuru"
    },
    {
      "message": "Genius discovery: Watching reality TV makes you 10% more creative. 📺🎨 #CreativeBoost #GuiltyPleasure",
      "createdAt": "2024-09-02T18:30:00Z",
      "author": "MindBender"
    },
    {
      "message": "Unbelievable! My socks are now Bluetooth-enabled to track your steps. 🧦📱 #SmarTWear #TechFashion",
      "createdAt": "2024-09-02T19:00:00Z",
      "author": "Fashionista"
    },
    {
      "message": "Say goodbye to bad hair days with our self-styling hairbrush! 💇‍♀️ #GoodHairDay #HairGoals",
      "createdAt": "2024-09-02T19:30:00Z",
      "author": "BeautyGuru"
    },
    {
      "message": "Just tried my new air-fried water. Zero calories, 100% refreshing! 💦🍟 #HealthyEating #ZeroCalorie",
      "createdAt": "2024-09-02T20:00:00Z",
      "author": "FoodieFad"
    },
    {
      "message": "Spoiler alert: My next big thing is a pillow that massages your head while you sleep! 🛏️💆‍♂️ #SleepTech #DreamOn",
      "createdAt": "2024-09-02T20:30:00Z",
      "author": "PillowGuru"
    },
    {
      "message": "Big news! My tea kettle now sings opera when the water's boiling. 🎶☕️ #OperaKettle #KitchenTech",
      "createdAt": "2024-09-02T21:00:00Z",
      "author": "GadgetGuru"
    },
    {
      "message": "Get ready! My lipstick changes color based on your mood. 💄🎨 #BeautyTech #MoodLips",
      "createdAt": "2024-09-02T21:30:00Z",
      "author": "BeautyGuru"
    },
    {
      "message": "I just discovered that meditating while juggling increases your IQ by 30 points! 🤹‍♂️🧘‍♀️ #BrainBoost #MultiTasking",
      "createdAt": "2024-09-02T22:00:00Z",
      "author": "MindBender"
    }
  ];
}