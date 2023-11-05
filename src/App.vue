<template>
  <div id="book-app">
    <h1>Book Recommendations</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/myBooks">Reading List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
#book-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  margin: 60px;
}

nav{
  display:flex;
  gap: 50px;
  justify-content: center;
}

</style>
