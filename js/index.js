'use strict';
const API_KEY = 'AIzaSyCgC2b6nzslkzXQmSDJokj0nqdHZMGi_RE';
const CLIENT_ID = '317416624227-2dpfajec7orf3k6k6hvn1nb7pb6h78lb.apps.googleusercontent.com';
const gloAcademyList = document.querySelector('.glo-academy-list');

const createCard = (dataVideo) => {
    console.log(dataVideo);

    const imgUrl = dataVideo.snippet.thumbnails.high.url;
    const videoId = dataVideo.id.videoId;
    const titleVideo = dataVideo.snippet.title;
    const dateVideo = dataVideo.snippet.publishedAt;
    const channelTitle = dataVideo.snippet.channelTitle;

    const card = document.createElement('div');
    card.classList.add('video-card');
    card.innerHTML = `
    <div class="video-thumb">
        <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
        <img src="${imgUrl}" alt="" class="thumbnail">
        </a>

    </div>
    <h3 class="video-title">${titleVideo}</h3>
    <div class="video-info">
        <span class="video-counter">
        <span class="video-date">${dateVideo} days ago</span>
        </span>
        <span class="video-channel">${channelTitle}</span>
    </div>
    `;

    return card;
};

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';

    listVideo.forEach(video => {
        const card = createCard(video);
        wrapper.append(card);
    });
};

createList(gloAcademyList, gloAcademy);
















// ​ВОПРОС Подскажите в двух словах как функция в плагинах всяких обрабатывает переданный объект? Типа например передали объект с двумя свойствами а остальные остались по умолчанию