import {beautyData} from './beauty-data.js';
export const beautyGuide = {verifiedOn:beautyData.checkedAt,status:'verified',disclaimer:beautyData.disclaimer,sections:[...new Set(beautyData.cards.map(c=>c.category))].map(category=>({title:category,items:beautyData.cards.filter(c=>c.category===category).map(c=>({title:c.title,text:c.body,tips:c.tips,sources:c.sourceIds.map(id=>beautyData.sources.find(s=>s.id===id))})),sources:beautyData.sources.filter(s=>beautyData.cards.some(c=>c.category===category&&c.sourceIds.includes(s.id)))})),products:beautyData.products};
export function dailyFortune(date=new Date()) {
  const key=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  const messages=[
    ['余白の日','ひとつ減らして、少し楽に。今日は何もしない時間を選んでも。'],
    ['好きな色の日','身近な好きな色をひとつ眺めてみよう。見つからなくても大丈夫。'],
    ['自分のペースの日','急がない選択もあり。できるところまでで、ひと区切り。'],
    ['小さな発見の日','いつもの景色の中に、気になる形を探してみても。'],
    ['やさしい言葉の日','自分にかける言葉を、少しだけやわらかく。'],
    ['気分転換の日','気が向いたら、いつもと違う音楽や色を選んでも。'],
    ['そのままの日','何かを変えなくても大丈夫。いまの自分に合う過ごし方を。']
  ];
  let hash=0;for(const char of key)hash=(hash*31+char.charCodeAt(0))>>>0;
  const [title,message]=messages[hash%messages.length];
  return {title,message,date:key,disclaimer:'娯楽・気分転換のためのメッセージです。未来や運命を予測するものではなく、心理研究・診断とは関係ありません。'};
}
