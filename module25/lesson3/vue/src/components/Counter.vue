<template>
  <div>
    <h2>Counter: {{ count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return { count: 0 };
  },
  methods: {
    increment() { this.count++; },
    decrement() { this.count--; }
  }
};
</script>

<style scoped>
button { margin: 5px; }
</style>
