"use client";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
const subscribe = () => () => {};
export function ThemeToggle() { const { resolvedTheme, setTheme } = useTheme(); const mounted = useSyncExternalStore(subscribe, () => true, () => false); return <button className="theme-toggle" aria-label="Toggle color theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>{mounted && resolvedTheme === "light" ? <Moon size={19}/> : <Sun size={19}/>}</button>; }
