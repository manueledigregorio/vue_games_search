import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.rawg.io/api/',
  key:'f5b78cfda1374e69a25202d24ee3bd2c',
  search: null,
  arrayResult:[],
  gameDetail:{},
  
})