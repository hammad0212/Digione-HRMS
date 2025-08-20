import { FC } from "react"
import { Bell, MessageSquare, Settings, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"

// Define notification and message types for better type safety
interface Notification {
  title: string
  desc: string
  time: string
}

interface Message {
  name: string
  msg: string
  time: string
}

export const Header: FC = () => {
  const notifications: Notification[] = [
    { title: "New leave request", desc: "John Doe submitted annual leave", time: "2m ago" },
    { title: "Payroll processed", desc: "January 2024 payroll completed", time: "1h ago" },
    { title: "System update", desc: "HR system will be updated tonight", time: "3h ago" },
  ]

  const messages: Message[] = [
    { name: "Sarah Johnson", msg: "Could you review my timesheet?", time: "5m ago" },
    { name: "Mike Chen", msg: "Meeting scheduled for tomorrow", time: "15m ago" },
    { name: "Lisa Wong", msg: "Updated employee handbook", time: "1h ago" },
    { name: "Tom Brown", msg: "Question about benefits", time: "2h ago" },
  ]

  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-full items-center justify-between px-4 gap-4">
        {/* Left side - Sidebar trigger and search */}
        <div className="flex items-center gap-4 flex-1">
          <SidebarTrigger className="text-foreground hover:bg-muted" />

          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employees, payroll, reports..."
              className="pl-10 bg-muted/50 border-border/50 focus:bg-background transition-colors"
            />
          </div>
        </div>

        {/* Right side - Notifications and user menu */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative hover:bg-muted">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-destructive text-destructive-foreground border-0">
                  {notifications.length}
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-3 border-b">
                <h4 className="font-semibold">Notifications</h4>
                <Badge variant="secondary">{notifications.length} new</Badge>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex flex-col items-start p-3 space-y-1"
                  >
                    <div className="font-medium text-sm">{notification.title}</div>
                    <div className="text-sm text-muted-foreground">{notification.desc}</div>
                    <div className="text-xs text-muted-foreground">{notification.time}</div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative hover:bg-muted">
                <MessageSquare className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-accent text-accent-foreground border-0">
                  {messages.length}
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-3 border-b">
                <h4 className="font-semibold">Messages</h4>
                <Badge variant="secondary">{messages.length} new</Badge>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {messages.map((message, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex flex-col items-start p-3 space-y-1"
                  >
                    <div className="font-medium text-sm">{message.name}</div>
                    <div className="text-sm text-muted-foreground">{message.msg}</div>
                    <div className="text-xs text-muted-foreground">{message.time}</div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenuSeparator className="h-6 w-px bg-border mx-2" />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 h-10 hover:bg-muted">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium">Bigfoot</div>
                  <div className="text-xs text-muted-foreground">Administrator</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
