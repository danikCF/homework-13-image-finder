import css from "./css/style.css";
import apiService from "./apiService.js"
import refs from "./refs.js"
import debounce from 'lodash.debounce';
import templateGallery from './templates/templateGallery.hbs'

refs.search.addEventListener('input', debounce ((e)=>{
  if(e.target.value=== ''){
    refs.gallery.innerHTML = '';
    return;
  }
apiService.query = e.target.value ;
apiService.toGetFetch().then(data =>{
  refs.gallery.innerHTML = templateGallery(data);
})

},500))

refs.button.addEventListener('click', ()=>{
  apiService.setPage();
  apiService.toGetFetch().then(data =>
    refs.gallery.insertAdjacentHTML('beforeend', templateGallery(data)));
})