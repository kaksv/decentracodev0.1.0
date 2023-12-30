import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdnsnvaxabsvaapyspkw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbnNudmF4YWJzdmFhcHlzcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTU5NTgsImV4cCI6MjAxNjg5MTk1OH0.Kt6o-LSQP-eR_NhWJ0_f374sCNWy4fmPESziK5KwMPc";

const supabase = createClient(
    supabaseUrl, 
    supabaseKey
    );

export default supabase;