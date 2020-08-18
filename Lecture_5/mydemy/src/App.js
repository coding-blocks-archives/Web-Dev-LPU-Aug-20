import React from 'react';
import VideoContainer from './components/video-container';

export default () => {
  const [videos, setVideos] = React.useState([
    'https://www.youtube.com/embed/D3RVdblCmk0',
    'https://www.youtube.com/embed/JwYX52BP2Sk'
  ])
  const [selectedVideo, setSelectedVideo] = React.useState(videos[0])

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ul>
            {videos.map(video => 
              <li onClick={() => {
                setSelectedVideo(video)
              }}>
                {video}
              </li>
            )}
          </ul>
        </div>
        <div className="col-6">
          <VideoContainer url={selectedVideo} />
        </div>
      </div>
    </div>
  );
}
