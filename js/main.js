//（ 1 ）// Supabase 初始化模板
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-project-ref.supabase.co';
const SUPABASE_URL = "https://frilvfwifdvcssuynyyh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWx2ZndpZmR2Y3NzdXlueXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NDYyNjgsImV4cCI6MjA3MzAyMjI2OH0.JZHg88B9ywTwFaytALHE8mz7q72-Wc8lIj5aZ_YvFSs';

// 公共方法
export async function registerUser(username, password) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ username, password }]);
  return { data, error };
}
