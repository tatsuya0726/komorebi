import {quotes,quoteUpdatedOn} from './quote-data.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function chooseQuote(items,previous=-1,random=Math.random){
 if(!items.length)return -1;
 if(items.length===1)return 0;
 const choices=items.map((_,i)=>i).filter(i=>i!==previous);
 return choices[Math.min(choices.length-1,Math.max(0,Math.floor(random()*choices.length)))];
}
let selected=chooseQuote(quotes);
function content(){const q=quotes[selected];return '<blockquote>'+esc(q.text)+'</blockquote><p class="quote-author">— '+esc(q.author)+'</p>';}
export function renderQuote(){return '<section class="quote-panel" aria-labelledby="quote-title"><div class="eyebrow">WORDS TO KEEP</div><h2 id="quote-title">今日、出会う言葉。</h2><div id="quote-content" aria-live="polite" aria-atomic="true">'+content()+'</div><button type="button" data-quote-next>別の名言を読む <span aria-hidden="true">↗</span></button><details class="quote-source"><summary>この言葉について</summary><p class="meta">あなたの「名言Bot」シートから9件を取り込みました（'+quoteUpdatedOn+'時点）。人物名・文言はシートの記載に基づき、原典との照合はしていません。感じ方は人それぞれ。今の自分に合う言葉だけ、受け取ってください。シートの変更は自動反映されません。</p></details></section>';}
document.addEventListener('click',e=>{if(!e.target.closest('[data-quote-next]'))return;selected=chooseQuote(quotes,selected);document.querySelector('#quote-content').innerHTML=content();});
