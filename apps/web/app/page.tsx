import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

export default function Home() {
    return (
        <div className={styles.main}>
        <h1>Dashboard</h1>

        <section className={styles.section}>
            <h2>Courses</h2>
            <ul>
            <li><Link href="/courses/1">Intro to CS</Link></li>
            <li><Link href="/courses/2">Web Dev 101</Link></li>
            </ul>
        </section>

        <section className={styles.section}>
            <h2>To-Do</h2>
            <ul>
            <li><Link href="/assignments/1">Assignment 1 – Due 9/20</Link></li>
            <li><Link href="/assignments/2">Assignment 2 – Due 10/1</Link></li>
            </ul>
        </section>

        <div>
            <Link href="/profile">Click here for Profile</Link>
        </div>
        </div>
  );
}