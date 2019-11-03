<template>
  <v-container fluid>
    <v-col class="ma-auto" cols="9">
      <v-progress-linear
          :active="this.loading"
          color="blue lighten-2"
          height="20"
          indeterminate
          rounded
      >Getting Photo
      </v-progress-linear>
    </v-col>
    <v-subheader class="font-weight-black text-center justify-center"> {{ image.title }}</v-subheader>

    <v-row>
      <v-img :src="getImageUrl(image)" class="ma-auto" height="100%" id="img" max-height="450" max-width="840"
             width="100%"></v-img>
    </v-row>

    <v-flex class="text-center mt-3 mb-3"> {{ image.description ? image.description : 'No description' }}</v-flex>

    <v-flex class="d-flex ma-auto max-w-250">
      <span>
        <v-icon color="blue lighten-2">mdi-thumb-up</v-icon>
        <span> {{ image.ups ? image.ups : 0 }} </span>
      </span>

      <span class="text-end ml-auto">
        <v-icon color="red lighten-2">mdi-thumb-down</v-icon>
        <span> {{ image.downs ? image.downs : 0 }}</span>
      </span>
    </v-flex>

    <router-link :to="{name: 'home'}">
      <v-btn  class="d-flex ma-auto mt-6" color="primary" small>Go To Gallery</v-btn>
    </router-link>

  </v-container>
</template>

<script>
    import {getImageUrl} from "../helpers/image";
    import {mapActions} from 'vuex';

    export default {
        name: "Details",
        props: ['propImage'],
        data() {
            return {
                image: {},
                loading: false,
            }
        },
        methods: {
            ...mapActions(['getGalleryImage']),
            getImageUrl
        },
        async mounted() {
            // Load from props
            if (this.propImage) {
                this.image = this.propImage;
                return;
            }

            // Load from api if coming from direct link
            this.loading = true;
            const id = this.$route.params.id;
            const res = await this.getGalleryImage(id);
            this.image = res.data;
            this.loading = false;
        }
    }
</script>

<style lang="scss">
  #img .v-image__image {
    background-size: contain !important;
  }

  .max-w-250 {
    max-width: 250px;
  }

  .d-flex {
    display: flex;
  }
</style>