export const GOOGLE_API_KEY = "AIzaSyCFw8IwaBHgF-yqqNdDXfqnB_38BFLlqw8"

export const YOUTUBE_VIDEOS_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
GOOGLE_API_KEY;

export const VIDEO_INFO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key="+
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";