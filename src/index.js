import css from "./css/style.css";
import apiService from "./apiService.js"
import refs from "./refs.js"
import debounce from 'lodash.debounce';
import templateGallery from './templates/templateGallery.hbs'
import { data } from "autoprefixer";

refs.search.addEventListener('input', debounce ((e)=>{
  if(e.target.value=== ''){
    refs.button.classList.add('is-hidden');
    refs.gallery.innerHTML = '';

    return;
  }
apiService.query = e.target.value;
apiService.resetPage();
refs.button.classList.remove('is-hidden');
apiService.toGetFetch().then(data =>{
  emptyResponse(data);
  refs.gallery.innerHTML = templateGallery(data);
  windowScroll();
})

},500))


  refs.button.addEventListener('click', ()=> {
    apiService.setPage();
    apiService.toGetFetch().then(data => {
      emptyResponse(data);
      refs.gallery.insertAdjacentHTML('beforeend', templateGallery(data))
      windowScroll();
    })
    });

    function emptyResponse (data) {
      if(data.length < 12){
        refs.button.classList.add('is-hidden');
      }else {
        refs.button.classList.remove('is-hidden');
      }
    }
    function windowScroll(){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
        });
    }