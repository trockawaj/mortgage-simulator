import React from 'react';
import AdPlaceholder from './AdPlaceholder';

const ToolGuide = () => {
    return (
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mt-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-indigo-500 inline-block">
                この住宅ローンシミュレーションツールの賢い使い方とメリット
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-indigo-50 p-2 rounded-l-lg border-l-4 border-indigo-500">
                        1. なぜ住宅ローンのシミュレーションが必要なのか？
                    </h3>
                    <p>
                        マイホーム購入は人生で最も大きな買い物の一つです。3000万円、5000万円という金額を35年かけて返済していく計画において、
                        「月々いくらなら返せるか」という感覚だけで決めてしまうのは非常に危険です。
                        金利がたった0.1%違うだけで、総返済額には数十万〜数百万円の差が生じます。
                        また、子供の教育費がかさむ時期と、家の修繕が必要になる時期が重なると、家計破綻のリスクが高まります。
                    </p>
                    <p>
                        このシミュレーターを使えば、単なる返済額の計算だけでなく、
                        <strong>「将来のライフイベント（教育費など）を含めた家計の安全性」</strong>を可視化できます。
                        これが、銀行の公式サイトにある簡易シミュレーターとの決定的な違いです。
                    </p>
                </div>

                <AdPlaceholder format="horizontal" />

                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-indigo-50 p-2 rounded-l-lg border-l-4 border-indigo-500">
                        2. 本ツールの3つのメリット
                    </h3>

                    <h4 className="text-xl font-bold text-indigo-700 mt-6 mb-2">① 教育費の「見える化」で将来の不安解消</h4>
                    <p>
                        多くの人が見落としがちなのが「教育費のピーク」です。
                        子供が高校・大学に進学する時期は、家計が最も苦しくなるタイミングです。
                        本ツールでは、グラフ上に「高校期間」「大学期間」を色分けして表示するため、
                        「この時期までに繰り上げ返済をして月々の負担を減らしておくべきか？」
                        「あるいは教育ローンが必要になりそうか？」といった戦略を事前に立てることができます。
                    </p>

                    <h4 className="text-xl font-bold text-indigo-700 mt-6 mb-2">② 維持費を含めた「リアルな住居費」を算出</h4>
                    <p>
                        マンションなら管理費・修繕積立金、戸建てなら将来の修繕費用の積立が必要です。
                        また、マイホーム購入を機に車を購入したり、光熱費が変わることもあります。
                        このツールでは、ローン返済額だけでなく、これらの「ランニングコスト」を入力することで、
                        「実際に口座から毎月出ていくお金（実質住居費）」を算出します。
                        「家賃と同じくらいの返済額なら買える」という甘い罠に陥らないための機能です。
                    </p>

                    <h4 className="text-xl font-bold text-indigo-700 mt-6 mb-2">③ 最新の金利タイプ別比較が簡単</h4>
                    <p>
                        「変動金利」にするか「固定金利」にするか、永遠のテーマです。
                        プラン保存機能を使えば、「金利0.4%の変動プラン」と「金利1.8%の固定プラン」を
                        保存して見比べることができます。印刷機能（PDF保存）も搭載しているため、
                        ご家族での話し合いや、ファイナンシャルプランナーへの相談資料としても最適です。
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-indigo-50 p-2 rounded-l-lg border-l-4 border-indigo-500">
                        3. 初心者が知っておくべき住宅ローンの基礎知識
                    </h3>

                    <h4 className="font-bold border-b border-gray-300 pb-1 mb-2">金利タイプの特徴</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>変動金利型：</strong> 市場の金利情勢に合わせて、半年ごとに金利が見直されるタイプ。
                            現在は史上最低水準（0.3%〜0.5%程度）で推移していますが、将来上昇するリスクがあります。
                            「金利上昇時に返済額が増えても耐えられる余力がある人」に向いています。
                        </li>
                        <li>
                            <strong>固定金利期間選択型：</strong> 「当初10年は固定」など、一定期間金利が変わらないタイプ。
                            教育費がかかる期間だけ固定にして支出を安定させる、といった使い方が賢い戦略です。
                        </li>
                        <li>
                            <strong>全期間固定金利型（フラット35など）：</strong> 借り入れから完済まで金利が変わらないタイプ。
                            金利は高め（1.5%〜2.0%程度）ですが、安心感は抜群です。
                            ギリギリの資金計画で組む場合や、将来の金利上昇について悩みたくない人に最適です。
                        </li>
                    </ul>
                </div>

                <AdPlaceholder format="rectangle" />

                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-indigo-50 p-2 rounded-l-lg border-l-4 border-indigo-500">
                        4. 審査に通るためのポイント
                    </h3>
                    <p>
                        どれだけ良いシミュレーションができても、審査に通らなければ意味がありません。
                        金融機関が見ているポイントは主に以下の3つです。
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 font-medium">
                        <li>
                            <strong>返済負担率（返済比率）：</strong> 年収に占める年間返済額の割合。
                            一般的に30%〜35%以下が基準ですが、安全圏は「20%〜25%」と言われています。
                            このツールで計算した「月額合計」を使って、ご自身の比率を計算してみてください。
                        </li>
                        <li>
                            <strong>個人信用情報：</strong> クレジットカードの支払いや携帯電話代金の遅延がないか。
                            「異動」情報（ブラックリスト）が載っていると、住宅ローン審査はほぼ通りません。
                        </li>
                        <li>
                            <strong>健康状態：</strong> ほとんどの民間住宅ローンで「団体信用生命保険（団信）」への加入が必須です。
                            持病がある場合は「ワイド団信」や「フラット35（団信なし）」を検討する必要があります。
                        </li>
                    </ol>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-center mb-4">まずは現状を把握しよう</h4>
                    <p className="mb-4">
                        「いくら借りたいか（希望）」ではなく「いくらなら返せるか（現実）」を知ることが、
                        理想のマイホームへの第一歩です。
                        このシミュレーターは何度でも無料で利用でき、個人情報も保存されません。
                        まずは色々なパターンを入力して、ご自身に最適なプランを見つけてください。
                    </p>
                    <div className="text-center">
                        <button
                            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            今すぐシミュレーションする
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolGuide;
