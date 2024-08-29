import { useNavigate } from "react-router-dom";

const useRedirectAfterLogin = (defaultPath = "/") => {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    if (path === "/gp") {
      navigate(path);
    } else {
      navigate("/");
    }
  };
  return { redirectTo };
};

export default useRedirectAfterLogin;
