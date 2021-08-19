import React from 'react';
import { Redirect } from "react-router-dom";

const MHDiscover = React.lazy(_ => import("../pages/discover"));
const MHRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const MHRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const MHSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const MHDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const MHArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const MHAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const MHPlayer = React.lazy(_ => import("../pages/player"));


const MHFriend = React.lazy(_ => import("../pages/friend"));
const MHMine = React.lazy(_ => import("../pages/mine"));


export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: MHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/artist"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: MHRecommend
      },
      {
        path: "/discover/ranking",
        component: MHRanking
      },
      {
        path: "/discover/songs",
        component: MHSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: MHDjradio
      },
      {
        path: "/discover/artist",
        component: MHArtist
      },
      {
        path: "/discover/album",
        component: MHAlbum
      },
      {
        path: "/discover/player",
        component: MHPlayer
      }
    ]
  },
  {
    path: "/friend",
    component: MHFriend
  },
  {
    path: "/mine",
    component: MHMine
  }
]