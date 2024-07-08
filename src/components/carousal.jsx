import React from "react";

const Carousal = ({ name, prev, next, slide }) => {
  function nextSlide(name, slide) {
    const width = slide * 100;
    document.querySelector(
      `.carousal`
    ).style.transform = `translateX(-${width}vw)`;
  }
  function prevSlide(name, slide) {
    const width = (slide - 2) * 100;
    console.log(slide - 1);
    console.log(name);
    document.querySelector(
      `.carousal`
    ).style.transform = `translateX(-${width}vw)`;
  }
  return (
    <div className={name}>
      <div className="indicators">
        <p
          className="indicator"
          style={slide === 1 ? { backgroundColor: "white" } : {}}
        ></p>
        <p
          className="indicator"
          style={slide === 2 ? { backgroundColor: "white" } : {}}
        ></p>
        <p
          className="indicator"
          style={slide === 3 ? { backgroundColor: "white" } : {}}
        ></p>
      </div>
      <div className="arrows">
        {console.log(prev, next)}
        {prev && <button onClick={() => prevSlide(name, slide)}>{"<"}</button>}
        {next && <button onClick={() => nextSlide(name, slide)}>{">"}</button>}
      </div>
    </div>
  );
};

export default Carousal;
