import React from "react";

const Breadcrumbs = ({ items }) => (
  <nav aria-label="breadcrumb">
    {items.map((item, index) => (
      <span key={index}>
        {item.link ? (
          <a href={item.link} className="text-purple-600">{item.label}</a>
        ) : (
          <span className="text-gray-600">{item.label}</span>
        )}
        {index < items.length - 1 && " > "}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
