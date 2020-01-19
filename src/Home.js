import React from "react"
import Paper from '@material-ui/core/Paper';
import ListAlt from '@material-ui/icons/ListAlt';
import Search from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom";


const Home = () => {

    return <div className="homeContainer">
        <Button>
            <Link to="/form">
                <Paper className="paper">
                    <div><ListAlt style={{fontSize: 70}}/></div>
                    <div>New Application</div>
                </Paper>
            </Link>
        </Button>

        <Button>
            <Link to="/find">
                <Paper className="paper">
                    <div><Search style={{fontSize: 70}}/></div>
                    <div>Find Application</div>
                </Paper>
            </Link>
        </Button>
    </div>;
};

export default Home
