import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

import SceneWrapper from './components/SceneWrapper';
import Typewriter from './components/Typewriter';
import AssistantChat from './components/AssistantChat';
import CTAButtons, { PrimaryButton } from './components/CTAButtons';

// Ganti dengan nomor WhatsApp Lexy (format internasional tanpa +)
const WA_NUMBER = '6281234567890';

const App = () => {
  const [scene, setScene] = useState(1);
  const [showScene1CTA, setShowScene1CTA] = useState(false);
  const [confessionReady, setConfessionReady] = useState(false);

  // Prebuild WhatsApp link
  const waLink = useMemo(() => {
    const msg = 'Aku udah liat web-nya…';
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scene]);

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="sr-only">Sebuah Pesan dari Lexy (via Asisten Putra)</header>
      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div key="scene-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="relative h-screen w-full">
              <div className="absolute inset-0" aria-hidden>
                <Spline
                  scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <SceneWrapper keyId="s1">
                <div className="text-center">
                  <Typewriter
                    lines={[
                      'Halo...',
                      'Ini Disa kan?',
                    ]}
                    typingSpeed={55}
                    lineDelay={1200}
                    onComplete={() => setShowScene1CTA(true)}
                  />
                  {showScene1CTA && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6">
                      <PrimaryButton onClick={() => setScene(2)}>Ya, ini aku</PrimaryButton>
                    </motion.div>
                  )}
                </div>
              </SceneWrapper>
            </div>
          </motion.div>
        )}

        {scene === 2 && (
          <SceneWrapper keyId="s2">
            <div className="space-y-6">
              <AssistantChat
                lines={[
                  "Kenalin, aku 'Putra'.",
                  "Aku 'asisten' khusus.",
                ]}
              />
              <CTAButtons
                primaryLabel="Asisten khusus? Maksudnya?"
                onPrimary={() => setScene(3)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 3 && (
          <SceneWrapper keyId="s3">
            <div className="space-y-6">
              <AssistantChat
                highlightLexy
                lines={[
                  'Aku dibuat khusus untuk satu misi…',
                  'Menyampaikan pesan dari seseorang yang terlalu malu buat ngomong ini langsung ke kamu.',
                  'Orang itu adalah... Lexy.',
                ]}
              />
              <CTAButtons
                primaryLabel="Lexy? Ada apa?"
                onPrimary={() => setScene(4)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 4 && (
          <SceneWrapper keyId="s4">
            <div className="absolute inset-0" aria-hidden>
              <div className="absolute -top-6 left-0 right-0 h-56 blur-2xl opacity-20 animate-[pulse_6s_ease-in-out_infinite]">
                <pre className="text-xs md:text-sm whitespace-pre-wrap text-emerald-400/80">{`// thoughts.js\nconst heart = (x) => x === 'Disa' ? 'deg-degan' : 'normal'\n// <code/> floating in thoughts…`}</pre>
              </div>
              <div className="absolute bottom-10 right-6 w-64 h-32 bg-cyan-500/10 blur-3xl rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="space-y-4 relative z-10">
              <AssistantChat
                lines={[
                  'Nah, itu dia. Ini bagian yang agak rumit.',
                  "Mungkin kamu bingung, 'Kenapa nggak ngomong langsung?'",
                  "Lexy bilang, dia... you know lah... 'gak tenang jirr'.",
                  'Pikirannya ke kamu terus, tapi dia juga takut banget.',
                ]}
              />
              <CTAButtons
                primaryLabel="Takut kenapa?"
                onPrimary={() => setScene(5)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 5 && (
          <SceneWrapper keyId="s5">
            <div className="space-y-4">
              <AssistantChat
                lines={[
                  "Takut dikira 'aneh' 🗿.",
                  'Takut awkward.',
                  'Dan yang paling dia takutin... takut ditolak. Malu.',
                  "Dia bilang, dia lebih jago ngomong sama komputer daripada ngomongin perasaan.",
                  'Dia bisa ngoding website ini berjam-jam...',
                  "...tapi buat ngetik 'Hai, apa kabar?' ke kamu aja, katanya dia mikir dua jam.",
                ]}
              />
              <CTAButtons
                primaryLabel="...Jadi dia bikin ini semua?"
                onPrimary={() => setScene(6)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 6 && (
          <SceneWrapper keyId="s6">
            <div className="space-y-4">
              <AssistantChat
                lines={[
                  'Tepat sekali.',
                  'Dia bikin ini semua karena ada sesuatu yang pengen banget dia sampaikan.',
                  "Dia minta aku jelasin 'kenapa' dia jadi segininya.",
                  "Ini bukan soal 'kenangan' heboh. Cuma hal-hal 'biasa aja' yang Lexy notice dari kamu.",
                ]}
              />
              <CTAButtons
                primaryLabel="Hal 'biasa aja' apa?"
                onPrimary={() => setScene(7)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 7 && (
          <SceneWrapper keyId="s7">
            <div className="space-y-5">
              <AssistantChat
                lines={['Dia ninggalin beberapa catatan. Coba kamu buka.']}
              />
              <CardsSection onAllOpened={() => {}} />
            </div>
          </SceneWrapper>
        )}

        {scene === 8 && (
          <SceneWrapper keyId="s8">
            <div className="text-center space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white/80"
              >
                Ini Lexy, tapi 'disuarakan' oleh Putra.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="space-y-3 font-medium italic tracking-wide text-xl md:text-2xl"
              >
                <div>Jadi... ya, karena semua hal 'biasa aja' tadi...</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  ...yang bikin kamu jadi 'luar biasa' di mata Lexy.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                  Ini Lexy, tapi 'disuarakan' oleh Putra.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                  Terus terang aja...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                  <span className="font-bold text-2xl md:text-3xl">Aku suka sama kamu, Disa.</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
                  Udah lama banget.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }}>
                  Maaf kalau caranya ribet gini. Aku malu dan nggak tau cara lain.
                </motion.div>
              </motion.div>
              <DelayedDots onReady={() => setConfessionReady(true)} />
              {confessionReady && (
                <CTAButtons
                  primaryLabel="..."
                  onPrimary={() => setScene(9)}
                />
              )}
            </div>
          </SceneWrapper>
        )}

        {scene === 9 && (
          <SceneWrapper keyId="s9">
            <div className="space-y-6">
              <AssistantChat
                lines={[
                  "Oke, misi 'Putra' selesai. Sekarang, bolanya di kamu.",
                  'Makasih ya udah mau nge-klik sejauh ini. Ini project-nya Lexy yang paling bikin deg-degan, katanya.',
                ]}
              />
              <CTAButtons
                primaryLabel="Balas ke Lexy (via WhatsApp)"
                onPrimary={() => window.open(waLink, '_blank')}
                secondaryLabel="Tutup Halaman Ini"
                onSecondary={() => {
                  window.close();
                  setTimeout(() => {
                    window.location.href = 'about:blank';
                  }, 200);
                }}
              />
            </div>
          </SceneWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

const DelayedDots = ({ onReady }) => {
  useEffect(() => {
    const t = setTimeout(() => onReady && onReady(), 3000);
    return () => clearTimeout(t);
  }, [onReady]);
  return null;
};

// Cards for Scene 7 (inline to keep component count concise)
const CardsSection = ({ onAllOpened }) => {
  const items = [
    {
      title: 'Cara Kamu Ketawa',
      desc: 'Lexy bilang, dia nggak tau kenapa, tapi dia suka aja dengerinnya. Katanya tulus.',
    },
    {
      title: 'Cara Kamu Serius Mendengarkan',
      desc: 'Dia notice kalau kamu itu pendengar yang baik. Katanya, itu langka.',
    },
    {
      title: 'Cara Kamu Baik ke Semua Orang',
      desc: "Ini yang paling dia inget. Kamu 'baik beneran', bukan 'baik ada maunya'.",
    },
  ];

  const [opened, setOpened] = useState(items.map(() => false));

  const allOpened = opened.every(Boolean);

  useEffect(() => {
    if (allOpened) onAllOpened && onAllOpened();
  }, [allOpened, onAllOpened]);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map((it, idx) => (
          <FlipCard
            key={`card-${idx}`}
            title={it.title}
            desc={it.desc}
            opened={opened[idx]}
            onOpen={() => setOpened((prev) => prev.map((v, i) => (i === idx ? true : v)))}
          />)
        )}
      </div>
      <div className="pt-2">
        {allOpened ? (
          <PrimaryButton onClick={() => window.dispatchEvent(new CustomEvent('cards-continue'))}>
            Oh... oke. Terus?
          </PrimaryButton>
        ) : (
          <p className="text-center text-white/60 text-sm">Buka semua kartunya dulu ya</p>
        )}
      </div>
      {/* Listen for continue to move to next scene */}
      <CardsSceneBridge />
    </div>
  );
};

const CardsSceneBridge = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const handler = () => setReady(true);
    window.addEventListener('cards-continue', handler);
    return () => window.removeEventListener('cards-continue', handler);
  }, []);
  // when ready, push to Scene 8
  useEffect(() => {
    if (ready) {
      // Find nearest setScene via hash trick
      // Simpler: navigate by setting location hash and listening in parent is overkill.
      // We will directly move using a microtask the parent reads via custom event below.
      window.dispatchEvent(new CustomEvent('go-scene-8'));
    }
  }, [ready]);
  return null;
};

const FlipCard = ({ title, desc, opened, onOpen }) => {
  return (
    <motion.button
      onClick={() => !opened && onOpen()}
      whileTap={{ scale: 0.98 }}
      className="relative w-full h-36 md:h-40 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          {!opened ? (
            <motion.div
              key="closed"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full flex items-center justify-center"
            >
              <span className="text-white/70">Ketuk untuk membuka</span>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full p-4 text-left"
            >
              <div className="font-semibold">{title}</div>
              <div className="text-white/70 text-sm mt-1 leading-relaxed">{desc}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

// Parent listens to proceed from Cards
if (typeof window !== 'undefined') {
  window.addEventListener('go-scene-8', () => {
    // This event is handled in the root by replacing location hash to trigger effect
    // Instead, we will search for a global hook. Simpler approach:
    const evt = new CustomEvent('set-scene', { detail: 8 });
    window.dispatchEvent(evt);
  });
}

// Bridge: listen set-scene and update local scene
const SceneEventBridge = ({ setScene }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e?.detail) setScene(e.detail);
    };
    window.addEventListener('set-scene', handler);
    return () => window.removeEventListener('set-scene', handler);
  }, [setScene]);
  return null;
};

export default function AppWithBridge() {
  const [scene, setScene] = useState(1);
  return (
    <AppContent scene={scene} setScene={setScene} />
  );
}

function AppContent({ scene, setScene }) {
  // Reuse the main App logic but expose scene setter via bridge
  const [showScene1CTA, setShowScene1CTA] = useState(false);
  const [confessionReady, setConfessionReady] = useState(false);

  const waLink = useMemo(() => {
    const msg = 'Aku udah liat web-nya…';
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scene]);

  return (
    <div className="bg-black min-h-screen text-white">
      <SceneEventBridge setScene={setScene} />
      <header className="sr-only">Sebuah Pesan dari Lexy (via Asisten Putra)</header>
      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div key="scene-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="relative h-screen w-full">
              <div className="absolute inset-0" aria-hidden>
                <Spline
                  scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <SceneWrapper keyId="s1">
                <div className="text-center">
                  <Typewriter
                    lines={[
                      'Halo...',
                      'Ini Disa kan?',
                    ]}
                    typingSpeed={55}
                    lineDelay={1200}
                    onComplete={() => setShowScene1CTA(true)}
                  />
                  {showScene1CTA && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6">
                      <PrimaryButton onClick={() => setScene(2)}>Ya, ini aku</PrimaryButton>
                    </motion.div>
                  )}
                </div>
              </SceneWrapper>
            </div>
          </motion.div>
        )}

        {scene === 2 && (
          <SceneWrapper keyId="s2">
            <div className="space-y-6">
              <AssistantChat lines={["Kenalin, aku 'Putra'.", "Aku 'asisten' khusus."]} />
              <CTAButtons primaryLabel="Asisten khusus? Maksudnya?" onPrimary={() => setScene(3)} />
            </div>
          </SceneWrapper>
        )}

        {scene === 3 && (
          <SceneWrapper keyId="s3">
            <div className="space-y-6">
              <AssistantChat
                highlightLexy
                lines={[
                  'Aku dibuat khusus untuk satu misi…',
                  'Menyampaikan pesan dari seseorang yang terlalu malu buat ngomong ini langsung ke kamu.',
                  'Orang itu adalah... Lexy.',
                ]}
              />
              <CTAButtons primaryLabel="Lexy? Ada apa?" onPrimary={() => setScene(4)} />
            </div>
          </SceneWrapper>
        )}

        {scene === 4 && (
          <SceneWrapper keyId="s4">
            <div className="absolute inset-0" aria-hidden>
              <div className="absolute -top-6 left-0 right-0 h-56 blur-2xl opacity-20 animate-[pulse_6s_ease-in-out_infinite]">
                <pre className="text-xs md:text-sm whitespace-pre-wrap text-emerald-400/80">{`// thoughts.js\nconst heart = (x) => x === 'Disa' ? 'deg-degan' : 'normal'\n// <code/> floating in thoughts…`}</pre>
              </div>
              <div className="absolute bottom-10 right-6 w-64 h-32 bg-cyan-500/10 blur-3xl rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="space-y-4 relative z-10">
              <AssistantChat
                lines={[
                  'Nah, itu dia. Ini bagian yang agak rumit.',
                  "Mungkin kamu bingung, 'Kenapa nggak ngomong langsung?'",
                  "Lexy bilang, dia... you know lah... 'gak tenang jirr'.",
                  'Pikirannya ke kamu terus, tapi dia juga takut banget.',
                ]}
              />
              <CTAButtons primaryLabel="Takut kenapa?" onPrimary={() => setScene(5)} />
            </div>
          </SceneWrapper>
        )}

        {scene === 5 && (
          <SceneWrapper keyId="s5">
            <div className="space-y-4">
              <AssistantChat
                lines={[
                  "Takut dikira 'aneh' 🗿.",
                  'Takut awkward.',
                  'Dan yang paling dia takutin... takut ditolak. Malu.',
                  "Dia bilang, dia lebih jago ngomong sama komputer daripada ngomongin perasaan.",
                  'Dia bisa ngoding website ini berjam-jam...',
                  "...tapi buat ngetik 'Hai, apa kabar?' ke kamu aja, katanya dia mikir dua jam.",
                ]}
              />
              <CTAButtons primaryLabel="...Jadi dia bikin ini semua?" onPrimary={() => setScene(6)} />
            </div>
          </SceneWrapper>
        )}

        {scene === 6 && (
          <SceneWrapper keyId="s6">
            <div className="space-y-4">
              <AssistantChat
                lines={[
                  'Tepat sekali.',
                  'Dia bikin ini semua karena ada sesuatu yang pengen banget dia sampaikan.',
                  "Dia minta aku jelasin 'kenapa' dia jadi segininya.",
                  "Ini bukan soal 'kenangan' heboh. Cuma hal-hal 'biasa aja' yang Lexy notice dari kamu.",
                ]}
              />
              <CTAButtons primaryLabel="Hal 'biasa aja' apa?" onPrimary={() => setScene(7)} />
            </div>
          </SceneWrapper>
        )}

        {scene === 7 && (
          <SceneWrapper keyId="s7">
            <div className="space-y-5">
              <AssistantChat lines={['Dia ninggalin beberapa catatan. Coba kamu buka.']} />
              <CardsSection onAllOpened={() => {}} />
            </div>
          </SceneWrapper>
        )}

        {scene === 8 && (
          <SceneWrapper keyId="s8">
            <div className="text-center space-y-5">
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-white/80">
                Ini Lexy, tapi 'disuarakan' oleh Putra.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} className="space-y-3 font-medium italic tracking-wide text-xl md:text-2xl">
                <div>Jadi... ya, karena semua hal 'biasa aja' tadi...</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  ...yang bikin kamu jadi 'luar biasa' di mata Lexy.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                  Ini Lexy, tapi 'disuarakan' oleh Putra.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                  Terus terang aja...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                  <span className="font-bold text-2xl md:text-3xl">Aku suka sama kamu, Disa.</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
                  Udah lama banget.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }}>
                  Maaf kalau caranya ribet gini. Aku malu dan nggak tau cara lain.
                </motion.div>
              </motion.div>
              <DelayedDots onReady={() => setConfessionReady(true)} />
              {confessionReady && (
                <CTAButtons primaryLabel="..." onPrimary={() => setScene(9)} />
              )}
            </div>
          </SceneWrapper>
        )}

        {scene === 9 && (
          <SceneWrapper keyId="s9">
            <div className="space-y-6">
              <AssistantChat
                lines={[
                  "Oke, misi 'Putra' selesai. Sekarang, bolanya di kamu.",
                  'Makasih ya udah mau nge-klik sejauh ini. Ini project-nya Lexy yang paling bikin deg-degan, katanya.',
                ]}
              />
              <CTAButtons
                primaryLabel="Balas ke Lexy (via WhatsApp)"
                onPrimary={() => window.open(waLink, '_blank')}
                secondaryLabel="Tutup Halaman Ini"
                onSecondary={() => {
                  window.close();
                  setTimeout(() => {
                    window.location.href = 'about:blank';
                  }, 200);
                }}
              />
            </div>
          </SceneWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}
