import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const SUPABASE_URL = "https://zbxrpprwjrholrycwsqa.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_c4O2UN_u487qWsu4TNwG0Q_OGj3aHNM"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
