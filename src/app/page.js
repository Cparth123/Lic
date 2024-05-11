"use client";
import styles from "./page.module.css";
import Chart from "./Componets/charts/Home";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const nav = useRouter();

  useEffect(() => {
    window.addEventListener("load", () => {
      nav.push("/dashboard");
    });
  }, []);
  return (
    <>
      <h1>Loding</h1>
    </>
  );
}
