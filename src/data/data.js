import mandalorian from '../res/images/The-Mandalorian.jpg';
import grogu from '../res/images/grogu.jpg';
import greefKarga from '../res/images/Greef-Karga.jpg';
import client from '../res/images/TheClient.png';
import kuiil from '../res/images/Kuiil.png';
import ig11 from '../res/images/ig11.png';
import armourer from '../res/images/armourer.png';
import cara from '../res/images/cara.png';
import peli from '../res/images/peli.jpg';
import fennec from '../res/images/fennec.png';
import gideon from '../res/images/gideon.jpeg';
import bobba from '../res/images/bobba.jpeg';

const data = [
	{
		name: 'Din Djarin',
		className: 'mando',
		image: mandalorian,
		description:
			'Introduced as a bounty hunter, he is a member of the Mandalorian culture, as evidenced by his beskar armor and his distinctive helmet, which he never removes in front of anyone. He was a "foundling" who was rescued at a young age by the Mandalorians and adopted into their culture prior to the events of the series, after his parents were murdered by Separatist battle droids during the Clone Wars, which resulted in his intense hatred of droids. In the television series, the Mandalorian encounters a young alien known as "The Child", whom he attempts to protect from a remnant of the now-fallen Galactic Empire.',
		playedBy: 'Pedro Pascal'
	},
	{
		name: 'Grogu',
		className: 'grogu',
		image: grogu,
		description: `Grogu, also known as 'The Child' and colloquially referred to by fans and the media as 'Baby Yoda', is a young alien of the same species as popular Star Wars character Yoda. Although 50 years old, he is still an infant by the standards of his species, and although he cannot yet speak, he demonstrates a strong natural ability with The Force. A remnant of the Galactic Empire led by Moff Gideon is seeking the child to extract its blood for Dr. Pershing's secret experiments; the bounty hunter known as 'The Mandalorian' is hired to track Grogu down. Instead of turning him over, however, the Mandalorian attempts to protect the child from the Imperials. By the end of the first season, the child is adopted into the Mandalorian culture as a 'foundling', and the Mandalorian is tasked with reuniting the child with others of his kind.`,
		playedBy: 'Grogu'
	},
	{
		name: 'Greef Karga',
		className: 'greef',
		image: greefKarga,
		description: `Greef Karga is a leader of the Bounty Hunters' Guild, who serves as both an ally and adversary to the Mandalorian at different points in the show's first season. Operating out of the planet Nevarro, Greef gives assignments to bounty hunters and ensures everyone follows the guild's code. Greef provides the assignment that leads the Mandalorian to meet the Child. When the Mandalorian refuses to turn the Child over to the Imperials, Greef leads a group of bounty hunters in an unsuccessful attempt to take the Child from him. Greef later devises a plan to kill the Mandalorian and return the Child to the Imperials, but when the Child saves his life, Greef has a change of heart and helps protect him from the Empire.`,
		playedBy: 'Carl Weathers'
	},
	{
		name: 'The Client',
		className: 'client',
		image: client,
		description: `The Client is a mysterious and unnamed agent of the Imperial remnant. He hires the Mandalorian, as well as several other bounty hunters, to recover the Child on behalf of his superior, Moff Gideon. The Client does not reveal why he wants the Child, but he orders his colleague, Dr. Pershing, to "extract the necessary material" from him. The Mandalorian delivers the Child to the Client, but later rescues him back. The Client conspires to recapture the Mandalorian and the Child, but after the Mandalorian returns to him, the Client is shot and killed by stormtroopers under Gideon's orders.`,
		playedBy: 'Werner Herzog'
	},
	{
		name: 'Kuiil',
		className: 'kuiil',
		image: kuiil,
		description: `Kuiil is an alien of the Ugnaught species, and a former indentured servant of the Galactic Empire. He is living in solitude on the planet Arvala-7 when he encounters the Mandalorian, who comes to the planet to find and capture the Child. Kuiil assists him, and then later helps him rebuild his ship when it is dismantled by Jawas. Kuiil also rebuilds the bounty hunter droid IG-11 after the Mandalorian destroys him. Kuiil and IG-11 later join the Mandalorian on a mission to protect the Child from the Imperial remnant on the planet Nevarro, where Kuiil is shot and killed by Imperial Scout Troopers while attempting to bring the Child to safety.`,
		playedBy: ' Nick Nolte'
	},
	{
		name: 'IG-11',
		className: 'ig11',
		image: ig11,
		description: `IG-11 is a bounty hunter droid who initially attempts to capture and kill the Child, but is later reprogrammed to become its nurse and protector. The Mandalorian first encounters IG-11 when both attempt to collect the bounty on the Child. They work together to extract the Child from a gang of mercenaries, but when IG-11 tries to kill the Child, the Mandalorian instead shoots and kills the droid. IG-11's remains are recovered by Kuiil, who repairs and reprograms him. The droid later joins the Mandalorian on a mission to Nevarro to protect the Child from the Imperial remnant, and though the Mandalorian does not initially trust him, IG-11 ultimately sacrifices his own life to protect the Child and his allies.`,
		playedBy: 'Taika Waititi'
	},
	{
		name: 'The Armorer',
		className: 'armorer',
		image: armourer,
		description: `The Armorer is the leader of a tribe of Mandalorian warriors on Nevarro, which includes the show's title character. She provides spiritual guidance for the clan, and forges and repairs their armor, including a new set of armor she makes for the Mandalorian. In the first season finale "Chapter 8: Redemption", the Armorer instructs the Mandalorian to watch over and protect the Child, and to reunite the Child with others of his own kind.`,
		playedBy: 'Emily Swallow'
	},
	{
		name: 'Cara Dune',
		className: 'cara',
		image: cara,
		description: `Carasynthia "Cara" Dune is a former Rebel shock trooper from Alderaan who became a mercenary after the fall of the Empire. Originally from Alderaan, Cara is a highly trained warrior and skilled battle tactician. She harbors an intense hatred for the Galactic Empire, and is having trouble readjusting to post-war life. Cara first encounters the Mandalorian on the planet Sorgan, where they work together to protect a local village from raiders. He later recruits her to help protect the Child from the Imperial remnant`,
		playedBy: 'Gina Carano'
	},
	{
		name: 'Peli Motto',
		className: 'peli',
		image: peli,
		description: `Peli Motto is a mechanic who manages a spaceport on Tatooine, and is featured in "Chapter 5: The Gunslinger", "Chapter 9: The Marshal" and "Chapter 10: The Passenger". The Mandalorian hires her to repair his ship, and she also comes to take care of the Child. The bounty hunter Toro Calican briefly takes Peli and the Child as hostages in an unsuccessful attempt to abduct the Mandalorian. When the Mandalorian returns to Tatooine in search of another rumored to be there, Peli guides him to Mos Pelgo where he finds Cobb Vanth with Boba Fett's armor. She later gives him the task of taking the Frog Lady to Trask where her husband has knowledge of other Mandalorians' whereabouts.`,
		playedBy: 'Amy Sedaris'
	},
	{
		name: 'Fennec Shand',
		className: 'fennec',
		image: fennec,
		description: `Fennec Shand is an assassin and mercenary for the galaxy's top crime syndicates, who is sought by Toro Calican for his first bounty hunting assignment. Calican catches Fennec with assistance from the Mandalorian. When Fennec tries to convince Toro to free her so they could capture the Mandalorian and deliver him to the Bounty Hunters' Guild, Toro instead kills Fennec and seeks to capture the Mandalorian himself. Her body is later approached by an unidentified character.`,
		playedBy: 'Ming-Na Wen'
	},
	{
		name: 'Moff Gideon',
		className: 'gideon',
		image: gideon,
		description: `Moff Gideon is the leader of the Imperial remnant and the primary antagonist of The Mandalorian. Few details of his backstory have yet been revealed. He was previously an operative in the Imperial Security Bureau, a covert intelligence arm and secret police for the Empire, and played a role in past efforts to eliminate the Mandalorians. In The Mandalorian, Moff Gideon is attempting to abduct the Child to extract its blood for experimentation. In the first season, Gideon briefly traps the Mandalorian and his allies on Nevarro in an unsuccessful attempt to obtain the Child. Gideon reveals he knows secret details about the Mandalorian and his allies, and is the first character in the series to reveal the Mandalorian's real name, Din Djarin. In the final scene of the first season finale "Chapter 8: Redemption", it is revealed that Gideon possesses the Darksaber, a Mandalorian lightsaber.`,
		playedBy: 'Giancarlo Esposito'
	},
	{
		name: 'Boba Fett',
		className: 'boba',
		image: bobba,
		description: `Boba Fett is a Mandalorian bounty hunter who first appeared in The Empire Strikes Back. Having survived the Sarlacc Pit he fell into in Return of the Jedi, he makes his return in a silent cameo in "Chapter 9: The Marshal". He reappears in "Chapter 14: The Tragedy", where he is revealed to have saved Fennec Shand on Tatooine after the events of "Chapter 5: The Gunslinger". Initially demanding Din to return his armor which the latter had acquired from Cobb Vanth, he and Fennec later aid Din in battling Gideon's forces as he regains his armor in the process. When the Dark Troopers make off with Grogu and the Razor Crest is destroyed, Fett and Fennec swear to help the Mandalorian rescue Grogu as repayment for Din returning his armor.`,
		playedBy: 'Temuera Morrison'
	}
];

