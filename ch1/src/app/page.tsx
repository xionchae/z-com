import styles from "./page.module.css";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Main />
      </div>
    </main>
  );
}
