import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-amber-100/50 border border-white">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-amber-100 pb-4">
                    お問い合わせ
                </h1>

                <p className="text-gray-600 mb-8">
                    当サイトに関するご質問、ご要望、不具合の報告は、以下のフォームよりお送りください。<br />
                    通常、3営業日以内に返信いたします。
                </p>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前 (必須)</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="山田 太郎"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス (必須)</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">件名 (必須)</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="機能追加の要望について"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容 (必須)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="ここに内容をご記入ください"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition-colors"
                        >
                            送信する
                        </button>
                    </div>
                </form>

                <p className="text-xs text-gray-400 mt-6">
                    ※ 本フォームはデモです。実際に送信は行われません。
                </p>
            </div>
        </div>
    );
};

export default Contact;
