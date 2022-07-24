import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function Movie() {
  const { id } = useParams();

  return (
    <h1>Acessando filme {id}</h1>
  )
}