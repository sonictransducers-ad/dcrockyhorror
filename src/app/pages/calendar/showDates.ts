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
  "011224": {
      date: new Date('January 12, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/f5382d51-6b6d-41a3-9740-b261926ab845",
      cast: {
        frank: "Eden",
        janet: "Emerson",
        brad: "Mike2",
        riff: "Brad",
        magenta: "Caitlyn",
        columbia: "Damia",
        rocky: "Kelly",
        eddie: "Makenzie",
        scott: "Sam",
        crim: "Lindsay",
        trixie: "Sam",
        lights: "Lee",
        stagemanager: "Leandra",
        runningcrew: "Stewart, Peaches, Makenzie, Lilka, Sam, Henry"
      }
    },
    "011324": {
      date: new Date('January 13, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/f5382d51-6b6d-41a3-9740-b261926ab845",
      cast: {
        frank: "Eden",
        janet: "Kelly",
        brad: "Lilka",
        riff: "Brad",
        magenta: "Lindsay",
        columbia: "Damia",
        rocky: "Oscar",
        eddie: "Nat",
        scott: "Jack",
        crim: "Kay Ray",
        trixie: "Lady Morgan",
        lights: "Lee",
        stagemanager: "Leandra",
        runningcrew: "Stewart, Peaches, Makenzie, Lady Morgan, Nat, Jack"
      }
    },
    "020924": {
      date: new Date('February 9, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/878ab341-33e9-4157-b115-e10fa8b670e5",
      cast: {
        frank: "nuAlli",
        janet: "Roswell",
        brad: "Leandra",
        riff: "Damia",
        magenta: "Caitlyn",
        columbia: "Eden",
        rocky: "Oscar",
        eddie: "Kay Ray",
        scott: "Petra",
        crim: "Mike2",
        trixie: "Emerson",
        lights: "Lee and Stewart",
        stagemanager: "Lilka",
        runningcrew: "Peaches, Jack, Makenzie, Henry, Emerson, Petra, Kay Ray, Nat"
      }
    },
    "021024": {
      date: new Date('February 10, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/18814718-d144-45dd-a200-3967f5c88942",
      cast: {
        frank: "nuAlli",
        janet: "RBG",
        brad: "Leandra",
        riff: "Zoe",
        magenta: "Lindsay",
        columbia: "Eden",
        rocky: "Stewart",
        eddie: "Makenzie",
        scott: "Henry",
        crim: "Geoff",
        trixie: "Lady Morgan",
        lights: "Lee",
        stagemanager: "Damia",
        runningcrew: "Peaches, Lilka, Emerson, Petra, Sam, Makenzie"
      }
    },
    "030824": {
      date: new Date('March 8, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/9d2705fe-055e-4aa5-8ab5-0d956f542ab7"
    },
    "030924": {
      date: new Date('March 9, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/5a90d856-7426-4053-b3a7-ea054159d637"
    },
    "phantom29": {
      date: new Date('March 29, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "phantom30": {
      date: new Date('March 30, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "041224": {
      date: new Date('April 12, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/032d5845-d462-4e66-8496-b17a1958ccc9",
      cast: {
        frank: "Oscar",
        janet: "Stewart",
        brad: "Kelly",
        riff: "Zoe",
        magenta: "Damia",
        columbia: "Nat",
        rocky: "Kay Ray",
        eddie: "Petra",
        scott: "Harrison",
        crim: "Brad",
        trixie: "nuAlli",
        lights: "Lee, Brian",
        stagemanager: "Eden",
        runningcrew: "Lilka, Augustus, Becca, Jack, nuAlli, Mike2, Harrison, Peaches, Petra, Zoe"
      }
    },
    "041324": {
      date: new Date('April 13, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/cd2330d0-51de-4deb-8678-da4fd5cb71d4",
      cast: {
        frank: "Oscar",
        janet: "Stewart",
        brad: "Kelly",
        riff: "Jeff",
        magenta: "Damia",
        columbia: "Makenzie",
        rocky: "Jack",
        eddie: "Peaches",
        scott: "Lindsay",
        crim: "Brad",
        trixie: "nuAlli",
        lights: "Lee, Brian",
        stagemanager: "Eden",
        runningcrew: "Lilka, Augustus, Geoff, nuAlli, Petra, Caitlyn, Becca, Chance, Lady Morgan, Lindsay, Peaches, Zoe"
      }
    },
    "051024": {
      date: new Date('May 10, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "051124": {
      date: new Date('May 11, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "061424": {
      date: new Date('June 14, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "061524": {
      date: new Date('June 15, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "071224": {
      date: new Date('July 12, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "071324": {
      date: new Date('July 13, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "080924": {
      date: new Date('August 9, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "081024": {
      date: new Date('August 10, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "091324": {
      date: new Date('September 13, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "091424": {
      date: new Date('September 14, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "101124": {
      date: new Date('October 11, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "101224": {
      date: new Date('October 12, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "110824": {
      date: new Date('November 8, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "110924": {
      date: new Date('November 9, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "121324": {
      date: new Date('December 13, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "121424": {
      date: new Date('December 14, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    }
}
