import React, { useCallback } from "react";
import MstLogin from "../views/MSTLogin";
import { userStore } from "../mobx/store";
import { useNavigate } from "react-router-dom";

const MstContainer: React.FC = () => {
  const navigate = useNavigate();

  const onFormSubmit = useCallback(() => {
    if (userStore.validateEmail() && userStore.validatePassword()) {
      userStore.submit();
      navigate("/login-mst/success");
    }
  }, []);

  return <MstLogin onButtonClick={onFormSubmit} />;
};
export default MstContainer;
