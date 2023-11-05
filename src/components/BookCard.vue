<template>
  <div class="card" v-bind:class="{ read: book.read }">
    <router-link v-bind:to="{name: 'view-book', params: {isbn: book.isbn}}">
      <h2 class="book-title">{{ book.title }}</h2>
    
    <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
    <h3 class="book-author">{{ book.author }}</h3>
    <div class="button-container" v-if="! enableAdd">
      <button class="mark-read" v-on:click.prevent="setRead(true)" v-if=" ! book.read">Mark Read</button>
      <button class="mark-unread" v-on:click.prevent="setRead(false)" v-if="book.read">Mark Unread</button>
    </div>
  </router-link>
    <button v-if="enableAdd" v-on:click.prevent="addToReadingList(book)">Add to Reading List</button>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
    enableAdd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setRead(value) {
      this.$store.commit('SET_READ_STATUS', { book: this.book, value: value });
    },
    addToReadingList(book) {
      let addedBook = Object.assign({ read: false }, book);
      delete addedBook.sciFi;
      delete addedBook.fantasy;
      this.$store.commit('SAVE_BOOK', addedBook);
    }
  }
}
</script>

<style>
.card {
  background-color: #080808;
  border: 2px solid #eee;
  border-radius: 10px;
  width: 250px;
  height: 550px;
  margin: 20px;
}

.card a {
  text-decoration: none;
  color:#eee;
}

.card.read {
  background-color: #252525;
}

.card.read a {
  color: #080808;
}

.card .book-title {
  font-size: 1.5rem;
}

.card .book-author {
  font-size: 1rem;
}
</style>