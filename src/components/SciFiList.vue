<template>
  <section>
    <h2>Science Fiction</h2>
    <div class="sci-fi-list">
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
        return book.sciFi === true;
      });
    }
  },
  components: {
    BookCard
  }
}
</script>

<style>
.sci-fi-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>