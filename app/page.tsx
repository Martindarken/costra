'use client'

import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BarChart3, Bot, Check, ChevronDown, CircleDollarSign,
  Database, Gauge, GitBranch, Layers3, Menu, Network, Search, ShieldCheck,
  Sparkles, Target, TrendingDown, X, Zap
} from 'lucide-react'

const features = [
  { icon: Network, tag: '01 · SEE', title: 'One map of your entire AI estate', text: 'Connect your enterprise structure to every AI workload, provider and model. Costra turns disconnected billing data into a living cost graph.', points: ['Business unit → product → application → workload', 'Provider and model-level visibility', 'Real-time ownership and allocation'] },
  { icon: Target, tag: '02 · ALLOCATE', title: 'Know who owns every euro', text: 'Stop debating where AI spend belongs. Costra automatically maps costs to the teams, products and workloads responsible for them.', points: ['Showback and chargeback ready', 'Allocation rules that survive imperfect tags', 'Unallocated spend surfaced immediately'] },
  { icon: Sparkles, tag: '03 · OPTIMIZE', title: 'AI finds the savings for you', text: 'Go beyond dashboards. Costra continuously identifies expensive models, inefficient workloads and optimization opportunities — with the financial impact attached.', points: ['Model routing opportunities', 'Prompt and token efficiency', 'Caching, GPU and infrastructure optimization'] },
  { icon: Bot, tag: '04 · EXPLAIN', title: 'Ask your cost data anything', text: 'Give finance, engineering and product teams a shared language for AI economics. Ask questions in plain English and get answers grounded in your data.', points: ['“Why did spend increase this month?”', '“What are our top five savings opportunities?”', '“What does Customer AI cost per request?”'] },
  { icon: ShieldCheck, tag: '05 · GOVERN', title: 'Put guardrails around AI growth', text: 'Set budgets, ownership and policies before AI spend becomes invisible technical debt.', points: ['Budget and forecast by owner', 'Policy violations and anomalies', 'Audit-ready reporting'] },
  { icon: TrendingDown, tag: '06 · PROVE', title: 'Turn savings into measurable results', text: 'Track identified opportunities, realized savings and unit economics over time. Make FinOps a growth enabler, not a monthly fire drill.', points: ['Savings pipeline and realized value', 'Cost per token, request or outcome', 'Executive-ready reporting'] },
]

const providers = ['OpenAI', 'Azure OpenAI', 'Anthropic', 'AWS Bedrock', 'Google Vertex AI', 'Azure', 'AWS', 'GCP', 'GPU / Kubernetes']

