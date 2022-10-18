interface Show {
  date: String
};

interface Dates {
  [key: string]: Show;
}

export const showDates: Dates = {
  "1014": {
    date: "October 14th"
  }
}
