CREATE TABLE public.project_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 company text NOT NULL DEFAULT '' CHECK (char_length(company) <= 100),
 service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
 budget text NOT NULL CHECK (char_length(budget) BETWEEN 1 AND 100),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000)
);
GRANT ALL ON public.project_enquiries TO service_role;
ALTER TABLE public.project_enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.project_enquiries IS 'Private contact enquiries. Only validated server-side submissions and Cloud management may access records.';