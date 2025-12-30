
import React, { useState, useMemo } from 'react';
import { FRAMEWORKS } from './constants';
import { FormData } from './types';
import FrameworkSelector from './components/FrameworkSelector';
import PromptBuilder from './components/PromptBuilder';
// ResultDisplay n'est plus utilisé car on ne génère plus de réponse en direct
import ModelsView from './components/ModelsView';
import SecurityView from './components/SecurityView';
import { ProductivityView } from './components/ProductivityView';
import RoutineView from './components/RoutineView';
import ChallengesView from './components/ChallengesView';
import { Cpu, LayoutGrid, Zap, ShieldCheck, Briefcase, Coffee, Sparkles, BookOpen, Brain, Rocket, Crown, Trophy, Swords, Star, Lock } from 'lucide-react';

type ViewType = 'prompter' | 'models' | 'security' | 'productivity' | 'routine' | 'challenges';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('models');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>(FRAMEWORKS[0].id);
  // Clé pour forcer le reset de la vue défis
  const [challengesResetKey, setChallengesResetKey] = useState(0);

  // État global pour suivre les modules validés
  const [validatedModules, setValidatedModules] = useState<Record<string, boolean>>({});
  // État global pour les scores de quiz
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  const handleValidateModule = (id: string) => {
    setValidatedModules(prev => ({ ...prev, [id]: true }));
  };

  const handleQuizComplete = (moduleId: string, score: number) => {
    // On garde le meilleur score si l'utilisateur refait le quiz
    setQuizScores(prev => ({
        ...prev,
        [moduleId]: Math.max(prev[moduleId] || 0, score)
    }));
  };

  // Calcul du total Progression
  // 6 Cadres (Prompter) + 4 Modèles + 3 Sécurité + 3 Productivité + 1 Routine + 6 Défis = 23
  const totalModulesToValidate = 23; 
  const validatedCount = Object.values(validatedModules).filter(Boolean).length;
  const progressPercentage = Math.min((validatedCount / totalModulesToValidate) * 100, 100);

  // Calcul du score total Quiz
  // 5 vues * 5 questions = 25 points max
  const totalPossibleQuizScore = 25;
  const currentTotalQuizScore = Object.values(quizScores).reduce((a: number, b: number) => a + b, 0);

  const selectedFramework = useMemo(() => 
    FRAMEWORKS.find(f => f.id === selectedFrameworkId) || FRAMEWORKS[0], 
    [selectedFrameworkId]
  );

  // Définition des niveaux de progression pour la frise
  const progressLevels = [
    { threshold: 0, label: 'Novice', icon: Sparkles, color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/20' },
    { threshold: 25, label: 'Apprenti', icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { threshold: 50, label: 'Initié', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { threshold: 75, label: 'Expert', icon: Rocket, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { threshold: 100, label: 'Maître', icon: Crown, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  ];

  // Trouver le niveau actuel
  const currentLevelIndex = progressLevels.findIndex((level, index) => {
    const nextLevel = progressLevels[index + 1];
    return progressPercentage >= level.threshold && (!nextLevel || progressPercentage < nextLevel.threshold);
  });
  const currentLevel = progressLevels[currentLevelIndex] || progressLevels[0];
  const nextLevel = progressLevels[currentLevelIndex + 1];

  // Calcul de l'XP vers le prochain niveau
  let xpTowardsNext = 0;
  if (nextLevel) {
    const range = nextLevel.threshold - currentLevel.threshold;
    const progressInOneRange = progressPercentage - currentLevel.threshold;
    xpTowardsNext = (progressInOneRange / range) * 100;
  } else {
    xpTowardsNext = 100;
  }

  return (
    <div className="min-h-screen text-slate-200 flex flex-col pb-20">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 glass-panel-dark border-b border-white/5 px-4 py-6 shadow-2xl bg-[#050505]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          
          {/* --- NOUVEAU DASHBOARD DE PROGRESSION (GAMIFICATION HUD) --- */}
          <div className="w-full max-w-6xl animate-fade-in-up">
             
             {/* Main Container */}
             <div className="relative bg-[#0F0F0F] rounded-3xl border border-white/10 p-1 shadow-2xl overflow-hidden group">
                
                {/* Background decorative glow */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${currentLevel.color.replace('text-', '')}/50 to-transparent opacity-50`}></div>
                <div className="absolute -left-10 top-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-stretch bg-[#0A0A0A] rounded-[20px] overflow-hidden">
                    
                    {/* SECTION GAUCHE : RANK ACTUEL */}
                    <div className="flex items-center gap-5 p-4 md:p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                       <div className={`absolute inset-0 bg-${currentLevel.color.replace('text-', '')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                       
                       {/* Icone Rank Animée */}
                       <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center border ${currentLevel.border} ${currentLevel.bg} shadow-lg shrink-0`}>
                          <currentLevel.icon className={`w-8 h-8 ${currentLevel.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
                          {/* Particules */}
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-20"></div>
                       </div>

                       <div className="relative z-10">
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Rang Actuel</p>
                          <h3 className={`text-2xl font-black ${currentLevel.color} tracking-tight`}>{currentLevel.label}</h3>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="text-xs font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                                Modules: <span className="text-white">{validatedCount}/{totalModulesToValidate}</span>
                             </span>
                          </div>
                       </div>
                    </div>

                    {/* SECTION CENTRE : BARRE D'XP & JALONS */}
                    <div className="flex-1 p-6 flex flex-col justify-center relative">
                        {/* Barre de fond */}
                        <div className="relative h-3 bg-[#1a1a1a] rounded-full w-full overflow-hidden shadow-inner border border-white/5">
                           {/* Remplissage fluide */}
                           <div 
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                              style={{ width: `${progressPercentage}%` }}
                           >
                              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
                              <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]"></div>
                           </div>
                        </div>

                        {/* Jalons (Nodes) */}
                        <div className="flex justify-between mt-3 px-1 relative">
                           {progressLevels.map((level, idx) => {
                              const isUnlocked = progressPercentage >= level.threshold;
                              const isNext = !isUnlocked && (idx === 0 || progressPercentage >= progressLevels[idx-1].threshold);
                              
                              return (
                                 <div key={idx} className="flex flex-col items-center relative group/node">
                                    {/* Line connector visual hint handled by absolute positioning above if needed, keeping it simple here */}
                                    <div className={`
                                       w-3 h-3 rounded-full border-2 transition-all duration-500 z-10
                                       ${isUnlocked ? `bg-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]` : 'bg-[#1a1a1a] border-slate-700'}
                                       ${isNext ? 'animate-pulse border-white' : ''}
                                    `}></div>
                                    
                                    {/* Label on hover or active */}
                                    <div className={`absolute top-5 transition-all duration-300 flex flex-col items-center ${isUnlocked || isNext ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-1'}`}>
                                       <span className={`text-[10px] font-bold uppercase ${isUnlocked ? 'text-cyan-400' : 'text-slate-600'}`}>{level.label}</span>
                                       {isNext && <span className="text-[9px] text-yellow-500 font-mono mt-0.5 animate-bounce">Prochain</span>}
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                        
                        {/* XP Text */}
                        <div className="absolute top-2 right-6 text-[10px] font-mono text-slate-500">
                           {nextLevel 
                              ? <span>XP requis: <span className="text-white">{Math.round(xpTowardsNext)}%</span></span> 
                              : <span className="text-yellow-400 font-bold">Niveau Max Atteint!</span>
                           }
                        </div>
                    </div>

                    {/* SECTION DROITE : SCORE QUIZ (COINS) */}
                    <div className="flex items-center justify-between md:justify-center gap-4 p-4 md:p-6 md:w-1/4 border-t md:border-t-0 md:border-l border-white/5 bg-gradient-to-bl from-yellow-500/5 to-transparent">
                       <div className="text-right md:text-center">
                          <p className="text-[10px] text-yellow-600/80 font-bold uppercase tracking-widest mb-0.5">Points de Savoir</p>
                          <div className="flex items-center justify-end md:justify-center gap-2">
                             <span className="text-2xl font-black text-white text-shadow-sm">{currentTotalQuizScore}</span>
                             <span className="text-sm text-slate-500 font-medium">/ {totalPossibleQuizScore}</span>
                          </div>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-gradient-to-b from-yellow-400 to-orange-600 shadow-lg border border-yellow-300 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                          <Trophy className="w-5 h-5 text-white drop-shadow-md" />
                       </div>
                    </div>

                </div>
             </div>
          </div>

          {/* --- Navigation Menu (Updated Buttons) --- */}
          <div className="flex flex-wrap justify-center items-center bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#272727] rounded-full p-2 shadow-2xl gap-3 w-full md:w-auto overflow-x-auto no-scrollbar">
             
             {/* 1. LES 4 GRANDES IA (VERT) */}
             <button 
               onClick={() => setCurrentView('models')}
               className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border ${
                 currentView === 'models' 
                   ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-500/50 scale-105' 
                   : 'text-slate-400 border-transparent hover:text-emerald-400 hover:bg-emerald-500/10'
               }`}
             >
               <LayoutGrid className="w-4 h-4" />
               <span className="hidden sm:inline">Les 4 Grandes IA</span>
               <span className="sm:hidden">IA</span>
             </button>

             {/* 2. PROMPTER (POURPRE/ROSE) */}
             <button 
               onClick={() => setCurrentView('prompter')}
               className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border ${
                 currentView === 'prompter' 
                   ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(219,39,119,0.4)] border-pink-500/50 scale-105' 
                   : 'text-slate-400 border-transparent hover:text-pink-400 hover:bg-pink-500/10'
               }`}
             >
               <Zap className="w-4 h-4" />
               <span className="hidden sm:inline">Prompter Intelligemment</span>
               <span className="sm:hidden">Prompt</span>
             </button>
             
             {/* 3. PRODUCTIVITÉ (INDIGO) */}
             <button 
               onClick={() => setCurrentView('productivity')}
               className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border ${
                 currentView === 'productivity' 
                   ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] border-indigo-500/50 scale-105' 
                   : 'text-slate-400 border-transparent hover:text-indigo-400 hover:bg-indigo-500/10'
               }`}
             >
               <Briefcase className="w-4 h-4" />
               <span className="hidden sm:inline">Productivité Bureau</span>
               <span className="sm:hidden">Bureau</span>
             </button>

             {/* 4. SÉCURITÉ (ROUGE) */}
             <button 
               onClick={() => setCurrentView('security')}
               className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border ${
                 currentView === 'security' 
                   ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] border-red-500/50 scale-105' 
                   : 'text-slate-400 border-transparent hover:text-red-400 hover:bg-red-500/10'
               }`}
             >
               <ShieldCheck className="w-4 h-4" />
               <span className="hidden sm:inline">Sécurité</span>
             </button>

             {/* 5. ROUTINE (ORANGE) */}
             <button 
               onClick={() => setCurrentView('routine')}
               className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border ${
                 currentView === 'routine' 
                   ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] border-orange-500/50 scale-105' 
                   : 'text-slate-400 border-transparent hover:text-orange-400 hover:bg-orange-500/10'
               }`}
             >
               <Coffee className="w-4 h-4" />
               <span className="hidden sm:inline">Ma Routine IA</span>
               <span className="sm:hidden">Routine</span>
             </button>

             {/* 6. DÉFIS (NEW - ROUGE/ORANGE) */}
             <button 
               onClick={() => {
                 setCurrentView('challenges');
                 // Incrémente la clé pour forcer le composant ChallengesView à se remonter (reset)
                 setChallengesResetKey(prev => prev + 1);
               }}
               className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border ${
                 currentView === 'challenges' 
                   ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] border-red-500/50 scale-105' 
                   : 'text-slate-400 border-transparent hover:text-yellow-400 hover:bg-yellow-500/10'
               }`}
             >
               <Swords className="w-4 h-4" />
               <span className="hidden sm:inline">Défis Pratiques</span>
               <span className="sm:hidden">Défis</span>
             </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 flex flex-col gap-10 mt-4">
        
        {currentView === 'models' && (
          <ModelsView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('models', score)}
            quizScore={quizScores['models']} 
          />
        )}
        
        {currentView === 'security' && (
          <SecurityView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('security', score)}
            quizScore={quizScores['security']} 
          />
        )}

        {currentView === 'productivity' && (
          <ProductivityView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('productivity', score)}
            quizScore={quizScores['productivity']} 
          />
        )}
        
        {currentView === 'routine' && (
          <RoutineView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('routine', score)}
            quizScore={quizScores['routine']} 
          />
        )}

        {currentView === 'challenges' && (
          <ChallengesView 
            key={`challenges-${challengesResetKey}`}
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
          />
        )}
        
        {currentView === 'prompter' && (
          <>
            <div className="text-center space-y-4 mb-2 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Guide des Méthodes de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Prompts Avancés
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Apprenez la théorie et la pratique. Cliquez sur un cadre pour découvrir comment structurer vos demandes point par point.
              </p>
            </div>

            {/* 1. Navigation Menu (Top Row) */}
            <section className="flex justify-center animate-fade-in-up delay-100">
              <FrameworkSelector 
                frameworks={FRAMEWORKS} 
                selectedId={selectedFrameworkId} 
                onSelect={(id) => setSelectedFrameworkId(id)} 
              />
            </section>

            {/* 2. Educational View */}
            <PromptBuilder 
              framework={selectedFramework}
              validatedModules={validatedModules}
              onValidate={handleValidateModule}
              onQuizComplete={(score) => handleQuizComplete('prompter', score)}
              quizScore={quizScores['prompter']}
            />

          </>
        )}
        
      </main>
    </div>
  );
}
