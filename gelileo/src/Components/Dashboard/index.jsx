import React, { useEffect, useState } from "react";
import Layout from "../LayOut";
import DataTable from "react-data-table-component";
import EditImg from "../../assets/edit.png";
import axios from "axios";
import ModalPopup from "../CustomModal";
import CountUp from "react-countup";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState();
  const getData = async () => {
    const api = "https://dummyjson.com/users";
    try {
      const response = await axios.get(api);
      setData(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (row) => {
    setEditData(row);
    setShowModal(true);
  };

  const handleCancel_new = () => {
    setShowModal(false);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="actions">
          <div className="d-flex row">
            <img
              src={EditImg}
              style={{ width: "40px" }}
              onClick={() => handleEdit(row)}
            />
          </div>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container">
          <div className="cardContainer mt-3 gap-3">
            <div
              className="card cardWidth card-border-none w-20 shadow  "
              id="cardWidth"
            >
              <div className="d-flex justify-between">
                <div className="card-body">
                  <p className="CountText">Total No of Forms Created </p>
                  <p className="CountNumber"> 
                    <CountUp start={0} end={32} duration={1} />
                  </p>
                </div>
                <div className="image-fluid">
                  Img
                  {/* <img alt="sfs" src={formIcon} style={{ width: "60px", marginTop: "20px" }} /> */}
                </div>
              </div>
            </div>

            <div
              className="card cardWidth  card-border-none w-20 shadow  "
              id="cardWidth"
            >
              <div className="d-flex justify-between">
                <div className="card-body">
                  <p className="CountText">Total No of Forms Submitted</p>
                  <p className="CountNumber"> 
                    <CountUp start={0} end={65} duration={1} />
                  </p>
                </div>
                <div className="image-fluid">
                  Img
                  {/* <img  alt="sfs"  src={submissionFormIcon}  style={{ width: "60px", marginTop: "20px" }}  /> */}
                </div>
              </div>
            </div>

            <div
              className="card cardWidth  card-border-none w-20 shadow "
              id="cardWidth"
            >
              <div className="d-flex justify-between">
                <div className="card-body">
                  <p className="CountPendingText">
                    Total No of Forms Pending For Submission{" "}
                  </p>
                  <p className="CountNumber">
                    <CountUp  start={0}  end={55} duration={1}  />
                  </p>
                </div>
                <div className="image-fluid">
                  Img
                  {/* <img
                    alt="sfs"
                    src={PendingIcon}
                    style={{ width: "60px", marginTop: "20px" }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <DataTable
            title="User List"
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
          />
          <ModalPopup
            showModal={showModal}
            tittle={"User Data"}
            handleCancel_new={handleCancel_new}
            buttonText={"Submit"}
            childrens={
              <div className="d-flex row ">
                <div className="col-6 ">
                  <label>{"Name"} : </label>
                  <span> {editData?.firstName}</span>
                </div>
                <div className="col-6">
                <label>{"Last Name"} : </label>
                <span> {editData?.lastName}</span>
                </div>
              </div>
            }
          />
        </div>
      </Layout>
    </>
  );
};
