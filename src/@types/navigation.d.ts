/* eslint-disable prettier/prettier */
export type AppRoutesProps = {
  Home: undefined;            // Dashboard: 3 next photo shoots, próximos ensaios, financial summary;
  NewPhotoshoot: undefined;   // New photo shoot. Fields: Date, client name, client phone, total amount, amount paid, place;
  Photoshoots: undefined;     // Old and upcoming clients. Data: Date, name, amount paid, pending amount, status;

  login: undefined;           // Auth route;
  home: undefined;            // Tab screens;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutesProps { }
  }
}
