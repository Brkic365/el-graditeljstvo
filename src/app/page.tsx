"use client";

import Image from "next/image";
import styles from "@/styles/Home.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Vaš Partner za Savršene Građevinske Završnice</h1>
        <p>
          Profesionalna Preciznost i Kvaliteta u Svakom Kutku Vašeg Projekta
        </p>
        <Link href="/#kontakt">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Kontaktiraj nas
          </motion.button>
        </Link>
      </section>
      <section className={styles.about} id="o-nama">
        <section className={styles.text}>
          <h2>O NAMA</h2>
          <p>
            Dobrodošli u El Graditeljstvo - vašeg pouzdanog partnera za vrhunske
            završne građevinske radove! <br />
            <br />
            Mi smo strastveni stručnjaci u svijetu građevine, posvećeni
            stvaranju prostora koji nadmašuju očekivanja naših klijenata. El
            Graditeljstvo je postalo sinonim za izvanrednost, kvalitetu i
            pouzdanost u području završnih građevinskih radova.
            <br />
            <br /> Naša misija je jednostavna - stvarati inspirativne i
            funkcionalne prostore, jedan detalj odjednom. Bez obzira da li
            gradimo ili renoviramo, svaki projekt doživljavamo kao umjetničko
            dijelo. Radimo sa strašću, pažnjom na detalje i posvećenošću ka
            postizanju najviših standarda.
          </p>
        </section>
        <section className={styles.image}>
          <Image src="/images/4.jpg" alt="House" layout="fill" />
        </section>
      </section>
      <section className={styles.services} id="usluge">
        <section className={styles.title}>
          <h2>USLUGE</h2>
          <p>Naše Raznovrsne Građevinske Usluge</p>
        </section>
        <section className={styles.grid}>
          <section className={styles.service}>
            <p>ZAVRŠNI ENTERIJERSKI RADOVI</p>
          </section>
          <section className={styles.service}>
            <p>ZAVRŠNI EKSTERIJERSKI RADOVI</p>
          </section>
          <section className={styles.service}>
            <p>KERAMIČARSKI RADOVI</p>
          </section>
          <section className={styles.service}>
            <p>GRAĐEVINSKA RESTAURACIJA</p>
          </section>
        </section>
      </section>
      <section className={styles.gallery} id="galerija">
        <h2>GALERIJA</h2>
        <section className={styles.grid}>
          <section className={styles.image}>
            <Image src="/images/1.jpg" alt="House" layout="fill" />
          </section>
          <section className={styles.image}>
            <Image src="/images/2.jpg" alt="House" layout="fill" />
          </section>
          <section className={styles.image}>
            <Image src="/images/3.jpg" alt="House" layout="fill" />
          </section>
          <section className={styles.image}>
            <Image src="/images/4.jpg" alt="House" layout="fill" />
          </section>
          <section className={styles.image}>
            <Image src="/images/5.jpg" alt="House" layout="fill" />
          </section>
          <section className={styles.image}>
            <Image src="/images/6.jpg" alt="House" layout="fill" />
          </section>
        </section>
      </section>
      <section className={styles.contact} id="kontakt">
        <h2>KONTAKT</h2>
        <p>Pišite nam ili nas nazovite!</p>
        <h1>091 512 5709</h1>
        <p className={styles.copyright}>2023 © El Graditeljstvo</p>
      </section>
    </main>
  );
}
