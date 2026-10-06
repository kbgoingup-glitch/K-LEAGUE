const standings=[
  ["FC Seoul",30,19,5,6,"+31",62,"#b42a2f"],["Ulsan HD",30,14,5,11,"+5",47,"#1660a8"],["Jeju SK",30,12,10,8,"+6",46,"#ee6b19"],["Jeonbuk Hyundai Motors",30,11,11,8,"+10",44,"#1d7048"],["Gangwon FC",30,10,13,7,"+8",43,"#e46c2f"],["Daejeon Hana Citizen",30,10,10,10,"+9",40,"#7a1847"],["Pohang Steelers",30,11,7,12,"−6",40,"#b51e2e"],["Incheon United",30,10,9,11,"+3",39,"#2762a4"],["FC Anyang",30,9,11,10,"−9",38,"#6b2e83"],["Gimcheon Sangmu",30,5,18,7,"−6",33,"#b3282d"],["Bucheon FC 1995",30,7,11,12,"−9",32,"#bd1c2d"],["Gwangju FC",30,1,12,17,"−42",15,"#edca2f"]
];

const matches=[
  {date:"19 SEP · R30",venue:"Bucheon Stadium",home:"Bucheon 1995",away:"Gimcheon Sangmu",score:"0 — 2",events:"Go Jae-hyun 77′ (Lee Kang-hyun); Park Se-jin 86′ (unassisted)",verdict:"Gimcheon waited, struck twice late, and finally broke their winless run.",mom:"Go Jae-hyun",reason:"Broke the deadlock and turned patience into three points.",accent:"#b3282d"},
  {date:"19 SEP · R30",venue:"Anyang Stadium",home:"FC Anyang",away:"Ulsan HD",score:"2 — 1",events:"Matheus Oliveira 27′ (Knežević); Lee Dong-gyeong 54′ (Yago); Herculano 61′ pen.",verdict:"Anyang’s compact counterpunch knocked down second-placed Ulsan.",mom:"Matheus Oliveira",reason:"Scored the opener and drove Anyang’s most dangerous transitions.",accent:"#6b2e83"},
  {date:"20 SEP · R30",venue:"Gangneung Stadium",home:"Gangwon FC",away:"Jeju SK",score:"0 — 1",events:"Italo 36′ (Kim Shin-jin)",verdict:"One clean combination was enough for Jeju to keep climbing.",mom:"Italo",reason:"Finished the game’s decisive move with composure.",accent:"#ee6b19"},
  {date:"20 SEP · R30",venue:"Jeonju World Cup Stadium",home:"Jeonbuk",away:"Gwangju FC",score:"2 — 2",events:"Tiago Orobó 35′ (Kim Young-bin), 78′ (Cho Wi-je); Kim Tae-hyun 44′ o.g.; Iredale 90+1′ (unassisted)",verdict:"Gwangju stole a point at the death after Tiago twice put Jeonbuk ahead.",mom:"Tiago Orobó",reason:"Two goals, two leads and the night’s dominant attacking display.",accent:"#1d7048"},
  {date:"20 SEP · R30",venue:"Incheon Football Stadium",home:"Incheon United",away:"Daejeon Hana",score:"1 — 1",events:"Morgan Ferrier 35′ (unassisted); Kang Yoon-sung 90+2′ (Lee Myung-jae)",verdict:"Incheon owned the lead; Daejeon owned the final word.",mom:"Morgan Ferrier",reason:"Set the tempo, scored and remained Incheon’s sharpest threat.",accent:"#2762a4"},
  {date:"20 SEP · R30",venue:"Pohang Steel Yard",home:"Pohang Steelers",away:"FC Seoul",score:"2 — 1",events:"Kento Nishiya 3′ (Wanderson); Hwang Seo-woong 39′ (unassisted); Klimala 51′ pen.",verdict:"Pohang’s fearless first half handed the runaway leaders a rare defeat.",mom:"Kento Nishiya",reason:"An early goal and relentless work set Pohang’s upset in motion.",accent:"#b51e2e"},
  {date:"27 SEP · R22",venue:"Gangneung High1 Arena",home:"Gangwon FC",away:"Incheon United",score:"0 — 0",events:"No goals · No assists",verdict:"A bruising midfield stalemate in which both back lines refused to bend.",mom:"Marko Tući",reason:"The highest-rated defender in a match decided by clean-sheet discipline.",accent:"#343434"}
];

const fixtures=[
  ["FRI · 09 OCT · 14:00","Daejeon Hana","Jeonbuk Hyundai","Daejeon World Cup Stadium"],
  ["FRI · 09 OCT · 16:30","Gangwon FC","Bucheon 1995","Gangneung Stadium"],
  ["FRI · 09 OCT · 16:30","Incheon United","Pohang Steelers","Incheon Football Stadium"],
  ["SAT · 10 OCT · 16:30","Gimcheon Sangmu","FC Anyang","Gimcheon Stadium"],
  ["SUN · 11 OCT · 14:00","Gwangju FC","Ulsan HD","Gwangju World Cup Stadium"]
];

