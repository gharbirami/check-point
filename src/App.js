
import './style.css';

import myWonderfulImage from "./image2.jpg";
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Rami Gharbi</h1>
        <br />
        <img src="/image1.jpg" alt="mindest" />
        <br />
        <img src={myWonderfulImage} alt="mind" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
