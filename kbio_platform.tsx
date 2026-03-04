import React, { useState } from 'react';
import { Search, Globe, TrendingUp, Package, Zap, ChevronRight, Menu, X, Database, Target, Truck, Languages } from 'lucide-react';

const KBioPlatform = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const getText = (lang) => {
    const texts = {
      en: {
        nav: { home: 'Home', search: 'Search', trends: 'Trends', export: 'Export' },
        title1: 'From Korea to the World',
        title2: 'Bio Intelligence, Global Scale',
        searchPlaceholder: 'Search by ingredient, component, or efficacy...',
        startBtn: 'Get Started',
        ingredients: 'Ingredients',
        countries: 'Countries',
        deals: 'Deals',
        volume: 'Trading Volume',
        dbTitle: 'Ingredient Database'
      },
      ko: {
        nav: { home: '홈', search: '검색', trends: '트렌드', export: '수출' },
        title1: '한국에서 세계로',
        title2: '바이오 인텔리전스, 글로벌 스케일',
        searchPlaceholder: '원료명, 성분, 효능으로 검색하세요...',
        startBtn: '시작하기',
        ingredients: '등록 원료',
        countries: '파트너 국가',
        deals: '성사 거래',
        volume: '거래액',
        dbTitle: '원료 데이터베이스'
      },
      ja: {
        nav: { home: 'ホーム', search: '検索', trends: 'トレンド', export: '輸出' },
        title1: '韓国から世界へ',
        title2: 'バイオインテリジェンス、グローバルスケール',
        searchPlaceholder: '原料名、成分、効能で検索...',
        startBtn: 'スタート',
        ingredients: '登録原料',
        countries: 'パートナー国',
        deals: '成約数',
        volume: '取引額',
        dbTitle: '原料データベース'
      }
    };
    return texts[lang];
  };

  const t = getText(language);

  const languageOptions = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg shadow-emerald-500/50">
                <Zap className="w-6 h-6 text-white -rotate-12" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  K-Bio Global
                </h1>
                <p className="text-xs text-slate-400">AI Sourcing Platform</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-3 py-2 text-sm font-medium transition-all ${
                    activeTab === key
                      ? 'text-emerald-400 border-b-2 border-emerald-400'
                      : 'text-slate-300 hover:text-emerald-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-all"
                >
                  <Languages className="w-4 h-4" />
                  <span className="text-sm">{languageOptions.find(l => l.code === language).flag}</span>
                </button>
                
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 rounded-2xl bg-slate-800/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-all ${
                          language === lang.code
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all">
                {t.startBtn}
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-300"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <nav className="px-4 py-4 space-y-2">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === key
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-slate-300'
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                      language === lang.code
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'text-slate-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          <section className="text-center py-12">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              🚀 Bio + IT + Global Innovation
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              {t.title1}<br />
              <span className="text-3xl md:text-5xl">{t.title2}</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered platform connecting premium Korean bio-ingredients<br />
              with global manufacturers in 89 countries.<br />
              <span className="text-emerald-400 font-semibold">Real-time matching. Instant export. Infinite possibilities.</span>
            </p>
            
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
                  <div className="flex items-center">
                    <Search className="ml-4 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.searchPlaceholder}
                      className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-400 focus:outline-none"
                    />
                    <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    1,542
                  </div>
                  <div className="text-sm text-slate-400">{t.ingredients}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    89
                  </div>
                  <div className="text-sm text-slate-400">{t.countries}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    3,247
                  </div>
                  <div className="text-sm text-slate-400">{t.deals}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {language === 'en' ? '$142M' : language === 'ko' ? '142억원' : '142億円'}
                  </div>
                  <div className="text-sm text-slate-400">{t.volume}</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Core Platform Features
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all hover:-translate-y-2">
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-bold mb-4">
                    Phase 1
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/50">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    Smart Database
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    1,500+ Korean bio-ingredient database
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all hover:-translate-y-2">
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-bold mb-4">
                    Phase 2
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/50">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    AI Matching
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Global trend-based auto matching
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all hover:-translate-y-2">
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-bold mb-4">
                    Phase 3
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/50">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    Trade One-Stop
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Integrated export-import logistics
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Go Global Now
              </h3>
              <p className="text-xl mb-8 text-slate-300">
                Leverage K-Beauty & K-Food trends for instant export success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-white">K-Bio Global</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI-powered bio-ingredient<br />global sourcing platform
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-white">Services</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Ingredient Database</li>
                <li>AI Matching System</li>
                <li>Trade Support</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-white">Company</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>About Us</li>
                <li>Partnership</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-white">Contact</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Customer Support</li>
                <li>Email Inquiry</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2026 K-Bio Global Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KBioPlatform;