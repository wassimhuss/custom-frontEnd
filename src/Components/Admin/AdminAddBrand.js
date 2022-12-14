import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import avatar from "../../images/avatar.png";
import AddBrandHook from "./../../hook/brand/add-brand-hook";
const AdminAddBrand = ({ onClose }) => {
  const [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ] = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-center">
        <div className="admin-content-text-2 pb-4">add new brand</div>
        <Col sm="12">
          <div className="text-form pb-2">brand image</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            type="text"
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="brand name"
            onChange={onChangeName}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            create
          </button>
        </Col>
      </Row>

      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h4>brand created </h4>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddBrand;
