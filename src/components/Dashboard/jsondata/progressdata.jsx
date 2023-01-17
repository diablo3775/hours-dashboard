import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import WarningIcon from '@mui/icons-material/Warning';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GridViewIcon from '@mui/icons-material/GridView';

let progressdata = [
    {
        icon: <GridViewIcon  sx={{ fontSize: "50px" }} />,
        number: 5,
        name: "Toal Projects",
        id: 1
    },
    {
        icon: <TaskAltIcon sx={{ fontSize: "50px" }} />,
        number: 1,
        name: "Completed",
        id: 2
    },
    {
        icon: <SyncOutlinedIcon sx={{ fontSize: "50px" }} />,
        number: 3,
        name: "Ongoing",
        id: 3
    },
    {
        icon: <WarningIcon sx={{ fontSize: "50px",color: 'red'  }} />,
        number: 1,
        name: "Delayed",
        id: 4
    },
    {
        icon: <PeopleAltIcon sx={{ fontSize: "50px"}} />,
        number: 5,
        name: "Employees",
        id: 5
    },
]

export default progressdata;