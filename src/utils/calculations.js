/**
 * 住宅ローンの計算ユーティリティ
 */

/**
 * 月々の返済額を計算する (元利均等返済)
 * @param {number} principal - 借入金額 (万円)
 * @param {number} annualRate - 年利 (%)
 * @param {number} years - 返済期間 (年)
 * @returns {number} 月々の返済額 (円)
 */
export const calculateMonthlyPayment = (principal, annualRate, years) => {
    // 元金 (円)
    const p = principal * 10000;
    // 月利
    const r = annualRate / 100 / 12;
    // 返済回数
    const n = years * 12;

    if (r === 0) {
        return Math.floor(p / n);
    }

    const numerator = p * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;

    return Math.floor(numerator / denominator);
};

/**
 * 償還予定表（グラフ用データ）を生成する
 * @param {number} principal - 借入金額 (万円)
 * @param {number} annualRate - 年利 (%)
 * @param {number} years - 返済期間 (年)
 * @returns {Array} 償還スケジュール
 */
export const generateAmortizationSchedule = (principal, annualRate, years) => {
    const p = principal * 10000;
    const r = annualRate / 100 / 12;
    const n = years * 12;
    const monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);

    let balance = p;
    const schedule = [];

    let accumulatedInterest = 0;
    let accumulatedPrincipal = 0;

    for (let i = 1; i <= n; i++) {
        // 利息部分
        let interestPayment = Math.floor(balance * r);
        // 元金部分
        let principalPayment = monthlyPayment - interestPayment;

        // 最終回の調整
        if (balance < principalPayment || i === n) {
            principalPayment = balance;
            interestPayment = monthlyPayment - principalPayment; // 簡易調整。厳密には最終返済額が変わるがシミュレーションとしては許容
        }

        balance -= principalPayment;
        accumulatedInterest += interestPayment;
        accumulatedPrincipal += principalPayment;

        // グラフのパフォーマンス考慮のため、1年ごと(12ヶ月ごと)のデータを間引くか、
        // あるいは全データを返して表示側で調整するか。
        // Rechartsなら35年*12=420点は問題ない。

        schedule.push({
            month: i,
            year: Math.ceil(i / 12),
            balance: Math.max(0, balance),
            interestPayment,
            principalPayment,
            totalPayment: interestPayment + principalPayment,
            accumulatedInterest,
            accumulatedPrincipal,
        });

        if (balance <= 0) break;
    }

    return schedule;
};

/**
 * 総返済額を計算する
 */
export const calculateTotalPayment = (schedule) => {
    if (!schedule || schedule.length === 0) return { total: 0, interest: 0 };
    const lastItem = schedule[schedule.length - 1];
    return {
        total: lastItem.accumulatedPrincipal + lastItem.accumulatedInterest,
        interest: lastItem.accumulatedInterest,
        principal: lastItem.accumulatedPrincipal
    };
};
