import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer className="footer2-footer2 thq-section-padding">
        <div className="footer2-max-width thq-section-max-width">
          <div className="footer2-content4">
            <div className="footer2-links">
              <div className="footer2-column">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="footer2-image1"
                />
              </div>
              <div className="footer2-container1">
                <div className="footer2-column1">
                  <strong className="thq-body-large">
                    {props.column1Title ?? (
                      <Fragment>
                        <span className="footer2-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TYwyqr'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <div className="footer2-footer-links1">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link1 ?? (
                        <Fragment>
                          <span className="footer2-text24">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_MRnu8Q'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link2 ?? (
                        <Fragment>
                          <span className="footer2-text10">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AcHXWf'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link3 ?? (
                        <Fragment>
                          <span className="footer2-text14">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3YhkhR'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link4 ?? (
                        <Fragment>
                          <span className="footer2-text15">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_j29nWQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link5 ?? (
                        <Fragment>
                          <span className="footer2-text11">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_vrPWll'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                  </div>
                </div>
                <div className="footer2-column2">
                  <strong className="thq-body-large">
                    {props.column2Title ?? (
                      <Fragment>
                        <span className="footer2-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_l80yDa'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <div className="footer2-footer-links2">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link6 ?? (
                        <Fragment>
                          <span className="footer2-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_taafDJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link7 ?? (
                        <Fragment>
                          <span className="footer2-text20">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_gsKwZE'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link8 ?? (
                        <Fragment>
                          <span className="footer2-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xRngim'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link9 ?? (
                        <Fragment>
                          <span className="footer2-text13">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_hub964'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="thq-body-small"
                    >
                      {props.link10 ?? (
                        <Fragment>
                          <span className="footer2-text18">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_oyJ3dW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer2-newslatter">
              <div className="footer2-content5">
                <strong className="footer2-column3-title thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('column3Title_R9_k5K'),
                    }}
                  ></span>
                </strong>
                <span className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="footer2-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1n9wdP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="footer2-actions">
                <div className="footer2-form">
                  <div className="footer2-container2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="footer2-text-input thq-input"
                    />
                  </div>
                  <button className="thq-button-outline footer2-button">
                    <span className="thq-body-small">
                      {props.action1 ?? (
                        <Fragment>
                          <span className="footer2-text17">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XPwF-8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <span className="thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="footer2-text12">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_BIYLYQ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="footer2-credits1">
            <div className="thq-divider-horizontal"></div>
            <div className="footer2-row">
              <div className="footer2-credits2">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('content3_mLq2bO'),
                    }}
                  ></span>
                </span>
                <div className="footer2-footer-links3">
                  <span className="thq-body-small">
                    {props.privacyLink ?? (
                      <Fragment>
                        <span className="footer2-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SgHJcq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.termsLink ?? (
                      <Fragment>
                        <span className="footer2-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_3Yh2bC'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.cookiesLink ?? (
                      <Fragment>
                        <span className="footer2-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_a9FpV9'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="footer2-social-links">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer2-footer2 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer2-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-content4 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer2-links {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
          }
          .footer2-column {
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer2-image1 {
            height: 2rem;
          }
          .footer2-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .footer2-column1 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer2-footer-links1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-column2 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer2-footer-links2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-newslatter {
            gap: 24px;
            width: 500px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer2-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-column3-title {
            font-weight: 600;
          }
          .footer2-actions {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-form {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
          }
          .footer2-container2 {
            width: 365px;
            display: flex;
            align-items: flex-start;
          }
          .footer2-text-input {
            gap: 8px;
            width: 100%;
            height: 32px;
            display: flex;
            font-size: 16px;
            box-sizing: content-box;
            text-align: left;
            align-items: center;
            font-family: Roboto;
            font-weight: 400;
            background-color: transparent;
          }
          .footer2-credits1 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-row {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer2-credits2 {
            gap: 24px;
            display: flex;
            align-items: center;
          }
          .footer2-footer-links3 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer2-social-links {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .footer2-text10 {
            display: inline-block;
          }
          .footer2-text11 {
            display: inline-block;
          }
          .footer2-text12 {
            display: inline-block;
          }
          .footer2-text13 {
            display: inline-block;
          }
          .footer2-text14 {
            display: inline-block;
          }
          .footer2-text15 {
            display: inline-block;
          }
          .footer2-text16 {
            display: inline-block;
          }
          .footer2-text17 {
            display: inline-block;
          }
          .footer2-text18 {
            display: inline-block;
          }
          .footer2-text19 {
            display: inline-block;
          }
          .footer2-text20 {
            display: inline-block;
          }
          .footer2-text21 {
            display: inline-block;
          }
          .footer2-text22 {
            display: inline-block;
          }
          .footer2-text23 {
            display: inline-block;
          }
          .footer2-text24 {
            display: inline-block;
          }
          .footer2-text25 {
            display: inline-block;
          }
          .footer2-text26 {
            display: inline-block;
          }
          .footer2-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer2-content4 {
              flex-direction: column;
            }
            .footer2-links {
              gap: var(--dl-layout-space-fiveunits);
              width: 100%;
            }
            .footer2-container1 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
            }
            .footer2-newslatter {
              width: 100%;
            }
            .footer2-form {
              width: 100%;
              flex-direction: column;
            }
            .footer2-container2 {
              width: 100%;
            }
            .footer2-text-input {
              width: 100%;
              padding: var(--dl-layout-space-halfunit);
            }
            .footer2-button {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .footer2-content4 {
              flex-direction: column;
            }
            .footer2-links {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
              flex-direction: column;
            }
            .footer2-container1 {
              width: 100%;
            }
            .footer2-column1 {
              flex: 1;
              width: 100%;
              align-items: center;
            }
            .footer2-footer-links1 {
              align-self: center;
            }
            .footer2-column2 {
              flex: 1;
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .footer2-footer-links2 {
              align-self: center;
            }
            .footer2-newslatter {
              width: 100%;
            }
            .footer2-form {
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer2-container2 {
              width: 100%;
            }
            .footer2-button {
              width: 208px;
            }
            .footer2-row {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer2-credits2 {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .footer2-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer2-links {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer2-container1 {
              gap: var(--dl-layout-space-halfunit);
              flex-direction: column;
            }
            .footer2-column1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer2-footer-links1 {
              align-items: center;
              justify-content: center;
            }
            .footer2-column2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer2-footer-links2 {
              align-items: center;
              justify-content: center;
            }
            .footer2-actions {
              width: 100%;
            }
            .footer2-form {
              width: 100%;
              flex-direction: column;
            }
            .footer2-container2 {
              width: 100%;
            }
            .footer2-button {
              width: 100%;
            }
            .footer2-row {
              align-items: center;
              justify-content: center;
            }
            .footer2-credits2 {
              flex-direction: column;
            }
            .footer2-footer-links3 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer2.defaultProps = {
  link2: undefined,
  link5: undefined,
  content2: undefined,
  link9: undefined,
  link3: undefined,
  link4: undefined,
  cookiesLink: undefined,
  action1: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link10: undefined,
  logoAlt: 'Логотип Ремонт стиральних машин в Одесі',
  privacyLink: undefined,
  link7: undefined,
  link8: undefined,
  column1Title: undefined,
  content1: undefined,
  link1: undefined,
  termsLink: undefined,
  column2Title: undefined,
  link6: undefined,
}

Footer2.propTypes = {
  link2: PropTypes.element,
  link5: PropTypes.element,
  content2: PropTypes.element,
  link9: PropTypes.element,
  link3: PropTypes.element,
  link4: PropTypes.element,
  cookiesLink: PropTypes.element,
  action1: PropTypes.element,
  logoSrc: PropTypes.string,
  link10: PropTypes.element,
  logoAlt: PropTypes.string,
  privacyLink: PropTypes.element,
  link7: PropTypes.element,
  link8: PropTypes.element,
  column1Title: PropTypes.element,
  content1: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  column2Title: PropTypes.element,
  link6: PropTypes.element,
}

export default Footer2
