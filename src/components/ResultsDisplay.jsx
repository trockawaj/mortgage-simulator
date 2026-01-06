import React from 'react';

const ResultCard = ({ label, value, subValue, highlight = false }) => (
    <div className={`p-4 rounded-xl transition-all duration-300 ${highlight ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 shadow-md transform hover:-translate-y-1' : 'bg-gray-50 border border-gray-200 shadow-sm'}`}>
        <div className="text-gray-500 text-sm mb-1 font-medium">{label}</div>
        <div className={`text-2xl font-bold ${highlight ? 'text-indigo-700' : 'text-gray-800'}`}>
            {value.toLocaleString()} <span className="text-sm font-normal text-gray-500">円</span>
        </div>
        {subValue && (
            <div className={`text-xs mt-1 ${highlight ? 'text-indigo-500' : 'text-gray-400'}`}>{subValue}</div>
        )}
    </div>
);

const ResultsDisplay = ({ results }) => {
    if (!results) return null;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-amber-100/50 border border-white h-full flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-amber-100 pb-3 flex items-center">
                <span className="w-1.5 h-6 bg-amber-400 rounded-full mr-3"></span>
                計算結果
            </h2>

            <div className="space-y-4">
                <ResultCard
                    label="月々のローン返済額"
                    value={results.monthlyPayment}
                    highlight={true}
                    subValue={`年間: ${(results.monthlyPayment * 12).toLocaleString()} 円`}
                />

                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 shadow-inner">
                    <div className="text-amber-800 text-sm mb-1 font-bold">住居費＋維持費 合計 (月額)</div>
                    <div className="text-3xl font-bold text-gray-800">
                        {results.totalMonthlyCost?.toLocaleString()} <span className="text-sm font-normal text-gray-600">円</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
                        うち維持費: {results.monthlyMaintenanceCost?.toLocaleString()} 円
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ResultCard
                        label="総返済額"
                        value={results.totalPayment}
                    />
                    <ResultCard
                        label="うち利息総額"
                        value={results.totalInterest}
                    />
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-500 text-xs leading-relaxed">
                    ※ このシミュレーション結果は概算です。実際の契約内容や端数処理により異なる場合があります。
                    ボーナス払いは含まれていません。
                </p>
            </div>
        </div>
    );
};

export default ResultsDisplay;
