import axios from 'axios';

const KEY ="AIzaSyBhonXggGlEv3qXgppirupn50pjK453Vdg";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxresults:5,
        key:KEY
    }
});