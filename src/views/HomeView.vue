<template>
<sci-fi-list></sci-fi-list>
<fantasy-list></fantasy-list>
</template>

<script>
import SciFiList from '../components/SciFiList.vue'
import FantasyList from '../components/FantasyList.vue'

export default{
    name:'home-view',
    components: {SciFiList, FantasyList},
};
</script>

<style>
body{
    background-color: #080808;
    color: #eee;
}

body a{
    color: #eee;
    text-decoration: none;
}

h1{
    color: #eee;
}

h2{
    color: #eee;
}

h3{
    color: #eee;
}

p{
    color: #eee;
}

nav a{
    color:#07b19a;
}




</style>