export default function Home() {
  const [menu, setMenu] = useState(false)
  const [faq, setFaq] = useState<number | null>(0)

  return <main>
    <nav className="topnav">
      <a href="#top" className="brand"><span className="brandMark">C</span><span>costra</span></a>
      <div className={`navlinks ${menu ? 'open' : ''}`}>
        <a href="#platform">Platform</a><a href="#features">Features</a><a href="#how">How it works</a><a href="#security">Security</a><a href="#pricing">Pricing</a>
        <a className="mobileCta" href="#demo">Book a demo <ArrowUpRight size={15}/></a>
      </div>
      <div className="navActions"><a className="login" href="#demo">Sign in</a><a className="navCta" href="#demo">Book a demo <ArrowRight size={15}/></a><button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button></div>
    </nav>

    <section id="top" className="hero">
      <div className="heroGlow"/>
      <div className="heroCopy">
        <div className="announcement"><span><Sparkles size={13}/> AI COST INTELLIGENCE</span><a href="#platform">Meet Costra <ArrowRight size={13}/></a></div>
        <h1>Your AI spend.<br/><em>Finally understood.</em></h1>
        <p className="heroText">Costra connects your enterprise, AI workloads and cloud costs into one intelligent cost graph — so you can see where every euro goes and automatically find where to save.</p>
        <div className="heroCtas"><a className="primary" href="#demo">Book a demo <ArrowRight size={17}/></a><a className="secondary" href="#platform">Explore the platform <ArrowUpRight size={16}/></a></div>
        <div className="trust"><span>Built for modern AI teams</span><i/><span>Multi-provider</span><i/><span>Enterprise-ready</span></div>
      </div>
      <DashboardMockup/>
    </section>

    <section className="logoStrip"><p>Connect the AI stack you already use</p><div>{providers.map(p=><span key={p}>{p}</span>)}</div></section>

    <section id="platform" className="platform section">
      <div className="sectionIntro"><div><p className="kicker">THE COSTRA PLATFORM</p><h2>From a messy AI bill<br/><span>to a clear business picture.</span></h2></div><p>AI economics are becoming too complex for spreadsheets. Costra creates the missing layer between your infrastructure, your AI workloads and the people accountable for the spend.</p></div>
      <div className="graphCard"><div className="graphHeader"><div><span className="live"><i/> LIVE COST GRAPH</span><h3>Trace any cost back to the business.</h3></div><span className="graphDate">September 2026 · All providers</span></div><CostGraph/></div>
    </section>

    <section id="features" className="section featureSection">
      <div className="centerIntro"><p className="kicker">ONE PLATFORM</p><h2>Everything you need to<br/><span>control AI economics.</span></h2><p>Visibility is only the starting point. Costra connects insight, ownership and action in one workflow.</p></div>
      <div className="featureGrid">{features.map((f,i)=><FeatureCard key={f.tag} {...f} index={i}/>)}</div>
    </section>

    <section className="spotlight section"><div className="spotlightVisual"><OptimizationMockup/></div><div className="spotlightCopy"><p className="kicker">OPTIMIZATION ENGINE</p><h2>Don't just find waste.<br/><span>Know what to do next.</span></h2><p>Costra ranks optimization opportunities by financial impact, confidence and owner. Your team gets a prioritized savings pipeline instead of another dashboard to monitor.</p><div className="bigNumber">€183K <small>annual opportunity identified</small></div><a href="#demo" className="inlineLink">See how optimization works <ArrowRight size={16}/></a></div></section>

    <section id="how" className="how section"><div className="centerIntro"><p className="kicker">HOW IT WORKS</p><h2>Connect once. <span>Understand continuously.</span></h2></div><div className="steps"><Step n="01" title="Connect your data" text="Bring in billing, usage and AI provider data. Costra normalizes it into one cost model." icon={Database}/><Step n="02" title="Build your cost graph" text="Map spend to business units, products, applications and AI workloads — automatically." icon={GitBranch}/><Step n="03" title="Act on intelligence" text="Find savings, explain anomalies, govern spend and report business impact from one place." icon={Zap}/></div></section>

    <section id="security" className="security section"><div className="securityCard"><div className="securityIcon"><ShieldCheck/></div><div><p className="kicker">ENTERPRISE BY DESIGN</p><h2>Your cost data is sensitive.<br/><span>We treat it that way.</span></h2><p>Costra is designed around least-privilege access, tenant isolation and clear data boundaries. Connect read-only sources and keep your financial intelligence under control.</p><div className="securityItems"><span><Check/> Read-only integrations</span><span><Check/> Tenant-isolated data</span><span><Check/> Role-based access</span><span><Check/> Audit-ready controls</span></div></div><div className="securityPanel"><div><ShieldCheck/><strong>Enterprise controls</strong></div><p>Access · Ownership · Policies · Audit</p><div className="securityBar"><i/><i/><i/><i/><i/></div></div></div></section>

    <section id="pricing" className="pricing section"><div className="centerIntro"><p className="kicker">PRICING</p><h2>Start with clarity.<br/><span>Scale with your AI.</span></h2><p>We tailor Costra to the size and complexity of your AI estate. No artificial limits on the visibility your FinOps team needs.</p></div><div className="pricingGrid"><div className="priceCard"><span className="priceLabel">GROWTH</span><h3>For teams building AI seriously.</h3><p>Core cost visibility, allocation and optimization for growing AI estates.</p><ul><li><Check/> Multi-provider AI cost visibility</li><li><Check/> Business hierarchy & allocation</li><li><Check/> Optimization opportunities</li><li><Check/> Budgets & reporting</li></ul><a href="#demo">Talk to us <ArrowRight size={15}/></a></div><div className="priceCard featured"><div className="popular">MOST POPULAR</div><span className="priceLabel">ENTERPRISE</span><h3>For AI at organizational scale.</h3><p>Advanced governance, custom integrations and the full Costra cost graph.</p><ul><li><Check/> Everything in Growth</li><li><Check/> Advanced governance & policies</li><li><Check/> Custom cost allocation rules</li><li><Check/> Enterprise integrations & support</li></ul><a href="#demo">Book an enterprise demo <ArrowRight size={15}/></a></div></div></section>

    <section className="faq section"><div><p className="kicker">FAQ</p><h2>Questions teams ask<br/><span>before they start.</span></h2></div><div className="faqList">{['What does Costra connect to?','How is Costra different from a traditional FinOps platform?','Can Costra track AI spend across multiple providers?','How quickly can we get started?','Is Costra suitable for enterprise environments?'].map((q,i)=><div className="faqItem" key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>0{i+1}</span><strong>{q}</strong><ChevronDown className={faq===i?'rotated':''}/></button>{faq===i&&<p>{i===0?'Costra is designed to unify cloud, AI provider, model, usage and organizational data into one cost graph. We start with the sources that matter most to your environment and expand from there.':i===1?'Traditional FinOps tells you what cloud services cost. Costra adds the AI layer: models, tokens, workloads, ownership and business context — then turns that intelligence into specific savings opportunities.':i===2?'Yes. Costra is designed for multi-provider AI estates, giving you one view across providers, models and workloads instead of forcing teams to reconcile separate consoles.':i===3?'The first step is a short discovery session. We map your AI estate, identify the highest-value data sources and define the first cost graph you want to see.': 'Yes. Costra is being designed for enterprise governance, ownership, access control and auditability from the ground up.'}</p>}</div>)}</div></section>

    <section id="demo" className="cta section"><div className="ctaGlow"/><p className="kicker">READY WHEN YOU ARE</p><h2>Make AI spend<br/><span>a competitive advantage.</span></h2><p>See what Costra can uncover in your AI estate.</p><a className="primary" href="mailto:hello@costra.ai?subject=Costra%20demo">Book a demo <ArrowRight size={17}/></a><small>No commitment. Just a conversation about your AI economics.</small></section>

    <footer><a href="#top" className="brand"><span className="brandMark">C</span><span>costra</span></a><p>AI cost intelligence for modern enterprises.</p><div><a href="#platform">Platform</a><a href="#features">Features</a><a href="#security">Security</a><a href="#demo">Contact</a></div><small>© 2026 Costra. All rights reserved.</small></footer>
  </main>
}

