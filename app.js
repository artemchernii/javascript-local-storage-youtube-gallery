const videosContainer = document.getElementById('videosContainer');
const videoIdInput = document.getElementById('videoId');

let youtubeVideoIds = [];

const loadVideos = () => {
	youtubeVideoIds =
		JSON.parse(localStorage.getItem('youtubeVideosIds')) ?? [];
};

const alternativeThumbnailUrl = 'https://img.youtube.com/vi/${id}/0.jpg';

const displayVideos = () => {
	const htmlStrings = youtubeVideoIds
		.map(
			(id) => `
        <li onclick="clickVideo(event, '${id}')">
            <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/hqdefault.jpg" alt="Cover image for Youtube video with id ${id}"/>
            <button class="delete-btn">&times;</button>
        </li>
        `
		)
		.join('');
	videosContainer.innerHTML = htmlStrings;
};

const clickVideo = (e, id) => {
	console.log('event: ', e);
	console.log('id: ', id);
};

const saveVideo = (e) => {
	e.preventDefault();
	const videoId = videoIdInput.value;
	if (videoId) {
		youtubeVideoIds.unshift(videoId);
		localStorage.setItem(
			'youtubeVideosIds',
			JSON.stringify(youtubeVideoIds)
		);
		videoIdInput.value = '';
		displayVideos();
	}
};

loadVideos();
displayVideos();
