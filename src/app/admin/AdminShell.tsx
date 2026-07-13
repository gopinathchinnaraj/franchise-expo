"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  DollarSign,
  Image as ImageIcon,
  Menu,
  X,
  LogOut,
  ChevronRight,
  Building,
  Shield,
  Bell,
  User,
  Briefcase,
  BarChart3,
  Globe,
  Key,
  Mail,
  Home,
  Layers,
  BookOpen,
  CreditCard,
  PieChart,
  Camera,
  Handshake,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
  Clock,
  Cable,
  Droplet,
  Lamp,
  Monitor,
  Power,
  ShieldCheck,
  Sofa,
  SparklesIcon,
  Wrench,
  ServerCrash,
  Package,
  QrCode,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { FaUserNinja } from "react-icons/fa";

// Updated navigation with better icons and structure
const navigation = [
  { 
    name: "Dashboard", 
    href: "/admin/dashboard", 
    icon: LayoutDashboard,
    color: "text-main-2"
  },
  {
    name: "Exhibition",
    icon: Building,
    color: "text-purple-500",
    subItems: [
      { name: "Exhibitors", href: "/admin/exhibition/exhibitors", icon: Briefcase },
      // { name: "Sectors", href: "/admin/exhibition/sectors", icon: Target },
      { name: "Floor Plans", href: "/admin/exhibition/booths", icon: Globe },
      { name: "Manuals", href: "/admin/exhibition/manuals", icon: BookOpen },
      // { name: "QR Scanner", href: "/admin/exhibition/qr-scanner", icon: QrCode}
      
    ],
  },
  {
    name: "Financial",
    icon: DollarSign,
    color: "text-amber-500",
    subItems: [
      { name: "Payments", href: "/admin/financial/payments", icon: CreditCard },
      { name: "Invoices", href: "/admin/financial/invoices", icon: FileText },
      { name: "Revenue Analytics", href: "/admin/financial/revenue", icon: PieChart },
    ],
  },
  {
    name: "Extra Requirements",
    icon: Sofa,
    color: "text-emerald-500",
    subItems: [
      { name: "Received", href: "/admin/received", icon: Package },
      {
        name: "Settings",
        icon: Settings,
        color: "text-gray-500",
        subItems: [
          { name: "Furniture", href: "/admin/furniture", icon: FaUserNinja },
          { name: "AV & IT Rentals", href: "/admin/rental-items", icon: Monitor },
          { name: "Electrical Load", href: "/admin/electrical-rates", icon: Power },
          { name: "Hostess Rates", href: "/admin/hostess-rates", icon: SparklesIcon },
          { name: "Compressed Air", href: "/admin/compressed-air", icon: Cable },
          { name: "Water Connection", href: "/admin/water", icon: Droplet },
          { name: "Security Guard", href: "/admin/security-guard", icon: ShieldCheck },
          { name: "Housekeeping", href: "/admin/housekeeping", icon: Sparkles },
          { name: "Security Deposit", href: "/admin/security-deposit", icon: ServerCrash }
        ]
      }
    ]
  }
];

