import React from "react";
import Intro from "../features/system_settings/Intro";
import GeneralSettings from "../features/system_settings/GeneralSettings";
import AppearanceSettings from "../features/system_settings/AppearanceSettings";
import UserSettings from "../features/system_settings/UserSettings";
import NotificationSettings from "../features/system_settings/NotificationSettings";
import SecuritySettings from "../features/system_settings/SecuritySettings";
import IntegrationSettings from "../features/system_settings/IntegrationSettings";

const SystemSettings = () => {
  return (
    <div className="p-8">
      <Intro />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeneralSettings />
        <AppearanceSettings />
        <UserSettings />
        <NotificationSettings />
        <SecuritySettings />
        <IntegrationSettings />
      </div>
    </div>
  );
};

export default SystemSettings;
