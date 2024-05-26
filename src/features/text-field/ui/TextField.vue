<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  quote: {
    type: String,
    required: true
  }
})

const inputText = ref('')

const parseText = (text: string) => {
  return text.split(' ').map((word) => word.split(''))
}

const inputWords = computed(() => parseText(inputText.value))

const words = computed(() => {
  return parseText(props.quote)
})

const displayWords = computed(() => {
  return words.value.map((word, wordIndex) => {
    const inputWord = inputWords.value[wordIndex]
    const displayWord =
      inputWord && inputWord.length > word.length
        ? [...inputWord]
        : [...word]
    displayWord.push(' ')

    return displayWord.map((_, letterIndex) => {
      return [word?.[letterIndex], inputWord?.[letterIndex]]
    })
  })
})
</script>

<template>
  <input type="text" autofocus id="textField" v-model="inputText" />
  <label for="textField" class="text">
    <span
      v-for="(word, wordIndex) in displayWords"
      :key="wordIndex"
      class="word"
    >
      <span
        :class="{
          error: letter[1] && letter[1] !== letter[0],
          correct: letter[1] && letter[1] === letter[0],
          extra: !letter[0] && letter[1],
          letter: true
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
  margin-right: 0.05em;
  @include h4;
}

.letter.correct {
  color: white;
}

.letter.error {
  color: rgb(236, 117, 117);
}

.letter.extra {
  color: rgb(145, 74, 74);
}
</style>