const photos={
  "Yago Cariello":"https://midias.correio24horas.com.br/2025/06/01/yago-cariello-ulsan-hd--2749361.png",
  "Patryk Klimala":"https://1293613113.rsc.cdn77.org/medium_Gsaz5_A6_Wo_AAFW_Km_acaf618151.webp",
  "Stefan Mugoša":"https://www.incheon.go.kr/data/editor/20250906/202509061029533961.jpg",
  "Matheus Oliveira":"https://assets.sorare.com/playerpicture/dde5f480-784f-40de-b729-824c041cf2e7/picture/squared-192a226d1d3d40ce99f511b383d14ced.png",
  "Lee Dong-gyeong":"https://i3n.news1.kr/system/photos/2025/10/29/7570804/high.jpg",
  "Jefferson Galego":"https://www.chosun.com/resizer/v2/MY3DAMLEME4GGNTDGEZTGYRXGM.jpg?auth=17bff6410d4b0d2402cd72908dc16f95553d63b0e04980080c3ef6e97b7ba9ab&height=665&smart=true&width=530",
  "Lee Ho-jae":"https://www.news1.kr/_next/image?q=75&url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2026%2F1%2F12%2F7693482%2Fhigh.jpg&w=828",
  "Jeong Seung-won":"https://t1.daumcdn.net/media/img-section/sports13/player/6/20160099.jpg",
  "Lee Myung-jae":"https://thumb.mtstarnews.com/21/2025/06/2025062511074643030_1.jpg",
  "Moon Seon-min":"https://d2tfp74nsbbrkr.cloudfront.net/v1/player/2026/K09/player_20170229.png"
};

const scorers=[
  ["Yago Cariello","Ulsan HD",13],["Patryk Klimala","FC Seoul",13],["Stefan Mugoša","Incheon United",12],["Matheus Oliveira","FC Anyang",12],["Lee Dong-gyeong","Ulsan HD",11],["Jefferson Galego","Bucheon 1995",10],["Lee Ho-jae","Pohang Steelers",8],["Jeong Jae-hee","Daejeon Hana",8],["Abdallah Hleihel","Gangwon FC",8],["Kim Dae-won","Gangwon FC",8]
];
const assists=[
  ["Lee Dong-gyeong","Ulsan HD",10],["Kim Dae-won","Gangwon FC",8],["Lee Myung-jae","Daejeon Hana",7],["Moon Seon-min","FC Seoul",6],["Jeong Seung-won","FC Seoul",6],["Rodrigo Bassani","Bucheon 1995",5],["Mo Jae-hyeon","Gangwon FC",5],["Diogo","Daejeon Hana",5],["Anderson","FC Seoul",5],["Matheus Oliveira","FC Anyang",5]
];

const initials=name=>name.split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase();
const fallback=name=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#d8d1c3"/><circle cx="60" cy="45" r="22" fill="#928b7d"/><path d="M20 120c5-32 20-49 40-49s35 17 40 49" fill="#928b7d"/><text x="60" y="112" text-anchor="middle" font-family="serif" font-size="14" fill="#f4f1e8">${initials(name)}</text></svg>`)}`;

document.querySelector("#standings-body").innerHTML=standings.map((r,i)=>`<tr class="${i===5?'split':''}"><td>${i+1}</td><td><span class="club-cell"><i class="club-dot" style="--club:${r[7]}"></i><strong>${r[0]}</strong></span></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><strong>${r[6]}</strong></td></tr>`).join("");
document.querySelector("#match-grid").innerHTML=matches.map(m=>`<article class="match-card" style="--accent:${m.accent}"><div class="match-top"><span>${m.date}</span><span>${m.venue}</span></div><div class="scoreline"><strong>${m.home}</strong><span class="score">${m.score}</span><strong>${m.away}</strong></div><div class="events"><b>Goals & assists</b><br>${m.events}</div><p class="verdict">“${m.verdict}”</p><div class="mom"><div><span>MAN OF THE MATCH</span><strong>${m.mom}</strong></div><div class="mom-reason">${m.reason}</div></div></article>`).join("");
document.querySelector("#fixture-list").innerHTML=fixtures.map(f=>`<article class="fixture-row"><time>${f[0]}</time><strong>${f[1]}</strong><span>v</span><strong>${f[2]}</strong><small>${f[3]}</small></article>`).join("");
function renderRanking(selector,rows){document.querySelector(selector).innerHTML=rows.map(([name,team,value])=>`<li><img class="player-photo" src="${photos[name]||fallback(name)}" alt="Portrait of ${name}" onerror="this.onerror=null;this.src='${fallback(name)}'"><span class="player-info"><strong>${name}</strong><small>${team}</small></span><span class="stat">${value}</span></li>`).join("")}
renderRanking("#goals-list",scorers);renderRanking("#assists-list",assists);
