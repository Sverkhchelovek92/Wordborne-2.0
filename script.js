const display = document.querySelector('.display')
const genBtn = document.querySelector('.gen-btn')
const numOfLetters = document.querySelector('.letters-num')

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

genBtn.addEventListener('click', createWord)

function getRandomLetter(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateSyllable() {
  const pattern = getRandomLetter(syllables)
  return pattern
    .map((letter) =>
      letter === 'V' ? getRandomLetter(wovs) : getRandomLetter(cons)
    )
    .join('')
}

function createWord() {
  const number = numOfLetters.value
  let word = ''

  while (word.length < number) {
    let syllable = generateSyllable()
    if (word.length + syllable.length <= number) {
      word += syllable
    }
  }

  display.textContent = word
  console.log(word)
}
