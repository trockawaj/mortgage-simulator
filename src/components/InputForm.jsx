import React from 'react';
import { Calculator, Percent, Calendar } from 'lucide-react';

const InputGroup = ({ label, icon: Icon, value, onChange, min, max, step, unit, presets }) => {
    return (
        <div className="mb-6 group">
            <div className="flex justify-between items-end mb-2">
                <label className="flex items-center text-gray-700 font-bold">
                    <div className="bg-indigo-100 p-1.5 rounded-lg mr-2 group-focus-within:bg-indigo-500 transition-colors">
                        <Icon size={18} className="text-indigo-600 group-focus-within:text-white transition-colors" />
                    </div>
                    {label}
                </label>
                <div className="flex items-baseline">
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => onChange(Number(e?.target?.value ?? 0))}
                        className="bg-transparent text-right text-xl font-bold text-gray-800 outline-none w-24 border-b-2 border-gray-200 focus:border-indigo-500 transition-colors"
                        min={min}
                        max={max}
                        step={step}
                    />
                    <span className="ml-1 text-sm text-gray-500">{unit}</span>
                </div>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e?.target?.value ?? 0))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
            />

            {presets && (
                <div className="flex gap-2 mt-2 flex-wrap">
                    {presets.map((preset) => (
                        <button
                            key={preset}
                            onClick={() => onChange(preset)}
                            className="px-2 py-1 text-xs rounded-md bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 text-gray-600 hover:text-indigo-600 transition-all"
                        >
                            {preset}{unit}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const InputForm = ({ values, onChange }) => {
    const handleChange = (key, value) => {
        onChange({ ...values, [key]: value });
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-amber-100/50 border border-white">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-amber-100 pb-3 flex items-center">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full mr-3"></span>
                シミュレーション条件
            </h2>

            <InputGroup
                label="借入金額"
                icon={Calculator}
                value={values.principal}
                onChange={(v) => handleChange('principal', v)}
                min={100}
                max={20000}
                step={10}
                unit="万円"
                presets={[3000, 4000, 5000]}
            />

            <InputGroup
                label="金利 (年利)"
                icon={Percent}
                value={values.rate}
                onChange={(v) => handleChange('rate', v)}
                min={0.1}
                max={15.0}
                step={0.01}
                unit="%"
                presets={[0.5, 1.2, 2.5]}
            />

            <InputGroup
                label="返済期間"
                icon={Calendar}
                value={values.years}
                onChange={(v) => handleChange('years', v)}
                min={1}
                max={50}
                step={1}
                unit="年"
                presets={[20, 30, 35]}
            />

            <InputGroup
                label="返済開始年齢"
                icon={Calendar} // 同じアイコンで良い
                value={values.startAge}
                onChange={(v) => handleChange('startAge', v)}
                min={18}
                max={80}
                step={1}
                unit="歳"
                presets={[25, 30, 35, 40]}
            />

            <div className="mt-8 border-t-2 border-dashed border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
                    <span className="bg-amber-100 p-1 rounded mr-2">💴</span>
                    月々の維持費 (ランニングコスト)
                </h3>

                <InputGroup
                    label="携帯・通信費"
                    icon={Calculator}
                    value={values.costMobile || 0}
                    onChange={(v) => handleChange('costMobile', v)}
                    min={0}
                    max={50000}
                    step={1000}
                    unit="円"
                    presets={[5000, 10000, 20000]}
                />
                <InputGroup
                    label="電気・ガス・水道"
                    icon={Calculator}
                    value={values.costUtility || 0}
                    onChange={(v) => handleChange('costUtility', v)}
                    min={0}
                    max={100000}
                    step={1000}
                    unit="円"
                    presets={[15000, 25000, 40000]}
                />
                <InputGroup
                    label="車の維持費 (ガソリン・保険等)"
                    icon={Calculator}
                    value={values.costCar || 0}
                    onChange={(v) => handleChange('costCar', v)}
                    min={0}
                    max={100000}
                    step={1000}
                    unit="円"
                    presets={[10000, 30000, 50000]}
                />
                <InputGroup
                    label="その他 (駐車場・管理費等)"
                    icon={Calculator}
                    value={values.costOther || 0}
                    onChange={(v) => handleChange('costOther', v)}
                    min={0}
                    max={200000}
                    step={1000}
                    unit="円"
                    presets={[10000, 20000, 30000]}
                />
            </div>
        </div>
    );
};

export default InputForm;
