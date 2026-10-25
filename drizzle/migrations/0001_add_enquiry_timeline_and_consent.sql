ALTER TABLE public.project_enquiries ADD COLUMN timeline text NOT NULL DEFAULT '' CHECK (char_length(timeline) <= 100);
ALTER TABLE public.project_enquiries ADD COLUMN consent boolean NOT NULL DEFAULT true;
ALTER TABLE public.project_enquiries ADD COLUMN reference text NOT NULL DEFAULT encode(gen_random_bytes(6), 'hex');
CREATE UNIQUE INDEX project_enquiries_reference_idx ON public.project_enquiries(reference);