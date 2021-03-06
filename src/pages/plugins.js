import React from 'react'
import Layout from '../components/layout-mobile-footer'
import hero from '../styles/hero.module.scss'
import plugin from '../styles/plugins.module.scss'
import { Helmet } from "react-helmet";
//import Sidebar from '../components/plugin-sidebar'
//import Info from '../components/plugin-info'
import { graphql, Link } from 'gatsby'
import LazyLoad from "react-lazyload"
import Missing from "../images/missing_image_2.png"
import Mobile from "../images/mobile_missing.png"
import '../styles/tooltips.css'
//import Headroom from 'react-headroom';
import kebabCase from "lodash/kebabCase"
import Software from '../components/plugins-software-bar'

const Plugins = (props) => {
  const pluginList = props.data.all;
  //const featuredList = props.data.featured
  //const { totalCount } = props.data.all;
  //const listCount = `${totalCount}`

  return (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>BetterDocs | #1 Discord Plugins</title>
      <meta property="og:site_name" content="BetterDocs"/>
        <meta property="og:title" content="BetterDocs | #1 Discord Plugins"/>
        <meta property="og:description" content="List of free high quality Discord plugins by the community! Modify your Discord to your own liking with advanced plugins!"/>
        <meta property="og:url" content="https://betterdocs.us/plugins/" />
    </Helmet>
    <div className={plugin.pluginsContainer}
    >

    <section className={plugin.contentWrapper}
    >

      <div className={hero.heroPlugins}
      >
        <div className={hero.container}
        >
          <h2 className={hero.h2}
          >
          #1 Source for Discord Plugins!
          </h2> 
          <p className={hero.p}
          >
          Custom JS plugins made by the commuity!
          </p> 
        </div>
        <div className={hero.featuredContainer}>
          <div className={hero.featuredCard} >
            <div className={hero.imgContainer}>
              <Link to="/plugins/discord-crypt/" className={hero.svgContainer}>
                <svg height="512px" id="Capa_1" style={{"enableBackground":"new 0 0 512.001 512.001"}} width="512px" version="1.1" viewBox="0 0 512.001 512.001" x="0px" y="0px" xmlSpace="preserve">
                  <g>
                      <path className="active-path" style={{"fill":"#7289DA"}} d="M348.404,139.584H164.826c-13.101,0-23.721,10.62-23.721,23.721v56.885h231.02v-56.885  C372.125,150.204,361.505,139.584,348.404,139.584z"/>
                      <path style={{"fill":"#E5E3E3"}} d="M164.826,341.022h183.579c13.101,0,23.721-10.62,23.721-23.721v-97.112h-231.02v97.112  C141.105,330.402,151.725,341.022,164.826,341.022z"/>
                      <g>
                          <polygon style={{"fill":"#0a0a0a"}} points="292.093,141.613 215.129,218.576 139.875,218.765 217.415,141.225  "/>
                          <path style={{"fill":"#0a0a0a"}} d="M372.125,163.305c0-7.457-3.444-14.106-8.824-18.455l-73.915,73.915l75.254-0.189l7.485-7.485   L372.125,163.305L372.125,163.305z"/>
                      </g>
                      <path style={{"fill":"#D8D8E4"}} d="M256.615,10.001c-46.604,0-84.52,37.916-84.52,84.52v45.063h42.26V94.521  c0-23.302,18.958-42.26,42.26-42.26s42.26,18.958,42.26,42.26v45.063h42.26V94.521C341.135,47.917,303.219,10.001,256.615,10.001z"/>
                      <path d="M300.44,348.091c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.069c-1.859-1.86-4.439-2.931-7.069-2.931  c-2.641,0-5.21,1.07-7.08,2.931c-1.86,1.859-2.92,4.439-2.92,7.069s1.06,5.21,2.92,7.07c1.87,1.86,4.439,2.93,7.08,2.93  C296,351.021,298.57,349.952,300.44,348.091z"/>
                      <path d="M256,246.001c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07s1.069,5.21,2.93,7.069  c1.86,1.86,4.44,2.931,7.07,2.931s5.21-1.07,7.069-2.931c1.861-1.859,2.931-4.439,2.931-7.069s-1.07-5.21-2.931-7.07  C261.21,247.071,258.63,246.001,256,246.001z"/>
                      <path d="M256,277.727c-5.522,0-10,4.478-10,10v15.024c0,5.522,4.478,10,10,10s10-4.478,10-10v-15.024  C266,282.205,261.523,277.727,256,277.727z"/>
                      <path d="M46.774,492.001H38.83v-68.35c0-4.045-2.437-7.691-6.173-9.239c-3.737-1.546-8.039-0.692-10.898,2.168L2.932,435.406  c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.904,10.236,3.904,14.143,0l1.755-1.755v44.207h-7.944c-5.522,0-10,4.478-10,10  s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10S52.296,492.001,46.774,492.001z"/>
                      <path d="M46.774,362.498H38.83v-68.351c0-4.045-2.437-7.691-6.173-9.239c-3.737-1.545-8.039-0.691-10.898,2.168L2.932,305.902  c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.904,10.236,3.904,14.143,0l1.755-1.755v44.208h-7.944c-5.522,0-10,4.478-10,10  s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10S52.296,362.498,46.774,362.498z"/>
                      <path d="M135.607,492.001h-7.944v-68.35c0-4.045-2.437-7.691-6.173-9.239c-3.738-1.546-8.039-0.692-10.898,2.168l-18.826,18.826  c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.904,10.236,3.904,14.143,0l1.755-1.755v44.207H99.72c-5.522,0-10,4.478-10,10  s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10S141.129,492.001,135.607,492.001z"/>
                      <path d="M313.274,492.001h-7.944v-68.35c0-4.045-2.437-7.691-6.173-9.239c-3.737-1.546-8.038-0.692-10.898,2.168l-18.826,18.826  c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.904,10.236,3.904,14.143,0l1.755-1.755v44.207h-7.944c-5.522,0-10,4.478-10,10  s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10S318.796,492.001,313.274,492.001z"/>
                      <path d="M402.107,492.001h-7.944v-68.35c0-4.045-2.437-7.691-6.173-9.239c-3.737-1.546-8.039-0.692-10.898,2.168l-18.826,18.826  c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.904,10.236,3.904,14.143,0l1.755-1.755v44.207h-7.944c-5.522,0-10,4.478-10,10  s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10S407.629,492.001,402.107,492.001z"/>
                      <path d="M403.132,362.498H394v-24.163c0-5.522-4.478-10-10-10s-10,4.478-10,10v24.163h-6.757c-5.522,0-10,4.478-10,10  s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10S408.655,362.498,403.132,362.498z"/>
                      <path d="M502,222.571h-7.944V154.22c0-4.044-2.437-7.691-6.173-9.239c-3.737-1.548-8.039-0.692-10.898,2.167l-18.826,18.826  c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.905,10.236,3.905,14.143,0l1.755-1.755v44.208h-7.944c-5.522,0-10,4.477-10,10  s4.478,10,10,10H502c5.522,0,10-4.477,10-10S507.523,222.571,502,222.571z"/>
                      <path d="M206.055,413.651c-21.75,0-39.445,17.695-39.445,39.445v19.46c0,21.75,17.695,39.445,39.445,39.445  s39.445-17.695,39.445-39.445v-19.46C245.5,431.346,227.805,413.651,206.055,413.651z M225.5,472.556  c0,10.723-8.723,19.445-19.445,19.445s-19.445-8.723-19.445-19.445v-19.46c0-10.723,8.723-19.445,19.445-19.445  s19.445,8.723,19.445,19.445V472.556z"/>
                      <path d="M39.446,144.22C17.696,144.22,0,161.915,0,183.665v19.459c0,21.75,17.695,39.446,39.445,39.446s39.445-17.695,39.445-39.446  v-19.459C78.891,161.915,61.196,144.22,39.446,144.22z M58.891,203.125c0,10.723-8.723,19.446-19.445,19.446S20,213.848,20,203.125  v-19.459c0-10.722,8.723-19.445,19.445-19.445s19.445,8.723,19.445,19.445L58.891,203.125L58.891,203.125z"/>
                      <path d="M123.824,382.498c5.522,0,10-4.478,10-10s-4.478-10-10-10c-10.723,0-19.446-8.724-19.446-19.446v-19.459  c0-5.522-4.478-10-10-10s-10,4.478-10,10v19.459C84.378,364.802,102.073,382.498,123.824,382.498z"/>
                      <path d="M472.555,284.147c-21.75,0-39.445,17.695-39.445,39.445v19.459c0,21.751,17.695,39.446,39.445,39.446  S512,364.802,512,343.051v-19.459C512,301.842,494.305,284.147,472.555,284.147z M492,343.051c0,10.723-8.723,19.446-19.445,19.446  s-19.445-8.724-19.445-19.446v-19.459c0-10.723,8.723-19.445,19.445-19.445S492,312.87,492,323.592V343.051z"/>
                      <path d="M472.555,413.651c-21.75,0-39.445,17.695-39.445,39.445v19.46c0,21.75,17.695,39.445,39.445,39.445S512,494.306,512,472.556  v-19.46C512,431.346,494.305,413.651,472.555,413.651z M492,472.556c0,10.723-8.723,19.445-19.445,19.445  s-19.445-8.723-19.445-19.445v-19.46c0-10.723,8.723-19.445,19.445-19.445S492,442.373,492,453.096V472.556z"/>
                      <path d="M17.074,35.899l1.755-1.755v44.208h-7.944c-5.522,0-10,4.477-10,10s4.478,10,10,10h35.889c5.522,0,10-4.477,10-10  s-4.478-10-10-10H38.83V10.001c0-4.044-2.437-7.691-6.173-9.239C28.92-0.786,24.618,0.07,21.759,2.929L2.932,21.756  c-3.905,3.905-3.905,10.237,0,14.143C6.838,39.804,13.168,39.804,17.074,35.899z"/>
                      <path d="M105.907,35.899l1.755-1.755v44.208h-7.944c-5.522,0-10,4.477-10,10s4.478,10,10,10h35.889c5.522,0,10-4.477,10-10  s-4.478-10-10-10h-7.944V10.001c0-4.044-2.437-7.691-6.173-9.239c-3.738-1.548-8.039-0.692-10.898,2.167L91.765,21.756  c-3.905,3.905-3.905,10.237,0,14.143C95.671,39.804,102.001,39.804,105.907,35.899z"/>
                      <path d="M372.407,35.899l1.755-1.755v44.208h-7.944c-5.522,0-10,4.477-10,10s4.478,10,10,10h35.889c5.522,0,10-4.477,10-10  s-4.478-10-10-10h-7.944V10.001c0-4.044-2.437-7.691-6.173-9.239c-3.737-1.548-8.039-0.692-10.898,2.167l-18.826,18.826  c-3.905,3.905-3.905,10.237,0,14.143C362.171,39.804,368.501,39.804,372.407,35.899z"/>
                      <path d="M472.555,0.001c-21.75,0-39.445,17.695-39.445,39.445v19.46c0,21.75,17.695,39.445,39.445,39.445S512,80.657,512,58.907  v-19.46C512,17.697,494.305,0.001,472.555,0.001z M492,58.907c0,10.722-8.723,19.445-19.445,19.445s-19.445-8.723-19.445-19.445  v-19.46c0-10.722,8.723-19.445,19.445-19.445S492,28.725,492,39.447V58.907z"/>
                      <path d="M384.15,144.22c-1.412,0-2.753,0.296-3.971,0.824c-5.624-11.275-17.271-19.043-30.704-19.043h-1.523V91.953  c0-32.668-17.612-63.171-45.963-79.606c-4.779-2.771-10.897-1.142-13.667,3.636s-1.142,10.897,3.636,13.667  c22.202,12.87,35.994,36.743,35.994,62.303v34.048h-20.976V91.953c0-28.108-22.867-50.976-50.976-50.976  c-28.109,0-50.976,22.868-50.976,50.976v34.048h-20.976V91.953c0-25.559,13.791-49.432,35.991-62.302  c4.777-2.77,6.405-8.889,3.636-13.667c-2.769-4.777-8.886-6.405-13.667-3.636c-28.349,16.435-45.96,46.938-45.96,79.604v34.049  h-1.523c-18.91,0-34.294,15.384-34.294,34.294v147.079c0,24.067,19.581,43.647,43.648,43.647h29.359v11.476h-7.944  c-5.522,0-10,4.478-10,10s4.478,10,10,10h35.889c5.522,0,10-4.478,10-10s-4.478-10-10-10h-7.944v-11.476h29.266  c5.522,0,10-4.478,10-10s-4.478-10-10-10H171.88c-13.04,0-23.648-10.608-23.648-23.647v-79.547h215.537v79.547  c0,13.039-10.608,23.647-23.648,23.647h-12.29c-5.522,0-10,4.478-10,10s4.478,10,10,10h12.29c24.067,0,43.648-19.58,43.648-43.647  v-64.823c0.127,0.005,0.252,0.019,0.381,0.019c21.75,0,39.445-17.695,39.445-39.446v-19.459  C423.595,161.915,405.9,144.22,384.15,144.22z M284.626,207.828h-48.425l61.827-61.827h47.866l-59.596,59.596  C285.62,206.275,285.068,207.029,284.626,207.828z M159.669,207.828l61.233-61.233c0.19-0.191,0.364-0.392,0.536-0.593h48.305  l-61.827,61.826H159.669z M225.025,91.953c0-17.08,13.896-30.976,30.976-30.976s30.976,13.896,30.976,30.976v34.048h-61.951V91.953  H225.025z M162.526,146.001h30.684l-44.978,44.979v-30.685C148.232,152.414,154.644,146.001,162.526,146.001z M312.353,207.828  l50.979-50.979c0.275,1.106,0.438,2.256,0.438,3.447v47.532H312.353z M403.595,203.125c0,10.723-8.723,19.446-19.445,19.446  c-0.128,0-0.253,0.014-0.381,0.019v-58.389c0.127,0.005,0.252,0.019,0.381,0.019c10.723,0,19.445,8.723,19.445,19.445V203.125z"/>
                      <path d="M256.613,20.004c-0.025,0-0.05,0-0.074,0L256,20.001c-5.522,0-10-4.477-10-10s4.478-10,10-10l0.684,0.003  c5.522,0.04,9.968,4.549,9.928,10.072C266.572,15.574,262.102,20.004,256.613,20.004z"/>
                  </g>
                </svg>
                <div className={hero.title}>DiscordCrypt</div>
              </Link>
            </div>
            <div className={hero.descriptionContainer}>Provides end to end message (50mb files supported) encryption for Discord.</div>
          </div>
          <div className={hero.featuredCard} >
            <div className={hero.imgContainer}>
              <Link to="/plugins/voice-chat-notifications/" className={hero.svgContainer}>
                <svg height="512px" id="Layer_1" style={{"enableBackground":"new 0 0 512.001 512.001"}} width="512px" version="1.1" viewBox="0 0 512.001 512.001" x="0px" y="0px" xmlSpace="preserve">
                  <g>
                      <path style={{"fill":"#0a0a0a"}} d="M450.671,156.853H9.013c-4.978,0-9.013-4.036-9.013-9.013V39.678c0-4.978,4.036-9.013,9.013-9.013  h441.658c4.978,0,9.013,4.036,9.013,9.013v108.161C459.685,152.817,455.649,156.853,450.671,156.853z"/>
                      <path style={{"fill":"#FF5050"}} d="M108.161,156.853H9.013c-4.978,0-9.013-4.036-9.013-9.013V39.678c0-4.978,4.036-9.013,9.013-9.013  h99.148c4.978,0,9.013,4.036,9.013,9.013v108.161C117.175,152.817,113.139,156.853,108.161,156.853z"/>
                      <path style={{"fill":"#808080"}} d="M306.457,84.745H153.228c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013h153.228  c4.982,0,9.013,4.031,9.013,9.013S311.439,84.745,306.457,84.745z"/>
                      <g>
                          <path className="active-path" style={{"fill":"#808080"}} d="M414.618,120.799H243.363c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013h171.255   c4.982,0,9.013,4.031,9.013,9.013S419.6,120.799,414.618,120.799z"/>
                          <path className="active-path" style={{"fill":"#808080"}} d="M207.309,120.799h-54.081c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013h54.081   c4.982,0,9.013,4.031,9.013,9.013S212.291,120.799,207.309,120.799z"/>
                      </g>
                      <g>
                          <path style={{"fill":"#FFFFFF"}} d="M58.587,111.786c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013   c7.455,0,13.52-6.065,13.52-13.52s-6.065-13.52-13.52-13.52s-13.52,6.065-13.52,13.52c0,4.982-4.031,9.013-9.013,9.013   s-9.013-4.031-9.013-9.013c0-17.394,14.154-31.547,31.547-31.547s31.547,14.154,31.547,31.547S75.981,111.786,58.587,111.786z"/>
                          <path style={{"fill":"#FFFFFF"}} d="M58.675,138.826c-4.982,0-9.057-4.031-9.057-9.013c0-4.982,3.987-9.013,8.969-9.013h0.088   c4.982,0,9.013,4.031,9.013,9.013C67.689,134.795,63.657,138.826,58.675,138.826z"/>
                      </g>
                      <path style={{"fill":"#0a0a0a"}} d="M450.671,319.094H9.013c-4.978,0-9.013-4.036-9.013-9.013V201.92c0-4.978,4.036-9.013,9.013-9.013  h441.658c4.978,0,9.013,4.036,9.013,9.013v108.161C459.685,315.059,455.649,319.094,450.671,319.094z"/>
                      <path style={{"fill":"#FFDC64"}} d="M108.161,319.094H9.013c-4.978,0-9.013-4.036-9.013-9.013V201.92c0-4.978,4.036-9.013,9.013-9.013  h99.148c4.978,0,9.013,4.036,9.013,9.013v108.161C117.175,315.059,113.139,319.094,108.161,319.094z"/>
                      <path style={{"fill":"#808080"}} d="M306.457,246.987H153.228c-4.982,0-9.013-4.031-9.013-9.013c0-4.982,4.031-9.013,9.013-9.013h153.228  c4.982,0,9.013,4.031,9.013,9.013C315.47,242.956,311.439,246.987,306.457,246.987z"/>
                      <path className="active-path" style={{"fill":"#808080"}} d="M207.309,283.041h-54.081c-4.982,0-9.013-4.031-9.013-9.013c0-4.982,4.031-9.013,9.013-9.013h54.081  c4.982,0,9.013,4.031,9.013,9.013C216.322,279.009,212.291,283.041,207.309,283.041z"/>
                      <g>
                          <path style={{"fill":"#FFFFFF"}} d="M58.587,274.027c-4.982,0-9.013-4.031-9.013-9.013c0-4.982,4.031-9.013,9.013-9.013   c7.455,0,13.52-6.065,13.52-13.52c0-7.455-6.065-13.52-13.52-13.52s-13.52,6.065-13.52,13.52c0,4.982-4.031,9.013-9.013,9.013   s-9.013-4.031-9.013-9.013c0-17.393,14.154-31.547,31.547-31.547s31.547,14.154,31.547,31.547S75.981,274.027,58.587,274.027z"/>
                          <path style={{"fill":"#FFFFFF"}} d="M58.675,301.068c-4.982,0-9.057-4.031-9.057-9.013s3.987-9.013,8.969-9.013h0.088   c4.982,0,9.013,4.031,9.013,9.013S63.657,301.068,58.675,301.068z"/>
                      </g>
                      <path style={{"fill":"#0a0a0a"}} d="M450.671,481.336H9.013C4.036,481.336,0,477.3,0,472.323V364.162c0-4.978,4.036-9.013,9.013-9.013  h441.658c4.978,0,9.013,4.036,9.013,9.013v108.161C459.685,477.3,455.649,481.336,450.671,481.336z"/>
                      <path style={{"fill":"#7289DA"}} d="M108.161,481.336H9.013C4.036,481.336,0,477.3,0,472.323V364.162c0-4.978,4.036-9.013,9.013-9.013  h99.148c4.978,0,9.013,4.036,9.013,9.013v108.161C117.175,477.3,113.139,481.336,108.161,481.336z"/>
                      <path style={{"fill":"#808080"}} d="M306.457,409.229H153.228c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013h153.228  c4.982,0,9.013,4.031,9.013,9.013S311.439,409.229,306.457,409.229z"/>
                      <path className="active-path" style={{"fill":"#808080"}} d="M207.309,445.282h-54.081c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013h54.081  c4.982,0,9.013,4.031,9.013,9.013S212.291,445.282,207.309,445.282z"/>
                      <g>
                          <path style={{"fill":"#FFFFFF"}} d="M58.587,436.269c-4.982,0-9.013-4.031-9.013-9.013s4.031-9.013,9.013-9.013   c7.455,0,13.52-6.065,13.52-13.52s-6.065-13.52-13.52-13.52s-13.52,6.065-13.52,13.52c0,4.982-4.031,9.013-9.013,9.013   s-9.013-4.031-9.013-9.013c0-17.394,14.154-31.547,31.547-31.547s31.547,14.154,31.547,31.547S75.981,436.269,58.587,436.269z"/>
                          <path style={{"fill":"#FFFFFF"}} d="M58.675,463.309c-4.982,0-9.057-4.031-9.057-9.013c0-4.982,3.987-9.013,8.969-9.013h0.088   c4.982,0,9.013,4.031,9.013,9.013C67.689,459.278,63.657,463.309,58.675,463.309z"/>
                      </g>
                      <g>
                          <path style={{"fill":"#D5DCED"}} d="M450.671,355.148h-45.067v53.47c0,12.43,10.114,22.541,22.546,22.541   c4.384,0,8.65-1.277,12.337-3.692l3.616-2.371l15.582,37.618v-98.553C459.685,359.183,455.649,355.148,450.671,355.148z"/>
                          <path style={{"fill":"#D5DCED"}} d="M444.073,280.636c-4.262-4.262-9.909-6.609-15.902-6.609c-12.443,0-22.566,10.113-22.566,22.543   v22.525h45.067c4.978,0,9.013-4.036,9.013-9.013v-13.832L444.073,280.636z"/>
                      </g>
                      <path style={{"fill":"#464655"}} d="M423.631,296.57v112.048c0,3.584,3.979,5.734,6.978,3.769l21.819-14.3l27.947,67.471  c1.905,4.599,7.178,6.783,11.776,4.879l13.664-5.66c4.599-1.905,6.783-7.178,4.879-11.777l-27.947-67.471l25.638-5.189  c3.523-0.713,4.835-5.062,2.293-7.604l-79.352-79.352C428.486,290.543,423.631,292.554,423.631,296.57z"/>
                      <g>
                          <path className="active-path" style={{"fill":"#808080"}} d="M396.591,283.041H243.363c-4.978,0-9.013-4.036-9.013-9.013l0,0c0-4.978,4.036-9.013,9.013-9.013   h153.228c4.978,0,9.013,4.036,9.013,9.013l0,0C405.604,279.005,401.569,283.041,396.591,283.041z"/>
                          <path className="active-path" style={{"fill":"#808080"}} d="M396.591,445.282H243.363c-4.978,0-9.013-4.036-9.013-9.013l0,0c0-4.978,4.036-9.013,9.013-9.013   h153.228c4.978,0,9.013,4.036,9.013,9.013l0,0C405.604,441.247,401.569,445.282,396.591,445.282z"/>
                      </g>
                  </g>
                </svg>
                <div className={hero.title}>Voice Chat Notifications</div>
              </Link>
            </div>
            <div className={hero.descriptionContainer}>Displays activity notifications based on the voice channel you're in.</div>
          </div>
          <div className={hero.featuredCard} >
            <div className={hero.imgContainer}>
              <Link to="/plugins/do-not-track/" className={hero.svgContainer}>
                <svg height="512px" width="512px" viewBox="0 -46 512 512">
                  <g>
                      <path className="active-path" style={{"fill":"#0a0a0a"}} d="m479.859375 10.09375h21.304687v70.796875h-384.285156v-70.796875zm0 0" fill="#5e6e82"/>
                      <path d="m116.878906 80.890625h384.285156v257.605469h-107.527343" fill="#e3e3e3"/>
                      <path className="active-path" style={{"fill":"#0a0a0a"}} d="m372.332031 81.210938h21.304688v70.800781h-384.289063v-70.800781zm0 0" fill="#5e6e82"/>
                      <path d="m9.347656 152.011719h384.289063v257.605469h-384.289063zm0 0" fill="#fff"/>
                      <path d="m151.113281 250.914062c0-30.519531 21.949219-55.347656 48.929688-55.347656s48.933593 24.828125 48.933593 55.347656" fill="#fff"/>
                      <path style={{"fill":"#7289DA"}} d="m177.515625 364.722656h-28.992187c-8.652344 0-15.664063-7.015625-15.664063-15.664062v-82.480469c0-8.652344 7.011719-15.664063 15.664063-15.664063h101.945312c8.652344 0 15.664062 7.011719 15.664062 15.664063v82.480469c0 8.648437-7.011718 15.664062-15.664062 15.664062zm0 0" fill="#ff6379"/>
                      <path d="m215.726562 295.96875c0 8.261719-6.699218 14.960938-14.960937 14.960938-8.265625 0-14.964844-6.699219-14.964844-14.960938 0-8.265625 6.699219-14.964844 14.964844-14.964844 8.261719 0 14.960937 6.699219 14.960937 14.964844zm0 0" fill="#fff5f5"/>
                      <path style={{"fill":"#000000"}} d="m123.507812 266.578125v82.480469c0 14.199218 11.554688 25.753906 25.757813 25.753906h101.949219c14.199218 0 25.753906-11.550781 25.753906-25.753906v-82.480469c0-11.390625-7.433594-21.070313-17.703125-24.460937-3.890625-31.9375-28.621094-56.644532-58.476563-56.644532-29.746093 0-54.410156 24.527344-58.433593 56.296875-10.859375 3.027344-18.847657 13-18.847657 24.808594zm133.277344 82.480469c0 3.070312-2.5 5.570312-5.574218 5.570312h-101.949219c-3.070313 0-5.570313-2.5-5.570313-5.570312v-82.484375c0-3.070313 2.5-5.570313 5.570313-5.570313h101.949219c3.074218 0 5.574218 2.5 5.574218 5.570313zm-55.996094-143.398438c18.4375 0 33.90625 15.050782 37.851563 35.160156h-75.707031c3.949218-20.109374 19.417968-35.160156 37.855468-35.160156zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m201.507812 270.914062c-13.816406 0-25.054687 11.238282-25.054687 25.054688 0 10.222656 6.160156 19.03125 14.960937 22.921875v17.550781c0 5.574219 4.519532 10.09375 10.09375 10.09375 5.570313 0 10.089844-4.519531 10.089844-10.09375v-17.550781c8.804688-3.890625 14.964844-12.699219 14.964844-22.925781 0-13.8125-11.242188-25.050782-25.054688-25.050782zm0 20.183594c2.683594 0 4.871094 2.183594 4.871094 4.871094 0 2.683594-2.1875 4.867188-4.871094 4.867188-2.683593 0-4.871093-2.183594-4.871093-4.867188 0-2.6875 2.1875-4.871094 4.871093-4.871094zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m501.90625 0h-384.285156c-5.574219 0-10.09375 4.519531-10.09375 10.09375v61.027344h-97.433594c-5.574219 0-10.09375 4.519531-10.09375 10.089844v328.40625c0 5.570312 4.519531 10.089843 10.09375 10.089843h384.285156c5.570313 0 10.089844-4.519531 10.089844-10.089843v-61.027344h97.4375c5.574219 0 10.09375-4.519532 10.09375-10.09375v-328.402344c0-5.574219-4.519531-10.09375-10.09375-10.09375zm-117.621094 399.523438h-364.101562v-237.417969h364.101562zm0-257.601563h-364.101562v-50.617187h364.101562zm107.53125 186.480469h-87.347656v-237.417969h87.347656zm0-257.601563h-364.101562v-50.617187h364.101562zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m428.289062 118.621094h35.011719v27.457031c0 5.574219 4.519531 10.09375 10.089844 10.09375 5.574219 0 10.09375-4.519531 10.09375-10.09375v-37.550781c0-5.574219-4.519531-10.09375-10.09375-10.09375h-45.101563c-5.570312 0-10.089843 4.519531-10.089843 10.09375 0 5.574218 4.519531 10.09375 10.089843 10.09375zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m428.289062 321.054688h45.101563c5.574219 0 10.09375-4.519532 10.09375-10.09375v-37.546876c0-5.574218-4.519531-10.09375-10.09375-10.09375-5.570313 0-10.089844 4.519532-10.089844 10.09375v27.457032h-35.011719c-5.570312 0-10.089843 4.519531-10.089843 10.089844 0 5.574218 4.519531 10.09375 10.089843 10.09375zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m38.222656 227.289062c5.574219 0 10.09375-4.519531 10.09375-10.089843v-27.460938h35.011719c5.570313 0 10.089844-4.519531 10.089844-10.089843 0-5.574219-4.519531-10.09375-10.089844-10.09375h-45.105469c-5.570312 0-10.089844 4.519531-10.089844 10.09375v37.550781c0 5.570312 4.519532 10.089843 10.089844 10.089843zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m38.222656 392.175781h45.105469c5.570313 0 10.089844-4.519531 10.089844-10.09375s-4.519531-10.09375-10.089844-10.09375h-35.011719v-27.457031c0-5.570312-4.519531-10.089844-10.09375-10.089844-5.570312 0-10.089844 4.519532-10.089844 10.089844v37.550781c0 5.574219 4.519532 10.09375 10.089844 10.09375zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m320.761719 189.738281h35.007812v27.460938c0 5.570312 4.519531 10.089843 10.09375 10.089843s10.09375-4.519531 10.09375-10.089843v-37.550781c0-5.574219-4.519531-10.09375-10.09375-10.09375h-45.101562c-5.574219 0-10.09375 4.519531-10.09375 10.09375 0 5.570312 4.519531 10.089843 10.09375 10.089843zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m320.761719 392.175781h45.101562c5.574219 0 10.09375-4.519531 10.09375-10.09375v-37.550781c0-5.570312-4.519531-10.089844-10.09375-10.089844s-10.09375 4.519532-10.09375 10.089844v27.457031h-35.007812c-5.574219 0-10.09375 4.519531-10.09375 10.09375s4.519531 10.09375 10.09375 10.09375zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m125.09375 190.050781c.769531 0 1.546875-.085937 2.324219-.269531l.347656-.082031c5.425781-1.28125 8.789063-6.714844 7.507813-12.140625-1.28125-5.421875-6.71875-8.785156-12.140626-7.503906l-.34375.082031c-5.425781 1.277343-8.789062 6.710937-7.507812 12.136719 1.09375 4.644531 5.238281 7.777343 9.8125 7.777343zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m45.105469 125.804688c.761719 0 1.535156-.085938 2.308593-.269532l.34375-.082031c5.429688-1.265625 8.800782-6.695313 7.53125-12.121094-1.265624-5.425781-6.691406-8.808593-12.125-7.53125l-.34375.078125c-5.429687 1.269532-8.800781 6.695313-7.53125 12.125 1.085938 4.65625 5.234376 7.800782 9.816407 7.800782zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m78.347656 125.804688c.757813 0 1.527344-.085938 2.296875-.265626l.347657-.082031c5.429687-1.265625 8.804687-6.691406 7.539062-12.117187-1.261719-5.429688-6.6875-8.804688-12.117188-7.542969l-.347656.082031c-5.429687 1.265625-8.804687 6.691406-7.539062 12.117188 1.085937 4.660156 5.234375 7.808594 9.820312 7.808594zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m111.585938 125.804688c.761718 0 1.535156-.085938 2.304687-.269532l.347656-.082031c5.425781-1.265625 8.800781-6.695313 7.53125-12.121094s-6.691406-8.808593-12.125-7.53125l-.34375.078125c-5.429687 1.269532-8.800781 6.695313-7.535156 12.125 1.089844 4.65625 5.238281 7.800782 9.820313 7.800782zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m152.21875 56.914062c.769531 0 1.546875-.089843 2.324219-.273437l.347656-.082031c5.425781-1.28125 8.789063-6.714844 7.507813-12.136719-1.28125-5.425781-6.71875-8.789063-12.140626-7.507813l-.34375.082032c-5.425781 1.277344-8.789062 6.714844-7.507812 12.136718 1.09375 4.648438 5.238281 7.78125 9.8125 7.78125zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m185.460938 56.914062c.765624 0 1.546874-.089843 2.324218-.273437l.347656-.082031c5.425782-1.28125 8.785157-6.714844 7.507813-12.136719-1.28125-5.425781-6.71875-8.789063-12.140625-7.507813l-.347656.082032c-5.425782 1.277344-8.785156 6.714844-7.503906 12.136718 1.09375 4.648438 5.234374 7.78125 9.8125 7.78125zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m218.699219 56.914062c.769531 0 1.550781-.089843 2.332031-.273437l.347656-.082031c5.421875-1.285156 8.78125-6.722656 7.5-12.144532-1.285156-5.425781-6.722656-8.777343-12.144531-7.5l-.347656.082032c-5.421875 1.28125-8.78125 6.71875-7.5 12.144531 1.097656 4.644531 5.242187 7.773437 9.8125 7.773437zm0 0"/>
                      <path style={{"fill":"#000000"}} d="m151.15625 126.707031h47.765625c5.574219 0 10.089844-4.519531 10.089844-10.09375s-4.515625-10.09375-10.089844-10.09375h-47.765625c-5.574219 0-10.09375 4.519531-10.09375 10.09375s4.519531 10.09375 10.09375 10.09375zm0 0"/>
                  </g>
                </svg>
                <div className={hero.title}>Do Not Track</div>
              </Link>
            </div>
            <div className={hero.descriptionContainer}>Stops Discord from tracking everything you do like Sentry and Analytics.</div>
          </div>
        </div>
      </div>
      <div className={plugin.content}
        >
        <div className={plugin.softwareBar}>
            <Software/>
        </div>
        <div className={plugin.cardsContainer}
        >
        {pluginList.edges.map(({ node }) => (
          <div className={plugin.pluginCard} key={node.id} title={node.frontmatter.title}>
          {node.frontmatter.status ?
            <div className={plugin.topStatus} title={"Status of " + node.frontmatter.title + ": " + node.frontmatter.status}>{node.frontmatter.status}</div>
          :
            <div className={plugin.topStatus} title={"Status of " + node.frontmatter.title + ": Unknown"}>Unknown</div>
          }
            {node.frontmatter.thumbnail ?
              <Link to={"plugins/" + node.fields.slug}  className={plugin.imgContainer}>
                <LazyLoad once={true} height="100%"
                placeholder={<img className={plugin.img} alt={node.frontmatter.title} src={Mobile} style={{backgroundImage :  `url(${Missing})` }}/>}>
                  <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + "'s thumbnail"} title={node.frontmatter.title + "'s thumbnail"} />
                </LazyLoad>
              </Link>
              :
              <Link to={"plugins/" + node.fields.slug} className={plugin.missingImgContainer}>
                <img className={plugin.missingImg} src={Mobile} alt="Missing Plugin Thumbnail" title="Missing Plugin Thumbnail" />
              </Link>
              }
              <div className={plugin.titleContainer}>
                <Link to={"plugins/" + node.fields.slug} className={plugin.title}>{node.frontmatter.title}</Link>
              </div>
              <div className={plugin.authorDetails}>
                <Link title={"Made by " + node.frontmatter.author} to={"/profile/" + node.frontmatter.author} className={plugin.author}>{node.frontmatter.author + " /"}</Link>
              </div>
              <div className={plugin.description}>
                <p className={plugin.p}>{node.excerpt}</p>
              </div>
              {node.frontmatter.tags &&
                <div className={plugin.tagsContainer}>
                  {node.frontmatter.tags.map(tag => (
                    <Link to={`/plugins/tags/${kebabCase(tag)}/`} key={tag} className={plugin.tag}>
                      #{tag}
                    </Link>
                  ))}
                </div>
              }
          </div>
        ))}
        </div>
      </div>

    </section>

    </div>
    <div className={plugin.uploadContainer}>
        <Link title="Want to publish your plugin?" to="/plugins/upload-a-plugin/" className={plugin.uploadBtn}>
        +
        </Link>
    </div>
    <div className={plugin.helpContainer}>
        <Link data-balloon="Want to publish your plugin?" data-balloon-pos="left" to="/plugins/upload-a-plugin" className={plugin.btn} target="blank">?</Link>
    </div>
  </Layout>
)
}

export default Plugins;

export const allPluginsQuery = graphql`
  query allPluginsQuery {
    all:allMarkdownRemark(filter: { collection: { eq: "plugins" } }) {
      group(field: collection) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          excerpt(pruneLength: 65)
          html
          id
          frontmatter {
            title
            sub
            author
            thumbnail
            github_profile_url
            download
            support
            layout
            status
            description
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    },
    featured:allMarkdownRemark(filter: { collection: { eq: "plugins" } frontmatter: { featured: { eq: true } } }) {
      group(field: collection) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          excerpt(pruneLength: 65)
          html
          id
          frontmatter {
            title
            sub
            author
            thumbnail
            github_profile_url
            download
            support
            layout
            description
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`