function DashboardMockup(){return <div className="dashboardMock"><div className="mockTop"><div className="mockDots"><i/><i/><i/></div><span>costra / overview</span><div className="mockLive"><i/> Live</div></div><div className="mockBody"><div className="mockSide"><b>costra</b><span className="selected">Overview</span><span>Explore spend</span><span>AI hierarchy</span><span>Optimization</span><span>Governance</span></div><div className="mockMain"><div className="mockHeading"><div><small>AI COST INTELLIGENCE</small><h3>Overview</h3></div><span>September 2026</span></div><div className="mockMetrics"><MockMetric title="AI Spend" value="€1.24M" delta="+14.2%"/><MockMetric title="Forecast" value="€1.61M" delta="+30%"/><MockMetric title="Savings" value="€183K" delta="14.8%"/></div><div className="mockGrid"><div className="mockChart"><div className="mockCardTitle">AI spend trend <span>6 months</span></div><div className="fakeChart"><i/><svg viewBox="0 0 400 130" preserveAspectRatio="none"><path d="M0 111 C45 105 55 88 92 94 S143 79 183 73 S230 70 266 52 S322 45 356 22 S388 16 400 7" fill="none" stroke="currentColor" strokeWidth="3"/></svg></div></div><div className="mockList"><div className="mockCardTitle">Top opportunities <span>€183K</span></div>{['Route to GPT-5-mini','Optimize system prompts','Right-size GPU cluster'].map((x,i)=><div className="miniOpp" key={x}><Sparkles size={11}/><span>{x}</span><b>{['€42K','€31K','€29K'][i]}</b></div>)}</div></div></div></div></div>}

