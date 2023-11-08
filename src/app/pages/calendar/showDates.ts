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
  }
};

export interface Dates {
  [key: string]: Show;
}

export type Day = [number, [string, Show][]] | [number, []];

export type Week = [Day, Day, Day, Day, Day, Day, Day];

// **** EXAMPLE ****

// "101422": {
//   date: new Date('October 14, 2022'),
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
// R***** => Raygun
// A** => Eden
// S****** => Stewart
// K*** => Kay Ray

export const showDates: Dates = {
  "011323": {
    date: new Date('January 13, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
  },
  "011423": {
    date: new Date('January 14, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
  },
  "021023": {
    date: new Date('February 10, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
  },
  "021123": {
    date: new Date('February 11, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
  },
  "031023": {
    date: new Date('March 10, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/d0d63e51-9efe-459c-ab74-f9c640a613fe",
    cast: {
      frank: "Kelly",
      janet: "Kat",
      brad: "Oscar",
      riff: "Brad",
      magenta: "Caitlyn",
      columbia: "Damia",
      rocky: "Stewart",
      eddie: "Zoe",
      scott: "Bryan",
      crim: "Mike 2.0",
      trixie: "Emerson",
      lights: "Lee",
      stagemanager: "Relle",
      runningcrew: "Eden, Bryan, Emerson, Henry, Kay Ray, Lilka, Mark, Mike1, Nat, Paulina, Zoe"
    }
  },
  "031123": {
    date: new Date('March 11, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/5acb3054-695a-486c-91f6-eed17d4ff1a5",
    cast: {
      frank: "Eden",
      janet: "Kelly",
      brad: "Lilka",
      riff: "Mike 2.0",
      magenta: "Lindsay",
      columbia: "Lady Morgan",
      rocky: "Kat",
      eddie: "Mike1",
      scott: "Caitlyn",
      crim: "Geoff",
      trixie: "Stewart",
      lights: "Lee",
      stagemanager: "Damia",
      runningcrew: "Brad, Bryan, Mike1, Sam, Stewart"
    }
  },
  "041423": {
    date: new Date('April 14, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/647cdc33-da5b-4b1e-9e34-d48ea87134a8",
    cast: {
      frank: "Kat",
      janet: "Oscar",
      brad: "Brad",
      riff: "Damia",
      magenta: "Lilka",
      columbia: "Stewart",
      rocky: "The Mikes",
      eddie: "Nat",
      scott: "Francisco",
      crim: "Relle",
      trixie: "Kay Ray",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Eden, Bryan, Caitlyn, Kay Ray, Kelly, Nat, Sam"
    }
  },
  "041523": {
    date: new Date('April 15, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/cfbe9cbc-d23b-4a0f-bfac-9b9fc0466876",
    cast: {
      frank: "Lady Morgan",
      janet: "Oscar",
      brad: "Brad",
      riff: "Damia",
      magenta: "Raygun",
      columbia: "Stewart",
      rocky: "The Mikes",
      eddie: "Caitlyn",
      scott: "Francisco",
      crim: "Lindsay",
      trixie: "Shenanigans",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Eden, Bryan, Caitlyn, Kat, Kelly, Lilka"
    }
  },
  "051223": {
    date: new Date('May 12, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/edb0efe3-b148-47ad-8109-96bb772d7d96",
    cast: {
      frank: "Eden",
      janet: "NuAlli",
      brad: "Mike2",
      riff: "Damia",
      magenta: "Caitlyn",
      columbia: "Stewart",
      rocky: "Kat",
      eddie: "Nat",
      scott: "Nat",
      crim: "Lindsay",
      trixie: "Kay Ray",
      lights: "Lee and Waltz",
      stagemanager: "Leandra",
      runningcrew: "Gus, Mike1, Nat, Kay Ray, Alina, Edwin, Stephanie"
    }
  },
  "051323": {
    date: new Date('May 13, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/cf7b6053-07a7-4258-b695-1330edd937db",
    cast: {
      frank: "Eden",
      janet: "NuAlli",
      brad: "Oscar",
      riff: "Peaches",
      magenta: "Lindsay",
      columbia: "Lady Morgan",
      rocky: "Stewart",
      eddie: "Caitlyn",
      scott: "Damia",
      crim: "Geoff",
      trixie: "Lady Morgan",
      lights: "Lee and Waltz",
      stagemanager: "Relle",
      runningcrew: "Gus, Mike1, Damia, Leandra, Alina, Edwin, Stephanie"
    }
  },
  "060923": {
    date: new Date('June 9, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/80035c51-6a8e-4bef-adfb-b3673329492d",
    cast: {
      frank: "Kelly",
      janet: "nuAlli",
      brad: "Kat",
      riff: "Mike2",
      magenta: "Lilka",
      columbia: "Eden",
      rocky: "Stewart",
      eddie: "Mike1",
      scott: "Caitlyn",
      crim: "Lindsay",
      trixie: "TBD",
      lights: "Lee and Waltz",
      stagemanager: "Brad",
      runningcrew: "Alina, Augustus, Caitlyn, Cosmic, Emerson, Frankie, Mary, Mike1, Peaches, Sam"
      }
  },
  "061023": {
    date: new Date('June 10, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/c38f2034-bd02-4aab-8726-5565d4ec3be3",
    cast: {
      frank: "Eden",
      janet: "Raygun",
      brad: "Kat",
      riff: "Peaches",
      magenta: "Lindsay",
      columbia: "nuAlli",
      rocky: "Stewart",
      eddie: "Leandra",
      scott: "Caitlyn",
      crim: "Cosmic",
      trixie: "TBD",
      lights: "Lee and Waltz",
      stagemanager: "Damia",
      runningcrew: "Augustus, Avery, Caitlyn, Emerson, Frankie, Lilka, Mary, Mike1"
    }
  },
  "hedwig1": {
    date: new Date('June 16, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "hedwig2": {
    date: new Date('June 17, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "071423": {
    date: new Date('July 14, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/e4c0bd0d-4600-400c-a97e-0f0cea342367",
    cast: {
     frank: "Kat",
     janet: "Oscar",
     brad: "Mike2",
     riff: "Mary",
     magenta: "Raygun",
     columbia: "Eden",
     rocky: "Damia",
     eddie: "Lilka",
     scott: "Nat",
     crim: "Lindsay",
     trixie: "Kay Ray",
     lights: "Lee",
     stagemanager: "Relle",
     runningcrew: "Frankie, Kay Ray, Lilka, Mike1, Nat, Peaches, Stewart"
    }
  },
  "071523": {
    date: new Date('July 15, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/70dcb738-08ae-4b9b-8374-f59948ed68e2",
    cast: {
     frank: "Eden",
     janet: "nuAlli",
     brad: "Kat",
     riff: "Peaches",
     magenta: "Lilka",
     columbia: "Lady Morgan",
     rocky: "Stewart",
     eddie: "Mike1",
     scott: "Geoff",
     crim: "Lindsay",
     trixie: "Lady Morgan",
     lights: "Lee",
     stagemanager: "Damia",
     runningcrew: "Alina, Chance, Frankie, Geoff, Leandra, Mike1"
   }
  },
  "081123": {
    date: new Date('August 11, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/24b76a20-6967-46d0-a2a1-ced5100a953d",
    cast: {
      frank: "Eden",
      janet: "Raygun",
      brad: "Kat",
      riff: "Damia",
      magenta: "Kelly",
      columbia: "nuAlli",
      rocky: "Leandra",
      eddie: "Nat",
      scott: "Augustus",
      crim: "Lindsay",
      trixie: "Kay Ray",
      lights: "Lee",
      stagemanager: "Brad",
      runningcrew: "Augustus, Kay Ray, Lilka, Makenzie, Mike1, Mike2, Nat, Peaches, Stewart, Mary, Ruby"
    }
  },
  "081223": {
    date: new Date('August 12, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/d716ede8-652d-4ecf-ba92-fded4891cfa1",
    cast: {
      frank: "Giorgio (Guest)",
      janet: "Kelly",
      brad: "Kat",
      riff: "Brad",
      magenta: "Lindsay",
      columbia: "Eden",
      rocky: "Stewart",
      eddie: "Leandra",
      scott: "nuAlli",
      crim: "Mike1",
      trixie: "nuAlli",
      lights: "Lee",
      stagemanager: "Damia",
      runningcrew: "Leandra, Lilka, Makenzie, nuAlli, Peaches, Tatiana, Mary, Ruby"
    }
  },
  "090823": {
    date: new Date('September 8, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/0c01b447-3fa3-455d-9080-5db1ea2c3b0e",
    cast: {
           frank: "Kelly",
           janet: "nuAlli",
           brad: "Brad",
           riff: "Mike2",
           magenta: "Lindsay",
           columbia: "Eden",
           rocky: "Stewart",
           eddie: "Lilka",
           scott: "Caitlyn",
           crim: "Relle",
           trixie: "Stewart",
           lights: "Lee",
           stagemanager: "Damia",
           runningcrew: "Augustus, Caitlyn, Leandra, Lilka, Peaches, Zoe, Cas, Mike1.0"
        }
  },
  "090923": {
    date: new Date('September 9, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/a6507445-7de7-49c5-8e83-785da06cb466",
    cast: {
           frank: "Eden",
           janet: "Kelly",
           brad: "Lilka",
           riff: "Peaches",
           magenta: "Leandra",
           columbia: "Lady Morgan",
           rocky: "Kat",
           eddie: "Kay Ray",
           scott: "Augustus",
           crim: "Lindsay",
           trixie: "Emerson",
           lights: "Lee",
           stagemanager: "Brad",
           runningcrew: "Henry, Augustus, nuAlli, Stewart, Kay Ray, Stephanie, Zoe, Mike1, Mike2, Caitlyn, Cas"
        }
  },
  "101323": {
    date: new Date('October 13, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/a609ca9d-d873-47a6-8e38-7dced3c15968",
    cast: {
           frank: "Kelly",
           janet: "Raygun",
           brad: "Brad",
           riff: "Damia",
           magenta: "Lindsay",
           columbia: "nuAlli",
           rocky: "Kat",
           eddie: "Mike2",
           scott: "Lilka",
           crim: "Zoe",
           trixie: "Stewart",
           lights: "Lee",
           stagemanager: "Leandra",
           runningcrew: "Tatiana, Lilka, Peaches, Frankie, Makenzie, Stewart, Mike1, John"
        }
  },
  "101423": {
    date: new Date('October 14, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/ec997bd7-d083-48a0-97d1-4fbf68a411e4",
    cast: {
           frank: "Eden",
           janet: "nuAlli",
           brad: "Kat",
           riff: "Brad",
           magenta: "Lilka",
           columbia: "Stewart",
           rocky: "Kelly",
           eddie: "Mike1",
           scott: "Emerson",
           crim: "Lindsay",
           trixie: "Lady Morgan",
           lights: "Lee / Alina",
           stagemanager: "Damia",
           runningcrew: "Mike2, Tatiana, Zoe, Peaches, Kay Ray, Frankie, Makenzie, Mike1"
        }
  },
  "102723": {
    date: new Date('October 27, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/c2aeba7a-751e-4484-aa46-3c90cee3daa1",
    cast: {
      frank: "Eden",
      janet: "Raygun",
      brad: "Lilka",
      riff: "Mike2",
      magenta: "Leandra",
      columbia: "Lady Morgan",
      rocky: "Oscar",
      eddie: "Kay Ray",
      scott: "Caitlyn",
      crim: "Lindsay",
      trixie: "Kay Ray",
      lights: "Lee",
      stagemanager: "Damia",
      runningcrew: "Peaches, Zoe, Sam, Henry, Kay Ray, Tatiana, Caitlyn"
    }
  },
  "102823": {
    date: new Date('October 28, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/272903b4-1114-405c-a796-eeed0de28990",
    cast: {
      frank: "Eden",
      janet: "nuAlli",
      brad: "Leandra",
      riff: "Damia",
      magenta: "Caitlyn",
      columbia: "Stewart",
      rocky: "Mike2",
      eddie: "Lilka",
      scott: "Peaches",
      crim: "Zoe",
      trixie: "Stewart",
      lights: "Lee & Alina",
      stagemanager: "Lilka",
      runningcrew: "Peaches, Sam, Mike1, Henry"
    }
  },
  "102923": {
    date: new Date('October 29, 2023'),
    time: "8:00pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/47c6aff7-c6f4-4a27-b902-c2117901effc",
    doubleCast: true,
    cast: {
      frank: "Kelly, Eden",
      janet: "nuAlli, Emerson",
      brad: "Lilka",
      riff: "Mike2",
      magenta: "Lindsay",
      columbia: "Lady Morgan",
      rocky: "Stewart",
      eddie: "Mike1",
      scott: "Caitlyn",
      crim: "Zoe",
      trixie: "Emerson",
      lights: "Lee",
      stagemanager: "Brad",
      runningcrew: "Peaches, Tatiana, Damia, Caitlyn, Sam, Henry, Makenzie"
    }
  },
  "halloween": {
    date: new Date('October 31, 2023'),
    time: "8:00pm",
    location: "Lincoln Theatre",
    locationLink: "https://www.thelincolndc.com/e/the-rocky-horror-picture-show-48th-anniversary-spectacular-tour/",
    ticketLink: "https://www.thelincolndc.com/e/the-rocky-horror-picture-show-48th-anniversary-spectacular-tour/"
  },
  "111023": {
    date: new Date('November 10, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/89bf089b-e98a-42ee-a211-5cda035a5998",
    cast: {
      frank: "Kelly",
      janet: "Emerson",
      brad: "Brad",
      riff: "Mike2",
      magenta: "Lindsay",
      columbia: "Eden",
      rocky: "Stewart",
      eddie: "Lilka",
      scott: "Kay Ray",
      crim: "Nat",
      trixie: "Sam",
      lights: "Lee",
      stagemanager: "Damia",
      runningcrew: "Peaches, Lilka, Sam, Jack, Leandra, Henry, Makenzie, Kay Ray, Zoe, Caitlyn, Ciela, Tyler"
   }
  },
  "111123": {
    date: new Date('November 11, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/9e90a739-ced3-4210-ae83-54fa91ae8b21",
    cast: {
      frank: "Eden",
      janet: "nuAlli",
      brad: "Mike2",
      riff: "Damia",
      magenta: "Kelly",
      columbia: "Stewart",
      rocky: "Leandra",
      eddie: "Zoe",
      scott: "Makenzie",
      crim: "Lindsay",
      trixie: "Lady Morgan",
      lights: "Lee",
      stagemanager: "Brad",
      runningcrew: "Peaches, Lilka, Henry, Emerson, Makenzie, Zoe, Caitlyn, Tatiana, Ciela"
   }
  },
  "120823": {
    date: new Date('December 8, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/ef2c899e-015d-4fc2-bf66-ef400996028d"
  },
  "120923": {
    date: new Date('December 9, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/fbb047b5-ea26-446a-a4f3-2d149feab3c7"
  }
}
