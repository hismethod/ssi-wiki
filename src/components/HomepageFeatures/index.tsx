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
    title: "What is DCI?",
    Img: require("@site/static/img/section1.webp").default,
    description: <>Explore the core of Decentralized Identity, its role in enhancing digital autonomy, and its foundation for privacy and security.</>,
  },
  {
    title: "The Technology",
    Img: require("@site/static/img/section2.webp").default,
    description: <>Dive into the mechanics of DID and VC, understanding the technical pillars that support DI's secure framework.</>,
  },
  {
    title: "DCI in Action",
    Img: require("@site/static/img/section3.webp").default,
    description: <>See DI's real-world impact, from improving security to streamlining processes, and the challenges it faces.</>,
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
