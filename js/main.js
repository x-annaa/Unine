//（ 1 ）// Supabase 初始化模板
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-project-ref.supabase.co';
const SUPABASE_ANON_KEY = 'your-public-anon-key';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 公共方法
export async function registerUser(username, password) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ username, password }]);
  return { data, error };
}


//（ 2 ）// 页面切换逻辑
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

// 默认显示主页
showPage('home');
