import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceArea } from 'recharts';

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

const AmortizationChart = ({ data, educationPeriods = [], startAge = 35 }) => {
    if (!data || data.length === 0) return null;

    // データ点数が多すぎると描画が重くなるので間引く（例: 12ヶ月ごと）
    // ただし、正確な推移を見たい場合は全データが良いが、UIパフォーマンスを優先して5年未満なら全データ、それ以上なら間引くなどの制御も可。
    // ここでは単純にデータを渡す。Rechartsはそれなりに高速だが、35年*12=420点は許容範囲。

    return (
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700/50 h-[450px]">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 flex justify-between items-end">
                <span>返済推移グラフ</span>
                <span className="text-xs font-normal text-gray-400">
                    <span className="inline-block w-3 h-3 bg-pink-900/50 mr-1 border border-pink-500/30"></span>高校
                    <span className="inline-block w-3 h-3 bg-indigo-900/50 mr-1 ml-2 border border-indigo-500/30"></span>大学
                    期間目安
                </span>
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
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis
                        dataKey="month"
                        stroke="#9ca3af"
                        tickFormatter={(val) => {
                            if (val % 60 === 0 || val === 0) { // 5年ごと
                                const yearsPassed = val / 12;
                                return `${yearsPassed}年 (${startAge + yearsPassed}歳)`;
                            }
                            return '';
                        }}
                        minTickGap={30}
                        height={50}
                        tick={{ fontSize: 12 }}
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

                    {/* 教育費期間のハイライト */}
                    {educationPeriods.map((period, index) => (
                        <ReferenceArea
                            key={index}
                            x1={period.startMonth}
                            x2={period.endMonth}
                            fill={period.type === 'high_school' ? '#ec4899' : '#6366f1'}
                            fillOpacity={0.15}
                            label={{
                                value: period.label,
                                position: 'insideTop',
                                fill: period.type === 'high_school' ? '#fbcfe8' : '#c7d2fe', // light pink or light indigo
                                fontSize: 12
                            }}
                        />
                    ))}
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
