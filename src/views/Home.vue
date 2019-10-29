<template>
  <div class="home">
    <h1>
      Test
    </h1>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'home',
        methods: {
            ...mapActions(["getGalleryImages"])
        },
        mounted() {
            const res = this.getGalleryImages();
            console.log(res);
        }
    }
</script>
