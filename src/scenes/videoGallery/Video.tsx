import YouTube from 'react-youtube';

type Props = {
    name: string;
    videoId: string;
  };
  
  const Video = ({ videoId }: Props) => {

    return (
      <li className="relative mx-5 inline-block h-full w-auto">
        <YouTube
          className="shadow-lg rounded-lg overflow-hidden"
          videoId={videoId}
          opts={{ playerVars: { controls: 0 } }}
        />
      </li>
    );
  };
  
  export default Video;