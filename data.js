// What are you doing?! Don't look at my shameful stitched together JS-Code!
// I might not know what I'm doing, but hey it works!
const equipmentStats = {
 main:{
"-":["Knuckles",0,0,0,0,0,0],
1:["Troatic Rifle",9,0,2,2,0,0],
2:["Revvitic Rifle",26,0,4,7,0,0],
3:["Vecrotic Rifle",56,0,7,11,0,0],
4:["Imbued Vecrotic Rifle",71,0,8,13,0,0],
5:["Rhenic Rifle",80,0,9,16,0,0],
7:["Abyssal Rifle",100,0,11,18,0,0],
8:["Mechanoid Rifle",141,0,20,31,0,0],
9:["Mutated Rifle",195,0,28,43,0,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","damage","idr"]},
 head:{
"-":["A blinding Dome",0,0,0,0,0,0],
0:["Rat Helm",2,3,-2,0,1,0],
1:["Skrivet Helm",2,4,1,-1,2,0],
2:["Razen Helm",5,7,1,2,5,0],
3:["Karth Helm",10,9,2,4,7,0],
4:["Threaded Helm",12,11,2,5,9,0],
5:["Delve Helm",14,14,3,6,10,0],
6:["Kreev Helm",17,16,5,8,11,0],
7:["Abyssal Helm",20,19,6,10,13,0],
8:["Mechanoid Helm",32,40,10,19,23,0],
9:["Mutated Helm",41,52,16,24,28,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce"]},
 chest:{
"-":["Impressive Hair",0,0,0,0,0,0],
0:["Rat Chestpiece",1,4,0,0,3,0],
1:["Skrivet Chestpiece",1,5,-2,-1,4,0],
2:["Razen Chestpiece",4,8,0,2,7,0],
3:["Karth Chestpiece",9,8,1,2,6,0],
4:["Threaded Chestpiece",11,10,1,2,9,0],
5:["Delve Chestpiece",13,13,2,2,9,0],
6:["Kreev Chestpiece",16,15,4,5,10,0],
7:["Abyssal Chestpiece",19,18,5,7,12,0],
8:["Mechanoid Chestpiece",31,39,9,16,22,0],
9:["Mutated Chestpiece",40,51,15,21,27,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","armor_per_level"]},
 legs:{
"-":["Commando",0,0,0,0,0,0],
0:["Rat Legpiece",1,3,0,0,2,0],
1:["Skrivet Legpiece",1,4,-2,-1,3,0],
2:["Razen Legpiece",4,7,0,2,6,0],
3:["Karth Legpiece",9,9,1,4,8,0],
4:["Threaded Legpiece",11,11,1,5,10,0],
5:["Delve Legpiece",13,14,2,6,11,0],
6:["Kreev Legpiece",16,16,4,8,12,0],
7:["Abyssal Legpiece",19,19,5,10,14,0],
8:["Mechanoid Legpiece",31,40,9,19,24,0],
9:["Mutated Legpiece",40,52,15,24,29,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","speed"]},
 boots:{
"-":["Twinkle Toes",0,0,0,0,0,0],
0:["Rat Boots",2,3,-2,0,1,0],
1:["Skrivet Boots",2,4,-1,-1,2,0],
2:["Razen Boots",5,7,1,2,5,0],
3:["Karth Boots",10,9,2,4,7,0],
4:["Threaded Boots",12,11,2,5,9,0],
5:["Delve Boots",14,14,3,6,10,0],
6:["Kreev Boots",17,16,5,7,11,0],
7:["Abyssal Boots",20,19,6,10,13,0],
8:["Mechanoid Boots",32,40,10,19,23,0],
9:["Mutated Boots",51,52,16,24,28,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","speed"]},
 gloves:{
"-":["Bear Hands",0,0,0,0,0,0],
0:["Rat Gloves",4,0,-2,-2,0,0],
1:["Skrivet Gloves",4,1,-1,0,1,0],
2:["Razen Gloves",7,4,1,3,4,0],
3:["Karth Gloves",12,6,2,5,6,0],
4:["Threaded Gloves",14,8,2,6,8,0],
5:["Delve Gloves",16,11,3,7,9,0],
6:["Kreev Gloves",19,13,5,9,10,0],
7:["Abyssal Gloves",22,16,6,11,12,0],
8:["Mechanoid Gloves",34,37,10,20,22,0],
9:["Mutated Gloves",43,49,16,25,27,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","pierce_per_level","idrglove"]},
 earrings:{
"-":["Earring impaired",0,0,0,0,0,0],
4:["Threaded Earrings",4,6,4,2,5,0],
5:["Delve Earrings",6,9,5,3,6,0],
6:["Kreev Earrings",9,11,7,5,7,0],
7:["Abyssal Earrings",12,14,8,7,9,0],
8:["Mechanoid Earrings",24,35,12,16,19,0],
9:["Mutated Earrings",33,47,18,21,24,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","mindmg"]},
 belt:{
"-":["No Utility",0,0,0,0,0,0],
5:["Delve Belt",4,10,-1,1,8,0],
6:["Kreev Belt",7,12,1,3,9,0],
7:["Abyssal Belt",10,15,2,5,11,0],
8:["Mechanoid Belt",22,36,6,14,21,0],
9:["Mutated Belt",31,48,12,19,26,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","maxdmg"]},
 shoulders:{
"-":["neesantoes",0,0,0,0,0,0],
6:["Kreev Shoulder",20,11,0,3,6,0],
7:["Abyssal Shoulder",23,14,1,5,8,0],
8:["Mechanoid Shoulder",35,35,5,14,18,0],
9:["Mutated Shoulder",44,47,11,19,23,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","mindmgshoulder","maxdmgshoulder"]},
 sidearm:{
"-":["Side-Knuckles",0,0,0,0,0,0],
1:["Troatic Sidearm",4,0,1,2,0,0],
2:["Revvitic Sidearm",14,0,3,4,0,0],
3:["Vecrotic Sidearm",22,0,4,6,0,0],
4:["Imbued Vecrotic Sidearm",30,0,7,9,0,0],
5:["Rhenic Sidearm",36,0,8,11,0,0],
7:["Abyssal Sidearm",44,0,10,13,0,0],
8:["Mechanoid Sidearm",60,0,16,22,0,0],
9:["Mutated Sidearm",74,0,22,30,0,0],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","damage","idr"]},
 arm:{
"-":["disarmed",0,0,0,0,0,0],
1:["Gishin Exo-Arm",10,0,0,0,0,0],
6:["Abyssal Exo-Arm",20,0,0,0,0,"5%"],
9:["Mutated Exo-Arm",38,0,0,0,0,"15%"],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","damagearm"]},
 ears:{
"-":["deaf",0,0,0,0,0,0],
2:["Gishin Exo-Ear",0,6,0,0,6,0],
6:["Abyssal Exo-Ear",0,10,0,0,10,"5%"],
9:["Mutated Exo-Ear",0,22,0,0,22,"15%"],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","health"]},
 eyes:{
"-":["blind",0,0,0,0,0,0],
2:["Gishin Exo-Eye",5,0,1,0,0,0],
6:["Abyssal Exo-Eye",10,0,2,0,0,"5%"],
9:["Mutated Exo-Eye",22,0,9,0,0,"15%"],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce"]},
 brain:{
"-":["Zalaah ♥",0,0,0,0,0,0],
2:["Gishin Exo-Brain",0,0,3,0,0,0],
6:["Abyssal Exo-Brain",0,0,3,0,0,"5%"],
9:["Mutated Exo-Brain",0,0,13,0,0,"15%"],
"e":["savagery","savagery_per_level","fortitude","fortitude_per_level","armor","pierce","idrbrain"]}
}
const Rslots={
	"head":[1,4,7,10,10,10,14,16,20,23],
	"chest":[1,4,7,10,10,10,14,16,20,23],
	"legs":[1,4,7,10,10,10,14,16,20,23],
	"boots":[1,4,7,10,10,10,14,16,20,23],
	"gloves":[1,4,7,10,10,10,14,16,20,23],
	"earrings":[1,4,7,10,10,10,14,16,20,23],
	"belt":[1,4,7,10,10,10,14,16,20,23],
	"shoulders":[1,4,7,10,10,10,14,16,20,23],
	"main":[0,3,6,9,9,9,13,15,19,22],
	"sidearm":[0,1,2,3,4,6,0,10,14,16],
	"ears":[0,0,2,0,0,0,4,0,0,9],
	"eyes":[0,0,2,0,0,0,4,0,0,9],
	"brain":[0,0,2,0,0,0,4,0,0,9],
	"arm":[0,0,2,0,0,0,4,0,0,9],
} 
const Reinforcement ={
	"head":[5,5,5,5,6,6,8,10,12,14],
	"chest":[5,5,5,5,6,6,8,10,12,14],
	"legs":[5,5,5,5,6,6,8,10,12,14],
	"boots":[5,5,5,5,6,6,8,10,12,14],
	"gloves":[5,5,5,5,6,6,8,10,12,14],
	"earrings":[5,5,5,5,6,6,8,10,12,14],
	"belt":[5,5,5,5,6,6,8,10,12,14],
	"shoulders":[5,5,5,5,6,6,8,10,12,14],
	"main": [0,2,2,2,3,3,4,5,7,9],
	"sidearm": [2,2,2,2,3,3,4,5,7,9],
	"ears":[0,0,3,0,0,0,4,0,0,6],
	"eyes":[0,0,3,0,0,0,4,0,0,6],
	"brain":[0,0,3,0,0,0,4,0,0,6],	
	"arm":[0,0,0,0,0,0,3,0,0,6]}
const Energizements={
	"savagery":["1%","3%","5%","7%","9%","9%","11%","12%","15%","18%","20%"],
	"savagery_per_level":["0","0","0","1","2","2","3","3","4","5","6"],
	"fortitude":["1%","3%","5%","7%","9%","9%","11%","12%","15%","18%","20%"],
	"fortitude_per_level":["0","0","0","1","2","2","3","3","4","5","6"],
	"armor":["0%","3%","5%","7%","9%","9%","11%","11%","14%","17%","19%"],
	"armor_per_level":["0","0","0","1","2","2","3","3","4","5","6"],
	"pierce":["0%","0%","0%","0%","0%","0%","0%","11%","14%","17%","19%"],
	"piercegloves":["0%","3%","5%","7%","9%","9%","11%","0%","0%","0%","0%"],
	"pierce_per_level":["0","0","0","0","0","0","0","3","4","5","6"],
	"speed":["0%","3%","5%","7%","9%","9%","11%","12%","15%","17%","19%"],
	"idrglove":["0%","0%","0%","0%","5%","5%","5%","10%","13%","18%","20%"],
	"damage":["1%","3%","5%","7%","9%","11%","11%","13%","15%","18%","20%"],
	"idr":["0%","0%","0%","0%","10%","10%","10%","15%","18%","22%","25%"],
	"mindmg":["0%","0%","0%","0%","0%","5%","5%","7%","9%","11%","14%"],
	"maxdmg":["0%","0%","0%","0%","0%","5%","5%","7%","9%","11%","14%"], 
	"mindmgshoulder":["0%","0%","0%","0%","0%","0%","0%","7%","9%","11%","14%"],
	"maxdmgshoulder":["0%","0%","0%","0%","0%","0%","0%","7%","9%","11%","14%"],
	"damagearm":["1%","3%","5%","7%","9%","0%","0%","13%","0%","18%","21%"],
	"idrbrain":["0%","0%","0%","0%","0%","0%","0%","0%","0%","8%","11%"],
	"health":["0%","0%","0%","0%","0%","0%","1%","3%","0%","4%","6%"]
}
const tiers = ["-",0,1, 2, 3, 4, 5, 6, 7, 8, 9];
const tiersExo = ["-",2, 6, 9];
const statnames = ["name","savagery","fortitude","speed","pierce","armor","idr","mindmg","maxdmg","damage","health"];
const puncturePercentage = [0,0.05,0.12,0.20,0.33,0.50];
const monsters = [
["Nothing",0,0,0,0,0,0,0,0,0,"0%",0],
["Rat",1,2,50,100,2,0,2,0,2,"0%",0],
["Large Rat",6,3,49,249,10,1,3,1,5,"0%",0],
["Ore Snatcher",9,3,49,348,14,2,3,1,7,"0%",0],
["Lava Worm",15,5,49,447,18,3,4,1,7,"0%",0],
["Pelt Grifter",19,5,49,497,20,4,6,6,10,"0%",0],
["Tormented Serpent",26,6,49,621,25,5,12,14,8,"0%",0],
["Skrivet",34,7,48,645,26,14,10,6,13,"0%",0],
["Sailfin",39,9,49,793,32,7,10,6,15,"0%",0],
["Worg",45,10,48,941,38,9,12,7,20,"0%",0],
["Azure Giant",52,11,49,1088,44,5,22,12,40,"0%",0],
["Razen Drake",64,12,49,990,40,7,17,9,36,"0%",0],
["Rajak",68,41,49,1088,44,5,22,12,40,"0%",0],
["Crimson Giant",73,15,49,1453,59,4,39,11,55,"0%",0],
["Goretusk",77,16,48,1647,67,9,44,29,53,"0%",0],
["Thrasher",81,17,49,1840,75,8,59,22,59,"0%",0],
["Karth Drake",86,19,48,2200,90,10,67,25,70,"0%",0],
["Warped Tormenter",89,20,48,1719,70,12,78,28,73,"0%",0],
["Mammoth Bat",95,21,47,6629,284,17,128,47,95,"5%",0],
["Spinebreaker",98,21,48,7450,322,16,151,49,100,"5%",0],
["Unseen Horror",103,23,47,7918,344,17,158,51,107,"5%",0],
["Shadow Giant",111,24,47,8613,377,18,173,53,136,"10%",0],
["Depth Strider",122,27,47,9543,422,20,220,62,134,"10%",0],
["Flamebreather",134,25,46,10193,454,28,241,70,140,"10%",0],
["Excavator",148,26,46,11032,496,28,263,89,148,"10%",0],
["Pit Dweller",155,27,46,11991,545,27,282,104,163,"15%",0],
["Thornhide",162,29,46,12816,588,29,308,142,181,"20%",0],
["Stonedrinker",165,30,46,13250,611,31,327,148,190,"20%",0],
["Gape",170,31,45,13401,619,35,351,174,205,"20%",0],
["Shreek",178,32,45,13681,634,36,362,180,207,"25%",0],
["Burrowbore",184,33,45,15056,709,40,386,191,223,"25%",0],
["Skullcrusher",190,34,45,16089,767,42,412,193,228,"25%",0],
["Immaterial Haunt",197,35,44,19110,945,48,452,201,248,"30%",0],
["Sightless Worm",203,37,43,27693,1532,63,645,280,308,"40%",1],
["Fangsnout",211,38,42,28443,1590,68,695,301,331,"40%",1],
["Decipede",216,43,42,29490,1673,73,741,329,351,"45%",1],
["Venompiercer",220,39,41,30422,1749,77,801,352,381,"45%",1],
["Steamdrake",224,40,41,31530,1842,80,865,379,400,"45%",2],
["Deathwhisper",231,41,41,33322,1999,86,939,403,441,"50%",2],
["Unhallowed Husk",237,46,40,43326,3058,98,1956,446,468,"55%",2],
["Terroraith",242,47,38,44219,3171,118,2039,766,479,"55%",2],
["Growg",255,48,33,45938,3399,200,2313,511,548,"60%",2],
["Filcher",259,48,32,46900,3533,211,2499,538,541,"60%",3],
["Rotmask",263,49,32,47903,3678,214,2527,549,548,"60%",2],
["Nightclaw",278,50,31,50998,4163,244,3067,670,696,"65%",2],
["Lifeeater",283,51,30,52003,4334,256,3244,721,732,"70%",2],
["Twisted Howler",301,53,26,58346,5603,351,4000,791,894,"110%",3],
["Tentacled Dweller",305,54,25,59353,5841,388,4216,808,913,"110%",3],
["Shackled Abomination",315,55,24,61036,6266,421,4623,933,961,"115%",3],
["Dreadghoul",318,52,21,61832,6480,533,4888,966,975,"115%",3],
["Phantom Deviation",320,56,22,62887,6778,471,5012,1005,996,"120%",3],
["Doompaw",329,57,22,64381,7230,495,5481,1081,1024,"125%",3],
["Smoky Apparition",337,58,24,65184,7489,519,5703,1106,1061,"130%",3],
];

	
	class Battle {
		p;m;
		playerhealth; monsterhealth; playerNextTurn; monsterNextTurn;
		playerArmorMultiplier; monsterArmorMultiplier;
		effectiveDR; multiKillBuff; multiKillDebuff; 
		kill;
		constructor(p,m){
			this.p = p;
			this.m = m;
			this.kill = 0;
			this.setupPlayer();
			this.setupMonster();
			//console.log("battleconst:",this.p,this.m);
		};
		setupPlayer(){
			this.p.calculateStats();
			this.playerhealth = this.p.health;
			this.playerNextTurn = this.p.atkspeed;		
		};
		
		setupMonster(){
			this.multiKillDebuff = this.p.multikilldebuff;
			this.multiKillBuff = Math.max(1,1+(0.1*this.kill)-this.multiKillDebuff);
			
			this.m.multikillbuff = this.multiKillBuff;
			
			this.m.calculateStats();
			this.monsterhealth = this.m.health;
			this.playerArmorMultiplier = 100/(100 + Math.max(-20,this.p.armor - this.m.pierce));
			this.monsterArmorMultiplier = 100/(100 + Math.max(-20,this.m.armor - this.p.pierce));
			this.monsterNextTurn = this.m.atkspeed;
			
			this.effectiveDR = 1- Math.floor(100*(this.m.dr - (this.m.dr*this.p.idr)))/100;
				
		};

		updateBattleResults(){
			var healthPercentEnemy = Math.round(this.monsterhealth/this.m.health*100);
			var healthPercentPlayer = Math.round(this.playerhealth/this.p.health*100);
			$(".has-kill-amount").html("You killed "+this.kill+" "+this.m.name+"!");
			$(".is-fight-health.player").html(Number(Math.round(this.playerhealth)).toLocaleString()+" / "+Number(this.p.health).toLocaleString()+" ("+healthPercentPlayer+"%)");
			$(".is-fight-health.enemy").html(Number(Math.round(this.monsterhealth)).toLocaleString()+" / "+Number(this.m.health).toLocaleString()+" ("+healthPercentEnemy+"%)");
			$(".progress.player").val(Math.max(0,Math.round(this.playerhealth)));
			$(".progress.enemy").val(Math.max(0,Math.round(this.monsterhealth)));
			};
			
		fightMonsters(count){

			
			$("ul.has-combat-log").empty();
			this.kill = 0;
			this.setupMonster();
			for (var i = 0; i<count; i++){
				if (this.nextRound() === false){ 
					this.updateBattleResults();
					return this.kill;
					}
				else {
					//console.log("PLAYER KILLED A MONSTER");
					$("ul.has-combat-log").prepend($('<li class="has-text-success">You killed one '+this.m.name+'.</li>'));
					this.kill +=1;
					
					this.setupMonster();
				}

			}
			this.updateBattleResults();
			return this.kill;
		};
		
		playerAction(){
			var dmgroll = (((this.p.damageRangeMin+(1+this.p.damageRangeMax - this.p.damageRangeMin)*Math.random())*this.monsterArmorMultiplier)+this.p.trueDmg)*this.effectiveDR;
			dmgroll = Math.round(dmgroll);
			this.monsterhealth -= dmgroll;
			//console.log("Player hits for:", dmgroll);
			$("ul.has-combat-log").prepend($('<li class="">You did '+Number(dmgroll).toLocaleString()+' to the monster.</li>'));
			
			dmgroll = (this.p.punctureRangeMin+(1+this.p.punctureRangeMax - this.p.punctureRangeMin)*Math.random())*this.effectiveDR;
			dmgroll = Math.round(dmgroll);
			this.monsterhealth -= dmgroll;
			//console.log("Player punctures for:", dmgroll);
			$("ul.has-combat-log").prepend($('<li class="">You did '+Number(dmgroll).toLocaleString()+' Puncture damage to the monster.</li>'));
			
			//console.log("Monster remaining health:", this.monsterhealth);
		};
		monsterAction(){
			var dmgroll = this.m.damageRangeMin+(1+this.m.damageRangeMax - this.m.damageRangeMin)*Math.random();
			var reflectroll = this.p.corpreflect * (dmgroll+this.m.trueDmg);
			dmgroll = dmgroll*this.playerArmorMultiplier+this.m.trueDmg;
			dmgroll = Math.round(dmgroll);
			this.playerhealth -= dmgroll;
			//console.log("Monster hits for:", dmgroll*this.playerArmorMultiplier+this.m.trueDmg);
			$("ul.has-combat-log").prepend($('<li class="has-text-danger">The monster did '+Number(dmgroll).toLocaleString()+' to you.</li>'));
			
			reflectroll = Math.round(reflectroll);
			this.monsterhealth -= reflectroll;
			$("ul.has-combat-log").prepend($('<li class="has-text-warning">You reflected '+Number(reflectroll).toLocaleString()+' back to the monster.</li>'));	
			//console.log("Player reflects for:", this.p.corpreflect *dmgroll);
			
			var dmgroll = this.m.punctureRangeMin+(1+this.m.punctureRangeMax - this.m.punctureRangeMin)*Math.random();
			dmgroll = Math.round(dmgroll);
			this.playerhealth -= dmgroll;
			//console.log("Monster punctures for:", dmgroll);
			$("ul.has-combat-log").prepend($('<li class="has-text-danger">The monster did '+Number(dmgroll).toLocaleString()+' Puncture damage to you.</li>'));	
			
			
			
			//console.log("Monster remaining health:", this.monsterhealth);
			//console.log("Player remaining health:", this.playerhealth);
		};
			
				nextRound(){
			switch (true){
				case(this.playerNextTurn < this.monsterNextTurn):
					this.playerAction();
					this.monsterNextTurn -=this.playerNextTurn;
					this.playerNextTurn = this.p.atkspeed;
					break;
				case(this.playerNextTurn === this.monsterNextTurn):
					this.playerAction();
					this.monsterAction();
					this.monsterNextTurn = this.m.atkspeed;
					this.playerNextTurn = this.p.atkspeed;
					break;
				case(this.playerNextTurn > this.monsterNextTurn):
					this.monsterAction();
					this.playerNextTurn -=this.monsterNextTurn;
					this.monsterNextTurn = this.m.atkspeed;
					break;
			}
			if (this.playerhealth <= 0) {return false;}
			if (this.monsterhealth <= 0) {return true;}
			return this.nextRound();
		};
	}
	

	class Combatant {
		//base stats
		level;fortitude;speed;savagery;	#pierce; #armor; idr=0; mindmg=0; maxdmg=0;puncture=0;healthmult=0;damage=1;#dr=0;name;
		//corp stats
		corpreflect=0; corptruedmg=0;corphealth=0; 
		//calculated stats
		multikilldebuff; #multikillbuff=1; health; atkspeed; totalBaseDmg; trueDmg; damageRangeMin; damageRangeMax;punctureRangeMin;punctureRangeMax
		
		constructor(){		
		};
		
		set multikillbuff(mkb) { this.#multikillbuff = Math.round(mkb * 100) / 100};
		set pierce(pierce){this.#pierce = pierce};
		set armor(armor){this.#armor = armor};
		set dr(dr){this.#dr = dr};
		get multikillbuff(){return this.#multikillbuff}; 
		get pierce() {return Math.round(this.#pierce*this.#multikillbuff)};
		get armor(){ return Math.round(this.#armor*this.#multikillbuff)};
		get dr(){return this.#dr*this.#multikillbuff};
		
		
		calculateStats(){
			

			this.health = 100000*this.fortitude*this.#multikillbuff/(this.fortitude*this.#multikillbuff+4000);
			this.health *= (1+this.healthmult) * (1+this.corphealth);
			this.health = Math.round(this.health);
			
			this.atkspeed = Math.max(Math.floor(50-(50*this.speed*this.#multikillbuff/(this.speed*this.#multikillbuff+400))),10);
			
			this.totalBaseDmg = (10000 * this.savagery*this.#multikillbuff / (this.savagery*this.#multikillbuff + 3000)); 
			this.totalBaseDmg *= this.damage;
			this.totalBaseDmg += (this.level/2)*(1+this.level)/40;
			
			this.damageRangeMax = this.totalBaseDmg * (1+0.15+this.maxdmg);
			this.damageRangeMin = Math.min(this.totalBaseDmg * (1-0.15+this.mindmg),this.damageRangeMax);
			
			this.trueDmg = this.#pierce*this.#multikillbuff/2 + this.savagery*this.#multikillbuff/10;
			this.trueDmg *= (1+this.corptruedmg);
			
			this.punctureRangeMax = this.damageRangeMax * puncturePercentage[this.puncture];
			this.punctureRangeMin = this.damageRangeMin * puncturePercentage[this.puncture];
	}}

player = new Combatant();
monster = new Combatant();
var battle;

function updatePlayer(){
	player.level = parseInt($('#charLevel').val());
	player.savagery = parseInt($('#finalsavagery').html());
	player.fortitude = parseInt($('#finalfortitude').html());
	player.pierce = parseInt($('#finalpierce').html());
	player.armor = parseInt($('#finalarmor').html());
	player.speed = parseInt($('#finalspeed').html());
	player.idr = parseInt($('#finalidr').html())/100;
	player.damage = parseInt($('#totaldamageenergizement').html())/100;
	player.maxdmg = parseInt($('#totalmaxdmgenergizement').html())/100;
	player.mindmg = parseInt($('#totalmindmgenergizement').html())/100;
	player.puncture = parseInt($('.main.puncture').val());
	player.healthmult = parseInt($('#totalhealthenergizement').html())/100;
	
	//corp
	player.corphealth = parseFloat($('#corphealth').val())/100*player.level/100;
	player.corpreflect = parseFloat($('#corpreflect').val())/100*player.level;
	player.corptruedmg = parseFloat($('#corptruedmg').val())/100*player.level/100; 
	//compendium
	player.multikilldebuff = parseFloat($('#compendiummultidebuff').val())/100;
	
	player.calculateStats();
}

function updateMonster(e){
	var selection = e.value;
	monster = new Combatant();
	monster.name = monsters[selection][0];
	monster.level = monsters[selection][1];
	monster.fortitude = monsters[selection][5];
	monster.speed = monsters[selection][6];
	monster.savagery = monsters[selection][7];
	monster.pierce = monsters[selection][8];
	monster.armor = monsters[selection][9];
	monster.dr = parseInt(monsters[selection][10])/100;
	monster.puncture = monsters[selection][11];

	monster.calculateStats();
	
};


	
function populateDropdown(selector, options, tier){
	if (tier!="-")
	tier = parseInt(tier);
	$(selector).append($('<optgroup></optgroup>').addClass('T'+tier-1).attr("label",'T'+(tier-1)));
$.each(options, function(i, p) {
	if (tier=="-") return;
	if(parseInt(Energizements[p][tier])!= 0)
    $(selector).append($('<option></option>').val(p+Energizements[p][tier]).html(p+' '+Energizements[p][tier]));
})}

// calculate everything when page first loaded
function updateAll(){
	updateOther();
	//Equipment
	$("select.tier").each(function(i,p){
		updateEquip(p);
	});
	updateMonster(document.getElementById("monsterselect"));
}


function updateEquip(e){
	var drdwn = e;
	if(e.target)
	drdwn = e.target.parentNode.parentNode.getElementsByTagName('select')[0];
	if(drdwn!==undefined){
	var empower = parseInt($('.'+drdwn.id+'.empower').val());
	$.each(equipmentStats[drdwn.id][drdwn.value], function(i, p) {	
		if (equipmentStats[drdwn.id][drdwn.value][i]===0){
			$('.'+drdwn.id+'.'+statnames[i]).html(getEmpowerBonus(statnames[i],empower));
			$('#'+drdwn.id+statnames[i]).hide();}
		else{		
			$('#'+drdwn.id+statnames[i]).show();

			if (i!=0 && parseInt(drdwn.value)<8 &&document.getElementById(drdwn.id+statnames[i])!=null){
				$('.'+drdwn.id+'.'+statnames[i]).html(parseInt(equipmentStats[drdwn.id][drdwn.value][i])+parseInt(document.getElementById(drdwn.id+statnames[i]).value)+getEmpowerBonus(statnames[i],empower));}
			else{
				$('.'+drdwn.id+'.'+statnames[i]).html(equipmentStats[drdwn.id][drdwn.value][i]+getEmpowerBonus(statnames[i],empower));
				$('#'+drdwn.id+statnames[i]).hide();
			}
			}});		
		$('.'+drdwn.id+'.reinforcementsingle').html(Reinforcement[drdwn.id][drdwn.value]*Rslots[drdwn.id][drdwn.value]);
		$('#'+drdwn.id+'reinforcementslider').attr({"max":Rslots[drdwn.id][drdwn.value]})
		$('.'+drdwn.id+'.reinforcementratio2').html(Reinforcement[drdwn.id][drdwn.value]*$('#'+drdwn.id+'reinforcementslider').val());
		$('.'+drdwn.id+'.reinforcementratio').html(Reinforcement[drdwn.id][drdwn.value]*($('#'+drdwn.id+'reinforcementslider').attr("max")-$('#'+drdwn.id+'reinforcementslider').val()));

		$('optgroup.'+drdwn.id).removeClass("hidden")
		$('optgroup.'+drdwn.id).not('.T'+(drdwn.value)).not('.T'+(drdwn.value-1)).addClass("hidden").children("option").prop("selected", false);

	}
	calcTotals()
	}

 function getEmpowerBonus(stat, emp){
			switch(stat) {
			  case "savagery": 
				if (parseInt(emp) >= 5) return 30; 
				if (parseInt(emp) >= 1) return 10; 
				break;
			  case "fortitude":
				if (parseInt(emp) >= 6) return 30; 
				if (parseInt(emp) >= 2) return 10;
				break;
			  case "armor":
				if (parseInt(emp) >= 8) return 15; 
				if (parseInt(emp) >= 4) return 5;
				break;
			  case "pierce":
				if (parseInt(emp) >= 7) return 15; 
				if (parseInt(emp) >= 3) return 5;
				break;
			  case "speed":
				if (parseInt(emp) >= 9) return 10;
				break;
			  default:
				return '';
}
return '';};
	
function calcTotals(){
  updateOther();
//Allstat

	var allStat=100;
	
		$(".empower").each(function(i,p){
			if (parseInt(p.value)>9)
				allStat += parseInt(p.value)-9;		
		});

	$("#totalallstat").html(allStat+"%");
	//Stats
	var statname = statnames.slice(1);

	$.each(statname, function(i, p) {
	var sum = 0;
	var idr = 1;
	var sumEnergize =0;

//Base
	if (statname[i]==="idr"){
		$('.'+statname[i]).not(".energizement").each(
			function(){
				if(!isNaN(parseInt($(this).html()))){
				idr*=1.0-parseFloat($(this).html())/100.0;}
			});
	
	// Energizement IDR
	$("option.energizement:selected."+statname[i]).not(".perlevel").each(function(){
		let val = $(this).val().replace(/[^0-9]/g, '');
		idr*=1.0-parseFloat(val)/100.0;})
	
	$("#total"+statname[i]).html(Math.round((1.0-idr)*100.0)+"%");
	idr*=1.0-parseFloat($('#totalidrother').html())/100;
	//console.log(idr,$("#final"+statname[i]),Math.round((1.0-idr)*100.0)+"%");
	$("#final"+statname[i]).html(Math.round((1.0-idr)*100.0)+"%");
	}
	else{
		$('.'+statname[i]).each(
			function(){
				if(!isNaN(parseInt($(this).html()))){
				sum+=Math.max(0,parseInt($(this).html()));}
			});
	
	
	
	// Energizements
		
	$("option.energizement:selected."+statname[i]).not(".perlevel").each(function(){
		let val = $(this).val().replace(/[^0-9]/g, '');
		sumEnergize+=parseInt(val);})
		
	$("option.energizement:selected.perlevel."+statname[i]).each(function(){
		let val = $(this).val().replace(/[^0-9]/g, '');
		val*=Math.floor($("#charLevel").val()/10);
		sum+=parseInt(val);})
	$("#total"+statname[i]).html(sum);
	sum+=parseInt($('#total'+statname[i]+'other').html());
		}
	
	
		if(statname[i]==="damage") sumEnergize+=100+parseInt($('#compendiumdamage').val());
		if(statname[i]==="mindmg") sumEnergize+=parseInt($('#compendiummindmg').val());
		if(statname[i]==="maxdmg") sumEnergize+=parseInt($('#compendiummaxdmg').val());
		if(statname[i]!=="idr"){
		$("#total"+statname[i]+'energizement').html(sumEnergize+"%");	
		$("#final"+statname[i]).html(Math.round(sum*(1+sumEnergize/100)*allStat/100));}

	});

	updatePlayer();


	}

function updateOther(){
	
	var clvl;
	clvl=parseInt($('#dronelevel').val());
	$('#totalfortitudeother').html(2*clvl+parseInt($('#compendiumfortitude').val()));
	$('#totalarmorother').html(clvl+parseInt($('#compendiumarmor').val()));
	$('#totalspeedother').html(clvl/2+parseInt($('#compendiumspeed').val()));
	clvl=parseInt($('#drakelevel').val());
	$('#totalsavageryother').html(2*clvl+parseInt($('#compendiumsavagery').val()));
	$('#totalpierceother').html(clvl+parseInt($('#compendiumpierce').val()));
	$('#totalidrother').html((clvl/5)+'%');
//	clvl=parseInt($('#merchantlevel').val());
//	clvl=parseInt($('#prospectorlevel').val());

/*
	var statname = statnames.slice(1);

	$.each(statname, function(i, p) {
	var sum = 0;
	var idr = 1;
	var sumEnergize =0;

	if (statname[i]==="idr"){
		$('#total'+statname[i]+'other').html($('#companion'+statname[i]).html());
	}
	else{
		$('#total'+statname[i]+'other').html(parseInt($('#companion'+statname[i]).html())+parseInt($('#compendium'+statname[i]).val()));
		}
	});
*/
	}	
function changeView(view,t){

	$('.button').removeClass('is-success');
	$(t).addClass('is-success');
	$('.hidden').hide();
	$(view).show();
}

function runBattleSim(){
	battle = new Battle(this.player,this.monster);
	battle.fightMonsters(50);
}