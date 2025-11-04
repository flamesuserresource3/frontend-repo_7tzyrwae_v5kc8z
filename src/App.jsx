import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

import SceneWrapper from './components/SceneWrapper';
import Typewriter from './components/Typewriter';
import AssistantChat from './components/AssistantChat';
import CTAButtons, { PrimaryButton } from './components/CTAButtons';

const WA_NUMBER = '6281234567890'; // Ganti dengan nomor WhatsApp tujuan (format internasional tanpa +)

const App = () => {
  const [scene, setScene] = useState(1);
  const [showScene1CTA, setShowScene1CTA] = useState(false);
  const [confessionReady, setConfessionReady] = useState(false);

  // Prebuild WhatsApp link
  const waLink = useMemo(() => {
    const msg = 'Aku udah baca web-nya...';
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scene]);

  return (
    <div className="bg-black min-h-screen text-white">
      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div key="scene-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="relative h-screen w-full">
              <div className="absolute inset-0" aria-hidden>
                <Spline
                  scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
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
                  'Oke, syukurlah kalau benar.',
                  "Kenalin, aku 'Putra'.",
                  "Aku... semacam asisten virtual. Tapi aku bukan ChatGPT atau Gemini ya. Aku 'asisten' khusus.",
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
                  'Iya. Aku dibuat khusus untuk satu misi hari ini.',
                  'Misi untuk menyampaikan pesan dari seseorang.',
                  'Seseorang yang... jujur aja... terlalu malu buat ngomong ini langsung ke kamu.',
                  'Orang itu adalah... Lexy.',
                ]}
              />
              <CTAButtons
                primaryLabel="Lexy? Kenapa dia?"
                onPrimary={() => setScene(4)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 4 && (
          <SceneWrapper keyId="s4">
            <div className="absolute inset-0 -z-0" aria-hidden>
              <div className="absolute -top-10 left-0 right-0 h-56 blur-2xl opacity-20 animate-[pulse_5s_ease-in-out_infinite]">
                <pre className="text-xs md:text-sm whitespace-pre-wrap text-green-400/80">
{`const love = () => {\n  return 'sincere';\n};\n// <code/> floating in thoughts...`}
                </pre>
              </div>
              <div className="absolute bottom-10 right-4 w-64 h-32 bg-cyan-500/10 blur-3xl rounded-full animate-[spin_18s_linear_infinite]" />
            </div>
            <div className="space-y-6 relative z-10">
              <AssistantChat
                lines={[
                  'Nah, itu dia! Dia itu... you know lah... seorang coder.',
                  'Dia bilang, dia lebih jago ngomong pakai JavaScript daripada ngomongin perasaan.',
                  'Dia (Lexy) yang bikin aku (website ini) dari nol, cuma buat kamu.',
                  "Karena dia udah terlalu lama nyimpen ini sendirian. Katanya dia 'gak tenang' mikirin kamu terus.",
                ]}
              />
              <CTAButtons
                primaryLabel="Nyimpen apa...?"
                onPrimary={() => setScene(5)}
              />
            </div>
          </SceneWrapper>
        )}

        {scene === 5 && (
          <SceneWrapper keyId="s5">
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
                <div>Terus terang aja...</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  <span className="font-bold text-2xl md:text-3xl">Aku suka sama kamu, Disa.</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                  Udah lama banget.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                  Aku malu dan takut banget ditolak. Aku nggak tau cara ngomongnya.
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>
                  Jadi... aku pakai cara yang paling aku bisa: Bikin ini buat kamu.
                </motion.div>
              </motion.div>
              <DelayedDots onReady={() => setConfessionReady(true)} />
              {confessionReady && (
                <CTAButtons
                  primaryLabel="..."
                  onPrimary={() => setScene(6)}
                />
              )}
            </div>
          </SceneWrapper>
        )}

        {scene === 6 && (
          <SceneWrapper keyId="s6">
            <div className="space-y-6">
              <AssistantChat
                lines={[
                  "Oke, misi 'Putra' selesai.",
                  'Sekarang, bolanya di kamu.',
                  "Nggak usah buru-buru. Nggak perlu dijawab di web ini juga.",
                  'Tapi dia (Lexy) dan aku berharap banget kamu kasih kabar... apapun itu jawabannya.',
                  'Makasih ya udah mau dengerin.',
                ]}
              />
              <CTAButtons
                primaryLabel="Balas ke Lexy (via WhatsApp)"
                onPrimary={() => window.open(waLink, '_blank')}
                secondaryLabel="Tutup Halaman Ini"
                onSecondary={() => {
                  window.close();
                  // fallback
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

export default App;
