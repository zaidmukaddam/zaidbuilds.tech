import Image from "next/image";

import { Link } from "components/mdx/link/Link";
import { normalizeViewsCount } from "utils/normalizeViewsCount";

import styles from "./hero.module.scss";

export const Hero = ({ views }: { views: number }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h2 className={styles.title}>Hi, I'm Zaid Mukaddam&nbsp;👋</h2>
        <p className={styles.description}>
          <span className={styles.paragraph}>
            I'm a 20 year old software engineer based in India. I'm passionate about building modern software that
            helps others (including me) to improve their lives. I started my blogging adventure by publishing
            posts right here on this website and now I'm here with{" "}
            <strong>{normalizeViewsCount(views)}</strong> posts views.
          </span>
          <span className={styles.paragraph}>
            I'm currently a student at SVKM's MPSTME and I'm working on a few side projects. I'm also a part of
            college committes such as IET and IEEE.
          </span>
          <span className={styles.paragraph}>
            I love talking to interesting people, in my free time I also like to just read tech articles, watch tech videos and binge watch TV shows like The Big Bang Theory.
          </span>
          <span className={styles.paragraph}>
            Sounds interesting? Feel free to <Link href="/contact">contact me!</Link>
          </span>
        </p>
      </div>

      <div className={styles.image}>
        <Image src="/img/me.jpg" width="393" height="571" alt="" />
      </div>
    </section>
  );
};
