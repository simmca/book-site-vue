<template>
  <section>
    <h2>Fantasy</h2>
    <div class="fantasy-list">
      <book-card v-for="book in books" v-bind:book="book" v-bind:key="book.isbn" v-bind:enable-add="true" />
    </div>
  </section>
</template>

<script>
import BookCard from '../components/BookCard.vue';

export default {
  computed: {
    books() {
      return this.$store.state.popularBooks.filter((book) => {
        return book.fantasy === true;
      });
    }
  },
  components: {
    BookCard
  }
}
</script>

<style>
.fantasy-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>