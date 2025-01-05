/**
 * This file contains global functions that are used in this exam. We deliberatly 
 * moved these to a separate file to keep your starter code clean, but it also
 * enables us to autotest your code with other datasets.
 */

/**
 * Function that fakes the fetching of data from a remote server.
 */
function fetchData() {
  return {
    name: "Öresund Bridge prices",
    validFrom: "2024-09-09",
    pricesPerCategory: [
      {
        category: "A",
        name: "Passenger car (max 6 meter)",
        oresundGo: 175,
        regularPrice: 455
      },
      {
        category: "B",
        name: "Passenger car (max 6 meter) with trailer (max 15m)",
        oresundGo: 350,
        regularPrice: 910
      },
      {
        category: "C",
        name: "Passenger car with trailer (over 15m)",
        oresundGo: 701.25,
        regularPrice: 1600
      },
      {
        category: "D",
        name: "Motorhome (6-10m)",
        oresundGo: 350,
        regularPrice: 910
      },
      {
        category: "E",
        name: "Motorhome (over 10m)",
        oresundGo: 701.25,
        regularPrice: 1600
      },
      {
        category: "F",
        name: "Motorhome (over 6m) with trailer",
        oresundGo: 701.25,
        regularPrice: 1600
      },
      {
        category: "G",
        name: "Minibus (6-10m)",
        oresundGo: 350,
        regularPrice: 910
      },
      {
        category: "H",
        name: "Motorcycle",
        oresundGo: 91,
        regularPrice: 230
      },
      {
        category: "I",
        name: "Van (6-9m)",
        oresundGo: 350,
        regularPrice: 910
      },
      {
        category: "J",
        name: "Van (over 9m)",
        oresundGo: 701.25,
        regularPrice: 1600
      },
    ]
  };
};