import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import searchLogo from "../../assets/icons/search-icon.svg";
import cartLogo from "../../assets/icons/cart.svg";
import exitLogo from '../../assets/icons/exit-logo.svg'
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useReduxDispatch} from "../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../redux/modal-slice";

const Navbar = () => {
  const dispatch = useReduxDispatch()
  
  const navigate = useNavigate()

  return (
    <>
      <header className="navbar">
        <div className="container w-[90%] m-auto flex items-center justify-between p-[3rem] border-b border-green-500 border-opacity-50  ">
          <Link className="header-left" to={"/"}>
            {" "}
            <img  className="w-[15rem] h-[3.4rem] " src={logo} alt="" />{" "}
          </Link>
          <nav className="header-center h-full font-normal text-[1.6rem] text-[#3D3D3D] flex items-center gap-[5rem]">
            <h3 onClick={()=> navigate("/")} className="font-bold !text-[#46A358] menu-item active cursor-pointer">Home</h3>
            <h3 onClick={()=> navigate("/blog")} className="cursor-pointer"  >Blog</h3>
          </nav>
          <nav className="header-right flex items-center gap-[3rem]">
            <button>
              <img src={searchLogo} alt="search" />
            </button>
            <button className="text-[2.4rem]">
                <BellOutlined/>
            </button>
            <button>
                <Badge count={0} showZero>
              <img src={cartLogo} alt="cart" />
                </Badge>
            </button>
            <button onClick={()=> dispatch(setAuthorizationModalVisibility({open:true , isLoading:false}))} className="bg-[#46a358] w-[10rem] h-[3.5rem] rounded-[0.6rem] flex items-center justify-center gap-[0.4rem] font-medium text-[1.6rem] text-[#fff] ">
                <img src={exitLogo} alt="" />
                Login
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
