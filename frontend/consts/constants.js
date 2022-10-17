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

const typeOptions = [
  {label: 'Bread', value: 'bread'},
  {label: 'Beverage', value: 'beverage'},
  {label: 'Snacks', value: 'snacks'},
  {label: 'Juices', value: 'juices'}
]

const healthyChoicesOptions = {
  'Sugar': [
    {label: 'Low in sugar', value: 'low in sugar'},
    {label: 'Medium in sugar', value: 'medium in sugar'},
    {label: 'High in sugar', value: 'high in sugar'}
  ], 
  'Fat': [
    {label: 'Low in fat', value: 'low in fat'},
    {label: 'Medium in fat', value: 'medium in fat'},
    {label: 'High in fat', value: 'high in fat'}
  ], 
  'Sodium': [
    {label: 'Low in sodium', value: 'low in sodium'},
    {label: 'Medium in sodium', value: 'medium in sodium'},
    {label: 'High in sodium', value: 'high in sodium'}
  ], 
  'Calories':  [
    {label: 'Low in calories', value: 'low in calories'},
    {label: 'Medium in calories', value: 'medium in calories'},
    {label: 'High in calories', value: 'high in calories'}
  ], 
}

const PLACES_API_KEY = ''

module.exports = { colors, drinks, typeOptions, healthyChoicesOptions, PLACES_API_KEY };