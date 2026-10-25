import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { PageIntro, ProjectCard } from '@/components/page-elements';
import { ProjectCTA } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { projects, projectCategories } from '@/content/projects';
import { pageHead } from '@/lib/seo';
export const Route=createFileRoute('/work/')({head:()=>pageHead({title:'Selected Website Design Concepts',description:'Explore WebCopps fictional website concepts for skincare, architecture, and logistics. Thoughtful design explorations, clearly labelled.',path:'/work'}),component:Work});
function Work(){const [filter,setFilter]=useState('All');const shown=projects.filter(p=>filter==='All'||p.category===filter);return <><PageIntro eyebrow="Work" title="Selected concepts. Considered details." description="A collection of fictional design explorations across industries. These are concepts, not commissioned client work or measured business results."/><section className="container-page py-16"><div className="mb-10 flex flex-wrap gap-2" aria-label="Filter projects">{['All',...projectCategories].map(c=><Button key={c} variant={filter===c?'default':'ghost'} onClick={()=>setFilter(c)} aria-pressed={filter===c}>{c}</Button>)}</div><div className="grid gap-12 md:grid-cols-2">{shown.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>{!shown.length&&<p role="status" className="py-16 text-muted-foreground">No concepts in this category yet.</p>}</section><ProjectCTA/></>}
