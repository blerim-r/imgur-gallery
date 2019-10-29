import axios from './request';

export default {
    getGalleryImages() {
        return axios.get('gallery/hot/viral/top/1/');
    }
}