const seasonOne = [
	{
		episode: 1,
		name: 'The Mandalorian',
		description: `A Mandalorian bounty hunter tracks a target for a well-paying, mysterious client.`,
		date: '12/11/2019'
	},
	{
		episode: 2,
		name: 'The Child',
		description: `Target in hand, the Mandalorian must now contend with scavengers.`,
		date: '15/11/2019'
	},
	{
		episode: 3,
		name: 'The Sin',
		description: `The battered Mandalorian returns to his client for his reward.`,
		date: '22/11/2019'
	},
	{
		episode: 4,
		name: 'Sanctuary',
		description: `The Mandalorian teams up with an ex-soldier to protect a farming village from raiders.`,
		date: '29/11/2019'
	},
	{
		episode: 5,
		name: 'The Gunslinger',
		description: `On a familiar desert planet, the Mandalorian helps a rookie bounty hunter who is in over his head.`,
		date: '06/12/2019'
	},
	{
		episode: 6,
		name: 'The Prisoner',
		description: `The Mandalorian is part of a crew of mercenaries springing a convict from a prison ship.`,
		date: '13/12/2019'
	},
	{
		episode: 7,
		name: 'The Reckoning',
		description: `An old contact extends an invitation for the Mandalorian to make peace with his enemies.`,
		date: '18/12/2019'
	},
	{
		episode: 8,
		name: 'Redemption',
		description: `The Mandalorian and his allies come to know their true enemy, who already knows much about them.`,
		date: '27/12/2019'
	}
];

