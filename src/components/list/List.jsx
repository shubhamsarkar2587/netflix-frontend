import "./list.scss";
import { useRef, useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import ListItem from "../listItem/ListItem";

const List = () => {
  const listRef = useRef();
  const [scrollSlidePosition, setSlideScrollPosition] = useState(0)

  const handleArrowClick = ({ direction }) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    
    if (direction === "left" && scrollSlidePosition > 0) {
      setSlideScrollPosition(scrollSlidePosition - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } if (direction === "right" && scrollSlidePosition < 5) {
      setSlideScrollPosition(scrollSlidePosition + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(scrollSlidePosition, direction);
  }

  return (
    <div className="list">
      <span className="listTitle">
        Continue to watch
      </span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => {
            handleArrowClick({ direction: "left"})
          }}
        />
        <div ref={listRef} className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => {
            handleArrowClick({ direction: "right"})
          }}
        />
      </div>
    </div>
  )
}

export default List