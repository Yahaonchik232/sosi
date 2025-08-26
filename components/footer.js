import React, { Fragment } from 'react'
import Blue from './blue'
import Blue1 from './blue1'
import Blue2 from './blue2'

const Footer = () => {

  return (
    <div className="footer-container">
      <section className="footer-section">
        <p className="footer-text">
          <span className="footer-text-part1">В</span>
          <span className="footer-text-brand">РемСтирМаш</span>
          <span className="footer-text-part2"></span>
          <span className="footer-text-part3">
            мы з��бо��имся о надёжной работе вашей техники во всех уголках Одессы.
          </span>
          <br className="footer-text-break1" />
          <span className="footer-text-part4">
            Профессионально устраняем любые неисправности стиральных машин — от
            самых простых до с��мых сложных.
          </span>
          <br className="footer-text-break2" />
          <span className="footer-text-part5">Просто позвоните или</span>
          <span className="footer-text-link">оставьте заявку</span>
          <span className="footer-text-part6">, и мы вам перезвоним.</span>
        </p>
        <div className="footer-container-main">
          <svg
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
            className="footer-icon-corner1"
          >
            <circle
              r="4"
              cx="5"
              cy="5"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
            className="footer-icon-corner2"
          >
            <circle
              r="4"
              cx="5"
              cy="5"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
            className="footer-icon-corner3"
          >
            <circle
              r="4"
              cx="5"
              cy="5"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
            className="footer-icon-corner4"
          >
            <circle
              r="4"
              cx="5"
              cy="5"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          
          {/* Карточки сервисов */}
          <div className="footer-services-container">
            <div className="footer-service-card1">
              <strong className="footer-service-title1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Бесплатный выезд',
                  }}
                ></span>
              </strong>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 110 20"
                preserveAspectRatio="none"
                className="footer-service-divider1"
              >
                <defs>
                  <linearGradient
                    id="grad23"
                    x1="0"
                    x2="110"
                    y1="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#303030"></stop>
                    <stop offset="100%" stopColor="#4EC8ED"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 H110"
                  fill="none"
                  stroke="url(#grad23)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <p className="footer-service-desc1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Бесплатный выезд специалиста в любой район города',
                  }}
                ></span>
              </p>
            </div>
            <img
              alt=""
              src="/ICONS/1.svg"
              loading="lazy"
              className="footer-service-icon1"
            />
          </div>
          
          <div className="footer-services-container2">
            <div className="footer-service-card2">
              <strong className="footer-service-title2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Честные цены',
                  }}
                ></span>
              </strong>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 110 20"
                preserveAspectRatio="none"
                className="footer-service-divider2"
              >
                <defs>
                  <linearGradient
                    id="grad23"
                    x1="0"
                    x2="110"
                    y1="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#303030"></stop>
                    <stop offset="100%" stopColor="#4EC8ED"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 H110"
                  fill="none"
                  stroke="url(#grad23)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <p className="footer-service-desc2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Детально обсуждаем объем работ и стоимость до начала ремонта.',
                  }}
                ></span>
              </p>
            </div>
            <img
              alt=""
              src="/ICONS/25.svg"
              loading="lazy"
              className="footer-service-icon2"
            />
          </div>
          
          <div className="footer-services-container3">
            <div className="footer-service-card3">
              <strong className="footer-service-title3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Ремонт в день обращения',
                  }}
                ></span>
              </strong>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 110 20"
                preserveAspectRatio="none"
                className="footer-service-divider3"
              >
                <defs>
                  <linearGradient
                    id="grad23"
                    x1="0"
                    x2="110"
                    y1="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#303030"></stop>
                    <stop offset="100%" stopColor="#4EC8ED"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 H110"
                  fill="none"
                  stroke="url(#grad23)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <p className="footer-service-desc3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Не нужно ждать несколько дней - ваша техника заработает уже сегодня.',
                  }}
                ></span>
              </p>
            </div>
            <img
              alt=""
              src="/ICONS/3.svg"
              loading="lazy"
              className="footer-service-icon3"
            />
          </div>
          
          {/* Вертикальные разделители */}
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 20 110"
            preserveAspectRatio="none"
            className="footer-vertical-divider1"
          >
            <path
              d="M10 0 V110"
              fill="none"
              stroke="#000000"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 20 110"
            preserveAspectRatio="none"
            className="footer-vertical-divider2"
          >
            <path
              d="M10 0 V110"
              fill="none"
              stroke="#000000"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
          
          {/* Горизонтальные разделители */}
          <svg
            width="330"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 330 20"
            preserveAspectRatio="none"
            className="footer-horizontal-divider1"
          >
            <path
              d="M0 10 H330"
              fill="none"
              stroke="#000000"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
          <svg
            width="330"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 330 20"
            preserveAspectRatio="none"
            className="footer-horizontal-divider2"
          >
            <path
              d="M0 10 H330"
              fill="none"
              stroke="#000000"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
        </div>
        
        {/* Заголовок ценообразования */}
        <div className="footer-pricing-header">
          <h2 className="footer-pricing-title">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Цены',
              }}
            ></span>
          </h2>
        </div>
        
        {/* Карточки цен */}
        <section className="footer-pricing-section">
          <Blue 
            text={
              <Fragment>
                <span className="footer-price-text1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="footer-price-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="footer-price-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="footer-price-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></Blue>
          <Blue2
            text={
              <Fragment>
                <span className="footer-price-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="footer-price-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="footer-price-text7">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="footer-price-text8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></Blue2>
          <Blue1
            text={
              <Fragment>
                <span className="footer-price-text9">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Ремонт сливного насоса',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="footer-price-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'от 500 грн',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="footer-price-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: '7',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="footer-price-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Вызвать мастера',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></Blue1>
          <Blue2
            text={
              <Fragment>
                <span className="footer-price-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="footer-price-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="footer-price-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="footer-price-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></Blue2>
        </section>
      </section>
      
      <style jsx>{`
        .footer-container {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-bottom: var(--dl-layout-space-twounits);
          background-image: url('/backgrounds/dada.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;
          justify-content: center;
        }

        .footer-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-bottom: var(--dl-layout-space-twounits);
          background-image: url('/backgrounds/dada.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;
          justify-content: center;
        }
        
        .footer-text {
          color: rgb(55, 55, 55);
          width: 100%;
          height: auto;
          font-size: 17px;
          max-width: 950px;
          margin-top: var(--dl-layout-space-fourunits);
          text-align: center;
          font-family: 'Noto Serif SC';
          font-weight: 400;
          line-height: 1.25;
          font-stretch: normal;
          padding-left: var(--dl-layout-space-unit);
          margin-bottom: var(--dl-layout-space-unit);
          padding-right: var(--dl-layout-space-unit);
          text-decoration: none;
        }
        
        .footer-text-part1 { font-style: normal; }
        .footer-text-brand { 
          color: #87ceeb; 
          font-style: normal; 
          font-weight: 600; 
        }
        .footer-text-part2 { font-style: normal; }
        .footer-text-part3 { font-style: normal; }
        .footer-text-part4 { font-style: normal; }
        .footer-text-part5 { font-style: normal; }
        .footer-text-link { 
          color: #87ceeb; 
          font-weight: 500; 
          text-decoration: underline; 
        }
        .footer-text-part6 { font-style: normal; }
        .footer-text-break1 { text-decoration: none; }
        .footer-text-break2 { text-decoration: none; }
        
        .footer-container-main {
          gap: var(--dl-layout-space-twounits);
          width: 100%;
          height: 100%;
          display: flex;
          position: relative;
          background: linear-gradient(180deg, #fdfdf9 0%, #faf8f9 100%);
          box-shadow: 0px 10px 20px 0px #d4d4d4;
          margin-top: 30px;
          min-height: 200px;
          align-items: center;
          margin-left: 0px;
          margin-right: 0px;
          border-radius: var(--dl-layout-radius-cardradius);
          margin-bottom: 67px;
          flex-direction: row;
          justify-content: center;
        }
        
        .footer-icon-corner1 {
          right: -13px;
          width: 9px;
          bottom: -16px;
          height: 9px;
          z-index: 1;
          position: absolute;
        }
        
        .footer-icon-corner2 {
          top: -14px;
          right: -13px;
          width: 9px;
          height: 9px;
          z-index: 1;
          position: absolute;
        }
        
        .footer-icon-corner3 {
          top: -14px;
          left: -13px;
          width: 9px;
          height: 9px;
          z-index: 1;
          position: absolute;
        }
        
        .footer-icon-corner4 {
          left: -13px;
          width: 9px;
          bottom: -16px;
          height: 9px;
          z-index: 1;
          position: absolute;
        }
        
        .footer-services-container {
          gap: var(--dl-layout-space-twounits);
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 277px;
          min-width: auto;
          align-items: center;
          flex-direction: row-reverse;
          justify-content: flex-start;
        }
        
        .footer-service-card1 {
          gap: var(--dl-layout-space-unit);
          flex: 0 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 170px;
          align-items: flex-start;
          flex-direction: column;
        }
        
        .footer-service-title1 {
          fill: #5ac3e8;
          color: rgb(0, 0, 0);
          width: 100%;
          height: 100%;
          font-size: 16px;
          font-style: normal;
          font-family: 'Noto Serif SC';
          font-weight: 500;
          white-space: normal;
          overflow-wrap: break-word;
          letter-spacing: 0.3px;
        }
        
        .footer-service-divider1 {
          height: 5px;
          max-width: 100px;
        }
        
        .footer-service-desc1 {
          fill: #333333;
          color: #333333;
          width: 100%;
          height: auto;
          font-size: 14.5px;
          font-style: italic;
          font-family: 'Nunito';
          font-weight: 300;
          white-space: normal;
          overflow-wrap: break-word;
        }
        
        .footer-service-icon1 {
          width: 65px;
          height: 66px;
          object-fit: cover;
        }
        
        .footer-services-container2 {
          gap: var(--dl-layout-space-twounits);
          flex: 0 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 285px;
          min-width: 50px;
          align-items: center;
          flex-direction: row-reverse;
          justify-content: flex-start;
        }
        
        .footer-service-card2 {
          gap: var(--dl-layout-space-unit);
          flex: 0 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 180px;
          align-items: flex-start;
          flex-direction: column;
        }
        
        .footer-service-title2 {
          fill: #5ac3e8;
          color: rgb(0, 0, 0);
          width: 100%;
          height: 100%;
          font-size: 16px;
          font-style: normal;
          font-family: 'Noto Serif SC';
          font-weight: 500;
          white-space: normal;
          overflow-wrap: break-word;
          letter-spacing: 0.3px;
        }
        
        .footer-service-divider2 {
          height: 5px;
          max-width: 100px;
        }
        
        .footer-service-desc2 {
          fill: #333333;
          color: #333333;
          width: 100%;
          height: auto;
          font-size: 14.5px;
          font-style: italic;
          font-family: 'Nunito';
          font-weight: 300;
          white-space: normal;
          overflow-wrap: break-word;
        }
        
        .footer-service-icon2 {
          width: 74px;
          height: 62px;
          object-fit: cover;
        }
        
        .footer-services-container3 {
          gap: var(--dl-layout-space-twounits);
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 285px;
          min-width: 50px;
          align-items: center;
          padding-top: 4px;
          flex-direction: row-reverse;
          justify-content: flex-start;
        }
        
        .footer-service-card3 {
          gap: var(--dl-layout-space-unit);
          flex: 0 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 180px;
          align-items: flex-start;
          flex-direction: column;
        }
        
        .footer-service-title3 {
          fill: #5ac3e8;
          color: rgb(0, 0, 0);
          width: 100%;
          height: 100%;
          font-size: 16px;
          font-style: normal;
          font-family: 'Noto Serif SC';
          font-weight: 500;
          white-space: normal;
          overflow-wrap: break-word;
          letter-spacing: 0.3px;
        }
        
        .footer-service-divider3 {
          height: 5px;
          max-width: 100px;
        }
        
        .footer-service-desc3 {
          fill: #333333;
          color: #333333;
          width: 100%;
          height: auto;
          font-size: 14.5px;
          font-style: italic;
          font-family: 'Nunito';
          font-weight: 300;
          white-space: normal;
          overflow-wrap: break-word;
        }
        
        .footer-service-icon3 {
          width: 67px;
          height: 58px;
          object-fit: cover;
        }
        
        .footer-vertical-divider1,
        .footer-vertical-divider2 {
          width: 20px;
          height: 110px;
        }
        
        .footer-horizontal-divider1,
        .footer-horizontal-divider2 {
          width: 330px;
          height: 20px;
        }
        
        .footer-pricing-header {
          width: 230px;
        }
        
        .footer-pricing-title {
          text-align: center;
          font-family: 'Noto Serif SC';
          font-weight: 600;
          line-height: 1.5;
        }
        
        .footer-pricing-section {
          width: auto;
          height: auto;
          display: flex;
          max-width: 1000px;
          min-height: 100%;
          align-items: center;
          padding-top: var(--dl-layout-space-unit);
          padding-left: var(--dl-layout-space-unit);
          padding-right: var(--dl-layout-space-unit);
          padding-bottom: var(--dl-layout-space-unit);
          justify-content: center;
        }
        
        /* Media Queries */
        @media (max-width: 991px) {
          .footer-container {
            width: 100vw;
            min-height: 100vh;
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }

          .footer-section {
            width: 100%;
            min-height: 100vh;
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
          
          .footer-text {
            font-size: 17px;
            font-family: Noto Serif SC;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
          }
          
          .footer-text-part1 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-brand { color: #58c3e8; font-weight: 600; }
          .footer-text-part2 { font-style: normal; font-weight: 400; }
          .footer-text-part3 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-break1 { font-style: normal; text-decoration: none; }
          .footer-text-part4 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-break2 { font-style: normal; text-decoration: none; }
          .footer-text-part5 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-link { color: #58c3e8; font-style: normal; font-weight: 600; text-decoration: underline; }
          .footer-text-part6 { font-style: normal; text-decoration: none; }
          
          .footer-container-main {
            gap: var(--dl-layout-space-unit);
            width: auto;
            margin-top: var(--dl-layout-space-fourunits);
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          
          .footer-services-container {
            width: auto;
            align-items: center;
            flex-direction: column-reverse;
            justify-content: center;
          }
          
          .footer-service-title1 {
            text-align: center;
          }
          
          .footer-service-divider1 {
            align-self: center;
          }
          
          .footer-service-desc1 {
            color: rgba(25, 24, 24, 0.9);
            font-size: 14.5px;
            font-style: italic;
            text-align: center;
            font-family: Nunito;
            font-weight: 300;
          }
          
          .footer-services-container2 {
            width: auto;
            height: auto;
            align-items: center;
            flex-direction: column-reverse;
          }
          
          .footer-service-title2 {
            width: 100%;
            align-self: flex-start;
            text-align: center;
          }
          
          .footer-service-divider2 {
            align-self: center;
          }
          
          .footer-service-desc2 {
            color: rgba(25, 24, 24, 0.9);
            font-size: 14.5px;
            font-style: italic;
            text-align: center;
            font-family: Nunito;
            font-weight: 300;
          }
          
          .footer-service-icon2 {
            width: 77px;
            height: 66px;
          }
          
          .footer-services-container3 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            align-items: center;
            padding-top: 39px;
            flex-direction: column-reverse;
          }
          
          .footer-service-card3 {
            padding-top: 12px;
          }
          
          .footer-service-title3 {
            text-align: center;
          }
          
          .footer-service-divider3 {
            align-self: center;
          }
          
          .footer-service-desc3 {
            color: rgba(25, 24, 24, 0.85);
            font-size: 14.5px;
            font-style: italic;
            text-align: center;
            font-family: Nunito;
            font-weight: 300;
          }
          
          .footer-service-icon3 {
            width: 67px;
            height: 58px;
          }
          
          .footer-pricing-header {
            width: 230px;
          }
          
          .footer-pricing-section {
            width: auto;
            height: auto;
            max-width: 1000px;
            min-height: 100%;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
        }
        
        @media (max-width: 767px) {
          .footer-container {
            width: 100vw;
            min-height: 100vh;
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }

          .footer-section {
            width: 100%;
            min-height: 100vh;
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
          
          .footer-text {
            font-size: 17px;
            font-family: Noto Serif SC;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
          }
          
          .footer-text-part1 { font-weight: 400; text-decoration: none; }
          .footer-text-brand { color: #58c3e8; font-weight: 600; }
          .footer-text-part2 { font-weight: 400; }
          .footer-text-part3 { font-weight: 400; text-decoration: none; }
          .footer-text-break1 { text-decoration: none; }
          .footer-text-part4 { font-weight: 400; text-decoration: none; }
          .footer-text-break2 { text-decoration: none; }
          .footer-text-part5 { font-weight: 400; text-decoration: none; }
          .footer-text-link { color: #58c3e8; font-style: normal; font-weight: 600; text-decoration: underline; }
          .footer-text-part6 { text-decoration: none; }
          
          .footer-container-main {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            flex-wrap: wrap;
            max-width: 300px;
            min-width: auto;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: 12px;
            margin-bottom: var(--dl-layout-space-fourunits);
            padding-right: 0px;
            padding-bottom: 13px;
            justify-content: center;
          }
          
          .footer-services-container {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row-reverse;
            justify-content: center;
          }
          
          .footer-service-card1 {
            gap: var(--dl-layout-space-unit);
            max-width: 180px;
          }
          
          .footer-service-title1 {
            text-align: left;
          }
          
          .footer-service-divider1 {
            width: 123px;
            height: 100%;
            display: flex;
            align-self: flex-start;
            max-height: 2px;
            min-height: auto;
          }
          
          .footer-service-desc1 {
            text-align: left;
          }
          
          .footer-service-icon1 {
            width: 62px;
            height: 64px;
          }
        }
        
        @media (max-width: 479px) {
          .footer-container {
            width: 100vw;
            min-height: 100vh;
            padding-bottom: 0px;
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }

          .footer-section {
            width: 100%;
            min-height: 100vh;
            padding-bottom: 0px;
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
          
          .footer-text {
            color: rgb(55, 55, 55);
            font-size: 15px;
            margin-top: var(--dl-layout-space-twounits);
            font-family: Noto Serif SC;
            font-weight: 400;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
          }
          
          .footer-text-part1 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-brand { color: #87ceeb; font-style: normal; font-weight: 600; }
          .footer-text-part2 { font-style: normal; font-weight: 400; }
          .footer-text-part3 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-break1 { text-decoration: none; }
          .footer-text-part4 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-break2 { text-decoration: none; }
          .footer-text-part5 { font-style: normal; font-weight: 400; text-decoration: none; }
          .footer-text-link { color: #87ceeb; font-style: normal; font-weight: 600; text-decoration: underline; }
          .footer-text-part6 { font-style: normal; text-decoration: none; }
          
          .footer-container-main {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            height: auto;
            max-width: 290px;
            margin-top: 41px;
            min-height: auto;
            align-items: center;
            margin-left: 0px;
            padding-top: var(--dl-layout-space-unit);
            margin-right: 0px;
            padding-left: 16px;
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: 0px;
            padding-bottom: 11px;
            justify-content: center;
            background-color: rgba(253, 253, 246, 0.7);
          }
          
          .footer-services-container {
            gap: var(--dl-layout-space-oneandhalfunits);
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          
          .footer-service-card1 {
            gap: var(--dl-layout-space-unit);
            align-items: flex-start;
            justify-content: flex-start;
          }
          
          .footer-service-title1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
          }
          
          .footer-service-divider1 {
            width: 123px;
          }
          
          .footer-service-desc1 {
            font-size: 14px;
          }
          
          .footer-service-icon1 {
            width: auto;
            height: auto;
            max-width: 58px;
            max-height: 61px;
          }
          
          .footer-services-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 12px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
