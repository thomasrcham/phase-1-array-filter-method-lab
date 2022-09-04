const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

let newArray = []

function findMatching(array,search){
  newArray = array.filter( (array) => {
  return array.toLowerCase() === search.toLowerCase()
  })
  return newArray
}

function fuzzyMatch(array,search){
  let i = [...search].length
  newArray = array.filter( (array) => {
  return array.slice (0,i) === search
  })
  return newArray
}

function matchName(array,search){
  newArray = array.filter( (array) => {
  return array.name === search
  })
  return newArray
  }

matchName(drivers,"Bobby")  ;