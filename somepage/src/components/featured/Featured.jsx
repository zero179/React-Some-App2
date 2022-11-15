import "./featured.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className= "title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="description">Previous transactions processing. Last payment may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target
                        <div className="itemResultpositive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">$12.4k
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week
                        <div className="itemResultnegative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">$12.4k
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month
                        <div className="itemResultpositive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">$12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured