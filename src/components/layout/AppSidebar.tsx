import { useLocation } from 'react-router-dom';
import { NavLink } from '@/components/NavLink';
import {
  LayoutDashboard,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Wallet,
  CreditCard,
  Users,
  ScrollText,
  Settings,
  Building2,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

const navigation = [
  {
    label: 'Overview',
    items: [
      { title: 'Dashboard', url: '/', icon: LayoutDashboard },
    ],
  },
  {
    label: 'Loan Management',
    items: [
      { title: 'All Applications', url: '/applications', icon: FileText },
      { title: 'Pending Review', url: '/applications/pending', icon: Clock },
      { title: 'Approved', url: '/applications/approved', icon: CheckCircle },
      { title: 'Rejected', url: '/applications/rejected', icon: XCircle },
    ],
  },
  {
    label: 'Transactions',
    items: [
      { title: 'Disbursements', url: '/disbursements', icon: Wallet },
      { title: 'Repayments', url: '/repayments', icon: CreditCard },
    ],
  },
  {
    label: 'Administration',
    items: [
      { title: 'Customers', url: '/customers', icon: Users },
      { title: 'Audit Logs', url: '/audit-logs', icon: ScrollText },
      { title: 'Settings', url: '/settings', icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  const isActive = (url: string) => {
    if (url === '/') return location.pathname === '/';
    return location.pathname.startsWith(url);
  };

  return (
    <Sidebar 
      className="border-r border-sidebar-border bg-sidebar/80 backdrop-blur-xl"
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-foreground text-lg">LoanAdmin</h1>
              <p className="text-xs text-muted-foreground">Banking Dashboard</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        {navigation.map((group) => (
          <SidebarGroup key={group.label}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url)}
                      tooltip={collapsed ? item.title : undefined}
                    >
                      <NavLink
                        to={item.url}
                        end={item.url === '/'}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:bg-sidebar-accent"
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        {!collapsed && (
          <div className="text-xs text-muted-foreground text-center">
            <p>© 2024 LoanAdmin</p>
            <p>v1.0.0</p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
