export interface Show {
  date: Date;
  time: string;
  location: string;
  locationLink?: string;
  ticketLink?: string;
  doubleCast?: boolean;
  cast?: {
    frank: string;
    janet: string;
    brad: string;
    riff: string;
    magenta: string;
    columbia: string;
    rocky: string;
    eddie: string;
    scott: string;
    crim: string;
    trixie: string;
    lights: string;
    stagemanager: string;
    runningcrew: string;
  };
}

export interface Dates {
  [key: string]: Show;
}

export type Day = [number, [string, Show][]] | [number, []];

export type Week = [Day, Day, Day, Day, Day, Day, Day];

// **** EXAMPLE ****

// "010824": {
//   date: new Date('January 8, 2024'),
//   time: "11:55pm",
//   location: "Landmark's E Street Cinema",
//   locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
//   ticketLink: ""
//   cast: {
//      frank: "",
//      janet: "",
//      brad: "",
//      riff: "",
//      magenta: "",
//      columbia: "",
//      rocky: "",
//      eddie: "",
//      scott: "",
//      crim: "",
//      trixie: "",
//      lights: "",
//      stagemanager: "",
//      runningcrew: ""
//   }
// }

// NOTE : not everyone uses their real name for the site. Check against bios before posting a cast list.
// D**** => Lady Morgan
// R***** => Roswell
// A** => Eden
// S****** => Stewart
// K*** => Kay Ray

// New recruits/returning shouldn't be included here

