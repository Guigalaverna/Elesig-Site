import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import HomeBackground from "../components/HomeBackground";
import { ReactNode, useEffect, useState } from "react";

interface BackgroundProps {
  children: ReactNode;
}

function BackgroundMobile({ children }: BackgroundProps) {
  return (
    <>
      <svg
        className={styles.homeBackground}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 428 604"
      >
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
              strokeWidth="1"
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
            <stop offset="0" stopColor="#b056ff" />
            <stop offset="1" stopColor="#6452de" />
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

function BackgroundDesktop({ children }: BackgroundProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1676"
        height="1040"
        viewBox="0 0 1676 1040"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Retângulo_13"
              data-name="Retângulo 13"
              width="1676"
              height="1040"
              transform="translate(-259 -1242)"
              fill="#fff"
              stroke="#707070"
              stroke-width="1"
            />
          </clipPath>
          <clipPath id="clip-path-2">
            <rect
              id="Retângulo_12"
              data-name="Retângulo 12"
              width="1670"
              height="981"
              transform="translate(97 -1242)"
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
          id="Grupo_de_máscara_5"
          data-name="Grupo de máscara 5"
          transform="translate(259 1242)"
          clip-path="url(#clip-path)"
        >
          <g
            id="Grupo_de_máscara_4"
            data-name="Grupo de máscara 4"
            clip-path="url(#clip-path-2)"
          >
            <path
              id="Caminho_60"
              data-name="Caminho 60"
              d="M713.35,30.762s52.508,255.758,395.877,343.95,151.931,210.956,181.889,323.313,130.532,80.255,188.309,165.1,132.672,116.943,213.988,68.79,134.812-144.459,74.9-295.8,77.036-341.657,293.163-188.026,348.8-905.736-620.564-678.729S713.35,30.762,713.35,30.762Z"
              transform="translate(-575.464 -1272.795)"
              fill="url(#linear-gradient)"
            />
          </g>
        </g>
      </svg>
      {children}
    </>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <section className={styles.homeContainer}>
      <Navbar />
      {isLoaded ? (
        <>
          {window.innerWidth <= 800 ? (
            <BackgroundMobile>
              <section className={styles.homeContent}>
                <HomeBackground />
                <div>
                  <h1 className={styles.homeTitle}>
                    <span>A ajuda que sua empresa </span>
                    <span style={{ color: "#6452DE" }}>precisa</span>
                  </h1>
                  <p>
                    Donec ut tristique purus. Donec commodo nisi quis neque
                    malesuada facilisis. Nunc nec venenatis arcu. Maecenas id
                    tristique purus. Donec in velit sit amet arcu congue
                    viverra. Vestibulum varius pharetra cursus. Nullam arcu
                    mauris, suscipit at tempus non, ornare vel nisi.
                  </p>
                  <button>COMEÇAR</button>
                </div>
              </section>
            </BackgroundMobile>
          ) : (
            <BackgroundDesktop>
              <section className={styles.homeContent}>
                <HomeBackground />
                <div>
                  <h1 className={styles.homeTitle}>
                    <span>A ajuda que sua empresa </span>
                    <span style={{ color: "#6452DE" }}>precisa</span>
                  </h1>
                  <p>
                    Donec ut tristique purus. Donec commodo nisi quis neque
                    malesuada facilisis. Nunc nec venenatis arcu. Maecenas id
                    tristique purus. Donec in velit sit amet arcu congue
                    viverra. Vestibulum varius pharetra cursus. Nullam arcu
                    mauris, suscipit at tempus non, ornare vel nisi.
                  </p>
                  <button>COMEÇAR</button>
                </div>
              </section>
            </BackgroundDesktop>
          )}
        </>
      ) : null}
    </section>
  );
}
