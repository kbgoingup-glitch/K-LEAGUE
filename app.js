const standings=[
  ["FC Seoul",33,20,7,6,"+32",67,"#b42a2f"],["Ulsan HD",33,15,6,12,"+5",51,"#1660a8"],["Daejeon Hana Citizen",33,13,10,10,"+12",49,"#7a1847"],["Jeonbuk Hyundai Motors",33,12,12,9,"+10",48,"#1d7048"],["Gangwon FC",33,11,15,7,"+10",48,"#e46c2f"],["Incheon United",33,12,10,11,"+8",46,"#2762a4"],["Jeju SK",33,12,10,11,"+2",46,"#ee6b19"],["FC Anyang",33,10,13,10,"−8",43,"#6b2e83"],["Pohang Steelers",33,11,9,13,"−9",42,"#b51e2e"],["Gimcheon Sangmu",33,5,19,9,"−8",34,"#b3282d"],["Bucheon FC 1995",33,7,11,15,"−15",32,"#bd1c2d"],["Gwangju FC",33,3,12,18,"−39",21,"#edca2f"]
];

const matches=[
  {date:"24 OCT · R33",venue:"Ulsan Munsu Stadium",home:"Ulsan HD",away:"Pohang Steelers",score:"2 — 2",events:"Wanderson 2′ (Jorge); Kim Seung-ho 25′ (Kento Nishiya); Kim Young-gwon 61′ (Lee Dong-gyeong); Lee Dong-gyeong 68′ (unassisted)",verdict:"Pohang landed two early derby blows, but Ulsan’s captain and creator pulled the East Coast classic level.",mom:"Lee Dong-gyeong",reason:"One assist and one goal powered Ulsan’s two-goal comeback.",accent:"#1660a8"},
  {date:"24 OCT · R33",venue:"Anyang Stadium",home:"FC Anyang",away:"Jeonbuk Hyundai",score:"1 — 1",events:"Kim Woon 45+2′ (Matheus Oliveira); Tiago Orobó 90+3′ (Kim Jin-gyu)",verdict:"Anyang were seconds from a landmark win before Tiago rescued Jeonbuk with the last word.",mom:"Tiago Orobó",reason:"Delivered the stoppage-time equaliser when Jeonbuk needed it most.",accent:"#1d7048"},
  {date:"24 OCT · R33",venue:"Bucheon Stadium",home:"Bucheon FC 1995",away:"Gwangju FC",score:"0 — 3",events:"John Iredale 45+2′ (Adriel Ba Loua), 65′ (Adriel Ba Loua); Adriel Ba Loua 60′ (Shin Chang-moo)",verdict:"Gwangju turned the regular-season finale into a ruthless three-goal away statement.",mom:"John Iredale",reason:"His clinical brace framed Gwangju’s biggest away performance of the run-in.",accent:"#edca2f"},
  {date:"24 OCT · R33",venue:"Gimcheon Stadium",home:"Gimcheon Sangmu",away:"Daejeon Hana",score:"1 — 2",events:"Diogo 51′ (Kim Bong-soo); Jeong Jae-min 73′ (Min Kyung-hyun); Gustav Ludwigson 90+6′ (unassisted)",verdict:"Daejeon stole second-half control and then stole all three points at the final breath.",mom:"Gustav Ludwigson",reason:"Settled a tense contest with a dramatic 96th-minute winner.",accent:"#7a1847"},
  {date:"24 OCT · R33",venue:"Incheon Football Stadium",home:"Incheon United",away:"Jeju SK",score:"3 — 1",events:"Lee Myung-joo 59′ (Stefan Mugoša); Emerson Negueba 72′ (unassisted); Lee Dong-ryul 81′ (unassisted); Lee Chung-yong 90+2′ (Morgan Ferrier)",verdict:"Incheon punished ten-man Jeju late and seized the final place in Final A.",mom:"Lee Myung-joo",reason:"Opened the scoring and dictated the midfield in Incheon’s top-six clincher.",accent:"#2762a4"},
  {date:"24 OCT · R33",venue:"Seoul World Cup Stadium",home:"FC Seoul",away:"Gangwon FC",score:"1 — 1",events:"Moon Seon-min 59′ (Anderson); Kang Jun-hyuk 65′ (Kim Dae-won)",verdict:"The match finished level, but Seoul’s ten-year wait ended with a seventh league crown.",mom:"Gu Sung-yun",reason:"A first-half penalty save kept Seoul on course for the point that sealed the title.",accent:"#b42a2f"}
];

