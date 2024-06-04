import { useState, useEffect } from 'react';
import { VideoType, YouTubeResponse } from "@/shared/types";
import axios from "axios";
import { localVideos } from '@/scenes/videoGallery/localVideos';

const fetchYoutubeVideos = ( maxResults : number, order: string) => {
    const [videos, setVideos] = useState<VideoType[]>([]);
    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string;
    const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID as string;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get<YouTubeResponse>(
                    `https://www.googleapis.com/youtube/v3/search`, {
                    params: {
                        key: YOUTUBE_API_KEY,
                        channelId: CHANNEL_ID,
                        part: 'snippet,id',
                        order: order,
                        maxResults: maxResults
                    }
                });
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching videos from Youtube via API connection', error);
                setVideos(localVideos);
            }
        };

        fetchVideos();
    }, []);

    return videos;
};

export default fetchYoutubeVideos;