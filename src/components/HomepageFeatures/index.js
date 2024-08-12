import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// 功能列表
const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: '指令简洁明了、一目了然，有众多社区资源',
  },
  {
    title: '沉心出勤',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: '大家只需要沉心出勤，剩下的都交给 迪拉熊 BOT 吧',
  },
  {
    title: '强力支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: '使用了 Nonebot 及 TRSS-Yunzai 等众多项目进行搭建',
  },
];

// 功能组件
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// 主页功能展示组件
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

