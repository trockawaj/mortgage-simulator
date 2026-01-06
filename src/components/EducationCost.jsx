import React, { useState, useEffect } from 'react';
import { Baby, GraduationCap, School } from 'lucide-react';

const EducationCost = ({ childCount, onChange }) => {
    // 文部科学省「子供の学習費調査」などの統計に基づく概算値 (万円)
    // 全て公立の場合と、全て私立の場合で大きく異なるが、ここでは混合の平均的なモデルケースを使用
    // 出産〜高校卒業(18歳): 約1000万円〜
    // 出産〜大学卒業(22歳): 約1300万円〜2000万円

    // シミュレーション用単価 (万円)
    const COST_PER_CHILD_HIGH_SCHOOL = 1200; // 高校卒業まで
    const COST_PER_CHILD_UNIVERSITY = 2000;  // 大学卒業まで（私立理系なども考慮した少し高めの平均）

    // 月換算用の期間 (年)
    const YEARS_HIGH_SCHOOL = 18;
    const YEARS_UNIVERSITY = 22;

    const totalCostHighSchool = childCount * COST_PER_CHILD_HIGH_SCHOOL;
    const totalCostUniversity = childCount * COST_PER_CHILD_UNIVERSITY;

    const monthlyCostHighSchool = Math.round((totalCostHighSchool * 10000) / (YEARS_HIGH_SCHOOL * 12));
    const monthlyCostUniversity = Math.round((totalCostUniversity * 10000) / (YEARS_UNIVERSITY * 12));

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-amber-100/50 border border-white mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-pink-100 p-1.5 rounded-lg mr-2 text-pink-500">
                    <Baby size={20} />
                </span>
                子供の教育費シミュレーション
            </h3>

            <div className="mb-6 flex items-center justify-between bg-amber-50 p-4 rounded-xl">
                <label className="font-bold text-gray-700">子供の人数</label>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onChange(Math.max(0, childCount - 1))}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 text-xl font-bold text-gray-500 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
                    >
                        -
                    </button>
                    <span className="text-2xl font-bold text-indigo-600 w-8 text-center">{childCount}</span>
                    <button
                        onClick={() => onChange(Math.min(5, childCount + 1))}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 text-xl font-bold text-gray-500 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
                    >
                        +
                    </button>
                    <span className="text-gray-500 text-sm font-bold">人</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* パターンA: 高校卒業まで */}
                <div className="border border-gray-200 rounded-xl p-4 relative overflow-hidden group hover:border-pink-300 transition-colors">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <School size={80} className="text-pink-500" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-sm font-bold text-gray-500 mb-2 flex items-center">
                            <School size={16} className="mr-1" />
                            高校卒業まで (×{childCount}人)
                        </h4>
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                            {totalCostHighSchool.toLocaleString()} <span className="text-sm font-normal">万円</span>
                        </div>
                        <div className="text-xs text-pink-500 font-bold bg-pink-50 inline-block px-2 py-1 rounded">
                            月あたり約 {monthlyCostHighSchool.toLocaleString()} 円
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                            ※ 出産から18歳までの総費用目安。公立・私立の区分なしの平均値。
                        </p>
                    </div>
                </div>

                {/* パターンB: 大学卒業まで */}
                <div className="border border-gray-200 rounded-xl p-4 relative overflow-hidden group hover:border-indigo-300 transition-colors bg-gradient-to-br from-white to-gray-50">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GraduationCap size={80} className="text-indigo-500" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-sm font-bold text-indigo-900/60 mb-2 flex items-center">
                            <GraduationCap size={16} className="mr-1" />
                            大学卒業まで (×{childCount}人)
                        </h4>
                        <div className="text-2xl font-bold text-indigo-700 mb-1">
                            {totalCostUniversity.toLocaleString()} <span className="text-sm font-normal">万円</span>
                        </div>
                        <div className="text-xs text-indigo-600 font-bold bg-indigo-50 inline-block px-2 py-1 rounded">
                            月あたり約 {monthlyCostUniversity.toLocaleString()} 円
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                            ※ 出産から22歳までの総費用目安。私立大学文系・理系平均を含む推計値。
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-3 bg-indigo-50 rounded-lg flex items-start">
                <span className="text-lg mr-2">💡</span>
                <p className="text-xs text-indigo-800 leading-relaxed">
                    <strong>アドバイス:</strong> 住宅ローンだけでなく、将来の教育資金の積み立ても考慮した返済計画が重要です。
                    特に大学進学時期(18歳〜)とローンの返済ピークが重ならないよう注意しましょう。
                </p>
            </div>
        </div>
    );
};

export default EducationCost;
