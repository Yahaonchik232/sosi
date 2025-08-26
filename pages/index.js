import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Script from 'dangerous-html/react'

import Blue2 from '../components/blue2'
import Blue1 from '../components/blue1'
import Header from '../components/Header'
import Footer from '../components/footer'

const Frame1196 = (props) => {
  const [activeFAQ, setActiveFAQ] = useState(1)

  const toggleFAQ = (faqId) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId)
  }

  return (
    <>
      <main className="frame1196-container100">
        <Head>
          <title>Ремонт стиральных машин в Одессе</title>
        </Head>
        <Header />

        <section className="frame1196-container111">
          <div className="frame1196-container112">
            <h1 className="frame1196-text108">
              <span>��емонт стиральных машин </span>
              <span className="frame1196-text110">в </span>
              <span className="frame1196-text111">Одессе!</span>
            </h1>
            <img alt="image" src="/alt3.png" className="frame1196-image14" />
            <button type="button" className="frame1196-button1 button">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Заказать мас��ера',
                }}
              ></span>
            </button>
          </div>
          <article className="frame1196-cards">
            <Link href="/NESLIVAETIVODU">
              <a className="frame1196-container113">
                <h3 className="frame1196-text112">
                  Стиральная машина не сливает воду
                </h3>
                <div className="frame1196-arrow10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon108"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стиральная машина не сливает воду"
                  src="/problems 2/11-300h.webp"
                  loading="eager"
                  className="frame1196-image15"
                />
              </a>
            </Link>
            <Link href="/NEGREETIVODU">
              <a className="frame1196-container114">
                <h3 className="frame1196-text113">
                  Стиральная машина не гре��т воду
                </h3>
                <div className="frame1196-arrow11">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon110"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стиральная машина не нагревает воду"
                  src="/problems 2/21-300h.webp"
                  loading="eager"
                  className="frame1196-image16"
                />
              </a>
            </Link>
            <Link href="/PROTEKAET">
              <a className="frame1196-container115">
                <h3 className="frame1196-text114">Стиральная машина п��отекает</h3>
                <div className="frame1196-arrow12">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon112"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стиральная машин�� протекает"
                  src="/problems 2/31-300h.webp"
                  loading="eager"
                  className="frame1196-image17"
                />
              </a>
            </Link>
            <Link href="/SILNOSHUMIT">
              <a className="frame1196-container116">
                <h3 className="frame1196-text115">
                  Стиральная маш��на шумит при отжиме
                </h3>
                <div className="frame1196-arrow13">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon114"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стир��льная машина шумит п���и отжиме"
                  src="/problems/4-300h.webp"
                  loading="eager"
                  className="frame1196-image18"
                />
              </a>
            </Link>
            <Link href="/NEVKLUCHAETSA">
              <a className="frame1196-container117">
                <h3 className="frame1196-text116">
                  Стира��ьн��я ма��ина не включ��ется
                </h3>
                <div className="frame1196-arrow14">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon116"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стиральная маши��а не включаетс"
                  src="/problems 2/51-300h.webp"
                  loading="eager"
                  className="frame1196-image19"
                />
              </a>
            </Link>
            <Link href="/ZAVISAETNAPROGRAMME">
              <a className="frame1196-container118">
                <h3 className="frame1196-text117">
                  С��иральная машина зависает на прогр��мме
                </h3>
                <div className="frame1196-arrow15">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon118"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="��тиральная машина ��ависает на программе"
                  src="/problems 2/61-300h.webp"
                  loading="eager"
                  className="frame1196-image20"
                />
              </a>
            </Link>
            <Link href="/NEOTJIMAET">
              <a className="frame1196-container119">
                <h3 className="frame1196-text118">
                  Стиральная машина не отжимает
                </h3>
                <div className="frame1196-arrow16">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon120"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стиральная машина не отж��мает"
                  src="/problems 2/71-300h.webp"
                  loading="eager"
                  className="frame1196-image21"
                />
              </a>
            </Link>
            <Link href="/NENABIRRAETVODU">
              <a className="frame1196-container120">
                <h3 className="frame1196-text119">
                  Стиральная машина не набир��ет воду
                </h3>
                <div className="frame1196-arrow17">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon122"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Стиральная маш��на н�� н��бирает во��у"
                  src="/problems/8-300h.webp"
                  loading="eager"
                  className="frame1196-image22"
                />
              </a>
            </Link>
            <Link href="/NEOTKRIVATSADVERCA">
              <a className="frame1196-container121">
                <h3 className="frame1196-text120">
                  У ��тиральной машины не открывается дверца
                </h3>
                <div className="frame1196-arrow18">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="frame1196-icon124"
                  >
                    <path
                      d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <img
                  alt="Не от����рывается дверца стиральн��й машины"
                  src="/problems 2/91-300h.webp"
                  loading="eager"
                  className="frame1196-image23"
                />
              </a>
            </Link>
            <a href="/nekrutitbaraban" className="frame1196-container122">
              <h3 className="frame1196-text121">
                Стиральная машина не кру��ит бара��ан
              </h3>
              <div className="frame1196-arrow19">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="frame1196-icon126"
                >
                  <path
                    d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <img
                alt="Стиральная машина не крутит ба��абан"
                src="/problems/10-300h.webp"
                loading="eager"
                className="frame1196-image24"
              />
            </a>
          </article>
        </section>
        <section className="frame1196-container123">
          <p className="frame1196-text122">
            <span className="frame1196-text123">В </span>
            <span className="frame1196-text124">РемСтирМаш</span>
            <span className="frame1196-text125"></span>
            <span className="frame1196-text126">
              мы заботимся о надёжной работе вашей техники во всех уголк��х
              Одессы.
            </span>
            <br className="frame1196-text127" />
            <span className="frame1196-text128">
              Профессионал��но устраняем любые неисправности стиральных машин —
              от самых простых до самых сложных.
            </span>
            <br className="frame1196-text129" />
            <span className="frame1196-text130">Просто позвоните или </span>
            <span className="frame1196-text131">оставьте заявку</span>
            <span className="frame1196-text132">, и мы вам перезвоним.</span>
          </p>
          <div className="frame1196-container124">
            <svg
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
              className="frame1196-icon128"
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
              className="frame1196-icon130"
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
              className="frame1196-icon132"
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
              className="frame1196-icon134"
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
            <div className="frame1196-container125">
              <div className="frame1196-container126">
                <strong className="frame1196-text133">
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
                  className="frame1196-icon136"
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
                <p className="frame1196-text134">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатный выезд специалиста �� любой район города',
                    }}
                  ></span>
                </p>
              </div>
              <img
                alt='""'
                src="/ICONS/1.svg"
                loading="lazy"
                className="frame1196-image25"
              />
            </div>
            <div className="frame1196-container127">
              <div className="frame1196-container128">
                <strong className="frame1196-text135">
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
                  className="frame1196-icon142"
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
                <p className="frame1196-text136">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Детально обсуждаем объем работ и стоимость до начала ремонта.',
                    }}
                  ></span>
                </p>
              </div>
              <img
                alt='""'
                src="/ICONS/25.svg"
                loading="lazy"
                className="frame1196-image26"
              />
            </div>
            <div className="frame1196-container129">
              <div className="frame1196-container130">
                <strong className="frame1196-text137">
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
                  className="frame1196-icon148"
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
                <p className="frame1196-text138">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Не нужно ждать несколько дней - ваша техника зараб��тает уже сегодня.',
                    }}
                  ></span>
                </p>
              </div>
              <img
                alt='""'
                src="/ICONS/3.svg"
                loading="lazy"
                className="frame1196-image27"
              />
            </div>
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon154"
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
              className="frame1196-icon156"
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
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon158"
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
              className="frame1196-icon160"
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
          <div className="frame1196-container131">
            <h2 className="frame1196-text139">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Цены',
                }}
              ></span>
            </h2>
          </div>
          <section className="frame1196-container132">
            <div className="frame1196-blue1">
              <div className="frame1196-container133">
                <div className="frame1196-container134">
                  <span className="frame1196-text140">1</span>
                </div>
                <span className="frame1196-text141">
                  <span className="frame1196-text142">Выезд м��стера (</span>
                  <span className="frame1196-text143">при ремонте</span>
                  <span className="frame1196-text144">)</span>
                </span>
              </div>
              <div className="frame1196-container135">
                <span className="frame1196-text145">Бесплатно</span>
                <svg
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 110 20"
                  preserveAspectRatio="none"
                  className="frame1196-icon162"
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
                <div className="frame1196-container136">
                  <img
                    alt="image"
                    src="/ICONS/29.svg"
                    className="frame1196-image28"
                  />
                  <span className="frame1196-text146">Вызвать мастера</span>
                </div>
              </div>
            </div>
            <div className="frame1196-blue2">
              <div className="frame1196-container137">
                <div className="frame1196-container138">
                  <span className="frame1196-text147">2</span>
                </div>
                <span className="frame1196-text148">
                  Д���агностика оборудования (при ремонте)
                </span>
              </div>
              <div className="frame1196-container139">
                <span className="frame1196-text149">Бесплатно</span>
                <svg
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 110 20"
                  preserveAspectRatio="none"
                  className="frame1196-icon168"
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
                <div className="frame1196-container140">
                  <img
                    alt="image"
                    src="/ICONS/29.svg"
                    className="frame1196-image29"
                  />
                  <span className="frame1196-text150">Вызвать мастера</span>
                </div>
              </div>
            </div>
            <div className="frame1196-blue3">
              <div className="frame1196-container141">
                <div className="frame1196-container142">
                  <span className="frame1196-text151">3</span>
                </div>
                <span className="frame1196-text152">
                  Диагностика о��о��удования (при отказе о�� ремонта)
                </span>
              </div>
              <div className="frame1196-container143">
                <span className="frame1196-text153">300 грн</span>
                <svg
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 110 20"
                  preserveAspectRatio="none"
                  className="frame1196-icon174"
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
                <div className="frame1196-container144">
                  <img
                    alt="image"
                    src="/ICONS/29.svg"
                    className="frame1196-image30"
                  />
                  <span className="frame1196-text154">Вызвать мастера</span>
                </div>
              </div>
            </div>
            <Blue2
              text={
                <Fragment>
                  <span className="frame1196-text155">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Мелкий ремонт',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text156">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 400 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text157">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '4',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text158">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text159">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Ремонт модуля управления',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text160">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 1000 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text161">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '5',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text162">
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
                  <span className="frame1196-text163">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Чис��ка фильтров и патрубков',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text164">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 400 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text165">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '6',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text166">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text167">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Ремонт сливного насо��а',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text168">
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
                  <span className="frame1196-text169">
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
                  <span className="frame1196-text170">
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
                  <span className="frame1196-text171">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Замена сливного насоса (с учетом стоимости н��соса)',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text172">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 450 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text173">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '8',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text174">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text175">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Устранение по��тороннего предмета из барабан��, фильтра или насоса',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text176">
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
                  <span className="frame1196-text177">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '9',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text178">
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
                  <span className="frame1196-text179">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '��амена нагревательного элемента (с учетом стоимости ТЭНа)',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text180">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 800 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text181">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '10',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text182">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text183">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Замена щеток двигателя (с учето�� стоимости щеток)',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text184">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 800 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text185">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '11',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text186">
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
                  <span className="frame1196-text187">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Замена манже��ы люка',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text188">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 800 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text189">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '12',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text190">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text191">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Ремонт блокировки люка (без учета стоимости деталей)',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text192">
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
                  <span className="frame1196-text193">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '13',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text194">
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
                  <span className="frame1196-text195">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Зам��на амортизаторов (без уче��а стоимости амортизаторов)',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text196">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 1500 гр��',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text197">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '14',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text198">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызв��ть мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text199">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Замена сливного или наливного шланга',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text200">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 800 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text201">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '15',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text202">
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
                  <span className="frame1196-text203">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Замена приводного ремня',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text204">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 800 грн',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text205">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '16',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text206">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue2>
            <Blue1
              text={
                <Fragment>
                  <span className="frame1196-text207">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Замена сальника',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame1196-text208">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'от 500 г��н',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="frame1196-text209">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '17',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="frame1196-text210">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></Blue1>
            <div className="frame1196-blue4">
              <div className="frame1196-container145">
                <div className="frame1196-container146">
                  <span className="frame1196-text211">18</span>
                </div>
                <span className="frame1196-text212">
                  Замена подшипников( с учетом стоимости подшипников)
                </span>
              </div>
              <div className="frame1196-container147">
                <span className="frame1196-text213">от 800 гр��</span>
                <svg
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 110 20"
                  preserveAspectRatio="none"
                  className="frame1196-icon180"
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
                <div className="frame1196-container148">
                  <img
                    alt="image"
                    src="/ICONS/29.svg"
                    className="frame1196-image31"
                  />
                  <span className="frame1196-text214">Вызвать мастера</span>
                </div>
              </div>
            </div>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon186"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon188"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon190"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon192"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon194"
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
              className="frame1196-icon196"
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
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon198"
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
              className="frame1196-icon200"
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
          </section>
        </section>
        <section className="frame1196-remont-vsehmar">
          <div className="frame1196-remont-vseh-marok">
            <h2 className="frame1196-text215">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Ремонтируем все ма��ки',
                }}
              ></span>
            </h2>
          </div>
          <div>
            <div className="frame1196-container150">
              <Script
                html={`<style>
/* Для экранов ��о 767px включительн�� */
@media (max-width: 767px) {
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-2620px);
        }
    }
}

/* Для экр����нов больше 767px */
@media (min-width: 768px) {
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-3638px);
        }
    }
}
</style>`}
              ></Script>
            </div>
          </div>
          <div className="frame1196-container151 carousel">
            <div className="frame1196-container152 track">
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Ariston в О��ессе - профессиона��ьный сервис"
                  src="/brands/ariston-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image32"
                />
              </div>
              <div className="item">
                <img
                  alt="Р��монт стиральных ��ашин Beko в Одессе - профессиональный сервис"
                  src="/brands/beko-logo%202-200h.webp"
                  loading="eager"
                  className="frame1196-image33"
                />
              </div>
              <div className="item">
                <img
                  alt="Рем��нт стирал��ных машин Bosch в Одессе - професс��он��льный сервис"
                  src="/brands/bosch-logo%202-200h.webp"
                  loading="eager"
                  className="frame1196-image34"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Candy в Одессе - профессиональный сервис"
                  src="/brands/candy-logo%202-200h.webp"
                  loading="eager"
                  className="frame1196-image35"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Electrolux �� Одессе - профессиональный сервис"
                  src="/brands/electrolux-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image36"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стира��ьных м��шин Gorenje в Одессе - п��офессиональн��й ��ервис"
                  src="/brands/gorenje-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image37"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Ardo в Одессе - профессион��л��н��й сервис"
                  src="/brands/image%203823123-200h.webp"
                  loading="eager"
                  className="frame1196-image38"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Siemens в Оде���се - профессиональный сервис"
                  src="/brands/image%203823125-200h.webp"
                  loading="eager"
                  className="frame1196-image39"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных м��шин Atlant в Одессе - профессиональный сервис"
                  src="/brands/image%203823126-200h.webp"
                  loading="eager"
                  className="frame1196-image40"
                />
              </div>
              <div className="item">
                <img
                  alt="��емонт стиральных машин Beko в Одессе - пр��фессиональ��ый ��ерви��"
                  src="/brands/image%203823127-200h.webp"
                  loading="eager"
                  className="frame1196-image41"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральны��� ����шин Aeg в Од����ссе - профессиональный сервис"
                  src="/brands/image%203823128-200h.webp"
                  loading="eager"
                  className="frame1196-image42"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Miele в Одессе - профессион��льный сервис"
                  src="/brands/image%203823129-200h.webp"
                  loading="eager"
                  className="frame1196-image43"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стир��льных машин Indesit в Одессе - профе��сиональный серв��с"
                  src="/brands/image%203823130-200h.webp"
                  loading="eager"
                  className="frame1196-image44"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральн��х машин LG в Одессе - профессиональный се��вис"
                  src="/brands/lg-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image45"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных ��ашин Samsung в Одессе - профессиональный сервис"
                  src="/brands/samsung-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image46"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Whirlpool в Одессе - профессио��альный сервис"
                  src="/brands/whirlpool-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image47"
                />
              </div>
              <div className="item">
                <img
                  alt="Ремонт стиральных машин Zanussi в Оде��се - профессиональный сервис"
                  src="/brands/zanussi-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image48"
                />
              </div>
              <div className="item">
                <img
                  alt="image"
                  src="/brands/ariston-logo%201-200h.webp"
                  loading="eager"
                  className="frame1196-image49"
                />
              </div>
              <div className="item">
                <img
                  alt="image"
                  src="/brands/beko-logo%202-200h.webp"
                  loading="eager"
                  className="frame1196-image50"
                />
              </div>
              <div className="item">
                <img
                  alt="image"
                  src="/brands/bosch-logo%202-200h.webp"
                  loading="eager"
                  className="frame1196-image51"
                />
              </div>
              <div className="item">
                <img
                  alt="image"
                  src="/brands/candy-logo%202-200h.webp"
                  loading="eager"
                  className="frame1196-image52"
                />
              </div>
              <div>
                <div className="frame1196-container155">
                  <Script
                    html={`<style>
        @keyframes scroll-large {from {transform: translateX(0);}
to {transform: translateX(-3638px);}}@keyframes scroll-small {from {transform: translateX(0);}
to {transform: translateX(-2620px);}}
        </style> `}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="frame1196-container156">
          <section className="frame1196-container157 parallax">
            <div className="frame1196-container158">
              <div className="frame1196-container159">
                <h3 className="frame1196-text216">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Теперь продать стиральную машину в Одессе - <span style="color: #FFD84D; font-weight: 700;">это не сложно</span>!',
                    }}
                  ></span>
                </h3>
                <Link href="/vikup">
                  <button type="button" className="frame1196-button2 button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '��ыкуп б/у машин',
                      }}
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <section className="frame1196-container160">
          <div className="frame1196-container161">
            <h2 className="frame1196-text217">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Почему мы?',
                }}
              ></span>
            </h2>
          </div>
          <div className="frame1196-container162">
            <div className="frame1196-container163">
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="frame1196-icon202"
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
                className="frame1196-icon204"
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
                className="frame1196-icon206"
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
                className="frame1196-icon208"
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
              <div className="frame1196-container164">
                <div className="frame1196-container165">
                  <div className="frame1196-container166">
                    <h3 className="frame1196-text218">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Современное оборудование по диагностике',
                        }}
                      ></span>
                    </h3>
                    <svg
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 110 20"
                      preserveAspectRatio="none"
                      className="frame1196-icon210"
                    >
                      <defs>
                        <linearGradient
                          id="grad12"
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
                        stroke="url(#grad12)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="11 11"
                      ></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/ICONS/6.svg"
                    loading="lazy"
                    className="frame1196-image53"
                  />
                </div>
                <p className="frame1196-text219">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Находим неисправности быстро и то��но благодаря про��ессиональной техник��.',
                    }}
                  ></span>
                </p>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon216"
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
                className="frame1196-icon218"
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
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon220"
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
                className="frame1196-icon222"
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
            <div className="frame1196-container167">
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="frame1196-icon224"
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
                className="frame1196-icon226"
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
                className="frame1196-icon228"
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
                className="frame1196-icon230"
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
              <div className="frame1196-container168">
                <div className="frame1196-container169">
                  <div className="frame1196-container170">
                    <h3 className="frame1196-text220">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Налаженные связи с поставщиками',
                        }}
                      ></span>
                    </h3>
                    <svg
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 110 20"
                      preserveAspectRatio="none"
                      className="frame1196-icon232"
                    >
                      <defs>
                        <linearGradient
                          id="grad12"
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
                        stroke="url(#grad12)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="11 11"
                      ></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/ICONS/28.svg"
                    loading="lazy"
                    className="frame1196-image54"
                  />
                </div>
                <p className="frame1196-text221">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Получаем нужные запчасти б��стро, по выгодным ценам и без переплат.',
                    }}
                  ></span>
                </p>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon238"
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
                className="frame1196-icon240"
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
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon242"
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
                className="frame1196-icon244"
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
            <div className="frame1196-container171">
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="frame1196-icon246"
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
                className="frame1196-icon248"
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
                className="frame1196-icon250"
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
                className="frame1196-icon252"
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
              <div className="frame1196-container172">
                <div className="frame1196-container173">
                  <div className="frame1196-container174">
                    <h3 className="frame1196-text222">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Низкие цены на весь сервисный диапазон услуг',
                        }}
                      ></span>
                    </h3>
                    <svg
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 110 20"
                      preserveAspectRatio="none"
                      className="frame1196-icon254"
                    >
                      <defs>
                        <linearGradient
                          id="grad12"
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
                        stroke="url(#grad12)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="11 11"
                      ></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/ICONS/23.svg"
                    loading="lazy"
                    className="frame1196-image55"
                  />
                </div>
                <p className="frame1196-text223">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Выполняем работу качественно и д��ступно, без скрытых доплат и ненужных ��асходов.',
                    }}
                  ></span>
                </p>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon260"
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
                className="frame1196-icon262"
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
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon264"
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
                className="frame1196-icon266"
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
            <div className="frame1196-container175">
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="frame1196-icon268"
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
                className="frame1196-icon270"
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
                className="frame1196-icon272"
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
                className="frame1196-icon274"
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
              <div className="frame1196-container176">
                <div className="frame1196-container177">
                  <div className="frame1196-container178">
                    <h3 className="frame1196-text224">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Лучшие мастера с многолетним стажем 7-10 л��т',
                        }}
                      ></span>
                    </h3>
                    <svg
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 110 20"
                      preserveAspectRatio="none"
                      className="frame1196-icon276"
                    >
                      <defs>
                        <linearGradient
                          id="grad12"
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
                        stroke="url(#grad12)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="11 11"
                      ></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/ICONS/8.svg"
                    loading="lazy"
                    className="frame1196-image56"
                  />
                </div>
                <p className="frame1196-text225">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'К��алифицированные специалисты, которые знают своё дело.',
                    }}
                  ></span>
                </p>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon282"
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
                className="frame1196-icon284"
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
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon286"
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
                className="frame1196-icon288"
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
            <div className="frame1196-container179">
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="frame1196-icon290"
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
                className="frame1196-icon292"
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
                className="frame1196-icon294"
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
                className="frame1196-icon296"
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
              <div className="frame1196-container180">
                <div className="frame1196-container181">
                  <div className="frame1196-container182">
                    <h3 className="frame1196-text226">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Гарантийный c��ок до 12 месяцев',
                        }}
                      ></span>
                    </h3>
                    <svg
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 110 20"
                      preserveAspectRatio="none"
                      className="frame1196-icon298"
                    >
                      <defs>
                        <linearGradient
                          id="grad12"
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
                        stroke="url(#grad12)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="11 11"
                      ></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/ICONS/26.svg"
                    loading="lazy"
                    className="frame1196-image57"
                  />
                </div>
                <p className="frame1196-text227">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Подтверждаем надёжность ремонта длительным сроком гарантии.',
                    }}
                  ></span>
                </p>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon304"
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
                className="frame1196-icon306"
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
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon308"
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
                className="frame1196-icon310"
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
          </div>
        </section>
        <div className="frame1196-container183">
          <h2 className="frame1196-text228">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Наши работы',
              }}
            ></span>
          </h2>
        </div>
        <div className="frame1196-container184">
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="frame1196-icon312"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="frame1196-icon314"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="frame1196-icon316"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="frame1196-icon318"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="330"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 330 20"
            preserveAspectRatio="none"
            className="frame1196-icon320"
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
            className="frame1196-icon322"
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
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 20 110"
            preserveAspectRatio="none"
            className="frame1196-icon324"
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
            className="frame1196-icon326"
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
          <div className="frame1196-nashi-raboti">
            <div className="frame1196-container185">
              <div className="frame1196-container186">
                <figcaption className="frame1196-text229">
                  Установка нового у�����лотнителя двер��ы стиралки Zanussi
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container187">
              <div className="frame1196-container188">
                <figcaption className="frame1196-text230">
                  Вышел из ст��оя нагре��ательный элемент на Bosch
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container189">
              <div className="frame1196-container190">
                <figcaption className="frame1196-text231">
                  Зам��на крестов��ны бараба��а на Miele
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container191">
              <div className="frame1196-container192">
                <figcaption className="frame1196-text232">
                  Установка новой ��тулки уплотнит��ля
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container193">
              <div className="frame1196-container194">
                <figcaption className="frame1196-text233">
                  ��амена втулки крестовины на LG
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container195">
              <div className="frame1196-container196">
                <figcaption className="frame1196-text234">
                  Ремонт подшипников на с��иралке Samsung
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container197">
              <div className="frame1196-container198">
                <figcaption className="frame1196-text235">
                  Установка ТЭНа и ��емпферов в машине Whirlpool
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container199">
              <div className="frame1196-container200">
                <figcaption className="frame1196-text236">
                  В��сстановление ��правляющей п��аты на Siemens
                </figcaption>
              </div>
            </div>
            <div className="frame1196-container201">
              <div className="frame1196-container202">
                <figcaption className="frame1196-text237">
                  Комплексный ремонт стиральной машины Zanussi
                </figcaption>
              </div>
            </div>
          </div>
        </div>
        <div className="frame1196-container203">
          <div className="frame1196-container204">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="frame1196-icon328"
            >
              <path
                d="m8.82 12l7.715 7.716q.22.22.218.528t-.224.529q-.221.221-.529.221t-.529-.221L7.83 13.136q-.243-.242-.354-.54q-.112-.298-.112-.596t.112-.596t.354-.54l7.64-7.644q.221-.221.532-.218q.31.003.531.224t.222.529t-.222.528z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="frame1196-container205">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="frame1196-icon330"
            >
              <path
                d="M15.187 12L7.47 4.285q-.221-.221-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .532.221l7.636 7.643q.242.242.354.54t.111.596t-.111.596t-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532t.221-.531z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div className="frame1196-container206">
          <div className="frame1196-container207">
            <h2 className="frame1196-text238">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Ответы на часто задаваемы�� вопросы!',
                }}
              ></span>
            </h2>
          </div>
          <svg
            width="410"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 406 111"
            preserveAspectRatio="none"
            className="frame1196-icon332"
          >
            <path
              d="M0 105 H395 V10"
              fill="none"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
            <circle
              r="7"
              cx="395"
              cy="10"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="410"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 406 111"
            preserveAspectRatio="none"
            className="frame1196-icon335"
          >
            <path
              d="M0 105 H197.5 V10"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
            <circle
              r="7"
              cx="197.5"
              cy="10"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
        </div>
        <div className="frame1196-container208">
          <div className="frame1196-container209">
            <div className="frame1196-container210">
              <div
                className="frame1196-container211"
                onClick={() => toggleFAQ(1)}
                style={{ cursor: 'pointer' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon338"
                  style={{
                    transform: activeFAQ === 1 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3
                className="frame1196-text239"
                onClick={() => toggleFAQ(1)}
                style={{
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '400'
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Сколько времени занимает ремонт?',
                  }}
                ></span>
              </h3>
            </div>
            <div className={`frame1196-otvet1 ${activeFAQ === 1 ? 'faq-active' : ''}`}>
              <p className="frame1196-text240">
                <span
                  dangerouslySetInnerHTML={{
                    __html: '99% поломок устраняем на месте за 30-60 минут. Только редкие случаи требуют заказа специфических деталей и повтор��ого визита через 1-2 дня',
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="frame1196-container212">
            <div className="frame1196-container213">
              <div
                className="frame1196-container214"
                onClick={() => toggleFAQ(2)}
                style={{ cursor: 'pointer' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon340"
                  style={{
                    transform: activeFAQ === 2 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3
                className="frame1196-text241"
                onClick={() => toggleFAQ(2)}
                style={{
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '400'
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Какую гарантию вы предоставляете?',
                  }}
                ></span>
              </h3>
            </div>
            <div className={`frame1196-otvet2 ${activeFAQ === 2 ? 'faq-active' : ''}`}>
                <p className="frame1196-text242">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'На все виды работ даем гарантию 6 месяцев, на замененные запчасти - 1 год. ��ара��тийный та��он выдается сразу после завершения ремонта',
                    }}
                  ></span>
                </p>
            </div>
          </div>
          <div className="frame1196-container215">
            <div className="frame1196-container216">
              <div
                className="frame1196-container217"
                onClick={() => toggleFAQ(3)}
                style={{ cursor: 'pointer' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon342"
                  style={{
                    transform: activeFAQ === 3 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3
                className="frame1196-text243"
                onClick={() => toggleFAQ(3)}
                style={{
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '400'
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'С��олько стоит диагностика?',
                  }}
                ></span>
              </h3>
            </div>
            <div className={`frame1196-otvet3 ${activeFAQ === 3 ? 'faq-active' : ''}`}>
                <p className="frame1196-text244">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Диагно��тика стоит 200 гривен. При согласии на ремонт стоимость диагностики засчитывается в общую сумму работ. Выезд мастера бесплатный',
                    }}
                  ></span>
                </p>
            </div>
          </div>
          <div className="frame1196-container218">
            <div className="frame1196-container219">
              <div
                className="frame1196-container220"
                onClick={() => toggleFAQ(4)}
                style={{ cursor: 'pointer' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon344"
                  style={{
                    transform: activeFAQ === 4 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3
                className="frame1196-text245"
                onClick={() => toggleFAQ(4)}
                style={{
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '400'
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Будет ли у мастера детали для моей техники?',
                  }}
                ></span>
              </h3>
            </div>
            <div className={`frame1196-otvet4 ${activeFAQ === 4 ? 'faq-active' : ''}`}>
                <p className="frame1196-text246">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Масте�� возит базовый набор популярных запчастей. Для редких моделей заказываем дет��ли за 1-2 дня. Проверяем наличие по телефону заранее.',
                    }}
                  ></span>
                </p>
            </div>
          </div>
          <div className="frame1196-container221">
            <div className="frame1196-container222">
              <div
                className="frame1196-container223"
                onClick={() => toggleFAQ(5)}
                style={{ cursor: 'pointer' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="frame1196-icon346"
                  style={{
                    transform: activeFAQ === 5 ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3
                className="frame1196-text247"
                onClick={() => toggleFAQ(5)}
                style={{
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '400'
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Дешевле отремонтироват�� или заменить?',
                  }}
                ></span>
              </h3>
            </div>
            <div className={`frame1196-otvet5 ${activeFAQ === 5 ? 'faq-active' : ''}`}>
                <p className="frame1196-text248">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Если стоимость р��монта превышает 60% от цены новой машины - ��учше заменить. Мы всегда честно консультиру��м о целесообразности ремонт��.',
                    }}
                  ></span>
                </p>
            </div>
          </div>
          <svg
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 10 550"
            preserveAspectRatio="none"
            className="frame1196-icon348"
          >
            <line
              x1="5"
              x2="5"
              y1="0"
              y2="550"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></line>
          </svg>
        </div>
        <div className="frame1196-container224">
          <svg
            width="410"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 406 111"
            preserveAspectRatio="none"
            className="frame1196-icon350"
          >
            <path
              d="M0 10 H395 V73.33"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
            <circle
              r="7"
              cx="395"
              cy="73.33"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="210"
            xmlns="http://www.w3.org/2000/svg"
            height="85"
            viewBox="0 0 210 85"
            preserveAspectRatio="none"
            className="frame1196-korotkayya"
          >
            <path
              d="M0 10 H197.5 V73.33"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
            <circle
              r="7"
              cx="197.5"
              cy="73.33"
              fill="#4EC8ED"
              stroke="#303030"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <strong className="frame1196-text249">
            <span
              dangerouslySetInnerHTML={{
                __html: '<span style="color: #000000">ОСТАЛИСЬ ВОПРОСЫ?</span> <span style="color: #87CEEB">Спросите мастера бесплатно</span>',
              }}
            ></span>
          </strong>
        </div>
        <button type="button" className="frame1196-button3 button">
          <span
            dangerouslySetInnerHTML={{
              __html: 'Спросить Мастера',
            }}
          ></span>
        </button>
        <div className="frame1196-container225">
          <div className="frame1196-container226">
            <span className="textglavitogi frame1196-text250">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Ремонт стира��ьных машин в сервисном центре "Ваше Н��звание" в Одессе',
                }}
              ></span>
            </span>
          </div>
          <p className="frame1196-text251 textITOGI">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Стиральн��я машин�� — эт�� техника, которая должна работать исправно: отжимать, стирать и радовать стабил��ностью.',
              }}
            ></span>
          </p>
          <p className="frame1196-text252 textITOGI">
            <span
              dangerouslySetInnerHTML={{
                __html: 'П��д брендом "Ваше ��азвание" работает команда мастеров...',
              }}
            ></span>
          </p>
          <h2 className="textglavitogi">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Почему выбирают нас',
              }}
            ></span>
          </h2>
          <ul className="frame1196-ul1 list">
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'На рынке ремонта бытовой техники с 2011 года.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Работаем напрямую с поставщиками — без переплат и посредников.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: '�� ш��ате т��лько опытные мастера с профильной подготовкой.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Используем сов��еменное оборудование и точную диагностику.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Работаем как �� типовыми, та�� и со сложными неисправностями.',
                  }}
                ></span>
              </span>
            </li>
          </ul>
          <h2 className="textglavitogi">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Частые поломки с��иральных машин',
              }}
            ></span>
          </h2>
          <p className="frame1196-text260 textITOGI">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Ремонт стиральных машин в Одессе необходим как новым, так и давно использованным моделям...',
              }}
            ></span>
          </p>
          <ul className="frame1196-ul2 list">
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Машина не слива��т в��ду — проблема с помпой или засор сл����вной системы.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Шум и вибрации — чаще всего износ амортизаторов или подшип��иков.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Не запускается стирк���� — проверяем модуль управления или кнопку питания.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Течёт корпус — устр��няем утечки, заменяем шланги, манжеты, патрубки.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Не г��еет воду — диагностика и замена ТЭНа.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Ошибка на ��кране — расшифровыва��м код не��справности и устраняем причину.',
                  }}
                ></span>
              </span>
            </li>
            <li className="list-item">
              <span className="textITOGI">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Регулярное техобслуживание — профилакти��а раз в 12 месяцев продлевает срок службы.',
                  }}
                ></span>
              </span>
            </li>
          </ul>
          <h2 className="textglavitogi">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Обслуживаемые бренды',
              }}
            ></span>
          </h2>
          <p className="textITOGI">
            <span
              dangerouslySetInnerHTML={{
                __html: 'LG, Samsung, Bosch, Electrolux, Whirlpool, Indesit, Zanussi, Gorenje, AEG, Miele и другие. Работаем не только по Одессе, но и в ��ригородах.',
              }}
            ></span>
          </p>
          <h2 className="textglavitogi">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Серви��ная мастерская',
              }}
            ></span>
          </h2>
          <p className="frame1196-text271 textITOGI">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Сервисный центр "Ваше название" — это современная ��рофессиональная мастерская в Одессе...',
              }}
            ></span>
          </p>
          <h2 className="textglavitogi">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Контакты',
              }}
            ></span>
          </h2>
          <p className="textITOGI">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Ниже на сайте — карта проезда к нашей мастерской, а также наши те��ефоны...',
              }}
            ></span>
          </p>
        </div>
        <div className="frame1196-container227">
          <h2 className="frame1196-text274">
            <span
              dangerouslySetInnerHTML={{
                __html: 'Отзывы',
              }}
            ></span>
          </h2>
        </div>
        <div className="frame1196-container228">
          <article className="frame1196-frame10721">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon355"
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
            <div className="frame1196-frame10711">
              <img
                alt="unsplash3TLl97HNJo7923"
                src="/faceposleotsidki-200h.webp"
                className="frame1196-unsplash3t-ll97hn-jo1"
              />
              <span className="frame1196-text275">Alia Main</span>
            </div>
            <img
              alt="Frame10708949"
              src="/external/frame10708949-04a.svg"
              className="frame1196-frame10701"
            />
            <p className="frame1196-text276">
              Я долбоеб. я не могу жить без стиралки, по��ому что ког��а она
              с��ома��а я ��е могу плакать на взрыд во время отжима.
            </p>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon357"
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
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon359"
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
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon361"
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
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon363"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon365"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon367"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon369"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
          </article>
          <article className="frame1196-frame10722">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon371"
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
            <div className="frame1196-frame10712">
              <img
                alt="unsplash3TLl97HNJo7923"
                src="/facedosquasha-200h.webp"
                className="frame1196-unsplash3t-ll97hn-jo2"
              />
              <span className="frame1196-text277">Alia Main</span>
            </div>
            <img
              alt="Frame10708949"
              src="/external/frame10708949-04a.svg"
              className="frame1196-frame10702"
            />
            <p className="frame1196-text278">
              &quot;Я считаю это победа над стиральной м��шино��, которой 12
              лет))  Очень круто!! ��лагодарю!! Она пала в руки мастера и
              отдала��ь ем�� полностью, а н�� стала бры��аться. ��е знаю, что он там
              с ней делал, но сейчас она как шелковая стирает мой ситцев���е
              кружевно��� белье&lt;3&quot;
            </p>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon373"
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
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon375"
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
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon377"
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
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon379"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon381"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon383"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon385"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
          </article>
          <article className="frame1196-frame10723">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon387"
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
            <div className="frame1196-frame10713">
              <img
                alt="unsplash3TLl97HNJo7923"
                src="/faceposlesquasha-200h.webp"
                className="frame1196-unsplash3t-ll97hn-jo3"
              />
              <span className="frame1196-text279">Alia Main</span>
            </div>
            <img
              alt="Frame10708949"
              src="/external/frame10708949-1dvi.svg"
              className="frame1196-frame10703"
            />
            <p className="frame1196-text280">Мне похуй</p>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon389"
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
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="frame1196-icon391"
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
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon393"
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
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon395"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon397"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon399"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
            <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 10 20"
              preserveAspectRatio="none"
              className="frame1196-icon401"
            >
              <circle
                r="3.75"
                cx="5"
                cy="10"
                fill="#606060"
                vectorEffect="non-scaling-stroke"
              ></circle>
            </svg>
          </article>
        </div>
        <button type="button" className="frame1196-button4 button">
          <span
            dangerouslySetInnerHTML={{
              __html: 'Добавить отзыв',
            }}
          ></span>
        </button>
        <div className="main-footer-isolation">
        <footer className="frame1196-container229">
          <div className="frame1196-container230">
            <div className="frame1196-container231">
              <strong className="frame1196-text281">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Наши контакты',
                  }}
                ></span>
              </strong>
              <div className="frame1196-container232">
                <div className="frame1196-container233">
                  <p className="frame1196-text282">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Тел.: +38 (098) 467-13-52',
                      }}
                    ></span>
                  </p>
                  <p className="frame1196-text283">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Тел.: +38 (098) 467-13-52',
                      }}
                    ></span>
                  </p>
                </div>
              </div>
              <div className="frame1196-container234">
                <p className="frame1196-text284">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Адрес: пл. Независимости, 1, Одесса, Одесская область, 65000',
                    }}
                  ></span>
                </p>
                <p className="frame1196-text285">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'E-mail: remstirmash@gmail.com',
                    }}
                  ></span>
                </p>
              </div>
              <p className="frame1196-text286">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Пн-Вс: 9:00-21:00',
                  }}
                ></span>
              </p>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon403"
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
            <div className="frame1196-container235">
              <div className="frame1196-container236">
                <strong className="frame1196-text287">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Оставьте заяв����у на бесплатный выезд мастера',
                    }}
                  ></span>
                </strong>
                <button type="button" className="frame1196-button5 button">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Заказать мастера',
                    }}
                  ></span>
                </button>
              </div>
              <div className="frame1196-container237">
                <iframe
                  src="https://www.google.com/maps?q=пл. Н��зависимости, 1, Одесса, Одес��кая область, 65000&amp;output=embed"
                  address="пл. Незави����имости, 1, Одесса, Одесская область, 65000"
                  className="frame1196-google-maps"
                ></iframe>
              </div>
            </div>
            <nav className="frame1196-container238">
              <span className="frame1196-text288">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Главная',
                  }}
                ></span>
              </span>
              <span className="frame1196-text289">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Выкуп б/y машин',
                  }}
                ></span>
              </span>
              <span className="frame1196-text290">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Статьи',
                  }}
                ></span>
              </span>
            </nav>
          </div>
        </footer>
        </div>
        <span className="frame1196-text291">
          <span className="frame1196-text292">&quot;Ва���е название&quot;</span>
          <span>: сервис по ре��онту стир��льных ма��ин</span>
          <br />
          <span>© 2025</span>
        </span>
        <img
          alt="Vector8616"
          src="/backgrounds/vector21-1500w.png"
          className="frame1196-vector"
        />
      </main>
      <style jsx>
        {`
          .frame1196-container100 {
            width: 100%;
            display: flex;
            z-index: 999;
            overflow: auto;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            justify-content: center;
            background-color: #ffffff;
            background-image: url('/to%20the%20backgrouund-1500w.png');
          }
          .frame1196-container111 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            min-height: 750px;
            align-items: center;
            border-color: #424242;
            padding-bottom: var(--dl-layout-space-twounits);
            background-size: cover;
            justify-content: center;
            background-image: url('/all%20ina%20dast%20or%20dust.webp');
            background-position: bottom;
          }
          .frame1196-container112 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 528px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-layout-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-text108 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: auto;
            font-size: 35px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-text110 {
            color: #87ceeb;
            font-weight: 700;
          }
          .frame1196-text111 {
            color: #87ceeb;
            font-weight: 700;
          }
          .frame1196-image14 {
            width: 176px;
            height: 170px;
            display: none;
            object-fit: cover;
          }
          .frame1196-button1 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            font-size: 16px;
            max-width: 350px;
            min-width: 170px;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #2b2b2b;
            font-style: normal;
            min-height: 60px;
            font-family: 'Spectral';
            font-weight: 500;
            border-color: rgba(25, 24, 24, 0.35);
            border-radius: 8px;
            letter-spacing: 1.15px;
            background-color: rgb(40, 40, 40);
          }
          .frame1196-cards {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1000px;
            align-self: center;
            max-height: 100%;
            min-height: 100%;
            justify-content: center;
          }
          .frame1196-container113 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #afa073;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text112 {
            color: #ffffff;
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon108 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image15 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container114 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text113 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon110 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image16 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container115 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text114 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow12 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon112 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image17 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container116 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text115 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon114 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image18 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container117 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text116 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon116 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image19 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
          }
          .frame1196-container118 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text117 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon118 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image20 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container119 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text118 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon120 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image21 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container120 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text119 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon122 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image22 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container121 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text120 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon124 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image23 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
            object-position: top left;
          }
          .frame1196-container122 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            max-width: 151px;
            min-width: 151px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .frame1196-text121 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 400;
          }
          .frame1196-arrow19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #2e3337;
          }
          .frame1196-icon126 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .frame1196-image24 {
            top: 0px;
            right: 0px;
            width: 149px;
            height: 215px;
            position: absolute;
            object-fit: cover;
          }
          .frame1196-container123 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            background-image: url('/backgrounds/dada.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right center;
            justify-content: center;
          }
          .frame1196-text122 {
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
          .frame1196-text123 {
            font-style: normal;
          }
          .frame1196-text124 {
            color: #87ceeb;
            font-style: normal;
            font-weight: 600;
          }
          .frame1196-text125 {
            font-style: normal;
          }
          .frame1196-text126 {
            font-style: normal;
          }
          .frame1196-text128 {
            font-style: normal;
          }
          .frame1196-text130 {
            font-style: normal;
          }
          .frame1196-text131 {
            color: #87ceeb;
            font-weight: 500;
            text-decoration: underline;
          }
          .frame1196-text132 {
            font-style: normal;
          }
          .frame1196-container124 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 1050px;
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
          .frame1196-icon128 {
            right: -13px;
            width: 9px;
            bottom: -16px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon130 {
            top: -14px;
            right: -13px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon132 {
            top: -14px;
            left: -13px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon134 {
            left: -13px;
            width: 9px;
            bottom: -16px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-container125 {
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
          .frame1196-container126 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 170px;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text133 {
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
          .frame1196-icon136 {
            height: 5px;
            max-width: 100px;
          }
          .frame1196-text134 {
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
          .frame1196-image25 {
            width: 65px;
            height: 66px;
            object-fit: cover;
          }
          .frame1196-container127 {
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
          .frame1196-container128 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 180px;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text135 {
            fill: #5ac3e8;
            color: #000000;
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
          .frame1196-icon142 {
            height: 5px;
            max-width: 100px;
          }
          .frame1196-text136 {
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
          .frame1196-image26 {
            width: 74px;
            height: 62px;
            object-fit: cover;
          }
          .frame1196-container129 {
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
          .frame1196-container130 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 180px;
            align-items: flex-start;
            padding-top: 14px;
            flex-direction: column;
          }
          .frame1196-text137 {
            fill: var(--dl-color-theme-neutral-dark);
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
          .frame1196-icon148 {
            height: 5px;
            max-width: 100px;
          }
          .frame1196-text138 {
            fill: #333333;
            color: #333333;
            width: 100%;
            height: 90px;
            font-size: 14.5px;
            font-style: italic;
            font-family: 'Nunito';
            font-weight: 300;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .frame1196-image27 {
            width: 72px;
            height: 62px;
            object-fit: cover;
          }
          .frame1196-icon154 {
            left: -11px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon156 {
            right: -11px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon158 {
            top: -13px;
            right: 0px;
            width: 100%;
            height: 7px;
            position: absolute;
          }
          .frame1196-icon160 {
            right: -1px;
            width: 100%;
            bottom: -14px;
            height: 5px;
            position: absolute;
          }
          .frame1196-container131 {
            width: 298px;
            height: 50px;
            display: flex;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-oneandhalfunits);
            align-items: center;
            margin-bottom: 44px;
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text139 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            height: auto;
            font-size: 21px;
            font-style: italic;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: 1.15;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .frame1196-container132 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 1000px;
            background: linear-gradient(180deg, #fdfdf9 0%, #faf8f6 100%);
            box-shadow: 0px 0px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #f7f1ea;
          }
          .frame1196-blue1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 8px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 6px;
            justify-content: center;
          }
          .frame1196-container133 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .frame1196-container134 {
            max-width: 20px;
            min-width: 20px;
            align-self: flex-start;
          }
          .frame1196-text140 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Roboto Serif';
            font-weight: 500;
          }
          .frame1196-text141 {
            font-size: 16px;
            font-family: 'Noto Serif SC';
            font-weight: 300;
          }
          .frame1196-text142 {
            font-style: normal;
          }
          .frame1196-text143 {
            font-style: normal;
          }
          .frame1196-text144 {
            font-style: normal;
          }
          .frame1196-container135 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .frame1196-text145 {
            font-size: 15px;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 600;
          }
          .frame1196-icon162 {
            display: none;
          }
          .frame1196-container136 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .frame1196-image28 {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .frame1196-text146 {
            fill: #4ec8ed;
            color: #4ec8ed;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            text-decoration: underline;
          }
          .frame1196-blue2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 8px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 8px;
            justify-content: center;
          }
          .frame1196-container137 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .frame1196-container138 {
            max-width: 20px;
            min-width: 20px;
          }
          .frame1196-text147 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 500;
          }
          .frame1196-text148 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
          }
          .frame1196-container139 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .frame1196-text149 {
            font-size: 15px;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 600;
          }
          .frame1196-icon168 {
            display: none;
          }
          .frame1196-container140 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .frame1196-image29 {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .frame1196-text150 {
            fill: #4ec8ed;
            color: #4ec8ed;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            text-decoration: underline;
          }
          .frame1196-blue3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 8px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 8px;
            justify-content: center;
          }
          .frame1196-container141 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .frame1196-container142 {
            max-width: 20px;
            min-width: 20px;
          }
          .frame1196-text151 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 500;
          }
          .frame1196-text152 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
          }
          .frame1196-container143 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .frame1196-text153 {
            font-size: 16px;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
          }
          .frame1196-icon174 {
            display: none;
          }
          .frame1196-container144 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .frame1196-image30 {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .frame1196-text154 {
            fill: #4ec8ed;
            color: #4ec8ed;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            text-decoration: underline;
          }
          .frame1196-text155 {
            display: inline-block;
          }
          .frame1196-text156 {
            display: inline-block;
          }
          .frame1196-text157 {
            display: inline-block;
          }
          .frame1196-text158 {
            display: inline-block;
          }
          .frame1196-text159 {
            color: rgb(78, 200, 237);
            display: inline-block;
            text-decoration: underline;
          }
          .frame1196-text160 {
            display: inline-block;
          }
          .frame1196-text161 {
            display: inline-block;
          }
          .frame1196-text162 {
            display: inline-block;
          }
          .frame1196-text163 {
            display: inline-block;
          }
          .frame1196-text164 {
            display: inline-block;
          }
          .frame1196-text165 {
            display: inline-block;
          }
          .frame1196-text166 {
            display: inline-block;
          }
          .frame1196-text167 {
            color: rgb(88, 195, 232);
            display: inline-block;
            text-decoration: underline;
          }
          .frame1196-text168 {
            display: inline-block;
          }
          .frame1196-text169 {
            display: inline-block;
          }
          .frame1196-text170 {
            display: inline-block;
          }
          .frame1196-text171 {
            display: inline-block;
          }
          .frame1196-text172 {
            display: inline-block;
          }
          .frame1196-text173 {
            display: inline-block;
          }
          .frame1196-text174 {
            display: inline-block;
          }
          .frame1196-text175 {
            display: inline-block;
          }
          .frame1196-text176 {
            display: inline-block;
          }
          .frame1196-text177 {
            display: inline-block;
          }
          .frame1196-text178 {
            display: inline-block;
          }
          .frame1196-text179 {
            color: #58c3e8;
            display: inline-block;
            text-decoration: underline;
          }
          .frame1196-text180 {
            display: inline-block;
          }
          .frame1196-text181 {
            display: inline-block;
          }
          .frame1196-text182 {
            display: inline-block;
          }
          .frame1196-text183 {
            display: inline-block;
          }
          .frame1196-text184 {
            display: inline-block;
          }
          .frame1196-text185 {
            display: inline-block;
          }
          .frame1196-text186 {
            display: inline-block;
          }
          .frame1196-text187 {
            display: inline-block;
          }
          .frame1196-text188 {
            display: inline-block;
          }
          .frame1196-text189 {
            display: inline-block;
          }
          .frame1196-text190 {
            display: inline-block;
          }
          .frame1196-text191 {
            display: inline-block;
          }
          .frame1196-text192 {
            display: inline-block;
          }
          .frame1196-text193 {
            display: inline-block;
          }
          .frame1196-text194 {
            display: inline-block;
          }
          .frame1196-text195 {
            color: #58c3e8;
            display: inline-block;
            text-decoration: underline;
          }
          .frame1196-text196 {
            display: inline-block;
          }
          .frame1196-text197 {
            display: inline-block;
          }
          .frame1196-text198 {
            display: inline-block;
          }
          .frame1196-text199 {
            display: inline-block;
          }
          .frame1196-text200 {
            display: inline-block;
          }
          .frame1196-text201 {
            display: inline-block;
          }
          .frame1196-text202 {
            display: inline-block;
          }
          .frame1196-text203 {
            display: inline-block;
          }
          .frame1196-text204 {
            display: inline-block;
          }
          .frame1196-text205 {
            display: inline-block;
          }
          .frame1196-text206 {
            display: inline-block;
          }
          .frame1196-text207 {
            display: inline-block;
          }
          .frame1196-text208 {
            display: inline-block;
          }
          .frame1196-text209 {
            display: inline-block;
          }
          .frame1196-text210 {
            display: inline-block;
          }
          .frame1196-blue4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 8px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 8px;
            justify-content: center;
          }
          .frame1196-container145 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .frame1196-container146 {
            max-width: 20px;
            min-width: 20px;
          }
          .frame1196-text211 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 500;
          }
          .frame1196-text212 {
            color: #58c3e8;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
            text-decoration: underline;
          }
          .frame1196-container147 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .frame1196-text213 {
            font-size: 16px;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
          }
          .frame1196-icon180 {
            display: none;
          }
          .frame1196-container148 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .frame1196-image31 {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .frame1196-text214 {
            fill: #4ec8ed;
            color: #4ec8ed;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            text-decoration: underline;
          }
          .frame1196-icon186 {
            left: -14px;
            width: auto;
            bottom: -23px;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon188 {
            right: -14px;
            width: auto;
            bottom: -23px;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon190 {
            top: -22px;
            right: -14px;
            width: auto;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon192 {
            top: -22px;
            left: -14px;
            width: auto;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon194 {
            top: -19px;
            left: -1px;
            width: 100%;
            height: 13px;
            position: absolute;
          }
          .frame1196-icon196 {
            left: 0px;
            width: 100%;
            bottom: -16px;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon198 {
            right: -12px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon200 {
            left: -12px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-remont-vsehmar {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            margin-bottom: 84px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/frame%2014159-800w.png');
            background-position: bottom;
          }
          .frame1196-remont-vseh-marok {
            width: 298px;
            height: 50px;
            display: flex;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text215 {
            fill: var(--dl-color-theme-neutral-dark);
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 21px;
            font-style: italic;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container150 {
            display: contents;
          }
          .frame1196-container151 {
            width: 100%;
            height: 100%;
            border-width: 0px;
          }
          .frame1196-container152 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
          }
          .frame1196-image32 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image33 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image34 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image35 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image36 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image37 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image38 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image39 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image40 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image41 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image42 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image43 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image44 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image45 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image46 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image47 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image48 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image49 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image50 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image51 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-image52 {
            width: auto;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .frame1196-container155 {
            display: contents;
          }
          .frame1196-container156 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .frame1196-container157 {
            display: flex;
            align-items: center;
            background-size: cover;
            background-image: url('/vikup55.webp');
          }
          .frame1196-container158 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container159 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-text216 {
            fill: #faf8f6;
            color: white;
            width: 650px;
            height: auto;
            font-size: 27px;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-button2 {
            color: #ffffff;
            width: 254px;
            height: 45px;
            font-size: 16px;
            max-width: 330px;
            min-width: 170px;
            align-self: center;
            font-style: normal;
            max-height: 50px;
            min-height: 55px;
            font-family: 'Spectral';
            font-weight: 500;
            border-color: rgba(25, 24, 24, 0.35);
            background-color: #ffd84d;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .frame1196-button2:hover {
            background-color: #e6c043;
          }
          .frame1196-container160 {
            gap: Thre0eUnits;
            width: 100%;
            height: 100%;
            display: flex;
            min-height: 100%;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            margin-bottom: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            background-size: cover;
            justify-content: center;
            background-color: #ffffff;
            background-image: url('/problems/23232.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .frame1196-container161 {
            width: 298px;
            height: 50px;
            display: flex;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text217 {
            fill: var(--dl-color-theme-neutral-dark);
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 21px;
            font-style: italic;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container162 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-container163 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 347px;
            min-width: auto;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: 180px;
            min-height: 180px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-icon202 {
            right: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon204 {
            top: -14px;
            right: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon206 {
            top: -13px;
            left: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon208 {
            left: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-container164 {
            gap: var(--dl-layout-space-unit);
            width: 258px;
            height: auto;
            display: flex;
            position: relative;
            max-width: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container165 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .frame1196-container166 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text218 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: 0.3px;
          }
          .frame1196-icon210 {
            width: var(--dl-layout-size-large);
            height: 1px;
          }
          .frame1196-image53 {
            width: 74px;
            height: 52px;
            object-fit: cover;
          }
          .frame1196-text219 {
            fill: rgba(25, 24, 24, 0.9);
            color: rgba(25, 24, 24, 0.9);
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            font-style: normal;
            font-family: 'Nunito';
            font-weight: 300;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .frame1196-icon216 {
            right: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon218 {
            left: -10px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon220 {
            top: -11px;
            right: -2px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon222 {
            left: 0px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .frame1196-container167 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 347px;
            min-width: auto;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: 180px;
            min-height: 180px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-icon224 {
            right: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon226 {
            top: -13px;
            right: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon228 {
            top: -14px;
            left: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon230 {
            left: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-container168 {
            gap: var(--dl-layout-space-unit);
            width: 258px;
            height: auto;
            display: flex;
            position: relative;
            max-width: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container169 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .frame1196-container170 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text220 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: 0.3px;
          }
          .frame1196-icon232 {
            width: var(--dl-layout-size-large);
            height: 1px;
          }
          .frame1196-image54 {
            width: 72px;
            height: 42px;
            object-fit: cover;
          }
          .frame1196-text221 {
            fill: rgba(25, 24, 24, 0.9);
            color: rgba(25, 24, 24, 0.9);
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            font-style: normal;
            font-family: 'Nunito';
            font-weight: 300;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .frame1196-icon238 {
            right: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon240 {
            left: -10px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon242 {
            top: -11px;
            right: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon244 {
            left: 0px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .frame1196-container171 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 347px;
            min-width: auto;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: 180px;
            min-height: 180px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-icon246 {
            right: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon248 {
            top: -14px;
            right: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon250 {
            top: -13px;
            left: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon252 {
            left: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-container172 {
            gap: var(--dl-layout-space-unit);
            width: 258px;
            height: auto;
            display: flex;
            position: relative;
            max-width: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container173 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .frame1196-container174 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text222 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: 0.3px;
          }
          .frame1196-icon254 {
            width: var(--dl-layout-size-large);
            height: 1px;
          }
          .frame1196-image55 {
            width: 61px;
            height: 48px;
            object-fit: cover;
          }
          .frame1196-text223 {
            fill: rgba(25, 24, 24, 0.9);
            color: rgba(25, 24, 24, 0.9);
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            font-style: normal;
            font-family: 'Nunito';
            font-weight: 300;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .frame1196-icon260 {
            right: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon262 {
            left: -10px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon264 {
            top: -11px;
            right: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon266 {
            left: 0px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .frame1196-container175 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 347px;
            min-width: auto;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: 180px;
            min-height: 180px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-icon268 {
            right: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon270 {
            top: -14px;
            right: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon272 {
            top: -13px;
            left: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon274 {
            left: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-container176 {
            gap: var(--dl-layout-space-unit);
            width: 258px;
            height: auto;
            display: flex;
            position: relative;
            max-width: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container177 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .frame1196-container178 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text224 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: 0.3px;
          }
          .frame1196-icon276 {
            width: var(--dl-layout-size-large);
            height: 1px;
          }
          .frame1196-image56 {
            width: 74px;
            height: 59px;
            object-fit: cover;
          }
          .frame1196-text225 {
            fill: rgba(25, 24, 24, 0.9);
            color: rgba(25, 24, 24, 0.9);
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            font-style: normal;
            font-family: 'Nunito';
            font-weight: 300;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .frame1196-icon282 {
            right: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon284 {
            left: -10px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon286 {
            top: -11px;
            right: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon288 {
            left: 0px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .frame1196-container179 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 347px;
            min-width: auto;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: 180px;
            min-height: 180px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-icon290 {
            right: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon292 {
            top: -14px;
            right: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon294 {
            top: -14px;
            left: -12px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon296 {
            left: -12px;
            width: 9px;
            bottom: -14px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .frame1196-container180 {
            gap: var(--dl-layout-space-unit);
            width: 258px;
            height: auto;
            display: flex;
            position: relative;
            max-width: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container181 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 65px;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .frame1196-container182 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text226 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: 0.3px;
          }
          .frame1196-icon298 {
            width: var(--dl-layout-size-large);
            height: 1px;
          }
          .frame1196-image57 {
            width: 44px;
            height: 61px;
            object-fit: cover;
          }
          .frame1196-text227 {
            fill: rgba(25, 24, 24, 0.9);
            color: rgba(25, 24, 24, 0.9);
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            font-style: normal;
            font-family: 'Nunito';
            font-weight: 300;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .frame1196-icon304 {
            right: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon306 {
            left: -10px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon308 {
            top: -12px;
            right: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon310 {
            left: 0px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .frame1196-container183 {
            width: 298px;
            height: 50px;
            display: flex;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text228 {
            fill: var(--dl-color-theme-neutral-dark);
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 21px;
            font-style: italic;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container184 {
            width: 867px;
            height: auto;
            display: flex;
            position: relative;
            max-width: 1000px;
            align-items: center;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-icon312 {
            left: -13px;
            width: auto;
            bottom: -23px;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon314 {
            right: -15px;
            width: auto;
            bottom: -23px;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon316 {
            top: -23px;
            right: -14px;
            width: auto;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon318 {
            top: -23px;
            left: -13px;
            width: auto;
            height: auto;
            z-index: 1;
            position: absolute;
          }
          .frame1196-icon320 {
            top: -16px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon322 {
            left: 0px;
            width: 100%;
            bottom: -16px;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon324 {
            right: -12px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon326 {
            left: -11px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            position: absolute;
          }
          .frame1196-nashi-raboti {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 900px;
            min-width: 900px;
            min-height: 800px;
            align-items: center;
            justify-content: center;
            scroll-snap-type: mandatory;
          }
          .frame1196-container185 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/1%20(1)-300w.webp');
            scroll-snap-align: start;
          }
          .frame1196-container186 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text229 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container187 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/2-300w.webp');
            scroll-snap-align: start;
          }
          .frame1196-container188 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text230 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container189 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/32-400h.webp');
            scroll-snap-align: start;
          }
          .frame1196-container190 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text231 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container191 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/41-400h.webp');
            scroll-snap-align: start;
          }
          .frame1196-container192 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text232 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container193 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/52-400h.webp');
            scroll-snap-align: start;
          }
          .frame1196-container194 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text233 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container195 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/62-400h.webp');
            scroll-snap-align: start;
          }
          .frame1196-container196 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text234 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container197 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/72-400h.webp');
            scroll-snap-align: start;
          }
          .frame1196-container198 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text235 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container199 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/81-400h.webp');
            scroll-snap-align: start;
          }
          .frame1196-container200 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text236 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container201 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 6px 15px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/101-300w.webp');
            scroll-snap-align: start;
          }
          .frame1196-container202 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #faf8f7;
          }
          .frame1196-text237 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .frame1196-container203 {
            flex: 0 0 auto;
            display: none;
            align-items: flex-start;
          }
          .frame1196-container204 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .frame1196-container205 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .frame1196-container206 {
            width: 100%;
            display: flex;
            max-width: 800px;
            min-width: 800px;
            margin-top: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            padding-left: 4px;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container207 {
            width: 50%;
            height: 90px;
            display: flex;
            align-self: center;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            align-items: center;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text238 {
            fill: var(--dl-color-theme-neutral-dark);
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 21px;
            font-style: italic;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-icon332 {
            padding-left: var(--dl-layout-space-unit);
          }
          .frame1196-icon335 {
            display: none;
          }
          .frame1196-container208 {
            gap: 8px;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 800px;
            min-width: 600px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: 55px;
            justify-content: flex-start;
          }
          .frame1196-container209 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            z-index: 1;
            max-width: 400px;
            min-height: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-container210 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 45px;
            display: flex;
            max-height: 45px;
            align-items: center;
          }
          .frame1196-container211 {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            justify-content: flex-start;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .frame1196-icon338 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #59c3e7;
            width: 100%;
            height: 100%;
          }
          .frame1196-text239 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 16;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .frame1196-otvet1 {
            width: 412px;
            height: 100%;
            display: none;
            max-width: 350px;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(25, 24, 24, 0.23);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-text240 {
            fill: #343434;
            color: #343434;
            width: auto;
            height: auto;
            font-size: 15px;
            align-self: center;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container212 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            max-width: 400px;
            max-height: 100%;
            min-height: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container213 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 45px;
            display: flex;
            max-height: 45px;
            align-items: center;
          }
          .frame1196-container214 {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            justify-content: flex-start;
            background-color: #191818;
          }
          .frame1196-icon340 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #59c3e7;
            width: 100%;
            height: 100%;
          }
          .frame1196-text241 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            text-align: center;
            font-stretch: normal;
          }
          .frame1196-otvet2 {
            width: 412px;
            height: 100%;
            max-width: 350px;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(25, 24, 24, 0.23);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-text242 {
            fill: #343434;
            color: #343434;
            width: auto;
            height: auto;
            font-size: 15px;
            align-self: center;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container215 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            max-width: 400px;
            max-height: 100%;
            min-height: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container216 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 45px;
            display: flex;
            max-height: 45px;
            align-items: center;
          }
          .frame1196-container217 {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            justify-content: flex-start;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .frame1196-icon342 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #59c3e7;
            width: 100%;
            height: 100%;
          }
          .frame1196-text243 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            text-align: center;
            font-stretch: normal;
          }
          .frame1196-otvet3 {
            width: 412px;
            height: 100%;
            display: none;
            max-width: 350px;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(25, 24, 24, 0.23);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-text244 {
            fill: #343434;
            color: #343434;
            width: auto;
            height: auto;
            font-size: 15px;
            align-self: center;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container218 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            max-width: 400px;
            max-height: auto;
            min-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container219 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 45px;
            display: flex;
            max-height: 45px;
            align-items: center;
            flex-direction: row;
          }
          .frame1196-container220 {
            width: 31px;
            height: 31px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            justify-content: flex-start;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .frame1196-icon344 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #59c3e7;
            width: 100%;
            height: 100%;
          }
          .frame1196-text245 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            text-align: left;
            font-stretch: normal;
          }
          .frame1196-otvet4 {
            width: 412px;
            height: 100%;
            display: none;
            max-width: 350px;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(25, 24, 24, 0.23);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-text246 {
            fill: #343434;
            color: #343434;
            width: auto;
            height: auto;
            font-size: 15px;
            align-self: center;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container221 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            max-width: 400px;
            max-height: auto;
            min-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-container222 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 45px;
            display: flex;
            max-height: 45px;
            align-items: center;
          }
          .frame1196-container223 {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            justify-content: flex-start;
            background-color: #191818;
          }
          .frame1196-icon346 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #59c3e7;
            width: 100%;
            height: 100%;
          }
          .frame1196-text247 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            text-align: left;
            font-stretch: normal;
          }
          .frame1196-otvet5 {
            width: 412px;
            height: 100%;
            display: none;
            max-width: 350px;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(25, 24, 24, 0.23);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #fefef9;
          }
          .frame1196-text248 {
            fill: #343434;
            color: #343434;
            width: auto;
            height: auto;
            font-size: 15px;
            align-self: center;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-icon348 {
            left: 11px;
            bottom: -6px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-container224 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            min-width: 800px;
            align-items: center;
            flex-direction: row;
          }
          .frame1196-icon350 {
            width: 561px;
            padding-left: var(--dl-layout-space-unit);
          }
          .frame1196-korotkayya {
            display: none;
          }
          .frame1196-text249 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: 'Spectral SC';
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-button3 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            width: 325px;
            height: auto;
            font-size: 16px;
            max-width: 330px;
            min-width: 170px;
            align-self: center;
            font-style: normal;
            max-height: 50px;
            min-height: 50px;
            font-family: 'Spectral';
            font-weight: 600;
            border-color: rgba(25, 24, 24, 0.35);
            border-radius: 8px;
            letter-spacing: 1.15px;
            background-color: rgb(40, 40, 40);
          }
          .frame1196-container225 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: rgba(25, 24, 24, 0.53);
            border-width: 1px;
            padding-left: 119px;
            padding-right: 42px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #fefef6;
          }
          .frame1196-container226 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-text251 {
            fill: #343434;
            color: #343434;
            line-height: 1.2;
          }
          .frame1196-text252 {
            line-height: 1.2;
          }
          .frame1196-ul1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            margin-top: 0px;
            flex-direction: column;
            list-style-type: decimal;
            list-style-position: outside;
          }
          .frame1196-text260 {
            line-height: 1.2;
          }
          .frame1196-ul2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            margin-top: 0px;
            flex-direction: column;
            list-style-type: disc;
            list-style-position: outside;
          }
          .frame1196-text271 {
            line-height: 1.2;
          }
          .frame1196-container227 {
            width: 321px;
            height: 56px;
            display: flex;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text274 {
            fill: var(--dl-color-theme-neutral-dark);
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 23px;
            font-style: italic;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-container228 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .frame1196-frame10721 {
            gap: 18px;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            position: relative;
            max-width: 380px;
            align-self: center;
            background: linear-gradient(180deg, #fdfdf6 0%, #faf8f6 100%);
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: auto;
            min-height: 310px;
            align-items: flex-start;
            flex-shrink: 0;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-icon355 {
            right: -11px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-frame10711 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .frame1196-unsplash3t-ll97hn-jo1 {
            width: 72px;
            height: 72px;
            border-radius: 250px;
          }
          .frame1196-text275 {
            color: #5a5757;
            height: auto;
            font-size: 17px;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-frame10701 {
            width: 125px;
            height: 12px;
          }
          .frame1196-text276 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 14.5px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-icon357 {
            top: -10px;
            left: 0px;
            width: 100%;
            height: 5px;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon359 {
            left: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon361 {
            right: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon363 {
            right: -13px;
            width: 9px;
            bottom: -19px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon365 {
            top: -17px;
            right: -13px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon367 {
            top: -17px;
            left: -12px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon369 {
            left: -12px;
            width: 9px;
            bottom: -18px;
            height: auto;
            position: absolute;
          }
          .frame1196-frame10722 {
            gap: 18px;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            position: relative;
            max-width: 380px;
            align-self: center;
            background: linear-gradient(180deg, #fdfdf6 0%, #faf8f6 100%);
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: auto;
            min-height: 310px;
            align-items: flex-start;
            flex-shrink: 0;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-icon371 {
            right: -11px;
            width: 5px;
            bottom: -2px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-frame10712 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .frame1196-unsplash3t-ll97hn-jo2 {
            width: 72px;
            height: 72px;
            border-radius: 250px;
          }
          .frame1196-text277 {
            fill: #5a5757;
            color: #5a5757;
            height: auto;
            font-size: 17px;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-frame10702 {
            width: 125px;
            height: 12px;
          }
          .frame1196-text278 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 14.5px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-icon373 {
            top: -10px;
            left: 0px;
            width: 100%;
            height: 5px;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon375 {
            left: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon377 {
            right: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon379 {
            right: -13px;
            width: 9px;
            bottom: -19px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon381 {
            top: -17px;
            right: -13px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon383 {
            top: -17px;
            left: -12px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon385 {
            left: -12px;
            width: 9px;
            bottom: -19px;
            height: auto;
            position: absolute;
          }
          .frame1196-frame10723 {
            gap: 18px;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            position: relative;
            max-width: 380px;
            align-self: center;
            background: linear-gradient(180deg, #fdfdf6 0%, #faf8f6 100%);
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            max-height: auto;
            min-height: 310px;
            align-items: flex-start;
            flex-shrink: 0;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-icon387 {
            right: -11px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-frame10713 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .frame1196-unsplash3t-ll97hn-jo3 {
            width: 72px;
            height: 72px;
            border-radius: 250px;
          }
          .frame1196-text279 {
            fill: #5a5757;
            color: #5a5757;
            height: auto;
            font-size: 17px;
            font-style: Regular;
            text-align: center;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-frame10703 {
            width: 97px;
            height: 12px;
          }
          .frame1196-text280 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 14.5px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1196-icon389 {
            top: -10px;
            left: 0px;
            width: 100%;
            height: 5px;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon391 {
            left: -10px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon393 {
            right: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            z-index: 0;
            position: absolute;
          }
          .frame1196-icon395 {
            right: -13px;
            width: 9px;
            bottom: -19px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon397 {
            top: -17px;
            right: -13px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon399 {
            top: -17px;
            left: -12px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .frame1196-icon401 {
            left: -12px;
            width: 9px;
            bottom: -19px;
            height: auto;
            position: absolute;
          }
          .frame1196-button4 {
            width: 254px;
            height: 45px;
            font-size: 15px;
            align-self: flex-end;
            background: linear-gradient(180deg, #fdfdf6 0%, #faf8f6 100%);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 500;
            border-color: rgba(25, 24, 24, 0.17);
            margin-right: var(--dl-layout-space-sixunits);
            margin-bottom: var(--dl-layout-space-threeunits);
            background-color: #fdfdf2;
          }
          .frame1196-container229 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: auto;
            min-width: auto;
            align-self: center;
            max-height: 500px;
            min-height: 450px;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: rgba(25, 24, 24, 0.42);
            border-width: 1px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #faf8f6;
          }
          .frame1196-container230 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container231 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text281 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .frame1196-container232 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-container233 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text282 {
            font-size: 15px;
            font-family: 'Noto Serif SC';
          }
          .frame1196-text283 {
            font-size: 15px;
            font-family: 'Noto Serif SC';
          }
          .frame1196-container234 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .frame1196-text284 {
            font-size: 15px;
            font-family: 'Noto Serif SC';
          }
          .frame1196-text285 {
            font-size: 15px;
            font-family: 'Noto Serif SC';
          }
          .frame1196-text286 {
            font-size: 15px;
            align-self: flex-start;
            text-align: center;
            font-family: 'Noto Serif SC';
          }
          .frame1196-icon403 {
            width: 190px;
            height: 5px;
          }
          .frame1196-container235 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            max-height: auto;
            min-height: auto;
            flex-direction: column;
          }
          .frame1196-container236 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .frame1196-text287 {
            color: #202020;
            font-size: 17px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .frame1196-button5 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            font-size: 16px;
            max-width: 330px;
            min-width: 170px;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(43, 43, 43, 0.68);
            font-style: normal;
            max-height: 50px;
            min-height: 55px;
            font-family: 'Spectral';
            font-weight: 500;
            border-color: rgba(25, 24, 24, 0.35);
            border-radius: 8px;
            letter-spacing: 1px;
            background-color: rgb(40, 40, 40);
          }
          .frame1196-container237 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .frame1196-google-maps {
            width: 100%;
            height: 200px;
          }
          .frame1196-container238 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: 500px;
            margin-top: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text288 {
            fill: #87ceeb;
            color: #87ceeb;
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
          }
          .frame1196-text289 {
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
          }
          .frame1196-text290 {
            font-size: 15px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            text-transform: capitalize;
            text-decoration: none;
          }
          .frame1196-text291 {
            color: rgb(56, 56, 56);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-family: Nunito;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .frame1196-text292 {
            color: #87ceeb;
            font-style: normal;
            font-weight: 600;
          }
          .frame1196-vector {
            top: 3814px;
            left: -483px;
            width: 870px;
            height: 884px;
            margin: auto;
            z-index: -1;
            position: absolute;
          }

          /* У��ираем margin-bottom у блока с заголовком и кнопкой до 1618px */
          @media (max-width: 1618px) {
            .frame1196-container112 {
              margin-bottom: 0px;
            }
          }

          /* Отдельный брейкпоинт для хедера */
          @media (max-width: 1525px) {
            .frame1196-container103 {
              gap: var(--dl-layout-space-halfunit);
              height: 42px;
            }
            .frame1196-container104 {
              gap: var(--dl-layout-space-twounits);
              width: 150px;
              height: auto;
              display: flex;
              padding-left: 0px;
              justify-content: center;
            }
            .frame1196-image11 {
              width: 30px;
              height: 29px;
            }
            .frame1196-image12 {
              width: 35px;
              height: 35px;
              padding-top: 0px;
            }
            .frame1196-obshiy {
              display: none;
            }
          }

          @media (max-width: 991px) {
            .frame1196-container111 {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: top;
            }
            .frame1196-container112 {
              margin-bottom: 0px;
            }
            .frame1196-button1 {
              align-self: center;
              margin-right: 0px;
            }
            .frame1196-container113 {
              box-shadow: none;
            }
            .frame1196-container114 {
              box-shadow: none;
            }
            .frame1196-container115 {
              box-shadow: none;
            }
            .frame1196-container116 {
              box-shadow: none;
            }
            .frame1196-container117 {
              box-shadow: none;
            }
            .frame1196-container118 {
              box-shadow: none;
            }
            .frame1196-container119 {
              box-shadow: none;
            }
            .frame1196-container120 {
              box-shadow: none;
            }
            .frame1196-container121 {
              box-shadow: none;
            }
            .frame1196-container122 {
              box-shadow: none;
            }
            .frame1196-container123 {
              width: 100%;
              background-image: url('/backgrounds/dada.png');
              background-size: cover;
              background-repeat: no-repeat;
              background-position: right center;
            }
            .frame1196-text122 {
              font-size: 17px;
              font-family: Noto Serif SC;
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .frame1196-text123 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text124 {
              color: #58c3e8;
              font-weight: 600;
            }
            .frame1196-text125 {
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-text126 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text127 {
              font-style: normal;
              text-decoration: none;
            }
            .frame1196-text128 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text129 {
              font-style: normal;
              text-decoration: none;
            }
            .frame1196-text130 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text131 {
              color: #58c3e8;
              font-style: normal;
              font-weight: 600;
              text-decoration: underline;
            }
            .frame1196-text132 {
              font-style: normal;
              text-decoration: none;
            }
            .frame1196-container124 {
              gap: var(--dl-layout-space-unit);
              width: auto;
              margin-top: var(--dl-layout-space-fourunits);
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .frame1196-container125 {
              width: auto;
              align-items: center;
              flex-direction: column-reverse;
              justify-content: center;
            }
            .frame1196-text133 {
              text-align: center;
            }
            .frame1196-icon136 {
              align-self: center;
            }
            .frame1196-text134 {
              color: rgba(25, 24, 24, 0.9);
              font-size: 14.5px;
              font-style: italic;
              text-align: center;
              font-family: Nunito;
              font-weight: 300;
            }
            .frame1196-container127 {
              width: auto;
              height: auto;
              align-items: center;
              flex-direction: column-reverse;
            }
            .frame1196-text135 {
              width: 100%;
              align-self: flex-start;
              text-align: center;
            }
            .frame1196-icon142 {
              align-self: center;
            }
            .frame1196-text136 {
              color: rgba(25, 24, 24, 0.9);
              font-size: 14.5px;
              font-style: italic;
              text-align: center;
              font-family: Nunito;
              font-weight: 300;
            }
            .frame1196-image26 {
              width: 77px;
              height: 66px;
            }
            .frame1196-container129 {
              gap: var(--dl-layout-space-halfunit);
              width: auto;
              align-items: center;
              padding-top: 39px;
              flex-direction: column-reverse;
            }
            .frame1196-container130 {
              padding-top: 12px;
            }
            .frame1196-text137 {
              text-align: center;
            }
            .frame1196-icon148 {
              align-self: center;
            }
            .frame1196-text138 {
              color: rgba(25, 24, 24, 0.85);
              font-size: 14.5px;
              font-style: italic;
              text-align: center;
              font-family: Nunito;
              font-weight: 300;
            }
            .frame1196-image27 {
              width: 67px;
              height: 58px;
            }
            .frame1196-container131 {
              width: 230px;
            }
            .frame1196-container132 {
              width: auto;
              height: auto;
              max-width: 1000px;
              min-height: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .frame1196-blue1 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: 0px;
              justify-content: flex-end;
            }
            .frame1196-container135 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text145 {
              align-self: center;
            }
            .frame1196-icon162 {
              display: none;
            }
            .frame1196-blue2 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: 0px;
              justify-content: flex-end;
            }
            .frame1196-container139 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text149 {
              align-self: center;
            }
            .frame1196-icon168 {
              display: none;
            }
            .frame1196-blue3 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: 0px;
              justify-content: flex-end;
            }
            .frame1196-container143 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text153 {
              align-self: center;
            }
            .frame1196-icon174 {
              display: none;
            }
            .frame1196-blue4 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: 0px;
              justify-content: flex-end;
            }
            .frame1196-text212 {
              font-family: Noto Serif SC;
            }
            .frame1196-container147 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-icon194 {
              top: -15px;
              left: -2px;
              height: 5px;
            }
            .frame1196-remont-vsehmar {
              width: 100%;
              height: 100%;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-remont-vseh-marok {
              width: 225px;
              height: 78px;
            }
            .frame1196-text215 {
              font-size: 20px;
            }
            .frame1196-container158 {
              justify-content: center;
            }
            .frame1196-container159 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .frame1196-text216 {
              width: 100%;
              max-width: 650px;
              min-width: auto;
            }
            .frame1196-button2 {
              align-self: center;
              margin-right: 0px;
            }
            .frame1196-container160 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container161 {
              width: 230px;
            }
            .frame1196-text217 {
              font-size: 20px;
            }
            .frame1196-container162 {
              width: 100%;
              flex-wrap: wrap;
              max-width: 1200px;
            }
            .frame1196-text218 {
              text-align: left;
            }
            .frame1196-text220 {
              text-align: left;
            }
            .frame1196-text222 {
              text-align: left;
            }
            .frame1196-text224 {
              text-align: left;
            }
            .frame1196-text226 {
              text-align: left;
            }
            .frame1196-container183 {
              width: 230px;
            }
            .frame1196-text228 {
              font-size: 20px;
            }
            .frame1196-container184 {
              width: auto;
              height: auto;
              max-width: auto;
              min-height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .frame1196-nashi-raboti {
              max-width: 570px;
              min-width: 570px;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .frame1196-text229 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text230 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text231 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text232 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text233 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text234 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text235 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text236 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-text237 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container206 {
              width: 100%;
              max-width: 312px;
              min-width: 312px;
            }
            .frame1196-container207 {
              width: 300px;
              align-self: center;
            }
            .frame1196-text238 {
              font-size: 20px;
            }
            .frame1196-icon332 {
              width: 100%;
              height: 86px;
              display: none;
            }
            .frame1196-icon335 {
              width: 100%;
              height: 78px;
              display: flex;
              padding-left: var(--dl-layout-space-unit);
            }
            .frame1196-container208 {
              width: 100%;
              max-width: 316px;
              min-width: var(--dl-layout-size-small);
              align-items: flex-start;
              padding-left: 0px;
              background-size: auto;
              justify-content: center;
              background-image: none;
              background-repeat: repeat;
              background-position: top left;
            }
            .frame1196-container210 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              padding-left: 4px;
            }
            .frame1196-container211 {
              width: 25px;
              height: 25px;
              min-width: 25px;
              min-height: 25px;
            }
            .frame1196-otvet1 {
              width: 270px;
            }
            .frame1196-text240 {
              width: 100%;
              height: 100%;
            }
            .frame1196-container213 {
              gap: var(--dl-layout-space-unit);
              padding-left: 4px;
            }
            .frame1196-container214 {
              width: 25px;
              height: 25px;
              min-width: 25px;
              min-height: 25px;
            }
            .frame1196-text241 {
              text-align: left;
            }
            .frame1196-otvet2 {
              width: 270px;
            }
            .frame1196-text242 {
              width: 100%;
              height: 100%;
            }
            .frame1196-container216 {
              gap: var(--dl-layout-space-unit);
              padding-left: 4px;
            }
            .frame1196-container217 {
              width: 25px;
              height: 25px;
              min-width: 25px;
              min-height: 25px;
            }
            .frame1196-text243 {
              text-align: left;
            }
            .frame1196-otvet3 {
              width: 270px;
            }
            .frame1196-text244 {
              width: 100%;
              height: 100%;
            }
            .frame1196-container219 {
              gap: var(--dl-layout-space-unit);
              padding-left: 4px;
            }
            .frame1196-container220 {
              width: 25px;
              height: 25px;
              min-width: 25px;
              min-height: 25px;
            }
            .frame1196-otvet4 {
              width: 270px;
            }
            .frame1196-text246 {
              width: 100%;
              height: 100%;
            }
            .frame1196-container222 {
              gap: var(--dl-layout-space-unit);
              padding-left: 4px;
            }
            .frame1196-container223 {
              width: 25px;
              height: 25px;
              min-width: 25px;
              min-height: 25px;
            }
            .frame1196-otvet5 {
              width: 270px;
            }
            .frame1196-text248 {
              width: 100%;
              height: 100%;
            }
            .frame1196-icon348 {
              left: 12px;
              bottom: -3px;
            }
            .frame1196-container224 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              max-width: 312px;
              min-width: 312px;
              align-items: flex-start;
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
            .frame1196-icon350 {
              display: none;
            }
            .frame1196-korotkayya {
              width: 171px;
              height: 73px;
              display: flex;
              padding-left: var(--dl-layout-space-unit);
            }
            .frame1196-text249 {
              color: var(--dl-color-theme-neutral-dark);
              font-family: Spectral SC;
            }
            .frame1196-button3 {
              align-self: center;
              margin-right: 0px;
            }
            .frame1196-container225 {
              width: 100%;
              padding-left: 114px;
              padding-right: 141px;
            }
            .frame1196-container227 {
              width: 230px;
            }
            .frame1196-text274 {
              font-size: 20px;
            }
            .frame1196-button4 {
              align-self: center;
              margin-right: 0px;
            }
            .frame1196-container229 {
              margin-top: var(--dl-layout-space-twounits);
              max-height: 100%;
              min-height: 100%;
              padding-left: 0;
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: 0;
            }
            .frame1196-container230 {
              gap: var(--dl-layout-space-threeunits);
              height: 100%;
              flex-wrap: wrap;
            }
            .frame1196-container231 {
              max-width: 400px;
              align-self: center;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-text281 {
              align-self: center;
            }
            .frame1196-container232 {
              justify-content: center;
            }
            .frame1196-container233 {
              align-self: center;
            }
            .frame1196-container234 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .frame1196-text284 {
              text-align: center;
            }
            .frame1196-text286 {
              align-self: center;
            }
            .frame1196-icon403 {
              align-self: center;
            }
            .frame1196-button5 {
              align-self: center;
              margin-right: 0px;
            }
            .frame1196-container237 {
              max-width: 600px;
              align-self: center;
            }
            .frame1196-container238 {
              margin-top: 0px;
              align-items: center;
              justify-content: center;
            }
            .frame1196-vector {
              width: 100%;
              height: 100%;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .frame1196-container103 {
              gap: var(--dl-layout-space-halfunit);
              width: 170px;
              height: 38px;
            }
            .frame1196-text100 {
              font-size: 22px;
            }
            .frame1196-container104 {
              width: 111px;
            }
            .frame1196-image11 {
              width: 30px;
              height: 29px;
            }
            .frame1196-image12 {
              width: 35px;
              height: 35px;
            }
            .frame1196-container111 {
              background-size: auto;
              background-repeat: no-repeat;
              background-position: top;
            }
            .frame1196-image14 {
              display: none;
            }
            .frame1196-container113 {
              box-shadow: none;
            }
            .frame1196-text112 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container114 {
              box-shadow: none;
            }
            .frame1196-text113 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container115 {
              box-shadow: none;
            }
            .frame1196-text114 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container116 {
              box-shadow: none;
            }
            .frame1196-text115 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container117 {
              box-shadow: none;
            }
            .frame1196-text116 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container118 {
              box-shadow: none;
            }
            .frame1196-text117 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container119 {
              box-shadow: none;
            }
            .frame1196-text118 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container120 {
              box-shadow: none;
            }
            .frame1196-text119 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container121 {
              box-shadow: none;
            }
            .frame1196-text120 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container122 {
              box-shadow: none;
            }
            .frame1196-text121 {
              font-size: 16;
              font-family: Roboto Serif;
            }
            .frame1196-container123 {
              width: 100%;
              background-image: url('/backgrounds/dada.png');
              background-size: cover;
              background-repeat: no-repeat;
              background-position: right center;
            }
            .frame1196-text122 {
              font-size: 17px;
              font-family: Noto Serif SC;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text123 {
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text124 {
              color: #58c3e8;
              font-weight: 600;
            }
            .frame1196-text125 {
              font-weight: 400;
            }
            .frame1196-text126 {
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text127 {
              text-decoration: none;
            }
            .frame1196-text128 {
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text129 {
              text-decoration: none;
            }
            .frame1196-text130 {
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text131 {
              color: #58c3e8;
              font-style: normal;
              font-weight: 600;
              text-decoration: underline;
            }
            .frame1196-text132 {
              text-decoration: none;
            }
            .frame1196-container124 {
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
            .frame1196-container125 {
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
            .frame1196-container126 {
              gap: var(--dl-layout-space-unit);
              max-width: 180px;
            }
            .frame1196-text133 {
              text-align: left;
            }
            .frame1196-icon136 {
              width: 123px;
              height: 100%;
              display: flex;
              align-self: flex-start;
              max-height: 2px;
              min-height: auto;
            }
            .frame1196-text134 {
              text-align: left;
            }
            .frame1196-image25 {
              width: 62px;
              height: 64px;
            }
            .frame1196-container127 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: row-reverse;
              justify-content: center;
            }
            .frame1196-container128 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text135 {
              text-align: left;
            }
            .frame1196-icon142 {
              width: 123px;
              height: 100%;
              display: flex;
              align-self: flex-start;
              max-height: 2px;
              min-height: auto;
            }
            .frame1196-text136 {
              text-align: left;
            }
            .frame1196-image26 {
              width: 72px;
              height: 54px;
            }
            .frame1196-container129 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              align-items: center;
              padding-top: 5px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: row-reverse;
              justify-content: center;
            }
            .frame1196-container130 {
              gap: var(--dl-layout-space-unit);
              padding-top: 0px;
            }
            .frame1196-text137 {
              text-align: left;
            }
            .frame1196-icon148 {
              width: 123px;
              height: 100%;
              display: flex;
              align-self: flex-start;
              max-height: 2px;
              min-height: auto;
            }
            .frame1196-text138 {
              text-align: left;
            }
            .frame1196-image27 {
              width: 68px;
              height: 52px;
            }
            .frame1196-container132 {
              width: auto;
              height: auto;
              max-width: 450px;
              min-width: 200px;
              min-height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .frame1196-blue1 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 500px;
              padding-top: var(--dl-layout-space-unit);
              border-color: rgba(25, 24, 24, 0.72);
              border-style: dashed;
              border-width: 0.5px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .frame1196-container133 {
              max-width: 210px;
              min-width: 210px;
            }
            .frame1196-container134 {
              align-self: center;
            }
            .frame1196-container135 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: auto;
            }
            .frame1196-text146 {
              width: 100%;
              height: 100%;
              display: flex;
              min-width: auto;
            }
            .frame1196-blue2 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 500px;
              padding-top: var(--dl-layout-space-unit);
              border-color: rgba(25, 24, 24, 0.72);
              border-style: dashed;
              border-width: 0.5px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: #f9f9f1;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .frame1196-container137 {
              max-width: 210px;
              min-width: 210px;
            }
            .frame1196-container138 {
              align-self: center;
            }
            .frame1196-container139 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: auto;
            }
            .frame1196-text150 {
              width: 100%;
              height: 100%;
              display: flex;
              min-width: auto;
            }
            .frame1196-blue3 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 500px;
              padding-top: var(--dl-layout-space-unit);
              border-color: rgba(25, 24, 24, 0.72);
              border-style: dashed;
              border-width: 0.5px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .frame1196-container141 {
              max-width: 210px;
              min-width: 210px;
            }
            .frame1196-container142 {
              align-self: center;
            }
            .frame1196-container143 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: auto;
            }
            .frame1196-text154 {
              width: 100%;
              height: 100%;
              display: flex;
              min-width: auto;
            }
            .frame1196-blue4 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 500px;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: #f9f9f1;
            }
            .frame1196-container145 {
              max-width: 210px;
              min-width: 210px;
            }
            .frame1196-container146 {
              align-self: center;
            }
            .frame1196-container147 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: auto;
            }
            .frame1196-icon180 {
              display: none;
            }
            .frame1196-remont-vsehmar {
              width: 100%;
              height: 100%;
              background-image: none;
              background-position: right;
            }
            .frame1196-remont-vseh-marok {
              height: 75px;
            }
            .frame1196-text215 {
              font-size: 20px;
            }
            .frame1196-text216 {
              width: 100%;
            }
            .frame1196-container160 {
              padding-top: 5px;
            }
            .frame1196-text217 {
              font-size: 20px;
            }
            .frame1196-container164 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text218 {
              text-align: left;
            }
            .frame1196-container168 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text220 {
              text-align: left;
            }
            .frame1196-container172 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text222 {
              text-align: left;
            }
            .frame1196-container176 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text224 {
              text-align: left;
            }
            .frame1196-icon276 {
              width: var(--dl-layout-size-large);
            }
            .frame1196-image56 {
              width: 49px;
              height: 55px;
            }
            .frame1196-container180 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text226 {
              text-align: left;
            }
            .frame1196-image57 {
              width: 48px;
            }
            .frame1196-text228 {
              font-size: 20px;
            }
            .frame1196-container184 {
              width: auto;
              height: auto;
              max-width: 450px;
              min-width: 200px;
              min-height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .frame1196-icon312 {
              left: -13px;
              bottom: -18px;
            }
            .frame1196-icon314 {
              right: -14px;
              bottom: -18px;
            }
            .frame1196-icon316 {
              top: -17px;
              right: -14px;
            }
            .frame1196-icon318 {
              top: -17px;
              left: -13px;
            }
            .frame1196-icon320 {
              top: -10px;
              left: 0px;
            }
            .frame1196-icon322 {
              right: -1px;
              bottom: -12px;
            }
            .frame1196-icon324 {
              right: -12px;
              bottom: -2px;
            }
            .frame1196-nashi-raboti {
              width: 260px;
              height: 100%;
              flex-wrap: nowrap;
              max-width: var(--dl-layout-size-maxwidth);
              min-width: auto;
              align-self: center;
              min-height: auto;
              overflow-x: auto;
              flex-direction: row;
              justify-content: flex-start;
              scroll-behavior: smooth;
              scrollbar-width: none;
              scroll-snap-type: x mandatory;
            }
            .frame1196-container185 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text229 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container187 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text230 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container189 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text231 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container191 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text232 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container193 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text233 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container195 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text234 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container197 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text235 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container199 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text236 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container201 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .frame1196-text237 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .frame1196-container203 {
              width: 94px;
              height: 43px;
              display: flex;
              align-self: center;
              margin-top: var(--dl-layout-space-twounits);
              margin-bottom: 51px;
              justify-content: space-between;
            }
            .frame1196-container204 {
              width: 36px;
              height: 36px;
              align-items: center;
              border-radius: var(--dl-layout-radius-round);
              justify-content: center;
              background-color: #606060;
            }
            .frame1196-icon328 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #58c3e8;
              width: 22px;
              height: 22px;
            }
            .frame1196-container205 {
              width: 36px;
              height: 36px;
              align-items: center;
              border-radius: var(--dl-layout-radius-round);
              justify-content: center;
              background-color: #606060;
            }
            .frame1196-icon330 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #58c3e8;
            }
            .frame1196-text238 {
              font-size: 20px;
            }
            .frame1196-icon332 {
              width: 282px;
              height: 86px;
            }
            .frame1196-container208 {
              padding-left: 0px;
              padding-right: 0px;
              background-image: none;
              background-position: center;
            }
            .frame1196-otvet1 {
              width: 270px;
            }
            .frame1196-otvet2 {
              width: 270px;
            }
            .frame1196-otvet3 {
              width: 270px;
            }
            .frame1196-otvet4 {
              width: 270px;
            }
            .frame1196-otvet5 {
              width: 270px;
            }
            .frame1196-icon348 {
              left: 12px;
              bottom: -3px;
            }
            .frame1196-container224 {
              gap: var(--dl-layout-space-unit);
              flex-direction: column;
            }
            .frame1196-icon350 {
              display: none;
            }
            .frame1196-text249 {
              color: var(--dl-color-theme-neutral-dark);
              font-family: Spectral SC;
            }
            .frame1196-container225 {
              margin-top: var(--dl-layout-space-threeunits);
              padding-left: 43px;
              padding-right: 28px;
            }
            .frame1196-text250 {
              font-size: 19;
            }
            .frame1196-text274 {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-style: italic;
              font-family: Spectral;
              font-weight: 600;
              line-height: normal;
              text-decoration: none;
            }
            .frame1196-container228 {
              align-items: center;
              justify-content: center;
            }
            .frame1196-frame10721 {
              max-width: 347px;
            }
            .frame1196-frame10722 {
              max-width: 347px;
            }
            .frame1196-frame10723 {
              max-width: 347px;
            }
            .frame1196-container229 {
              height: 100%;
              min-height: auto;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .frame1196-container236 {
              width: auto;
              height: auto;
              max-width: auto;
              min-height: auto;
            }
          }
          @media (max-width: 479px) {
            .frame1196-container101 {
              height: 100%;
              min-height: 100px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: 15px;
              justify-content: space-between;
            }
            .frame1196-container103 {
              gap: var(--dl-layout-space-halfunit);
              width: 89px;
              height: 49px;
              padding-top: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
              justify-content: center;
              background-color: transparent;
            }
            .frame1196-text100 {
              width: 85px;
              font-size: 17px;
              font-style: normal;
              text-align: center;
              font-family: Spectral;
              font-weight: 500;
            }
            .frame1196-image10 {
              top: -157px;
              left: 0px;
              right: 0px;
              width: 159px;
              height: 155px;
              margin: auto;
              display: none;
              position: absolute;
              justify-content: center;
            }
            .frame1196-container104 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              max-width: 95px;
              padding-left: 0px;
              justify-content: center;
            }
            .frame1196-image11 {
              width: 28px;
              height: 26px;
            }
            .frame1196-image12 {
              width: 30px;
              height: 30px;
            }
            .frame1196-container111 {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
              height: 100%;
              min-height: 750px;
              padding-top: 68px;
              padding-bottom: 0px;
              background-size: cover;
              background-image: noone;
              background-position: center;
            }
            .frame1196-container112 {
              gap: var(--dl-layout-space-oneandhalfunits);
              position: relative;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text108 {
              color: #000000;
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-image14 {
              top: -161px;
              left: 0px;
              right: 0px;
              width: 141px;
              height: 141px;
              margin: auto;
              display: flex;
              position: absolute;
              padding-top: 0px;
              justify-content: center;
            }
            .frame1196-button1 {
              max-width: 320px;
              max-height: 60px;
              min-height: 60px;
            }
            .frame1196-cards {
              width: 100%;
              padding-top: var(--dl-layout-space-twounits);
              border-color: rgba(25, 24, 24, 0.54);
              border-width: 1px;
              padding-bottom: var(--dl-layout-space-twounits);
              background-color: #fafaed;
            }
            .frame1196-container113 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container114 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container115 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container116 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container117 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container118 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container119 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container120 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container121 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container122 {
              width: 100%;
              max-width: 151px;
              min-width: 151px;
              box-shadow: none;
            }
            .frame1196-container123 {
              width: 100%;
              height: 100%;
              padding-bottom: 0px;
              background-image: url('/backgrounds/dada.png');
              background-size: cover;
              background-repeat: no-repeat;
              background-position: right center;
            }
            .frame1196-text122 {
              color: rgb(55, 55, 55);
              font-size: 15px;
              margin-top: var(--dl-layout-space-twounits);
              font-family: Noto Serif SC;
              font-weight: 400;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .frame1196-text123 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text124 {
              color: #87ceeb;
              font-style: normal;
              font-weight: 600;
            }
            .frame1196-text125 {
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-text126 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text127 {
              text-decoration: none;
            }
            .frame1196-text128 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text129 {
              text-decoration: none;
            }
            .frame1196-text130 {
              font-style: normal;
              font-weight: 400;
              text-decoration: none;
            }
            .frame1196-text131 {
              color: #87ceeb;
              font-style: normal;
              font-weight: 600;
              text-decoration: underline;
            }
            .frame1196-text132 {
              font-style: normal;
              text-decoration: none;
            }
            .frame1196-container124 {
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
            .frame1196-container125 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .frame1196-container126 {
              gap: var(--dl-layout-space-unit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-text133 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              font-style: normal;
              text-align: left;
              font-weight: 500;
              letter-spacing: 0.3px;
            }
            .frame1196-icon136 {
              width: 123px;
            }
            .frame1196-text134 {
              font-size: 14px;
            }
            .frame1196-image25 {
              width: auto;
              height: auto;
              max-width: 58px;
              max-height: 61px;
            }
            .frame1196-container127 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              align-items: center;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: 12px;
              justify-content: center;
            }
            .frame1196-container128 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-text135 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              text-align: left;
              letter-spacing: 0.3px;
            }
            .frame1196-icon142 {
              width: 123px;
              padding-left: 2px;
            }
            .frame1196-text136 {
              font-size: 14px;
            }
            .frame1196-image26 {
              width: auto;
              height: auto;
              max-width: 58px;
              align-self: center;
              max-height: 58px;
            }
            .frame1196-container129 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: 4px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .frame1196-container130 {
              gap: var(--dl-layout-space-unit);
              padding-top: 0px;
            }
            .frame1196-text137 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              text-align: left;
              letter-spacing: 0.3px;
            }
            .frame1196-icon148 {
              width: 123px;
            }
            .frame1196-text138 {
              fill: rgba(25, 24, 24, 0.9);
              color: rgba(25, 24, 24, 0.9);
              font-size: 14px;
              max-width: 170px;
              min-width: auto;
            }
            .frame1196-image27 {
              width: 60px;
              height: 52px;
            }
            .frame1196-container131 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .frame1196-container132 {
              height: auto;
              max-width: 290px;
              min-width: 290px;
              min-height: auto;
              padding-top: 0px;
              padding-left: 0px;
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .frame1196-blue1 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              border-color: #191818;
              border-style: dashed;
              border-width: 0.75px;
              padding-left: 4px;
              padding-right: 6px;
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0.5px;
            }
            .frame1196-container133 {
              gap: 5px;
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .frame1196-container134 {
              display: flex;
              align-self: center;
            }
            .frame1196-text140 {
              width: 100%;
              height: 100%;
              font-size: 15px;
              text-align: center;
            }
            .frame1196-text141 {
              width: 100%;
              font-size: 15px;
              font-family: Noto Serif SC;
              font-weight: 400;
              overflow-wrap: break-word;
            }
            .frame1196-text142 {
              font-style: normal;
            }
            .frame1196-text143 {
              font-style: inherit;
              font-weight: 400;
            }
            .frame1196-text144 {
              font-style: normal;
            }
            .frame1196-container135 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .frame1196-text145 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              width: 100%;
              height: 100%;
              display: flex;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Noto Serif SC;
              font-weight: 600;
              justify-content: center;
            }
            .frame1196-icon162 {
              width: 60px;
              display: flex;
              max-height: 2px;
            }
            .frame1196-container136 {
              max-width: var(--dl-layout-size-medium);
            }
            .frame1196-text146 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
              max-width: 150px;
              text-align: center;
              align-items: center;
              font-family: Noto Serif SC;
              justify-content: center;
              text-decoration: underline none;
            }
            .frame1196-blue2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              border-color: #191818;
              border-style: dashed;
              border-width: 0.75px;
              padding-left: 4px;
              padding-right: 6px;
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0.5px;
            }
            .frame1196-container137 {
              gap: 5px;
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .frame1196-container138 {
              display: flex;
              align-self: center;
            }
            .frame1196-text147 {
              width: 100%;
              height: 100%;
              font-size: 15px;
              text-align: center;
            }
            .frame1196-text148 {
              width: 100%;
              font-size: 15px;
              font-style: normal;
              font-family: Noto Serif SC;
              font-weight: 400;
              overflow-wrap: break-word;
            }
            .frame1196-container139 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .frame1196-text149 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              width: 100%;
              height: 100%;
              display: flex;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Noto Serif SC;
              font-weight: 600;
              justify-content: center;
            }
            .frame1196-icon168 {
              width: 60px;
              display: flex;
              max-height: 2px;
            }
            .frame1196-container140 {
              max-width: var(--dl-layout-size-medium);
            }
            .frame1196-text150 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
              max-width: 150px;
              text-align: center;
              align-items: center;
              font-family: Noto Serif SC;
              justify-content: center;
              text-decoration: underline none;
            }
            .frame1196-blue3 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              border-color: #191818;
              border-style: dashed;
              border-width: 0.75px;
              padding-left: 4px;
              padding-right: 6px;
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0.5px;
            }
            .frame1196-container141 {
              gap: 5px;
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .frame1196-container142 {
              display: flex;
              align-self: center;
            }
            .frame1196-text151 {
              width: 100%;
              height: 100%;
              font-size: 15px;
              text-align: center;
            }
            .frame1196-text152 {
              width: 100%;
              font-size: 15px;
              font-style: normal;
              font-family: Noto Serif SC;
              font-weight: 400;
              overflow-wrap: break-word;
            }
            .frame1196-container143 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .frame1196-text153 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              width: 100%;
              height: 100%;
              display: flex;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Noto Serif SC;
              font-weight: 400;
              justify-content: center;
            }
            .frame1196-icon174 {
              width: 60px;
              display: flex;
              max-height: 2px;
            }
            .frame1196-container144 {
              max-width: var(--dl-layout-size-medium);
            }
            .frame1196-text154 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
              max-width: 150px;
              text-align: center;
              align-items: center;
              font-family: Noto Serif SC;
              justify-content: center;
              text-decoration: underline none;
            }
            .frame1196-blue4 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              padding-left: 4px;
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: 6px;
              justify-content: center;
            }
            .frame1196-container145 {
              gap: 5px;
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .frame1196-container146 {
              display: flex;
              align-self: center;
            }
            .frame1196-text211 {
              width: 100%;
              height: 100%;
              text-align: center;
            }
            .frame1196-text212 {
              font-size: 15px;
            }
            .frame1196-container147 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .frame1196-text213 {
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-icon180 {
              width: 60px;
              height: 2px;
              display: flex;
            }
            .frame1196-container148 {
              max-width: var(--dl-layout-size-medium);
            }
            .frame1196-text214 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
            }
            .frame1196-icon186 {
              left: -14px;
              bottom: -22px;
            }
            .frame1196-icon188 {
              right: -14px;
              bottom: -22px;
            }
            .frame1196-icon190 {
              top: -19px;
              right: -14px;
            }
            .frame1196-icon192 {
              top: -19px;
              left: -14px;
            }
            .frame1196-icon194 {
              top: -11px;
              right: -1px;
            }
            .frame1196-icon196 {
              left: 0px;
              bottom: -15px;
            }
            .frame1196-icon198 {
              right: -11px;
              bottom: -3px;
              height: 100%;
            }
            .frame1196-icon200 {
              left: -11px;
              bottom: -2px;
            }
            .frame1196-remont-vsehmar {
              gap: 0;
              width: 100%;
              height: 100%;
              margin-bottom: 68px;
              background-size: cover;
              background-position: bottom right;
            }
            .frame1196-remont-vseh-marok {
              width: 225px;
              height: 65px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .frame1196-text215 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #ffffff;
              font-size: 20px;
            }
            .frame1196-container159 {
              height: 100%;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-text216 {
              fill: #faf8f6;
              color: #ffffff;
              font-size: 20px;
              font-family: Noto Serif SC;
            }
            .frame1196-container160 {
              gap: 0;
              width: 100%;
              max-width: 300px;
              min-width: 300px;
              padding-left: 0px;
              margin-bottom: 91px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .frame1196-container161 {
              height: 65px;
              margin-top: var(--dl-layout-space-oneandhalfunits);
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .frame1196-text217 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #ffffff;
              font-size: 20px;
            }
            .frame1196-container162 {
              width: 100%;
            }
            .frame1196-container163 {
              width: 290px;
              max-height: 180px;
              padding-top: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .frame1196-icon202 {
              right: -12px;
              bottom: -12px;
            }
            .frame1196-icon204 {
              top: -12px;
              right: -12px;
            }
            .frame1196-icon206 {
              top: -12px;
              left: -12px;
            }
            .frame1196-icon208 {
              left: -12px;
              bottom: -12px;
            }
            .frame1196-container164 {
              gap: var(--dl-layout-space-unit);
              width: 269px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-container166 {
              padding-left: 0px;
            }
            .frame1196-text218 {
              font-size: 14px;
              text-align: left;
            }
            .frame1196-icon210 {
              height: 0.8px;
            }
            .frame1196-image53 {
              width: 50px;
              height: 43px;
              padding-top: 0px;
              margin-bottom: 0px;
            }
            .frame1196-text219 {
              font-size: 14px;
            }
            .frame1196-icon220 {
              top: -10px;
              right: -2px;
              height: 5px;
            }
            .frame1196-icon222 {
              right: -1px;
              bottom: -11px;
            }
            .frame1196-container167 {
              width: 290px;
              max-height: 180px;
              padding-top: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .frame1196-icon224 {
              right: -12px;
              bottom: -12px;
            }
            .frame1196-icon226 {
              top: -12px;
              right: -12px;
            }
            .frame1196-icon228 {
              top: -12px;
              left: -12px;
            }
            .frame1196-icon230 {
              left: -12px;
              bottom: -12px;
            }
            .frame1196-container168 {
              gap: var(--dl-layout-space-unit);
              width: 269px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-container169 {
              gap: var(--dl-layout-space-unit);
            }
            .frame1196-container170 {
              padding-left: 0px;
            }
            .frame1196-text220 {
              font-size: 14px;
              text-align: left;
            }
            .frame1196-icon232 {
              height: 0.8px;
            }
            .frame1196-image54 {
              width: 60px;
              height: 36px;
              padding-top: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
            }
            .frame1196-text221 {
              font-size: 14px;
            }
            .frame1196-icon242 {
              top: -10px;
              right: -2px;
              height: 5px;
            }
            .frame1196-icon244 {
              right: -1px;
              bottom: -11px;
            }
            .frame1196-container171 {
              width: 290px;
              max-height: 180px;
              padding-top: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .frame1196-icon246 {
              right: -12px;
              bottom: -12px;
            }
            .frame1196-icon248 {
              top: -12px;
              right: -12px;
            }
            .frame1196-icon250 {
              top: -12px;
              left: -12px;
            }
            .frame1196-icon252 {
              left: -12px;
              bottom: -12px;
            }
            .frame1196-container172 {
              gap: var(--dl-layout-space-unit);
              width: 269px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-container174 {
              padding-left: 0px;
            }
            .frame1196-text222 {
              font-size: 14px;
              text-align: left;
            }
            .frame1196-icon254 {
              height: 0.8px;
            }
            .frame1196-image55 {
              width: 47px;
              height: 43px;
              padding-top: 0px;
              margin-bottom: 0px;
            }
            .frame1196-text223 {
              font-size: 14px;
            }
            .frame1196-icon264 {
              top: -10px;
              right: -2px;
              height: 5px;
            }
            .frame1196-icon266 {
              right: -1px;
              bottom: -11px;
            }
            .frame1196-container175 {
              width: 290px;
              max-height: 180px;
              padding-top: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .frame1196-icon268 {
              right: -12px;
              bottom: -12px;
            }
            .frame1196-icon270 {
              top: -12px;
              right: -12px;
            }
            .frame1196-icon272 {
              top: -12px;
              left: -12px;
            }
            .frame1196-icon274 {
              left: -12px;
              bottom: -12px;
            }
            .frame1196-container176 {
              gap: var(--dl-layout-space-unit);
              width: 269px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-container178 {
              padding-left: 0px;
            }
            .frame1196-text224 {
              font-size: 14px;
              text-align: left;
            }
            .frame1196-icon276 {
              height: 0.8px;
            }
            .frame1196-image56 {
              width: 46px;
              height: 52px;
              padding-top: 0px;
              margin-bottom: 0px;
            }
            .frame1196-text225 {
              font-size: 14px;
            }
            .frame1196-icon286 {
              top: -10px;
              right: -2px;
              height: 5px;
            }
            .frame1196-icon288 {
              right: -1px;
              bottom: -11px;
            }
            .frame1196-container179 {
              width: 290px;
              max-height: 180px;
              padding-top: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .frame1196-icon290 {
              right: -12px;
              bottom: -12px;
            }
            .frame1196-icon292 {
              top: -12px;
              right: -12px;
            }
            .frame1196-icon294 {
              top: -12px;
              left: -12px;
            }
            .frame1196-icon296 {
              left: -12px;
              bottom: -12px;
            }
            .frame1196-container180 {
              gap: var(--dl-layout-space-unit);
              width: 269px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .frame1196-container182 {
              min-height: auto;
              padding-left: 0px;
            }
            .frame1196-text226 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              align-self: center;
              font-style: normal;
              text-align: left;
              font-family: Noto Serif SC;
              font-weight: 600;
              letter-spacing: 0.3px;
            }
            .frame1196-image57 {
              width: 55px;
              height: 56px;
              padding-top: 0px;
              margin-bottom: 0px;
            }
            .frame1196-text227 {
              font-size: 14px;
            }
            .frame1196-icon308 {
              top: -10px;
              right: -2px;
              height: 5px;
            }
            .frame1196-icon310 {
              right: -1px;
              bottom: -11px;
            }
            .frame1196-container183 {
              height: 65px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .frame1196-text228 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #ffffff;
              font-size: 20px;
            }
            .frame1196-container184 {
              height: auto;
              max-width: 290px;
              min-width: 290px;
              min-height: auto;
              padding-top: 0px;
              padding-left: 0px;
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .frame1196-icon312 {
              left: -11px;
              bottom: -20px;
            }
            .frame1196-icon314 {
              right: -11px;
              bottom: -20px;
            }
            .frame1196-icon316 {
              top: -19px;
              right: -11px;
            }
            .frame1196-icon318 {
              top: -19px;
              left: -11px;
              width: 9px;
              height: auto;
            }
            .frame1196-icon320 {
              top: -12px;
              left: 0px;
            }
            .frame1196-icon322 {
              left: 0px;
              bottom: -13px;
            }
            .frame1196-icon324 {
              right: -9px;
              bottom: -2px;
              height: 100%;
            }
            .frame1196-icon326 {
              left: -9px;
              bottom: -2px;
            }
            .frame1196-nashi-raboti {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: var(--dl-layout-size-xxlarge);
              height: 100%;
              position: static;
              min-width: var(--dl-layout-size-xlarge);
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              min-height: auto;
              overflow-x: auto;
              flex-direction: row;
              justify-content: flex-start;
              scroll-behavior: smooth;
              scrollbar-width: none;
              scroll-snap-type: x mandatory;
            }
            .frame1196-container185 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
            }
            .frame1196-text229 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container187 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
              background-position: top left;
            }
            .frame1196-text230 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container189 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
            }
            .frame1196-text231 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container191 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
              background-position: center;
            }
            .frame1196-text232 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container193 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
              background-position: bottom;
            }
            .frame1196-text233 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .frame1196-container195 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
              background-position: center;
            }
            .frame1196-text234 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container197 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
            }
            .frame1196-text235 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container199 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
            }
            .frame1196-text236 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container201 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
            }
            .frame1196-text237 {
              font-size: 14px;
              font-style: normal;
              font-family: Nunito;
              font-weight: 400;
            }
            .frame1196-container206 {
              margin-top: 28px;
            }
            .frame1196-container207 {
              height: 65px;
              margin-top: var(--dl-layout-space-oneandhalfunits);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .frame1196-text238 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #ffffff;
              font-size: 20px;
            }
            .frame1196-icon332 {
              width: 284px;
              height: 82px;
              max-width: 100%;
            }
            .frame1196-container211 {
              width: auto;
              height: auto;
              border-width: 0.5px;
            }
            .frame1196-otvet1 {
              width: 270px;
            }
            .frame1196-text240 {
              text-align: left;
            }
            .frame1196-container214 {
              width: auto;
              height: auto;
              border-width: 0.5px;
            }
            .frame1196-otvet2 {
              width: 270px;
            }
            .frame1196-text242 {
              text-align: left;
            }
            .frame1196-container216 {
              align-items: center;
            }
            .frame1196-container217 {
              width: auto;
              height: auto;
              border-width: 0.5px;
            }
            .frame1196-text243 {
              text-align: left;
            }
            .frame1196-otvet3 {
              width: 270px;
            }
            .frame1196-text244 {
              text-align: left;
            }
            .frame1196-container220 {
              width: auto;
              height: auto;
              border-width: 0.5px;
            }
            .frame1196-otvet4 {
              width: 270px;
            }
            .frame1196-container223 {
              width: auto;
              height: auto;
              border-width: 0.5px;
              background-color: i;
            }
            .frame1196-otvet5 {
              width: 270px;
            }
            .frame1196-icon348 {
              left: 12px;
              bottom: -4px;
            }
            .frame1196-container224 {
              gap: 0;
              margin-top: 0px;
              flex-direction: column;
            }
            .frame1196-korotkayya {
              height: 68px;
            }
            .frame1196-text249 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              font-style: italic;
              font-family: Spectral SC;
              font-weight: 500;
              text-decoration: none;
            }
            .frame1196-button3 {
              width: 254px;
            }
            .frame1196-container225 {
              width: 100%;
              height: 100%;
              margin-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .frame1196-container227 {
              height: 65px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-bottom: var(--dl-layout-space-threeunits);
              background-color: #58c3e8;
            }
            .frame1196-text274 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #ffffff;
              font-size: 20px;
            }
            .frame1196-frame10721 {
              max-width: 290px;
              max-height: 100%;
              min-height: auto;
              background-color: rgba(253, 253, 242, 0.69);
            }
            .frame1196-text276 {
              color: rgb(35, 35, 35);
              font-size: 13.5px;
              font-style: normal;
              font-family: IBM Plex Serif;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .frame1196-frame10722 {
              max-width: 290px;
              max-height: 100%;
              min-height: auto;
              background-color: rgba(253, 253, 242, 0.69);
            }
            .frame1196-text278 {
              color: rgb(35, 35, 35);
              font-size: 13.5px;
              font-style: normal;
              font-family: IBM Plex Serif;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .frame1196-frame10723 {
              max-width: 290px;
              max-height: 100%;
              min-height: auto;
              background-color: rgba(253, 253, 242, 0.69);
            }
            .frame1196-text280 {
              color: rgb(35, 35, 35);
              font-size: 13.5px;
              font-style: normal;
              font-family: IBM Plex Serif;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .frame1196-button4 {
              font-size: 14px;
            }
            .frame1196-container229 {
              flex-wrap: wrap;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .frame1196-container230 {
              gap: var(--dl-layout-space-twounits);
            }
            .frame1196-container231 {
              width: 100%;
              height: 100%;
              max-width: 400px;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .frame1196-text281 {
              font-size: 16px;
              align-self: flex-start;
            }
            .frame1196-container232 {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .frame1196-container233 {
              align-self: flex-start;
              align-items: center;
              justify-content: center;
            }
            .frame1196-text282 {
              font-size: 13px;
            }
            .frame1196-text283 {
              font-size: 13px;
            }
            .frame1196-container234 {
              width: 100%;
              height: 100%;
            }
            .frame1196-text284 {
              width: 100%;
              height: 100%;
              font-size: 13px;
              align-self: center;
              text-align: left;
            }
            .frame1196-text285 {
              width: 100%;
              height: 100%;
              font-size: 13px;
              align-self: center;
            }
            .frame1196-text286 {
              font-size: 13px;
              align-self: flex-start;
              text-align: left;
            }
            .frame1196-icon403 {
              align-self: flex-start;
            }
            .frame1196-container236 {
              width: 100%;
              height: 100%;
              max-width: var(--dl-layout-size-xxlarge);
            }
            .frame1196-text287 {
              font-size: 16px;
            }
            .frame1196-button5 {
              min-height: 50px;
            }
            .frame1196-container238 {
              gap: var(--dl-layout-space-oneandhalfunits);
              margin-top: 0px;
            }
            .frame1196-text288 {
              fill: #87ceeb;
              color: #87ceeb;
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-text289 {
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-text290 {
              font-style: normal;
              font-weight: 400;
            }
            .frame1196-text291 {
              max-width: 300px;
              min-width: auto;
              margin-top: 0px;
            }
          }


          /* Стили для ссылок-карточ��к */
          .frame1196-container113,
          .frame1196-container114,
          .frame1196-container115,
          .frame1196-container116,
          .frame1196-container117,
          .frame1196-container118,
          .frame1196-container119,
          .frame1196-container120,
          .frame1196-container121,
          .frame1196-container122 {
            text-decoration: none;
            color: inherit;
            transition: transform 0.2s linear, box-shadow 0.2s linear;
          }

          .frame1196-container113:hover,
          .frame1196-container114:hover,
          .frame1196-container115:hover,
          .frame1196-container116:hover,
          .frame1196-container117:hover,
          .frame1196-container118:hover,
          .frame1196-container119:hover,
          .frame1196-container120:hover,
          .frame1196-container121:hover,
          .frame1196-container122:hover {
            transform: translateY(-2px);
            box-shadow: 0px 4px 15px 0px rgba(175, 160, 115, 0.4);
          }

          /* Анимация разворачивания из центра для ответов FAQ */
          .frame1196-otvet1,
          .frame1196-otvet2,
          .frame1196-otvet3,
          .frame1196-otvet4,
          .frame1196-otvet5 {
            display: flex !important;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transform: scale(0);
            transform-origin: center top;
            margin-bottom: 10px;
            transition: max-height 0.48s linear,
                       opacity 0.32s linear 0.16s,
                       transform 0.48s ease-out,
                       padding 0.48s linear;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          /* Показывать активные от��еты с эффектом развор��чивания */
          .frame1196-otvet1.faq-active,
          .frame1196-otvet2.faq-active,
          .frame1196-otvet3.faq-active,
          .frame1196-otvet4.faq-active,
          .frame1196-otvet5.faq-active {
            max-height: 500px;
            opacity: 1;
            transform: scale(1);
            padding: var(--dl-layout-space-unit) !important;
          }


          /* Линейная анимация для иконок */
          .frame1196-icon338,
          .frame1196-icon340,
          .frame1196-icon342,
          .frame1196-icon344,
          .frame1196-icon346 {
            transition: transform 0.4s linear !important;
          }
        `}
      </style>
    </>
  )
}

export default Frame1196
