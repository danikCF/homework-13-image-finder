import css from "./css/style.css";
import apiService from "./apiService.js"
import refs from "./refs.js"
import debounce from 'lodash.debounce';
import templateGallery from './templates/templateGallery.hbs'
import { data } from "autoprefixer";

refs.search.addEventListener('input', debounce ((e)=>{
  if(e.target.value=== ''){
    refs.gallery.innerHTML = '';
    return;
  }
apiService.query = e.target.value ;
apiService.resetPage();
apiService.toGetFetch().then(data =>{
  refs.gallery.innerHTML = templateGallery(data);
})

},500))


  refs.button.addEventListener('click', ()=>{
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
    apiService.setPage();
    apiService.toGetFetch().then(data =>
      refs.gallery.insertAdjacentHTML('beforeend', templateGallery(data)))
      if (data.length < 12 ){
        refs.button.hidden = true;
      }
    });


