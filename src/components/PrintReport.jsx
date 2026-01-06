import React, { forwardRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const PrintReport = forwardRef(({ values, result, schedule, educationPeriods = [] }, ref) => {
    if (!result) return null;

    const data = (schedule || []).filter((_, i) => i % 12 === 0); // 間引いて表示

    return (
        <div ref={ref} className="p-8 bg-white text-gray-800 print-container">
            <style type="text/css" media="print">
                {`
                    @page { size: A4; margin: 20mm; }
                    .print-container { width: 100%; color: #000; }
                    h1 { font-size: 24px; border-bottom: 2px solid #333; margin-bottom: 20px; padding-bottom: 10px; }
                    h2 { font-size: 18px; margin-top: 20px; margin-bottom: 10px; background: #eee; padding: 5px 10px; }
                    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                    .row { display: flex; justify-content: space-between; border-bottom: 1px solid #ddd; padding: 5px 0; }
                    .highlight { font-weight: bold; font-size: 18px; color: #333; }
                    .footer { margin-top: 30px; font-size: 10px; text-align: center; color: #666; }
                `}
            </style>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">住宅ローン返済シミュレーション結果</h1>
                <span className="text-sm text-gray-500">作成日: {new Date().toLocaleDateString()}</span>
            </div>

            <div className="grid-2">
                <div>
                    <h2>シミュレーション条件</h2>
                    <div className="space-y-2">
                        <div className="row"><span>借入金額</span> <strong>{values?.principal ?? 0}万円</strong></div>
                        <div className="row"><span>金利</span> <strong>{values?.rate ?? 0}%</strong></div>
                        <div className="row"><span>返済期間</span> <strong>{values?.years ?? 0}年</strong></div>
                        <div className="row"><span>返済開始年齢</span> <strong>{values?.startAge ?? 35}歳</strong></div>
                    </div>
                </div>
                <div>
                    <h2>月々の支払目安</h2>
                    <div className="space-y-2">
                        <div className="row"><span>ローン返済額</span> <strong>{result?.monthlyPayment?.toLocaleString() ?? 0}円</strong></div>
                        <div className="row"><span>維持費等</span> <strong>{result?.monthlyMaintenanceCost?.toLocaleString() ?? 0}円</strong></div>
                        <div className="row"><span className="font-bold">月額合計</span> <span className="highlight">{result?.totalMonthlyCost?.toLocaleString() ?? 0}円</span></div>
                    </div>
                </div>
            </div>

            <h2>総支払額予測</h2>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-6">
                <div className="flex justify-around text-center">
                    <div>
                        <div className="text-sm text-gray-500">総支払額</div>
                        <div className="text-xl font-bold">{result.totalPayment.toLocaleString()}円</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500">うち利息分</div>
                        <div className="text-xl font-bold">{result.totalInterest.toLocaleString()}円</div>
                    </div>
                </div>
            </div>

            <h2>返済推移グラフ (簡易版)</h2>
            <div className="h-64 border border-gray-300 rounded p-4 mb-4">
                {/* RechartsはSVGなので印刷時に表示されるはずだが、色などはprint cssの影響を受ける場合がある */}
                {/* 簡易的にSVGを描画 */}
                <div style={{ width: '100%', height: '250px' }}>
                    <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%', border: '1px dashed #ccc' }}>
                        {/* 簡易的なダミーグラフ、またはここにRechartsを入れることも可能だが、
                            印刷用コンポーネントの中でRechartsをレンダリングするのはリソース的に重い場合があるため
                            今回はテキストで代用、または実際の導入を試みる */}
                        <text x="50%" y="50%" textAnchor="middle" fill="#999">
                            (画面上のグラフをご参照ください)
                        </text>
                    </svg>
                </div>
            </div>

            {/* 教育費メモがあれば表示 */}
            {educationPeriods.length > 0 && (
                <div>
                    <h2>教育費のピーク時期</h2>
                    <ul className="list-disc pl-5">
                        {educationPeriods.map((p, i) => (
                            <li key={i}>{p.name}: {p.startMonth / 12 | 0}年目〜 ({values.startAge + (p.startMonth / 12 | 0)}歳〜)</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="footer">
                本シミュレーション結果は概算です。実際の契約内容は金融機関にご確認ください。<br />
                Mortgage Simulator
            </div>
        </div>
    );
});

PrintReport.displayName = 'PrintReport';
export default PrintReport;
