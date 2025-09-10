//（ 1 ）// Supabase 初始化模板
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 替换成你自己的 Supabase 项目配置
const SUPABASE_URL = "https://frilvfwifdvcssuynyyh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWx2ZndpZmR2Y3NzdXlueXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NDYyNjgsImV4cCI6MjA3MzAyMjI2OH0.JZHg88B9ywTwFaytALHE8mz7q72-Wc8lIj5aZ_YvFSs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 页面切换逻辑
function showPage(pageId) {
  // 隐藏所有页面
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // 显示选中页面
  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'block';
  }

  // 高亮导航按钮
  document.querySelectorAll('#navbar button').forEach(btn => {
    btn.classList.remove('active');
  });
  document
    .querySelector(`#navbar button[onclick="showPage('${pageId}')"]`)
    ?.classList.add('active');
}

// 默认显示首页
window.onload = () => {
  showPage('home');
};