const seasonTwo = [
	{
		episode: 1,
		name: 'The Marshal',
		description: `The Mandalorian is drawn to the Outer Rim in search of others of his kind.`,
		date: '30/10/2020'
	},
	{
		episode: 2,
		name: 'The Passenger',
		description: `The Mandalorian must ferry a passenger with precious cargo on a risky journey.`,
		date: '06/11/2020'
	},
	{
		episode: 3,
		name: 'The Heiress',
		description: `The Mandalorian braves high seas and meets unexpected allies.`,
		date: '13/11/2020'
	},
	{
		episode: 4,
		name: 'The Seige',
		description: `The Mandalorian rejoins old allies for a new mission.`,
		date: '20/11/2020'
	},
	{
		episode: 5,
		name: 'The Jedi',
		description: `The Mandalorian travels to a world ruled by a ruthless magistrate who has made a powerful enemy.`,
		date: '27/11/2020'
	},
	{
		episode: 6,
		name: 'The Tragedy',
		description: `The Mandalorian and Child travel to an ancient site.`,
		date: '04/12/2020'
	},
	{
		episode: 7,
		name: 'The Believer',
		description: `To move against the Empire, the Mandalorian needs the help of an old enemy.`,
		date: '11/12/2020'
	},
	{
		episode: 8,
		name: 'The Rescue',
		description: `The Mandalorian and his allies attempt a daring rescue.`,
		date: '18/12/2020'
	}
];

export { data, seasonOne, seasonTwo };
