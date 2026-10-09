export const growthGroups=[
 {name:'人',items:['家族を大切にした','目的よりも人を大事にできた','強い言葉を使わずに過ごせた','過度な謙遜や自虐を言わずに過ごせた']},
 {name:'行動',items:['早寝早起き出来た','スマホを無駄に触らなかった','自分の感情と向き合った','感情を音に乗せれた','笑顔ではっきりと喋れた','新たな体験をするために行動した','みんなに感謝した']},
 {name:'思考',items:['FXは暴力やDVと同じ','極端な考え方をせずに過ごせた','物事を好意的に捉えられた']},
 {name:'健康',items:['運動・筋トレをした','体に良い物を食べた','音楽に触れた']}
];
export const growthItems=growthGroups.flatMap(g=>g.items);
export const blankGrowth=(day)=>({day,values:Array(growthItems.length).fill(null)});
const validScore=n=>n===null||(Number.isInteger(n)&&n>=0&&n<=100&&n%10===0);
export const validGrowthRecord=r=>r&&typeof r.day==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(r.day)&&Array.isArray(r.values)&&r.values.length===growthItems.length&&r.values.every(validScore);
export function validGrowth(g){return g&&Array.isArray(g.entries)&&g.entries.every(validGrowthRecord)&&new Set(g.entries.map(e=>e.day)).size===g.entries.length&&(g.draft===null||validGrowthRecord(g.draft));}
export function growthSummary(values){
 if(!Array.isArray(values)||values.length!==growthItems.length||!values.every(validScore))throw Error('invalid scores');
 let offset=0;
 const groups=growthGroups.map(g=>{const slice=values.slice(offset,offset+g.items.length);offset+=g.items.length;const answered=slice.filter(n=>n!==null);return {name:g.name,answered:answered.length,count:slice.length,score:answered.length===slice.length?answered.reduce((a,b)=>a+b,0)/slice.length:null};});
 const count=values.filter(v=>v!==null).length;
 return {groups,count,total:count===growthItems.length?groups.reduce((a,g)=>a+g.score,0):null};
}
export function keepGrowth(g,record){
 if(!validGrowthRecord(record)||!record.values.some(v=>v!==null))throw Error('empty or invalid scores');
 return {draft:null,entries:[...(g?.entries||[]).filter(e=>e.day!==record.day),{day:record.day,values:[...record.values]}].sort((a,b)=>a.day.localeCompare(b.day))};
}
export const scoreText=n=>n===null?'未採点':Number(n.toFixed(1)).toString();
