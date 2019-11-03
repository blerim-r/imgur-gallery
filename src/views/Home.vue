<template>
  <v-container>
    <filter-component/>
    <gallery-component/>
  </v-container>
</template>

<script>
  import FilterComponent from "../components/FilterComponent";
  import GalleryComponent from "../components/GalleryComponent";

    export default {
        name: 'home',
        components: {GalleryComponent, FilterComponent}
    }
</script>
