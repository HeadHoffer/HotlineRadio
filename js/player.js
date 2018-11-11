$(document).ready(function(){
	var loc = window.location.pathname;
	var path = loc.substring(0, loc.lastIndexOf('/')) + "/songs/";
	
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1",
	}, 
	[
		{
			title:"ALTWAVE - Back to the Past",
			mp3: path + "ALTWAVE - Back to the Past.mp3",
		},
		{
			title:"ALTWAVE - Incoming Transmission",
			mp3: path + "ALTWAVE - Incoming Transmission.mp3",
		},
		{
			title:"Auto Delta Time - Ms Minnie",
			mp3: path + "Auto Delta Time - Ms Minnie.mp3",
		},
		{
			title:"Benny Smiles - Bad Ending",
			mp3: path + "Benny Smiles - Bad Ending.mp3",
		},
		{
			title:"Benny Smiles - Hotline Miami Theme",
			mp3: path + "Benny Smiles - Hotline Miami Theme.mp3",
		},
		{
			title:"Carpenter Brut - Disco Zombi Italia",
			mp3: path + "Carpenter Brut - Disco Zombi Italia.mp3",
		},
		{
			title:"Carpenter Brut - End Titles",
			mp3: path + "Carpenter Brut - End Titles.mp3",
		},
		{
			title:"Carpenter Brut - Escape From Midwich Valley",
			mp3: path + "Carpenter Brut - Escape From Midwich Valley.mp3",
		},
		{
			title:"Carpenter Brut - L.A. Venice Bitch 80's",
			mp3: path + "Carpenter Brut - LA Venice Bitch 80s.mp3",
		},
		{
			title:"Carpenter Brut - Le Perv",
			mp3: path + "Carpenter Brut - Le Perv.mp3",
		},
		{
			title:"Carpenter Brut - Le Perv (Moon Remix)",
			mp3: path + "Carpenter Brut - Le Perv (Moon Remix).mp3",
		},
		{
			title:"Carpenter Brut - Obituary",
			mp3: path + "Carpenter Brut - Obituary.mp3",
		},
		{
			title:"Carpenter Brut - Roller Mobster",
			mp3: path + "Carpenter Brut - Roller Mobster.mp3",
		},
		{
			title:"Carpenter Brut - Roller Mobster (Power Glove Remix)",
			mp3: path + "Carpenter Brut - Roller Mobster (Power Glove Remix).mp3",
		},
		{
			title:"Carpenter Brut - Roller Mobster (Scattle Remix)",
			mp3: path + "Carpenter Brut - Roller Mobster (Scattle Remix).mp3",
		},
		{
			title:"Castanets - You Are The Blood",
			mp3: path + "Castanets - You Are The Blood.mp3",
		},
		{
			title:"Chromacle - Interlude",
			mp3: path + "Chromacle - Interlude.mp3",
		},
		{
			title:"Cinimod - The Rumble",
			mp3: path + "Cinimod - The Rumble.mp3",
		},
		{
			title:"Coconuts - Silver Lights",
			mp3: path + "Coconuts - Silver Lights.mp3",
		},
		{
			title:"Daft Punk - Derezzed (Glitch Mob Remix)",
			mp3: path + "Daft Punk - Derezzed (Glitch Mob Remix).mp3",
		},
		{
			title:"Dag Unenge - The Winding Theme #1",
			mp3: path + "Dag Unenge - The Winding Theme 1.mp3",
		},
		{
			title:"Dag Unenge - The Winding Theme #4",
			mp3: path + "Dag Unenge - The Winding Theme 4.mp3",
		},
		{
			title:"DANCE WITH THE DEAD - Mask",
			mp3: path + "DANCE WITH THE DEAD - Mask.mp3",
		},
		{
			title:"Das Mörtal - La Drogue",
			mp3: path + "Das Mörtal - La Drogue.mp3",
		},
		{
			title:"Digitalism - Miami Showdown",
			mp3: path + "Digitalism - Miami Showdown.mp3",
		},
		{
			title:"Dizkodeath - Orchid",
			mp3: path + "Dizkodeath - Orchid.mp3",
		},
		{
			title:"Dubmood - Richard",
			mp3: path + "Dubmood - Richard.mp3",
		},
		{
			title:"Dubmood - STRIL-60",
			mp3: path + "Dubmood - STRIL-60.mp3",
		},
		{
			title:"Eirik Suhrke - A New Morning",
			mp3: path + "Eirik Suhrke - A New Morning.mp3",
		},
		{
			title:"El Huervo feat. Shelby Cinca - Daisuke",
			mp3: path + "El Huervo - Daisuke.mp3",
		},
		{
			title:"El Huervo - Fumes",
			mp3: path + "El Huervo - Fumes.mp3",
		},
		{
			title:"El Huervo - Ghost",
			mp3: path + "El Huervo - Ghost.mp3",
		},
		{
			title:"El Huervo - Le Temps (Infomercial Rework)",
			mp3: path + "El Huervo - Le Temps (Infomercial Rework).mp3",
		},
		{
			title:"El Huervo - Rest",
			mp3: path + "El Huervo - Rest.mp3",
		},
		{
			title:"El Huervo - Rust",
			mp3: path + "El Huervo - Rust.mp3",
		},
		{
			title:"El Huervo - Turf",
			mp3: path + "El Huervo - Turf.mp3",
		},
		{
			title:"EL TIGR3 - Heist",
			mp3: path + "EL TIGR3 - Heist.mp3",
		},
		{
			title:"EL TIGR3 - She Swallowed Burning Coals",
			mp3: path + "EL TIGR3 - She Swallowed Burning Coals.mp3",
		},
		{
			title:"Elliott Berlin - Musikk Per Automatikk",
			mp3: path + "Elliott Berlin - Musikk Per Automatikk.mp3",
		},
		{
			title:"Endless - Disturbance",
			mp3: path + "Endless - Disturbance.mp3",
		},
		{
			title:"Endless - Keep Calm",
			mp3: path + "Endless - Keep Calm.mp3",
		},
		{
			title:"Frekt - Richard",
			mp3: path + "Frekt - Richard.mp3",
		},
		{
			title:"Frekt - Wrong Alley",
			mp3: path + "Frekt - Wrong Alley.mp3",
		},
		{
			title:"Gesaffelstein - Pursuit",
			mp3: path + "Gesaffelstein - Pursuit.mp3",
		},
		{
			title:"Gesaffelstein - Viol",
			mp3: path + "Gesaffelstein - Viol.mp3",
		},
		{
			title:"IAMTHEKIDYOUKNOWWHATIMEAN - Run",
			mp3: path + "IAMTHEKIDYOUKNOWWHATIMEAN - Run.mp3",
		},
		{
			title:"Jasper Byrne - Decade Dance",
			mp3: path + "Jasper Byrne - Decade Dance.mp3",
		},
		{
			title:"Jasper Byrne - Hotline",
			mp3: path + "Jasper Byrne - Hotline.mp3",
		},
		{
			title:"Jasper Byrne - Hotline (Analogue Mix)",
			mp3: path + "Jasper Byrne - Hotline (Analogue Mix).mp3",
		},
		{
			title:"Jasper Byrne - Killstreak",
			mp3: path + "Jasper Byrne - Killstreak.mp3",
		},
		{
			title:"Jasper Byrne - Love 2 Hurt U",
			mp3: path + "Jasper Byrne - Love 2 Hurt U.mp3",
		},
		{
			title:"Jasper Byrne - Miami (2015 Mix)",
			mp3: path + "Jasper Byrne - Miami (2015 Mix).mp3",
		},
		{
			title:"Jasper Byrne - Sleep Forever",
			mp3: path + "Jasper Byrne - Sleep Forever.mp3",
		},
		{
			title:"Jasper Byrne - Voyager",
			mp3: path + "Jasper Byrne - Voyager.mp3",
		},
		{
			title:"kudasai - the girl i haven't met",
			mp3: path + "kudasai - the girl i haven't met.mp3",
		},
		{
			title:"Light Club - Blizzard",
			mp3: path + "Light Club - Blizzard.mp3",
		},
		{
			title:"Light Club - Fahkeet",
			mp3: path + "Light Club - Fahkeet.mp3",
		},
		{
			title:"Light Club - She Meditates",
			mp3: path + "Light Club - She Meditates.mp3",
		},
		{
			title:"LipPi Sound - Abyss",
			mp3: path + "LipPi Sound - Abyss.mp3",
		},
		{
			title:"Mad Animals - Mandalas in My Coffee",
			mp3: path + "Mad Animals - Mandalas in My Coffee.mp3",
		},
		{
			title:"Magic Sword - In The Face of Evil",
			mp3: path + "Magic Sword - In The Face of Evil.mp3",
		},
		{
			title:"Magic Sword - Infinity",
			mp3: path + "Magic Sword - Infinity.mp3",
		},
		{
			title:"Magic Sword - Journey's End",
			mp3: path + "Magic Sword - Journey's End.mp3",
		},
		{
			title:"Magic Sword - Retrogram (Scattle Remix)",
			mp3: path + "Magic Sword - Retrogram (Scattle Remix).mp3",
		},
		{
			title:"Magic Sword - The Way Home",
			mp3: path + "Magic Sword - The Way Home.mp3",
		},
		{
			title:"Magic Sword - Uprising",
			mp3: path + "Magic Sword - Uprising.mp3",
		},
		{
			title:"Magna - Divide (Miami Edit)",
			mp3: path + "Magna - Divide (Miami Edit).mp3",
		},
		{
			title:"Makeup and Vanity Set - Transmit",
			mp3: path + "Makeup and Vanity Set - Transmit.mp3",
		},
		{
			title:"Mega Drive - Converter",
			mp3: path + "Mega Drive - Converter.mp3",
		},
		{
			title:"Mega Drive - Infiltrate + Acid Spit",
			mp3: path + "Mega Drive - Acid Spit (Extended).mp3",
		},
		{
			title:"Mega Drive - NARC",
			mp3: path + "Mega Drive - NARC.mp3",
		},
		{
			title:"Mega Drive - Neo Tokyo 2019",
			mp3: path + "Mega Drive - Neo Tokyo 2019.mp3",
		},
		{
			title:"Mega Drive - Slum Lord",
			mp3: path + "Mega Drive - Slum Lord.mp3",
		},
		{
			title:"Mega Drive - Tears in the Rain",
			mp3: path + "Mega Drive - Tears in the Rain.mp3",
		},
		{
			title:"Mitch Murder - Frantic Aerobics",
			mp3: path + "Mitch Murder - Frantic Aerobics.mp3",
		},
		{
			title:"Mitch Murder - Hollywood Heights",
			mp3: path + "Mitch Murder - Hollywood Heights.mp3",
		},
		{
			title:"Modulogeek - Around",
			mp3: path + "Modulogeek - Around.mp3",
		},
		{
			title:"Modulogeek - Walking",
			mp3: path + "Modulogeek - Walking.mp3",
		},
		{
			title:"Moon - Crystals",
			mp3: path + "Moon - Crystals.mp3",
		},
		{
			title:"Moon - Delay",
			mp3: path + "Moon - Delay.mp3",
		},
		{
			title:"Moon - Dust",
			mp3: path + "Moon - Dust.mp3",
		},
		{
			title:"Moon - Dust (Carpenter Brut Remix)",
			mp3: path + "Moon - Dust (Carpenter Brut Remix).mp3",
		},
		{
			title:"Moon - Dust (Sixfeet Remix)",
			mp3: path + "Moon - Dust (Sixfeet Remix).mp3",
		},
		{
			title:"Moon - Hydrogen",
			mp3: path + "Moon - Hydrogen.mp3",
		},
		{
			title:"Moon - Paris",
			mp3: path + "Moon - Paris.mp3",
		},
		{
			title:"Moon - Quixotic",
			mp3: path + "Moon - Quixotic.mp3",
		},
		{
			title:"Moon - Quixotic (Scattle Remix)",
			mp3: path + "Moon - Quixotic (Scattle Remix).mp3",
		},
		{
			title:"Moon - Release",
			mp3: path + "Moon - Release.mp3",
		},
		{
			title:"Old Future Fox Gang - Don't Cry For Me",
			mp3: path + "Old Future Fox Gang - Don't Cry For Me.mp3",
		},
		{
			title:"Old Future Fox Gang - Guided Meditation",
			mp3: path + "Old Future Fox Gang - Guided Meditation.mp3",
		},
		{
			title:"Perturbator - Angel Dust",
			mp3: path + "Perturbator - Angel Dust.mp3",
		},
		{
			title:"Perturbator - Creature",
			mp3: path + "Perturbator - Creature.mp3",
		},
		{
			title:"Perturbator - Disco Girls",
			mp3: path + "Perturbator - Disco Girls.mp3",
		},
		{
			title:"Perturbator - Electric Dreams",
			mp3: path + "Perturbator - Electric Dreams.mp3",
		},
		{
			title:"Perturbator feat. Dream Koala - Fantasy",
			mp3: path + "Perturbator - Fantasy.mp3",
		},
		{
			title:"Perturbator - Future Club",
			mp3: path + "Perturbator - Future Club.mp3",
		},
		{
			title:"Perturbator - I Ran To The Arcade",
			mp3: path + "Perturbator - I Ran To The Arcade.mp3",
		},
		{
			title:"Perturbator - Miami Disco",
			mp3: path + "Perturbator - Miami Disco.mp3",
		},
		{
			title:"Perturbator - Perturbator's Theme",
			mp3: path + "Perturbator - Perturbator's Theme.mp3",
		},
		{
			title:"Perturbator feat. Tommy - Perverted Precinct",
			mp3: path + "Perturbator - Perverted Precinct.mp3",
		},
		{
			title:"Perturbator - Savage Streets",
			mp3: path + "Perturbator - Savage Streets.mp3",
		},
		{
			title:"Perturbator feat. Flash Arnold - Sexualizer",
			mp3: path + "Perturbator - Sexualizer.mp3",
		},
		{
			title:"Perturbator feat. Noir Deco - Technoir",
			mp3: path + "Perturbator - Technoir.mp3",
		},
		{
			title:"Perturbator - The New Black",
			mp3: path + "Perturbator - The New Black.mp3",
		},
		{
			title:"Perturbator - Welcome Back",
			mp3: path + "Perturbator - Welcome Back.mp3",
		},
		{
			title:"Perturbator - Vengeance",
			mp3: path + "Perturbator - Vengeance.mp3",
		},
		{
			title:"Power Glove - Crossfire",
			mp3: path + "Power Glove - Crossfire.mp3",
		},
		{
			title:"Prey Growl - Detection",
			mp3: path + "Prey Growl - Detection.mp3",
		},
		{
			title:"Quantic - Time is The Enemy",
			mp3: path + "Quantic - Time is The Enemy.mp3",
		},
		{
			title:"Riddarna - Miami Jam",
			mp3: path + "Riddarna - Miami Jam.mp3",
		},
		{
			title:"Salvia Plath - Bardo States",
			mp3: path + "Salvia Plath - Bardo States.mp3",
		},
		{
			title:"Scattle - Bloodline",
			mp3: path + "Scattle - Bloodline.mp3",
		},
		{
			title:"Scattle - Bloodline (Moon's Extra Cheese Mix)",
			mp3: path + "Scattle - Bloodline (Moon's Extra Cheese Mix).mp3",
		},
		{
			title:"Scattle - Electric",
			mp3: path + "Scattle - Electric.mp3",
		},
		{
			title:"Scattle - Flatline",
			mp3: path + "Scattle - Flatline.mp3",
		},
		{
			title:"Scattle - Inner Animal",
			mp3: path + "Scattle - Inner Animal.mp3",
		},
		{
			title:"Scattle - It's Safe Now",
			mp3: path + "Scattle - It's Safe Now.mp3",
		},
		{
			title:"Scattle - Knock Knock",
			mp3: path + "Scattle - Knock Knock.mp3",
		},
		{
			title:"Scattle - Pacemaker",
			mp3: path + "Scattle - Pacemaker.mp3",
		},
		{
			title:"Scattle - Remorse",
			mp3: path + "Scattle - Remorse.mp3",
		},
		{
			title:"Scattle - Remorse (Carpenter Brut Remix)",
			mp3: path + "Scattle - Remorse (Carpenter Brut Remix).mp3",
		},
		{
			title:"Scattle - Serrated",
			mp3: path + "Scattle - Serrated.mp3",
		},
		{
			title:"Scattle - To The Top (Extended Mix)",
			mp3: path + "Scattle - To The Top (Extended Mix).mp3",
		},
		{
			title:"Scattle - Visitors",
			mp3: path + "Scattle - Visitors.mp3",
		},
		{
			title:"Sjellos - Chamber of Reflections",
			mp3: path + "Sjellos - Chamber of Reflections.mp3",
		},
		{
			title:"Sun Araw - Deep Cover",
			mp3: path + "Sun Araw - Deep Cover.mp3",
		},
		{
			title:"Sun Araw - Horse Steppin",
			mp3: path + "Sun Araw - Horse Steppin.mp3",
		},
		{
			title:"Tape - Beams",
			mp3: path + "Tape - Beams.mp3",
		},
		{
			title:"Tempel - Disclosure",
			mp3: path + "Tempel - Disclosure.mp3",
		},
		{
			title:"The Green Kingdom - Untitled",
			mp3: path + "The Green Kingdom - Untitled.mp3",
		},
		{
			title:"Trizzle - WouJuno",
			mp3: path + "Trizzle - WouJuno.mp3",
		},
		{
			title:"Vestron Vulture - Infiltrate",
			mp3: path + "Vestron Vulture - Infiltrate.mp3",
		},
		{
			title:"Vestron Vulture - Neu Wave Hookers",
			mp3: path + "Vestron Vulture - Neu Wave Hookers.mp3",
		},
		{
			title:"Vestron Vulture - Rip",
			mp3: path + "Vestron Vulture - Rip.mp3",
		},
		{
			title:"x - My Only Chance",
			mp3: path + "X - My Only Chance.mp3",
		},
	], 
	{
		play: function(event) {
			console.log(event.jPlayer.status.media.title);
			$('#current-track').empty();
			$('#current-track').append(event.jPlayer.status.media.title);
		},
		
		pause: function(event) {
			if(event.jPlayer.status.currentTime == 0) {
				$('#current-track').empty();
			}	
		},
		
		// Remaining time
		timeupdate: function(event) {
			var status = event.jPlayer.status,
			remaining = status.duration - status.currentTime;
			$('#remaining-time').text($.jPlayer.convertTime(remaining));
		},
		
		playlistOptions: {
			autoPlay: false,
			loopOnPrevious: true,
			shuffleOnLoop: false,
			enableRemoveControls: false,
			displayTime: 'slow',
			addTime: 'fast',
			removeTime: 'fast',
			shuffleTime: 'slow'
		},
		
		loop: true,
		swfPath: "js/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
	});
	
	myPlaylist.shuffle(true); 
});