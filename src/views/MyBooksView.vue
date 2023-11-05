<template>
    <reading-list></reading-list>
    <router-link to="/addBook" class="addBook">Add Book to My Reading List</router-link>
</template>

<script>
import ReadingList from '../components/ReadingList.vue';
export default {
    name:'my-books-view',
    components: {ReadingList},
};
</script>

<style>

.addBook{
    color:#07b19a;
}
    
</style>