import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 実際にはAPIエンドポイントへ送信する処理が入る
        setTimeout(() => setSubmitted(true), 800);
    };

    if (submitted) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
                <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700/50">
                    <div className="flex justify-center mb-6">
                        <div className="bg-emerald-500/20 p-4 rounded-full">
                            <CheckCircle size={48} className="text-emerald-400" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">お問い合わせありがとうございます</h2>
                    <p className="text-gray-400 mb-8">
                        担当者が内容を確認し、3営業日以内にご返信いたします。<br />
                        返信をお待ちの間に、下記の診断もぜひお試しください。
                    </p>

                    {/* 収益化エリア: サンクスページでのオファー */}
                    <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl p-6 border border-indigo-500/30 transform hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg group">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0 bg-white p-2 rounded-lg">
                                {/* 本来はここにアフィリエイトバナー画像 */}
                                <div className="w-24 h-24 bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold text-xs text-center rounded">
                                    FP無料相談<br />バナー
                                </div>
                            </div>
                            <div className="text-left flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded">PR</span>
                                    <span className="text-indigo-300 text-sm font-bold">住宅ローンの見直しで月々2万円安くなる？</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                                    ファイナンシャルプランナーによる<br />
                                    <span className="text-yellow-400">「住宅ローン無料診断」</span>実施中！
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    あなたの家計状況に合わせ、最適な借り換えプランや繰り上げ返済のタイミングをプロが無料でアドバイスします。
                                </p>
                                <button className="mt-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg">
                                    無料で診断を受ける &rarr;
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-sm text-gray-500">
                        <a href="/" className="hover:text-white underline">トップページに戻る</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
                    お問い合わせ
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">お名前</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="山田 太郎"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">メールアドレス</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">お問い合わせ種類</label>
                        <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors">
                            <option>機能に関するご質問</option>
                            <option>不具合のご報告</option>
                            <option>広告掲載について</option>
                            <option>その他</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">内容</label>
                        <textarea
                            rows="5"
                            required
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="お問い合わせ内容をご記入ください"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-indigo-500/30"
                    >
                        <Send size={18} className="mr-2" />
                        送信する
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
