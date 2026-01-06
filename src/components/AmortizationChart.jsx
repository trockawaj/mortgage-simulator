import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 border border-gray-700 p-3 rounded shadow-lg text-sm">
                <p className="text-gray-300 mb-1">{label}ヶ月目 ({Math.floor(label / 12)}年{label % 12}ヶ月)</p>
                <p className="text-indigo-400">
                    ローン残高: {payload[0].value.toLocaleString()} 円
                </p>
                <p className="text-emerald-400">
                    利息累計: {payload[1].value.toLocaleString()} 円
                </p>
                <p className="text-blue-400">
                    元金返済累計: {payload[2].value.toLocaleString()} 円
                </p>
            </div>
        );
    }
    return null;
};

const AmortizationChart = ({ data }) => {
    if (!data || data.length === 0) return null;

    // データ点数が多すぎると描画が重くなるので間引く（例: 12ヶ月ごと）
    // ただし、正確な推移を見たい場合は全データが良いが、UIパフォーマンスを優先して5年未満なら全データ、それ以上なら間引くなどの制御も可。
    // ここでは単純にデータを渡す。Rechartsはそれなりに高速だが、35年*12=420点は許容範囲。

    return (
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700/50 h-[400px]">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                返済推移グラフ
            </h2>
            <ResponsiveContainer width="100%" height="85%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis
                        dataKey="month"
                        stroke="#9ca3af"
                        tickFormatter={(val) => (val % 12 === 0 ? `${val / 12}年` : '')}
                        minTickGap={30}
                    />
                    <YAxis
                        stroke="#9ca3af"
                        tickFormatter={(val) => `${val / 10000}万`}
                        width={60}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />

                    <Area
                        type="monotone"
                        dataKey="balance"
                        stackId="1"
                        stroke="#6366f1"
                        fill="url(#colorBalance)"
                        name="ローン残高"
                    />
                    {/* 利息累計と元金返済累計を表示する積み上げ */}
                    {/* 残高推移とはスケールが違う（残高は減る、累計は増える）ので、本来は別軸か別グラフが良いが、
              ここでは「ローン残高」をメインに表示し、オプションで切り替えなどができるとベスト。
              今回はシンプルに「ローン残高」を表示する。利息の割合などは、別のグラフ（円グラフ等）が良いかもしれない。
              しかしタスクが複雑になるので、まずは残高推移のみにする。
           */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AmortizationChart;
