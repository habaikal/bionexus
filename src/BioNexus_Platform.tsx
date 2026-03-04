import React, { useState, useEffect } from 'react';
import { 
  Search, Globe, TrendingUp, Package, Zap, ChevronRight, Menu, X, 
  Database, Target, Truck, Languages, Activity, Award, Box, ShieldCheck, Star, 
  ArrowRight, FileText, Filter
} from 'lucide-react';

export default function BioNexusPlatform() {
  const [view, setView] = useState('landing');
  const [language, setLanguage] = useState('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 🌍 다국어 엔진 (i18n)
  const getText = (lang: string) => {
    const texts: Record<string, any> = {
      en: {
        nav: { home: 'Home', dashboard: 'Platform Workspace', trends: 'Trends' },
        title1: 'From Korea to the World',
        title2: 'Bio Intelligence, Global Scale',
        startBtn: 'Enter AI Dashboard',
        kpi: { ingredients: 'Active Ingredients', matches: 'AI Matches', regulations: 'Global Regs cleared' },
        dashboardInfo: 'AI-powered platform connecting premium Korean bio-ingredients with global manufacturers.',
        dbTitle: 'Global AI Sourcing Engine',
        searchPrompt: 'Search ingredients, INS number, or regulatory compliance...',
        regTitle: 'Regulatory Clearance',
        logisticsTitle: 'Live Sample Logistics',
        marketplace: 'Marketplace Trends',
        viewAll: 'View All'
      },
      ko: {
        nav: { home: '홈', dashboard: '플랫폼 워크스페이스', trends: '트렌드' },
        title1: '한국에서 세계로',
        title2: '글로벌 스케일 바이오 인텔리전스',
        startBtn: 'AI 대시보드 진입',
        kpi: { ingredients: '등록 K-원료', matches: 'AI 매칭 정확도', regulations: '규제 통과 완료' },
        dashboardInfo: 'AI 기반으로 프리미엄 K-바이오 원료와 글로벌 제조사를 실시간으로 매칭합니다.',
        dbTitle: '글로벌 AI 소싱 엔진',
        searchPrompt: '원료명, INCI 성분, 규제 compliance 검색...',
        regTitle: '글로벌 규제 현황',
        logisticsTitle: '실시간 샘플 물류',
        marketplace: '마켓플레이스 트렌드',
        viewAll: '전체 보기'
      }
    };
    return texts[lang] || texts['en'];
  };

  const t = getText(language);
  const languageOptions = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' }
  ];

  // ==========================================
  // [VIEW 1] LANDING PAGE
  // ==========================================
  const renderLandingView = () => (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center min-h-[85vh] justify-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-semibold mb-8 animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.2)]">
        <Zap size={16} /> BioNexus AI Platform v2.0
      </div>
      
      <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-center leading-tight tracking-tight">
        <span className="text-white drop-shadow-md">{t.title1}</span><br />
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {t.title2}
        </span>
      </h2>
      
      <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed font-light">
        {t.dashboardInfo}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <button 
          onClick={() => setView('dashboard')}
          className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <Activity className="w-6 h-6 group-hover:animate-spin" />
          {t.startBtn}
        </button>
        <button className="px-10 py-5 bg-slate-800/50 backdrop-blur-md border border-slate-600 text-white rounded-full font-bold text-lg hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center">
          Watch Demo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full">
        {[{ icon: <Database />, title: 'Smart DB', desc: '1,500+ Korean bio-ingredients' },
          { icon: <Target />, title: 'AI Matching', desc: 'Global trend-based auto matching' },
          { icon: <Truck />, title: 'Trade One-Stop', desc: 'Integrated export-import logistics' }].map((feature, idx) => (
          <div key={idx} className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
            <p className="text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ==========================================
  // [VIEW 2] AI DASHBOARD (BioNexus Style)
  // ==========================================
  const renderDashboardView = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
      
      {/* Search Hero */}
      <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Activity className="text-emerald-400 animate-pulse" />
          {t.dbTitle}
        </h3>
        
        <div className="flex flex-col md:flex-row items-center bg-black/40 border border-emerald-500/30 rounded-2xl overflow-hidden focus-within:border-emerald-400 focus-within:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all">
          <div className="hidden md:flex px-6 border-r border-emerald-500/20 items-center justify-center gap-3 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest h-16 w-48">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            AI Active
          </div>
          <input
            type="text"
            className="flex-1 bg-transparent px-6 py-4 text-white outline-none w-full h-16 text-lg placeholder-slate-500"
            placeholder={t.searchPrompt}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="hidden md:flex flex-row items-center gap-2 px-8 bg-slate-800 text-slate-300 border-l border-emerald-500/20 h-16 hover:text-white transition-colors">
            <Filter size={18} /> Filters
          </button>
          <button className="w-full md:w-auto px-10 bg-gradient-to-r from-emerald-500 to-blue-600 font-bold hover:brightness-110 transition-all h-16 text-white text-lg">
            SEARCH
          </button>
        </div>
        
        <div className="flex gap-3 mt-6">
          {['Centella Asiatica', 'Ginseng Saponin', 'Exosome', 'Vegan Collagen'].map((tag, idx) => (
            <span key={idx} className="px-4 py-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: <Database />, title: t.kpi.ingredients, value: '1,542+', color: 'text-emerald-400', border: 'border-emerald-500/30', bgIcon: 'bg-emerald-500/10' },
          { icon: <Target />, title: t.kpi.matches, value: '98.5%', color: 'text-blue-400', border: 'border-blue-500/30', bgIcon: 'bg-blue-500/10' },
          { icon: <Globe />, title: t.kpi.regulations, value: '89 Nations', color: 'text-purple-400', border: 'border-purple-500/30', bgIcon: 'bg-purple-500/10' },
        ].map((kpi, idx) => (
          <div key={idx} className={`bg-slate-900/60 backdrop-blur-xl border ${kpi.border} rounded-2xl p-6 flex items-center gap-5 hover:-translate-y-1 hover:shadow-lg transition-all`}>
            <div className={`p-4 rounded-xl ${kpi.bgIcon} ${kpi.color}`}>
              {kpi.icon}
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">{kpi.title}</div>
              <div className={`text-4xl font-extrabold ${kpi.color}`}>{kpi.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Operations Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Regulatory Clearance */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-400" /> {t.regTitle}</h4>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded font-mono">Live Sync</span>
          </div>
          <div className="space-y-3 flex-1">
            {[
              { region: 'FDA (USA)', status: 'Cleared', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
              { region: 'EMA (Europe)', status: 'Reviewing', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
              { region: 'PMDA (Japan)', status: 'Cleared', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
              { region: 'NMPA (China)', status: 'Action Req', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' }
            ].map((reg, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-slate-300 font-medium text-sm">{reg.region}</span>
                <span className={`px-3 py-1 border rounded-full text-xs font-semibold tracking-wide ${reg.color}`}>{reg.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Logistics */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2"><Truck className="w-5 h-5 text-blue-400" /> {t.logisticsTitle}</h4>
            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded font-mono">Real-time GPS</span>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Centella Asiatica Extract', to: 'New York, USA', prog: 75, eta: '2 Days', col: 'from-blue-500 to-emerald-400' },
              { name: 'Ginseng Saponin Rg3', to: 'Paris, France', prog: 30, eta: '5 Days', col: 'from-purple-500 to-blue-500' }
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-black/30 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-lg"><Package size={16} className="text-slate-400" /></div>
                    <span className="text-white font-medium">{item.name}</span>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">In Transit</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 mb-3">
                  <div className={`bg-gradient-to-r ${item.col} h-2 rounded-full`} style={{ width: `${item.prog}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><ArrowRight size={12} /> Seoul, KR</span>
                  <span className="text-slate-300 font-medium">{item.to} <span className="text-slate-500 ml-1">(ETA: {item.eta})</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketplace Trends */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-bold text-white flex items-center gap-2"><TrendingUp className="w-5 h-5 text-purple-400" /> {t.marketplace}</h4>
          <button className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold">{t.viewAll} <ChevronRight size={14} /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { tag: 'HOT', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
            { tag: 'NEW', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
            { tag: 'TOP', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
            { tag: 'CERT', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
          ].map((item, idx) => (
            <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-4 cursor-pointer hover:border-emerald-500/40 hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.color}`}>{item.tag}</div>
                <div className="flex items-center text-yellow-400 text-xs gap-1"><Star size={12} className="fill-yellow-400" /> 4.9</div>
              </div>
              <h5 className="text-sm font-bold text-white mb-1">Premium CICA Extract</h5>
              <p className="text-xs text-slate-400 mb-3">BioTech Korea Inc.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono text-emerald-400">$240.00 <span className="text-[10px] text-slate-500">/kg</span></span>
                <button className="w-8 h-8 rounded-full bg-slate-800 flex justify-center items-center text-slate-400 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#03060C] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#03060C_80%)] opacity-90"></div>
      </div>

      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#03060C]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => setView('landing')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center transform rotate-[15deg] shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:rotate-0 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <span className="text-white">BioNexus</span> <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">AI</span>
                </h1>
                <p className="text-[10px] text-slate-400 font-mono tracking-[0.2em] font-semibold uppercase mt-0.5">Global K-Bio Platform</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* i18n Menu */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 transition-colors"
                >
                  <Languages className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{languageOptions.find(l => l.code === language)?.flag}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-3 w-40 rounded-2xl bg-slate-800 border border-white/10 shadow-2xl overflow-hidden py-2 divide-y divide-white/5">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangMenuOpen(false); }}
                        className={`w-full text-left px-5 py-3 text-sm hover:bg-white/5 transition-all flex items-center gap-3 ${language === lang.code ? 'text-emerald-400 bg-emerald-500/10 font-medium' : 'text-slate-300'}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {view === 'dashboard' && (
                <div className="hidden md:flex items-center gap-3 bg-slate-800/50 px-5 py-2 rounded-full border border-white/5 cursor-pointer hover:bg-slate-700/50 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex justify-center items-center font-bold text-xs text-white shadow-inner">AD</div>
                  <span className="text-sm font-medium text-slate-200">Admin Pro</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full pt-20">
        {view === 'landing' ? renderLandingView() : renderDashboardView()}
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#03060C]/90 mt-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-60">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-sm">BioNexus AI © 2026. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="hover:text-emerald-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-emerald-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-emerald-400 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
