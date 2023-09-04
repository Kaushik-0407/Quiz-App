import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherVerify = () => {
  const navigate = useNavigate();
  const [Code, SetCode] = useState("");
  const VerificationCode = "Tea0407";

  const handelverify = () => {
    if (VerificationCode === Code) {
      alert("OK");
      navigate("/setquiz");
      window.location.reload();
    } else {
      alert("Not OK");
    }
  };
  const handelcode = (e) => {
    SetCode(e.target.value);
  };
  return (
    <div
      class="modal fade"
      id="verifyteacher"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content ">
          <div
            class="modal-header d-flex justify-content-center"
            style={{
              backgroundImage:
                "linear-gradient(189deg, rgba(245,255,183,1) 0%, rgba(179,255,191,1) 100%)",
            }}
          >
            <h6 class="modal-title" id="exampleModalLongTitle">
              Verify Teacher
            </h6>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Verification Code"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handelcode}
            />
            <button
              type="button"
              class="btn btn-success mt-2"
              onClick={handelverify}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherVerify;