const fixtures=[
  ["SAT · 31 OCT · 16:30","Gwangju FC","Gimcheon Sangmu","Gwangju World Cup Stadium"],
  ["SUN · 01 NOV · 14:00","Pohang Steelers","Jeju SK","Pohang Steel Yard"],
  ["SUN · 01 NOV · 14:00","Ulsan HD","Gangwon FC","Ulsan Munsu Stadium"],
  ["SUN · 01 NOV · 16:30","FC Seoul","Incheon United","Seoul World Cup Stadium"],
  ["SUN · 01 NOV · 16:30","FC Anyang","Bucheon FC 1995","Anyang Stadium"]
];

const photos={
  "Yago Cariello":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K01/player_20230315.png",
  "Patryk Klimala":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K09/player_20250331.png",
  "Stefan Mugoša":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K18/player_20180196.png",
  "Matheus Oliveira":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K27/player_20240078.png",
  "Lee Dong-gyeong":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K01/player_20180088.png",
  "Tiago Orobó":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K05/player_20220244.png",
  "John Iredale":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K22/player_20250193.png",
  "Kim Dae-won":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K21/player_20160098.png",
  "Jefferson Galego":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K26/player_20220353.png",
  "Emerson Negueba":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K04/player_20260228.png",
  "Lee Myung-jae":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K10/player_20140041.png",
  "Moon Seon-min":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K09/player_20170229.png",
  "Lee Young-jae":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K05/player_20150104.png",
  "Jeong Seung-won":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K09/player_20160099.png",
  "Anderson":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K09/player_20240179.png",
  "Ivan Jukić":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K27/player_20250365.png",
  "Adriel Ba Loua":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K22/player_20260347.png"
};

const scorers=[
  ["Yago Cariello","Ulsan HD",16],["Patryk Klimala","FC Seoul",16],["Stefan Mugoša","Incheon United",14],["Matheus Oliveira","FC Anyang",12],["Lee Dong-gyeong","Ulsan HD",12],["Tiago Orobó","Jeonbuk Hyundai",11],["John Iredale","Gwangju FC",10],["Kim Dae-won","Gangwon FC",10],["Jefferson Galego","Bucheon FC 1995",10],["Emerson Negueba","Jeju SK",9]
];
const assists=[
  ["Lee Dong-gyeong","Ulsan HD",13],["Kim Dae-won","Gangwon FC",9],["Lee Myung-jae","Daejeon Hana",8],["Moon Seon-min","FC Seoul",8],["Lee Young-jae","Jeonbuk Hyundai",7],["Jeong Seung-won","FC Seoul",7],["Anderson","FC Seoul",6],["Matheus Oliveira","FC Anyang",6],["Ivan Jukić","FC Anyang",5],["Adriel Ba Loua","Gwangju FC",5]
];

const initials=name=>name.split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase();
const fallback=name=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#d8d1c3"/><circle cx="60" cy="45" r="22" fill="#928b7d"/><path d="M20 120c5-32 20-49 40-49s35 17 40 49" fill="#928b7d"/><text x="60" y="112" text-anchor="middle" font-family="serif" font-size="14" fill="#f4f1e8">${initials(name)}</text></svg>`)}`;

document.querySelector("#standings-body").innerHTML=standings.map((r,i)=>`<tr class="${i===5?'split':''}"><td>${i+1}</td><td><span class="club-cell"><i class="club-dot" style="--club:${r[7]}"></i><strong>${r[0]}</strong></span></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><strong>${r[6]}</strong></td></tr>`).join("");
document.querySelector("#match-grid").innerHTML=matches.map(m=>`<article class="match-card" style="--accent:${m.accent}"><div class="match-top"><span>${m.date}</span><span>${m.venue}</span></div><div class="scoreline"><strong>${m.home}</strong><span class="score">${m.score}</span><strong>${m.away}</strong></div><div class="events"><b>Goals & assists</b><br>${m.events}</div><p class="verdict">“${m.verdict}”</p><div class="mom"><div><span>MAN OF THE MATCH</span><strong>${m.mom}</strong></div><div class="mom-reason">${m.reason}</div></div></article>`).join("");
document.querySelector("#fixture-list").innerHTML=fixtures.map(f=>`<article class="fixture-row"><time>${f[0]}</time><strong>${f[1]}</strong><span>v</span><strong>${f[2]}</strong><small>${f[3]}</small></article>`).join("");
function renderRanking(selector,rows){document.querySelector(selector).innerHTML=rows.map(([name,team,value])=>`<li><img class="player-photo" src="${photos[name]||fallback(name)}" alt="Portrait of ${name}" onerror="this.onerror=null;this.src='${fallback(name)}'"><span class="player-info"><strong>${name}</strong><small>${team}</small></span><span class="stat">${value}</span></li>`).join("")}
renderRanking("#goals-list",scorers);renderRanking("#assists-list",assists);
