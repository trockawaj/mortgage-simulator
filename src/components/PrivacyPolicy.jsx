import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-amber-100/50 border border-white">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-amber-100 pb-4">
                    プライバシーポリシー
                </h1>

                <div className="prose prose-indigo max-w-none text-gray-600 text-sm leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">1. 個人情報の利用目的</h2>
                        <p>
                            当サイトでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
                            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">2. 広告について</h2>
                        <p>
                            当サイトでは、第三者配信の広告サービス（Google AdSense、A8.netなど）を利用しています。
                            このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報『Cookie』(氏名、住所、メールアドレス、電話番号は含まれません) を使用することがあります。
                        </p>
                        <p>
                            またGoogle AdSenseに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
                            <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                                Googleのポリシーと規約
                            </a>
                            をご覧ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">3. アクセス解析ツールについて</h2>
                        <p>
                            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">4. 免責事項</h2>
                        <p>
                            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
                            また当サイトのコンテンツ・情報について、できる限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。
                            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                            特に住宅ローンのシミュレーション結果はあくまで概算であり、実際の契約内容は金融機関の審査や契約条件により異なります。
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
