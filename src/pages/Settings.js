import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const themes = [
    { key: 'light', label: 'Light' },
    { key: 'dark', label: 'Dark' },
    { key: 'purple-dark', label: 'Purple Dark' },
    { key: 'black-orange', label: 'Black Orange' },
    { key: 'blue-pink', label: 'Blue Pink' },
    { key: 'green-yellow', label: 'Green Yellow' },
    { key: 'sunset-glow', label: 'Sunset Glow' },
    { key: 'midnight-blue', label: 'Midnight Blue' },
    { key: 'forest-green', label: 'Forest Green' },
    { key: 'ocean-breeze', label: 'Ocean Breeze' },
    { key: 'sunny-day', label: 'Sunny Day' },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md">
      <div className="flex justify-end gap-4">
        <Button onClick={() => changeLanguage('en')}>EN</Button>
        <Button onClick={() => changeLanguage('ar')}>AR</Button>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="w-full">{t('themeSelector')}</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Theme Selector" items={themes}>
          {(theme) => (
            <DropdownItem key={theme.key} onClick={() => setTheme(theme.key)}>
              {theme.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Settings;
