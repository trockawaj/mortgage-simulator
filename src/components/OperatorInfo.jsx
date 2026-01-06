import React, { useEffect } from 'react';

const OperatorInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-amber-100/50 border border-white">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-amber-100 pb-4">
                    運営者情報
                </h1>

                <div className="prose max-w-none text-gray-700">
                    <p>
                        当サイト「Mortgage Simulator（住宅ローンシミュレーター）」をご利用いただきありがとうございます。<br />
                        本ツールは、これからマイホームを購入される方が、安全で無理のない資金計画を立てられるよう支援することを目的として開設されました。
                    </p>

                    <table className="min-w-full mt-8 mb-8 border border-gray-200">
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500 w-1/3">サイト名</th>
                                <td className="px-6 py-4 text-sm text-gray-900">Mortgage Simulator</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500">運営者</th>
                                <td className="px-6 py-4 text-sm text-gray-900">Mortgage Simulator 運営事務局</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500">所在地</th>
                                <td className="px-6 py-4 text-sm text-gray-900">東京都内</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500">連絡先</th>
                                <td className="px-6 py-4 text-sm text-gray-900">お問い合わせフォームよりご連絡ください</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500">事業内容</th>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    ・Webサービスの企画・開発・運営<br />
                                    ・金融リテラシー向上に関する情報発信
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="text-sm text-gray-500">
                        ※ 当サイトは個人運営によるツールサイトです。シミュレーション結果の正確性には万全を期しておりますが、
                        実際の融資条件や審査結果を保証するものではありません。
                        最終的な判断は各金融機関にご相談の上、ご自身の責任において行ってください。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OperatorInfo;
