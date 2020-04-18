import Home from "../../container/Home";
import About from "../../container/About";
import ListItem from "../../container/ListItem";
import ManagerUsers from "../ManagerUsers/ManagerUsers";
import Title2 from '../../container/Title2';

const routes = [
  {
    path: "Home",
    component: Home,
  },
  {
    path: "About",
    component: About,
  },
  {
    path: "ManagerUsers",
    component: ManagerUsers,
  },
  {
    path: "Listitem",
    component: ListItem,
  },
  {
    path: "Title2",
    component: Title2,
  },
];
export default routes;