import sec2_1 from "../img/sec2_1.png";
import sec2_2 from "../img/sec2_2.png";
import sec2_3 from "../img/sec2_3.png";

function Section_2() {
  let data = [
    {
      id: 1,
      img: sec2_1 ,
      par: "Большой ассортимент",
      span: "строительных материалов всегда в наличии",
    },
    {
      id: 2,
      img: sec2_2,
      par: "Доставка стройматериалов",
      span: "в течении четырех часов или в любое удобное время"
    },
    {
      id: 3,
      img: sec2_3,
      par: "Многоуровневая система",
      span: "управления качеством по стандарту ISO 9001"
    }
  ];

  return (
    <>
      <div className="Section_2">
        <div className="sec2_div">
          {data.map((item) => (
            <div className="sec2_box" key={item.id}>
              <div className="sec2_l">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="sec2_r">
                <p>{item.par}</p>
                <span>{item.span}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section_2;
