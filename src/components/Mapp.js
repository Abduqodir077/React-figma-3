import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img13 from "../img/img13.png";

function Mapp(){
    

let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let malumot = [
    {
        id: 1,
        img: img13,
        b: "Круг зачистной 125х6х22",
        p: "Артикул 00004",
        span: "Цена за штуку",
        p2: "52 руб",
        span2: "48 руб.",

    },
    {
        id: 2,
        img: img13,
        b: "Круг зачистной 125х6х22",
        p: "Артикул 00004",
        span: "Цена за штуку",
        p2: "52 руб",
        span2: "48 руб.",

    },
    {
        id: 3,
        img: img13,
        b: "Круг зачистной 125х6х22",
        p: "Артикул 00004",
        span: "Цена за штуку",
        p2: "52 руб",
        span2: "48 руб.",

    },
    {
        id: 4,
        img: img13,
        b: "Круг зачистной 125х6х22",
        p: "Артикул 00004",
        span: "Цена за штуку",
        p2: "52 руб",
        span2: "48 руб.",

    },
    {
        id: 12,
        img: img13,
        b: "Круг зачистной 125х6х22",
        p: "Артикул 00004",
        span: "Цена за штуку",
        p2: "52 руб",
        span2: "48 руб.",

    },
    {
        id: 13,
        img: img13,
        b: "Круг зачистной 125х6х22",
        p: "Артикул 00004",
        span: "Цена за штуку",
        span2: "52 руб.",

    },
  ]

  return(
    <>
    <div className="mapp_d">
    <div className="sec3_box">
          <div className="sec3_card" >
            <Slider {...settings}>
              {
                malumot.map((item) => (
                    <div className="card" key={item.id}>
                <div className="card_1">
                <img src={item.img} alt="img13" />
                <b>{item.b}</b>
                <p>{item.p}</p>
                <span>{item.span}</span>
                </div>
                <div className="card_2">
                    <div className="card_2_1">
                        <p>{item.p2}</p>
                        <span>{item.span2}</span>
                    </div>
                    <div className="card_2_2">
                        <div className="card_2_2_l">
                            <button>+</button>
                            <input type="text" value={0} />
                            <button>-</button>
                        </div>
                        <div className="card_2_2_r">
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
              </div>
                ))
              }
             
            </Slider>
          </div>
        </div>
    </div>
    </>
  )

}

export default Mapp;