import { Rocket, Settings } from "lucide-react";
import { ReactNode } from "react";
import { NavLink } from "react-router";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      <h1 className="pb-8 text-6xl font-medium font-mono">FIND TWINS</h1>
      <Link to="/game" className="text-red-400" icon={<Rocket />}>
        Старт
      </Link>
      <Link to="/settings" icon={<Settings />}>
        Настройки игры
      </Link>
    </div>
  );
}

function Link(props: {
  to: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <NavLink
      to={props.to}
      className={"flex gap-2 text-3xl items-center " + props.className}
    >
      {props.icon} {props.children}
    </NavLink>
  );
}
