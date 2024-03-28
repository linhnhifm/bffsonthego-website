export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    VideoGallery = "videogallery",
    ContactUs = "contactus",
  }
  
  export interface VlogType {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface VideoType {
    name: string;
    videoId: string;
  }