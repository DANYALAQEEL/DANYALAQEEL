import React, { useState, useEffect, useMemo } from 'react';
import PlayerCard from '../components/PlayerCard';
import teamPitchBackground from "../assets/pics/background_pic.png";
import logo from "../assets/pics/PSL-logo.png";
import { useFplStore, Player, CustomPlayerInput } from '../store/fplStore';
import { RefreshCw, X, Loader2, AlertTriangle, ChevronLeft, ChevronRight, TrendingUp, DollarSign, Target, Repeat, Search, Plus, FlaskConical, Trash2, Camera, ImagePlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getHistory } from '../utils/fixtureUtils';
import { setPlayerPhoto, compressImage, getAllPlayerPhotos } from '../utils/playerPhotoStore';

import arsLogo from "../assets/pics/EPL Logos/arsenal.football-logos.cc.png";
import avlLogo from "../assets/pics/EPL Logos/aston-villa.football-logos.cc.png";
import bhaLogo from "../assets/pics/EPL Logos/brighton.football-logos.cc.png";
import cheLogo from "../assets/pics/EPL Logos/chelsea.football-logos.cc.png";
import eveLogo from "../assets/pics/EPL Logos/everton.football-logos.cc.png";
import livLogo from "../assets/pics/EPL Logos/liverpool.football-logos.cc.png";
import mciLogo from "../assets/pics/EPL Logos/manchester-city.football-logos.cc.png";
import munLogo from "../assets/pics/EPL Logos/manchester-united.football-logos.cc.png";
import newLogo from "../assets/pics/EPL Logos/newcastle.football-logos.cc.png";
import totLogo from "../assets/pics/EPL Logos/tottenham.football-logos.cc.png";
import whuLogo from "../assets/pics/EPL Logos/west-ham.football-logos.cc.png";
import wolLogo from "../assets/pics/EPL Logos/wolves.football-logos.cc.png";

const teamFilters = [
  { id: "ARS", logo: arsLogo, name: "Arsenal" },
  { id: "AVL", logo: avlLogo, name: "Aston Villa" },
  { id: "BHA", logo: bhaLogo, name: "Brighton" },
  { id: "CHE", logo: cheLogo, name: "Chelsea" },
  { id: "EVE", logo: eveLogo, name: "Everton" },
  { id: "LIV", logo: livLogo, name: "Liverpool" },
  { id: "MCI", logo: mciLogo, name: "Man City" },
  { id: "MUN", logo: munLogo, name: "Man Utd" },
  { id: "NEW", logo: newLogo, name: "Newcastle" },
  { id: "TOT", logo: totLogo, name: "Tottenham" },
  { id: "WHU", logo: whuLogo, name: "West Ham" },
  { id: "WOL", logo: wolLogo, name: "Wolves" },
];

function FilterPanel({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/5 bg-black/40 p-6 shadow-2xl mb-6">
      <h3 className="mb-6 inline-block bg-gradient-to-r from-emerald-300 via-emerald-200 to-lime-200 bg-clip-text text-[10px] font-black uppercase tracking-[0.4em] text-transparent drop-shadow-md">
        {title}
      </h3>
      {children}
    </section>
  );
}



