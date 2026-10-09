export const KEY='komorebi-v1';
export const empty=()=>({version:1,entries:[],draft:null});
export const dayKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const rating=x=>x===null||(Number.isInteger(x)&&x>=1&&x<=5);
const check=x=>x&&rating(x.mood)&&rating(x.energy);
const draft=x=>x&&typeof x.id==='string'&&typeof x.day==='string'&&check(x.before)&&(x.note===undefined||(typeof x.note==='string'&&x.note.length<=140))&&(!x.afterDraft||check(x.afterDraft))&&['note','check','choose','active','after'].includes(x.stage)&&(x.card===null||typeof x.card==='string');
export function decode(raw){if(raw===null)return empty();const x=JSON.parse(raw);if(x.version!==1||!Array.isArray(x.entries)||!x.entries.every(e=>draft(e)&&check(e.after)&&typeof e.finished==='string')||(x.draft!==null&&!draft(x.draft)))throw Error('invalid storage');return x;}
export function load(storage){try{return {data:decode(storage.getItem(KEY)),error:false};}catch{return {data:empty(),error:true};}}
export function save(storage,data){try{storage.setItem(KEY,JSON.stringify(data));return true;}catch{return false;}}
export function complete(data,after,now=new Date()){if(!data.draft)return data;return {...data,entries:[...data.entries.filter(e=>e.id!==data.draft.id),{...data.draft,after,finished:now.toISOString()}],draft:null};}
