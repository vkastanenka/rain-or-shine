/**
 * Library Types
 */

import type * as CountryFlagIcons from "country-flag-icons/react/3x2";
import type * as ErikFlowersWeatherIcons from "@/assets/icons/erikflowers-weather-icons";
import type * as MeteoconFillIcons from "@/assets/icons/meteocons/fill";
import type * as MeteoconLineIcons from "@/assets/icons/meteocons/line";

import type * as AiIcons from "react-icons/ai";
import type * as BiIcons from "react-icons/bi";
import type * as BsIcons from "react-icons/bs";
import type * as CgIcons from "react-icons/cg";
import type * as CiIcons from "react-icons/ci";
import type * as DiIcons from "react-icons/di";
import type * as FaIcons from "react-icons/fa";
import type * as Fa6Icons from "react-icons/fa6";
import type * as FcIcons from "react-icons/fc";
import type * as FiIcons from "react-icons/fi";
import type * as GiIcons from "react-icons/gi";
import type * as GoIcons from "react-icons/go";
import type * as GrIcons from "react-icons/gr";
import type * as HiIcons from "react-icons/hi";
import type * as Hi2Icons from "react-icons/hi2";
import type * as ImIcons from "react-icons/im";
import type * as IoIcons from "react-icons/io";
import type * as Io5Icons from "react-icons/io5";
import type * as LiaIcons from "react-icons/lia";
import type * as LuIcons from "react-icons/lu";
import type * as MdIcons from "react-icons/md";
import type * as PiIcons from "react-icons/pi";
import type * as RiIcons from "react-icons/ri";
import type * as RxIcons from "react-icons/rx";
import type * as SiIcons from "react-icons/si";
import type * as SlIcons from "react-icons/sl";
import type * as TbIcons from "react-icons/tb";
import type * as TfiIcons from "react-icons/tfi";
import type * as TiIcons from "react-icons/ti";
import type * as VscIcons from "react-icons/vsc";
import type * as WiIcons from "react-icons/wi";

/**
 * Lazy Icons
 */

type LazyIconProps<T> = T & React.SVGAttributes<SVGElement>;

// Base

export type LazyIconBaseProps = LazyIconProps<{
  cacheKey: string;
  importFn: () => Promise<{ default: React.ComponentType<any> }>;
}>;

// Country Flag

export type CountryFlagIconName = Exclude<
  keyof typeof CountryFlagIcons,
  "default"
>;

export type LazyCountryFlagIconProps = LazyIconProps<{
  name: CountryFlagIconName;
}>;

// React Icons

type AiIconName = keyof typeof AiIcons;
type BiIconName = keyof typeof BiIcons;
type BsIconName = keyof typeof BsIcons;
type CgIconName = keyof typeof CgIcons;
type CiIconName = keyof typeof CiIcons;
type DiIconName = keyof typeof DiIcons;
type FaIconName = keyof typeof FaIcons;
type Fa6IconName = keyof typeof Fa6Icons;
type FcIconName = keyof typeof FcIcons;
type FiIconName = keyof typeof FiIcons;
type GiIconName = keyof typeof GiIcons;
type GoIconName = keyof typeof GoIcons;
type GrIconName = keyof typeof GrIcons;
type HiIconName = keyof typeof HiIcons;
type Hi2IconName = keyof typeof Hi2Icons;
type ImIconName = keyof typeof ImIcons;
type IoIconName = keyof typeof IoIcons;
type Io5IconName = keyof typeof Io5Icons;
type LiaIconName = keyof typeof LiaIcons;
type LuIconName = keyof typeof LuIcons;
type MdIconName = keyof typeof MdIcons;
type PiIconName = keyof typeof PiIcons;
type RiIconName = keyof typeof RiIcons;
type RxIconName = keyof typeof RxIcons;
type SiIconName = keyof typeof SiIcons;
type SlIconName = keyof typeof SlIcons;
type TbIconName = keyof typeof TbIcons;
type TfiIconName = keyof typeof TfiIcons;
type TiIconName = keyof typeof TiIcons;
type VscIconName = keyof typeof VscIcons;
type WiIconName = keyof typeof WiIcons;

export type ReactIconName =
  | { lib: "ai"; name: AiIconName }
  | { lib: "bi"; name: BiIconName }
  | { lib: "bs"; name: BsIconName }
  | { lib: "cg"; name: CgIconName }
  | { lib: "ci"; name: CiIconName }
  | { lib: "di"; name: DiIconName }
  | { lib: "fa"; name: FaIconName }
  | { lib: "fa6"; name: Fa6IconName }
  | { lib: "fc"; name: FcIconName }
  | { lib: "fi"; name: FiIconName }
  | { lib: "gi"; name: GiIconName }
  | { lib: "go"; name: GoIconName }
  | { lib: "gr"; name: GrIconName }
  | { lib: "hi"; name: HiIconName }
  | { lib: "hi2"; name: Hi2IconName }
  | { lib: "im"; name: ImIconName }
  | { lib: "io"; name: IoIconName }
  | { lib: "io5"; name: Io5IconName }
  | { lib: "lia"; name: LiaIconName }
  | { lib: "lu"; name: LuIconName }
  | { lib: "md"; name: MdIconName }
  | { lib: "pi"; name: PiIconName }
  | { lib: "ri"; name: RiIconName }
  | { lib: "rx"; name: RxIconName }
  | { lib: "si"; name: SiIconName }
  | { lib: "sl"; name: SlIconName }
  | { lib: "tb"; name: TbIconName }
  | { lib: "tfi"; name: TfiIconName }
  | { lib: "ti"; name: TiIconName }
  | { lib: "vsc"; name: VscIconName }
  | { lib: "wi"; name: WiIconName };

export type LazyReactIconProps = LazyIconProps<ReactIconName>;

// Erik Flowers Weather Icons

export type ErikFlowersWeatherIconName = keyof typeof ErikFlowersWeatherIcons;

export type LazyErikFlowersWeatherIconProps = LazyIconProps<{
  name: ErikFlowersWeatherIconName;
}>;

// Meteocons

export type MeteoconFillIconName = keyof typeof MeteoconFillIcons;
export type MeteoconLineIconName = keyof typeof MeteoconLineIcons;

export type MeteoconIconName =
  | { lib: "fill"; name: MeteoconFillIconName }
  | { lib: "line"; name: MeteoconLineIconName };

export type LazyMeteoconIconProps = LazyIconProps<MeteoconIconName>;
