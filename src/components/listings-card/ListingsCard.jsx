import React from "react";
import "./ListingsCard.scss";

import trashIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

import { Link } from "react-router-dom";

const ListingsCard = ({ path, dataItem }) => {
  return (
    <>
      <article className="listingsCard">
        {path === "warehouses" ? (
          <>
            <div className="listingsCard__cont listingsCard__cont--first">
              <h4 className="listingsCard__title">WAREHOUSE</h4>
              <Link to={`/warehouses/${dataItem.id}/inventories`}>
                <h3 className="listingsCard__text listingsCard__text--blue">
                  {dataItem.city}{" "}
                  <img
                    className="listingsCard__chev"
                    src={chevronIcon}
                    alt="chevron"
                  />
                </h3>
              </Link>
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">ADDRESS</h4>
              <p className="listingsCard__text">{`${dataItem.address}, ${dataItem.city}, ${dataItem.country}`}</p>
            </div>

            <div className="listingsCard__cont listingsCard__cont--second">
              <h4 className="listingsCard__title">CONTACT NAME</h4>
              <p className="listingsCard__text">{dataItem.contact_name}</p>
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">CONTACT INFORMATION</h4>
              <p className="listingsCard__text">{dataItem.contact_phone}</p>
              <p className="listingsCard__text">{dataItem.contact_email}</p>
            </div>

            <div className="listingsCard__cont">
              <Link to={`/`}>
                <img
                  className="listingsCard__img"
                  src={trashIcon}
                  alt="trashbin"
                />
              </Link>
              <Link to={`/warehouses/${dataItem.id}/edit`}>
                <img
                  className="listingsCard__img"
                  src={editIcon}
                  alt="pencil"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="listingsCard__cont listingsCard__cont--first">
              <h4 className="listingsCard__title">INVENTORY ITEM</h4>
              <Link to={`/warehouses/${dataItem.id}/inventories`}>
                <h3 className="listingsCard__text listingsCard__text--blue">
                  {dataItem.item_name}{" "}
                  <img
                    className="listingsCard__chev"
                    src={chevronIcon}
                    alt="chevron"
                  />
                </h3>
              </Link>
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">CATEGORY</h4>
              <p className="listingsCard__text">{dataItem.category}</p>
            </div>

            <div className="listingsCard__cont listingsCard__cont--second">
              <h4 className="listingsCard__title">STATUS</h4>
              <p
                className={`listingsCard__text ${
                  dataItem.status === "In Stock"
                    ? "listingsCard__text--inStock"
                    : "listingsCard__text--oos"
                }`}
              >
                {dataItem.status}
              </p>
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">QUANTITY</h4>
              <p className="listingsCard__text">{dataItem.quantity}</p>
            </div>

            {path === "inventories" && (
              <div className="listingsCard__cont listingsCard__cont--right">
                <h4 className="listingsCard__title">WAREHOUSE</h4>
                <p className="listingsCard__text">{dataItem.warehouse_name}</p>
              </div>
            )}

            <div className="listingsCard__cont">
              <img
                className="listingsCard__img"
                src={trashIcon}
                alt="trashbin"
              />
              <img className="listingsCard__img" src={editIcon} alt="pencil" />
            </div>
          </>
        )}
      </article>
    </>
  );
};

export default ListingsCard;
