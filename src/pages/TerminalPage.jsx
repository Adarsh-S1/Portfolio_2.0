import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Palette, X } from 'lucide-react';

const asciiArtDesktop = ` █████╗ ██████╗  █████╗ ██████╗ ███████╗██╗  ██╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║██║  ██║███████║██████╔╝███████╗███████║
██╔══██║██║  ██║██╔══██║██╔══██╗╚════██║██╔══██║
██║  ██║██████╔╝██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`;

const asciiArtMobile = `┌──────────────────────┐
│  ╔═╗╔╦╗╔═╗╦═╗╔═╗╦ ╦ │
│  ╠═╣ ║║╠═╣╠╦╝╚═╗╠═╣ │
│  ╩ ╩═╩╝╩ ╩╩╚═╚═╝╩ ╩ │
└──────────────────────┘`;

export const TerminalPage = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('default');
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [outputs, setOutputs] = useState([]);

  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('terminal-mode');
    document.documentElement.classList.add('terminal-mode');
    return () => {
      document.body.classList.remove('terminal-mode');
      document.documentElement.classList.remove('terminal-mode');
    };
  }, []);

  useEffect(() => {
    const mobile = window.innerWidth < 500;
    const ascii = mobile ? asciiArtMobile : asciiArtDesktop;
    const divider = mobile ? '──────────────────────────' : '─────────────────────────────────────────────────';
    const tagline = mobile ? 'AI • Robotics • IoT' : 'AI & Data Science • Robotics • IoT';

    setOutputs([
      {
        id: 'welcome',
        type: 'welcome',
        content: (
          <div className="space-y-2 mb-4 font-mono min-w-0">
            <pre className="terminal-ascii text-[#d4843e] font-bold text-[10px] sm:text-sm">
              {ascii}
            </pre>
            <div className="text-zinc-500 break-all">{divider}</div>
            <div className="text-zinc-400 font-bold">Interactive Terminal Resume</div>
            <div className="text-zinc-500">{tagline}</div>
            <div className="text-zinc-500 break-all">{divider}</div>
            <div className="text-zinc-300 mt-2">
              Type <span className="text-emerald-400 font-bold">'help'</span> for available commands | Press <span className="text-emerald-400 font-bold">'tab'</span> for auto-complete
            </div>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [outputs]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newOutputs = [
      ...outputs,
      { id: Date.now() + '-cmd', type: 'cmd', content: `➜ ${trimmed}` },
    ];

    setHistory(prev => [...prev, trimmed]);
    setHistoryIdx(-1);
    setInputVal('');

    const [cmd, ...args] = trimmed.toLowerCase().split(' ');

    switch (cmd) {
      case 'help':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="space-y-3 font-mono text-sm py-2">
              <div className="text-yellow-300 font-bold">🚀 Available Commands:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-200 break-words">
                <div><span className="text-emerald-400 font-bold">help</span> - Show this help message</div>
                <div><span className="text-emerald-400 font-bold">about</span> - Professional summary</div>
                <div><span className="text-emerald-400 font-bold">skills</span> - Technical expertise</div>
                <div><span className="text-emerald-400 font-bold">experience</span> - Show projects</div>
                <div><span className="text-emerald-400 font-bold">education</span> - Educational background</div>
                <div><span className="text-emerald-400 font-bold">contact</span> - Contact info</div>
                <div><span className="text-emerald-400 font-bold">matrix</span> - Digital rain animation</div>
                <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</div>
                <div><span className="text-emerald-400 font-bold">exit</span> - Return to portfolio</div>
              </div>
            </div>
          ),
        });
        break;

      case 'about':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="p-4 border border-amber-500/50 bg-amber-500/10 text-amber-200 font-mono text-sm space-y-2 my-2">
              <div className="font-bold text-amber-400">✨ About Me</div>
              <p>B.Tech AI & Data Science student at Jyothi Engineering College, Kerala.</p>
              <p>Passionate about building innovative AI, Robotics, and IoT solutions with Python, PyTorch, TensorFlow, Flutter, and MongoDB.</p>
            </div>
          ),
        });
        break;

      case 'skills':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="space-y-2 font-mono text-sm my-2 text-cyan-300">
              <div className="font-bold text-cyan-400">💻 Technical Skills:</div>
              <div>• Languages: Python, C, Java</div>
              <div>• AI/ML: PyTorch, TensorFlow, LangChain, RAG Pipelines</div>
              <div>• Mobile & Web: Flutter, Flask</div>
              <div>• Databases: MongoDB Vector Search, Firebase, MySQL</div>
              <div>• Hardware: Raspberry Pi 5, ESP32, Robotics Fabrication</div>
            </div>
          ),
        });
        break;

      case 'experience':
      case 'projects':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="space-y-2 font-mono text-sm my-2 text-pink-300">
              <div className="font-bold text-pink-400">🚀 Key Projects:</div>
              <div>1. Academic RAG Pipeline (LLM Tool + MongoDB Vector Search + n8n)</div>
              <div>2. Interactive AI Santa (Human-sized Robot + Computer Vision)</div>
              <div>3. Hearing Aid (Bluetooth IoT OLED Display + ESP32)</div>
              <div>4. Smart Buddy (Autonomous Human-following Toy Car + Raspberry Pi 5)</div>
            </div>
          ),
        });
        break;

      case 'education':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="font-mono text-sm my-2 text-emerald-300">
              <div className="font-bold text-emerald-400">🎓 Education:</div>
              <div>B.Tech in Artificial Intelligence & Data Science</div>
              <div>Jyothi Engineering College, Kerala (2022 - 2026) | CGPA: 8.11 / 10</div>
            </div>
          ),
        });
        break;

      case 'contact':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="space-y-1 font-mono text-sm my-2 text-yellow-300">
              <div className="font-bold text-yellow-400">📫 Contact Info:</div>
              <div>Email: adarshs112004@gmail.com</div>
              <div>GitHub: https://github.com/Adarsh-S1</div>
              <div>LinkedIn: https://www.linkedin.com/in/adarsh-s-326a97311/</div>
            </div>
          ),
        });
        break;

      case 'matrix':
        setMatrixActive(true);
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: <div className="text-emerald-400 font-mono">Starting Matrix effect... (Type 'stop-matrix' or 'clear' to exit)</div>,
        });
        break;

      case 'stop-matrix':
        setMatrixActive(false);
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: <div className="text-zinc-400 font-mono">Matrix effect stopped.</div>,
        });
        break;

      case 'clear':
        setOutputs([]);
        setMatrixActive(false);
        return;

      case 'exit':
      case 'quit':
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: <div className="text-[#66d9ef] font-mono font-bold">Returning to portfolio...</div>,
        });
        setTimeout(() => navigate('/'), 600);
        break;

      default:
        newOutputs.push({
          id: Date.now() + '-out',
          type: 'out',
          content: (
            <div className="text-rose-400 font-mono text-sm">
              Command not found: '{trimmed}'. Type <span className="text-emerald-400 font-bold">'help'</span> for available commands.
            </div>
          ),
        });
    }

    setOutputs(newOutputs);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx < history.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const cmds = ['help', 'about', 'skills', 'experience', 'education', 'contact', 'clear', 'matrix', 'exit'];
      const match = cmds.find(c => c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  const themeClasses = {
    default: 'bg-[#121212] text-[#00ff66]',
    dracula: 'dracula-theme',
    solarized: 'solarized-theme',
    nord: 'nord-theme',
  }[theme];

  return (
    <div className="terminal-app font-mono selection:bg-[#00ff66] selection:text-black">
      <div className={`terminal-window ${themeClasses}`}>
        <div className="terminal-window-header bg-zinc-800 text-white px-3 sm:px-4 py-3 border-b-4 border-black flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-500 border border-black inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 border border-black inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 border border-black inline-block" />
          </div>

          <div className="terminal-title-text font-bold text-xs sm:text-sm tracking-wide text-zinc-300">
            adarsh@portfolio: ~/resume
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setThemeModalOpen(true)}
              title="Change Theme"
              className="text-zinc-300 hover:text-amber-400 transition-colors"
            >
              <Palette className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/')}
              title="Back to portfolio"
              className="text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onClick={() => inputRef.current?.focus()}
          className="terminal-window-body flex-1 p-4 sm:p-6 space-y-3 font-mono text-sm leading-relaxed"
        >
          {matrixActive && (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-mono text-xs animate-pulse mb-4">
              01000001 01000100 01000001 01010010 01010011 01001000 -- MATRIX RAIN STREAM ACTIVE
            </div>
          )}

          {outputs.map(out => (
            <div key={out.id}>{out.content}</div>
          ))}

          {/* Interactive Input Prompt Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold">➜</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 bg-transparent outline-none font-mono text-sm border-none focus:ring-0 p-0"
            />
          </div>
        </div>
      </div>

      {/* Theme Switcher Modal */}
      {themeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border-4 border-white p-6 max-w-sm w-full font-mono text-white shadow-[8px_8px_0px_#fff]">
            <div className="flex justify-between items-center mb-4 border-b border-zinc-700 pb-2">
              <h3 className="text-lg font-bold text-amber-400">Select Terminal Theme</h3>
              <button onClick={() => setThemeModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {[
                { id: 'default', label: 'Default Dark' },
                { id: 'dracula', label: 'Dracula Theme' },
                { id: 'solarized', label: 'Solarized Theme' },
                { id: 'nord', label: 'Nord Theme' },
              ].map(th => (
                <button
                  key={th.id}
                  onClick={() => {
                    setTheme(th.id);
                    setThemeModalOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 border-2 border-zinc-700 hover:border-amber-400 transition-colors font-bold ${
                    theme === th.id ? 'bg-amber-500 text-black border-white' : 'bg-zinc-800'
                  }`}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalPage;
