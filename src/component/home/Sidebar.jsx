import SearchBar from "../sidbar/SearchBar";
import Toggle_User_Group from "../sidbar/Toggle_User_Group";
import SidBarHeader from "../sidbar/SidBarHeader";
// import AllUsers from "../sidbar/AllUsers";

const Sidebar = (props) => {
  const {openModal} =props
  return (
    <div className="bgside h-lvh overflow-hidden text-white  ">
      <SidBarHeader openModal={openModal}/>
      <SearchBar />
      <Toggle_User_Group />
      {/* <AllUsers /> */}
    </div>
  );
};

export default Sidebar;
