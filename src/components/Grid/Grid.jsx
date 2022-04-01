import { useEffect, useState } from "react";

import s from "./Grid.module.css";
import { ImgList } from "../ImgList/ImgList";

export const Grid = () => {
  const [imgListState, setImgListState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=100")
      .then((response) => response.json())
      .then((result) => {
        setImgListState((prevState) => {
          return [...prevState, ...result];
        });
      });
  }, []);

  return (
    <div className={s.grid}>
      <ImgList list={imgListState} />
    </div>
  );
};
