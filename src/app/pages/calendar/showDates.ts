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

export const showDates: Dates = {
  "021122": {
    date: new Date('February 11, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "021222": {
    date: new Date('February 12, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "031122": {
    date: new Date('March 11, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "031222": {
    date: new Date('March 12, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "051322": {
    date: new Date('May 13, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "051422": {
    date: new Date('May 14, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "061022": {
    date: new Date('June 10, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "061122": {
    date: new Date('June 11, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "070822": {
    date: new Date('July 8, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "070922": {
    date: new Date('July 9, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "081222": {
    date: new Date('August 12, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "081322": {
    date: new Date('August 13, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "090922": {
    date: new Date('September 9, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "091022": {
    date: new Date('September 10, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/"
  },
  "101422": {
    date: new Date('October 14, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    cast: {
      frank: "Ali",
      janet: "Reagan",
      brad: "Kat",
      riff: "Mike 2.0",
      magenta: "Lindsay",
      columbia: "Damia",
      rocky: "Oscar",
      eddie: "Lilka",
      scott: "nuAlli",
      crim: "n/a",
      trixie: "nuAlli",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Bryan, Caitlyn, Emy, Henry, Lilka, nuAlli, Spencer"
    }
  },
  "101522": {
    date: new Date('October 15, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    cast: {
      frank: "Ali",
      janet: "nuAlli",
      brad: "Kat",
      riff: "Mike 2.0",
      magenta: "Lindsay",
      columbia: "Donna",
      rocky: "Damia",
      eddie: "Lilka",
      scott: "Caitlyn",
      crim: "Geoff",
      trixie: "Donna",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Bryan, Caitlyn, Emy, Henry, Lilka, Spencer"
    }
  },
  "102822": {
    date: new Date('October 28, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://tickets.fandango.com/MobileExpress/TicketBoxOffice?mid=146&tid=AAREF&chainCode=L&penumber=115",
    cast: {
      frank: "Ali",
      janet: "nuAlli",
      brad: "Oscar",
      riff: "Brad",
      magenta: "Kelly",
      columbia: "Damia",
      rocky: "Kat",
      eddie: "Mike 2.0",
      scott: "Caitlyn",
      crim: "Leandra",
      trixie: "Donna",
      lights: "Lee",
      stagemanager: "Relle",
      runningcrew: "Bryan, Caitlyn, Emerson, Lilka, Mike 1, Mike 2, Zoe"
    }
  },
  "102922": {
    date: new Date('October 29, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://tickets.fandango.com/MobileExpress/Checkout?row_count=382010152&mid=146&chainCode=L&sdate=2022-10-29%2023:55&tid=AAREF",
    cast: {
      frank: "Ali",
      janet: "Mike 1.0",
      brad: "Kat",
      riff: "Brad",
      magenta: "Lindsay",
      columbia: "Damia",
      rocky: "Kelly",
      eddie: "Lilka",
      scott: "Caitlyn",
      crim: "Mike 2.0",
      trixie: "Emerson",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Bryan, Caitlyn, Emerson, Lilka"
    }
  },
  "103022": {
    date: new Date('October 30, 2022'),
    time: "8:00pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://tickets.fandango.com/MobileExpress/Checkout?row_count=378081703&mid=146&chainCode=L&sdate=2022-10-30%2020:00&tid=AAREF",
    cast: {
      frank: "Ali",
      janet: "Kelly",
      brad: "Kat",
      riff: "Mike 2.0",
      magenta: "Lindsay",
      columbia: "Donna",
      rocky: "Oscar",
      eddie: "Mike 1.0",
      scott: "Damia",
      crim: "Caitlyn",
      trixie: "nuAlli",
      lights: "Lee",
      stagemanager: "Leandra",
      runningcrew: "Brad, Conall, Damia, Emerson, Henry, Mike1, nuAlli, Zoe"
    }
  },
  "111122": {
    date: new Date('November 11, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/a54dc2ca-4610-4a92-ad3e-9d6c32ad2934",
    cast: {
      frank: "Ali",
      janet: "Raygun",
      brad: "Oscar",
      riff: "Mike 2.0",
      magenta: "Lindsay",
      columbia: "Donna",
      rocky: "Kat",
      eddie: "Lilka",
      scott: "Lilka",
      crim: "Zoe",
      trixie: "Spencer",
      lights: "Lee",
      stagemanager: "Relle",
      runningcrew: "Bryan, Henry, Leandra, Lilka, Spencer, Alex, Mercer, Kara"
    }
  },
  "111222": {
    date: new Date('November 12, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/4469e8c9-bce6-47f0-a9fd-c3dcb013d640",
    cast: {
      frank: "Leandra",
      janet: "Raygun",
      brad: "Kat",
      riff: "Brad",
      magenta: "Kelly",
      columbia: "nuAlli",
      rocky: "Damia",
      eddie: "Mike 2.0",
      scott: "Henry",
      crim: "Geoff",
      trixie: "Emerson",
      lights: "Lee",
      stagemanager: "Ali",
      runningcrew: "Bryan, Emerson Henry, Lilka, Mike2, Spencer, Oscar, Alex"
    }
  },
  "120922": {
    date: new Date('December 9, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/66e1d731-7ac6-4a12-bc34-2a87dee94435"
  },
  "121022": {
    date: new Date('December 10, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://booking.landmarktheatres.com/startticketing/eee2e699-1c65-471d-b808-c9fcacae2ec7/6a77eba5-4d61-49ac-add2-a007ac0e27a3"
  },
}
