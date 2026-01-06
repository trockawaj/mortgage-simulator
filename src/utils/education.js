/**
 * 教育費のかかる期間を計算する
 * 
 * 前提:
 * - 子供はローン開始時に0歳と仮定（簡易シミュレーションのため）
 * - 高校: 16歳〜18歳 (3年間)
 * - 大学: 19歳〜22歳 (4年間)
 * 
 * @param {number} childCount - 子供の人数
 * @param {number} startAge - ローン開始時の親の年齢
 * @param {number} loanYears - ローン返済期間 (年)
 * @returns {Array} 教育費期間オブジェクトの配列 [{ name: string, startMonth: number, endMonth: number, type: 'high_school' | 'university' }]
 */
export const calculateEducationPeriods = (childCount, startAge, loanYears) => {
    if (!childCount || childCount <= 0) return [];

    // ローン期間全体 (月数)
    const maxMonth = loanYears * 12;

    // 高校開始: 16年後 (16 * 12 ヶ月後)
    // 高校終了: 19年後
    const hsStartMonth = 16 * 12;
    const hsEndMonth = 19 * 12;

    // 大学開始: 19年後
    // 大学終了: 23年後
    const uniStartMonth = 19 * 12;
    const uniEndMonth = 23 * 12;

    const periods = [];

    // 高校期間 (ローン期間内であれば追加)
    if (hsStartMonth < maxMonth) {
        periods.push({
            name: '高校',
            startMonth: hsStartMonth,
            endMonth: Math.min(hsEndMonth, maxMonth),
            type: 'high_school',
            label: `高校 (${startAge + 16}歳~)` // 親の年齢
        });
    }

    // 大学期間
    if (uniStartMonth < maxMonth) {
        periods.push({
            name: '大学',
            startMonth: uniStartMonth,
            endMonth: Math.min(uniEndMonth, maxMonth),
            type: 'university',
            label: `大学 (${startAge + 19}歳~)`
        });
    }

    return periods;
};
