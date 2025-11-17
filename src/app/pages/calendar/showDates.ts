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
// K*** => Kay Ray
// S**** => Crowley 
// W*** => Sewrenity

// New recruits/returning shouldn't be included here

export const showDates: Dates = {
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
  halloween: {
    date: new Date('October 31, 2024'),
    time: '8:00pm',
    location: 'The Lincoln Theatre',
    locationLink:
      'https://www.thelincolndc.com/e/rocky-horror-picture-show-the-49th-anniversary-spectaular-tour/',
    ticketLink:
      'https://www.thelincolndc.com/e/rocky-horror-picture-show-the-49th-anniversary-spectaular-tour/',
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
      runningcrew: "Leandra, Sewrenity, Peaches, Maria, Adrian, Sasha, Bray, Becca"
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
      runningcrew: "Adrian, Bethany, Bray, Caitlyn, Cate, Jack, MJ, Talia, Sewrenity"
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
      runningcrew: "Adrian, Bethany, CG, Jack, Maria, MJ, Petra, Sasha, Sewrenity, Cherry"
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
    cast: {
      frank: "Nat",
      janet: "Oscar",
      brad: "Petra",
      riff: "Mike2",
      magenta: "Cherry",
      columbia: "Eden",
      rocky: "Kay Ray",
      eddie: "Sara",
      scott: "Lilka",
      crim: "Lindsay",
      trixie: "Cris",
      lights: "Lee, Brian, Cate",
      stagemanager: "Damia",
      runningcrew: "Axel, Cris, Lilka, Lyla, Peaches, Rachel, Sara, Tori, Sewrenity"
    }
  },
  '071225': {
    date: new Date('July 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/dd85ec48-1a02-4591-ad8c-9bf289607ff4',
    cast: {
      frank: "nuAlli",
      janet: "Rachel",
      brad: "Kelly",
      riff: "Kay Ray",
      magenta: "Sewrenity",
      columbia: "Lady Morgan",
      rocky: "Oscar",
      eddie: "Petra",
      scott: "Lindsay",
      crim: "Brad",
      trixie: "Petra",
      lights: "Lee, Brian",
      stagemanager: "Eden",
      runningcrew: "Axel, CG, Cherry, Damia, Geoff, Lilka, Lyla, Maria, Mike2, Peaches, Petra"
    }
  },
  '080825': {
    date: new Date('August 08, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/eb2247d0-0fd1-4582-9cd9-ed9552695d6c',
    cast: {
      frank: "Rachel",
      janet: "Oscar",
      brad: "Leandra",
      riff: "Petra",
      magenta: "Sewrenity",
      columbia: "Eden",
      rocky: "Jack",
      eddie: "Cris",
      scott: "Lindsay",
      crim: "Kelly",
      trixie: "Cris",
      lights: "Lee, Brian, Cate",
      stagemanager: "Brad",
      runningcrew: "Axel, Cherry, Cris, Lyla, Nature, Peaches, Talia, Tori"
    }
  },
  '080925': {
    date: new Date('August 09, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/ec693eaf-f515-4e67-a2ba-85a8996dd6ea',
    cast: {
      frank: "Eden",
      janet: "Rachel",
      brad: "Petra",
      riff: "Damia",
      magenta: "Lindsay",
      columbia: "Lady Morgan",
      rocky: "Oscar",
      eddie: "Cate",
      scott: "Tori",
      crim: "TBD",
      trixie: "CG",
      lights: "Lee, Brian",
      stagemanager: "Leandra",
      runningcrew: "Cate, CG, Cherry, Lyla, Peaches, Talia, Tori, Sewrenity, Sam"
    }
  },
  '091225': {
    date: new Date('September 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/fd6ed11e-b172-4518-abbf-3043ddca16dd',
  },
  '091325': {
    date: new Date('September 13, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/89115133-aa4a-4383-838a-7a58267c2596',
  },
  '100225': {
    date: new Date('October 2, 2025'),
    time: '8:00pm',
    location: "Warner Theatre",
    locationLink: 'https://www.warnertheatredc.com/visit',
    ticketLink: 'https://www.ticketmaster.com/the-rocky-horror-picture-show-50th-washington-district-of-columbia-10-02-2025/event/15006296AFA62B93'
  },
  '101025': {
    date: new Date('October 10, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/e7069d51-9977-469e-93b7-f358cbf40176',
    cast: {
      frank: "Oscar",
      janet: "Leandra",
      brad: "Lilka",
      riff: "Damia",
      magenta: "Sewrenity",
      columbia: "Jeff",
      rocky: "Jack",
      eddie: "Sara",
      scott: "Lindsay",
      crim: "Brad",
      trixie: "Cris",
      lights: "Lee, Eden",
      stagemanager: "Kelly",
      runningcrew: "CG, Cris, Emma, Hannah, Lindsay, Marco, Mariah, Maryjo, Peaches, Sara, Virgil, Cherry"
    }
  },
  '101125': {
    date: new Date('October 11, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/1fad6a17-2c0d-4a1e-9446-b4014126e591',
    cast: {
      frank: "Jeff",
      janet: "NuAlli",
      brad: "Petra",
      riff: "Brad",
      magenta: "Lilka",
      columbia: "Lady Morgan",
      rocky: "Kay Ray",
      eddie: "Nature",
      scott: "Geoff",
      crim: "Kelly",
      trixie: "Oscar and Leandra",
      lights: "Lee, Brian",
      stagemanager: "Damia",
      runningcrew: "Eden, CG, Cris, Emma, Geoff, Leandra, Lyla, Marco, Nature, Oscar, Peaches, Samantha, Silva, Tyler, Sewrenity, Cherry"
    }
  },
  '102425': {
    date: new Date('October 24, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/baa56317-23f0-4106-b273-435bbfb80e7c',
    cast: {
      frank: "Nature",
      janet: "Rachel",
      brad: "Oscar",
      riff: "Damia",
      magenta: "Lindsay",
      columbia: "Giorgio",
      rocky: "Eden",
      eddie: "Leandra",
      scott: "Lilka",
      crim: "Sara",
      trixie: "Cris",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "CG, Cherry, Cris, Hannah, Jack, Lilka, Marco, Talia, Virgil, Sewrenity"
    }
  },
  '102525': {
    date: new Date('October 25, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/12e19986-844a-40d5-a677-84d642409783',
    cast: {
      frank: "Eden",
      janet: "Rachel",
      brad: "Lilka",
      riff: "Leandra",
      magenta: "Cherry",
      columbia: "Lady Morgan",
      rocky: "Jack",
      eddie: "Talia",
      scott: "Virgil",
      crim: "Marco",
      trixie: "Lady Morgan",
      lights: "Lee",
      stagemanager: "Damia",
      runningcrew: "Cris, Hannah, Marco, Maslin, Talia, Tori, Virgil, Sewrenity"
    }
  },
  '103125': {
    date: new Date('October 31, 2025'),
    time: '8:00pm',
    location: "Lincoln Theater",
    locationLink: 'https://www.thelincolndc.com/e/the-rocky-horror-picture-show/',
    ticketLink: 'https://www.ticketmaster.com/the-rocky-horror-picture-show-washington-district-of-columbia-10-31-2025/event/15006295B2FD7751',
    cast: {
      frank: "Rachel",
      janet: "Leandra",
      brad: "Oscar",
      riff: "Damia",
      magenta: "Sewrenity",
      columbia: "Lady Morgan",
      rocky: "Eden",
      eddie: "Sara",
      scott: "Virgil",
      crim: "Samantha",
      trixie: "Cris",
      lights: "",
      stagemanager: "Lee",
      runningcrew: "Cate, Cherry, Cris, Hannah, Marco, Mariah, Molly, Sara, Tyler, Virgil"
    }
  },
  '111425': {
    date: new Date('November 14, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/4d11dbda-d2c8-4e2e-8b43-6898b331ee99',
    cast: {
      frank: "Rachel",
      janet: "Talia",
      brad: "Jeff",
      riff: "Brad",
      magenta: "Lindsay",
      columbia: "Eden",
      rocky: "Oscar",
      eddie: "Cris",
      scott: "Tori",
      crim: "Marco",
      trixie: "Hannah",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Cherry, Cris, Emma, Hannah, Lilka, Peaches, Sara, Silva, Tori"
    }
  },
  '111525': {
    date: new Date('November 15, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/startticketing/993e2dc1-6712-4dfd-b72b-afb69e2c9027/6cad59db-aa94-4b6f-820b-685e1337502e',
    cast: {
      frank: "Rachel",
      janet: "Talia",
      brad: "Cris",
      riff: "Petra",
      magenta: "Lilka",
      columbia: "Lady Morgan",
      rocky: "Leandra",
      eddie: "Nature",
      scott: "Lindsay",
      crim: "CG",
      trixie: "Cherry",
      lights: "Lee, Brian",
      stagemanager: "Eden",
      runningcrew: "Cherry, Emma, Hannah, Lindsay, Marco, Nature, Peaches, Silva, Tori"
    }
  },
  '121225': {
    date: new Date('December 12, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/launch/ticketing/aba2b2e7-b064-5978-822f-c3f00db8bc27',
  },
  '121325': {
    date: new Date('December 13, 2025'),
    time: '10:30pm',
    location: "Landmark Bethesda Row Cinema",
    locationLink: 'https://www.landmarktheatres.com/our-locations/x06c1-landmark-bethesda-row-cinema/',
    ticketLink: 'https://booking.landmarktheatres.com/launch/ticketing/f1f2d8b4-75e6-5c02-a091-fc56f10ab156',
  },
};
