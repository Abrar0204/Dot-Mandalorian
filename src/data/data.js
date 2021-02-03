import mandalorian from '../res/images/webp/The-Mandalorian.webp';
import grogu from '../res/images/webp/grogu.webp';
import greefKarga from '../res/images/webp/Greef-Karga.webp';
import client from '../res/images/webp/TheClient.webp';
import kuiil from '../res/images/webp/Kuiil.webp';
import ig11 from '../res/images/webp/ig11.webp';
import armourer from '../res/images/webp/armourer.webp';
import cara from '../res/images/webp/cara.webp';
import peli from '../res/images/webp/peli.webp';
import fennec from '../res/images/webp/fennec.webp';
import gideon from '../res/images/webp/gideon.webp';
import bobba from '../res/images/webp/bobba.webp';

const data = [
	{
		name: 'Din Djarin',
		className: 'mando',
		image: mandalorian,
		description:
			'Introduced as a bounty hunter, he is a member of the Mandalorian culture, as evidenced by his beskar armor and his distinctive helmet, which he never removes in front of anyone. He was a "foundling" who was rescued at a young age by the Mandalorians and adopted into their culture prior to the events of the series, after his parents were murdered by Separatist battle droids during the Clone Wars, which resulted in his intense hatred of droids.',
		playedBy: 'Pedro Pascal'
	},
	{
		name: 'Grogu',
		className: 'grogu',
		image: grogu,
		description: `Grogu, also known as 'The Child' is a young alien of the same species as Master Yoda. Although 50 years old, he is still an infant by the standards of his species, and although he cannot yet speak, he demonstrates a strong natural ability with The Force. A remnant of the Galactic Empire led by Moff Gideon is seeking the child to extract its blood for Dr. Pershing's secret experiments; the bounty hunter known as 'The Mandalorian' is hired to track Grogu down.`,
		playedBy: 'Grogu'
	},
	{
		name: 'Greef Karga',
		className: 'greef',
		image: greefKarga,
		description: `Operating out of the planet Nevarro, Greef gives assignments to bounty hunters. Greef provides the assignment that leads the Mandalorian to meet the Child. When the Mandalorian refuses to turn the Child over to the Imperials, Greef leads a group of bounty hunters in an unsuccessful attempt to take the Child from him. Greef later devises a plan to kill the Mandalorian and return the Child to the Imperials, but when the Child saves his life, Greef has a change of heart and helps protect him from the Empire.`,
		playedBy: 'Carl Weathers'
	},
	{
		name: 'The Client',
		className: 'client',
		image: client,
		description: `The Client is a mysterious and unnamed agent of the Imperial remnant. He hires the Mandalorian, as well as several other bounty hunters, to recover the Child on behalf of his superior, Moff Gideon. The Mandalorian delivers the Child to the Client, but later rescues him back. The Client conspires to recapture the Mandalorian and the Child, but after the Mandalorian returns to him, the Client is shot and killed by stormtroopers under Gideon's orders.`,
		playedBy: 'Werner Herzog'
	},
	{
		name: 'Kuiil',
		className: 'kuiil',
		image: kuiil,
		description: `Kuiil is an alien of the Ugnaught species. He is living in solitude on the Arvala-7 when he encounters the Mandalorian, who comes to the planet to find and capture the Child. Kuiil assists him, and then later helps him rebuild his ship when it is dismantled by Jawas. Kuiil also rebuilds IG-11 after the Mandalorian destroys him. Kuiil and IG-11 later join the Mandalorian on a mission to protect the Child from the Imperial remnant but is shot and killed by Imperial Scout Troopers while attempting to bring the Child to safety.`,
		playedBy: ' Nick Nolte'
	},
	{
		name: 'IG-11',
		className: 'ig11',
		image: ig11,
		description: `The Mandalorian first encounters IG-11 when both attempt to collect the bounty on the Child. They work together to extract the Child, but when IG-11 tries to kill the Child, the Mandalorian instead shoots and kills the droid. IG-11's remains are recovered by Kuiil, who repairs and reprograms him. The droid later joins the Mandalorian on a mission to Nevarro to protect the Child from the Imperial remnant, and ultimately sacrifices his own life to protect the Child and his allies.`,
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
		description: `Carasynthia "Cara" Dune is a former Rebel shock trooper from Alderaan who became a mercenary after the fall of the Empire. Originally from Alderaan, Cara is a highly trained warrior and skilled battle tactician. Cara first encounters the Mandalorian on the planet Sorgan, where they work together to protect a local village from raiders. He later recruits her to help protect the Child from the Imperial remnant.`,
		playedBy: 'Gina Carano'
	},
	{
		name: 'Peli Motto',
		className: 'peli',
		image: peli,
		description: `Peli Motto is a mechanic who manages a spaceport on Tatooine. The Mandalorian hires her to repair his ship. The bounty hunter Toro Calican briefly takes Peli and the Child as hostages in an unsuccessful attempt to abduct the Mandalorian. When the Mandalorian returns to Tatooine, Peli guides him to Mos Pelgo where he finds Cobb Vanth with Boba Fett's armor. She later gives him the task of taking the Frog Lady to Trask where her husband has knowledge of other Mandalorians' whereabouts.`,
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
		description: `Moff Gideon is the leader of the Imperial remnant and the primary antagonist of The Mandalorian. Few details of his backstory have yet been revealed. He was previously an operative in the Imperial Security Bureau, a covert intelligence arm and secret police for the Empire, and played a role in past efforts to eliminate the Mandalorians. In The Mandalorian, Moff Gideon is attempting to abduct the Child to extract its blood for experimentation.`,
		playedBy: 'Giancarlo Esposito'
	},
	{
		name: 'Boba Fett',
		className: 'boba',
		image: bobba,
		description: `Boba Fett makes his return in a silent cameo in "Chapter 9:The Marshal". He is revealed to have saved Fennec Shand on Tatooine. He and Fennec aid Din in battling Gideon's forces as he regains his armor in the process. When the Dark Troopers make off with Grogu and the Razor Crest is destroyed, Fett and Fennec swear to help the Mandalorian rescue Grogu as repayment for Din returning his armor.`,
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
