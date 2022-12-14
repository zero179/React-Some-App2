import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className= 'sidebar'>
        <div className='top'>
            <span className="logo">SimonFenko</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><GroupIcon className="icon"/><span>Users</span></li>
                <li><StoreIcon className="icon"/><span>Products</span></li>
                <li><BorderAllIcon className="icon"/><span>Orders</span></li>
                <li><ElectricRickshawIcon className="icon"/><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                <li><NotificationsIcon className="icon"/><span>Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><FavoriteIcon className="icon"/><span>System Health</span></li>
                <li><PsychologyIcon className="icon"/><span>Logs</span></li>
                <li><SettingsIcon className="icon"/><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
                <li><LogoutIcon className="icon"/><span>Logout</span></li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar