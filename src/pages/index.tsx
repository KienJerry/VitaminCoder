import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserRequest } from "@/store/auth/actions";
import { getProfileSelector } from "@/store/auth/selectors";

const Index = () => {
  const dispatch = useDispatch();

  console.log(useSelector(getProfileSelector));

  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  return <div>1</div>;
};

export default Index;
