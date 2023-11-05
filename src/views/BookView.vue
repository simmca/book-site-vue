<template>
<book-details v-if="book" v-bind:book="book"></book-details>
<p v-else>Book not found!</p>
</template>
<script>
import BookDetails from '../components/BookDetails.vue';
export default {
    name: 'book-view',
    components: {BookDetails},
    data(){
        return {
            isbn: this.$route.params.isbn
        }
    },
    computed: {
        book(){
            return this.$store.state.books.find(b => b.isbn == this.isbn);
        }
    }
}
</script>
<style>
    
</style>