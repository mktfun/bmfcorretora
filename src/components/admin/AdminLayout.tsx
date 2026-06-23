import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { AdminSidebar } from './AdminSidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { Moon, Sun, LayoutDashboard, Users, FileText, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const menuItems = [
  { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
  { title: 'Leads', url: '/admin/leads', icon: Users },
  { title: 'Logs', url: '/admin/logs', icon: FileText },
  { title: 'Config', url: '/admin/config', icon: Settings },
];

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('admin-theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('admin-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="space-y-4 w-full max-w-md p-8">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AdminSidebar />
            <SidebarInset className="flex-1 pb-16 md:pb-0">
              <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-4 md:px-6">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="-ml-2 hidden md:flex" />
                  <h1 className="font-bold text-lg tracking-tight">{title}</h1>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full hover:bg-muted"
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={signOut}
                    className="md:hidden rounded-full hover:bg-muted text-muted-foreground"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </header>
              <main className="flex-1 p-4 lg:p-10 animate-in fade-in duration-500">
                {children}
              </main>
              
              {/* Bottom Navigation for Mobile */}
              <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-2 pb-safe">
                {menuItems.map((item) => {
                  const active = isActive(item.url);
                  return (
                    <NavLink
                      key={item.title}
                      to={item.url}
                      end={item.url === '/admin'}
                      className={`flex flex-col items-center justify-center flex-1 py-3 px-1 transition-colors ${
                        active 
                          ? 'text-[#002147] dark:text-white' 
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300'
                      }`}
                    >
                      <div className={`p-1.5 rounded-full mb-1 ${active ? 'bg-slate-100 dark:bg-slate-800' : 'bg-transparent'}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-medium">{item.title}</span>
                    </NavLink>
                  );
                })}
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
