import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import HomeBackground from "../components/HomeBackground";
import { ReactNode } from "react";

/**
 * TODO: Create Navigation Bar
 * TODO: Use React Smooth Scroll to scrol
 */

interface BackgroundDesktopProps {
  children: ReactNode;
}

function BackgroundDesktop({ children }: BackgroundDesktopProps) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428 604">
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Retângulo_14"
              data-name="Retângulo 14"
              width="428"
              height="604"
              transform="translate(-1905 1102)"
              fill="#fff"
              stroke="#707070"
              stroke-width="1"
            />
          </clipPath>
          <linearGradient
            id="linear-gradient"
            x1="0.851"
            y1="0.216"
            x2="0.399"
            y2="0.91"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#b056ff" />
            <stop offset="1" stop-color="#6452de" />
          </linearGradient>
        </defs>
        <g
          id="Grupo_de_máscara_6"
          data-name="Grupo de máscara 6"
          transform="translate(1905 -1102)"
          clip-path="url(#clip-path)"
        >
          <path
            id="Caminho_61"
            data-name="Caminho 61"
            d="M702.2-93.888S774.97,83.377,915.374,137.979,1022.012,225.3,1039.5,289.923s76.2,46.163,109.935,94.964,77.454,67.266,124.926,39.568,78.7-83.093,43.724-170.143,44.973-196.522,171.148-108.153,203.63-520.981-362.285-390.406S702.2-93.888,702.2-93.888Z"
            transform="translate(-2751.214 1268.617)"
            fill="url(#linear-gradient)"
          />
        </g>
      </svg>
      {children}
    </>
  );
}

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <Navbar />
      <BackgroundDesktop>
        <section className={styles.homeContent}>
          <HomeBackground />
          <div>
            <h1 className={styles.homeTitle}>
              <span>A ajuda que sua empresa </span>
              <span style={{ color: "#6452DE" }}>precisa</span>
            </h1>
            <p>
              Donec ut tristique purus. Donec commodo nisi quis neque malesuada
              facilisis. Nunc nec venenatis arcu. Maecenas id tristique purus.
              Donec in velit sit amet arcu congue viverra. Vestibulum varius
              pharetra cursus. Nullam arcu mauris, suscipit at tempus non,
              ornare vel nisi.
            </p>
            <button>COMEÇAR</button>
          </div>
        </section>
      </BackgroundDesktop>
    </section>
  );
}
