const display = document.querySelector('.display')

const wovs = ['A', 'E', 'I', 'O', 'U']

const cons = [
  'B',
  'C',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const syllables = [
  ['C', 'V'],
  ['V', 'V'],
  ['V', 'C', 'V'],
  ['V', 'C'],
  ['C', 'C'],
  ['V'],
  ['C'],
]

function getRandomLetter(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateSyllable() {
  const pattern = getRandomLetter(syllablePatterns)
  return pattern
    .map((letter) =>
      letter === 'V' ? getRandomLetter(wovs) : getRandomLetter(cons)
    )
    .join('')
}
