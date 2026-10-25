import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Project } from '@/content/projects';
import type { Service } from '@/content/services';

export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
 return <section className="border-b border-border bg-surface"><div className="container-page py-16 md:py-24"><Link to="/" className="mb-8 inline-block text-xs text-muted-foreground">Home / {eyebrow}</Link><p className="eyebrow mb-4">{eyebrow}</p><h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></div></section>;
}
export function ServiceCard({service:s}:{service:Service}) {const Icon=s.icon; return <Link to="/services/$slug" params={{slug:s.slug}} className="group flex flex-col border-b border-border py-8"><div className="mb-5 flex justify-between"><span className="flex size-11 items-center justify-center rounded-md bg-secondary text-primary"><Icon className="size-6" /></span><ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="text-xl font-bold">{s.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{s.short}</p><span className="mt-5 text-sm font-semibold text-primary">Explore service <ArrowRight className="ml-1 inline size-4" /></span></Link>}
export function ProjectCard({project:p}:{project:Project}) {return <Link to="/work/$slug" params={{slug:p.slug}} className="group block"><div className="overflow-hidden rounded-md bg-muted"><img src={p.image} alt={`${p.name} — fictional ${p.industry} website concept`} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div><div className="mt-5 flex items-center justify-between"><h3 className="text-2xl font-bold">{p.name}</h3><ArrowUpRight className="size-5" /></div><p className="mt-2 text-sm text-muted-foreground">{p.category} <span aria-hidden>·</span> Fictional concept</p></Link>}
export function FAQ({items}:{items:{q:string;a:string}[]}) {return <Accordion type="single" collapsible className="w-full">{items.map((f,i)=><AccordionItem key={f.q} value={`faq-${i}`}><AccordionTrigger className="py-6 text-left text-base font-semibold">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-7">{f.a}</AccordionContent></AccordionItem>)}</Accordion>}
export function CheckList({items}:{items:string[]}) {return <ul className="grid gap-4">{items.map(item=><li key={item} className="flex gap-3 text-sm leading-7"><Check className="mt-1 size-5 shrink-0 text-primary" /><span>{item}</span></li>)}</ul>}
export function QuoteLink() {return <Button asChild size="lg"><Link to="/contact">Request a tailored quote <ArrowUpRight /></Link></Button>}
export const processSteps = [
 ['Discovery','We start with your business, your goals, and what your visitors need.'],
 ['Planning','A clear scope, considered structure, and shared priorities.'],
 ['Design & Development','Thoughtful design becomes a dependable, editable website.'],
 ['Testing & Launch','We check the details across devices before going live.'],
 ['Ongoing Support','Updates, improvements, and support where agreed.'],
];