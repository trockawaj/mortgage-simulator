import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles as initialArticles } from '../data/articles';

const ArticleList = () => {
    const [articles, setArticles] = useState(initialArticles);

    // 疑似自動更新ロジック:
    // 初期データの日付のみをクライアントサイドで「ライブ感」が出るように書き換える
    useEffect(() => {
        const liveArticles = initialArticles.map((article, index) => {
            let timeLabel = article.updateTime;
            // 少しランダム性を加える（リロードのたびに少し変わる）
            if (index === 0) {
                timeLabel = `${Math.floor(Math.random() * 30) + 2}分前`;
            }
            return { ...article, updateTime: timeLabel };
        });
        setArticles(liveArticles);
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                        <TrendingUp className="text-indigo-600" />
                    </div>
                    新着記事一覧
                </h2>
                <span className="text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 animate-pulse flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    リアルタイム更新中
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    {articles.map((article, index) => (
                        <React.Fragment key={article.id}>
                            <Link to={`/articles/${article.id}`} className="block group">
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all">
                                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                                        <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold border border-amber-100">{article.category}</span>
                                        <span className="flex items-center"><Clock size={12} className="mr-1" /> {article.updateTime}</span>
                                        <span className="text-gray-400">{article.views.toLocaleString()} views</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors leading-snug mb-2">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center text-indigo-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                        読む <ArrowRight size={14} className="ml-1" />
                                    </div>
                                </div>
                            </Link>

                            {/* 3記事ごとに「インフィード広告」を挟む */}
                            {(index + 1) % 3 === 0 && (
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-2 right-2 bg-gray-200 text-[10px] px-1 py-0.5 rounded text-gray-500">SPONSORED</div>
                                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                        <div className="w-full sm:w-1/3 h-24 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-lg flex items-center justify-center text-indigo-300">
                                            <span className="text-xs font-bold">【広告画像】</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-800 mb-1">
                                                【PR】住宅ローンの一括審査ならココ！
                                            </p>
                                            <p className="text-xs text-gray-500 mb-3">
                                                数十社の銀行から最安金利を一括比較。借り換えで300万円ダウンの実績も多数。
                                            </p>
                                            <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded transition-colors block w-full text-center font-bold shadow-sm">
                                                詳細を見る
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Sidebar for Articles */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-xl shadow-amber-100/50 border border-white">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-2">
                            <DollarSign className="mr-2 text-yellow-500 fill-yellow-500" size={20} />
                            人気ランキング
                        </h3>
                        <ul className="space-y-4">
                            {articles.slice().sort((a, b) => b.views - a.views).slice(0, 5).map((article, index) => (
                                <li key={article.id} className="flex gap-3 items-start group cursor-pointer">
                                    <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded font-bold text-xs ${index < 3 ? 'bg-yellow-400 text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                                        {index + 1}
                                    </span>
                                    <Link to={`/articles/${article.id}`} className="text-sm text-gray-600 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                                        {article.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 border border-gray-200 h-[300px] flex items-center justify-center text-gray-400 text-sm font-bold">
                        広告エリア (300x250)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleList;
