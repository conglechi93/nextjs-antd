import {FaRegCalendarAlt, FaRegHospital} from 'react-icons/fa';
import {FiMap, FiUsers} from 'react-icons/fi';
import {HiOutlineAcademicCap, HiOutlineChartSquareBar} from 'react-icons/hi';
import {
  RiCustomerService2Line,
  RiDashboardLine,
  RiShieldUserLine,
  RiTodoLine,
} from 'react-icons/ri';
import {BiCarousel, BiCartAlt, BiErrorAlt} from 'react-icons/bi';
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,
  BsQuestionDiamond,
} from 'react-icons/bs';
import {DiHtml5Multimedia} from 'react-icons/di';
import {
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import {CgFeed} from 'react-icons/cg';
import {ImFeed, ImLab} from 'react-icons/im';
import {GrDatabase, GrNavigate} from 'react-icons/gr';
import {VscTable, VscTools} from 'react-icons/vsc';
import {AiOutlineLayout, AiOutlineUnorderedList} from 'react-icons/ai';

const routesConfig = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'home',
        title: 'Home',
        messageId: 'Home',
        type: 'item',
        icon: <BsCurrencyBitcoin />,
        url: '/home',
      },
      {
        id: 'project',
        title: 'Project',
        messageId: 'Project',
        type: 'item',
        icon: <BsCurrencyBitcoin />,
        url: '/project',
      },
    ],
  },
];
export default routesConfig;
