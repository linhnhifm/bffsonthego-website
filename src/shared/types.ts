export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    VideoGallery = "videogallery",
    EmojiBoard = "emojiboard",
    ContactUs = "contactus",
  }
  
export interface VlogType {
    icon: string;
    title: string;
    description: string;
  }

  export interface VideoType {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}

export interface YouTubeResponse {
    items: VideoType[];
}