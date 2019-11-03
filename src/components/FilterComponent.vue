<template>
    <v-row align="center">
      <v-col class="d-flex" cols="12"  md="3" sm="6" xs="12">
        <v-select
            :items="sectionList"
            label="Section"
            v-model="section"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12"  md="3" sm="6" xs="12">
        <v-switch
            v-model="viral"
            label="Include Viral"
        ></v-switch>
        <v-text-field
            class="ml-10"
            v-model="page"
            label="Page"
            type="number"
            data-vv-name="page"
            required
        ></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12"  md="3" sm="6" xs="12">
        <v-select
            :items="sortList"
            label="Sort"
            v-model="sort"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12"  md="3" sm="6" xs="12">
        <v-select
            :items="windowList"
            label="Window"
            v-model="window"
        ></v-select>
      </v-col>
    </v-row>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "FilterComponent",
        data() {
            return {
                sectionList: [
                    'hot',
                    'top',
                    'user'
                ],
                windowList: [
                    'day',
                    'week',
                    'month',
                    'year',
                    'all',
                ],
                sortList: [
                    'viral',
                    'top',
                    'time',
                    'rising',
                ],
                section: 'hot',
                window: 'day',
                sort: 'viral',

                viral: false,
                page: 1
            }
        },
        methods: {
            ...mapActions(["getGalleryImages"])
        },
        computed: {
            apiData: function () {
                return {
                    section: this.section,
                    sort: this.sort,
                    window: this.window,
                    page: this.page,
                    query: {isViral: this.viral}
                };
            }
        },
        mounted() {
            this.getGalleryImages(this.apiData);
        },
        watch: {
            apiData: function () {
                this.getGalleryImages(this.apiData);
            }
        }
    };
</script>
