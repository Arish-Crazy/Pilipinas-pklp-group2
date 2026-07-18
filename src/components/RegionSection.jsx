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
          { label: 'Heograpiya', text: 'Matatarik na kabundukan na nililok ng mga ninuno upang maging hagdang-hagdang palayan.' },
          { label: 'Kultura', text: 'Mayaman sa tradisyon ng paghahabi, pag-uukit (gaya ng bulul), at sagradong ritwal ng mumbaki.' },
          { label: 'Ugnayan', text: 'Katutubong pagsasaka ang pangunahing kabuhayan na mahigpit na nakaangkla sa pangangalaga sa bundok at kalikasan.' },
        ],
      },
      {
        title: 'Kalinga',
        summary: 'Hilagang bahagi ng Cordillera na binabaybay ng makasaysayang Chico River.',
        region: 'Luzon',
        image: '/assets/kalinga-card.png',
        points: [
          { label: 'Heograpiya', text: 'Matatarik na kabundukan at malalakas na agos ng ilog na bumabalangkas sa pamayanan.' },
          { label: 'Kultura', text: 'Tanyag sa tradisyonal na sining ng "batok" (pagtato), katutubong paghahabi, at kulturang nakasandig sa kalikasan.' },
          { label: 'Ugnayan', text: 'Ang ilog at kabundukan ang pangunahing hiyas na nagpapalakas sa pagsasaka, sining, at turismo.' },
        ],
      },
      {
        title: 'Cordillera Administrative Region',
        summary: 'Binubuo ng Abra, Apayao, Benguet, Ifugao, Kalinga, at Mountain Province.',
        region: 'Luzon',
        image: '/assets/car-card.png',
        points: [
          { label: 'Heograpiya', text: 'Malalamig na kabundukan at tahanan ng iba’t ibang pangkat-etniko; mayaman sa yamang-mineral at likas na yaman.' },
          { label: 'Kultura', text: 'Mayamang pamana sa katutubong paghahabi, pag-uukit, tradisyonal na musika, at sayaw.' },
          { label: 'Ugnayan', text: 'Ang malamig na klima at matatayog na bundok ang nagpaunlad sa pagsasaka at ekoturismo.' },
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
        title: 'Cebu',
        summary: 'Isang mahaba at makitid na isla sa gitna ng Visayas; napapaligiran ng Kipot ng Cebu, Tanon, at Dagat Bohol.',
        region: 'Visayas',
        image: '/assets/panay-card.png',
        points: [
          { label: 'Heograpiya', text: 'Mabundok na kalupaan na may makikitid na kapatagan sa baybayin; mayaman sa mga yamang-mineral at napaliligiran ng saganang karagatan.' },
          { label: 'Kultura', text: 'Kilala sa pagdiriwang ng Sinulog at paggawa ng de-kalidad na gitara; tanyag sa pagkaing lechon at may malalim na pananampalatayang Katoliko (gaya ng Sto. Niño).' },
          { label: 'Ugnayan', text: 'Pinauunlad ng istratehikong lokasyon ang mabilis na kalakalan, turismo, pagmamanupaktura, at industriya ng pangingisda.' },
        ],
      },
      {
        title: 'Iloilo',
        summary: 'Sentro ng sining at kasaysayan sa timog-silangang Panay at tahanan ng mga Ilonggo',
        region: 'Visayas',
        image: '/assets/iloilo-card.png',
        points: [
          { label: 'Heograpiya', text: 'Malalawak na kapatagan at mayamang baybayin na magkatuwang na humuhubog sa kabuhayan ng mga mamamayan.' },
          { label: 'Kultura', text: 'Tanyag sa La Paz Batchoy at hablon; kilala rin sa makukulay na paraw (tradisyonal na bangkang-layag) at festival ng mabilisang paglalayag.' },
          { label: 'Ugnayan', text: 'Pinagbubuklod ng lupa at dagat ang masiglang pagsasaka, pangingisda, paghahabi, at turismo sa rehiyon.' },
        ],
      },
      {
        title: 'Aklan',
        summary: 'Hilagang-kanlurang Panay; pintuan patungong Boracay at pambansang duyan ng kulturang Aklanon.',
        region: 'Visayas',
        image: '/assets/aklan-card.png',
        points: [
          { label: 'Heograpiya', text: 'Baybayin at pantalan ang mahalagang bahagi ng paggalaw at kalakalan.' },
          { label: 'Kultura', text: 'Kilala sa masiglang Ati-Atihan Festival at sa maringal na sining ng paghahabi ng telang piña.' },
          { label: 'Ugnayan', text: 'Ang saganang baybayin ang siyang nagpapalakas sa pandaigdigang turismo, pangingisda, at lokal na industriya.' },
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
        title: 'Lanao del Sur',
        summary: 'Lalawigang nakasandig sa makasaysayang Lawa ng Lanao at tahanan ng mga Maranao."Tao ng Lawa."',
        region: 'Mindanao',
        image: '/assets/maranao-card.png',
        points: [
          { label: 'Heograpiya', text: 'Ang Lawa ng Lanao ang nagsisilbing puso at sentro ng kanilang pamumuhay, kultura, at paglalakbay.' },
          { label: 'Kultura', text: 'Tanyag sa arkitekturang torogan, sining ng okir, epikong Darangen, at sa tradisyonal na paghahabi ng makukulay na malong.' },
          { label: 'Ugnayan', text: 'Ang lawa ang nag-uugnay sa kanilang pangingisda, pagsasaka, paghahabi, at masiglang pakikipagkalakalan.' },
        ],
      },
      {
        title: 'Sulu',
        summary: 'Kapuluang nasa pagitan ng Mindanao at Borneo, at makasaysayang tahanan ng mga Tausug.',
        region: 'Mindanao',
        image: '/assets/sulu-card.png',
        points: [
          { label: 'Heograpiya', text: 'Estratehikong kapuluan na napaliligiran ng saganang karagatan at mga luntiang pulo.' },
          { label: 'Kultura', text: 'Mayaman sa tradisyonal na sayaw na Pangalay, sining ng pag-ukit, at natatanging paghahabi ng Pis Syabit.' },
          { label: 'Ugnayan', text: 'Karagatan ang nag-uugnay sa kanilang kabuhayan sa pamamagitan ng pangingisda, makasaysayang pangangalakal, at pagsisid ng perlas.' },
        ],
      },
      {
        title: 'Zamboanga',
        summary: 'Matatagpuan sa estratehikong Tangway ng Zamboanga; tahanan ng mga Chavacano, Subanen, Tausug, at Yakan.',
        region: 'Mindanao',
        image: '/assets/zamboanga-card.png',
        points: [
          { label: 'Heograpiya', text: 'Malawak na baybayin at tangway na nagsisilbing pintuan ng kalakalan sa timog na bahagi ng bansa.' },
          { label: 'Kultura', text: 'Kilala sa natatanging wikang Chavacano, paghahabi ng Yakan, makukulay na vinta, at sa tanyag na karera ng mga bangka—ang Regatta de Zamboanga.' },
          { label: 'Ugnayan', text: 'Ang mayamang baybayin ang nagpapalakas sa kanilang industriya ng pangingisda, pandaigdigang daungan, at kultural na turismo.' },
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
