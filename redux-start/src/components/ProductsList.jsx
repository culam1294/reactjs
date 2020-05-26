import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../action/List";
import "antd/dist/antd.css";
import { List, Card, message, Button, Badge, Input, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CarouselHome from "./carousel/Carousel";
import callApi from "../api/ApiCaller";
import { useHistory } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";

export default function Home() {
  const { Search } = Input;
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [dataSearch, setDataSearch] = useState();

  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.list);

  const history = useHistory();
  const goToCart = () => {
    history.push("/cart");
  };

  useEffect(() => {
    async function fetchData() {
      await callApi("get", "products", null)
        .then((res) => {
          setData(res.data);
          setDataSearch(res.data);
        })
        .catch((err) => console.log(err));
      setLoad(false);
    }
    fetchData();
  }, []);

  //Send a product to CART
  const sendProduct = (id) => {
    listCart.forEach((e) => {
      if (e.id === id) {
        id = null;
        message.info(`${e.name} is already in cart`);
      }
    });
    data.forEach((item) => {
      if (item.id === id) {
        dispatch(addList(item));
      }
    });
  };
  const onSearch = (value) => {
    const listSearch = [];
    dataSearch.forEach((item) => {
      if (item.name.indexOf(value) !== -1) {
        listSearch.push(item);
      }
    });
    setData(listSearch);
  };
  
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <Button
          onClick={() => goToCart()}
          style={{
            margin: 11,
          }}
          type="link"
        >
          <Badge count={listCart.length} showZero>
            <span style={{ fontSize: "1.5em" }}>Cart</span>
            <ShoppingCartOutlined style={{ fontSize: "1.5em" }} />
          </Badge>
        </Button>
        <Search
          onSearch={(value) => onSearch(value)}
          enterButton
          placeholder="Search..."
          style={{ margin: 10 }}
        />
        <LoginNavbar />
      </div>

      <CarouselHome />

      <List
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        loading={load}
        pagination={{ pageSize: 20 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              cover={<img alt="Products list" src={item.image} />}
              style={{ textAlign: "center" }}
              hoverable="true"
              
              title={item.name}
            >
              {item.description}
              <br />
              <Button
                style={{ margin: 5 }}
                danger
                onClick={() => sendProduct(item.id)}
              >
                Add to Cart <ShoppingCartOutlined />
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}