// Helper function to render navigation items recursively
const renderNavItem = (
  item: any, 
  pathname: string, 
  handleNavigation: (href: string) => void,
  isMobile: boolean = false,
  level: number = 0,
  openMenus: Set<string>,
  mobileOpenMenus: Set<string>,
  toggleMenu: (name: string, isMobile: boolean) => void
) => {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isOpen = isMobile 
    ? mobileOpenMenus.has(item.name) 
    : openMenus.has(item.name);
  
  if (hasSubItems) {
    return (
      <div key={item.name} className={`${level > 0 ? 'ml-4' : ''}`}>
        <button
          onClick={() => toggleMenu(item.name, isMobile)}
          className={`w-full flex items-center px-4 py-3.5 text-sm rounded-xl transition-all group ${
            level > 0 ? 'pl-8' : ''
          } ${
            isOpen 
              ? 'bg-main-4 text-main-2 font-semibold shadow-sm' 
              : 'text-gray-700 hover:text-main-2 hover:bg-main-4'
          }`}
        >
          {item.icon && <item.icon className={`h-5 w-5 mr-3 ${item.color || 'text-gray-500 group-hover:text-main-2'}`} />}
          <span className="flex-1 text-left">{item.name}</span>
          <ChevronDown className={`h-4 w-4 text-gray-500 group-hover:text-main-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} />
        </button>

        {isOpen && (
          <div className={`${level > 0 ? 'ml-4' : 'ml-8'} pl-4 border-l border-main-4 space-y-1 mt-1 animate-slide-up`}>
            {item.subItems.map((subItem: any) => 
              renderNavItem(subItem, pathname, handleNavigation, isMobile, level + 1, openMenus, mobileOpenMenus, toggleMenu)
            )}
          </div>
        )}
      </div>
    );
  }
  
  // Regular menu item (no sub-items) - only render if it has href
  if (!item.href) return null;
  
  return (
    <button
      key={item.href}
      onClick={() => handleNavigation(item.href)}
      className={`w-full flex items-center px-4 py-3.5 text-sm rounded-xl transition-all group hover:translate-x-1 ${
        level > 0 ? 'pl-8' : ''
      } ${
        pathname === item.href 
          ? 'bg-main-2/10 text-main-2 font-bold shadow-sm' 
          : 'text-gray-700 hover:text-main-2 hover:bg-main-4'
      }`}
    >
      {item.icon && <item.icon className={`h-5 w-5 mr-3 ${item.color || 'text-gray-500 group-hover:text-main-2'}`} />}
      <span>{item.name}</span>
      {pathname === item.href && (
        <ChevronRight className="h-4 w-4 ml-auto text-main-2" />
      )}
    </button>
  );
};

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());
  const [notificationCount, setNotificationCount] = useState(3);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const { user, logout, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (sidebarOpen && !target.closest('#mobile-sidebar') && !target.closest('[data-menu-button]')) {
        setSidebarOpen(false);
      }
      if (!target.closest('#user-menu')) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [loading, isAuthenticated, pathname, router]);

  const toggleMenu = (name: string, isMobile: boolean = false) => {
    if (isMobile) {
      const newSet = new Set(mobileOpenMenus);
      newSet.has(name) ? newSet.delete(name) : newSet.add(name);
      setMobileOpenMenus(newSet);
    } else {
      const newSet = new Set(openMenus);
      newSet.has(name) ? newSet.delete(name) : newSet.add(name);
      setOpenMenus(newSet);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      router.push('/admin/login');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setSidebarOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-main-5 to-main-1 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-main-3/20"></div>
            <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-main-3 border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-main-3 font-medium">Loading admin panel...</p>
          <p className="text-sm text-main-3/60 mt-1">Please wait a moment</p>
        </div>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-main-5 via-main-1 to-main-5">
      {/* MOBILE SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        id="mobile-sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-main-1 border-r border-main-4 transform transition-all duration-300 ease-out lg:hidden ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div className="px-6 py-5 flex items-center justify-between border-b border-main-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-main-2/10 flex items-center justify-center shadow-sm">
              <Sparkles className="h-5 w-5 text-main-2" />
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900">ExpoAdmin</span>
              <p className="text-xs text-main-2 font-medium">Management System</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all hover:rotate-90 text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="px-4 py-6 border-b border-main-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-main-5 border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-main-2/10 flex items-center justify-center shadow-sm">
              <User className="h-6 w-6 text-main-2" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              <div className="mt-1 flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Mobile */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto h-[calc(100vh-14rem)] py-4">
          {navigation.map((item) => 
            renderNavItem(item, pathname, handleNavigation, true, 0, openMenus, mobileOpenMenus, toggleMenu)
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-main-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-red-600 py-3 hover:bg-red-50 rounded-xl transition-all group"
          >
            <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-main-1 border-r border-main-4 shadow-md">
        {/* Logo */}
        <div className="px-6 py-6 flex items-center gap-3 border-b border-main-4">
          <div className="h-12 w-12 rounded-xl bg-main-2/10 flex items-center justify-center shadow-sm">
            <Sparkles className="h-6 w-6 text-main-2" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900">ExpoAdmin</h1>
            <p className="text-xs text-main-2 font-semibold">Premium Management</p>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-4 py-6 border-b border-main-4">
          <div className="relative group">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-main-5 border border-gray-200/50 hover:border-main-2/35 transition-all">
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-main-2/10 flex items-center justify-center shadow-sm">
                  <User className="h-7 w-7 text-main-2" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{user?.name}</p>
                <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-main-2/10 text-main-2 text-xs rounded-full">Admin</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto py-6">
          {navigation.map((item) => 
            renderNavItem(item, pathname, handleNavigation, false, 0, openMenus, mobileOpenMenus, toggleMenu)
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-main-4">
          <div className="px-3">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-red-600 py-3.5 hover:bg-red-50 rounded-xl transition-all group"
            >
              <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Sign Out Session</span>
            </button>
          </div>
          <div className="mt-4 px-3 pt-4 border-t border-main-4/50">
            <p className="text-xs text-gray-400 text-center">v2.0 • © 2024 ExpoAdmin</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:pl-72">
        {/* Header */}
        <header className="h-16 bg-white/95 backdrop-blur-md border-b border-gray-200 flex items-center px-6 justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              data-menu-button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors hover:rotate-180 duration-300 text-gray-500"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="hidden md:flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">
                Welcome back, <span className="text-gray-900 font-semibold">{user?.name?.split(' ')[0]}</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setNotificationCount(0)}
              className="relative p-2 hover:bg-gray-100 rounded-xl transition-all group hover:rotate-12 text-gray-500 hover:text-gray-900"
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {notificationCount}
                </span>
              )}
            </button>
            
            <div className="h-8 w-px bg-gray-200"></div>
            
            {/* User Menu */}
            <div className="relative" id="user-menu">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all group"
              >
                <div className="relative">
                  <div className="h-9 w-9 rounded-full bg-main-2/10 flex items-center justify-center shadow-sm">
                    <User className="h-5 w-5 text-main-2" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border border-white"></div>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-2 animate-fade-in z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <User className="h-4 w-4" />
                    My Profile
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </button>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 text-sm text-red-600 hover:text-red-700 py-2.5 hover:bg-red-50/50 rounded-lg transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 animate-fade-in">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2024 ExpoAdmin Pro • Exhibition Management System v2.0
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-main-2 transition-colors hover:underline">Help Center</a>
              <a href="#" className="text-gray-500 hover:text-main-2 transition-colors hover:underline">Documentation</a>
              <a href="#" className="text-gray-500 hover:text-main-2 transition-colors hover:underline">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}