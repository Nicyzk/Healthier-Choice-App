const drinks = [
  {
    id: 1,
    name: 'Vitagen',
    HCS: 'Low in Sugar',
    img: require('../assets/vitagen.png'), //include pic??
  },
  {
    id: 2,
    name: 'Strawberry milk',
    HCS: 'Low in Sugar',
    img: require('../assets/strawberry.png'), //include pic??
  },
];

const colors = {
  white: '#fff',
  dark: '#000',
  light: '#F1F1F1',
  purple: '#800080'
};

const ListOptions = [
  { label: 'Groceries', value: 'groceries' },
  { label: 'Beverages', value: 'beverages' },
  { label: 'Snacks', value: 'snacks' }
];

const typeOptions = [
  { label: 'Bread', value: 'bread' },
  { label: 'Beverage', value: 'beverage' },
  { label: 'Snacks', value: 'snacks' },
  { label: 'Juices', value: 'juices' }
]

const healthyChoicesOptions = {
  'Sugar': [
    { label: 'no filter', value: '' },
    { label: 'Low in sugar', value: 'low in sugar' },
    { label: 'Medium in sugar', value: 'medium in sugar' },
    { label: 'High in sugar', value: 'high in sugar' }
  ],
  'Fat': [
    { label: 'no filter', value: '' },
    { label: 'Low in fat', value: 'low in fat' },
    { label: 'Medium in fat', value: 'medium in fat' },
    { label: 'High in fat', value: 'high in fat' }
  ],
  'Sodium': [
    { label: 'no filter', value: '' },
    { label: 'Low in sodium', value: 'low in sodium' },
    { label: 'Medium in sodium', value: 'medium in sodium' },
    { label: 'High in sodium', value: 'high in sodium' }
  ],
  'Calories': [
    { label: 'no filter', value: '' },
    { label: 'Low in calories', value: 'low in calories' },
    { label: 'Medium in calories', value: 'medium in calories' },
    { label: 'High in calories', value: 'high in calories' }
  ],
}


// For myprofilepage

const preferenceSettings = {
  sugar: [
    { label: 'No Added Sugar', value: 'No Added Sugar' },
    { label: 'Lower in Sugar', value: 'Lower in Sugar' },
    { label: 'Sugar Free', value: 'Sugar Free' },
  ],
  fat: [
    { label: 'Lower in Saturated Fat', value: 'Lower in Saturated Fat' },
    { label: 'Trans Fat Free', value: 'Trans Fat Free' }
  ],
  calories: [
    { label: 'Less than 100 calories', value: 'Less than 100 calories' },
    { label: 'Less than 200 calories', value: 'Less than 200 calories' }
  ],
  sodium: [
    { label: 'Lower in Sodium', value: '8' },
    { label: 'No Added Sodium', value: '9' }]
  ,
  calcium: [
    { label: 'Higher in Calcium', value: '10' }
  ], 
  wholegrains: [
    { label: 'Higher in Wholegrains', value: '11' }
  ],
  bloodsugar: [
    { label: 'Low Glycemic Index', value: '12' }
  ],
  fruitsveges: [
    { label: 'Eat 2+2 Servings of Fruits and Vegetables Daily', value: '13' }
  ]
}

const PLACES_API_KEY = 'AIzaSyCzkeBRa-8_C-fufLRLR1L7AnKaeqX0S90'

module.exports = { colors, drinks, typeOptions, healthyChoicesOptions, PLACES_API_KEY, preferenceSettings };