import { fetchImages } from './js/pixabay-api';
import './css/loader-styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  renderPic,
  galleryElement,
  showEndMessage,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const inputElement = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

hideLoader();

let searchTerm = '';
let pageCounter = 1;
const perPage = 15;

searchForm.addEventListener('submit', submitHandle);
async function submitHandle(event) {
  hideLoadMoreBtn();
  event.preventDefault();
  searchTerm = inputElement.value.trim();
  pageCounter = 1;

  galleryElement.innerHTML = '';

  if (searchTerm === '') {
    iziToast.error({
      message: 'The field can not be empty!',
      messageColor: ' #fff',
      backgroundColor: '#ef4040',
      position: 'bottomRight',
      messageSize: '16px',
      messageLineHeight: '100%',
      iconColor: 'white',
      title: 'Attention',
    });
    hideLoadMoreBtn();

    return;
  }

  hideEndMessage();

  showLoader();
  try {
    const images = await fetchImages(searchTerm, pageCounter, perPage);
    const totalHits = images.totalHits;

    if (images.hits.length === 0) {
      galleryElement.innerHTML = '';
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: ' #fff',
        backgroundColor: '#ef4040',
        position: 'bottomRight',
        messageSize: '16px',
        messageLineHeight: '100%',
        iconColor: 'white',
        title: 'Info',
      });
      hideLoadMoreBtn();
      return;
    } else {
      renderPic(images.hits);
      inputElement.value = '';
      showLoadMoreBtn();
    }
    if (perPage * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndMessage();
    }
  } catch (error) {
    console.error('Error:', error);
    iziToast.error({
      message: 'Failed to fetch images. Please try again later.',
      messageColor: ' #fff',
      backgroundColor: '#ef4040',
      position: 'bottomRight',
      messageSize: '16px',
      messageLineHeight: '100%',
      iconColor: 'white',
      title: 'Error',
    });
  } finally {
    hideLoader();
  }
}

loadMoreBtn.addEventListener('click', async () => {
  try {
    if (loadMoreBtn) {
      pageCounter += 1;
    }
    const images = await fetchImages(searchTerm, pageCounter, perPage);
    const totalHits = images.totalHits;

    renderPic(images.hits);
    showLoader();
    if (perPage * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndMessage();
    }

    function smoothScrollToNextGroup() {
      const firstGalleryItem = document.querySelector('.gallery a');
      if (firstGalleryItem) {
        const galleryItemHeight =
          firstGalleryItem.getBoundingClientRect().height;
        window.scrollBy({
          top: galleryItemHeight * 2,
          behavior: 'smooth',
        });
      } else {
      }
    }

    smoothScrollToNextGroup();
  } catch (error) {
    console.error('Error fetching more images:', error);
    iziToast.error({
      title: 'Error',
      message: `Error fetching more images: ${error}`,
    });
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}

function hideEndMessage() {
  const endMessage = document.querySelector('.end-message');
  if (endMessage) {
    endMessage.remove();
  }
}
