import "./home.scss"
import Navbar from "../components/navbar/Navbar";
import Feature from "../components/feature/Feature";
import List from "../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Feature />
      <List />
    </div>
  )
}

export default Home;