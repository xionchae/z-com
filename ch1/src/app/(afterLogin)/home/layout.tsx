//  root layout의 children에 -> home layout의 children에  -> home page
import {ReactNode} from "react";

export default async function HomeLayout({children}: { children: ReactNode }) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}