'use client'

import { useState } from 'react'
import { LayoutDashboard, Network, Lightbulb, FileText, ShieldCheck, Settings, Search, Bell, ChevronDown, ArrowUpRight, Sparkles, DollarSign, Zap, CircleAlert, CheckCircle2 } from 'lucide-react'

const spend = [
  ['Digital Products','€520K','31%'],['Customer Solutions','€340K','18%'],['IT','€180K','4%'],['R&D','€120K','7%'],['Other','€80K','-2%']
]
const opportunities = [
  ['Route low-complexity traffic to GPT-5-mini','Customer AI','€42,180','High'],
  ['Optimize oversized system prompts','Support AI','€31,400','High'],
  ['Right-size GPU inference cluster','ML Platform','€28,700','Medium'],
  ['Cache repeated requests','Customer AI','€19,240','High'],
]
const nav = [
  ['Overview',LayoutDashboard],['Explore spend',Search],['AI hierarchy',Network],['Optimization',Lightbulb],['Reports',FileText],['Governance',ShieldCheck]
]

export default function Home() {
  const [active, setActive] = useState('Overview')
  const [query, setQuery] = useState('')
  const [drawer, setDrawer] = useState<string | null>(null)
  const filtered = spend.filter(x => x[0].toLowerCase().includes(query.toLowerCase()))

  return <main className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="logo">C</div><span>costra</span></div>
      <div className="workspace"><div className="avatar">AC</div><div><strong>Acme Corporation</strong><small>Enterprise workspace</small></div><ChevronDown size={15}/></div>
      <nav>{nav.map(([label,Icon]) => <button key={label} className={active===label?'active':''} onClick={()=>setActive(label as string)}><Icon size={18}/><span>{label}</span>{label==='Optimization'&&<b>27</b>}</button>)}</nav>
      <div className="sidebarBottom"><button><Settings size={18}/>Settings</button><div className="user"><div className="avatar dark">MK</div><div><strong>Martin</strong><small>Admin</small></div><ChevronDown size={15}/></div></div>
    </aside>

    <section className="content">
      <header><div><p className="eyebrow">AI COST INTELLIGENCE</p><h1>{active}</h1><p className="sub">See every AI cost. Know who owns it. Find the savings.</p></div><div className="headerActions"><div className="search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search costs, teams, models..."/></div><button className="iconBtn"><Bell size={18}/><i/></button><button className="connect" onClick={()=>setDrawer('Connect data')}><span>+</span> Connect data</button></div></header>

      {active !== 'Overview' ? <div className="emptyView"><div className="emptyIcon"><Sparkles size={28}/></div><h2>{active}</h2><p>This workspace is ready for your connected AI cost data. The production version will populate this view automatically.</p><button className="connect" onClick={()=>setDrawer('Connect data')}>Connect your first data source <ArrowUpRight size={16}/></button></div> : <>
      <div className="metrics">
        <Metric icon={<DollarSign/>} label="AI Spend" value="€1.24M" delta="+14.2%" tone="up" onClick={()=>setDrawer('AI Spend')}/>
        <Metric icon={<Zap/>} label="Forecast" value="€1.61M" delta="+30%" tone="up" onClick={()=>setDrawer('Forecast')}/>
        <Metric icon={<Lightbulb/>} label="Savings Opportunity" value="€183K" delta="14.8% of spend" tone="save" onClick={()=>setDrawer('Savings Opportunity')}/>
        <Metric icon={<Network/>} label="Unallocated Spend" value="7.4%" delta="↓ 2.1pp" tone="down" onClick={()=>setDrawer('Unallocated Spend')}/>
      </div>

      <div className="grid two">
        <section className="card chartCard"><CardTitle title="AI spend trend" meta="Last 6 months"/><div className="chart"><div className="gridlines"><span>€1.4M</span><span>€1.0M</span><span>€600K</span><span>€200K</span></div><svg viewBox="0 0 700 230" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".16"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs><path d="M0 184 C65 176 80 151 140 158 S215 140 280 128 S355 115 420 108 S500 74 560 65 S640 40 700 28 L700 230 L0 230Z" fill="url(#fill)"/><path d="M0 184 C65 176 80 151 140 158 S215 140 280 128 S355 115 420 108 S500 74 560 65 S640 40 700 28" fill="none" stroke="currentColor" strokeWidth="3"/></svg><div className="months"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div></div></section>
        <section className="card"><CardTitle title="Spend by business unit" meta="This month"/><div className="bars">{filtered.map((x,i)=><div className="barRow" key={x[0]}><div className="barLabel"><span>{x[0]}</span><strong>{x[1]}</strong></div><div className="barTrack"><div className="bar" style={{width:`${[100,65,35,23,15][i]??10}%`}}/></div><small className={x[2].startsWith('-')?'negative':''}>{x[2]}</small></div>)}</div><button className="textBtn" onClick={()=>setDrawer('Business unit spend')}>Explore all spend <ArrowUpRight size={15}/></button></section>
      </div>

      <section className="card opportunities"><CardTitle title="Top savings opportunities" meta="€183K identified" action="View all" onClick={()=>setDrawer('Optimization')}/><div className="oppTable"><div className="thead"><span>Opportunity</span><span>Owner</span><span>Annual savings</span><span>Priority</span></div>{opportunities.map(x=><div className="opp" key={x[0]}><div><div className="oppName"><span className="spark"><Sparkles size={13}/></span>{x[0]}</div></div><span>{x[1]}</span><strong>{x[2]}</strong><span className={`pill ${x[3].toLowerCase()}`}>{x[3]}</span></div>)}</div></section>

      <div className="grid two bottom"><section className="card"><CardTitle title="AI provider landscape" meta="€1.24M total"/><div className="providers"><Provider name="Azure OpenAI" amount="€612K" pct="49%"/><Provider name="AWS Bedrock" amount="€298K" pct="24%"/><Provider name="Google Vertex AI" amount="€186K" pct="15%"/><Provider name="Self-hosted / GPU" amount="€144K" pct="12%"/></div></section><section className="card"><CardTitle title="Governance" meta="Live"/><div className="governance"><div><CheckCircle2/><span><strong>94%</strong> of spend is allocated</span></div><div><CheckCircle2/><span><strong>98%</strong> has an owner</span></div><div className="warn"><CircleAlert/><span><strong>12</strong> policy violations need review</span></div></div><button className="textBtn" onClick={()=>setDrawer('Governance')}>Review governance <ArrowUpRight size={15}/></button></section></div>
      </>}
    </section>
    {drawer && <div className="overlay" onClick={()=>setDrawer(null)}><div className="drawer" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setDrawer(null)}>×</button><div className="eyebrow">COSTRA</div><h2>{drawer}</h2><p className="sub">Detailed intelligence for your enterprise AI estate.</p><div className="drawerStat"><span>Potential impact</span><strong>{drawer.includes('Savings')?'€183K':'€1.24M'}</strong></div><div className="drawerList"><div><Sparkles/><span>AI spend is growing 14.2% month over month.</span></div><div><Network/><span>Allocation coverage is improving across business units.</span></div><div><Lightbulb/><span>27 optimization opportunities are currently identified.</span></div></div><button className="connect" onClick={()=>setDrawer(null)}>Done</button></div></div>}
  </main>
}

function Metric({icon,label,value,delta,tone,onClick}:{icon:React.ReactNode,label:string,value:string,delta:string,tone:string,onClick:()=>void}){return <button className="metric" onClick={onClick}><div className="metricTop"><span className={`metricIcon ${tone}`}>{icon}</span><ArrowUpRight size={16}/></div><span>{label}</span><strong>{value}</strong><small className={tone}>{delta}</small></button>}
function CardTitle({title,meta,action,onClick}:{title:string,meta?:string,action?:string,onClick?:()=>void}){return <div className="cardTitle"><div><h2>{title}</h2>{meta&&<span>{meta}</span>}</div>{action&&<button onClick={onClick}>{action}<ArrowUpRight size={14}/></button>}</div>}
function Provider({name,amount,pct}:{name:string,amount:string,pct:string}){return <div className="provider"><div><span className="providerDot"/><strong>{name}</strong></div><span>{amount}</span><b>{pct}</b></div>}