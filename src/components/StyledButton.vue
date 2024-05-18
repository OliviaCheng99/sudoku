<template>
  <button :class="computedClasses" @click="handleClick">
    {{  text }}
  </button>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    onclick: {
      type: Function,
      required: false
    }, 
    classes: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    computedClasses() {
      return `styled-button ${this.classes}`
    }
  },
  methods: {
    handleClick() {
      this.onclick();
    }
  }
}
</script>

<style>
.styled-button {
  background-color: #0a0a0a67;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.styled-button:hover {
  background-color: #10101185;
}
</style>