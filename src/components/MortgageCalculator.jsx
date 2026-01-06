import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import ResultsDisplay from './ResultsDisplay';
import AmortizationChart from './AmortizationChart';
import AdPlaceholder from './AdPlaceholder';
import EducationCost from './EducationCost';
import { calculateMonthlyPayment, calculateTotalPayment, generateAmortizationSchedule } from '../utils/calculations';
import { Save, Trash2, ArrowRight } from 'lucide-react';

const MortgageCalculator = () => {
    const [values, setValues] = useState({
        principal: 3000,
        rate: 1.2,
        years: 35,
        costMobile: 10000,
        costUtility: 25000,
        costCar: 10000,
        costOther: 0,
    });

    // 子供の人数state
    const [childCount, setChildCount] = useState(1);

    const [result, setResult] = useState(null);
    const [schedule, setSchedule] = useState([]);
    const [savedPlans, setSavedPlans] = useState([]);

    useEffect(() => {
        const monthlyPayment = calculateMonthlyPayment(values.principal, values.rate, values.years);
        const sched = generateAmortizationSchedule(values.principal, values.rate, values.years);
        const { total, interest } = calculateTotalPayment(sched);

        const monthlyMaintenanceCost = (values.costMobile || 0) + (values.costUtility || 0) + (values.costCar || 0) + (values.costOther || 0);
        const totalMonthlyCost = monthlyPayment + monthlyMaintenanceCost;

        setResult({
            monthlyPayment,
            totalPayment: total,
            totalInterest: interest,
            monthlyMaintenanceCost,
            totalMonthlyCost,
        });
        setSchedule(sched);
    }, [values]);

    const savePlan = () => {
        const newPlan = {
            id: Date.now(),
            name: `Plan ${savedPlans.length + 1}`,
            values: { ...values },
            result: { ...result }
        };
        setSavedPlans([...savedPlans, newPlan]);
    };

    const removePlan = (id) => {
        setSavedPlans(savedPlans.filter(p => p.id !== id));
    };

    const loadPlan = (plan) => {
        setValues(plan.values);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Calculation Area */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InputForm values={values} onChange={setValues} />
                        <div className="flex flex-col gap-6">
                            <ResultsDisplay results={result} />

                            {/* 教育費シミュレーションをここに配置 (SPレイアウト等考慮するとResultの下が良い) */}
                            <EducationCost childCount={childCount} onChange={setChildCount} />

                            <div className="flex justify-end">
                                <button
                                    onClick={savePlan}
                                    className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium shadow-lg hover:shadow-indigo-500/30"
                                >
                                    <Save size={18} className="mr-2" />
                                    現在のプランを保存・比較
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* グラフの背景色などもライトテーマ用に要調整だが、AmortizationChart内部で対応する */}
                    <AmortizationChart data={schedule} />

                    <AdPlaceholder format="horizontal" />
                </div>

                {/* Sidebar: Comparison & Ads */}
                <div className="lg:col-span-4 space-y-8">
                    <AdPlaceholder format="rectangle" />

                    {/* Saved Plans / Comparison */}
                    {savedPlans.length > 0 && (
                        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-amber-100/50 border border-white">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                保存したプラン
                                <span className="ml-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">
                                    {savedPlans.length}
                                </span>
                            </h3>
                            <div className="space-y-4">
                                {savedPlans.map((plan) => (
                                    <div key={plan.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-indigo-600">{plan.name}</h4>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => loadPlan(plan)}
                                                    className="p-1 hover:bg-gray-200 rounded text-cyan-600"
                                                    title="このプランを読み込む"
                                                >
                                                    <ArrowRight size={16} />
                                                </button>
                                                <button
                                                    onClick={() => removePlan(plan.id)}
                                                    className="p-1 hover:bg-gray-200 rounded text-red-400"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <div className="flex justify-between">
                                                <span>借入: {plan.values.principal}万円</span>
                                                <span>期間: {plan.values.years}年</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>金利: {plan.values.rate}%</span>
                                            </div>
                                            <div className="border-t border-gray-200 my-2 pt-2 space-y-1">
                                                <div className="flex justify-between text-gray-500">
                                                    <span>ローンのみ:</span>
                                                    <span>{plan.result?.monthlyPayment.toLocaleString()} 円</span>
                                                </div>
                                                <div className="flex justify-between font-bold text-indigo-600">
                                                    <span>合計月額:</span>
                                                    <span>{plan.result?.totalMonthlyCost?.toLocaleString()} 円</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="bg-white rounded-2xl p-6 shadow-xl shadow-amber-100/50 border border-white">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="bg-orange-100 p-1 rounded mr-2">📚</span>
                            住宅ローン知識
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-indigo-600 cursor-pointer transition-colors p-1 hover:bg-gray-50 rounded">• 元利均等返済とは？</li>
                            <li className="hover:text-indigo-600 cursor-pointer transition-colors p-1 hover:bg-gray-50 rounded">• 金利タイプの選び方</li>
                            <li className="hover:text-indigo-600 cursor-pointer transition-colors p-1 hover:bg-gray-50 rounded">• 繰り上げ返済の効果</li>
                        </ul>
                    </div>

                    <AdPlaceholder format="vertical" className="hidden lg:flex" />
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
