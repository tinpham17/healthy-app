import { ReactComponent as MemoSvg } from "assets/images/icon-memo.svg"
import { ReactComponent as ChallengeSvg } from "assets/images/icon-challenge.svg"
import { ReactComponent as InfoSvg } from "assets/images/icon-info.svg"

interface Link {
  label: string
  url: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const MainLinks: Link[] = [
  {
    label: "自分の記録",
    url: "",
    icon: MemoSvg
  },
  {
    label: "チャレンジ",
    url: "",
    icon: ChallengeSvg
  },
  {
    label: "お知らせ",
    url: "",
    icon: InfoSvg
  },
]
