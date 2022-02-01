const BASE_URL = "https://pixabay.com/api/";
const KEY = "24457858-4dedb210520a0a663e952c085";

export default function fetchGallery(searchQuery, page) {
  return fetch(
    `${BASE_URL}?key=${KEY}&page=${page}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("Not found. Try to change name"));
  });
}
