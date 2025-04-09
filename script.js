const display = document.querySelector('.display')
const genBtn = document.querySelector('.gen-btn')
const genCyrBtn = document.querySelector('.gen-cyr-btn')
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

const ruwovs = ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я']

const rucons = [
  'Б',
  'В',
  'Г',
  'Д',
  'Ж',
  'З',
  'К',
  'Л',
  'М',
  'Н',
  'П',
  'Р',
  'С',
  'Т',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ь',
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
genCyrBtn.addEventListener('click', createCyrillicWord)

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

function generateCyrillicSyllable() {
  const pattern = getRandomLetter(syllables)
  return pattern
    .map((letter) =>
      letter === 'V' ? getRandomLetter(ruwovs) : getRandomLetter(rucons)
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

function createCyrillicWord() {
  const number = numOfLetters.value
  let word = ''

  while (word.length < number) {
    let syllable = generateCyrillicSyllable()
    if (word.length + syllable.length <= number) {
      word += syllable
    }
  }

  display.textContent = word
  console.log(word)
}
