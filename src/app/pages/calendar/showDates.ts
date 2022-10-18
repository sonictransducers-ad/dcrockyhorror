interface Show {
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

interface Dates {
  [key: string]: Show;
}

export const showDates: Dates = {
  "1014": {
    date: new Date('October 14, 2022'),
    time: "11:55pm",
    location: "Landmark's E Street Cinema",
    locationLink: "https://www.landmarktheatres.com/our-locations/x06oa-landmark-e-street-cinema/",
    ticketLink: "https://tickets.fandango.com/MobileExpress/Checkout?row_count=378081735&mid=146&chainCode=L&sdate=2022-10-28%2023:55&tid=AAREF",
    cast: {
      frank: "Ali",
      janet: "Reagan",
      brad: "Kat",
      riff: "Mary",
      magenta: "Kelly H",
      columbia: "Donna",
      rocky: "Damia",
      eddie: "Mike 1.0",
      scott: "Caitlyn",
      crim: "n/a",
      trixie: "Donna",
      lights: "Lee",
      stagemanager: "Relle",
      runningcrew: "Mike 1.0, Caitlyn, Brad, Grace, Conall, Spencer, Nat, Zoe, Emy, Henry, Lilka, Bryan, Haik"
    }
  }
}
