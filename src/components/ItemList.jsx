import React, { useState } from "react";
import Button from "./Button";
import Badge from "./Badge";

const ItemList = (props) => {
  return (
    <div className="mt-3 card p-2">
      <div className="d-flex justify-content-between align-items-center">
        <div></div>
        <h5 className="">My Todo</h5>
        <Badge color="primary" size="sm">
          {props.total_no}
        </Badge>
      </div>
      <ul className="text-start list-group">
        {props.list.map((item) => (
          <li
            key={item.id}
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div class="fw-bold">{item.task}</div>
              {item.date}
            </div>
            <Button
              onClick={() => props.onRemoveClick(item.id)}
              color="danger"
              size="sm"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
