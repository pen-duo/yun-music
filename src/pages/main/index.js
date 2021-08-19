import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router"

import MHAppHeader from '@/components/app-header';
import MHAppFooter from '@/components/app-footer';
import MHAppPlayBar from '@/pages/player/app-play-bar';

export default memo(function MHMain() {
  return (
    <HashRouter>
      <MHAppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <MHAppFooter />
      <MHAppPlayBar/>
    </HashRouter>
  )
})
