import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import DummyDashboard from './dummy-dashboard'
import DummyMain from './dummy-main'
import DummyProfile from './dummy-profile'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Route exact path="/dashboard/*" component={() => <Header />} />
          <Route exact path="/dashboard/" component={() => <DummyDashboard />} />
          <Route exact path="/dashboard/main" component={() => <DummyMain />} />
          <Route exact path="/dashboard/profile/:user" component={() => <DummyProfile />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
