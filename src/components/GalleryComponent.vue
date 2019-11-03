<template>
  <v-row>
    <v-pagination
        :length="totalPages"
        v-model="page"
    ></v-pagination>
    <v-col cols="12">
      <v-card>
        <v-container fluid>
          <v-col class="ma-auto" cols="9">
            <v-progress-linear
                :active="galleryLoading"
                color="blue accent-2"
                height="22"
                indeterminate
                rounded
            >Getting Photos
            </v-progress-linear>
          </v-col>

          <v-row>
            <v-col
                :title="image.title"
                :key="image.id"
                class="d-flex child-flex"
                xs="12"
                sm="4"
                md="3"
                lg="2"
                v-for="image in filteredImages"
            >
              <v-card class="d-flex flex-column-reverse" flat tile>
                <router-link :to="{ name: 'details', params: { id: image.cover , propImage: image}}">
                  <v-img
                      :src="getImageUrl(image)"
                      aspect-ratio="1"
                      class="grey lighten-2"
                  >
                  </v-img>
                </router-link>
                <v-toolbar-title> {{ image.title }}</v-toolbar-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
    import {mapState} from 'vuex';
    import {pagination} from "../config/const";
    import {getImageUrl} from "../helpers/image";

    export default {
        name: "GalleryComponent",
        data: () => ({
            page: 1
        }),
        computed: {
            ...mapState(["images", "galleryLoading"]),
            filteredImages: function () {
                return this.images.slice((this.page - 1) * pagination, this.page * pagination)
            },
            totalPages: function () {
                return Math.floor(this.images.length / pagination);
            }
        },
        methods: {
            getImageUrl
        },
        watch: {
            images: function () {
                this.page = 1;
            },
        }
    }
</script>

<style scoped>

</style>