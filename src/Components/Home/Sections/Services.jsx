import React from "react";
import Service from "../../Common/Service";

const Services = () => {

    const CutData = [
        {
            title:"Haircut",
            desc:"Our signature service, a tailored haircut that perfectly aligns with your image and style",
            price:"$45"
        },
        {
            title:"Shave",
            desc:"Enjoy a smooth, close shave, leaving your skin feeling refreshed and revitalized",
            price:"$40"
        },
        {
            title:"Beard Trim",
            desc:"Maintain a sharp and well-groomed beard with our precision trims",
            price:"$27"
        },
        {
            title:"Haircut and Beard Trim",
            desc:"Expert haircuts and beard trims tailored to your style",
            price:"$70"
        },
    ]

  return (
    <section className="px-3 md:px-10">
      <h1 className="text-4xl font-bold leading-[65px]">OUR SERVICES</h1>
        <p className="text-lg font-[400] pb-10">From long layered cuts, to shorter edgier cuts, we bring our clients diverse expertise from around the globe</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F4F2F0] py-10">
        <div className="shadow-xl">
            <img src="./services-aside.webp" alt="" className="mx-auto md:mx-0"/>
        </div>

        <div className="flex flex-col gap-5 ps-5">
          {
            CutData.map( ({title, desc, price},i) => {
                return <Service key={i} title={title} desc={desc} price={price}/>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
