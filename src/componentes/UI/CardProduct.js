import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const CardProduct = ({ people }) => {
  let {
    name,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  } = people;

  if (hair_color === "n/a" || gender == "n/a") {
    hair_color = "none";
    gender = "none";
  }

  return (
    <Fragment>
      <div className="info_products">
        <div>Nombre: {name}</div>
        <div>Genero: {gender}</div>
        <div>Cumpleaños: {birth_year}</div>
        <p className="card-text">
          <Link
            className="nav-item nav-link login"
            to={`./people/${name}/${birth_year}/${height}/${hair_color}/${skin_color}/${mass}/${eye_color}/${gender}`}
          >
            More
          </Link>
        </p>
      </div>
    </Fragment>
  );
};
