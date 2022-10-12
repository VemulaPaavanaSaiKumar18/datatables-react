import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Showtable } from "./Showtable";

export const Tabledata = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {
    gettabledata();
  }, []);
  const gettabledata = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    let data = res.data;
    setpost(data);
  };
  // gettabledata();
  return (
    <div>
      <Showtable item={post} />
    </div>
  );
};
