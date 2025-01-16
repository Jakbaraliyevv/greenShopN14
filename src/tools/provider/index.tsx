import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { QueryClient, QueryClientProvider } from "react-query";

const storeAuth = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const queryClient = new QueryClient();

const ProviderConfg = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider store={storeAuth}>
          <Provider store={store}>
            <Modals /> {children}
          </Provider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default ProviderConfg;
