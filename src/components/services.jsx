import React from "react";
import Card from "../card";
import { services } from "../assets/assets";
function Services() {
  return (
    <div>
      {services.map((item, id) => (
        <Card key={id} item={item} />
      ))}
    </div>
  );
}

export default Services;
