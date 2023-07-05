import React, { useEffect, useState } from "react";

const Catlog = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((datas) => setdata(datas));
  }, []);

  return (
    <div className="product_page">
      <div className="product_container">
        {data &&
          data.map((item) => {
            return (
              <>
                <div className="catlog_container">
                  <div className="img_container">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="item_details">
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p style={{fontWeight:"bold"}}>$ {item.price}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Catlog;
