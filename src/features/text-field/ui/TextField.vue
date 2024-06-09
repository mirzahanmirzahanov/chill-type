<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
type Cursor = {
  wordIndex: number
  letterIndex: number
}
const props = defineProps({
  quote: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean
  }
})

const emits = defineEmits<{
  error: []
  char: []
  correctChar: []
  end: []
}>()

const inputText = ref('')
const inputEl = ref()

const parseText = (text: string) => {
  return text.split(' ').map((word) => word.split(''))
}

const inputWords = computed(() => parseText(inputText.value))
const lastCursor = computed(() => getCursorFromParsedText(words.value))

const words = computed(() => {
  return parseText(props.quote)
})

const displayWords = computed(() => {
  return words.value.map((word, wordIndex) => {
    const inputWord = inputWords.value[wordIndex]
    const displayWord = inputWord && inputWord.length > word.length ? [...inputWord] : [...word]
    displayWord.push(' ')

    return displayWord.map((_, letterIndex) => {
      return [word?.[letterIndex], inputWord?.[letterIndex]]
    })
  })
})

function getCursorFromParsedText(text: string[][]) {
  return {
    wordIndex: text.length - 1,
    letterIndex: text.at(-1)?.length || 0
  }
}

const cursor = computed(() => getCursorFromParsedText(inputWords.value))

function compareCursor(first: Cursor, second: Cursor) {
  if (first.wordIndex < second.wordIndex) return -1
  if (first.wordIndex > second.wordIndex) return 1
  if (first.letterIndex < second.letterIndex) return -1
  if (first.letterIndex > second.letterIndex) return 1
  return 0
}

watch(
  () => props.disabled,
  (value) => {
    if (!value) {
      inputText.value = ''
      if (inputEl.value instanceof HTMLInputElement) {
        nextTick(() => inputEl.value.focus())
      }
    }
  }
)

watch(cursor, (newValue, oldValue) => {
  if (compareCursor(newValue, lastCursor.value) > -1) emits('end')

  if (compareCursor(newValue, oldValue) < 1) return

  const { wordIndex, letterIndex } = oldValue
  const [first, second] = displayWords.value[wordIndex][letterIndex]

  if (first !== second) emits('error')
  else emits('correctChar')
  emits('char')
})

function setCursorToEnd(input: HTMLInputElement) {
  input.setSelectionRange(inputText.value.length, inputText.value.length)
}

function extraLimit() {
  const curentWord = words.value[cursor.value.wordIndex]
  const inputWord = displayWords.value[cursor.value.wordIndex]

  return inputWord?.length - curentWord?.length > 3
}

function isFirstLetter() {
  return cursor.value.letterIndex === 0
}

function validateInput(e: KeyboardEvent) {
  if (
    (e.code !== 'Backspace' && e.code !== 'Space' && extraLimit()) ||
    (e.code === 'Space' && isFirstLetter())
  ) {
    e.preventDefault()
  }
  if (e.target && e.target instanceof HTMLInputElement) {
    setCursorToEnd(e.target)
  }
}
</script>

<template>
  <input
    ref="inputEl"
    type="text"
    autofocus
    id="textField"
    v-model="inputText"
    @keydown="validateInput"
  />
  <label for="textField" class="text">
    <span v-for="(word, wordIndex) in displayWords" :key="wordIndex" class="word">
      <span
        :class="{
          error: letter[1] && letter[1] !== letter[0],
          correct: letter[1] && letter[1] === letter[0],
          extra: !letter[0] && letter[1],
          letter: true,
          cursor: cursor.wordIndex === wordIndex && cursor.letterIndex === letterIndex
        }"
        v-for="(letter, letterIndex) in word"
        :key="letterIndex"
      >
        {{ letter[0] || letter[1] }}
      </span>
    </span>
  </label>
</template>

<style lang="scss" scoped>
#textField {
  height: 0;
  width: 0;
  border: 0;
  background: transparent;
  padding: 0;
}

.text {
  max-width: 800px;

  display: flex;
  flex-wrap: wrap;
}

.word {
  margin-right: 10px;
  color: #888;
}

.letter {
  @include text;
  font-size: 24px;
  line-height: 30px;
}

.letter.correct {
  color: white;
}

.letter.error {
  color: var(--error-color);
}

.letter.extra {
  color: var(--extra-letter-color);
}

#textField:focus + .text .letter.cursor::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 1em;
  background-color: var(--gold);
  transform: translate(-1px, 0.2em);
  animation: fadeInOut 1s infinite alternate;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>
