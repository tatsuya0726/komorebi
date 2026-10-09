import {photo,featureCards} from './visuals.js';
import {renderQuote} from './quotes.js';
import {fortuneMarkup} from './fortune-ui.js';
import {beautyGuide,dailyFortune} from './wellbeing-extras.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title||s.linkLabel)}（外部サイト）</a>`;
const tips=items=>`<ul>${items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
const menu=document.createElement('button');menu.dataset.nav='extras';menu.textContent='楽しみ';document.querySelector('nav').append(menu);
export function renderExtras(view){
 if(view==='extras')return '<div class="eyebrow">YOUR LITTLE RETREAT</div><h1>気が向いたときの、楽しみ。</h1><p class="lead">記録も、全部を試すことも必要ありません。</p>'+featureCards()+renderQuote();
 if(view==='fortune')return fortuneMarkup(dailyFortune());
 if(view==='beauty')return `<div class="eyebrow">MAKEUP & CARE</div><h1>自分に合う、身だしなみ。</h1><figure class="beauty-cover">${photo('beauty','スキンケア容器やブラシ、タオルのイメージ')}<figcaption>イメージ画像です。掲載商品の実物ではありません。</figcaption></figure><p class="lead">メンズメイクを初めて試す人へ。使わない選択も、自分に合うところだけでも。</p><p>ここは美容の情報ガイドです。気分の研究カードや診断とは別の情報です。</p><details class="box"><summary>使う前に・肌への配慮</summary><p>${esc(beautyGuide.disclaimer)}</p><p>傷・湿疹・炎症のある部位は避け、刺激が出たら使用を中止してください。使い続けて様子をみるのではなく、皮膚科に相談を。</p><p class="meta">製品の表示が変わることがあります。現在の容器・公式情報を優先してください。</p></details>${beautyGuide.sections.map(s=>`<details class="box"><summary>${esc(s.title)}</summary>${s.items.map(i=>`<section><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p>${tips(i.tips)}<details><summary>出典を見る</summary>${i.sources.map(r=>`<p>${link(r)}</p>`).join('')}<p class="meta">確認日：${esc(beautyGuide.verifiedOn)}</p></details></section>`).join('')}</details>`).join('')}<details class="box"><summary>美容品の例を見てみる（6点）</summary><p>カテゴリーを知るための例です。購入や効果を保証する推奨・ランキングではありません。全部そろえる必要もありません。</p>${beautyGuide.products.map(p=>`<details><summary>${esc(p.category)}：${esc(p.name)}</summary><p class="tag">${esc(p.classification)}</p><p>${esc(p.description)}</p>${tips(p.selectionNotes)}<p>${link(p)}</p><p class="meta">確認日：${esc(p.checkedAt)}</p></details>`).join('')}</details><p class="meta">画像はAIで制作したイメージです。広告・解析サービスは使っていません。出典リンクを押すと外部サイトへ移動します。</p><button data-nav="extras">楽しみに戻る</button>`;
 return null;
}