function MockMetric({title,value,delta}:{title:string,value:string,delta:string}){return <div><span>{title}</span><strong>{value}</strong><small>{delta}</small></div>}
function CostGraph(){return <div className="costGraph"><GraphNode x="9%" y="50%" title="Acme Corp" sub="€1.24M" root/><GraphNode x="27%" y="24%" title="Digital Products" sub="€520K"/><GraphNode x="27%" y="76%" title="Customer Solutions" sub="€340K"/><GraphNode x="47%" y="24%" title="Customer AI" sub="€221K"/><GraphNode x="47%" y="50%" title="Support AI" sub="€154K"/><GraphNode x="47%" y="76%" title="ML Platform" sub="€145K"/><GraphNode x="69%" y="24%" title="GPT-5" sub="€86K"/><GraphNode x="69%" y="50%" title="Claude" sub="€61K"/><GraphNode x="69%" y="76%" title="GPU inference" sub="€54K"/><GraphNode x="91%" y="50%" title="Azure OpenAI" sub="€612K"/><div className="graphLines"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="graphLegend"><span><i/>Business</span><span><i/>Product / workload</span><span><i/>Model / provider</span></div></div>}
function GraphNode({x,y,title,sub,root=false}:{x:string,y:string,title:string,sub:string,root?:boolean}){return <div className={`graphNode ${root?'root':''}`} style={{left:x,top:y}}><span>{root?<CircleDollarSign size={14}/>:<Layers3 size={12}/>}</span><div><strong>{title}</strong><small>{sub}</small></div></div>}
function FeatureCard({icon:Icon,tag,title,text,points,index}:{icon:any,tag:string,title:string,text:string,points:string[],index:number}){return <article className={`featureCard ${index===0?'wide':''}`}><div className="featureIcon"><Icon/></div><p className="featureTag">{tag}</p><h3>{title}</h3><p>{text}</p><ul>{points.map(p=><li key={p}><Check size={14}/>{p}</li>)}</ul><span className="featureNumber">{String(index+1).padStart(2,'0')}</span></article>}
function OptimizationMockup(){return <div className="optimizationMock"><div className="optHeader"><span><Sparkles size={14}/> Costra Intelligence</span><small>Updated 4 min ago</small></div><div className="optScore"><div><small>IDENTIFIED SAVINGS</small><strong>€183,420</strong><span>14.8% of total AI spend</span></div><div className="scoreCircle">86<small>score</small></div></div><div className="optRow head"><span>Opportunity</span><span>Impact</span><span>Priority</span></div>{[['Route low-complexity traffic to GPT-5-mini','€42,180','High'],['Optimize oversized system prompts','€31,400','High'],['Right-size GPU inference cluster','€28,700','Medium'],['Cache repeated requests','€19,240','High']].map(x=><div className="optRow" key={x[0]}><span><i/><b>{x[0]}</b></span><strong>{x[1]}</strong><em className={x[2].toLowerCase()}>{x[2]}</em></div>)}</div>}
function Step({n,title,text,icon:Icon}:{n:string,title:string,text:string,icon:any}){return <div className="step"><div className="stepTop"><span>{n}</span><Icon/></div><h3>{title}</h3><p>{text}</p></div>}
