import refs from "./refs";

export default{
  _query:'',
  page: 1,
  apiKey: '18864763-1ad3d49af940e9eb25fd728e0',


async toGetFetch() {
  let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this._query}&page=${this.page}&per_page=12&key=${this.apiKey}`
  let response = await fetch(url);
  let result = await response.json();
  console.log(result.hits);
  return result.hits;
  },
  get query() {
    return this._query;
  },
  set query(value){
    return this._query = value;
  },
  resetPage(){
    return this.page = 1;
  },
   setPage (){
    return this.page +=1 ;
  }
}