function initialsFromName(name: string) {
  if (!name || typeof name !== 'string') return "??";
  const parts = name.split(" ").filter(Boolean);
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

const PL_CLUBS = [
  { code: 'ARS', name: 'Arsenal' }, { code: 'AVL', name: 'Aston Villa' }, { code: 'BOU', name: 'Bournemouth' },
  { code: 'BRE', name: 'Brentford' }, { code: 'BHA', name: 'Brighton' }, { code: 'CHE', name: 'Chelsea' },
  { code: 'CRY', name: 'Crystal Palace' }, { code: 'EVE', name: 'Everton' }, { code: 'FUL', name: 'Fulham' },
  { code: 'IPS', name: 'Ipswich' }, { code: 'LEI', name: 'Leicester' }, { code: 'LIV', name: 'Liverpool' },
  { code: 'MCI', name: 'Man City' }, { code: 'MUN', name: 'Man Utd' }, { code: 'NEW', name: 'Newcastle' },
  { code: 'NFO', name: "Nott'm Forest" }, { code: 'SOU', name: 'Southampton' }, { code: 'TOT', name: 'Tottenham' },
  { code: 'WHU', name: 'West Ham' }, { code: 'WOL', name: 'Wolves' },
];

export default function FPLOptimizer() {
  const { 
    squad, allPlayers, gameweek, projectedPoints, isLoading, error, 
    optimize, clearError, setGameweek, fetchSeasonPool, fetchAllPlayers, fixtureContext, swapPlayer,
    setOptimizationResult, customPlayers, addCustomPlayer, removeCustomPlayer, clearCustomPlayers
  } = useFplStore();

  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapSearch, setSwapSearch] = useState("");
  const [injectOpen, setInjectOpen] = useState(false);
  const [injectForm, setInjectForm] = useState({
    name: '', club: 'ARS', position: 'FWD' as 'GK'|'DEF'|'MID'|'FWD',
    cost_millions: 8.0, overall_ability: 80, base_form: 6.0, expectation_status: 'Expected'
  });
  const [playerPhotos, setPlayerPhotos] = useState<Record<string, string>>(getAllPlayerPhotos());
  const [injectPhotoPreview, setInjectPhotoPreview] = useState<string | null>(null);
  const photoInputRef = React.useRef<HTMLInputElement>(null);
  const injectPhotoRef = React.useRef<HTMLInputElement>(null);
  const location = useLocation();

  const handlePhotoUpload = async (playerId: string, file: File) => {
    const dataUrl = await compressImage(file, 200);
    setPlayerPhoto(playerId, dataUrl);
    setPlayerPhotos(getAllPlayerPhotos());
  };

  const handleInjectSubmit = () => {
    if (!injectForm.name.trim()) return;
    addCustomPlayer(injectForm as CustomPlayerInput);
    // If a photo was selected for the inject form, save it after the player is added
    if (injectPhotoPreview) {
      const cps = useFplStore.getState().customPlayers as any[];
      const newest = cps[cps.length - 1];
      if (newest?.id) {
        setPlayerPhoto(newest.id, injectPhotoPreview);
        setPlayerPhotos(getAllPlayerPhotos());
      }
    }
    setInjectForm({ name: '', club: 'ARS', position: 'FWD', cost_millions: 8.0, overall_ability: 80, base_form: 6.0, expectation_status: 'Expected' });
    setInjectPhotoPreview(null);
    setInjectOpen(false);
    setTimeout(() => optimize(false), 100);
  };

  const handleInjectPhotoSelect = async (file: File) => {
    const dataUrl = await compressImage(file, 200);
    setInjectPhotoPreview(dataUrl);
  };

  const totalSquadCost = (squad || []).reduce((sum, p) => sum + Number(p?.cost_millions || 0), 0);
  const realRemainingBudget = 100.0 - totalSquadCost;
  const safeProjectedPoints = typeof projectedPoints === 'number' && !isNaN(projectedPoints) ? projectedPoints : 0;

  const { starters, dynamicFormation } = useMemo(() => {
    if (!squad || squad.length < 11) return { starters: [], dynamicFormation: [] };
    
    // Ensure we take exactly 11 players for the pitch. 
    // Assuming backend returns best XI in the first 11 slots.
    const squadStarters = squad.slice(0, 11);
    
    const gks = squadStarters.filter(p => p?.position === 'GK');
    const defs = squadStarters.filter(p => p?.position === 'DEF');
    const mids = squadStarters.filter(p => p?.position === 'MID');
    const fwds = squadStarters.filter(p => p?.position === 'FWD');
    
    // FPL requires exactly 1 GK. Fallback if the first 11 somehow omitted a GK.
    if (gks.length === 0) {
      const fallbackGk = squad.find(p => p?.position === 'GK');
      if (fallbackGk) {
         gks.push(fallbackGk);
         if (fwds.length > 1) fwds.pop();
         else if (mids.length > 1) mids.pop();
         else if (defs.length > 1) defs.pop();
      }
    }

    const finalStarters = [...gks, ...defs, ...mids, ...fwds];
    
    const coords: { left: string, top: string }[] = [];
    
    // Goalkeepers
    gks.forEach(() => coords.push({ left: '50%', top: '8%' }));
    
    // Defenders
    const defTop = '32%';
    defs.forEach((_, i) => {
      const total = defs.length;
      const spacing = 88 / Math.max(1, total);
      const start = total === 1 ? 50 : 50 - (spacing * (total - 1)) / 2;
      coords.push({ left: `${total === 1 ? 50 : start + (i * spacing)}%`, top: defTop });
    });
    
    // Midfielders
    const midTop = '62%';
    mids.forEach((_, i) => {
      const total = mids.length;
      const spacing = 88 / Math.max(1, total);
      const start = total === 1 ? 50 : 50 - (spacing * (total - 1)) / 2;
      coords.push({ left: `${total === 1 ? 50 : start + (i * spacing)}%`, top: midTop });
    });
    
    // Forwards
    const fwdTop = '88%';
    fwds.forEach((_, i) => {
      const total = fwds.length;
      const spacing = 75 / Math.max(1, total);
      const start = total === 1 ? 50 : 50 - (spacing * (total - 1)) / 2;
      coords.push({ left: `${total === 1 ? 50 : start + (i * spacing)}%`, top: fwdTop });
    });

    return { starters: finalStarters, dynamicFormation: coords };
  }, [squad]);

  const swapCandidates = useMemo(() => {
    if (!selectedPlayer || !allPlayers) return [];
    return allPlayers
      .filter(p => p.position === selectedPlayer.position && p.id !== selectedPlayer.id)
      .filter(p => p.name.toLowerCase().includes(swapSearch.toLowerCase()))
      .sort((a, b) => b.points - a.points)
      .slice(0, 20);
  }, [selectedPlayer, allPlayers, swapSearch]);

  const handleGwChange = (newGw: number) => {
    if (newGw < 1 || newGw > 38) return;
    setGameweek(newGw);
    // Give Zustand time to settle the state before re-optimizing
    setTimeout(() => {
       optimize(false);
    }, 150);
  };

  const executeSwap = (newPlayer: Player) => {
    if (selectedPlayer) {
      swapPlayer(selectedPlayer.id, newPlayer);
      setIsSwapping(false);
      setSelectedPlayer(null);
    }
  };

  useEffect(() => {
    if (location.state?.squadData) {
      setOptimizationResult(location.state.squadData);
    }
    const init = async () => {
      let hasFixtures = false;

      // PRIORITY 1: Always check localStorage for the LATEST saved PL fixtures.
      // This is the single source of truth ΓÇö it gets updated whenever the user
      // regenerates/saves fixtures on the fixture display page.
      const history = getHistory();
      const latestPL = history.find(h => h.source === 'Premier League' || h.name === 'Premier League' || h.source === 'pl');
      if (latestPL) {
        useFplStore.setState({ seasonalFixtures: { fixtures: latestPL.fixtures, teams: latestPL.teams } });
        hasFixtures = true;
      }

      // PRIORITY 2: location.state (only if localStorage had nothing)
      if (!hasFixtures && location.state?.seasonalFixtures) {
        useFplStore.setState({ seasonalFixtures: location.state.seasonalFixtures });
        hasFixtures = true;
      }

      // PRIORITY 3: Backend-generated fixtures (last resort)
      if (!hasFixtures) {
         await fetchSeasonPool();
      }

      await fetchAllPlayers();
      if (squad.length === 0) optimize(false);
    };
    init();
  }, [location, setOptimizationResult]);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom, rgba(5, 10, 6, 0.3), rgba(7, 11, 8, 0.4), rgba(10, 14, 8, 0.4)), url(${teamPitchBackground})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      
      <div className="relative z-10 grid gap-8 lg:gap-12 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] max-w-[2400px] mx-auto p-4 sm:p-8 md:p-16">
        
        <aside className="space-y-6">
          <FilterPanel title="EPL CLUBS">
             <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-3 gap-3 sm:gap-4">
               {teamFilters.map(team => (
                 <div key={team.id} className="flex h-12 sm:h-16 items-center justify-center rounded-xl sm:rounded-2xl border border-white/5 bg-black/40 p-2 sm:p-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:border-emerald-500/30">
                   <img src={team.logo} alt={team.id} className="h-full w-full object-contain" />
                 </div>
               ))}
             </div>
          </FilterPanel>

          <FilterPanel title="SQUAD ECONOMY">
             <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-[20px] sm:rounded-[32px] bg-black/60 border border-white/5 shadow-xl">
                   <p className="text-[9px] sm:text-[10px] font-black text-zinc-500 uppercase mb-2 sm:mb-3 tracking-[0.2em]">Total Value</p>
                   <span className="text-2xl sm:text-4xl font-black text-white italic tracking-tighter leading-none">┬ú{totalSquadCost.toFixed(1)}M</span>
                </div>
                <div className="p-4 sm:p-6 rounded-[20px] sm:rounded-[32px] bg-black/60 border border-white/5 shadow-xl">
                   <p className="text-[9px] sm:text-[10px] font-black text-zinc-500 uppercase mb-2 sm:mb-3 tracking-[0.2em]">Remaining Bank</p>
                   <span className="text-2xl sm:text-4xl font-black text-emerald-400 italic tracking-tighter leading-none font-mono">┬ú{realRemainingBudget.toFixed(1)}M</span>
                </div>
             </div>
          </FilterPanel>

          {/* ΓöÇΓöÇ Hypothesis Pool ΓöÇΓöÇ */}
          <FilterPanel title="HYPOTHESIS POOL">
            {customPlayers.length === 0 ? (
              <p className="text-[10px] text-zinc-600 italic">No custom players injected. Use the <span className="text-purple-400 font-bold">+ INJECT</span> button to simulate a what-if transfer.</p>
            ) : (
              <div className="space-y-3">
                {(customPlayers as any[]).map((cp: any) => (
                  <div key={cp.id} className="flex items-center justify-between p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 group">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-black text-purple-400 shrink-0">
                        {initialsFromName(cp.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{cp.name}</p>
                        <p className="text-[9px] text-zinc-500">{cp.club} ┬╖ {cp.position} ┬╖ ┬ú{cp.cost_millions}M</p>
                      </div>
                    </div>
                    <button onClick={() => { removeCustomPlayer(cp.id); setTimeout(() => optimize(false), 100); }} className="p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100 shrink-0">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button onClick={() => { clearCustomPlayers(); setTimeout(() => optimize(false), 100); }} className="w-full mt-2 py-2 rounded-lg border border-zinc-800 text-[9px] font-bold text-zinc-500 uppercase tracking-widest hover:text-red-400 hover:border-red-500/30 transition-colors">
                  Clear All Hypotheses
                </button>
              </div>
            )}
          </FilterPanel>
        </aside>

        <main className="space-y-8 sm:space-y-12">
          
          <header className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-end justify-between px-2 sm:px-4 w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 lg:gap-6 shrink-0 w-full lg:w-auto text-center sm:text-left">
               <img src={logo} alt="Logo" className="h-20 w-20 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 object-contain drop-shadow-4xl shrink-0" />
               <div className="flex flex-col items-center sm:items-start max-w-full">
                  <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white tracking-tighter italic uppercase leading-none break-words max-w-full text-center sm:text-left">
                    SQUAD <span className="text-emerald-500">OPTIMIZER</span>
                  </h1>
                  
                  <div className="mt-4 xl:mt-6 flex items-center justify-center gap-3 lg:gap-6 bg-black/40 border border-emerald-500/20 px-4 lg:px-6 py-2 xl:py-3 rounded-[16px] xl:rounded-[24px] w-fit shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-md">
                     <button onClick={() => handleGwChange(gameweek - 1)} className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-125 shrink-0">
                        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                     </button>
                     <div className="flex flex-col items-center min-w-[70px] lg:min-w-[100px] shrink-0">
                        <span className="text-xl lg:text-2xl font-black text-white uppercase italic tracking-tighter drop-shadow-md">GW {gameweek}</span>
                     </div>
                     <button onClick={() => handleGwChange(gameweek + 1)} className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-125 shrink-0">
                        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                     </button>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-center lg:justify-end shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
               <div className="p-4 lg:p-5 xl:p-6 rounded-[20px] xl:rounded-[32px] bg-black/40 border border-emerald-500/20 flex flex-col items-center flex-1 sm:flex-none sm:min-w-[120px] lg:min-w-[150px] xl:min-w-[180px] shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-md shrink-0">
                  <span className="text-[10px] lg:text-[10px] font-black text-zinc-400 mb-1 xl:mb-2 tracking-[0.3em] uppercase">Expected Yield</span>
                  <span className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-emerald-400 font-mono tracking-tighter italic drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">{safeProjectedPoints.toFixed(1)}</span>
               </div>
               
               <button 
                onClick={() => optimize(true)}
                disabled={isLoading}
                className="px-6 sm:px-8 lg:px-10 xl:px-14 py-5 lg:py-5 rounded-[20px] xl:rounded-[32px] bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-black text-xl sm:text-lg lg:text-xl xl:text-2xl uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 lg:gap-4 group relative overflow-hidden shrink-0 flex-1 sm:flex-none"
               >
                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 {isLoading ? <Loader2 className="w-6 h-6 lg:w-8 lg:h-8 animate-spin relative z-10" /> : <RefreshCw className="w-6 h-6 lg:w-8 lg:h-8 group-hover:rotate-180 transition-transform duration-700 relative z-10" />}
                 <span className="relative z-10">SHUFFLE</span>
               </button>

               <button 
                onClick={() => setInjectOpen(true)}
                className="px-6 sm:px-8 lg:px-8 xl:px-10 py-5 lg:py-5 rounded-[20px] xl:rounded-[32px] bg-gradient-to-r from-purple-600 to-purple-500 text-white font-black text-xl sm:text-lg lg:text-xl xl:text-2xl uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(176,38,255,0.4)] flex items-center justify-center gap-2 lg:gap-4 group relative overflow-hidden shrink-0 flex-1 sm:flex-none"
               >
                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <Plus className="w-6 h-6 lg:w-8 lg:h-8 relative z-10" />
                 <span className="relative z-10">INJECT</span>
               </button>
            </div>
          </header>

          <section className="relative min-h-[400px] sm:min-h-[700px] md:min-h-[900px] lg:min-h-[1150px] rounded-[24px] md:rounded-[80px] bg-black/10 p-2 sm:p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden sm:overflow-visible">
             {isLoading && starters.length === 0 ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 animate-spin text-emerald-500 mb-4 md:mb-6" />
                   <p className="font-black text-[8px] md:text-[10px] text-emerald-400 uppercase tracking-[0.5em] animate-pulse">Computing Matrix...</p>
                </div>
             ) : (
                <div className="relative w-full h-[380px] sm:h-[650px] md:h-[800px] lg:h-[1050px]">
                   {starters.map((player, index) => (
                     player && dynamicFormation[index] && (
                       <motion.div 
                         key={player.id} 
                         layout
                         initial={{ scale: 0.8, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         className="absolute -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center" 
                         style={{ left: dynamicFormation[index].left, top: dynamicFormation[index].top, zIndex: 40 - index }}
                       >
                          <div className="scale-[0.3] min-[380px]:scale-[0.35] min-[420px]:scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.72] xl:scale-[0.85] hover:scale-[0.4] min-[380px]:hover:scale-[0.45] min-[420px]:hover:scale-[0.5] sm:hover:scale-[0.7] md:hover:scale-[0.85] lg:hover:scale-[0.9] xl:hover:scale-[1.0] transition-all duration-300 origin-center">
                             <PlayerCard player={player} compact onClick={() => { setSelectedPlayer(player); setIsSwapping(false); }} opponent={(fixtureContext as any)[player.club]} photoUrl={playerPhotos[player.id] || null} />
                          </div>
                       </motion.div>
                     )
                   ))}
                </div>
             )}
          </section>

          <AnimatePresence>
            {selectedPlayer && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] flex items-center justify-center bg-black/95 p-8" onClick={() => setSelectedPlayer(null)}>
                <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 25 }} className="bg-[#000000] p-16 rounded-[60px] border border-white/5 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                   {!isSwapping ? (
                     <>
                        <div className="flex items-center gap-10 mb-12">
                           <div className="relative group/avatar">
                             <div className="w-40 h-40 rounded-full border-2 border-emerald-500 bg-emerald-500/5 flex items-center justify-center text-7xl font-black text-emerald-400 overflow-hidden">
                               {playerPhotos[selectedPlayer.id] ? (
                                 <img src={playerPhotos[selectedPlayer.id]} alt={selectedPlayer.name} className="w-full h-full object-cover object-top" />
                               ) : (
                                 initialsFromName(selectedPlayer.name)
                               )}
                             </div>
                             <button 
                               onClick={() => photoInputRef.current?.click()}
                               className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                             >
                               {playerPhotos[selectedPlayer.id] ? (
                                 <><Camera className="w-6 h-6 text-white" /><span className="text-[10px] font-bold text-white uppercase tracking-wider">Update</span></>
                               ) : (
                                 <><ImagePlus className="w-6 h-6 text-emerald-400" /><span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Add Photo</span></>
                               )}
                             </button>
                             <input ref={photoInputRef} type="file" accept="image/*" className="hidden" onChange={async (e) => { const f = e.target.files?.[0]; if (f) { await handlePhotoUpload(selectedPlayer.id, f); } e.target.value = ''; }} />
                           </div>
                           <div className="flex-1">
                             <div className="flex items-center justify-between">
                                <h2 className="text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">{selectedPlayer.name}</h2>
                                <button onClick={() => setSelectedPlayer(null)} className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                   <X className="w-8 h-8 text-white/40" />
                                </button>
                             </div>
                             <p className="text-3xl font-bold text-emerald-500/80 tracking-[0.4em] uppercase mt-2">{selectedPlayer.club} <span className="text-zinc-800 mx-4">|</span> {selectedPlayer.position}</p>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                           <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                              <div className="flex items-center gap-3 mb-2"><DollarSign className="w-5 h-5 text-zinc-600" /><span className="text-[10px] text-zinc-600 font-black uppercase">Market Value</span></div>
                              <div className="text-4xl font-black text-white">┬ú{selectedPlayer.cost_millions}M</div>
                           </div>
                           <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                              <div className="flex items-center gap-3 mb-2"><TrendingUp className="w-5 h-5 text-zinc-600" /><span className="text-[10px] text-zinc-600 font-black uppercase">Projected</span></div>
                              <div className="text-4xl font-black text-emerald-400">{selectedPlayer.points}</div>
                           </div>
                           <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                              <div className="flex items-center gap-3 mb-2"><Target className="w-5 h-5 text-zinc-600" /><span className="text-[10px] text-zinc-600 font-black uppercase">Fixture</span></div>
                              <div className="text-3xl font-black text-lime-400">{(fixtureContext as any)[selectedPlayer.club] || 'BYE'}</div>
                           </div>
                        </div>

                        <div className="flex gap-6">
                           <button onClick={() => setIsSwapping(true)} className="flex-1 py-10 bg-emerald-500 text-black rounded-[40px] font-black text-2xl uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-6 shadow-glow">
                              <Repeat className="w-8 h-8" /> TRANSFER PLAYER
                           </button>
                           <button onClick={() => setSelectedPlayer(null)} className="flex-1 py-10 bg-white/5 text-zinc-500 rounded-[40px] font-black text-2xl uppercase tracking-widest hover:bg-white/10 transition-all">
                              DISMISS
                           </button>
                        </div>
                     </>
                   ) : (
                     <div className="space-y-10">
                        <div className="flex items-center justify-between px-4">
                           <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">MARKET REPLACEMENTS</h3>
                           <button onClick={() => setIsSwapping(false)} className="text-[12px] font-black text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">BACK TO STATS</button>
                        </div>
                        <div className="relative">
                           <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 text-zinc-800" />
                           <input type="text" placeholder="PROBE DATABASE..." className="w-full bg-white/5 border-none rounded-[32px] py-8 pl-20 text-xl font-black text-white placeholder:text-zinc-800 focus:ring-1 focus:ring-emerald-500" value={swapSearch} onChange={e => setSwapSearch(e.target.value)} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-4">
                           {swapCandidates.map(p => (
                             <button key={p.id} onClick={() => executeSwap(p)} className="flex items-center justify-between p-6 rounded-[32px] bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all group">
                                <div className="flex items-center gap-6">
                                   <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center font-black text-emerald-400 group-hover:scale-110 transition-transform">{initialsFromName(p.name)}</div>
                                   <div className="text-left">
                                      <p className="font-black text-white uppercase tracking-tighter text-xl">{p.name}</p>
                                      <p className="text-[12px] text-zinc-600 font-bold">{p.club}</p>
                                   </div>
                                </div>
                                <div className="text-right text-emerald-400 font-black italic text-2xl">{p.points}</div>
                             </button>
                           ))}
                        </div>
                     </div>
                   )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ΓöÇΓöÇ Custom Player Injection Modal ΓöÇΓöÇ */}
          <AnimatePresence>
            {injectOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8" onClick={() => { setInjectOpen(false); setInjectPhotoPreview(null); }}>
                <motion.div 
                  initial={{ scale: 0.92, y: 30, opacity: 0 }} 
                  animate={{ scale: 1, y: 0, opacity: 1 }} 
                  exit={{ scale: 0.92, y: 30, opacity: 0 }} 
                  transition={{ type: 'spring', damping: 28, stiffness: 300 }} 
                  className="relative bg-[#08080a] backdrop-blur-xl rounded-[28px] sm:rounded-[40px] border border-purple-500/15 max-w-lg w-full shadow-[0_0_120px_rgba(176,38,255,0.08)] overflow-hidden max-h-[90vh] overflow-y-auto" 
                  onClick={e => e.stopPropagation()}
                >
                  {/* Animated gradient header bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                  
                  <div className="p-6 sm:p-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 border border-purple-500/25 flex items-center justify-center shadow-[0_0_20px_rgba(176,38,255,0.1)]">
                          <FlaskConical className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight italic leading-none">Inject Player</h2>
                          <p className="text-[8px] sm:text-[9px] text-purple-400/50 font-bold uppercase tracking-[0.25em] mt-1">What-If Hypothesis ┬╖ Transient RAM</p>
                        </div>
                      </div>
                      <button onClick={() => { setInjectOpen(false); setInjectPhotoPreview(null); }} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                        <X className="w-4 h-4 text-white/40" />
                      </button>
                    </div>

                    {/* Photo + Name Row */}
                    <div className="flex items-center gap-5 mb-6">
                      <button 
                        onClick={() => injectPhotoRef.current?.click()}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-dashed border-purple-500/25 bg-purple-500/5 flex flex-col items-center justify-center gap-1.5 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all cursor-pointer shrink-0 overflow-hidden group/photo"
                      >
                        {injectPhotoPreview ? (
                          <>
                            <img src={injectPhotoPreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                          </>
                        ) : (
                          <>
                            <Camera className="w-5 h-5 text-purple-400/60 group-hover/photo:text-purple-400 transition-colors" />
                            <span className="text-[7px] sm:text-[8px] font-bold text-purple-400/40 uppercase tracking-wider group-hover/photo:text-purple-400/70 transition-colors">Photo</span>
                          </>
                        )}
                      </button>
                      <input ref={injectPhotoRef} type="file" accept="image/*" className="hidden" onChange={async (e) => { const f = e.target.files?.[0]; if (f) await handleInjectPhotoSelect(f); e.target.value = ''; }} />
                      
                      <div className="flex-1">
                        <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1 block">Player Name</label>
                        <input 
                          type="text" 
                          value={injectForm.name} 
                          onChange={e => setInjectForm(f => ({...f, name: e.target.value}))} 
                          placeholder="e.g. K. Mbapp├⌐" 
                          className="w-full bg-white/[0.03] border border-white/8 rounded-xl py-3 px-4 text-white font-bold text-sm placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/30 transition-all" 
                        />
                      </div>
                    </div>

                    {/* Club + Position */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1 block">Club</label>
                        <select value={injectForm.club} onChange={e => setInjectForm(f => ({...f, club: e.target.value}))} className="w-full bg-white/[0.03] border border-white/8 rounded-xl py-2.5 px-3 text-white text-sm font-bold focus:outline-none focus:ring-1 focus:ring-purple-500/50 appearance-none cursor-pointer">
                          {PL_CLUBS.map(c => <option key={c.code} value={c.code} className="bg-[#0a0a0c] text-white">{c.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1 block">Position</label>
                        <select value={injectForm.position} onChange={e => setInjectForm(f => ({...f, position: e.target.value as any}))} className="w-full bg-white/[0.03] border border-white/8 rounded-xl py-2.5 px-3 text-white text-sm font-bold focus:outline-none focus:ring-1 focus:ring-purple-500/50 appearance-none cursor-pointer">
                          {['GK','DEF','MID','FWD'].map(p => <option key={p} value={p} className="bg-[#0a0a0c] text-white">{p}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Sliders */}
                    <div className="space-y-4 mb-6">
                      <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">Cost</label>
                          <span className="text-sm font-black text-purple-400 tabular-nums">┬ú{injectForm.cost_millions.toFixed(1)}M</span>
                        </div>
                        <input type="range" min={4.0} max={15.0} step={0.1} value={injectForm.cost_millions} onChange={e => setInjectForm(f => ({...f, cost_millions: parseFloat(e.target.value)}))} className="w-full accent-purple-500 h-1.5 rounded-full bg-white/5 cursor-pointer" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">Ability</label>
                            <span className="text-sm font-black text-purple-400 tabular-nums">{injectForm.overall_ability}</span>
                          </div>
                          <input type="range" min={50} max={100} step={1} value={injectForm.overall_ability} onChange={e => setInjectForm(f => ({...f, overall_ability: parseInt(e.target.value)}))} className="w-full accent-purple-500 h-1.5 rounded-full bg-white/5 cursor-pointer" />
                        </div>
                        <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">Form</label>
                            <span className="text-sm font-black text-purple-400 tabular-nums">{injectForm.base_form.toFixed(1)}</span>
                          </div>
                          <input type="range" min={1.0} max={10.0} step={0.1} value={injectForm.base_form} onChange={e => setInjectForm(f => ({...f, base_form: parseFloat(e.target.value)}))} className="w-full accent-purple-500 h-1.5 rounded-full bg-white/5 cursor-pointer" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1 block">Expectation Status</label>
                        <select value={injectForm.expectation_status} onChange={e => setInjectForm(f => ({...f, expectation_status: e.target.value}))} className="w-full bg-white/[0.03] border border-white/8 rounded-xl py-2.5 px-3 text-white text-sm font-bold focus:outline-none focus:ring-1 focus:ring-purple-500/50 appearance-none cursor-pointer">
                          {['Hot_Streak','Overperforming','Expected','Underperforming'].map(s => <option key={s} value={s} className="bg-[#0a0a0c] text-white">{s.replace('_', ' ')}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <button 
                      onClick={handleInjectSubmit} 
                      disabled={!injectForm.name.trim()} 
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 bg-[length:200%_100%] text-white font-black text-base sm:text-lg uppercase tracking-widest hover:scale-[1.01] active:scale-[0.98] transition-all shadow-[0_4px_30px_rgba(176,38,255,0.3)] flex items-center justify-center gap-3 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 border border-purple-400/20"
                    >
                      <FlaskConical className="w-5 h-5" />
                      INJECT INTO MATRIX
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
