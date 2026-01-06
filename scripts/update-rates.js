/**
 * 住宅ローン金利自動更新スクリプト
 * 
 * 実際にはpuppeteerやaxiosを用いて金融機関のサイトからスクレイピングを行いますが、
 * ここではデモとして「ランダムな変動金利」を生成してファイルを更新するロジックを実装します。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 更新対象のファイルパス (MortgageCalculator.jsx)
// 注: 本来は設定値を別ファイル(config.jsonなど)に切り出してそれを更新するのが安全ですが、
// 今回はReactコンポーネント内の初期値を正規表現で書き換える強引な手法をとります。
const targetFile = path.join(__dirname, '../src/components/MortgageCalculator.jsx');

// 最新金利を取得する関数 (モック)
async function fetchLatestRate() {
    console.log('Fetching latest mortgage rates...');
    // 0.3% 〜 0.6% の間でランダム生成
    const rate = (Math.random() * 0.3 + 0.3).toFixed(3);
    console.log(`Latest Rate found: ${rate}%`);
    return rate;
}

async function updateFile(rate) {
    const content = fs.readFileSync(targetFile, 'utf-8');

    // 現在の初期値: rate: 1.2, などを探す
    // 安全のため、 "rate: 1.2," のようなパターンを置換
    // 正規表現で "rate:数字," を探す
    const regex = /(rate:\s*)(\d+(\.\d+)?)(,)/;

    if (!regex.test(content)) {
        console.error('Target pattern not found in file.');
        process.exit(1);
    }

    const newContent = content.replace(regex, `$1${rate}$4`);

    if (content === newContent) {
        console.log('Rate is unchanged. No updates needed.');
        return false;
    }

    fs.writeFileSync(targetFile, newContent, 'utf-8');
    console.log(`Updated ${targetFile} with new rate: ${rate}%`);
    return true;
}

async function main() {
    try {
        const rate = await fetchLatestRate();
        const updated = await updateFile(rate);

        if (updated) {
            // GitHub Actionsのoutputパラメータに値をセット (後続のステップでPR作成に使用)
            // GITHUB_OUTPUT環境ファイルへの書き込み
            if (process.env.GITHUB_OUTPUT) {
                fs.appendFileSync(process.env.GITHUB_OUTPUT, `updated=true\n`);
                fs.appendFileSync(process.env.GITHUB_OUTPUT, `rate=${rate}\n`);
            }
        } else {
            if (process.env.GITHUB_OUTPUT) {
                fs.appendFileSync(process.env.GITHUB_OUTPUT, `updated=false\n`);
            }
        }
    } catch (error) {
        console.error('Failed to update rates:', error);
        process.exit(1);
    }
}

main();
