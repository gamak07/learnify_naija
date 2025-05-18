import React from "react";
import PermissionsHeader from "./PermissionsHeader";
import ContentPermissions from "./ContentPermissions";
import UserPermissions from "./UserPermissions";
import AnalyticsPermission from "./AnalyticsPermission";
import SystemPermissions from "./SystemPermissions";
import PermissionsFooter from "./PermissionsFooter";

const Permissions = () => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 opacity-75 transition-opacity"></div>
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="relative w-screen max-w-md bg-white">
            <div className="h-full flex flex-col py-6 shadow-xl overflow-y-auto">
              <PermissionsHeader />
              <div className="px-4 flex-1 sm:px-6">
                <ContentPermissions />
                <UserPermissions />
                <AnalyticsPermission />
                <SystemPermissions />
              </div>
              <PermissionsFooter />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Permissions;
