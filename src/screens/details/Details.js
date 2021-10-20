import React, {useState} from 'react'
import Header from '../../common/header/Header'
import Typography from '@material-ui/core/Typography';
import './Details.css';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';


export default function Details(props) {

    
    const settedID = props.match.params.id;

    const movie = [
        {
            movieposter_url: "http://image.tmdb.org/t/p/w500//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
            trailer_url: "https://www.youtube.com/watch?v=X2m-08cOAbc",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Ryan_Reynolds",
                id: 0,
                first_name: "Ryan",
                last_name: "Reynolds",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/220px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg"
            }, {
                wiki_url: "https://en.wikipedia.org/wiki/Jodie_Comer",
                id: 1,
                first_name: "Jodie",
                last_name: "Comer",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Jodie_Comer_during_an_interview%2C_September_2021.png/220px-Jodie_Comer_during_an_interview%2C_September_2021.png"
            }],
            title: "Free Guy",
            genres: ["Action", "Comedy"],
            duration: "115",
            release_date: "Sep 17, 2021",
            critics_rating: 4,
            wiki_url: "https://en.wikipedia.org/wiki/Free_Guy",
            storyline: "Guy (Ryan Reynolds) is a bank teller and a non-playable character in an open world video game called Free City.All is going well in his virtual world until publisher Antoine (Taika Waititi) decides to insert a code developed by programmers Keys (Joe Keery) and Milly (Jodie Comer) into the game. All of a sudden, he finds himself imbued with consciousness. As he grows increasingly aware of his surroundings, he is confronted with the fact that he is a background character and that he is the only person who can save their game from going offline. Directed by Shawn Levy.",
            artistsMap: 1,

        },
        {
            movieposter_url: "http://image.tmdb.org/t/p/w300//qmJGd5IfURq8iPQ9KF3les47vFS.jpg",
            trailer_url: "https://www.youtube.com/watch?v=hL6R3HmQfPc",
            title: "Halloween Kills",
            genres: ["Horror", "Thriller"],
            duration: "106",
            release_date: "Oct 15, 2021",
            critics_rating: 2.5,
            wiki_url: "https://en.wikipedia.org/wiki/Halloween_Kills",
            storyline: "Laurie Strode (Jamie Lee Curtis) comes out triumphant in her showdown with Michael Myers after she leaves him burning in a cage in her basement. Though badly injured, she begins to feel a sense of relief, thinking she has finally gotten rid of her lifelong tormentor. When the senseless bloodbath resumes, she is alerted that the evil serial killer has survived and that once again, she has to gear up to take him on. This time, however, the whole of Haddonfield rallies behind her, intent on eliminating Michael once and for all. Directed by David Gordon Green.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Jamie_Lee_Curtis",
                id: 0,
                first_name: "Jamie",
                last_name: "Lee Curtis",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jamie_Lee_Curtis_%2841851191720%29_%28cropped%29.jpg/220px-Jamie_Lee_Curtis_%2841851191720%29_%28cropped%29.jpg"
            }],
        }, {
            movieposter_url: "http://image.tmdb.org/t/p/w300//dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
            trailer_url: "https://www.youtube.com/watch?v=3OHPCurXcTU",
            title: "After We Fell",
            genres: ["Drama", "Romance"],
            duration: "99",
            release_date: "Sep 30, 2021",
            critics_rating: 1,
            wiki_url: "https://en.wikipedia.org/wiki/After_We_Fell",
            storyline: "Based on the book series by Anna Todd, this romantic drama is the third installment in the film adaptation series and directed by Castille Landon. The story follows Tessa Young (Josephine Langford) and Hardin Scott (Hero Fiennes Tiffin) as they continue their relationship following the arrival of Tessa’s estranged father. But this incident soon reveals a secret about Tessa’s family that, once she discovers it, turns her life upside down. As it turns out, Hardin also harbors family secrets of his own, which could jeopardize their relationship anew. Co-starring Mira Sorvino and Rob Estes.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Josephine_Langford",
                id: 0,
                first_name: "Josephine ",
                last_name: "Langford",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Josephine_Langford_NYC_2019.png/220px-Josephine_Langford_NYC_2019.png"
            },{
                wiki_url: "https://en.wikipedia.org/wiki/Hero_Fiennes_Tiffin",
                id: 1,
                first_name: "Hero",
                last_name: "Fiennes Tiffin",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hero_Fiennes-Tiffin_NYC_2019.png/220px-Hero_Fiennes-Tiffin_NYC_2019.png"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w300//rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
            trailer_url: "https://www.youtube.com/watch?v=-ezfi6FQ8Ds",
            title: "Venom: Let There Be Carnage",
            genres: ["Action", "Adventure", "Science Fiction"],
            duration: "120",
            release_date: "Sep 17, 2021 ",
            critics_rating: 3,
            wiki_url: "https://en.wikipedia.org/wiki/Venom:_Let_There_Be_Carnage",
            storyline: "Eddie Brock (Tom Hardy) spends his days in isolation, striving to arrive at some semblance of haphazard harmony with the creature Venom. However, Eddie's tenuous sense of peace descends into chaos when the psychologists at Ravencroft Institute for the Criminally Insane begin experimenting upon Cletus Kasady (Woody Harrelson), unleashing a creature that Eddie knows only he and Venom are strong enough to face in battle. Directed by Andy Serkis. Michelle Williams, Naomie Harris, and Stephen Graham co-star.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Tom_Hardy",
                id: 0,
                first_name: "Tom",
                last_name: "Hardy",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
            },{
                wiki_url: "https://en.wikipedia.org/wiki/Woody_Harrelson",
                id: 1,
                first_name: "Woody",
                last_name: "Harrelson",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Woody_Harrelson_October_2016.jpg/220px-Woody_Harrelson_October_2016.jpg"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w300//9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
            trailer_url: "https://www.youtube.com/watch?v=f_HvoipFcA8",
            title: "Jungle Cruise",
            genres: ["Adventure", "Comedy"],
            duration: "129",
            release_date: "Jul 30, 2021",
            critics_rating: 4,
            wiki_url: "https://en.wikipedia.org/wiki/Jungle_Cruise",
            storyline: "Deep in the Amazon, intrepid riverboat captain Frank Wolff (Dwayne Johnson) forms an unlikely partnership with Dr. Lily Houghton (Emily Blunt), a sharp and charming researcher from London intent on studying a fabled tree with remarkable healing properties. As Frank and Lily navigate the risks of the rainforest's uncharted wilderness, the pair come up against a cohort of sinister foes determined to use the tree for nefarious purposes. Inspired by the theme park ride at Disneyland. Directed by Jaume Collet-Serra. Co-starring Edgar Ramírez, Jesse Plemons, and Paul Giamatti.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Dwayne_Johnson",
                id: 0,
                first_name: "Dwayne",
                last_name: "Johnson",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/220px-Dwayne_Johnson_2014_%28cropped%29.jpg"
            },{
                wiki_url: "https://en.wikipedia.org/wiki/Emily_Blunt",
                id: 1,
                first_name: "Emily",
                last_name: "Blunt",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emily_Blunt_SAG_Awards_2019.png/220px-Emily_Blunt_SAG_Awards_2019.png"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w500//hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg",
            trailer_url: "https://www.youtube.com/watch?v=dCDLPlZAoeY",
            title: "Don't Breathe 2",
            genres: ["Crime", "Horror", "Thriller"],
            duration: "98",
            release_date: "Aug 13, 2021",
            critics_rating: 3.5,
            wiki_url: "https://en.wikipedia.org/wiki/Don%27t_Breathe_2",
            storyline: "This horror thriller and sequel to Don’t Breathe (2016) stars Stephen Lang as Norman Nordstrom aka “The Blind Man”, a world-weary man who lives in a secluded cabin with an orphaned young girl whom he helped raise after a house fire claimed her parents' lives. Only familiar with each others’ company and the quiet of nature, their world is turned upside down after the girl is kidnapped; forcing The Blind Man to leave behind all he knows to track her down. Directed, co-written and co-produced by Rodo Sayagues. Co-starring Rocci Williams, Stephanie Arcila, and Bobby Schofield.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Stephen_Lang",
                id: 0,
                first_name: "Stephen",
                last_name: "Lang",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Stephen_Lang_2014.jpg/220px-Stephen_Lang_2014.jpg"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w300//xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg",
            trailer_url: "https://www.youtube.com/watch?v=Kd82bSBDE84",
            title: "The Addams Family 2",
            genres: ["Action", "Comedy", "Fantasy"],
            duration: "93",
            release_date: "Oct 1, 2021",
            critics_rating: 2.5,
            wiki_url: "https://en.wikipedia.org/wiki/The_Addams_Family_2",
            storyline: "In this animated sequel to the 2019 film, Charlize Theron voices Morticia Addams once again as the family matriarch who suddenly feels that their growing children, Wednesday (Chloë Grace Moretz) and Pugsley (Javon Walton), are getting emotionally detached from the family unit. Thus, their father Gomez (Oscar Isaac) devises a way to make the whole family bond again – through a cross-country road trip via a haunted camper. Directed by Greg Tiernan, Conrad Vernon, Laura Brousseau, and Kevin Pavlovic. Co-starring Bill Hader, Bette Midler, and Snoop Dogg.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Charlize_Theron",
                id: 0,
                first_name: "Charlize",
                last_name: "Theron",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Charlize-theron-IMG_6045.jpg/220px-Charlize-theron-IMG_6045.jpg"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w300//dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg",
            trailer_url: "https://www.youtube.com/watch?v=Gczt0fhawDs",
            title: "Malignant",
            genres: ["Horror"],
            duration: "111",
            release_date: "Sep 10, 2021",
            critics_rating: 1,
            wiki_url: "https://en.wikipedia.org/wiki/Malignancy",
            storyline: "Madison Mitchell (Annabelle Wallis) is a woman with a troubled past and is frequently tormented by nightmares in which she has visions of gruesome murders. Her panic turns to downright fear when she understands that these horrors are actually real-life bruatl killings executed by a terrifyingly evil figure, known as Gabriel. Directed by James Wan; written for the screen by Akela Cooper.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Annabelle_Wallis",
                id: 0,
                first_name: "Annabelle",
                last_name: "Wallis",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Annabelle_Wallis_%2834027166033%29.jpg/220px-Annabelle_Wallis_%2834027166033%29.jpg"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w300//w14VAFlUKl3rCx6P8AHhkqowIeT.jpg",
            trailer_url: "https://www.youtube.com/watch?v=vUcbYj2tOZM",
            title: "Sweat",
            genres: ["Drama"],
            duration: "106",
            release_date: "Mar 12, 2021",
            critics_rating: 1,
            wiki_url: "https://en.wikipedia.org/wiki/Sweat",
            storyline: "This drama written and directed by Magnus Von Horn follows the life of social media fitness sensation Sylwia Zajac (Magdalena Kolesnik), a beautiful and disciplined personal trainer with a huge legion of fans. Working on and offline on her fitness empire, the attention she receives is mostly good but sometimes bad. After scares from a stalker and a male friend expecting sexual rewards for a favor, she yearns for real connection and an authentic relationship.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Aleksandra_Konieczna",
                id: 0,
                first_name: "Aleksandra",
                last_name: "Konieczna",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Aleksandra_Konieczna_-_Szczecin_2019.jpg/220px-Aleksandra_Konieczna_-_Szczecin_2019.jpg"
            }],
        },{
            movieposter_url: "http://image.tmdb.org/t/p/w300//j5HRzcvN1QXZLvwfc3NLxX8XQJY.jpg",
            trailer_url: "https://www.youtube.com/watch?v=XYkIKokdr3U",
            title: "Prisoners of the Ghostland",
            genres: ["Action, Adventure, Horror"],
            duration: "103",
            release_date: "Aug 31, 2021",
            critics_rating: 3,
            wiki_url: "https://en.wikipedia.org/wiki/Prisoners_of_the_Ghostland",
            storyline: "Nicolas Cage, Sofia Boutella, Bill Moseley, and Nick Cassavetes star in director Sion Sono’s neo-noir western action film. In exchange for his freedom, an infamous bank robber journeys into Ghostland – a dark, mysterious, and supernatural universe – to rescue a wealthy warlord’s daughter. If he fails to do so within five days, the explosives strapped to his leather suit will kill him. Co-starring Tak Sakaguchi, Canon Nawata, and Jeffrey Rowe.",
            artists: [{
                wiki_url: "https://en.wikipedia.org/wiki/Nicolas_Cage",
                id: 0,
                first_name: "Nicolas",
                last_name: "Cage",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/220px-Nicolas_Cage_Deauville_2013.jpg"
            },{
                wiki_url: "https://en.wikipedia.org/wiki/Sofia_Boutella",
                id: 1,
                first_name: "Sofia",
                last_name: "Boutella",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sofia_Boutella_2018.png/220px-Sofia_Boutella_2018.png"
            },{
                wiki_url: "https://en.wikipedia.org/wiki/Bill_Moseley",
                id: 2,
                first_name: "Bill",
                last_name: "Moseley",
                profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Billgfdl.jpg/220px-Billgfdl.jpg"
            }],
        }
    ];

    const [starIcons, setstarIcons] = useState([{
            id: 1,
            stateId: "star1",
            color: "black"
        },
        {
            id: 2,
            stateId: "star2",
            color: "black"
        },
        {
            id: 3,
            stateId: "star3",
            color: "black"
        },
        {
            id: 4,
            stateId: "star4",
            color: "black"
        },
        {
            id: 5,
            stateId: "star5",
            color: "black"
        }
        ]);


    const artistClickHandler = (url) => {
        window.location = url;
    }

    const opts = {
        width: '90%',
        playerVars: {
            autoplay: 1
        }
    }

    const play = (event) => {
        event.target.pauseVideo();
    }

    const starClickHandler = (id) => {
        let starIconList = [];
        for (let star of starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";

            }
            starIconList.push(starNode);
        }
        setstarIcons(starIconList);
    }

    return (
        <div>

            <div className="details">
                <Header baseUrl={props.baseUrl} showBookShowButton="true" />
                <div className="back">
                    <Typography>
                        <Link to="/">  &#60; Back to Home</Link>
                    </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img className="movie-poster" src={movie[settedID].movieposter_url} alt={movie[settedID].title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie[settedID].title} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Genre: </span> {movie[settedID].genres.join(', ')} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {movie[settedID].duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(movie[settedID].release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {movie[settedID].critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography className="justify"><span className="bold">Plot:</span> <a href={movie[settedID].wiki_url}>(Wiki Link)</a> {movie[settedID].storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer:</span></Typography>

                            <YouTube
                                videoId={movie[settedID].trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={play}
                            />

                        </div>
                    </div>
                    <div className="rightDetails">
                        <Typography> <span className="bold">Rate this movie: </span></Typography>
                        {starIcons.map(star => (
                            <StarBorderIcon className={star.color} key={"star" + star.id} onClick={() => starClickHandler(star.id)} />
                        ))}
                        <div className="bold marginBottom16 marginTop16"><Typography><span className="bold">Artists:</span></Typography></div>
                        <GridList cellHeight={160} cols={2}>
                            {movie[settedID].artists.map(artist => (
                                <GridListTile className="gridTile" onClick={() => artistClickHandler(artist.wiki_url)} key={artist.id}>
                                    <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                    <GridListTileBar
                                        title={artist.first_name + " " + artist.last_name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div >



        </div>
    )
}
