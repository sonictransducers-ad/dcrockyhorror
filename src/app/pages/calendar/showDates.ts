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
// R***** => Raygun
// A** => Eden
// S****** => Stewart
// K*** => Kay Ray

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
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/878ab341-33e9-4157-b115-e10fa8b670e5"
    },
    "021024": {
      date: new Date('February 10, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/18814718-d144-45dd-a200-3967f5c88942"
    },
    "030824": {
      date: new Date('March 8, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
    },
    "030924": {
      date: new Date('March 9, 2024'),
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
      ticketLink: ""
    },
    "041324": {
      date: new Date('April 13, 2024'),
      time: "11:55pm",
      location: "Landmark's E Street Cinema",
      locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
      ticketLink: ""
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
