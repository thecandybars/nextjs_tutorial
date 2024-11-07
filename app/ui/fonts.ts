// Optimizar fuentes importandolas con next/font
import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

// exportar el objecto como constante. Usar objeto.className para usar la fuente en el className del elemento html
// <p className={`${inter.className} txt-white`}>Cacca</p>
// https://nextjs.org/docs/basic-features/font-optimization
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ weight: "400", subsets: ["latin"] });
