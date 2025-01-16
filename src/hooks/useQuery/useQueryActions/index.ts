import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
import { setAuthorizationModalVisibility } from "../../../redux/modal-slice";
import { useDispatch } from "react-redux";
import { notificationApi } from "../../../generic/notification";
import { signInWithGoogle } from "../../../config";
import { useReduxDispatch } from "../../useRedux";
import { AuthUser } from "../../../@types";

const useLogin = () => {
  const dispatch = useDispatch();
  const notify = notificationApi();
  const axios = useAxios();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-in", body: data, method: "POST" }),
    onSuccess: ({data} : {data:{token:string , user:AuthUser}}) => {
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoadnig: false })
      );
      const { token } = data;
      localStorage.setItem("token", token);
      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoadnig: false })
      );
    },
  });
};

const loginWithGoogle = () => {
  const dispatch = useDispatch();
  const notify = notificationApi();

  const axios = useAxios();
  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return await axios({
        url: "/user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: ({data} : {data:{token:string , user:AuthUser}}) => {
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoadnig: false })
      );
      const { token } = data;
      localStorage.setItem("token", token);
      notify("login");
      console.log(data);
    },
    onError: (error: { status: 409 }) => {
      if (error.status === 409) notify(409);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoading: false })
      );
    },
  });
};

const useRegister = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-up/", method: "POST", body: data }),
    onSuccess: ({data} : {data:{token:string , user:AuthUser}}) => {
      console.log(data);
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoading: false })
      );
      notify("register");
    },
    onError: (error: { status: 406 }) => {
      if (error.status === 406) notify(error.status);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoading: false })
      );
    },
  });
};

const useRegisterWithGoogle = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "/user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: ({data} : {data:{token:string , user:AuthUser}}) => {
      const { token } = data;
      localStorage.setItem("token", token);
      notify("register");
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoading: false })
      );
    },
    onError: (error) => {
      console.log(error);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoading: false })
      );
      notify(406);
    },
  });
};

export { useLogin, loginWithGoogle, useRegister, useRegisterWithGoogle };
