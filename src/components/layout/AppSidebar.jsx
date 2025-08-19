import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  CreditCard,
  MessageSquare,
  Calendar,
  UserCheck,
  UserMinus,
  Headphones,
  BarChart3,
  Settings,
  Bell,
  User
} from "lucide-react"

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
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Recruitment", url: "/recruitment", icon: Users },
  { title: "Courses", url: "/courses", icon: GraduationCap },
  { title: "Template Master", url: "/templates", icon: FileText },
  { title: "Payroll Master", url: "/payroll", icon: CreditCard },
  { title: "Loan", url: "/loan", icon: MessageSquare },
  { title: "Booking", url: "/booking", icon: Calendar },
  { title: "Mailbox", url: "/mailbox", icon: MessageSquare },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Attendance", url: "/attendance", icon: UserCheck },
  { title: "Leave", url: "/leave", icon: UserMinus },
  { title: "E - Separation", url: "/separation", icon: UserMinus },
  { title: "On Boarding", url: "/onboarding", icon: UserCheck },
  { title: "LTA", url: "/lta", icon: Headphones },
]

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path) => currentPath === path
  const getNavCls = ({ isActive }) =>
    isActive 
      ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-md" 
      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-smooth"

  return (
    <Sidebar
      className={cn(
        "border-r border-sidebar-border transition-smooth",
        collapsed ? "w-14" : "w-64"
      )}
      style={{ background: 'var(--gradient-sidebar)' }}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-sm">D</span>
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sidebar-foreground font-bold text-lg">DIGI ONE</span>
              <span className="text-sidebar-foreground/70 text-xs">HR Management</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 uppercase tracking-wider text-xs font-semibold">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}