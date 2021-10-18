import React from 'react'
import Header from '../../common/header/Header'
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default function Home() {
    return (
        <div>
            <Header/>
            <div className="upComingMoviesHeading">
                <span>Upcoming Movies</span>
            </div>
        </div>
    )
}
