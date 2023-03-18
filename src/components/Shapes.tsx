import Semicircle from "../assets/semi circle.svg"
import Circle from "../assets/circle.svg"
import Squiggly from "../assets/squiggly.svg"
import Triangle from "../assets/triangle.svg"

const Shapes = () => {
  return (
    <>
      <img src={Semicircle} className="shape shape--0" />
      <img src={Circle} className="shape shape--1" />
      <img src={Squiggly} className="shape shape--2" />
      <img src={Circle} className="shape shape--3" />
      <img src={Triangle} className="shape shape--4" />
      <img src={Circle} className="shape shape--5" />
      <img src={Squiggly} className="shape shape--6" />
      <img src={Circle} className="shape shape--7" />
      <img src={Semicircle} className="shape shape--8" />
    </>
  )
}

export default Shapes
