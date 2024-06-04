import Video from "./Video";
import fetchYoutubeVideos from '@/shared/fetchYoutubeVideos';
import { VideoType } from "@/shared/types";

type Props = {
    maxResults: number;
    order: string;
  };

const VideoList = ({ maxResults, order }: Props) => {
    const videos = fetchYoutubeVideos( maxResults, order );

    return (
        <div>
            <ul className="w-[2800px] whitespace-nowrap">
                {videos.map((video : VideoType) => (
                    <Video
                        key={video.id.videoId}
                        name={video.snippet.title}
                        videoId={video.id.videoId}
                    />
                ))}
            </ul>
        </div>
    );
};

export default VideoList;