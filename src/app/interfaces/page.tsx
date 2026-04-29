'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight,
  Zap,
  Monitor,
  Fingerprint
} from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { KanbanSimulator } from '@/components/interactive/KanbanSimulator'
import { MarketplaceDataGrid } from '@/components/interactive/MarketplaceDataGrid'
import { SaaSFlowSimulator } from '@/components/interactive/SaaSFlowSimulator'
import { InstitutionalMiniApp } from '@/components/interactive/InstitutionalMiniApp'
import { EcommerceMiniApp } from '@/components/interactive/EcommerceMiniApp'
import { BookingMiniApp } from '@/components/interactive/BookingMiniApp'
import { Accordion } from '@/components/ui/Accordion'
import { SidebarNav } from '@/components/layout/SidebarNav'

const INTERFACES_SECTIONS = [
  { id: 'mini-apps',     label: 'Mini-Apps',      sublabel: 'Interaction Design' },
  { id: 'design-system', label: 'Design System',  sublabel: 'Tokens & Biblioteca' },
  { id: 'documentacao',  label: 'Documentação',   sublabel: 'Diretrizes & Referência' },
]

export default function InterfacesPage() {
  return (
    <div className="flex flex-col gap-24">
      <SidebarNav sections={INTERFACES_SECTIONS} title="Interfaces" />

      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-indigo/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* ── HERO ── */}
      <section className="pt-40 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="flex items-center gap-3 mb-10">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse" />
             <span className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">Arquitetura de Interfaces</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
            Design de Produtos Corporativos &<br />
            <span className="text-foreground/40">Engenharia de UI.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
             <div className="lg:col-span-5 space-y-12">
                <p className="text-lg text-foreground/50 leading-relaxed font-light">
                   Interfaces projetadas para ambientes de alta criticidade. Desenvolvemos produtos digitais que traduzem lógica de negócios complexa em experiências intuitivas e sem fricção para SaaS e softwares industriais.
                </p>
                
                {/* SUMÁRIO INTERATIVO */}
                <div className="flex flex-wrap gap-4">
                   <button 
                     onClick={() => document.getElementById('mini-apps')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Mini-Apps
                   </button>
                   <button 
                     onClick={() => document.getElementById('design-system')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Design_System
                   </button>
                   <button 
                     onClick={() => document.getElementById('documentacao')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Documentação
                   </button>
                </div>
             </div>
             
             {/* PERFORMANCE INDICATORS */}
             <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {[
                  { label: 'LCP_Frontend', value: '<0.8s', color: 'text-brand-indigo' },
                  { label: 'Acessibilidade', value: 'WCAG', color: 'text-brand-success' },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
                     <p className="text-[9px] uppercase font-mono text-white/20 mb-2">{kpi.label}</p>
                     <p className={`text-4xl font-bold tracking-tighter ${kpi.color}`}>{kpi.value}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* ── PROJETOS: MINI-APPS INTERATIVOS ── */}
      <section id="mini-apps" className="container mx-auto px-6 pt-24 border-t border-white/5">
        <div className="mb-20 max-w-3xl">
           <span className="text-[10px] font-mono text-brand-indigo mb-4 block uppercase tracking-widest">Caso_03: INTERACTION_DESIGN</span>
           <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Componentes de Alta Interatividade</h2>
           <p className="text-foreground/50 leading-relaxed font-light text-base mb-8">
              Para softwares complexos, a interface deve ser mais que visual: deve ser funcional. Abaixo, exemplos de ferramentas interativas construídas para otimizar a tomada de decisão.
           </p>
           
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-success/5 border border-brand-success/20">
              <Zap className="w-4 h-4 text-brand-success" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Nota: Todos os componentes abaixo são funcionais (ver na prática)</span>
           </div>
        </div>

        <div className="flex flex-col gap-24 text-left">
           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Simulador de Kanban Automatizado</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Visualização de fluxo de trabalho industrial com lógica de arrastar e soltar (drag-drop) e atualização de status em tempo real.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <KanbanSimulator />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Engine de Planilhas Executivas</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Interface de grid leve com filtros avançados e cálculo dinâmico de margem, eliminando a dependência de arquivos Excel estáticos.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <MarketplaceDataGrid />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Experiência Mobile: SaaS de Agendamento</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Simulador de interface mobile (iPhone 15 Pro) para serviços de alto ticket. Foco em UX fluida, conversão direta e integração com Webhooks.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <SaaSFlowSimulator />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Arquitetura de Landing Page Corporativa</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Estrutura otimizada para conversão B2B, com hierarquia visual clara, copy escaneável e micro-interações que retêm a atenção.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <InstitutionalMiniApp />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Interface E-commerce de Alta Performance</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Layout orientado para conversão com foco na jornada do produto. Carrinho lateral dinâmico (sidecart) e destaque para urgência/provas sociais.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <EcommerceMiniApp />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Fluxo de Agendamento Inteligente (Booking)</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Step-by-step sem atrito para captura de leads e agendamentos. Redução do abandono de formulários com design responsivo.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <BookingMiniApp />
              </div>
           </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section id="design-system" className="container mx-auto px-6 pt-32 border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
           <div className="flex-1 space-y-8">
              <div>
                <span className="text-[10px] font-mono text-white/30 mb-4 block uppercase tracking-widest">Caso_04: DESIGN_SYSTEM</span>
                <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Ecossistema de Tokens</h2>
                <p className="text-foreground/50 leading-relaxed font-light text-base">
                  Construção de uma biblioteca de componentes escalável que garante consistência visual e velocidade de desenvolvimento em múltiplos produtos.
                </p>
              </div>
              
              <div className="space-y-4">
                 <Accordion title="Tokens de Design">
                    Foco em tipografia Bricolage Grotesque e tokens de cores OLED Dark para legibilidade máxima em ambientes industriais.
                 </Accordion>
                 <Accordion title="Componentes Atômicos">
                    Botões, inputs e grids padronizados para reduzir a dívida técnica de front-end.
                 </Accordion>
              </div>
           </div>

           <div className="flex-[1.5] w-full grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: 'Primary', color: 'bg-brand-primary' },
                { label: 'Blue', color: 'bg-brand-blue' },
                { label: 'Success', color: 'bg-brand-success' },
                { label: 'Indigo', color: 'bg-brand-indigo' },
                { label: 'Card', color: 'bg-white/5 border border-white/10' },
                { label: 'Text', color: 'bg-white text-black' },
              ].map((item, i) => (
                <div key={i} className="group relative">
                   <div className={`h-32 w-full rounded-2xl ${item.color} mb-4 transition-transform group-hover:scale-105`} />
                   <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── DOCUMENTAÇÃO & PLANO ── */}
      <section id="documentacao" className="container mx-auto px-6 pt-32 pb-32 border-t border-white/5">
         <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <span className="text-[10px] font-mono text-white/30 mb-4 block uppercase tracking-widest">Caso_05: DOCUMENTAÇÃO</span>
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Relatório de Interfaces e Design System</h2>
              <p className="text-foreground/50 leading-relaxed font-light text-base">
                Abordagens visuais, de layout e de código utilizadas no portfólio (Ecossistema Studio) para replicar a mesma identidade visual ("Tema Noite Sofisticado") em outros projetos.
              </p>
            </div>

            <div className="space-y-4">
               <Accordion title="1. Paleta de Cores (CSS Variables)">
                  <p className="mb-4 text-white/70">A interface é baseada em um modo noturno premium com um contraste alto de amarelo dourado. Adicione essas variáveis no seu CSS global (ex: globals.css) dentro da diretiva <code>@theme</code> ou <code>:root</code>:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4 text-white/50 text-sm">
                     <li><strong className="text-white">Fundo Principal (Background):</strong> #0A0A0A (Preto profundo)</li>
                     <li><strong className="text-white">Fundo de Cards (Card):</strong> #111827 (Azul/Slate muito escuro)</li>
                     <li><strong className="text-white">Texto Principal (Foreground):</strong> #F9FAFB (Quase branco)</li>
                     <li><strong className="text-white">Texto Secundário:</strong> #D1D5DB (Cinza claro/prata)</li>
                     <li><strong className="text-white">Cor de Destaque (Brand Primary):</strong> #FBBF24 (Amarelo Dourado)</li>
                     <li><strong className="text-white">Destaque Hover (Brand Hover):</strong> #F59E0B</li>
                     <li><strong className="text-white">Sombra/Glow (Brand Glow):</strong> rgba(251, 191, 36, 0.30)</li>
                  </ul>
                  <p className="text-sm text-white/70"><strong className="text-white">Dica de Fundo:</strong> Na tag <code>body</code>, foi utilizado um &quot;Grid Pattern&quot; muito sutil para dar um ar mais técnico e sofisticado.</p>
               </Accordion>

               <Accordion title="2. Tipografia e Estilização de Textos">
                  <p className="mb-4 text-white/70">A tipografia combina uma fonte sem serifa limpa para o corpo de texto e uma fonte monoespaçada (monospace) para detalhes e metadados.</p>
                  <ul className="list-disc pl-5 space-y-2 text-white/50 text-sm">
                     <li><strong className="text-white">Títulos Grandes (Hero/Seções):</strong> Utilizam as classes Tailwind <code>font-black</code>, <code>tracking-tighter</code>, <code>uppercase</code> e <code>italic</code>. A cor geralmente é branca.</li>
                     <li><strong className="text-white">Subtítulos:</strong> Texto menor com <code>italic</code> e às vezes borda lateral (<code>border-l-2 border-brand-primary/50 pl-4</code>).</li>
                     <li><strong className="text-white">Labels, Tags e Metadados:</strong> Texto minúsculo (<code>text-[10px]</code>), <code>font-mono</code>, <code>uppercase</code> e com um espaçamento alto entre letras (<code>tracking-[0.3em]</code>).</li>
                  </ul>
               </Accordion>

               <Accordion title="3. Animações e Efeitos (Framer Motion + CSS)">
                  <p className="mb-4 text-white/70">Dependências necessárias: <code>framer-motion lucide-react</code></p>
                  <ul className="list-disc pl-5 space-y-4 text-white/50 text-sm">
                     <li><strong className="text-white">Animações de Entrada (Scroll):</strong> Blocos envoltos no componente <code>&lt;motion.div&gt;</code> com <code>initial=&#123;&#123; opacity: 0, y: 20 &#125;&#125;</code> e <code>whileInView=&#123;&#123; opacity: 1, y: 0 &#125;&#125;</code>.</li>
                     <li><strong className="text-white">Cartões Executivos (.exec-card):</strong> Borda e sombra sutis no estado normal. No hover, a borda muda para amarelo e ganha um &quot;Glow&quot; (box-shadow) e leve efeito de levantar (translateY).</li>
                     <li><strong className="text-white">Efeito Neon Underline (.card-hover-neon):</strong> Barra inferior animada ao passar o mouse.</li>
                     <li><strong className="text-white">Botões com Haptic Touch (.haptic-touch):</strong> Classe <code>active:scale-[0.98]</code> para dar feedback de clique.</li>
                  </ul>
               </Accordion>

               <Accordion title="4. Estruturas de Layout e Componentes Chave">
                  <ul className="list-disc pl-5 space-y-4 text-white/50 text-sm">
                     <li><strong className="text-white">Ambient Glows:</strong> Uma div fixa atrás de tudo (<code>-z-40</code>) com uma elipse fora de foco (blur) para criar luz de fundo vazada.</li>
                     <li><strong className="text-white">Componente Bento Grid:</strong> Layout CSS Grid responsivo (<code>grid-cols-1 md:grid-cols-3</code>) com bolinhas estilizadas para listas.</li>
                     <li><strong className="text-white">Seção de Título/Cabeçalho:</strong> Uso de uma label com um traço colorido ao lado para introduzir seções.</li>
                     <li><strong className="text-white">Botões Hero (CTAs):</strong> Botão primário amarelo de forte sombra glow e secundário quase transparente com borda de alto contraste.</li>
                  </ul>
               </Accordion>

               <Accordion title="5. Resumo: Passos para Aplicar">
                  <ol className="list-decimal pl-5 space-y-2 text-white/50 text-sm">
                     <li>Instale as dependências.</li>
                     <li>Copie a paleta de cores para o CSS global, junto com o background do <code>body</code> e as classes <code>.exec-card</code>, <code>.card-hover-neon</code>.</li>
                     <li>Crie os wrappers <code>&lt;motion.div&gt;</code> para animações.</li>
                     <li>Utilize <code>font-mono</code> para metadados e componentes atômicos.</li>
                     <li>Encapsule ícones em divs arredondadas (<code>rounded-xl</code>) com bordas visíveis para padronização.</li>
                  </ol>
               </Accordion>
            </div>
         </div>
      </section>

    </div>
  )
}
