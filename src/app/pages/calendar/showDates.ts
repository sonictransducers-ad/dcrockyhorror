export interface Show {
  date: Date;
  time: string;
  location: string;
  locationLink?: string;
  ticketLink?: string;
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
// E**** => Cosmic

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
      rocky: "Spencer",
      eddie: "Zoe",
      scott: "Bryan",
      crim: "Mike 2.0",
      trixie: "Emerson",
      lights: "Lee",
      stagemanager: "Relle",
      runningcrew: "Eden, Bryan, Emerson, Henry, Kate, Lilka, Mark, Mike1, Nat, Paulina, Zoe"
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
      trixie: "Spencer",
      lights: "Lee",
      stagemanager: "Damia",
      runningcrew: "Brad, Bryan, Mike1, Sam, Spencer"
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
      columbia: "Spencer",
      rocky: "The Mikes",
      eddie: "Nat",
      scott: "Francisco",
      crim: "Relle",
      trixie: "Kate",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Eden, Bryan, Caitlyn, Kate, Kelly, Nat, Sam"
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
      columbia: "Spencer",
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
      columbia: "Spencer",
      rocky: "Kat",
      eddie: "Nat",
      scott: "Nat",
      crim: "Lindsay",
      trixie: "Kate",
      lights: "Lee and Waltz",
      stagemanager: "Leandra",
      runningcrew: "Gus, Mike1, Nat, Kate, Alina, Edwin, Stephanie"
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
      rocky: "Spencer",
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
      rocky: "Spencer",
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
      rocky: "Spencer",
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
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/e4c0bd0d-4600-400c-a97e-0f0cea342367"
  },
  "071523": {
    date: new Date('July 15, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/70dcb738-08ae-4b9b-8374-f59948ed68e2"
  },
  "081123": {
    date: new Date('August 11, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/24b76a20-6967-46d0-a2a1-ced5100a953d"
  },
  "081223": {
    date: new Date('August 12, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/seats/eee2e699-1c65-471d-b808-c9fcacae2ec7/d716ede8-652d-4ecf-ba92-fded4891cfa1"
  },
  "090823": {
    date: new Date('September 8, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "090923": {
    date: new Date('September 9, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "101323": {
    date: new Date('October 13, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "101423": {
    date: new Date('October 14, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "111023": {
    date: new Date('November 10, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "111123": {
    date: new Date('November 11, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "120823": {
    date: new Date('December 8, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  },
  "120923": {
    date: new Date('December 9, 2023'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: ""
  }
}
