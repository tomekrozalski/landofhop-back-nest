const beverages = [
  // Added
  {
  name: 'Hazy APA',
  alcohol: '0% obj.',
  filtered: false,
  tale:
    'Spróbuj jak smakuje luz z American Pale Ale. Tradycyjnie warzone, nieklarowane, więc mgliste. Jasne, orzeźwiające, o wyczuwalnej goryczce. Wzbogacone cytrusowymi nutami pochodzącymi z wyselekcjonowanych odmian amerykańskich chmieli. Cornelius APA - mglisty z natury, wyrazisty w smaku - najsmaczniejszy, gdy przed otwarciem obrócisz puszkę na chwilę denkiem do góry.',
  barcode: '5905689310363',
  ingredients: {
    pl:
      'woda, słody: jęczmienny, pszeniczny, chmiele: Magnum, Cascade, Amarillo, Mosaic, drożdże',
    en:
      'water, malts: barley, wheat, hops: Magnum, Cascade, Amarillo, Mosaic, yests',
  },
  producer: 'Sulimar Sp. z o.o.',
  place: 'Piotrków Trybunalski',
  series: 'Cornelius',
  fermentation: 'top',
  pasteurisation: true,
  alcohol: 'do 0,5%',
  container: '500ml puszka srebrna 17cm',
  bitterness: 40,
  price: '4,40 zł',
  added: '27 czerwca 2020, 18:21',
},
// Added
{
  name: 'Hazy IPA',
  alcohol: '0% obj.',
  filtered: false,
  tale:
    'Spróbuj jak smakuje luz z India Pale Ale. Tradycyjnie warzone, nieklarowane, więc mgliste. Jasne, silniej chmielone, o intensywnej goryczce. Wzbogacone owocowymi nutami pochodzącymi z wyselekcjonowanych odmian chmieli. Cornelius IPA - mglisty z natury, wyrazisty w smaku - najsmaczniejszy, gdy przed otwarciem obrócisz puszkę na chwilę denkiem do góry.',
  barcode: '5905689310370',
  ingredients: {
    pl:
      'woda, słody: jęczmienny, pszeniczny, chmiele: Magnum, Cascade, Amarillo, Mosaic, drożdże',
    en:
      'water, malts: barley, wheat, hops: Magnum, Cascade, Amarillo, Mosaic, yests',
  },
  producer: 'Sulimar Sp. z o.o.',
  place: 'Piotrków Trybunalski',
  series: 'Cornelius',
  fermentation: 'top',
  pasteurisation: true,
  alcohol: 'do 0,5%',
  container: '500ml puszka srebrna 17cm',
  bitterness: 55,
  price: '4,45 zł',
  added: '27 czerwca 2020, 18:27',
  },
  // Added
  {
    name: 'Free Way',
    brand: 'AleBrowar',
    style: 'Non-Alcoholic IPA',
    barcode: '5907222039526',
    container: '500ml butelka brązowa 26cm',
    alcohol: 'mniej niż 0.5%',
    extract: '7% wag.',
    filtration: false,
    pasteurisation: true,
    place: 'Lębork',
    tale: {
      pl:
        'Kolarze i kolarzówki, nareszcie droga jest wolna - można wypłenić bidony aromatycznym i smakowitym, bezalkoholowym IPA i cisnąć przed siebie. Na mecie czeka Was nagroda, pełnia satysfakcji i czyste sumienie podczas kontroli antyprocentowej.',
      en:
        'Dear cyclists! Finally the road is free - you can fill the water bottles with aromatic and tasty, non-alcoholic IPA and run ahead. At the finish line there is a prize waiting, full satisfaction and a clear conscience during roadside checks',
    },
    ingredients: {
      pl:
        'woda, słody: Pale Ale, pszeniczny, żytni, Vicing Cara, płatki owsiane, herbata Sencha Earl Grey, chmiele: Cascade, Amarillo, Citra, Mosaic, drożdże',
      en:
        'water, malts: Pale Ale, wheat, rye, Viking Cara, flaked oats, tea sencha Earl Grey, hops: Cascade, Amarillo, Citra, Mosaic, yeast',
    },
    bitterness: '5/8',
    sweetness: '3/8',
    powerness: '1/8',
    price: '7,50 zł',
    added: '27 czerwca 2020, 18:38',
  },
  {
    name: 'Rowerzysta',
    brand: 'Browar Profesja',
    style: 'Sour Ale z rabarbarem',
    alcohol: '0.5%',
    extract: '7 Plato',
    temterature: '8-12',
    ingredients:
      'woda, słody: jęczmienny, pszeniczny, sok jabłkowy z soku zagęszczonego, sok z cytryny z soku zagęszczonego, sok rabarbarowy z soku zagęszczonego, aromat naturalny rabarbaru, barwnik naturalny, przeciwutleniacz (kwas askorbinowy), kwas (kwas cytrynowy), chmiel, drożdże WLS17 Sacharomyces Ludwigi, bakterie',
    filtered: false,
    pasteurisation: true,
    bitterness: '0.5/5',
    place: 'Wrocław',
    barcode: '5904730658843',
    container: 'butelka 500ml brązowa 25cm',
    price: '5.90 zł',
    added: '27 czerwca 2020, 18:44',
  },
  {
    name: 'Pomelo Nealko',
    brand: 'Litovel',
    container: 'butelka 500ml brązowa 26cm',
    alcohol: 'do 0.5%',
    barcode: '8593875517312',
    tale: 'zdjęcie',
    price: '3,15 zł',
    added: '27 czerwca 2020, 18:51',
  },
  {
    name: 'The Game #2',
    brand: 'Raduga',
    series: 'Egzotyczne klimaty',
    alcohol: 'poniżej 0.5%',
    style: 'Bezalkoholowe IPA Marakuja & Morela',
    bitterness: '2/10',
    barcode: '5902176770747',
    filtered: false,
    pasteurisation: true,
    container: '500ml puszka czarna',
    notes: 'A jest napisane butelka bezzwrotna',
    ingredients:
      'woda, słody: jęczmienny, pszeniczny, sok z marakui i moreli, chmiele, drożdże',
    contract: 'wyprodukowane w Polsce dla Raduga',
    price: '6.90 zł',
    added: '27 czerwca 2020, 18:57',
  },
  {
    name: 'Zenzero',
    brand: 'Browar Nepomucen',
    style: 'Lite Ginger Ale',
    alcohol: '0.5% obj.',
    tale:
      'Imbir im Bier, można rzec w jakimś nordyckim narzeczu, ale brzmi to ciężko. A nasze piwo to lekkie, niskoalkoholowe Ale. Dlatego sięgnęliśmy do włoskiego słownika i nazwaliśmy je Zenzero, i zawarliśmy w tym słowie wszystko co najlepsze w naszym piwie. Imbir, równowaga i prawie zero alkoholu.',
    barcode: '5907709756496',
    place: 'Jutrosin',
    bitterness: '0/6',
    ingredients:
      'woda, imbir, słody: jęczmienny, pszeniczny, cukier, laktoza, słód żytni, chmiel, drożdże górnej fermentacji z własnej propagacji',
    temperature: '8-10',
    filtration: false,
    pasteurisation: true,
    container: 'butelka brązowa 500ml 25cm',
    price: '6.60 zł',
    added: '27 czerwca 2020, 20:15',
  },
  {
    brand: 'Inne Beczki',
    name: '338 803',
    tale:
      "Nie ma Rak'n'rolla bez procentów. \n\n Do szczęścia potrzebujemy procentów, ale innych, niż myślisz. Przekaż 1% podatku na przejście przez raka. Przelej na zdrowie KRS 0000 338 803 \n\n Kupując, wspierasz Fundację Rak'n'Roll",
    place: 'Błonie',
    ingredients: 'woda, słód jęczmienny, chmiel, drożdże, sól',
    notes: '"Głowny piwowar Maciej Piaszczyński"',
    barcode: '5905669683685',
    contract: 'Browar Błonie',
    pasteurisation: true,
    filtration: false,
    alcohol: 'mniej niż 0.5%',
    price: '6.50 zł',
    added: '27 czerwca 2020, 20:21',
  },
  {
    name: 'Pilot',
    notes: 'Już jest w bazie, popraw tylko zdjęcie i dodaj cenę 6.50 zł ',
  },
  {
    brand: 'Piwo z Żuka',
    ingredients:
      'woda, słody: żytni, pilzneński, monachijski, chmiele: Zeus, Citra, Mosaic, Cascade, Centential, drożdże',
    alcohol: 'poniżej 0.5%',
    extract: '6.5%',
    pasteurisation: true,
    filtration: false,
    contract: 'Browar Wąsosz',
    place: 'Wąsosz, Konopiska',
    container: 'butelka 500ml brązowa 25cm',
    name: '0% Rye AIPA',
    barcode: '5902448151274',
    price: '6.00 zł',
    added: '27 czerwca 2020, 20:27',
  },
  // zakupy
  {
    brand: 'Browar Nepomucen',
    cooperation: 'Funky Fluid',
    extract: '16.5 stopni BLG',
    alkochol: '7%',
    name: "Let's Get Hazy, no 1",
    style: 'DDH NEIPA',
    tale: {
      pl:
        "Let's get crazy<skreślone> hazy to propozycja piwa na ciepłe miesiące, którą przygotowaliśmy we współpracy z browarem Funky Fluid. Oddaj się przygodzie pełnej ekstremalnych aromatów chmielu i cytrusowej soczystości.",
      en:
        "Let's get crazy<skreślone> hazy is a beer offer for warm months, which we have prepared in cooperation with the Funky Fluid brewery.\nTake on an adventure full of extreme hop aromas and citrus juiciness.",
    },
    barcode: '5907709756397',
    place: 'Jutrosin',
    container: 'puszka czarna 500ml',
    hoprate: '20g/l',
    bitterness: '2/6',
    ingredients: {
      pl:
        'woda, słód jęczmienny, słód pszeniczny, płatki owsiane, płatki pszenne, słód owsiany, płatki ryżowe, chmiel: Columbus, Centennial, Simcoe, Amarillo, Citra, drożdże: Hazy Daze (z własnej stacji propagacji)',
      en:
        'barley malt, wheat malt, oat flakes, wheat flakes, oat malt, rice flakes, hops: Columbus, Centennial, Simcoe, Amarillo, Citra, Hazy Daze yeast (from own propagation)',
    },
    temperature: '10-12',
    filtration: false,
    pasteurisation: true,
    height: 17,
    price: 12.5,
    added: '05.07.2020, 21:08',
  },
  {
    brand: 'Pinta',
    series: 'Pinta Deli Store #3',
    name: 'Pastry Sour. Cherry, Raspberry, Blackberry, Black Currant',
    barcode: '5908252864553',
    container: 'puszka czarna 500ml',
    height: 17,
    extract: '20 stopni BLG',
    alkochol: '5.6% obj.',
    tale: {
      pl:
        'W Pinta Deli Store #3 stawiamy na mocno owocowy skład. Ponadprzeciętną gładkość zapewnia dodatek laktozy i kremowa baza słodowa. Czeka na Ciebie prawdziwy, słodko-kwaśny koktajl!',
      en:
        'At Pinta Deli Store #3 we focus on a very fruity composition. Unbelievable smoothness is delivered by lactose and a creamy malt base. A real sweet and sour cocktail is waiting for you!',
    },
    pasteurisation: true,
    filtration: false,
    ingredients:
      'woda, słód jęczmienny pilzneński, płatki owsiane błyskawiczne, płatki pszenne błyskawiczne, laktoza, chmiel: Columbus (USA), sok z wiśni, sok z maliny, sok z jeżyny, sok z czarnej porzeczki, drożdże WLP066 London Fog',
    place: 'Wieprz',
    price: 11.3,
    added: '05.07.2020, 21:16',
  },
  {
    brand: 'Pinta',
    series: 'Pinta Deli Store #2',
    name: 'Pastry Sour. Peach, Apricot, Nectarine, Passion Fruit',
    barcode: '5908252864522',
    container: 'puszka czarna 500ml',
    height: 17,
    extract: '20 stopni BLG',
    alkochol: '5.6% obj.',
    tale: {
      pl:
        'Pinta Deli Store #2 to soczystość i wyjątkowa gładkość. Smak prawdziwych owoców i odrobina laktozy na kremowej bazie słodowej. Kompozycja, która skutecznie przekonuje do stylu Pastry Sour!',

      en:
        'Pinta Deli Store #2 stands for juiciness and exceptional smoothness. The taste of real fruits and a bit of lactose on a creamy malt base. A composition that strongly convinces to the Pastry Sour style!',
    },
    pasteurisation: true,
    filtration: false,
    ingredients:
      'woda, słód jęczmienny pilzneński, płatki owsiane błyskawiczne, płatki pszenne błyskawiczne, laktoza, chmiel: Columbus (USA), puree z brzoskwini, puree z moreli, puree z nektarynki, puree z marakui, drożdże WLP066 London Fog',
    place: 'Wieprz',
    price: 11.3,
    added: '05.07.2020, 21:20',
  },
  {
    brand: 'Browar Profesja',
    name: 'Kanclerz',
    style: 'Blackthorn Berliner Weisse (z tarniną)',
    alkochol: '3,6% obj.',
    extract: '9 stopni Plato',
    temperature: '8-12',
    ingredients:
      'woda, słód jęczmienny, słód pszeniczny, zagęsczony sok z tarniny, chmiele, drożdże Brettanomyces Bruxellensis Trius, bakterie Lactobacillus Brevis, Lactococcus Lactis, Lactobacillus Plantarum, Lactobacillus Delbrueckii',
    filtration: false,
    pasteurisation: true,
    bitterness: '0.5/5',
    place: 'Wrocław',
    barcode: '5904730658355',
    container: 'butelka brązowa 500ml',
    height: 25,
    price: 9.5,
    added: '05.07.2020, 22:06',
    tale: `
Smak: tarninowy, owocowy, kwaśny
Aromat: tarninowy, śliwkowy, kwaśny
Barwa: ciemnośliwkowa

Używamy wyłącznie płynnych drożdży własnej propagacji
Może zawierać naturalny osad drożdżowy
    `,
  },
  {
    brand: 'Trzech Kumpli',
    name: 'Gose',
    series: ['sour brews', 'kwaśne warki'],
    style: ['Gose, Mango & Passion Fruit', 'Gose, z mango i marakują'],
    ingredients: {
      pl:
        'woda, słód jęczmienny, płatki pszenne, słód pszeniczny, puree z mango, puree z marakui, chmiel, drożdże, bakterie kwasu mlekowego lactobacillus',
    },
    alcohol: '4.9% ABV',
    extract: '12.5% Plato',
    container: 'butelka 500ml brązowa',
    contract: 'Browar Zapanbrat',
    place: 'Żywiec',
    barcode: '5905669479752',
    tale: `
Gose to lekkie, pszeniczny, słono-kwaśne piwo, które narodziło się w Dolnej Saksonii i prawie wyginęło jako styl piwny na początku XX w. Dopiero u zarania dwudziestego pierwszego stulecia staraniem małych niemieckich browarów rzemieślniczych zaczęło wracać do żywych.

Historycznie Gose było piwem fermentacji spontanicznej, a więc przeprowadzanej przez dzikie drożdże. Legenda głosi, że swój słony smak zawdzięczało charakterycznemu profilowi wody rzeki Gose przepływającej przez miasto Goslar.

My postanowiliśmy pójść krok dalej i klasyczne Gose połączyliśmy z przecierem z mango oraz marakui. Otrzymaliśmy piwo wyjątkowo rześkie, o idealnym balansie między smakami słonym, kwaśnym, gorzkim i słodkim.
To pierwsze piwo kwaśne w naszym portfolio i doskonały start przygody z piwami kwaśnymi.

Nie wahaj się!
    `,
    fermentation: 'top',
    filtration: false,
    pasteurisation: true,
    height: 25,
    price: 10.2,
    added: '05.07.2020, 22:17',
  },
  {
    name: 'Mam co robić',
    brand: 'Browar zakładowy',
    style: 'Hazy Double IPA, Mosaic Ekuanot Rakau',
    filtration: false,
    pasteurisation: false,
    extract: '18% wag.',
    alcohol: '7.7% obj.',
    ingredients: 'woda, słód jęczmienny, płatki ryżowe, chmiel, drożdże',
    temperature: '6-8',
    place: 'Poniatowa',
    contrainer: 'butelka 500ml brązowa',
    barcode: '5907753170385',
    height: 25,
    price: 12.1,
    added: '05.07.2020, 22:22',
  },
  {
    name: 'Na pewno!',
    brand: 'Browar zakładowy',
    style: 'New England IPA, Citra Sabro',
    filtration: false,
    pasteurisation: false,
    extract: '16% wag.',
    alcohol: '6% obj.',
    ingredients:
      'woda, słód jęczmienny, płatki pszenne, płatki owsiane, chmiel, drożdże',
    temperature: '6-8',
    place: 'Poniatowa',
    contrainer: 'butelka 500ml brązowa',
    barcode: '5907753170392',
    height: 25,
    price: 11,
    added: '05.07.2020, 22:24',
  },
  {
    name: 'Cyrulik',
    brand: 'Browar Profesja',
    style: 'Smoked Berliner Weisse',
    alcohol: '3.6% obj.',
    extract: '9 stopni Plato',
    temperature: '8-12',
    tale: `
Smak: kwaśny, wędzony, owocowy
Aromat: wędzony, owocowy, kwaśny
Barwa: jasnosłomkowa

Używamy wyłącznie płynnych drożdży własnej propagacji
Może zawierać naturalny osad drożdżowy
    `,
    ingredients:
      'woda, słód jęczmienny wędzony bukiem, słód pszeniczny, chmiele, drożdże Grodziskie, bakterie Lactobacillus Brevis, Lactococcus Lactis, Lactobacillus Plantarum, Lactobacillus Delbrueckii',
    filtration: false,
    pasteurisation: true,
    bitterness: '0.5/5',
    place: 'Wrocław',
    barcode: '5904730658133',
    container: 'butelka brązowa 500ml',
    height: 25,
    price: 8.5,
    added: '05.07.2020, 22:31',
  },
  {
    name: 'We are not alone here!',
    style: 'Sweet & Sour Smoothie IPA',
    brand: 'Browar Nepomucen',
    temperature: '10-12',
    filtration: false,
    pasteurisation: true,
    bitterness: '1/6',
    extract: '18 stopni',
    alcohol: '7%',
    container: 'butelka 500ml brązowa',
    barcode: '5907709756281',
    ingredients:
      'woda, słód jęczmienny, słód pszeniczny, ananas, marakuja, płatki pszenne, płatki owsiane, laktoza, maltodekstryna, chmiele: odmiany amerykański, drożdże: górnej fermentacji',
    place: 'Jutrosin',
    height: 25,
    price: 11.2,
    added: '05.07.2020, 22:35',
  },
  {
    brand: 'AleBrowar',
    series: '#AleLab',
    name: '01A Fallen Down Horse',
    style: 'Hoppy Witbier',
    ingredients:
      'woda, słody: pilzneński (56,25%), pszeniczny (15,63%), Oat Malt (9,38%), płatki owsiane (11,25%), płatki pszenne (7,50%), chmiel: Hallertau Blanc, Chinook, Citra, Ekuanot, Citra, drożdże: London Fog',
    tale: `
Założenia. Opis Smaku.

Tradycyjne pszeniczne piwo belgijskie z dodatkiem kolendry i skórki gorzkiej pomarańczy z wyraźnym twistem w kierunku mocno chmielonych nowofalowych piw w stylu American IPA. To połączenie nadaje temu piwu mocny chmielowo cytrusowy charakter. Idealnie odświeżający w gorące dni.

Notatki

Pierwsze piwo w serii #AleLab, w której zapraszamy Ciebie do rozwijania naszych receptur. Oznacz swoją opinię, sugestię na Instagramie hashtagiem #AleLAB01A - a my weźmiemy ją pod uwagę przy kolejnej warce tego piwa.

EleEkipa

Zacieranie:
65 stopni C - 75 min
78 stopni C - 1 min
Gotowanie: 30 minut
    `,
    barcode: '5907771340654',
    container: 'puszka 500ml srebrna',
    alcohol: '5,3 obj.',
    extract: '14% wag.',
    filtration: false,
    pasteurisation: false,
    place: 'Lębork',
    price: 11.8,
    added: '06.07.2020, 11:17',
  },
  {
    brand: 'AleBrowar',
    series: '#AleLab',
    name: "02A It's not another cola",
    style: 'Nitro Cola Stout',
    ingredients:
      'woda, słody: Pale Ale (64,71%), Carapils (2.94%), pszeniczny (5.88%), wiedeński (5.88%), Carafa Special typ 3 (2.94%), Carafa Special typ 2 (2.94%), Simpsons Chocolate (2.94%), Laktoza (11,76%), orzeszki coli (3%), chmiel: Challenger, Fuggie, EKG, drożdże: S-04',
    tale: `
Założenia. Opis Smaku.

Nitro Stout - czyli stout wysycony mocno azotem, który nadaje ciemnym piwom gładkości i lekkości. A żeby było ciekawiej dodaliśmy jeszcze orzeszków koli, nadających charakterystyczny delikatny posmak. W założeniu ciemne, ale lekkie piwo.

Notatki

Drugie piwo w serii #AleLab, w którym bierzemy na warsztat wspólnie z Wami receptury naszych piw. Oznacz swoją opinię, sugestię na Instagramie hasztagiem #AleLAB02A - a my weźmiemy ją pod uwagę przy kolejnej warce tego piwa.

EleEkipa

Zacieranie:
68 stopni C - 30 min
72 stopni C - 10 min
72 stopni C - 10 min (słody ciemne)
78 stopni C - 1 min
Gotowanie: 80 minut
    `,
    barcode: '5907771340661',
    container: 'puszka 500ml srebrna',
    alcohol: '4,9 obj.',
    extract: '14% wag.',
    filtration: false,
    pasteurisation: false,
    place: 'Lębork',
    price: 10,
    added: '06.07.2020, 11:25',
  },
  {
    brand: 'Funky Fluid',
    name: 'Mango & Peach Party',
    style: 'Weizen',
    alcohol: '4.2% obj.',
    extract: '12 stopni BLG',
    barcode: '5907772092194',
    contract: 'Browar Zarzecze',
    container: 'puszka 500ml srebrna',
    tale: {
      pl:
        'Przy takiej ilości mango i brzoskwiń impreza musiała skończyć się piwem, który jest jak przecier owocowy w wersji dla dorosłych. A może ona dopiero się rozpoczęła?',
      en:
        'With such a great amount of mango and peaches, the party just had to end with beer which is like fruit puree for adults.\n Or maybe this party has just started?',
    },
    ingredients:
      'woda, słód jęczmienny, słód pszeniczny, płatki owsiane, płatki pszenne, mango, brzoskwinia, chmiele: Iunga, Marynka, drożdże',
    filtration: false,
    pasteurisation: true,
    temperature: '8-10',
    bitterness: '1/5',
    price: 10.9,
    added: '06.07.2020, 11:33',
  },
  {
    brand: 'AleBrowar',
    name: 'Rowing Jack',
    style: 'India Pale Ale',
    barcode: '5907771340609',
    container: 'puszka 500ml srebrna',
    alcohol: '6.2% obj.',
    extract: '16% wag.',
    filtration: false,
    pasteurisation: false,
    place: 'Lębork',
    tale: {
      pl:
        'Na rufę Santa Marii! Nareszcie piwo, które nie skiśnie w drodze do Indii! Tylko ekstra porcja chmielu mogła uchronić ten drogocenny ładunek przed humorami Neptuna i wściekle palącym słońcem. Spróbuj się oprzeć marynarzu!',
      en:
        "At Santa Maria's stern! Finally a beer that will not go off on the way to India! Only an extra portion of hops could protect this precious cargo against the moods of Neptune and the burning sun. Try to resist, sailor!",
    },
    ingredients: {
      pl:
        'woda, słody: Pale Ale, pszeniczny, wiedeński, Carapils, zakwaszający, chmiele: Simcoe, Chinook, Citra, Cascade, Palisade, drożdże: SafAle US-05',
      en:
        'water, malts: Pale Ale, wheat, Vienna, Carapils, acidulated, hops: Simcoe, Chinook, Citra, Cascade, Palisade, yeast Safale US-05',
    },
    bitterness: '5/8',
    sweetness: '5/8',
    powerness: '4/8',
    price: 12,
    added: '06.07.2020, 11:44',
  },
  {
    brand: 'Browar Stu Mostów',
    series: 'Art',
    name: '+36',
    style: 'Pastry Sour Ale. Pineapple Dragon Fruit',
    cooperation: 'Basqueland',
    barcode: '5907614681449',
    container: 'puszka 440ml czarna',
    height: 15,
    alcohol: '6.0% obj.',
    pasteurisation: true,
    filtration: false,
    place: 'Wrocław',
    contains: 'słód jęczmienny, pszeniczny, płatki owsiane, laktoza',
    pełniasłodowosc: 85,
    bitterness: 40,
    price: 11.5,
    added: '06.07.2020, 11:49',
  },
  {
    brand: 'Browar Nepomucen',
    name: 'Pijże, vol. 2',
    extract: 'BLG 13,5 stopnia',
    alcoholo: '4.4% obj.',
    style: 'DDH APA',
    cooperation: 'Weźże Krafta',
    tale: {
      pl:
        'Dokładnie po roku od uwarzenia pierwszej warki naszego Krafta Roku po raz kolejny spotykamy się z naszymi przyjaciółmi z krakowskiego multitap Weźże Krafta by stworzyć drugi rozdział naszego mętnego i soczystego American Pale Ale. Tym razem na chmielach: Sabro, Enigma i Citra',
      en:
        'Exactly a year after brewing our first draft of our Polish Kraft of the Year, we are once again meeting our friends from the Kraków multitap Weźże Krafta to create the second chapter of our hazy and juicy American Pale Ale. This time on hops: Sabro, Enigma and Citra.',
    },
    place: 'Jutrosin',
    container: 'puszka 500 ml czarna',
    barcode: '5907709756380',
    bitterness: '1,5/6',
    hoprate: '18g/l',
    ingredients: {
      pl:
        'woda, słód jęczmienny, płatki: owsiane, pszenne, chmiele: Sabro, Enigma, Citra, drożdże górnej fermentacji z własnej propagacji',
      en:
        'water, barley malt, oat flakes, wheat flakes, hops: Sabro, Enigma, Citra; top-fermenting yeast from own propagation',
    },
    temperature: '10-12',
    filtration: false,
    pasteurisation: true,
    price: 11.3,
    added: '06.07.2020, 11:59',
    height: 17,
  },
  {
    name: "Żywiec Białe bezalko",
    price: 4.20
  }
  {
    name: "Zlaty Bazant (do sprwadzenia)",
    style: "LeŻiak, Lager",
    extract: "12% wag.",
    tale: "Złociste piwo o pełnym słodowym charakterze, z delikatną goryczką. \n\n 100% słodu z lokalnego jęczmienia ze słonecznego regionu Hurbanovo.",
    container: "butelka zielona 500ml",
    pasteurisation: true,
    alcohol: '4.7% obj',
    ingredients: "woda, słód jęczmienny, ekstrakt z chmielu i chmiel",
    wyprodukowano: "Heineken Hurbanovo Słowacja, dystrybutor Żywiec",
    barcode: "8588000064014",
    height: 26,
    price: 3.99,
    added: '06.07.2020, 12:33',
  },
  {
    name: "Grolsch",
    style: "Premium Lager",
    barcode: "083741150012",
    place: "Razotajs, Enschede, Holandia",
    container: "puszka srebrna 500ml",
    height: 17,
    tale: {
      en: "400 years ago brewmaster Peter Kuijper pushed boundaries by combining two hops for a more vibrant taste and crisp finish. Back then a breakthrough, today still the perfect brew for you to enjoy.",

    },
    alcohol: "5% obj.",
    price: 4.49,
    added: '06.07.2020, 12:39',
  },
  {
    name: "Zatecky Svetly Lezak",
    barcode: "5900014004764",
    style: "Svetly Lezak",
    pasteurisation: true,
    alcohol: '5%',
    ingredients: "voda, jecny slad, horky chmel, zatecky aromaticky chmel. vareno pod dohledem sladka z pivovaru Zatecky pivovar, spol. s.r.o., v pivovaru v Polsku",
    ingredientspl: "woda, słod jęczmienny, chmiel goryczkowy, chmiel aromatyczny żatecki. wyprodukowane w Polsce",
    wyprodukowano: "Carlsberg Polska dystrybutor",
    container: "Puszka złota 500ml",
    price: 3.19,
    added: '06.07.2020, 12:44',
  },
  {
    name: "Staropramen",
    pasteurisation: true,
    contains: "słód jęczmienny",
    alcohol: '5% obj.',
    container: "puszka 500ml złota",
    wyprodukowano: "w UE",
    barcode: "5998817529409",
    price: 2.99,
    added: '06.07.2020, 12:46',
  }
];
