import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MortgageCalculator from './components/MortgageCalculator';
import ArticleList from './components/ArticleList';
import ContactForm from './components/ContactForm';
import { Home } from 'lucide-react';

import ArticleDetail from './components/ArticleDetail';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Home className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:text-indigo-600 transition-all">
              住宅ローン返済シミュレーター
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-indigo-600 transition-colors">ホーム</Link>
            <Link to="/articles" className="hover:text-indigo-600 transition-colors">記事一覧</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-amber-50 min-h-[calc(100vh-64px-300px)]">
        <Routes>
          <Route path="/" element={<MortgageCalculator />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200/50 py-12 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-800 font-bold mb-4">サイトについて</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                住宅ローンの返済計画を簡単にシミュレーションできる無料ツールです。
                <br />
                将来のライフプランニングにお役立てください。
              </p>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-4">リンク</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/articles" className="hover:text-indigo-600 transition-colors">記事一覧</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">お問い合わせ</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">プライバシーポリシー</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-4">免責事項</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                本サイトの計算結果は概算であり、実際の返済額等を保証するものではありません。
                詳細な条件は金融機関にご確認ください。
              </p>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm border-t border-gray-800 pt-8">
            &copy; {new Date().getFullYear()} Mortgage Simulator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
