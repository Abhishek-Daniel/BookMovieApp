import React, { useState, useEffect } from 'react'
import Header from '../../common/header/Header'
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {

        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
    },
    title: {
        color: theme.palette.primary.light,
    }
});

const Home = (props) => {

    const [movieName, setmovieName] = useState("");
    const releasedMovies = [
        {
        id: 0,
        poster_url: "http://image.tmdb.org/t/p/w500//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        movieName: "Free Guy",
        title: "Free Guy",
        release_date: "Sep 17, 2021"
    },
    {
        id: 1,
        poster_url: "http://image.tmdb.org/t/p/w500//qmJGd5IfURq8iPQ9KF3les47vFS.jpg",
        movieName: "Halloween Kills",
        title: "Halloween Kills",
        release_date: "Oct 15, 2021"

    },
    {
        id: 2,
        poster_url: "http://image.tmdb.org/t/p/w500//dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
        movieName: "After We Fell",
        title: "After We Fell",
        release_date: "Sep 30, 2021"

    }, {
        id: 3,
        poster_url: "http://image.tmdb.org/t/p/w500//rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        movieName: "Venom: Let There Be Carnage",
        title: "Venom: Let There Be Carnage",
        release_date: "Oct 01, 2021"
    },
    {
        id: 4,
        poster_url: "http://image.tmdb.org/t/p/w500//9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
        movieName: "Jungle Cruise",
        title: "Jungle Cruise",
        release_date: "Sep 24, 2021"

    },
    {
        id: 5,
        poster_url: "http://image.tmdb.org/t/p/w500//hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg",
        movieName: "Don't Breathe 2",
        title: "Don't Breathe 2",
        release_date: "Sep 17, 2021"

    }, {
        id: 6,
        poster_url: "http://image.tmdb.org/t/p/w500//xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg",
        movieName: "The Addams Family 2",
        title: "The Addams Family 2",
        release_date: "Oct 1, 2021"
    },
    {
        id: 7,
        poster_url: "http://image.tmdb.org/t/p/w500//dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg",
        movieName: "Malignant",
        title: "Malignant",
        release_date: "Sep 01, 2021"

    },
    {
        id: 8,
        poster_url: "http://image.tmdb.org/t/p/w500//w14VAFlUKl3rCx6P8AHhkqowIeT.jpg",
        movieName: "Sweat",
        title: "Sweat",
        release_date: "Mar 12, 2021"

    },
    {
        id: 9,
        poster_url: "http://image.tmdb.org/t/p/w500//j5HRzcvN1QXZLvwfc3NLxX8XQJY.jpg",
        movieName: "Prisoners of the Ghostland",
        title: "Prisoners of the Ghostland",
        release_date: "Aug 31, 2021"

    }];

    const genresList = ([
        {
            id: "0",
            genre: "Drama",
            description: "Drama"
        },
        {
            "id": "2d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Romance",
            "description": "Romance"
        },
        {
            "id": "3d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Horror",
            "description": "Horror"
        },
        {
            "id": "4d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Action",
            "description": "Action"
        },
        {
            "id": "5d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Crime",
            "description": "Crime"
        },
        {
            "id": "6d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Thriller",
            "description": "Thriller"
        },
        {
            "id": "7d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Political",
            "description": "Political"
        },
        {
            "id": "8d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Social",
            "description": "Social"
        },
        {
            "id": "9d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Fantasy",
            "description": "Fantasy"
        },
        {
            "id": "aa174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Suspense",
            "description": "Suspense"
        },
        {
            "id": "bb174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Adventure",
            "description": "Adventure"
        },
        {
            "id": "cc174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Comedy",
            "description": "Comedy"
        },
        {
            "id": "dd174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Scifi",
            "description": "Science Fiction"
        },
        {
            "id": "ee174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "genre": "Historical",
            "description": "Historical"
        }
    ]);
    const [artistsList, setartistsList] = useState([{}]);
    const [genres, setgenres] = useState([]);
    const [artists, setartists] = useState([]);
    const [releaseDateStart, setreleaseDateStart] = useState("");
    const [releaseDateEnd, setreleaseDateEnd] = useState("");

    const upcomingMovies = [{
        id: 0,
        poster_url: "http://image.tmdb.org/t/p/w500//4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
        movieName: "My Hero Academia: World Heroes' Mission",
        title: "My Hero Academia: World Heroes' Mission"
    },
    {
        id: 1,
        poster_url: "http://image.tmdb.org/t/p/w500//zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
        movieName: "The Last Duel",
        title: "The Last Duel"

    },
    {
        id: 2,
        poster_url: "http://image.tmdb.org/t/p/w500//pOaKyhMwALpCTg07eQQu0SQCbL9.jpg",
        movieName: "The Batman",
        title: "The Batman"

    }, {
        id: 3,
        poster_url: "http://image.tmdb.org/t/p/w500//klsDRXM68wV7vZTTaAOuu62VNA1.jpg",
        movieName: "Antlers",
        title: "Antlers"
    },
    {
        id: 4,
        poster_url: "http://image.tmdb.org/t/p/w500//gA9QxSravC2EVEkEKgyEmDrfL0e.jpg",
        movieName: "Ron's Gone Wrong",
        title: "Ron's Gone Wrong"

    },
    {
        id: 5,
        poster_url: "http://image.tmdb.org/t/p/w500//biRxGAHSPNdJwJB7l5796pDtVph.jpg",
        movieName: "The Beta Test",
        title: "The Beta Test"

    }, {
        id: 6,
        poster_url: "http://image.tmdb.org/t/p/w500//8RqcNsOlnRCH1XqU1YwtFBavqqm.jpg",
        movieName: "Becoming Cousteau",
        title: "Becoming Cousteau"
    },
    {
        id: 7,
        poster_url: "http://image.tmdb.org/t/p/w500//6IVRkhRno0Y6Zu63VI7THNMiMZG.jpg",
        movieName: "13 Minutes",
        title: "13 Minutes"

    },
    {
        id: 8,
        poster_url: "http://image.tmdb.org/t/p/w500//lz1SZ43tN30GoEW3uANx5cWtZSQ.jpg",
        movieName: "Clifford the Big Red Dog",
        title: "Clifford the Big Red Dog"

    },
    {
        id: 9,
        poster_url: "http://image.tmdb.org/t/p/w500//iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
        movieName: "No Time to Die",
        title: "No Time to Die"

    }
    ];



    useEffect(() => {
        // getGenres();
        // getMovies();

    }, []);

    const movieNameChangeHandler = event => {
        setmovieName(event.target.value);
        console.log(movieName)
    }

    const genreSelectHandler = event => {
        setgenres(event.target.value);
    }

    const artistsSelectHandler = event => {
        setartists(event.target.value);
    }

    const releaseDateStartHandler = event => {
        setreleaseDateStart(event.target.value);
    }

    const releaseDateEndHandler = event => {
        setreleaseDateEnd(event.target.value);
    }


    const filterApplyHandler = () => {

        let queryString = "?status=RELEASED";
        if (movieName !== "") {
            queryString += "&title=" + movieName;
        }
        if (genres.length > 0) {
            queryString += "&genres=" + genres.toString();
        }
        if (artists.length > 0) {
            queryString += "&artist_name=" + artists.toString();
        }
        if (releaseDateStart !== "") {
            queryString += "&start_date=" + releaseDateStart
        }
        if (releaseDateEnd !== "") {
            queryString += "&end_date=" + releaseDateEnd
        }
        

    }
    const { classes } = props;

    const movieClickHandler = (movieId) => {
        props.history.push('/movie/' + movieId);

    }

    return (
        <div>
            <div>
                <Header baseUrl={props.baseUrl} />
                <div className={classes.upcomingMoviesHeading}>
                    <span> Upcoming Movies </span>
                </div>
                <GridList cols={6} className={classes.gridListUpcomingMovies}>
                    {upcomingMovies.map(movie => (
                        <GridListTile key={"upcoming" + movie.id}>
                            <img src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
                </GridList>


                <div className="grid-list-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {releasedMovies.map(movie => (
                                <GridListTile onClick={() => movieClickHandler(movie.id)} className="marginMovie" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName"> Movie Name </InputLabel>
                                    <Input id="movieName" onChange={movieNameChangeHandler} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox"> Genre</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={genres}
                                        onChange={genreSelectHandler}>
                                        <MenuItem value="0">None
                                        </MenuItem>
                                        {genresList.map(genre => (
                                            <MenuItem key={"genre" + genre.id} value={genre.genre}>
                                                <Checkbox checked={genres.indexOf(genre.genre) > - 1} />
                                                <ListItemText primary={genre.genre} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox"> Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={artists}
                                        onChange={artistsSelectHandler}>
                                        <MenuItem value="0">None
                                        </MenuItem>
                                        {artistsList.map(artist => (
                                            <MenuItem key={"artist" + artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={artists.indexOf(artist.first_name + " " + artist.last_name) > - 1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateStart"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                        onChange={releaseDateStartHandler}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateEnd"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                        onChange={releaseDateEndHandler}
                                    />
                                </FormControl><br /><br />
                                <FormControl className={classes.formControl}>
                                    <Button onClick={() => filterApplyHandler()} variant="contained" color="primary">
                                        APPLY
                                    </Button>
                                </FormControl>

                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default withStyles(styles)(Home);