import LocationCard from './LocationCard.jsx'

const content = {
  luzon: {
    title: 'Luzon',
    description: 'Kabundukan, malamig na klima, at mga pamayanang may masiglang tradisyon sa sining at pagsasaka.',
    image: '/assets/car-card.png',
    items: [
      {
        title: 'Ifugao',
        summary: 'Nasa Cordillera Administrative Region; kilala sa Banaue Rice Terraces, kabundukan, at malamig na klima.',
        region: 'Luzon',
        image: '/assets/ifugao-card.png',
        points: [
          { label: 'Heograpiya', text: 'Mabundok ang lupain kaya umusbong ang hagdang-hagdang palayan.' },
          { label: 'Kultura', text: 'Kilala sa paghahabi, pag-uukit, at ritwal ng mumbaki; karamihan ay Kristiyano.' },
          { label: 'Ugnayan', text: 'Ang pagsasaka ang pangunahing kabuhayan na nakaangkla sa bundok.' },
        ],
      },
      {
        title: 'Kalinga',
        summary: 'Hilagang Cordillera na napapaligiran ng kabundukan at Chico River.',
        region: 'Luzon',
        image: '/assets/kalinga-card.png',
        points: [
          { label: 'Heograpiya', text: 'Kabundukan at ilog ang bumabalangkas sa pamayanan at tanawin.' },
          { label: 'Kultura', text: 'Kilala sa batok, paghahabi, musika, at sayaw; mula sa paniniwala sa kalikasan tungo sa Kristiyanismo.' },
          { label: 'Ugnayan', text: 'Ang kabundukan at ilog ang humubog sa pagsasaka, paghahabi, at turismo.' },
        ],
      },
      {
        title: 'Cordillera Administrative Region',
        summary: 'Binubuo ng Abra, Apayao, Benguet, Ifugao, Kalinga, at Mountain Province.',
        region: 'Luzon',
        image: '/assets/car-card.png',
        points: [
          { label: 'Heograpiya', text: 'Malalamig na kabundukan at sari-saring komunidad ang makikita rito.' },
          { label: 'Kultura', text: 'Mayamang tradisyon sa paghahabi, pag-uukit, musika, at sayaw.' },
          { label: 'Ugnayan', text: 'Dahil sa klima at bundok, umunlad ang pagsasaka at turismo.' },
        ],
      },
    ],
  },
  visayas: {
    title: 'Visayas',
    description: 'Mga islang napapalibutan ng dagat at kilala sa masiglang paghahabi, pagkain, at pangingisda.',
    image: '/assets/panay-card.png',
    items: [
      {
        title: 'Panay',
        summary: 'Ikaanim na pinakamalaking isla; napapaligiran ng Dagat Sibuyan, Visayan, at Sulu.',
        region: 'Visayas',
        image: '/assets/panay-card.png',
        points: [
          { label: 'Heograpiya', text: 'Matabang lupain at yamang-dagat ang pangunahing yaman ng isla.' },
          { label: 'Kultura', text: 'Kilala sa piña at hablon; karamihan ay Katoliko.' },
          { label: 'Ugnayan', text: 'Pinauunlad ng lupa at dagat ang pagsasaka, paghahabi, at pangingisda.' },
        ],
      },
      {
        title: 'Iloilo',
        summary: 'Matatagpuan sa timog at silangang Panay at tahanan ng mga Ilonggo.',
        region: 'Visayas',
        image: '/assets/iloilo-card.png',
        points: [
          { label: 'Heograpiya', text: 'Ang lupa at baybayin ay magkasamang humuhubog sa kabuhayan.' },
          { label: 'Kultura', text: 'Kilala sa La Paz Batchoy, Pancit Molo, hablon, at piña.' },
          { label: 'Ugnayan', text: 'Sumusuporta ang lupa at dagat sa pagsasaka, pangingisda, turismo, at paghahabi.' },
        ],
      },
      {
        title: 'Aklan',
        summary: 'Hilagang-kanlurang Panay; daan patungong Boracay at tahanan ng mga Aklanon.',
        region: 'Visayas',
        image: '/assets/aklan-card.png',
        points: [
          { label: 'Heograpiya', text: 'Baybayin at pantalan ang mahalagang bahagi ng paggalaw at kalakalan.' },
          { label: 'Kultura', text: 'Kilala sa Ati-Atihan Festival at telang piña.' },
          { label: 'Ugnayan', text: 'Ang baybayin ang nagpaunlad sa turismo, pangingisda, at paghahabi.' },
        ],
      },
    ],
  },
  mindanao: {
    title: 'Mindanao',
    description: 'Lawa, kapuluan, at tangway na may makukulay na tradisyon, kalakalan, at pamumuhay na nakaugnay sa tubig at lupa.',
    image: '/assets/maranao-card.png',
    items: [
      {
        title: 'Maranao',
        summary: 'Naninirahan sa paligid ng Lawa ng Lanao sa Lanao del Sur.',
        region: 'Mindanao',
        image: '/assets/maranao-card.png',
        points: [
          { label: 'Heograpiya', text: 'Ang lawa ang sentro ng komunidad, kabuhayan, at paglalakbay.' },
          { label: 'Kultura', text: 'Kilala sa okir, torogan, malong, at Darangen; karamihan ay Muslim.' },
          { label: 'Ugnayan', text: 'Ang lawa ang humubog sa pangingisda, pagsasaka, paghahabi, at pangangalakal.' },
        ],
      },
      {
        title: 'Sulu',
        summary: 'Kapuluang nasa pagitan ng Mindanao at Borneo at tahanan ng mga Tausug.',
        region: 'Mindanao',
        image: '/assets/sulu-card.png',
        points: [
          { label: 'Heograpiya', text: 'Napapaligiran ng dagat kaya likas ang ugnayan sa ibang pulo at pamilihan.' },
          { label: 'Kultura', text: 'Kilala sa makukulay na sayaw, musika, sining, at paghahabi.' },
          { label: 'Ugnayan', text: 'Ang dagat ang nagpaunlad sa pangingisda, kalakalan, at produktong yari sa dagat.' },
        ],
      },
      {
        title: 'Zamboanga',
        summary: 'Matatagpuan sa Tangway ng Zamboanga at tahanan ng Chavacano, Subanen, Tausug, at Yakan.',
        region: 'Mindanao',
        image: '/assets/zamboanga-card.png',
        points: [
          { label: 'Heograpiya', text: 'Baybayin at tangway ang nagbubukas ng ruta para sa paglalakbay at kalakalan.' },
          { label: 'Kultura', text: 'Kilala sa wikang Chavacano, vinta, at Yakan weaving.' },
          { label: 'Ugnayan', text: 'Ang baybayin ang nagpapaunlad sa pangingisda, turismo, pangangalakal, at paghahabi.' },
        ],
      },
    ],
  },
}

function RegionSection({ activeRegion }) {
  const section = content[activeRegion]

  return (
    <section id={activeRegion} className="scroll-mt-28 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-500">{section.title}</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">{section.title}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">{section.description}</p>
        </div>

        <div className="flex flex-col gap-5">
          {section.items.map((item) => (
            <LocationCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegionSection
