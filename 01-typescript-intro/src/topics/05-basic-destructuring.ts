

interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {          
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year:2015
    }
}

// const song = 'New Song';

const {song:anotherSong,songDuration:duration,details} = audioPlayer;
const {author} = details ;

// const {author:authorSong} = audioPlayer.details;


console.log('song:',anotherSong);
console.log('duration:',duration);
console.log('Autor:',author);

// const [p1,p2,trunks]:string []= ['goku','vegeta','trunks'];

// console.log('Autor:',author);


// console.log('personaje 3:', trunks)

export {};