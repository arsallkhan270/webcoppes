import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ServiceCard } from '@/components/page-elements';
import { ProjectCTA } from '@/components/site-shell';
import { services } from '@/content/services';
import { pageHead } from '@/lib/seo';
export const Route=createFileRoute('/services/')({head:()=>pageHead({title:'Website Design & Development Services',description:'Explore WordPress, Elementor, WooCommerce, Shopify, speed optimization, SEO, maintenance, and custom integrations with WebCopps.',path:'/services'}),component:Services});
function Services(){return <><PageIntro eyebrow="Services" title="The right expertise. For your next step." description="Build something new, improve what you have, or keep your website working well. We tailor the work to your business, not the other way around."/><section className="container-page grid gap-x-12 py-12 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</section><ProjectCTA/></>}
