import { createServerFn } from '@tanstack/react-start';
import { enquirySchema } from './enquiry-schema';

export const submitEnquiry = createServerFn({method:'POST'}).inputValidator((input:unknown)=>enquirySchema.parse(input)).handler(async({data})=>{
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const {count,error:rateError}=await supabaseAdmin.from('project_enquiries').select('id',{count:'exact',head:true}).eq('email',data.email).gte('created_at',new Date(Date.now()-3600000).toISOString());
 if(rateError) return {ok:false as const,error:'We couldn’t save your enquiry. Please try again shortly.'};
 if((count ?? 0)>=3) return {ok:false as const,error:'You’ve sent several enquiries recently. Please try again in an hour.'};
 const {website:_honeypot,...record}=data;
 const {data:saved,error}=await supabaseAdmin.from('project_enquiries').insert({...record,budget:record.budget || 'Not specified'}).select('reference').single();
 if(error || !saved) return {ok:false as const,error:'We couldn’t save your enquiry. Please try again shortly.'};
 return {ok:true as const,reference:saved.reference};
});