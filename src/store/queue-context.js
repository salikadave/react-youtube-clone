import { createContext, useState } from "react";

const QueueContext = createContext({
  queue: [],
  totalInQueue: 0,
  addToQueue: (video) => {},
  removeFromQueue: (videoId) => {},
  currentItem: (videoId) => {},
});

export function QueueContextProvider(props) {
  const [queue, setQueue] = useState([]);

  function addToQueueHandler(video) {
    setQueue((prevQueue) => {
      console.log(video);
      return prevQueue.concat(video);
    });
  }

  function removeFromQueueHandler(videoId) {
    setQueue((prevQueue) => {
      return prevQueue.filter((video) => video.id !== videoId);
    });
  }

  function currentItemHandler(videoId) {
    return queue.findIndex((x) => x.id === videoId) + 1;
  }

  const context = {
    queue: queue,
    totalInQueue: queue.length,
    addToQueue: addToQueueHandler,
    removeFromQueue: removeFromQueueHandler,
    currentItem: currentItemHandler,
  };
  return (
    <QueueContext.Provider value={context}>
      {props.children}
    </QueueContext.Provider>
  );
}

export default QueueContext;
