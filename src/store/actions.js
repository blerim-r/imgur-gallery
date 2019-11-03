import axios from './request';

export default {
    async getGalleryImages({commit}, data) {
        commit('updateGalleryLoading', true);
        const {data: res} = await axios.get(`gallery/${data.section}/${data.sort}/${data.window}/${data.page}`, {params: data.query});
        commit('updateImages', res.data);
        commit('updateGalleryLoading', false);
    },
    async getGalleryImage({commit}, id) {
        const {data: res} = await axios.get(`image/${id}`);
        return res;
    },
}
