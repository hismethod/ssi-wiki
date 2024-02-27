import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Img: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "자기주권 신원(SSI) 이해하기",
    Img: require("@site/static/img/section1.webp").default,
    description: (
      <>SSI란 개인이 자신의 신원 정보를 직접 관리하고 통제할 수 있는 기술입니다. 중앙 집중식 서버가 아닌 개인이 직접 신원 정보를 소유하고, 필요할 때 안전하게 공유할 수 있습니다.</>
    ),
  },
  {
    title: "디지털 신원의 새로운 패러다임",
    Img: require("@site/static/img/section2.webp").default,
    description: (
      <>
        현재의 신원 관리 시스템은 해킹과 개인정보 유출의 위험에 노출되어 있습니다. SSI는 이러한 문제를 해결하고, 개인의 프라이버시와 데이터 소유권을 강화하는 혁신적인 방법입니다.
      </>
    ),
  },
  {
    title: "SSI로 시작하기",
    Img: require("@site/static/img/section3.webp").default,
    description: <>SSI에 대한 기본적인 개념부터 시작하여, 어떻게 당신의 신원을 스스로 관리하고 보호할 수 있는지 단계별로 안내합니다. 이곳은 지식의 베이스로 활용해주세요.</>,
  },
];

function Feature({ title, Img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
