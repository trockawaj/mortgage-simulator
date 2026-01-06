import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOContent = ({ principal, years, rate }) => {
    const dynamicTitle = `${principal}万円 ${years}年返済 住宅ローンシミュレーション`;
    const dynamicDescription = `借入額${principal}万円、返済期間${years}年、金利${rate}%での住宅ローン返済額を瞬時に計算。月々の支払額や総支払利息をグラフで確認できる無料シミュレーションツールです。`;

    return (
        <>
            <Helmet>
                <title>{dynamicTitle} | 住宅ローン返済シミュレーター</title>
                <meta name="description" content={dynamicDescription} />
                <meta property="og:title" content={dynamicTitle} />
                <meta property="og:description" content={dynamicDescription} />
            </Helmet>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700/50 mt-8">
                <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                    住宅ローンの基礎知識
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <section>
                        <h3 className="text-lg font-bold text-indigo-400 mb-2">元利均等返済とは？</h3>
                        <p className="text-sm">
                            毎月の返済額（元金＋利息）が一定になる返済方法です。返済計画が立てやすい反面、返済開始当初は利息の割合が多く、元金が減りにくいという特徴があります。
                            多くの住宅ローンで採用されている一般的な方式です。
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-indigo-400 mb-2">金利タイプについて</h3>
                        <p className="text-sm">
                            <span className="font-bold text-white">変動金利型</span>: 市場金利に応じて半年ごとに金利が見直されます。一般的に固定金利より低く設定されますが、将来金利が上昇するリスクがあります。<br />
                            <span className="font-bold text-white">固定金利型</span>: 返済期間中の金利が変わらないタイプです。返済額が確定するため安心感がありますが、変動金利より高めに設定される傾向があります。
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-indigo-400 mb-2">返済期間の考え方</h3>
                        <p className="text-sm">
                            最長35年（一部50年）で組むことが一般的です。期間を長くすると月々の返済額は抑えられますが、総支払利息は増えます。
                            逆に期間を短くすると利息負担は減りますが、月々の負担は大きくなります。ライフプランに合わせて、無理のない期間設定が重要です。
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default SEOContent;
