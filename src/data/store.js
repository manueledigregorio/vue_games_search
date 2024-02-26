import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.rawg.io/api/games?key=f5b78cfda1374e69a25202d24ee3bd2c',
  apiSearch:'&search=',
  search: null,
  arrayResult:[],
  gameDetail:{},
  
})