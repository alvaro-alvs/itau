'use client'
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Chart from "./components/chart"

export default function Home() {

  return (
    <>
      <h1 className="text-2xl text-center mt-28">Itau Unibanco</h1>
      <div className="w-50 mx-auto ">
        <Chart />
      </div>
    </>
  )
}