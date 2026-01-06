import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, Share2 } from 'lucide-react';
import { articles } from '../data/articles';
import AdPlaceholder from './AdPlaceholder';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));

    // 記事閲覧時にトップへスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-amber-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">記事が見つかりませんでした</h2>
                    <Link to="/articles" className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center justify-center">
                        <ArrowLeft className="mr-2" /> 記事一覧に戻る
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb / Back button */}
                <Link to="/articles" className="inline-flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition-colors font-medium">
                    <ArrowLeft size={18} className="mr-2" />
                    記事一覧に戻る
                </Link>

                <article className="bg-white rounded-2xl shadow-xl shadow-amber-100/50 border border-white overflow-hidden">
                    {/* Header */}
                    <div className="p-6 md:p-10 border-b border-gray-100">
                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500 mb-4">
                            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">{article.category}</span>
                            <span className="flex items-center"><Clock size={14} className="mr-1" /> {article.updateTime}</span>
                            <span className="flex items-center"><Eye size={14} className="mr-1" /> {article.views.toLocaleString()} views</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                            {article.title}
                        </h1>
                        <div className="flex gap-2">
                            <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-sm font-bold transition-colors">
                                <Share2 size={16} className="mr-2" /> シェアする
                            </button>
                        </div>
                    </div>

                    {/* In-article Ad (Top) */}
                    <div className="p-6 md:px-10 pb-0">
                        <AdPlaceholder format="horizontal" />
                    </div>

                    {/* Content */}
                    <div
                        className="p-6 md:p-10 prose prose-indigo max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* In-article Ad (Bottom) */}
                    <div className="p-6 md:p-10 pt-0">
                        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center">
                            <p className="font-bold text-indigo-900 mb-2">住宅ローンの見直しで数百万円お得に？</p>
                            <p className="text-sm text-indigo-700 mb-4">あなたにぴったりの金利プランを無料診断。</p>
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-indigo-500/30 hover:bg-indigo-500 transition-all transform hover:-translate-y-1">
                                今すぐ無料シミュレーションする
                            </button>
                            <div className="text-[10px] text-indigo-300 mt-2">Sponsored Link</div>
                        </div>
                    </div>

                </article>

                {/* Related Navigation */}
                <div className="mt-12 text-center">
                    <Link to="/" className="inline-block bg-white text-indigo-600 font-bold px-8 py-4 rounded-full shadow-lg border border-indigo-100 hover:shadow-xl transition-all">
                        シミュレーターを使ってみる
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
