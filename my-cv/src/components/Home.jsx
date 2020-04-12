import React from "react";
import "antd/dist/antd.css";

import { Carousel } from "antd";
import { Card } from "antd";

const { Meta } = Card;

export default function Home() {
  return (
    <Carousel autoplay>
      <div>
        <Card
          hoverable
          style={{ width: 640 }}
          cover={
            <img
              alt="example"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 640 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 640 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 640 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </Carousel>
  );
}
