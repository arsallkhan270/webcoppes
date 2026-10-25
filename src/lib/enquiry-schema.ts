import { z } from 'zod';
export const enquirySchema = z.object({
 name:z.string().trim().min(1,'Please enter your full name.').max(100),
 email:z.string().trim().email('Please enter a valid email.').max(255),
 company:z.string().trim().max(100).default(''),
 service:z.string().trim().min(1,'Please select a service.').max(100),
 budget:z.string().trim().max(100).default('Not specified'),
 timeline:z.string().trim().max(100).default(''),
 message:z.string().trim().min(10,'Please tell us a little more (at least 10 characters).').max(3000),
 consent:z.literal(true,{errorMap:()=>({message:'Please agree to the privacy policy.'})}),
 website:z.string().max(0).default(''),
});