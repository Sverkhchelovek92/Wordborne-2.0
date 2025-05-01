const display = document.querySelector('.display')
const genBtn = document.querySelector('.gen-btn')
const genCyrBtn = document.querySelector('.gen-cyr-btn')
const numOfLetters = document.querySelector('.letters-num')
const saveBtn = document.querySelector('.save-btn')
const mutateBtn = document.querySelector('.mutate-btn')

const savedWordsDisplay = document.querySelector('.display_words')

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

let abcState = 'latin'

genBtn.addEventListener('click', () => {
  createWord(wovs, cons)
  abcState = 'latin'
})

genCyrBtn.addEventListener('click', () => {
  createWord(ruwovs, rucons)
  abcState = 'cyrillic'
})

function getRandomLetter(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateSyllable(wovels, consonants) {
  const pattern = getRandomLetter(syllables)
  return pattern
    .map((letter) =>
      letter === 'V' ? getRandomLetter(wovels) : getRandomLetter(consonants)
    )
    .join('')
}

function createWord(wovs, cons) {
  const number = numOfLetters.value
  let word = ''

  while (word.length < number) {
    let syllable = generateSyllable(wovs, cons)
    if (word.length + syllable.length <= number) {
      word += syllable
    }
  }

  display.textContent = word
  console.log(word)

  saveBtn.classList.remove('hidden')
  mutateBtn.classList.remove('hidden')
}

function getRandomElement(arr1, arr2) {
  const combined = [...arr1, ...arr2]
  return combined[Math.floor(Math.random() * combined.length)]
}

function mutate() {
  let word = display.textContent

  console.log(word)
  console.log(abcState)

  function getNewLetter() {
    let letter = ''

    if (abcState === 'latin') {
      letter = getRandomElement(wovs, cons)
    } else {
      letter = getRandomElement(ruwovs, rucons)
    }

    return letter
  }

  const newLetter = getNewLetter()
  console.log(newLetter)

  const letterToMutate = Math.floor(Math.random() * word.length)

  const newWord =
    word.substring(0, letterToMutate) +
    newLetter +
    word.substring(letterToMutate + 1)

  display.textContent = newWord
}

mutateBtn.addEventListener('click', mutate)

function saveWord() {
  const savedWord = display.textContent

  const savedWordInList = document.createElement('li')
  const savedWordWord = document.createElement('span')
  savedWordInList.appendChild(savedWordWord)
  savedWordWord.textContent = savedWord
  savedWordWord.className = 'p-word'
  savedWordInList.className = 'saved-li'

  const delBtn = document.createElement('button')
  delBtn.className = 'del-btn'
  delBtn.textContent = 'Delete'
  delBtn.dataset.action = 'delete'

  const btnDiv = document.createElement('div')
  btnDiv.className = 'btn-div'

  btnDiv.appendChild(delBtn)

  savedWordInList.appendChild(btnDiv)
  savedWordsDisplay.appendChild(savedWordInList)
}

saveBtn.addEventListener('click', saveWord)

function deleteWord(event) {
  if (event.target.dataset.action === 'delete') {
    const parentLi = event.target.closest('li')
    parentLi.remove()
  }
}

savedWordsDisplay.addEventListener('click', deleteWord)