export const showDates: Dates = {
  '011224': {
    date: new Date('January 12, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/f5382d51-6b6d-41a3-9740-b261926ab845',
    cast: {
      frank: 'Eden',
      janet: 'Emerson',
      brad: 'Mike2',
      riff: 'Brad',
      magenta: 'Caitlyn',
      columbia: 'Damia',
      rocky: 'Kelly',
      eddie: 'Makenzie',
      scott: 'Sam',
      crim: 'Lindsay',
      trixie: 'Sam',
      lights: 'Lee',
      stagemanager: 'Leandra',
      runningcrew: 'Stewart, Peaches, Makenzie, Lilka, Sam, Henry',
    },
  },
  '011324': {
    date: new Date('January 13, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/f5382d51-6b6d-41a3-9740-b261926ab845',
    cast: {
      frank: 'Eden',
      janet: 'Kelly',
      brad: 'Lilka',
      riff: 'Brad',
      magenta: 'Lindsay',
      columbia: 'Damia',
      rocky: 'Oscar',
      eddie: 'Nat',
      scott: 'Jack',
      crim: 'Kay Ray',
      trixie: 'Lady Morgan',
      lights: 'Lee',
      stagemanager: 'Leandra',
      runningcrew: 'Stewart, Peaches, Makenzie, Lady Morgan, Nat, Jack',
    },
  },
  '020924': {
    date: new Date('February 9, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/878ab341-33e9-4157-b115-e10fa8b670e5',
    cast: {
      frank: 'nuAlli',
      janet: 'Roswell',
      brad: 'Leandra',
      riff: 'Damia',
      magenta: 'Caitlyn',
      columbia: 'Eden',
      rocky: 'Oscar',
      eddie: 'Kay Ray',
      scott: 'Petra',
      crim: 'Mike2',
      trixie: 'Emerson',
      lights: 'Lee and Stewart',
      stagemanager: 'Lilka',
      runningcrew:
        'Peaches, Jack, Makenzie, Henry, Emerson, Petra, Kay Ray, Nat',
    },
  },
  '021024': {
    date: new Date('February 10, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/18814718-d144-45dd-a200-3967f5c88942',
    cast: {
      frank: 'nuAlli',
      janet: 'RBG',
      brad: 'Leandra',
      riff: 'Zoe',
      magenta: 'Lindsay',
      columbia: 'Eden',
      rocky: 'Stewart',
      eddie: 'Makenzie',
      scott: 'Henry',
      crim: 'Geoff',
      trixie: 'Lady Morgan',
      lights: 'Lee',
      stagemanager: 'Damia',
      runningcrew: 'Peaches, Lilka, Emerson, Petra, Sam, Makenzie',
    },
  },
  '030824': {
    date: new Date('March 8, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/9d2705fe-055e-4aa5-8ab5-0d956f542ab7',
  },
  '030924': {
    date: new Date('March 9, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/5a90d856-7426-4053-b3a7-ea054159d637',
  },
  phantom29: {
    date: new Date('March 29, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink: '',
  },
  phantom30: {
    date: new Date('March 30, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink: '',
  },
  '041224': {
    date: new Date('April 12, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/032d5845-d462-4e66-8496-b17a1958ccc9',
    cast: {
      frank: 'Oscar',
      janet: 'Stewart',
      brad: 'Kelly',
      riff: 'Zoe',
      magenta: 'Damia',
      columbia: 'Nat',
      rocky: 'Kay Ray',
      eddie: 'Petra',
      scott: 'Harrison',
      crim: 'Brad',
      trixie: 'nuAlli',
      lights: 'Lee, Brian',
      stagemanager: 'Eden',
      runningcrew:
        'Lilka, Augustus, Becca, Jack, nuAlli, Mike2, Harrison, Peaches, Petra, Zoe',
    },
  },
  '041324': {
    date: new Date('April 13, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/cd2330d0-51de-4deb-8678-da4fd5cb71d4',
    cast: {
      frank: 'Oscar',
      janet: 'Stewart',
      brad: 'Kelly',
      riff: 'Jeff',
      magenta: 'Damia',
      columbia: 'Makenzie',
      rocky: 'Jack',
      eddie: 'Peaches',
      scott: 'Lindsay',
      crim: 'Brad',
      trixie: 'nuAlli',
      lights: 'Lee, Brian',
      stagemanager: 'Eden',
      runningcrew:
        'Lilka, Augustus, Geoff, nuAlli, Petra, Caitlyn, Becca, Chance, Lady Morgan, Lindsay, Peaches, Zoe',
    },
  },
  '051024': {
    date: new Date('May 10, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/6e8a7a22-ef21-43ab-91c8-02ce3ef85c7b',
    cast: {
      frank: 'Eden',
      janet: 'nuAlli',
      brad: 'Lilka',
      riff: 'Zoe',
      magenta: 'Kelly',
      columbia: 'Makenzie',
      rocky: 'Kay Ray',
      eddie: 'Nat',
      scott: 'Jack',
      crim: 'Lindsay',
      trixie: 'Kay Ray',
      lights: 'Lee, Brian',
      stagemanager: 'Brad',
      runningcrew:
        'Aster, Augustus, Edwin, Fatima, Jack, Nat, Peaches, Petra, Rachel, Relle, Tatiana',
    },
  },
  '051124': {
    date: new Date('May 11, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/4db559a8-f9ce-4970-8a6c-0692305bf129',
    cast: {
      frank: 'Oscar',
      janet: 'nuAlli',
      brad: 'Kelly',
      riff: 'Zoe',
      magenta: 'Lilka',
      columbia: 'Giorgio',
      rocky: 'Jack',
      eddie: 'Petra',
      scott: 'Rachel',
      crim: 'Brad',
      trixie: 'Lady Morgan',
      lights: 'Lee, Brian',
      stagemanager: 'Eden',
      runningcrew:
        'Aster, Augustus, Edwin, Fatima, Geoff, Makenzie, Peaches, Petra, Rachel, Sam, Tatiana',
    },
  },
  '061424': {
    date: new Date('June 14, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/login/eee2e699-1c65-471d-b808-c9fcacae2ec7/78e3c61e-0e89-44e3-ae1f-a230c8e621ee',
    cast: {
      frank: 'Kelly',
      janet: 'Rachel',
      brad: 'Oscar',
      riff: 'Mike',
      magenta: 'Caitlyn',
      columbia: 'Eden',
      rocky: 'Kay Ray',
      eddie: 'Nat',
      scott: 'Petra',
      crim: 'Manon',
      trixie: 'Stewart',
      lights: 'Lee, Stewart',
      stagemanager: 'Brad',
      runningcrew:
        'Aster, Augustus, Becca, Cate, Edwin, Lemon, Lindsay, Mitch, Nat, Panda, Petra, Tatiana',
    },
  },
  '061524': {
    date: new Date('June 15, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/ea8252b4-98bf-4424-b018-cf642f787baa',
    cast: {
      frank: 'Oscar',
      janet: 'Rachel',
      brad: 'Brad',
      riff: 'Damia',
      magenta: 'Lilka',
      columbia: 'Lady Morgan',
      rocky: 'Kelly',
      eddie: 'Petra',
      scott: 'Augustus',
      crim: 'Geoff',
      trixie: 'Lady Morgan',
      lights: 'Lee, Brian',
      stagemanager: 'Leandra',
      runningcrew:
        'Aster, Augustus, Becca, Cas, Cate, Edwin, Lemon, Manon, Panda, Petra',
    },
  },
  '071224': {
    date: new Date('July 12, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/a324c285-0473-4e96-a7f4-7819ba3a04c0',
    cast: {
      frank: 'NuAlli',
      janet: 'Rachel',
      brad: 'Oscar',
      riff: 'Mike',
      magenta: 'Lindsay',
      columbia: 'Eden',
      rocky: 'Stewart',
      eddie: 'Lilka',
      scott: 'Harrison',
      crim: 'Manon',
      trixie: 'Petra',
      lights: 'Lee, Brian, Cate',
      stagemanager: 'Damia',
      runningcrew:
        'Peaches, Sara, Aliye, Augustus, Petra, Lilka, Harrison, Edwin',
    },
  },
  '071324': {
    date: new Date('July 13, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/d2f3c30e-af5c-493d-97a7-00397053837f',
    cast: {
      frank: 'Leandra',
      janet: 'nuAlli',
      brad: 'Lilka',
      riff: 'Damia',
      magenta: 'Lindsay',
      columbia: 'Nat',
      rocky: 'Stewart',
      eddie: 'Kay Ray',
      scott: 'Augustus',
      crim: 'Manon',
      trixie: 'Lady Morgan',
      lights: 'Lee, Brian',
      stagemanager: 'Eden',
      runningcrew:
        'Peaches, Rachel, Aliye, Petra, Augustus, Kate, Lady Morgan, Cate',
    },
  },
  '080924': {
    date: new Date('August 9, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/1db9a114-3ec6-49f5-b56e-cdbe2c327c7a',
    cast: {
      frank: 'Leandra',
      janet: 'Rachel',
      brad: 'Oscar',
      riff: 'Mike',
      magenta: 'Lindsay',
      columbia: 'Eden',
      rocky: 'Stewart',
      eddie: 'Nat',
      scott: 'Petra',
      crim: 'Sara',
      trixie: 'Manon',
      lights: 'Lee, Cate, Brian',
      stagemanager: 'Lilka',
      runningcrew:
        'Damia, Kelsey, Peaches, Panda, Nat, Edwin, Aster, Petra, Manon, Becca, Lauryn',
    },
  },
  '081024': {
    date: new Date('August 10, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/0507830a-38e2-4031-a50a-ffaa42e74feb',
    cast: {
      frank: 'Scout (guest)',
      janet: 'Kelly',
      brad: 'Brad',
      riff: 'Damia',
      magenta: 'Lilka',
      columbia: 'Lady Morgan',
      rocky: 'Eric (guest)',
      eddie: 'Chaos (guest)',
      scott: 'Caitlyn',
      crim: 'Lindsay',
      trixie: 'Manon',
      lights: 'Lee, Brian',
      stagemanager: 'Eden',
      runningcrew:
        'Caitlyn, Oscar, Augustus, Cate, Becca, Aster, Stewart, Tatiana, Panda, Rachel, Peaches, Petra, Maria, Jack',
    },
  },
  '091324': {
    date: new Date('September 13, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/7db97537-74a5-4ca4-99bd-e1fe146b1865',
    cast: {
      frank: 'Oscar',
      janet: 'Rachel',
      brad: 'Lilka',
      riff: 'Brad',
      magenta: 'Leandra',
      columbia: 'Stewart',
      rocky: 'Jack',
      eddie: 'Mike',
      scott: 'nuAlli',
      crim: 'Sara',
      trixie: 'Manon',
      lights: 'Lee, Brian, Cate',
      stagemanager: 'Damia',
      runningcrew:
        'Eden, Aliye, Becca, Benji, Cris, Jack, Lauryn, Manon, Maria, Mike, nuAlli, Peaches, Wren',
    },
  },
  '091424': {
    date: new Date('September 14, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/f53f14ae-e357-43cc-981b-dbd8401b3284',
    cast: {
      frank: 'Eden',
      janet: 'nuAlli',
      brad: 'Oscar',
      riff: 'Petra',
      magenta: 'Leandra',
      columbia: 'Lady Morgan',
      rocky: 'Jack',
      eddie: 'Evan P',
      scott: 'Geoff',
      crim: 'Becca',
      trixie: 'Stewart',
      lights: 'Lee, Brian, Brad',
      stagemanager: 'Lilka',
      runningcrew: 'Aliye, Aster, Benji, Cate, Evan P, Sara, Stewart, Wren',
    },
  },
  '101124': {
    date: new Date('October 11, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/d95d0509-6281-4648-9f99-b6431ecf94c7',
  },
  '101224': {
    date: new Date('October 12, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/1a7755c5-2f00-46bf-b4d3-f1e2684e81b6',
  },
  '102524': {
    date: new Date('October 25, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/410705de-c64e-491c-a967-553271ba1580',
  },
  '102624': {
    date: new Date('October 26, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/abf70089-9a91-423a-b416-814136354e0f',
  },
  '102724': {
    date: new Date('October 27, 2024'),
    time: '8:00pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/b5176584-349b-42ce-bcff-8b59740605c0',
  },
  halloween: {
    date: new Date('October 31, 2024'),
    time: '8:00pm',
    location: 'The Lincoln Theatre',
    locationLink:
      'https://www.thelincolndc.com/e/rocky-horror-picture-show-the-49th-anniversary-spectaular-tour/',
    ticketLink:
      'https://www.thelincolndc.com/e/rocky-horror-picture-show-the-49th-anniversary-spectaular-tour/',
  },
  '110824': {
    date: new Date('November 8, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/13d7992b-d721-4617-97f6-ebef9963728a',
  },
  '110924': {
    date: new Date('November 9, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/93340cd0-8230-4e3f-bc0f-978b0f0faddd',
  },
  '121324': {
    date: new Date('December 13, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/06f82767-05c8-4815-b9ee-2ba7d9d6766e',
  },
  '121424': {
    date: new Date('December 14, 2024'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink:
      'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/006f7142-7d24-4679-8064-b42ccc183095',
  },
  '011025': {
    date: new Date('January 10, 2025'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/'
  },
  '011125': {
    date: new Date('January 11, 2025'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/b142e7ab-9ae8-4ea2-a182-1d8465396d67',
    cast: {
      frank: "nuAlli",
      janet: "RBG",
      brad: "Lilka",
      riff: "Mike",
      magenta: "Lindsay",
      columbia: "Lady Morgan",
      rocky: "Damia",
      eddie: "Cris",
      scott: "Rachel",
      crim: "Aliye",
      trixie: "Sasha",
      lights: "Lee, Brian",
      stagemanager: "Stewart",
      runningcrew: "Leandra, Wren, Peaches, Maria, Adrian, Sasha, Bray, Becca"
    }
  },
  '021425': {
    date: new Date('February 14, 2025'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/be3d5499-182d-4cfe-877b-0941fc9da23c',
    cast: {
      frank: "Leandra",
      janet: "Kelly",
      brad: "Mike",
      riff: "Petra",
      magenta: "Lindsay",
      columbia: "Eden",
      rocky: "Kay Ray",
      eddie: "Talia",
      scott: "Caitlyn",
      crim: "Nat",
      trixie: "Kay Ray",
      lights: "Lee, Brian",
      stagemanager: "Brad",
      runningcrew: "Adrian, Bethany, Bray, Caitlyn, Cate, Jack, MJ, Talia, Wren"
    }
  },
  '021525': {
    date: new Date('February 15, 2025'),
    time: '11:55pm',
    location: "Landmark's E Street Cinema",
    locationLink:
      'https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/45a131d0-988a-4971-a2c9-2e40413800e6',
    cast: {
      frank: "Kelly",
      janet: "Rachel",
      brad: "Brad",
      riff: "Mike",
      magenta: "Lindsay",
      columbia: "Damia",
      rocky: "Stewart",
      eddie: "Petra",
      scott: "Jack",
      crim: "TBD",
      trixie: "Sasha",
      lights: "Brian, Lee",
      stagemanager: "Leandra",
      runningcrew: "Adrian, Bethany, CG, Jack, Maria, MJ, Petra, Sasha, Wren, Cherry"
    }
  },
  '041125': {
    date: new Date('April 11, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/44fcfda4-eb38-4237-b22f-75894192c3b4',
  },
  '041225': {
    date: new Date('April 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/0b3ea879-d19b-48ed-a757-5cbde6f48abf',
  },
  '050925': {
    date: new Date('May 9, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/5c1dfb66-d04b-4b38-95c9-da9c7004941a',
  },
  '051025': {
    date: new Date('May 10, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/13badd1c-dbbc-4e4a-9130-429af9286347',
  },
  '061325': {
    date: new Date('June 13, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/4a10f4cb-5fb0-4ae4-a260-e57d925f9c01',
  },
  '061425': {
    date: new Date('June 14, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/cf3eb707-bfaf-42eb-8822-ee82a45b86d4',
  },
  '071125': {
    date: new Date('July 11, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/68d71253-d617-40e4-8317-150c96ec625e',
  },
  '071225': {
    date: new Date('July 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/dd85ec48-1a02-4591-ad8c-9bf289607ff4',
  },
  '080825': {
    date: new Date('August 08, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '080925': {
    date: new Date('August 09, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '091225': {
    date: new Date('September 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '091325': {
    date: new Date('September 13, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '101025': {
    date: new Date('October 10, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '101125': {
    date: new Date('October 11, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '111425': {
    date: new Date('November 14, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '111525': {
    date: new Date('November 15, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '121225': {
    date: new Date('December 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
  '121325': {
    date: new Date('December 13, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: '',
  },
};
