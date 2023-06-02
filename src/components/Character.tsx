import * as React from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { userId } = useParams();
  console.log(userId);
  return <>Character Page</>;
};

export default Character;
