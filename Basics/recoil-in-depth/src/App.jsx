import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotifsCountSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notifsNotificationCount = useRecoilValue(notificationsAtom);
  const totalCount = useRecoilValue(totalNotifsCountSelector);
  return <>
    <button>Home</button>
    <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount})</button>
    <button>Messaging({messagingNotificationCount >= 100 ? "99+" : messagingNotificationCount})</button>
    <button>Notifications({notifsNotificationCount >= 100 ? "99+" : notifsNotificationCount})</button>
    <button>Me({totalCount})</button>
  </>
}

export default App
