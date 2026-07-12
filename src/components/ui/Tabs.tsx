import { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
  children: React.ReactNode;
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className = '',
  children,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const tabVariants = {
    default: 'bg-transparent border-b-2 border-secondary-200 text-secondary-600 data-[active=true]:border-primary-600 data-[active=true]:text-primary-600',
    pills: 'bg-secondary-100 text-secondary-600 rounded-lg data-[active=true]:bg-primary-600 data-[active=true]:text-white',
    underline: 'bg-transparent text-secondary-600 data-[active=true]:text-primary-600',
  };

  return (
    <div className={className}>
      <div className={`flex gap-2 ${variant === 'underline' ? 'border-b border-secondary-200' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-active={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`
              relative px-4 py-2 font-medium transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
              ${tabVariants[variant]}
            `}
          >
            <span className="flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
            {variant === 'underline' && activeTab === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
              />
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {Array.isArray(children)
          ? children.find((child: any) => child.props?.tabId === activeTab)
          : children}
      </div>
    </div>
  );
}

interface TabPanelProps {
  tabId: string;
  children: React.ReactNode;
}

export function TabPanel({ children }: TabPanelProps) {
  return <div>{children}</div>;
}
