import React from 'react'
import Intro from '../features/notifications/Intro'
import CreateNotification from '../features/notifications/CreateNotification'
import Preview from '../features/notifications/Preview'
import NotificationHistory from '../features/notifications/NotificationHistory'
import NotificationAnalytics from '../features/notifications/NotificationAnalytics'

const Notifications = () => {
  return (
    <>
      <Intro />  
      <div className='grid grid-cols-1 lg:grid-cols-3 mx-6 gap-4'>
        <CreateNotification />
        <Preview />
      </div>
      <NotificationHistory />
      <NotificationAnalytics />
    </>
  )
}

export default Notifications