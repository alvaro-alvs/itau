'use client'
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Chart from "./components/charts/itau_correntistas"
import Pre_case from "./components/pre_case"
import { useRouter } from "next/navigation"
import Correntistas_itau from "./components/charts/itau_correntistas"


export default function Home() {

  return (
    <>
      <h1 className="text-5xl font-extralight text-center mt-28">Itau Unibanco | Pre-Case</h1>
      <h2 id="subheader" className="text-center font-extralight mt-5 mb-28">#a_gente_vai_de_turma</h2>
      <div className="w-50 mx-auto ">
        <Correntistas_itau />
        <section className="w-4/5 mx-auto mt-28">
          <Pre_case />
        </section>
      </div>
    </>
  )
}