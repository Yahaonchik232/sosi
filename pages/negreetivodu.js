import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'

const NegreetivOdu = (props) => {
  return (
    <>
      <div className="page-container10">
        <Head>
          <title>Стиральная машина не греет воду - что делать?</title>
          <meta property="og:title" content="Стиральная машина не греет воду - что делать?" />
        </Head>
        <Header />
        <main className="page-main">
          <div className="page-left-main-box">
            <div className="page-headertextwashermachine">
              <img
                alt="image"
                src="/group%20385-200h.png"
                className="page-image1"
              />
              <h1 className="page-text10">
                <span className="page-text11">
                  Стиральная машина не греет воду —
                </span>
                <span className="page-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="page-text13">что делать?</span>
              </h1>
            </div>
            <div className="page-container12">
              <h2 className="zagolovki2">
                Здесь будет размещен контент о проблеме с нагревом воды в стиральной машине
              </h2>
              <p className="vicetext">
                Данная страница готова для наполнения содержимым. 
                Стр��ктура страницы скопирована с базовой страницы и адаптирована под тему "не греет воду".
              </p>
            </div>
          </div>
        </main>
        <MainFooter />
      </div>
      <style jsx>
        {`
          .page-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .page-main {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1471px;
            min-height: 711px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .page-left-main-box {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 846px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .page-headertextwashermachine {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-image1 {
            width: 151px;
            height: 151px;
            display: none;
            object-fit: cover;
          }
          .page-text10 {
            color: rgb(80, 80, 80);
            width: 100%;
            height: auto;
            font-size: 32px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text11 {
            color: var(--dl-color-theme-neutral-dark);
            font-style: normal;
          }
          .page-text12 {
            font-style: normal;
          }
          .page-text13 {
            color: #45c5ed;
            font-weight: 500;
          }
          .page-container12 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding: var(--dl-layout-space-twounits);
          }
        `}
      </style>
    </>
  )
}

export default NegreetivOdu
