import { notification } from "antd";

type Notificationtype = "login" | "register" | "password" | 406 | 409;

const notificationApi = () => {
  const notify = (props: Notificationtype) => {
    switch (props) {
      case "login":
        return notification.success({ message: "Login succesfuly" });
      case "register":
        return notification.success({ message: "Register succesfuly" });
      case "password":
        return notification.error({
          message: "Confirm password is not match ! ",
        });

      case 406:
        return notification.error({
          message: "The user has already registered",
        });

      case 409:
        return notification.error({
          message: "Loign or password wrong ! ",
        });
      default:
        break;
    }
  };
  return notify;
};

export { notificationApi };
