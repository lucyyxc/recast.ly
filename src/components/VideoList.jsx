import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

//iterate the array of example Videodata,
//for each video in the array, we create a videoListEntry component


var VideoList = () => {
  let items = exampleVideoData.map((item) =>{
    console.log(item.snippet.thumbnails.default.url);
    return (
      <VideoListEntry
        title={item.snippet.title}
        description={item.snippet.description}
        mediaImage={item.snippet.thumbnails.default.url}
      />
    );
  });

  return (
    <div className="video-list">
      <div><h5><em>{items}</em> </h5></div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
