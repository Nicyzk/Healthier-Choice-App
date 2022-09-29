const drinks = [
    {
      id: 1,
      name: 'Vitagen',
      HCS: 'Low in Sugar',
      img: require('../assets/Vitagen.png'), //include pic??
    },
    {
        id: 2,
        name: 'Strawberry milk',
        HCS: 'Low in Sugar',
        img: require('../assets/Strawberry.png'), //include pic??
      },
];

const colors = {
  white: '#fff',
  dark: '#000',
  light: '#F1F1F1',
  purple: '#800080'
};

module.exports = { colors, drinks };