// Fonte: <https://restcountries.com/v2/all>
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

//1 const expectedResult = 120797034;
const getPopulation = () => countries.reduce((totalPopulation, country) => totalPopulation + country.population, 0);

//2 const expectedResult = 4311757;
const getTotalArea = () => countries.reduce((totalPopulation, country) => totalPopulation + country.area, 0);

//3 const expectedResult = {
//    name: 'American Samoa',
//    region: 'Oceania',
//    currencies: [{ code: 'USD', name: 'United States Dollar' }],
//    capital: 'Pago Pago',
//    population: 55197,
//    area: 199
//  }
const longestName = () => countries.reduce((longestName, country) => longestName.name.length > country.name.length ? longestName : country, countries[0]);

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
//4 const expectedResult = 20;
const countA = () => {
  // retorne seu código aqui
  const letters = names.join('').toLowerCase().split('');
  return letters.reduce((totalLettersA, letter) => letter === 'a' ? totalLettersA += 1 : totalLettersA, 0);
}

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
//5 const expectedResult = [
// { name: 'Pedro Henrique', average: 7.8 },
// { name: 'Miguel', average: 9.2 },
// { name: 'Maria Clara', average: 8.8 },
//];
const studentAverage = () => {
  // retorne seu código aqui
  return students.map((student, index) => {
    let average = grades[index].reduce((a, b) => a + b, 0);
    average = average / grades[index].length;
    average.toFixed(2);
    return { name: student, average: average };
  })
}
