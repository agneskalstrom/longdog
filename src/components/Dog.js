import { useState, useRef } from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

function Dog() {
  const InsertMiddle = () => {
    return <Middle />;
  };

  const InsertO = () => {
    return "o";
  };

  const ref = useRef(null);

  const [middle, setMiddle] = useState([]);
  const [o, setO] = useState([]);


  const onAddBtnClick = (event) => {
    setMiddle(middle.concat(<InsertMiddle key={middle.length} />));
    setO(o.concat(<InsertO key={o.length} />));
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        <section className="left">
          <div className="sticky">
                <button onClick={onAddBtnClick}>+</button>
                <p className="length-text">Longboy is lo{o}ng</p>
          </div>
        </section>
        <section className="dog">
          <Top />
          {middle}
          <Bottom />
        </section>
        <section className="right">
        </section>
      </main>
      <div className="bottom-section" ref={ref}></div>
    </>
  );
}

export default Dog;
