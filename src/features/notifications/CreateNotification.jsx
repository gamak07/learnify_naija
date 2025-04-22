import React from "react";
import Title from "./Title";
import MessageBody from "./MessageBody";
import Channels from "./Channels";
import AudienceTemplate from "./AudienceTemplate";
import Schedule from "./Schedule";

const CreateNotification = () => {
  return (
    <div className="lg:col-span-2 bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Create Notification
      </h2>
      <div className="space-y-4">
        <Title />
        <MessageBody />
        <Channels />
        <AudienceTemplate />
        <Schedule />
      </div>
    </div>
  );
};

export default CreateNotification;
