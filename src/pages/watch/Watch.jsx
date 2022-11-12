import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss"

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video
            className="video"
            autoPlay={true}
            progress="true"
            controls
        >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default Watch;