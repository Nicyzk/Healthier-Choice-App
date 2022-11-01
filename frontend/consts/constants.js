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
    { label: 'Sugar Free', value: 'Sugar Free' },
    { label: 'No Added Sugar', value: 'No Added Sugar' },
    { label: 'Lower in Sugar', value: 'Lower in Sugar' },
    { label: 'Low Glycemic Index', value: 'Low Glycemic Index' }
  ],
  'Fat': [
    { label: 'no filter', value: '' },
    { label: 'Lower in Saturated Fat', value: 'Lower in Saturated Fat' },
    { label: 'Trans Fat Free', value: 'Trans Fat Free' }
  ],
  'Sodium': [
    { label: 'no filter', value: '' },
    { label: 'Lower in Sodium', value: 'Lower in Sodium' },
    { label: 'No Added Sodium', value: 'No Added Sodium' }
  ],
  'Calories': [
    { label: 'no filter', value: '' },
    { label: 'Less than 100 calories', value: 'Less than 100 calories' },
    { label: 'Less than 200 calories', value: 'Less than 200 calories' }
  ],
  'Wholegrains': [
    { label: 'Higher in Wholegrains', value: 'Higher in Wholegrains' }
  ],
  'Calcium': [
    { label: 'Higher in Calcium', value: 'Higher in Calcium' }
  ],
  'Fruits and Vegetables': [
    { label: 'Eat 2+2 Servings of Fruits and Vegetables Daily', value: 'Eat 2+2 Servings of Fruits and Vegetables Daily' }
  ]
}


// For myprofilepage

const preferenceSettings = {
  sugar: [
    { label: 'No Added Sugar', value: 'No Added Sugar' },
    { label: 'Lower in Sugar', value: 'Lower in Sugar' },
    { label: 'Sugar Free', value: 'Sugar Free' },
    { label: 'Low Glycemic Index', value: 'Low Glycemic Index' }
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
    { label: 'Lower in Sodium', value: 'Lower in Sodium' },
    { label: 'No Added Sodium', value: 'No Added Sodium' }]
  ,
  calcium: [
    { label: 'Higher in Calcium', value: 'Higher in Calcium' }
  ], 
  wholegrains: [
    { label: 'Higher in Wholegrains', value: 'Higher in Wholegrains' }
  ],
  bloodsugar: [
    { label: 'Low Glycemic Index', value: 'Low Glycemic Index' }
  ],
  fruitsveges: [
    { label: 'Eat 2+2 Servings of Fruits and Vegetables Daily', value: 'Eat 2+2 Servings of Fruits and Vegetables Daily' }
  ]
}

const PLACES_API_KEY = 'AIzaSyCzkeBRa-8_C-fufLRLR1L7AnKaeqX0S90'

module.exports = { colors, drinks, typeOptions, healthyChoicesOptions, PLACES_API_KEY, preferenceSettings };