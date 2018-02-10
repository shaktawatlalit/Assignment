"use strict"
/* song class creates song and also contain method for getting and setting song ----
   it is like we are creating event  */
class Song {
	/* constructor to initilize the object at the time of the creation*/

	constructor(name) {
		this.name = name;
		this.songLength = "180 seconds";

	}
    
	set name(val) {
		this._name = val;                           
	}

	get name() {
		return this._name;   
	}                 

}

    /* singer class will create the song and will notify to the Music station*/

class Singer {
	constructor(name) {
		this.songs = [];
		this.musicStation = []; 
		this.name = name;
	}

    /*Singer adding music station to notify them about song*/

    addMusicStation(musicStation) {
    	this.musicStation.push(musicStation);
    }

    /* singer is creating song and it is notifying to all the station*/
    createSong(song) {
    	this.songs.push(song);
    	for(let i = 0; i<this.musicStation.length; i++) {
    		this.musicStation[i].notify(song.name,this.musicStation[i].name);
    	}

    }
    
}

    /* MusicStation class to add audience and notify audience about the song*/

class MusicStation {
	constructor(name) {
		this.name = name;
		this.audience = [];
	}

	notify(song,name) {
		console.log("Hello "+ name + " ! new song "+ song + " is now out. ");

	}

	/* adding audience*/
	addAudience(audience) {
		this.audience.push(audience);

	}
     
     /* notify to the audience that the perticular song for which they registered are out */
	notifyAudience() {
		for(let i = 0; i<this.audience.length; i++) {
			this.audience[i].notify(this.audience[i].name,this.audience[i].song);
		}
	}

}

/* Audience class to create audience with the perticular song */
class Audience {
	constructor(name,song) {
		this.name = name;
		this.song = song;
	}

	notify(name,song) {
		console.log("Hello "+ name + "," + song.name + " are out now.");
	}
}


/* three new song */
let song1 = new Song("Mere spno ki rani kab aaogi tum ");
let song2 = new Song("E husna meri ye to bta ");
let song3 = new Song("Ek bagal main chand hoga");

/* creating a singer */
let singer = new Singer("Arjit Singh");

/* creating 3 music station (it will work as mediator)*/
let musicStationKanpur = new MusicStation("Kanpur music station");
let musicStationGoa = new MusicStation("Goa Music station");
let musicStationKota = new MusicStation("Kota music station");

/* adding music station to the singer so that singer publish song to the musicStation.*/
singer.addMusicStation(musicStationKota);
singer.addMusicStation(musicStationGoa);
singer.addMusicStation(musicStationKanpur);


/* creating new audience with the song for which they want to be notified*/
let lalit = new Audience("Lalit", song1);
let vikas = new Audience("vikas", song3);
let rahul = new Audience("rahul", song3);
let luckky = new Audience("luckky", song2);
let tara = new Audience("tara", song2);
let aditya = new Audience("aditya", song1);

/*music station is adding audience*/

musicStationKanpur.addAudience(lalit);
musicStationKanpur.addAudience(vikas);
musicStationKota.addAudience(rahul);
musicStationKota.addAudience(luckky);
musicStationGoa.addAudience(tara);
musicStationGoa.addAudience(aditya);



singer.createSong(song1);
singer.createSong(song2);
singer.createSong(song3);

musicStationKanpur.notifyAudience();
musicStationGoa.notifyAudience();
musicStationKota.notifyAudience();
