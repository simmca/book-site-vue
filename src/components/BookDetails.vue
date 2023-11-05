<template>
  <div class="book-view" v-bind:class="{ read: book.read }">
    <h2 class="book-title">{{ book.title }}</h2>
    <h3 class="book-author">{{ book.author }}</h3>
    <img
      v-if="book.isbn"
      v-bind:src="
        'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'
      "
    />
    <p>Number of pages: {{ book.numPages }}</p>
    <a v-bind:href="book.moreInfoLink" target="_blank" class="moreInfo">More Information</a>
    <p>
      {{ book.read ? "I have read this book" : "I have not read this book" }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'book-details',
  props: ['book']
}
</script>

<style>
.book-view {
  background-color: #080808;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
}

.moreInfo {
  color:#07b19a;
}

</style>
