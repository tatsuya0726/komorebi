// Parent-verified source data: evidence.json, verified 2026-10-08.
export const safetyEvidence={"author":"Simonsson et al.","year":2026,"publicationDate":"2026-09-14","doi":"10.2196/95628","url":"https://mental.jmir.org/2026/1/e95628/","finding":"上記5,049人RCTの二次解析。同じ試験なので独立追試として数えない。瞑想の苦痛体験オッズは通常ネット利用と明確な差なし（OR1.05,95%CI0.76–1.47）。全条件を合わせ4.1%が苦痛体験を報告。10分は5分より苦痛体験オッズが高い（OR1.42）。無害・長いほど良いとしない。"};
export const cards=[
  {
    "id": "rest",
    "icon": "◯",
    "title": "今は、休んでおく",
    "time": "1分〜",
    "body": "楽な姿勢で、何もしない時間に。画面を閉じても大丈夫。",
    "steps": [
      "いま楽な姿勢を選びます。",
      "何かを変えようとせず、休みます。"
    ],
    "evidence": [],
    "adaptation": "休む選択を尊重するためのカードです。治療効果を主張するものではありません。",
    "uncertainty": "休むだけでも、何もしなくても大丈夫。"
  },
  {
    "id": "move",
    "title": "5分、体を動かす",
    "minutes": 5,
    "target": "気分・活力",
    "steps": [
      "安全な場所で、無理のない速さで歩く。",
      "座ったままの軽い動きに変えても、途中でやめても大丈夫。"
    ],
    "adaptation": "研究は中等度のトレッドミル歩行5分を1時間ごとに計6回。ゆっくり歩く・座位版は負担軽減のアレンジで同じ効果は未検証。",
    "evidence": [
      {
        "author": "Bergouignan et al.",
        "year": 2016,
        "publicationDate": "2016-11-03",
        "doi": "10.1186/s12966-016-0437-z",
        "url": "https://link.springer.com/article/10.1186/s12966-016-0437-z",
        "design": "無作為化クロスオーバー、座りがちな成人30人",
        "comparator": "6時間座位、または朝の連続30分歩行",
        "result": "分散歩行で当日の気分・疲労に改善。活力の時間積分は座位比16%増。最初の5分では気分に差があったが活力には有意差なし。",
        "followup": "実験日内",
        "limitations": "少人数の実験室研究。持続効果や日常の軽い運動への一般化は不明。"
      }
    ],
    "whatClaimAllowed": "短い歩行を日中に分けて行うことが、気分や活力を支える可能性があります。",
    "uncertainty": "5分で必ず元気になる、集中力が上がるとは言えません。",
    "safety": "痛み・めまい・息苦しさが出たら中止。体調と移動能力に合わせる。",
    "icon": "↗",
    "time": "5分",
    "body": "安全な場所で、無理のない速さで歩く。"
  },
  {
    "id": "breathe",
    "title": "1分、息をゆっくり吐く",
    "minutes": 1,
    "target": "落ち着き・気分",
    "steps": [
      "楽に座り、普段どおり自然に吸う。",
      "苦しくない範囲で少しゆっくり吐く。回数や秒数は合わせなくて大丈夫。"
    ],
    "adaptation": "研究の5分の二段階吸気＋長い呼気（cyclic sighing）を再現せず、負担の少ない1分版に変更。直接検証された手順ではない。",
    "evidence": [
      {
        "author": "Yilmaz Balban et al.",
        "year": 2023,
        "publicationDate": "2023-01-10 online; 2023-01-17 issue",
        "doi": "10.1016/j.xcrm.2022.100895",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9873947/",
        "design": "成人108人を4群に無作為化、5分/日を28日",
        "comparator": "呼吸3方式と5分のマインドフルネス",
        "result": "cyclic sighing群のポジティブ感情の改善は瞑想群より大きかった。他の呼吸2群との個別比較は同様とは言えない。",
        "followup": "4週間、終了後の追跡なし",
        "limitations": "探索的・事後登録。各群少数、遠隔実施、健康上の除外あり。睡眠改善は確認されず。"
      }
    ],
    "whatClaimAllowed": "呼吸の練習が気分を支える可能性を示す研究があります。ここでは試しやすい短縮版です。",
    "uncertainty": "1分のこの手順の効果や、自律神経のリセットは実証していません。",
    "safety": "深く吸いすぎず、息止め・速い呼吸はしない。不快感やめまいがあれば普通の呼吸に戻す。運転中・水中では行わない。",
    "icon": "≈",
    "time": "1分",
    "body": "楽に座り、普段どおり自然に吸う。"
  },
  {
    "id": "nature",
    "title": "5分、緑のそばで休む",
    "minutes": 5,
    "target": "気分",
    "steps": [
      "安全で過ごしやすい屋外の緑のある場所へ。",
      "座るかゆっくり歩き、見える色や聞こえる音に気づいてみる。"
    ],
    "adaptation": "短い自然接触の先行研究はあるが、本カードの観察指示を含む日本語手順は未検証。窓から見る代替は屋外と同等としない。",
    "evidence": [
      {
        "author": "Trammell, Harriger & Krumrei-Mancuso",
        "year": 2024,
        "publicationDate": "2024-01-05",
        "doi": "10.3389/fpsyg.2023.1258378",
        "url": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1258378/full",
        "design": "大学生188人、3環境で20分歩行、関連仮説の事前登録あり",
        "comparator": "自然、街中、屋内トレッドミル",
        "result": "自然条件でポジティブ感情の増加とネガティブ感情の減少が最大。認知課題に環境差なし。",
        "followup": "直後",
        "limitations": "学生・特定地域。5分へ短縮した効果をこの研究は検証していない。"
      },
      {
        "author": "Neill, Gerard & Arbuthnott",
        "year": 2019,
        "publicationDate": "2018-12-16 online; 2019 volume 14 issue 6",
        "doi": "10.1080/17439760.2018.1557242",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/17439760.2018.1557242",
        "design": "大学生の2実験、5分の座位自然接触と5分対15分",
        "comparator": "第1実験の対照詳細は閲覧した抄録では未確認",
        "result": "短い自然接触後の感情改善を報告。5分と15分で差なし。",
        "followup": "直後",
        "limitations": "抄録確認のみ。サンプル数・効果量を未確認のため強い結論には使わない。"
      }
    ],
    "whatClaimAllowed": "緑のある場所で過ごすことが、そのときの気分を支える可能性があります。",
    "uncertainty": "日光そのものの効果や、5分での長期改善はこの根拠から分かりません。",
    "safety": "暑さ・寒さ・空気環境・足元を優先。太陽を直接見ない。外に出られない日はスキップ。",
    "icon": "♧",
    "time": "5分",
    "body": "安全で過ごしやすい屋外の緑のある場所へ。"
  },
  {
    "id": "gratitude",
    "title": "2分、小さなありがたさを拾う",
    "minutes": 2,
    "target": "ポジティブ感情",
    "steps": [
      "今日、少し助かったことを一つ思い出す。人以外でも大丈夫。",
      "何が助かったかを、一文だけ書くか心の中で言う。"
    ],
    "adaptation": "6種類の短い感謝課題から着想した独自2分版。原研究の課題内容・正確な所要時間を再現したものではない。",
    "evidence": [
      {
        "author": "Coles et al.",
        "year": 2026,
        "publicationDate": "2026-05-11 online; 2026-05-19 issue",
        "doi": "10.1073/pnas.2537789123",
        "url": "https://www.pnas.org/doi/10.1073/pnas.2537789123",
        "design": "34か国、10,696人の6種類の感謝実験",
        "comparator": "3種類の対照課題（閲覧した抄録では詳細未確認）",
        "result": "直後のポジティブ感情d=0.37、ネガティブ感情d=-0.22。恩義・負い目もd=0.15増加。",
        "followup": "直後の結果。持続性は未確認。",
        "limitations": "国と実践法による差。別の国へ一般化できる見込みが比較的高いのはポジティブ感情で、他の結果は不確か。"
      }
    ],
    "whatClaimAllowed": "短い感謝の実践は、直後のポジティブな気分を平均的に少し高めることがあります。",
    "uncertainty": "この2分版や長期の幸福度、活力への効果は検証していません。",
    "safety": "つらい出来事を良く解釈する必要はありません。負い目や嫌な気持ちが増すなら別のカードへ。",
    "icon": "✧",
    "time": "2分",
    "body": "今日、少し助かったことを一つ思い出す。人以外でも大丈夫。"
  },
  {
    "id": "connect",
    "title": "3分、安心できる人と話す",
    "minutes": 3,
    "target": "つながり・当日のwellbeing",
    "steps": [
      "話しやすい相手がいれば、短く近況を交わす。",
      "相手の話を聞く、気づかう、笑い合うなど自然な形で。今は難しければスキップ。"
    ],
    "adaptation": "3分という時間はアプリの目安。研究は友人との当日の交流を扱い、3分通話や送信だけの効果を検証していない。",
    "evidence": [
      {
        "author": "Hall et al.",
        "year": 2023,
        "publicationDate": "2023-01-27 online; 2025 volume 52 issue 3",
        "doi": "10.1177/00936502221139363",
        "url": "https://journals.sagepub.com/doi/10.1177/00936502221139363",
        "design": "無作為割付の3実験、347/310/250人（計907人）",
        "comparator": "対照群（抄録では各群の詳細未確認）",
        "result": "友人との7種類の交流行動で当日夜のwellbeing改善。研究内メタ解析d=0.255。",
        "followup": "当日末",
        "limitations": "交流時間・媒体・各行動の優劣や長期効果について強い結論は不可。"
      }
    ],
    "whatClaimAllowed": "友人とのちょっとした質のよい交流が、その日のwellbeingを支えることがあります。",
    "uncertainty": "返信の速さや連絡人数を効果の指標にしない。気分・活力に同じ効果量を当てない。",
    "safety": "安心できる相手を自分で選ぶ。アプリから自動送信しない。返信がなくても評価を下げない。",
    "icon": "∞",
    "time": "3分",
    "body": "話しやすい相手がいれば、短く近況を交わす。"
  },
  {
    "id": "kindness",
    "title": "1分、自分への言葉をやわらげる",
    "minutes": 1,
    "target": "自分へのいたわり",
    "steps": [
      "『今はこう感じているんだな』と、そのまま認める。",
      "友人にかけるような一言を自分へ。例：『全部を今やらなくてもいい』。身体に触れる必要はありません。"
    ],
    "adaptation": "1分の独自文章ワーク。20秒の接触介入や5–10分の音声瞑想と同じではない。",
    "evidence": [
      {
        "author": "Susman, Chen, Kring & Harvey",
        "year": 2024,
        "publicationDate": "2024-02-21 online; 2024-04 issue",
        "doi": "10.1016/j.brat.2024.104498",
        "url": "https://self-compassion.org/wp-content/uploads/2024/06/Shorttouch.pdf",
        "design": "事前登録RCT、米大学生135人、20秒/日を1か月",
        "comparator": "指のタッピング",
        "result": "全員を含むITT解析で有意な効果なし。高頻度実施者45人の解析では自己いたわり・ストレス等に差。",
        "followup": "1か月",
        "limitations": "実施者のみの結果は選択バイアスに弱い。ポジティブ感情の改善を主張しない。"
      },
      {
        "author": "Simonsson et al.",
        "year": 2026,
        "publicationDate": "2026-10 issue; online exact day unverified",
        "doi": "10.1016/j.brat.2026.105141",
        "url": "https://www.sciencedirect.com/science/article/pii/S0005796726001944",
        "design": "事前登録RCT、米英成人5,049人、5–10分の瞑想3種",
        "comparator": "通常のインターネット利用",
        "result": "マインドフルネス・自己いたわり・感謝の実践全体でネガティブ感情の小さな改善。抄録から個別の効果量は未確認。",
        "followup": "単回直後",
        "limitations": "この1分版や臨床治療への根拠ではない。個別推薦アルゴリズムの前向き検証は必要。"
      }
    ],
    "whatClaimAllowed": "気持ちを無理に変えず、自分への言葉を少しやわらげるための選択肢です。",
    "uncertainty": "1分で気分が改善する実証済みの方法とは表示しません。",
    "safety": "目を閉じなくてもよい。不快なら中止し、周囲のものを見るなど外側へ注意を戻す。",
    "icon": "☾",
    "time": "1分",
    "body": "『今はこう感じているんだな』と、そのまま認める。"
  }
];
