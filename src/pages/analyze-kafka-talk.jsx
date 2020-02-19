import React from 'react';
import FormRegister from '../components/form-register';
import styled from 'styled-components';

import SEO from '../components/seo';
import Header from '../components/header';
import headshotdhruba from '../images/headshot-dhruba.jpg';
import styles from './index.module.css';

const HeaderBanner = styled.section`
  background: linear-gradient(
      277.26deg,
      rgba(52, 50, 124, 0.9) 0.65%,
      #6b3596 54.6%,
      #9737ab 98.37%
    ),
    url('/images/techTalkBg.png') no-repeat center center;
  color: #ffffff;
  padding: 100px 30px 50px;
  text-align: left;

  /* Tablet */
  @media (min-width: 768px) {
    padding: 158px 30px 90px;
  }

  /* Inner wrap */
  > div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    height: 330px;
    max-width: 932px;

    /* Fullscreen */
    @media (min-width: 768px) {
      flex-direction: row;
      height: 230px;
    }

    /* Heading Wrap */
    > div {
      margin: 0 30px 0 0;
    }
  }
`;

const WebsiteTitle = styled.h1`
  font-size: 32px;
  line-height: 35px;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 40px;
  }

  /* Fullscreen */
  @media (min-width: 990px) {
    font-size: 54px;
    line-height: 59px;
  }
`;

const WebsiteSubTitle = styled.p`
  color: #63bfde;
  font-size: 18px;
  font-weight: bold;
  line-height: 27px;
  margin: 0;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }

  /* Fullscreen */
  @media (min-width: 990px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Content = styled.section`
  padding: 204px 0 90px;

  @media (min-width: 768px) {
    padding: 65px 0 90px;
  }

  &,
  > div {
    width: 100%;
  }

  > div {
    margin: 0 auto;
    max-width: 932px;
    padding: 30px;
  }
`;

const ContentTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
`;

const Copy = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const CTOImg = styled.img`
  border-radius: 100%;
  float: left;
  height: 143px;
  margin: 0 18px 18px 0;
  width: 143px;
`;

const TechTalks = () => {
  return (
    <>
      <SEO
        title="Tech Talks"
        keywords={[`rockset`, `data`, `apps`]}
        description="Rockset is the real-time database in the cloud. Rockset allows you to create live dashboards and real-time data APIs on DynamoDB, Kafka, S3 and more."
      />
      <Header activePage="home" />
      <div className="techTalk">
        <HeaderBanner>
          <div>
            <div>
              <WebsiteSubTitle>Tech Talk</WebsiteSubTitle>
              <WebsiteTitle>Best practices for Analyzing Kafka Event Streams</WebsiteTitle>
            </div>
            <FormRegister />
          </div>
        </HeaderBanner>
        <Content>
          <div>
            <ContentTitle>The talk</ContentTitle>
            <Copy>
              The rapid adoption of Kafka as a streaming platform has created a growing need for
              organizations to unlock the value in their Kafka data. In this tech talk, Dhruba
              Borthakur discusses various design patterns for building analytics on Kafka event
              streams. He will review the top considerations for analytics on Kafka - including data
              latency, query performance, ease of use, and scalability - and share best practices
              when selecting an analytics stack for Kafka data.
            </Copy>
          </div>
          <div>
            <ContentTitle>About the speaker</ContentTitle>
            <div>
              <CTOImg src={headshotdhruba} alt="CTO &amp; Co-Founder Dhruba Borthakur" />
              <Copy>
                Dhruba is CTO and co-founder of Rockset. He was an engineer on the database team at
                Facebook, where he was the founding engineer of the RocksDB data store. Earlier at
                Yahoo, he was one of the founding engineers of the Hadoop Distributed File System.
              </Copy>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
};

export default TechTalks;
