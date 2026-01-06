import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 広告用のプレースホルダーコンポーネント
 * 実際の広告コードを入れるまではこのデザインを表示する
 * @param {string} className - 追加のクラス名
 * @param {string} slot - 広告スロットIDあるいはタイプ
 * @param {string} format - 'horizontal' | 'vertical' | 'rectangle'
 */
const AdPlaceholder = ({ className, slot = 'ad-slot', format = 'horizontal' }) => {
    return (
        <div
            className={twMerge(
                'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center p-4 overflow-hidden',
                format === 'horizontal' && 'w-full h-[100px] my-4',
                format === 'vertical' && 'w-[300px] h-[600px] mx-auto',
                format === 'rectangle' && 'w-full max-w-[336px] h-[280px] mx-auto',
                className
            )}
        >
            <div className="text-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">
                    Sponsored
                </span>
                <div className="text-gray-600 font-mono text-sm opacity-50">
                    Ad Space ({format})
                </div>
            </div>
            {/* 
        実際の運用時はここに Google AdSense などのタグを挿入する
        例: <ins className="adsbygoogle" ... />
      */}
        </div>
    );
};

export default AdPlaceholder;
