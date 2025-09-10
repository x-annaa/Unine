//（ 1 ）// Supabase 初始化模板
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 替换成你自己的 Supabase 项目配置
const SUPABASE_URL = "https://frilvfwifdvcssuynyyh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWx2ZndpZmR2Y3NzdXlueXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NDYyNjgsImV4cCI6MjA3MzAyMjI2OH0.JZHg88B9ywTwFaytALHE8mz7q72-Wc8lIj5aZ_YvFSs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
